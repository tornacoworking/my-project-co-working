import { prerenderToNodeStream } from 'react-dom/static'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// React 19 hoists <title>, <meta> and <link> (what react-helmet-async renders) to the very start of the output.
// They belong in <head>: left inside #root they would not match what the browser expects and hydration would fail.
const HOISTED = /^(?:\s*(?:<link\b[^>]*>|<meta\b[^>]*>|<title>[\s\S]*?<\/title>|<base\b[^>]*>))+/

// Used by scripts/prerender.mjs at build time: renders one URL to an HTML string plus its <head> tags.
// prerender waits for lazy routes and Suspense boundaries, so the HTML contains the finished page.
export async function render(url) {
  const helmetContext = {}
  const { prelude } = await prerenderToNodeStream(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
    // Never "outline" big Suspense boundaries into hidden <div id="S:0"> blocks swapped in by an inline script:
    // we want plain, inline, finished HTML that hydrates cleanly.
    { progressiveChunkSize: Number.MAX_SAFE_INTEGER },
  )

  const decoder = new TextDecoder()
  let html = ''
  for await (const chunk of prelude) html += decoder.decode(chunk, { stream: true })
  html += decoder.decode()

  let head = ''
  const hoisted = html.match(HOISTED)
  if (hoisted) {
    head = hoisted[0]
    html = html.slice(hoisted[0].length)
  }

  // Older helmet versions return their tags via the context instead of hoisting them.
  const { helmet } = helmetContext
  if (!head && helmet) {
    head = ['title', 'priority', 'meta', 'link', 'script', 'style'].map((key) => (helmet[key] ? helmet[key].toString() : '')).join('')
  }
  return { html, head }
}

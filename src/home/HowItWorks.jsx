const steps = [
  {
    title: 'Tell us your need',
    text: 'Share your city, team size and budget. It takes about a minute.',
    icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.83L3 20l1.3-3.9C3.48 14.86 3 13.47 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Get shortlisted options',
    text: 'A workspace expert sends verified spaces with transparent prices. No brokerage.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Visit & move in',
    text: 'Tour your favourites for free, pick one and move in, often within 24 hours.',
    icon: 'M3 21V7a2 2 0 012-2h6a2 2 0 012 2v14M13 11h6a2 2 0 012 2v8M3 21h18M7 9h2m-2 4h2m-2 4h2',
  },
];

/** Three-step strip under the hero. */
const HowItWorks = () => (
  <section aria-labelledby="how-title" className="w-full border-y border-slate-200/70 bg-white py-10 sm:py-12">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 id="how-title" className="text-center text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">How it works</h2>
      <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <li key={step.title} className="card reveal-view flex items-start gap-4 p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white" aria-hidden="true">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d={step.icon} />
              </svg>
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Step {index + 1}</p>
              <h3 className="mt-0.5 text-lg font-extrabold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-700">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default HowItWorks;

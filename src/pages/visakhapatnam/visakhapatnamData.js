import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Visakhapatnam (Vizag), ordered area by area.
// Sources: Google Maps first (listing, rating, address, photos), then myHQ for prices and, where Google has
// no genuine photos of a space, myHQ's photos of that same centre.
// Every photo is from that space's own Google Maps listing and was checked visually:
// food, people, logos, promo graphics, 360° panoramas, renders and stock images were removed.
// Closed listings and study halls / reading rooms are excluded. Checked 6 Nov 2026; photo gaps re-checked 12 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/${id}=w1200-h800-k-no`;
const MYHQ = (path) => `https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/${path}`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const visakhapatnamCoworking = [

  // ───────────── Dwaraka Nagar ─────────────
  {
    id: 1,
    name: 'The Coworking Spaces',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Dwaraka Nagar',
    location: 'Dwaraka Nagar, Visakhapatnam',
    address: '3rd Floor, GVK Plaza, Seethammapeta Main Rd, Dwaraka Nagar, 530016, Visakhapatnam, Andhra Pradesh',
    // 3rd Floor, GVK Plaza, Seethammapeta Main Rd, Dwaraka Nagar, 530016 · 354 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4832176278054814473'),
    images: [
      G('grass-cs/AABkmLd1xQhk8BMsV-F0WIGmuov8p2pB4_-FZ56LLnJByq_fqv9xR1Fi9_PkPJhYMz4OMDonINe5VwGBI3Q5OpFRVIR5Kw1eYuFcMkV8Vv7Or2lvwOkP7Kecv-dnDqOTrX6S8GZaBJ5B'),
      G('grass-cs/AABkmLf8N4DE_dI6pVOziTA7LpWW5haU4KiRuKRJdlSF0-Ip_jFxbg17CXNKqnjYaU1FbAictOvlidJd-OX2T9QGE2c-uEPULga8eIyZasRvRgbUzBVATeLRb53_tcodVj1jk5Zrw2l4UQ'),
      G('grass-cs/AABkmLdJdX-VJKV6-w8D0UVwnRh9cPMwmXX581bNvv7NoZmi8Tmfy9TPes3blNKmtZX4JGMOY3NwzWyXhV12xWTU0pnJr7QLI0ysSsaiZBjHJOsq0GoRLBomByv0GVO8MXCW7tN1N4BWyOqQc27b'),
      G('grass-cs/AABkmLcK5a-u8fc9YFI4DCMBEXHCPV47Wo68jzlIk3pFtX--wO7yT3z2MJgzI0W4xMvXuw9SHFRJD_gA-loBqMUOgrNjA_7_Vf1mBUhlworFYgdZS97JXQlUumpZHeAVNIpJrNolQSuz')
    ]
  },
  {
    id: 2,
    name: 'iKushal',
    badge: 'Budget',
    rating: 4.8,
    area: 'Dwaraka Nagar',
    location: 'Dwaraka Nagar, Visakhapatnam',
    address: '4th Floor, Ganta Arcade, 3rd Lane, Dwaraka Nagar, 530016, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, Ganta Arcade, 3rd Lane, Dwaraka Nagar, 530016 · 153 Google reviews
    price: '₹2,999',
    period: '/ Month',
    priceFormatted: '₹2,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1004811574437088479'),
    images: [
      G('grass-cs/AABkmLczifgf1kCRhAfWJ3EM_6CXLg8GtP2WKpaGnikwFDsTrjXa0mLwl3ZlnGm8k-kDosSnNeM_8fVAAeJG8bJ3efKe_IsT7q5iSkpb0ZneyprHT0sB863t4eVs7ab6SFQ2jIKU7C3q'),
      G('grass-cs/AABkmLfg0PVK49RIiS8ntY0bvB4UmkORUvRLzc0tknvrc24x9a2AOfeO1DCOiCFhH73i8K10gcw02W_hP67o1M356RSPa0DEHvlwVmNnJG8Rv9JEMcR7K73PHhZYSSqYqfext5p_kCt_'),
      G('grass-cs/AABkmLczm4joxqZAlAo6kphWdKEnCm4uQqffnUucHlKg5FMEatx35FTZNYh96zy_DKSkXvr5xoPvHdmRBQKkekxSr4T1HLvY3isH-iRk8zUVhxnOhkaJGtS6rRMmk15TXxIM_H6blm3C'),
      G('grass-cs/AABkmLcakAxGie1zDJSMcjqQ4wKHztPxSiclxsiCz9DKkLqjimKosJELvefIITy8rcPwloz_UZf6B_YaTVTnshjpenkohHdtQB3ccxnXqdkAC5osl7f28x6iehL_y5yNi8aiH1rMWIM9uQ'),
      G('grass-cs/AABkmLfDCdoOzAt0BcXs_rgrKbadwTyqm1757FzhZVIfPkZV2rWSfEWYbaYpJMrUGXj8FeMv6ZF5DyUFDWy9P70X88qdVvG4wNS2S5y2k5OXedIR4KE9I7TqfdLx_D8yo04KA9421YHa'),
      G('grass-cs/AABkmLdZrp3KLEujdG4sHOi_MXNR_Mob4T5Zok3AsiDhD5qx0lAkxCF3772QfP9JVRCJIBc2WEuMAYZP4_pjguW8pnKgQ8chsphWuANYWwLxGcfz1LL8K2YFm7IEQflPsVz3pSTN3TM'),
      G('grass-cs/AABkmLd3jdsKTa08-01l8_pSKPnOwA0-yaQrSEH7y9kX2vDGRS_vIJHJuofPkuH9ALCNbzjDR21LTY-XrPyN8prkydU6QmvQV6Rtb5DwFWZQfDHdXCOiIPEP61MbZdjH7XNvXl-qiB-X')
    ]
  },
  {
    id: 3,
    name: 'NANO SPACE Coworking Centre',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Dwaraka Nagar',
    location: 'Dwaraka Nagar, Visakhapatnam',
    address: '3rd Floor, Sree Sai Plaza, 47-9-13/1, 3rd Lane, Dwaraka Nagar, 530016, Visakhapatnam, Andhra Pradesh',
    // 3rd Floor, Sree Sai Plaza, 47-9-13/1, 3rd Lane, Dwaraka Nagar, 530016 · 38 Google reviews
    price: '₹5,500',
    period: '/ Month',
    priceFormatted: '₹5,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6121062558608673539'),
    images: [
      G('grass-cs/AABkmLcjd7x5WAELFMKfoNQUojGv8xT0kfQn54wcAGGzznIa3HcP71ecr37HZJvwf_We5JYTqK2Sm42QXRfZLar5xpjZsG4Ysc_7Lc3M9PVO9CL7WiRnMYDU6zVOIR_Qk1R2TRf8Hp2P_g'),
      G('grass-cs/AABkmLeLUB9CqQETe9G8HDbxklb_HY8CjLKUUL7UgySIl_kHzMMhYcutHcmfN_ehHwkp4pGRLqJaztvp0pty7oDDwpdZ2Wb1g9l-yXpLltaFEDwh5mfWFnF88OMP_fCkYVCkbRX7w_vX'),
      G('grass-cs/AABkmLdwFetfHnLn_ZcWAJT6EJizu7y_vuNx-4NsY2dvPBVNZ5RTfFBapjDuveVVpsxRBB5SzNDsr9P7D-wcIe6njQTXj4fQompl_xVYQlidz2ISJUSfXqb8xnnOcoZyQ7CqP7XweYdr'),
      G('grass-cs/AABkmLcrZfb5aQPHjDP9XTKUBKQL-NvEG4KHHHdM0ViX8ONr4bOulTMtBxew0bvZ2HGdgqL9kUsQTV3FzCb0BGj0Bk8K-G1xWoccyKLsZtJqkJyvmdzhSN4BsKDx880d-auiPQCGx5gymQ')
    ]
  },
  {
    id: 4,
    name: 'MyBranch – Grand Palace',
    badge: 'Popular',
    rating: 4.7,
    area: 'Dwaraka Nagar',
    location: 'Dwaraka Nagar, Visakhapatnam',
    address: '5th Floor, Grand Palace, Plot 238 & 239, Dwaraka Nagar, 530016, Visakhapatnam, Andhra Pradesh',
    // 5th Floor, Grand Palace, Plot 238 & 239, Dwaraka Nagar, 530016 · 16 Google reviews
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6489665152889893722'),
    images: [
      G('grass-cs/AABkmLdnnMAHxS7Pj13BiyiI07kvpEMFSLHJfeR2JuwD-Nak5w0lF2HIfUM3L48hJjPSF5o1Iz9_tTKMA1kPX0JV3TNDoSAwM2EBQ6ii4NlSA433fPlkOlj8GJGftRC9bNbHy9o6hP7J'),
      G('grass-cs/AABkmLcWZG-k2JrgbE91YMY8hoPu_IaBBpB_HHL51Cy7K3NVlIupi1nORnS4w3BWhuGQh5c6z5FXZDfOVTxo7tFuT3RFN7XwkRWPinZIgMSdOxunorJnQ-jB3VqzRb5lgXDpyPs0opXH48d4RFR3'),
      G('grass-cs/AABkmLfYrxiAC1o-PjjF3M_LT3orCL7IIH7S1MuJX_hAlvUJYMJV14dTeuoOtCxNVjTN7tlzZlMzL2FHAEJZ0lT-b8GP-Gr6gyhWJwgZejJtqWlgTXk1qxJ0dYg8TlLtV649-ylXGFicVGLZKQQ'),
      G('grass-cs/AABkmLdOgkGe7T5k1RH8I7AgD9u1dwZSbPG9DxOl8F5M_1192JXy-5Dx5t4oFFz4XcxR0us872KHCw02ds0tUiniKwNlQ4xoUtdJu6Gzz2SpXb29hAOU5htZCzNr5Cv7t5g4zBH7CZ6Weg'),
      G('grass-cs/AABkmLfSYgZ_Vt3F0xzGKMJ7okRvnLMWnLW79D1P8Jw15palPwnr8gkIJgXUmIFhzyD32_0BTkL0H0LmzkriE-rS5jsYPTqt4SZSG19z69S1b4hcI3iDN4MXJGXvC7rTXqFQPxFltVLyM7DHO6gv'),
      G('grass-cs/AABkmLf2FBwbyDJ7lDIsuZNy7TmUW8ZP5Ug3btfjTdpiH9_Bp3h594Gu11bM8f4yX6nk5Ja5lTQNkuN4KFPInyo_jTN9IhTiW_51dW1k4jdcHCBj0NxWJZNQTGeQ6SxtPaOOfcyI93bM'),
      G('grass-cs/AABkmLex_CnbIL6mVxoZ2fZAJUEKaVvSambN8ryMBJv0pjly9G7lYz3kASzUWoe6o4cTm0x9oaP3SPGZ3kIJEPY6pz59T4wpN-Da4s0SUIWpfsSqnhR71OvZiqa3U0agfjVxddpvBpYehaFZEWI')
    ]
  },
  {
    id: 5,
    name: 'ThoughtSpace Co-Working Space',
    badge: 'New',
    rating: null,
    area: 'Dwaraka Nagar',
    location: 'Dwaraka Nagar, Visakhapatnam',
    address: '701/A, 7th Floor, IT Grand Palace, 1st Lane, Dwaraka Nagar, 530016, Visakhapatnam, Andhra Pradesh',
    // 701/A, 7th Floor, IT Grand Palace, 1st Lane, Dwaraka Nagar, 530016 · no reviews yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6417012143556401966'),
    images: [
      G('grass-cs/AABkmLdXNxx5OzPzr5cEADb6mmMCJBcnlyWctWOXYcZtntkX9p-G7EDqhn0WdJRst_vwE5Or6Ih0dgkz567mCEOlOITyTpiIvbw5Srx4j7nDd5Oo4BjQKP39qhoQfsV7UdBWn7lnhNlNvOCYODI'),
      G('grass-cs/AABkmLfq2aIsZVVXDLoD4L6jKxeAfLtzkdEkJpVwBN7bmpm5WWMLz8ZC-yZYOG8FCGGJAV_ux6Pk9gTh4f_nlMy_kv_QnGVcTs2xmEURcwv_Mzo8p53vJd-SS54VQzUsJFQecE87GI8pgK8Q9Lg')
    ]
  },

  // ───────────── Siripuram / Waltair Uplands / Balaji Nagar ─────────────
  {
    id: 6,
    name: 'HawkisH Coworking Space',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Siripuram',
    location: 'Siripuram, Visakhapatnam',
    address: '504, 5th Floor, Kotu Empire, VIP Road, Siripuram, 530003, Visakhapatnam, Andhra Pradesh',
    // 504, 5th Floor, Kotu Empire, VIP Road, Siripuram, 530003 · 124 Google reviews
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13562824025861499365'),
    images: [
      G('grass-cs/AABkmLezaYaj3VluF9Pz3FUyT-t88i9lJw9ASCWEPJZOmS-U2eoecpuQw9HBxekyShjOjA-JBeICShad7NbrbOBDfguIAiydX2x7f-Osrl9eJ5S20zmc2NTEAGpoFQCgp_B144muXtFsYg'),
      G('grass-cs/AABkmLcGOxAQNfMRvPlsi1jgZcmjAqCQe0g3PBCfDgj7ajbplH7nBhAGlmUyBk8aYuObGCBYkcf_WpZyPpoDL1rz_S7NMLgpGKt_WK8lsV2hXlCbrUv1v5rCATdGa9CxtsaoTTNAGc1BfA'),
      G('grass-cs/AABkmLeIDJKO-5Jg24uri8semaGrNFSX9sJROXkX7lHwR5QmOLUxmenTB0o25keyE05kQsWndJTMxoDrnPTF_1osmaZNIJBk6Fqr2KKVN0Nnud39z0yh1S0pTNMC5hbGZ68cWjU5DQuLqpzfx4ow'),
      G('grass-cs/AABkmLfhY3V4HT2wFHZP-2JCy_fWxWwL-K8Pe5n4U3ssZq3cfP3uJ1KdgI8-mjzWlLxERnzYRYeFmyq96DYOdwgHhvqHM5MeovokC2io42cjQZxF6nwkA9IlygOJPrAKkUSnl6d1ZEUlmA'),
      G('grass-cs/AABkmLeSglFBjqGOflUnp2bkajlCdzMAeaXQKzmcLexkSBFKO4f5FUxpirA3oPhNK4zJyLdgUypnuVc9ENxOiVnPT25bxk9gtNr1-ro3QICe1eegjURv5NvPX3Ah5WdWcIUVbUlacVDH-A'),
      G('grass-cs/AABkmLeSi0iFg-xt6Tl6h2T9fQujUG4Av78vG1FENIaPRv0ug2iA0xjlj5zbiafkYyQuJxljOu5KxMYtpsToFwg3QTsXhJqy6D8Ruq9ojCfDzcGwShROILNFWMRgvAQC03Fa06pOBD-E'),
      G('grass-cs/AABkmLf1HFMnCXMZHipSQ5XGXx4WzNgqi-KpgNN9FOdSPEZxlVMxnOSd4JwWoCF_ewdtIwhgDfIKk1nDj_E3JZuugH_zV1aozyFYf8zwBEvTHkXWR9lgQK6LyMSYDvsmKshi4pbVcA69')
    ]
  },
  {
    id: 7,
    name: 'My First Office',
    badge: 'Popular',
    rating: 4.3,
    area: 'Siripuram',
    location: 'Waltair Uplands, Siripuram, Visakhapatnam',
    address: 'A Square Business Center, Waltair Main Rd, Siripuram, 530003, Visakhapatnam, Andhra Pradesh',
    // A Square Business Center, Waltair Main Rd, Siripuram, 530003 · 74 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9726150360365079122'),
    images: [
      G('grass-cs/AABkmLc0I32HfQfYHH1uDWQbesT6EphwVzGKeofSTyw3tN6A-rvWJJUzICGNxqmKbo7Q2u5dnsuqpS5e635U_NvkHhpaa6LuvVMFqb9nflcwhLeeYTmc7WB1yD4WwiBLZUd2_rBU5AY'),
      G('grass-cs/AABkmLf_zPFn3OOs-K9SMSbTF6-XpVBzBfOj1y7jmYLkTSP2HsAdQJ8JIVkvt-agHaioRIxlSqmzvV3xDY-XpzSVYU8UALuR4O8ZELd1fUYWsGL3oaE9syVv2XTvwDA_n2xTPd_T0vpK'),
      G('grass-cs/AABkmLeUaydeQSdSqhu-Gm4aVABBjOfGmb1reawMUHUg15OczRYQQgmLuUB47NmaFWctaeRITNBFi0u3zV5rjlgnKyEBWDfMzjQuAegegFI9BLSE_YYr-KZX92PHt0uTPC8CgUL9pmpKeQ'),
      G('grass-cs/AABkmLcHeZAD2p3pCTP_R00nq_4DVcQlRsmToXkiiYJEJzYxuieWC-CbPH4qeKlfR6qXLRU-sM-tKcpotq4pg-B5DoRAgLz-Vz_uAmYCq0d1xk4YYs5jqwLPQs8R0zRm9-T8CsA-Ws9K'),
      G('grass-cs/AABkmLdh08wLeBRVnPwUAD3FcbTe3CRNewmYBWmNNROyhgwTuhpigt5ZriD31COhju25HamtLc1NkSbpH0yJNS_xRaESrZrzsaO__kpigTwqZwcXQHt1AfH9TlHHTbBIJSbqEosBdhQ'),
      G('grass-cs/AABkmLci82N6MAG-gOuCwKZrh3kh8lKxukbuXUWjUCKqrW7NEE6n5ihsW9pgKURiRG4B43bMpLvJvh3V5nLc1UZCSTsp6-nURPBdjpH4UK5iZ-mJ67X_bu-M0EniFyFoxKNxs3woa4aV'),
      G('grass-cs/AABkmLfcBstd0Slyx4ZxeeUuQ4zQFd-PZWbBhq0UNySBZASMY5R0lrakNBP9ZbbXbEhhr0BZpx1Xfbl9y8t994EswwbsY2udaoUhJ_6APjbSAf85CRyPfjtknbwOpaddVVhM9l3PNtDUKg')
    ]
  },
  {
    id: 8,
    name: 'Ratan Tata Innovation Hub',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Siripuram',
    location: 'Siripuram, Visakhapatnam',
    address: 'VMRDA The Deck, Siripuram, 530003, Visakhapatnam, Andhra Pradesh',
    // VMRDA The Deck, Siripuram, 530003 · 18 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4308914836648401204'),
    images: [
      G('grass-cs/AABkmLe2qhIcDVDX5KSnCViQnKXN6nl3OBnz0Ia0VRWD6Znag0x0C81QS0GT-d7cBoapOlfKx527Z9P2pYh4pOM5j59uVF1-sG0PL22T9kLSfcFbXwvBxnA51WWweWFU113gi1fVHfC6JlcW8lJv'),
      G('grass-cs/AABkmLc3VPuS9vbuS0EaCk5D01kY-5Rp1Z_QdwHOGBQqwsU5cr0SmznWBiHbwr6Gtx3-mHXGdafTxz4H07_EBlIfiFkDGebfTgGIr2UOZxZknkLTKGxwc2XtLhxldFndb-uULeO2fgH9m3_dl2XM'),
      G('grass-cs/AABkmLf9A2YeuCWanvSHR6sJSzcwP-e8hqZiekFPit0oBTOiV46Js-RuDBwrltpwSGNE9UFzUq3gjcsSXyXoDwn5o1jbbFYzbx_8hAf-EAl7A8ApbQ2-af_gwF6ImQ_Z2rQU6aqWH3wO8J6u3Pwn'),
      G('grass-cs/AABkmLf5jC1JAmEEi-_SyDx2a05wEQ_s1cn4XhhzbqmrFqoAAgm7U15-8WsQQriwSqakhwe6OowrnfX89zzJ4Z5dCl1xYmyUkd9tWHGrRRrMPfNZuyURGzwMeKpObODTb4M6T_zMO1djeXbGgqqL'),
      G('grass-cs/AABkmLde8FcvKBqzx0danvGC64mYXGqfc3KZZXay6_qQeFmj9oxMfaDlSzWtL504m7BImzDaUhThsd4zLFF8u0qE4DXlMsuq1bCAPq_UR520BdV7il9d_iTKB8KvaKHpRZIbacYMMKJeK6f60Qw'),
      G('grass-cs/AABkmLeQmuG5DEKnCgCkDoGe8kCXQJAD91aJvMaXbI9kK_--pqlbjdRTseRXqQUzERnZ2lcXq9Xi6byj0yeGLHk-8GIypWt_0GbFia78-VqkMCw7AZQkF4tnMLqh7vIcfPYo1KsNdEi_jOiVpFzl'),
      G('grass-cs/AABkmLcjM4B12QHmzacqToe2roeU3iXqeuBv86LltlWKt0kdFWbjPQM5BPtk77F8TaNjVJVRF3Lss-aoS_dGLFHW-sGrWWZff0E35Qu6OZSX06j9y4xxEDHk0XgJvIxkgdQ-sse6c2k_Ved7ItFs'),
      G('grass-cs/AABkmLeQcTxPcjIn2etmPiuF8UIg7P1_0V8Dbf5-aINpWEH3JsciJV5PadBRMaHYcCwewk-uK2wN70uRSs0IMCX_-7Nv8s8CN_4k4G0qieBDg7U0Jh-Hslv56jNKmWy2a9OpFgVx5dlu9IVykL04')
    ]
  },
  {
    id: 9,
    name: 'IndiQube Harbour',
    badge: 'Premium',
    rating: 5.0,
    area: 'Siripuram',
    location: 'Siripuram, Visakhapatnam',
    address: 'Siripuram, 530003, Visakhapatnam, Andhra Pradesh',
    // Siripuram, 530003 · 1 Google review · only one photo published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1849069411309133600'),
    images: [
      G('grass-cs/AABkmLcyayt0eycj9Re_HgStpZdFs-VbJiT9dcqycvW4cIl1rIvTjIiPReCubcGHxI9sy5nJrK8xHAH676riobXhrjX-yifpNf0Iu68WEMLxut1hE6u014w9suW1Gdrupk49K7MccArcuY7Aq6wk')
    ]
  },
  {
    id: 10,
    name: 'Orange Business Centre – Siripuram',
    badge: 'New',
    rating: null,
    area: 'Waltair Uplands',
    location: 'Waltair Uplands, Visakhapatnam',
    address: 'Near Circuit House, Waltair Uplands, 530003, Visakhapatnam, Andhra Pradesh',
    // Near Circuit House, Waltair Uplands, 530003 · no reviews yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15715802474786824720'),
    images: [
      G('grass-cs/AABkmLfoYNMV_nyRhMYFbNZA75bGNVTtsFvc7KW47Molz9lJ5oQmx4N36AW4G8hAxmdgn2Ky9ABtJylv-6cf68HplC7cC3y96OSdUz-TvEKCYIJXRsEtSWe6hgrbUbI9Ou0JftNP9b1tkCQ1vuwa'),
      G('grass-cs/AABkmLf-DyJFjL3YuCXloSCNnjpyy4FIksngTx24xHJGXX-KryIQBWuNWN8_bMiUOXWw5rpQCRLwq_H3nzoZ5_dBYGcJZjK28Ze3XyM1sjz0CdARfLrTHDn2x7Wgm4Edx7SN6WaDeMybSC-QiDLH')
    ]
  },
  {
    id: 11,
    name: 'Leeway Space',
    badge: 'New',
    rating: null,
    area: 'Balaji Nagar',
    location: 'Balaji Nagar, Siripuram, Visakhapatnam',
    address: '4th Floor, Balaji\'s Mangalagiri Chamber, VIP Road, Balaji Nagar, 530003, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, Balaji's Mangalagiri Chamber, VIP Road, Balaji Nagar, 530003 · no reviews yet · leewayspace.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4329913072720621877'),
    images: [
      G('grass-cs/AABkmLeLTsxI5gnYG2KXGoTpco3_eHKAd6KT0mdEbJPgq_Bss31aMzL8gWp6mBkF8BrxUWnsejtNqCMIRAcptxauzoeRq0ge6osZ1k9l5VNHpgCy-HO6u8oPKpgOt1xfJs1xuXCwWCw'),
      G('grass-cs/AABkmLf9TuLV5sxsJNCw8V856bLlEe3yu9IUcsQK_rYWdl-mv_nvIribyIuVvg46W6fcPEthevu87mTqXvTbo5IrDtD3Bt9BfOPFEBq9RmfLcEdP4rKZT8F3tpbxx9Ll83wtpaxV7B3z'),
      G('grass-cs/AABkmLfuTMtZUi0n_gMq-01orQ3yRAlNDfMqIARWxa22lISnEpunSz3uxR7HwMwCNRFLjzFtzWp-CVU7yI2yOLfvNr1z_pMjKSuslmZPjR5FXSApJnPxFaj9imZ4h8cdq94ZOWVa1t2V'),
      G('grass-cs/AABkmLcrB0l0YCmiR9ZPe2LQ9BK0GLATsAtWftfp8n-10qEoryH9JHRSRO44x0IbhQ9b9IvgVYdLbO30Hw0YpHB_EcX6eEpNBsL5ZHT9cPvctTCrWpE8MUPpF6Ch8ZUsMPXEUPKCu8sv'),
      G('grass-cs/AABkmLcsbpVodNEmD5KjJPWhfm4jD_Pqi9WfwiJhdT0qiM9W9XUXt8RYJCPUjVKy14rE8F_-_h5zXninRYvY7QghdOspExtovMXHex-epW_CGYomUYmrv10a61szDsnCTA3lZJOVS3qZ'),
      G('grass-cs/AABkmLfZtwWR4R4vxXeS7ud5YBZHEq4ILD1nbFYxEobD8tBGYXOZC-TfjI6phPHNMUPnCO-fzXtrBWdINcl-btrA1apNwqbk91vKhl6b_0dQ6a9rIAKLlWkP3JFAEkDbdchHF3-SuS9MvQ'),
      G('grass-cs/AABkmLdqCpGHXSQZpK78Sr5654FBOg5nqlB4PZRNz6x7SHkx0FRDzS3qMy2Ffe_9jXokHBHGgMqE0Pq9gFYto7_ueq3jxmnMnJ2EG865tSsAi2WP_7PS4li1VWvpXVYZlhKmSbBahgEqxg')
    ]
  },
  {
    id: 12,
    name: 'Quantum Hub',
    badge: 'Standard',
    rating: 4.5,
    area: 'Balaji Nagar',
    location: 'Balaji Nagar, Visakhapatnam',
    address: 'Near Siripuram Circle, Balaji Nagar, 530003, Visakhapatnam, Andhra Pradesh',
    // Near Siripuram Circle, Balaji Nagar, 530003 · 31 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1405548473666009023'),
    images: [
      G('grass-cs/AABkmLcehnBseN5peMZ071TF27QOCSSBYrczxrdEOBq50FDyvx_rdzbWYyFCv9jSKN7E_8m31AyUcHjNtSvxEfO1d3tnFrXat-m62BQvmKFZ87tZLwYV3EeKAx4PQSA6tVFd1HZ4HcCo'),
      G('grass-cs/AABkmLcMLmp6nxeC58bmvynHisPmQKgixrLLbB73lVF4ApTegkUq2onGMa4HUQ3mA3qwOlQ5ERBEItTlyCCmSQAH_LruAJ9AqwR6b3O32SzG8m_F8r52SmLXt70mq66pRSoDsOS6oqlR9g')
    ]
  },

  // ───────────── Ram Nagar / Waltair Main Road / Nehru Nagar ─────────────
  {
    id: 13,
    name: 'away.center – Waltair',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Ram Nagar',
    location: 'Ram Nagar, Visakhapatnam',
    address: '4th Floor, RK Estate, Waltair Main Rd, Ram Nagar, 530002, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, RK Estate, Waltair Main Rd, Ram Nagar, 530002 · 24 Google reviews
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4575043421176975214'),
    images: [
      G('grass-cs/AABkmLfXEKJ0t2XtRcV8Ip9GOoDncB_5qUTvUvOWmW-D-puivFH6hMNcJrlBYCIlezOMfpYZrbke3VoVqjj9LwuTs8EhtlZKBBNYTSTLdli22xXmcGEZitJFGOM4CJsPqzYW8BshwPyA94e6LHmA'),
      G('grass-cs/AABkmLf4166twBA2pLvnj7qOU4wc5bFd7o4_X0o7MLhF0iPbeSBY26-0lNLjelt_OreJiqYy_ZNDZlUdvOZZ557NP6Qq6IU9r-vqHK35366nMl3_apA2KMgEWc_Cts6eU9fc_PkctJNdk7gXurnd'),
      G('grass-cs/AABkmLfuC97RU0vHEHVljJKQTqXkA_WHLqdGCJAWGxyH-K6ywkFMzK7n5iQvo5sOIyOTuotF72rNXla7yrZ05H6Zx7YlymG7tqxV6nFbzQ-yL_H8DbiXCo1Rsw1HHOXFuK8XhgPI9GHQPRdwqryR'),
      G('grass-cs/AABkmLeb1UIvcTJ1PVwo322KkLlwMjTPtYA8v7FKCsDn171UDjV5-fTrTwwC30TdoFBeYBgEcSZ3OmyCedxKgTTdO2CenXZWAgJUjnv0Zvgs5I5-D5pCWPWdmf2-n7YJ0U1JjOIpk4KLzXPFlFli'),
      G('grass-cs/AABkmLcdx0Gbve5SDrfCQUKGn44m_Djejam_VYbCJTH47gNOQl9jJQQTcFkx_3VJwX_ZSAPJ8aufQ5_Ym2Cvu4sRcw6wSX8hBOupuryA9WRSK9ZaG26M2PAkiwLSEjzJayfQdSlUv2WP8WynC9U'),
      G('grass-cs/AABkmLcYbegl_3hQAp54wcfaWC6ydXMOUawaa7TdPUDu6T6XPT8i-FboAmSYy_t5i9yGbJG10lYmuepOHCeM3X4ttVstUK-HI6KCcGEMfDK6RtbsDDpcD4JSY0NBKt6rbsCEOkAGwATsKwuaIvU'),
      G('grass-cs/AABkmLcPBlUvDmaGoZaFpJ4b-gDhGiS7WIpJftCyCounlctCwOI0ihNpqy18Sb2WjPn8ANEaz6BBTo3mxnY-AczQwMhXfCHsJtbKTqIKer0OWUkpys_X8fKcbHTjGpBVjLBpEY4P4w7gfDgkqTtv')
    ]
  },
  {
    id: 14,
    name: 'Regus – Naga Chambers',
    badge: 'Premium',
    rating: null,
    area: 'Ram Nagar',
    location: 'Ram Nagar, Visakhapatnam',
    address: '4th Floor, Naga Chambers, Waltair Main Rd, Ram Nagar, 530002, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, Naga Chambers, Waltair Main Rd, Ram Nagar, 530002 · photos from myHQ (Google only has an event photo)
    price: '₹7,490',
    period: '/ Month',
    priceFormatted: '₹7,490 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4531977555419832985'),
    images: [
      MYHQ('regus-siripuram/1.jpg'),
      MYHQ('regus-siripuram/2.jpg'),
      MYHQ('regus-siripuram/3.jpg'),
      MYHQ('regus-siripuram/4.jpg'),
      MYHQ('regus-siripuram/5.jpg'),
      MYHQ('regus-siripuram/6.jpg'),
      MYHQ('regus-siripuram/7.jpg')
    ]
  },
  {
    id: 15,
    name: 'Qubexpro Business Centre',
    badge: 'Popular',
    rating: 4.4,
    area: 'Ram Nagar',
    location: 'Ram Nagar, Visakhapatnam',
    address: '4th Floor, V Mall Lifestyle Building, Ram Nagar, 530002, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, V Mall Lifestyle Building, Ram Nagar, 530002 · 94 Google reviews · qubexpro.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10434579787925507151'),
    images: [
      G('grass-cs/AABkmLeHMf7DpUQPkN_-5gNfxNFETGmlIKYW3_F0Djk6y2O2QOeX31H1MMUGlMer8tlxfJK7m-lqb6re3nKUSFPnn7zb-kfRRKhVEljWH2bJa6WhEFSVJ2KEnay42JWI05pUiBt_GgSMlQ'),
      G('grass-cs/AABkmLecWtau1NKQhnXTHMBBvKn2one8zYBPyrCkN_XovHFq_YFpXB9DSKtxz7soj8G94XGAVt4DQH17_nGxN059rqEPR2CpK2ta78unpLAjiMxE43KWI0gGBG6ETlZ6itKhwAZ_XmpZLg'),
      G('grass-cs/AABkmLc-712PShzeqMgc7IG_ExgGP6IOTzLmO6Epafr6g3b7PQn-RpmsOp__WG2_fxdsTH-k0umWvIpd6f7jNYK49ZLtWsnFsWkPCN414oyrmnDwHdnx1cJf-xmN-iL9hF-v1Kn5Zo0'),
      G('grass-cs/AABkmLeN6PxWdp_h2Hyb5zlnonrBhCOnftepG4M2GcnsgPvXwyMotiW_Dbh3Hi2QELYCDbPstlDlLuWak5Rpf8jrURzaNDy3QaWWnoInaUsFCy73t-lO8FluTqg1uDUIGmRmGaVEYRWv'),
      G('grass-cs/AABkmLdu4cmYCYILsWLuLPkTZSPNyaqFo1Bfs5Ak1Ni9cqptK6t0UPFqFzSmY08y4FKli1CocqW44XCGNbM9-KWaoA8wcfkYIM53dqcdG4DYBWuqqXiwylJF1IEOLAYsI5vInWzWQvc'),
      G('grass-cs/AABkmLe3PEffc29Q5o_Zvu2K2izvR9xbGbWkddyeUEmhTvGJAR8rxHkKI762cwOitMZUP3IEa-lKZauSQPNW9YF41cM4_aFwWJh1uVy1HOSY8XBtrGfpm7mQmTg5zHapjDOWCTFdPkei'),
      G('grass-cs/AABkmLdSpBKJUQahQIZN8JIQaauruvBU2mMY7Y1IPlj75rPiAhvizqTCtf06PZTj9ZdA70b4bb8xvlojdxacQgmh1W56dFJxgJ6dj9c8R4TnIc9QYwJHSXe-8Khrb7YK7galyQbcggkmCw')
    ]
  },
  {
    id: 16,
    name: 'Vizag First Office',
    badge: 'Standard',
    rating: 3.9,
    area: 'Nehru Nagar',
    location: 'Nehru Nagar, Ram Nagar, Visakhapatnam',
    address: '12-1-22, below SBI, near Hotel Green Park, Nehru Nagar, 530002, Visakhapatnam, Andhra Pradesh',
    // 12-1-22, below SBI, near Hotel Green Park, Nehru Nagar, 530002 · 12 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5817092149436264525'),
    images: [
      G('grass-cs/AABkmLeE3US_8y7d0jyPj5pi6XvGGT0K_xCwArywaDlTfkxuaj8m3t7hiwpg8CTy0HzaHP_-EJ9WP3slEWxjRHA8jJtD1wxLMxS0AnAy8vjQ4X4q1MCzkNq5WxRgVBI3_OEKN8HDz2Am'),
      G('grass-cs/AABkmLeJ58xDJo87vSh7gbpDSd1YX7tFFsYkbVqgrlkpKsAw4Qqp_x93-u1vYU4ycd28uiYjueWNT3_DnOUMnas2aJW64mw106197AJ1d_ZyaBKnLqA8ir-AGCH130h-jeZMPP5KogVWSA'),
      G('grass-cs/AABkmLfDof_J8YF5GKzbE3Xu_sK6U_OEtCNVIUeAgxgE3CgxU-MZMOJ8tYjNT1UyeTY9mvIG0d9fVLdK5vSap-dPpnIhMrsWXzjUzmCEDgt4zFG1hL_ZwlgLQELMIqyRCojwtujb_iWA0Q'),
      G('grass-cs/AABkmLfn1IeWqu5T1nxSCUKKYLg3NZtGlTFNSFAYBA5FyF5tUOKd3DFXMkWVdvhw4aPxftB-Hs7RbSsGpbWbJF1Wm4xdAK7npgrfSpC64UhmdMwrQxSw9T-ZL-CuOV4vjFbGs191CyQ'),
      G('grass-cs/AABkmLf1VEtfBuGx-CyYz86q1OfqtwaAtBe8OfEh5JWOTs8Jfy3fOoImQqWLnRt5ojjRpEu3-y8SEIGieEUA3Zn2HNamRc8Xvn5UeiX4BSdipWBu4xhbs9p3xIQZ7TwjddGEhMmfOBOGQA'),
      G('grass-cs/AABkmLdzk-uZsKp366SIabC9xVThxnl1o6kIVVhUfbpDtjEuQn8ziPbpk0PI4dkmzwqySRk2ueb_BDgLjF7tzDHa5wyMoB634ThveJWczQ_rHcu7vu6Uaicv7JuwfAR_L4WBBxOEhtg'),
      G('grass-cs/AABkmLcdKEtdiZySmgT1U2aZ8L0SSbU1qlPVr6v4nyNlsnJp-Pu3avrZOmyY7Z-GbmrafWGIsi04ZRoGyY1Wv_zZDTlwAsOosCodDhWkl_eYGXt6CPd2JO014sKyiwPA7dxYNqCzWs6F')
    ]
  },

  // ───────────── Asilmetta / CBM Compound ─────────────
  {
    id: 17,
    name: 'Orange Business Centre – Asilmetta',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Asilmetta',
    location: 'Asilmetta, Visakhapatnam',
    address: '3rd Floor, The Land Mark, Sampath Vinayaka Temple Rd, Asilmetta, 530003, Visakhapatnam, Andhra Pradesh',
    // 3rd Floor, The Land Mark, Sampath Vinayaka Temple Rd, Asilmetta, 530003 · 6 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7404250728757430359'),
    images: [
      G('grass-cs/AABkmLeE_1GrjakMybXTl8LART3JOvwpN31Ne9xM76OVYj8qzNtfnKbfcTdISds7Xi_ioLqewHkOPsJ92pseBXpeM3-JD6Wb6HWl0itZ30GNDe7W2xW2blCOzwToEbC33tCvP3vxDmg7IBPPmrxB'),
      G('grass-cs/AABkmLcKwi_QyUsLEAIbtQeI29xroPJoVHC8oXqaHpVlE5G7EdQfwUltQPTgq7QAA9StQ5jO-_1O-D_xmDvyV1NEM1mttsauKScR6toW28BdMc4iehU5zJ8EuQBvl01b41oELmehHzOC9-vmEa5N'),
      G('grass-cs/AABkmLe0I49MfPCtJQZAfY9-V6moIMTxTJDRoYaDlBW9I2TxYY5lg4VyrpXaP-lAG5Vty9BUdvtrqHrh5R5vt4LcH_hxwCZjeH2t5E5b6jMtDvwd1cQmCxDZM_OzB5_K-JhI3kJgyICEhQPpOWKZ'),
      G('grass-cs/AABkmLfu5JgjOTnrR5wg46677DhPZxlfGYCh-nv6xnffI04zw0EMrYHBj4x42myyluyNyQmM23ejOXZeHXy5FeVVCJRXgVNGYW8KdtOEIPpXlw20EjJWJLfzBMDFBJBLxEREW8G61dM8tvRGFk3u'),
      G('grass-cs/AABkmLdg7EZHid0GdyviTKsLVJUFI44J08MSfINKpY1iSfPkcKSLyJ5k40PiTpaQ-I1B49Eo9JmPYj1hxiNXAq6pmnckDOELPFVq-JPHIAP-Wn9mti_ckP8XyLNSBMh07GPJ_kY9Ar7iDORfKRRn'),
      G('grass-cs/AABkmLdD10-ZRucGDi15vPHaliMKFavRoM0vi0ctin7u-tO5WZsQVGwq0bjo0o3ph-6CWRFgjWih5m0NqFrfBw-z1zKIySqMbP93bpgsZp9FDWVm7cdK5EsCnXk39LncBge2u_2UCizX9a7KiaTe'),
      G('grass-cs/AABkmLdMyDnBoptl66o27w7iSctXtz5E5zfpHUCqaTUbBughFvDs-UvDsh4xRFlBnGQosLvppfBl-VObPyVSW-FoOPFgTaM_iiWwUkfP7zVg4abEyra9vIS0XaNgpTLLa0d9I8wrplNGJKrMDiLV')
    ]
  },
  {
    id: 18,
    name: 'NANO SPACE – Asilmetta',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Asilmetta',
    location: 'Asilmetta, Visakhapatnam',
    address: '2nd Floor, 48-14-31/1, Rama Talkies Rd, Asilmetta, 530016, Visakhapatnam, Andhra Pradesh',
    // 2nd Floor, 48-14-31/1, Rama Talkies Rd, Asilmetta, 530016 · 44 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10230224209052995603'),
    images: [
      G('grass-cs/AABkmLeyXkSI_zgM6TycGMic1p2YnZIfHWwzE71OJDigUzjpAjfLg8FkAV7xDhc8jqliTSejcxYo-uuhuuLhNojblMnBEBU0I-2fkPkQpMaRDrVPjzEFtD7dopSgSO6m2rloqW2LoAhdkw'),
      G('grass-cs/AABkmLeTsiwdUIZacmxwJyAgwyZogEZwZBTg8ztFKN6v_vQgdKel4KthbFIE1nYVLgeDZl7qWM70qS4P7pIoTUZhZ4-tPe213hCWteSJ1WE8jw1YwXf6kA7KEyo4wSbw0JBSs8soAPEPGw'),
      G('grass-cs/AABkmLfMcW87jvRA8J8TNL2i7UDdRwAM5j3VBtk4a7QNiFCypWhPQqbapay3sXJ1PMeD1lHnj1a2FTg6yKzpPKJxZ0g4dy-aGyVz3W8Jg_ICBCRUqEgRuQEubyZuYWWUgaJa0EhpI2Hq2w'),
      G('grass-cs/AABkmLf6b19I6U3KbtE5W_rUV9wNwUHsHb3nKWkfa3qgqknPtytBFILC9OG6mshBKcIrlrXuY44DVFVTDAFaXS4NwlE878P8YyMlk_McKNxxgH9QCs9AD3gzkDlWOBNq7gxdssL6RvU'),
      G('grass-cs/AABkmLeiqzp1b7Ekanvi3FKzZJG-7p7gWvLfxAeqDNYHa_L6vKWehEzPE36IhJeWVZ6yHHyP_Pdjci5JHbKOzWQzJAvzJAbAKvLz91R7S4_x-6C6mTOmNqw_jCQIWbJIqIeFvmGMoW1F'),
      G('grass-cs/AABkmLdXtGH1_MdDeS56L428u6t7WsXDtB2Il3Rm0QiN58b-9uW_P0KXVz_9dhsjL7cDmrF8gCYMAznUdpRnNoPMfMgr5-RT2ZajU0PZPghyiSMYh4tVhbiu4e8wvgKcVpQP-hgHVvsY')
    ]
  },
  {
    id: 19,
    name: 'Nirupam\'s Business Centre',
    badge: 'Standard',
    rating: 4.7,
    area: 'CBM Compound',
    location: 'CBM Compound, Asilmetta, Visakhapatnam',
    address: '2nd Floor, VTC Vinayagar Trade Centre, VIP Road, CBM Compound, 530003, Visakhapatnam, Andhra Pradesh',
    // 2nd Floor, VTC Vinayagar Trade Centre, VIP Road, CBM Compound, 530003 · 26 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('12686490023930297342'),
    images: [
      G('grass-cs/AABkmLdNe0IDFLtelMFT4uoevw717umEQRNjeuG23Re1wcoZA1OThl2QoBy8e0xhtlSHFdlabVc6_vfTnDIcLdHIIo8sX8o1qgIes7C1YemXX8TRk0p2Y_z_xAUJdkS8r9gP1ENu6cQ'),
      G('grass-cs/AABkmLdA9fYXHCO_DFvtaIZDfm42BRnRkb1Sdu0ncyCbtILUyZ9uERb6fjRFcofdIOyG4PAPJOLgtfBUPaY75DvM8uTeff-zqPDw-3HlxhVRFfGWQvv8qQJXQR8qd_bQvInzFG-RjeY6'),
      G('grass-cs/AABkmLdqz1zXjxmDTbcMRP_NQDNy_Semw_UbVkQ1KYl-7Efv3BBBYlbpxnReGDv0B2qCS18ioEp-YbeLeKf1BOIVmHYsSPoxuzlfpfyVfq-N5givGcUR6XCbwBPVNxdQcKfSRtQjPcc-'),
      G('grass-cs/AABkmLeXDZ8B21Yfw_niz54dRav6_ZLtCLUv4CQ6vPT1v-4FD867PibtzHhy_qh9y3cHQpDM2DlwlJ6TZg_K6hA4FXvZ2-WkVvTnKPSQrW2KSHvbJKRy67jJlMK8Wws7b7A4bVlfgK7ryA'),
      G('grass-cs/AABkmLegojMc1Bg4fst83q--rlZic10uMTS-JVebO_zGKTL0vFhyXDAiipuTmaGQLvSZm5sow2lj34jmsztXVGtasFUUN-uWVcVDgaq0UW_BkVDHbj8K9Eb7R9VrT6C2MF1KOg')
    ]
  },
  {
    id: 20,
    name: 'Servedesk Services',
    badge: 'Standard',
    rating: 5.0,
    area: 'CBM Compound',
    location: 'CBM Compound, Asilmetta, Visakhapatnam',
    address: '10-1-38/B, MVR\'s Vinayagar Trade Center, VIP Road, CBM Compound, 530003, Visakhapatnam, Andhra Pradesh',
    // 10-1-38/B, MVR's Vinayagar Trade Center, VIP Road, CBM Compound, 530003 · 3 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14395864965167499480'),
    images: [
      G('grass-cs/AABkmLfsUd7_O7NNAxVbYwqN51VJrdLvn9Wy1i9yG3bmn2Pz35WSfKHiytqzO_nE7k0tYHaOmy2_tyuBeO4QLVqNf1fO7Db9VN05gU5J_XxX7nCtGY04DTs_puPusEUqAS1sHbXOLdxeYw'),
      G('grass-cs/AABkmLdLQwMLxizCXNN_Wz3hztK-BZnZ9i_MSppx_bG8Qnh6tCABRixF507Bl1sxSsoIiRbuGUxUHyd1HgpPRFTNw5pOhDAYCk0JkpSVxWtl5BnPeNI4tbcIRm9qpdRmMyr5FBJ17ZlFxQ'),
      G('grass-cs/AABkmLeCKpDtFJlHUfBx-WXBA4prqi6vo1jIT0ublY7RG9TGGKRZQjUP6tjXfCZLdp3xWNMh9EtgThj1ed2Xp9bjEUArXKrfT3rEWri3QhzF5xgppPL2R2MTbhBt4pHQuAlBeiPhMlcBCg'),
      G('grass-cs/AABkmLcXV6qXskA8Cl37PZxA8vvKz2UZ9Jq4ysj2XmvIaBaYGkTdxqQYCobwUX_IASPTxVsJuR-rq9pTG4SkWj7g5v2S7zjNAxSvQCcGzqaoDrD36x2v7eaG27Q6ci3jom3ufWLcQlX3XA'),
      G('grass-cs/AABkmLc35lty6pdJpW9CG4t92AqhZzIQEOUz98xIwF84fBiLiDmv-iMcGl3Vl8pheSR5R5NY7Bj-3S0opzPWN84wL6_bZsoruXYC6Mn6foJZE4Zdf-1TxjiXiQFJ4VjVQKUb-kTG3EI'),
      G('grass-cs/AABkmLeHO2ntVFN0SSXLKuFLEh10E-pXcWU46LmTeyhHTBiSYfDbvwflSnBUZEaamjrxnWX0xa7xNXtYaBijE7pV7i3ymQlEpZ3fg3rT80Yum4r8-p7FkEYQtxLW-5-jTYUFC3aJPQ'),
      G('grass-cs/AABkmLeOTqNsa729Z_DY6V9JdpxANm8e7yKCO_NXi9eUShGoRMYkhD_jYdiJb6ecLqyjVNGK5x1QCb3kcjjNvZWFz8KgxOZbPndqY4VfIroKuo2m896xV1obNCpkzldj6WQjdpdJ86NwnwnEdn46'),
      G('grass-cs/AABkmLeJ0y7JxZxyuA1zRAcHaJ16EaDe26r_cTcr2dExa00hYzo7wo45f8vF2pZUlVxkkxhZpWI9RyudGjdMAsi3HEOaXvJ8UhyQUkq7Fglta-TKN5PrU9OmzbA593zKVChGA6wyh_Ds')
    ]
  },
  {
    id: 21,
    name: 'Cabinmate Office Space – Asilmetta',
    badge: 'Standard',
    rating: 5.0,
    area: 'Asilmetta',
    location: 'Asilmetta, Visakhapatnam',
    address: '1st Floor, ASG Square, 10-51-15, Asilmetta, 530003, Visakhapatnam, Andhra Pradesh',
    // 1st Floor, ASG Square, 10-51-15, Asilmetta, 530003 · 1 Google review · cabinmate.in
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17733314007819441478'),
    images: [
      G('grass-cs/AABkmLd-WV5NzaRfeolJi9ouoQFct9VJVJstkkddtUr9wWRO1UjFHntmJPlv5gX_XG5ELhAeBgLBigdwGjbcBpAdRvuHtMyl6g3Ck2uaJ4-Wz9k7thuatDrC9eB1hevE45KmuvSbBiZJDXBTBWR6'),
      G('grass-cs/AABkmLdAJ0hA41zKZCJfLfPmOAG-T0JmoCiS2Wu2MdcByk4rPaWv8kVFHAEBROUh9-gHK9tuKanuYy9LxNbe3heFTZ7YgubyBCu5UHWr9CbSFkFu8ap88kUYIr2KfcY_aqa2qRxIrFRhhbsfdOvi'),
      G('grass-cs/AABkmLcLK5aSqYSFdNzbBvB-7E2jLUiBZn2FYcDmLSo9NS0F1lVTKYmWWlu2VdW6M_brFYKv0fzZX5U31ZY8uAANfPMQRvYjDUC6zPL0kiC-WM5aHKoHrpjpB0_xeW6tlEy20lXeBtS3IuHfjrcD'),
      G('grass-cs/AABkmLdtCrRscxGATO9u3qpNSwd3ecR_U7g01MlwiwXYVDdbfFZArC3eVEA1k_rjIrOl_WLTvMsopbnGOZ_4ZxqvFQj-5NKhc71jBQ5LYE5-t-DIz5bpr9CCyNWVpyah_VsGy7o9oJOyXRf54uo'),
      G('grass-cs/AABkmLfXwEzWamcKgKqZfQV-aQ-yFJ9F4Il8D8Zr7qO9Cg_rZ3c-3rVdtsAhJyLDXDWEFa6k0TVDOykOcd1XWgolpu4tKLgVwkL3lBRsDQj41A_g3BerViwrnsxAQG3_ikQHMqJ7OBcBNWCxREcw')
    ]
  },

  // ───────────── Kirlampudi Layout / Beach Road ─────────────
  {
    id: 22,
    name: 'Orange Business Centre',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Kirlampudi Layout',
    location: 'Beach Road, Kirlampudi Layout, Visakhapatnam',
    address: 'Plot 21, Beach Road, Kirlampudi Layout, 530017, Visakhapatnam, Andhra Pradesh',
    // Plot 21, Beach Road, Kirlampudi Layout, 530017 · 185 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13621619324858418859'),
    images: [
      G('grass-cs/AABkmLcGL9_SFgrguLnQwyc9HXL0i5_AXtPb2t4F-dNS22iPUOUE1z2m9yIhhozzfzaLAbHLFKGlFoifwOg77SDAXjeQr-s3vmonKXMSF2vvfsPIVqMuwPOYLmjEKAUOHXMnLmueV5yqjBuED2s'),
      G('grass-cs/AABkmLfxhuM6D0oGPe1E02nJvOJNLxca9QdqOZyrPNSvlbBbkzEs_ox8QtZhHvbbiemlEtawDZnbYArWThreypTsFzYja4tZQjHAX17ahwtUyhtPPzdL3Ip0wqVGuuNOpkUte1mVDd8FnQEFtME_'),
      G('grass-cs/AABkmLcyCZNrxusNzrTOoj_4m_KwXPqU7OU_82TRaLy65mrEpPZxHZvBUQ_tIVFkk4L4B2yuODzb_2aNbm929ygHBb-he-en013MMby-WygIik07XGyPsgUMCqhsLfWoxuMZxuqLd4pux3mIfdxD'),
      G('grass-cs/AABkmLdscAUJ65ZME9PlORPO5x0XR4U51hDKCUVxY6YLc9A5ZGxZ3Ro1zQYTyGJ-tR-cbhdzg3wfUTBz0Mr--lp_Ma_-OdKK5HQzYmUWzH2uH9Y90Jg1YNkWznKEczmVvZA1moWKSNo1X2tKeufm'),
      G('grass-cs/AABkmLeU3HgGUYITS2p_tonik-9o62JCxJ17PQHQtDkcL7Q-X7KV-BmxaLt0ft0YKjfXuXpm1mIn8jRmMKvE9Z-FSMrjELDacUtXvD67cjajWSGleiMimu41_fQjzTTKvE-lrnTacS_rJQs_zIU'),
      G('grass-cs/AABkmLdCIoJ1ofM1J59KeF28iIkaNUBH0aq92vvUacVkMqCtMFRS2W92KtQttCU8t-Soexbbe26Ieu05tfMElfVrhoWeGnQcIu4MpYJsOMZWzmMWx6W6emNV7J8Tp9eY3-JKa3gQ_thtUQ'),
      G('grass-cs/AABkmLcGhcDhiBEOeIzasCIgi1V0Q8A7ONHkTVcLUWaIjLxoSDV3PkHrlaBdaPAN_76Vhh5HtcRv5bTgJXTKlzRDxw8gltvILN9Bxq8-xxYd5gD1e8l6kR-1x1xVP7nsGEdKOTmWEnu921tqZp1-'),
      G('grass-cs/AABkmLdlm8cHV-BlCHAofnsmE4r-6XaQRpDydm46JaVCJyvAyGRwhZjKkIHaNAXSVv6tu2RJW0RkjEXH8BCB7apRkj80713geFYntCnShJSCxXWeM5vmOecMTTMc0jR05O0W0NqoehxMjhhsoOQ7')
    ]
  },

  // ───────────── Daba Gardens / Maharani Peta / Mahaarajupeta ─────────────
  {
    id: 23,
    name: 'away.center – Daba Gardens',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Daba Gardens',
    location: 'Daba Gardens, Visakhapatnam',
    address: '3rd Floor, 30-15-35, above IDBI Bank, Daba Gardens, 530020, Visakhapatnam, Andhra Pradesh',
    // 3rd Floor, 30-15-35, above IDBI Bank, Daba Gardens, 530020 · 45 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3023174802600959409'),
    images: [
      G('grass-cs/AABkmLd_BKUR0OllNy-_LXWcYg6vBl1Jkq_uVh4lrIU7HnVOvaIWWahSVM1XPPmUQHp6-l4wvrbKGSjXa0Y8c9hw92fNoNKaOez0DKMbZgq5pAuM5gV5Hs6Yb3UkScuuZoFNv6W3GXMoFMUyctSR'),
      G('grass-cs/AABkmLfDfciEjDcSxQgc7bmx2-sKCwLutYGEn2DmTW1QNEaFuG5KGJvlFR1sqd4KUdOfael4qIcLMBNR2YnuKg7nJkLy_tkxJWWrJKcJ-Ymwf7dhB3iKjygmcAxZhTRjjNZtOCMbw6I-gcIyu7w'),
      G('grass-cs/AABkmLdMRfia4WgfQo-Xwjp4D1nHoO1MO5-t22NdhE2Ot8LCRa3YuosEy0J9Pel5yP8MtX8Ts04M8PO_ceMJo71AfREmw1mYLWtSask8nsZfnNug41KVNUPX6fdA1rZWu0bPdxL_KDIkN8Y1JOQX'),
      G('grass-cs/AABkmLcDzNVU2zrtYL2C1qQeL71k0JgmdHaB5E27yx9dUI--95StKdEygPhOKIcyZnB-2HgAzydh5dZSVNaCLZleLzLTTrBkGQ0XWb3nWbikCpyiCMDodgsRvbQNVQKDRr13zTArWI29azIoPmB1'),
      G('grass-cs/AABkmLfjQZ_q1fESCJ7wxF2odjRMOpDjxz_gN6ckCMXdQhDFwFD1rw9IUzlqd9-r1TtFWMerPsmxNg1MPJiR1Ucms20LhWF8mS2rqfVZdBp9p2ewrTJRExJ7SO3SRFNkpKIEEaoUCPAOeLa6Lc0'),
      G('grass-cs/AABkmLd1BIRBWbOerpjn9g9g2tUBUchB4dtJanMfx9ryjcZWlDk0Memd4SbjSKba5b0dHOBif90m2cQzB_J-7tepYvmrxtJDEMVjasSdBCzekVL9pkIFLtYOmX5b_lz7oKBjPgORzglhIY8UzbxH'),
      G('grass-cs/AABkmLe85wzMpO8i-pNZy0z24Gzx7QO9ulzg4SLChSaNTkKzOxx_aj5dH_BJAq9RvIlpuWMSKc-o4r0bc1yxrbrmkPOGUw0ub1_GhnsaCyTCZCxc8-aL4_RXHq_JV6ZMYSd8P7FdKDeaIy_1a2Y'),
      G('grass-cs/AABkmLcCm7BmfR4Ix3AMvhTLHzGJYsCTtiw0PBw4F3XiU98i1e2xX-JwiYRD4jyRQMJQbf9coaw2Nnj6WH8w3ycZBfrOm3MLXpLYKo-fFfwm12V1anM4BSXuKggn5y7ycvN4JPaZqrZvxYHaces')
    ]
  },
  {
    id: 24,
    name: 'VJ Spaces',
    badge: 'Standard',
    rating: 5.0,
    area: 'Maharani Peta',
    location: 'Maharani Peta, Visakhapatnam',
    address: 'Above Domino\'s, opp. Varun Inox, Maharani Peta, 530002, Visakhapatnam, Andhra Pradesh',
    // Above Domino's, opp. Varun Inox, Maharani Peta, 530002 · 2 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('16823062548056948244'),
    images: [
      G('grass-cs/AABkmLcxfwpCSfC-WJB0GI0X5IIhNuv5gaf0JIpvb7HFs16MsdZFj3Kmmp0mGnMllZaJe546M4Pr5s7iuO_8K-U0Oq7ry0tMoTYsyWHU4e2RLP0yiYnyl4c6oPGY7e5gtCtREBgFiEi4L_PoHXw'),
      G('grass-cs/AABkmLcwVokQEUNlIBmaJF-UUSH4b41dyBhXf0lLr5_9lSUjYw4pSFQr1LKgVup3nK4obvkVv9-Dp-DUH2CGyvRqpGJCaN5_PEL4lANwzBdshKpmV7H7OFBBmZPYO5pbsVTNZMSmpbCzjv8uVSK_'),
      G('grass-cs/AABkmLdjzvjIeTAZ2qEb44t14TgortaBb79EkWZEPXTLrs68n3xE_SsbuHId8Hg0NB8hCHaIKx_vjATdVpOmSDdM2Jy_dj5Z5YSjyLLGBf3t70kSDIrUEtJ3YqxwjKpC7qGCR7M9J3cCagJBGT4y'),
      G('grass-cs/AABkmLcHx_Hr2BOGQh1_KkEXp6qXRsYNDaB7xD6mvyBxc3t2a0HZdsnlSKvvCpDrIDI7S7jjIvXIUIqLCg779ZkzvBBmWu7lAYgwbTsu7t7jEkZ6peVawnD4MBITnVKQCGhG7lWWNyKWB_82rI3o'),
      G('grass-cs/AABkmLcUqKVMN2Wf9npMPf1wb2eAW1c6HXb7qYb8v5Blei29qkYNnEPy2gVLqZjWA8XPNC7sNfm4Cq5GsUSAmFT-PDalAipk25oJAerdljvhdMW1oos0eX57j3IbaBIAW5jwLOglzGosbQfTNDF-'),
      G('grass-cs/AABkmLcAmNrVgUD3stPOd_ym7YT56KF-bDm71ShUQzIDUUvGnXeqtCmJi9iiRI2pOMxWKxGwd2Qb7FrKcteDwsSjCc0fQnwO8raaLXaFi8KmubBAklkEgz0enel8YtNa9aVgZQQB6ZDjeZOyxApy')
    ]
  },
  {
    id: 25,
    name: 'Aura Co-Working Space',
    badge: 'Standard',
    rating: 3.0,
    area: 'Mahaarajupeta',
    location: 'Mahaarajupeta, Visakhapatnam',
    address: '30-5-24/3, Krishna Gardens Rd, Mahaarajupeta, 530002, Visakhapatnam, Andhra Pradesh',
    // 30-5-24/3, Krishna Gardens Rd, Mahaarajupeta, 530002 · 6 Google reviews · auracoworking.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('16936473479243129912'),
    images: [
      G('grass-cs/AABkmLftjBD2nNjOmn24jw_Moh1iJM9Xj-wXsWg2xHK-2d_aEDJ9nxYCBTkGuvrXMp6Xe6c7DIwh3XPY52UEdUIybluY8G6wqI6OqeiKcjeML3Foxj53ogWHUWBAgfaYa_LbxCONYQygOvuDAJcN'),
      G('grass-cs/AABkmLdMiT06YxhdnRZKPpiRCCqBPM326t09Nz3muACby5yuF2rs80wTPtzkdKoVEfGzj9LRhDU-Wb9mwi8WZrpyAsai7osSs4Am9YeGS1YMTIOG7lp72cikteT3TKsVOCM7-cEDJxo1VplrjADt'),
      G('grass-cs/AABkmLexOGs-PoSHjqbhb6LQT9yh0kOAZgM_jlXJTOnNmqwNx7JF-fxAzjU5KvqJZkZvpQ6CrGvNND18-gq8JnOG2gL2yYgftua0mQ3RmqIKpjSLJyMQct-jy9txYjJUYDfJMvL1ynqJ'),
      G('grass-cs/AABkmLdo7bl-P16RPXXfWg3InvdyrP7f9tUKptra5AhgucgUxG6lN-Ib8yH4BOhpgkTlOkktv2eFMSKBiWYiZYLhV4l_YYUsboPjkf1WWJ5y5zWRXbH-VNJctPGg848-_48Q6XJo3k4'),
      G('grass-cs/AABkmLenT9n7vgXMHy9RZMCTUYlEJxh4T9sJ7fKQBM_lbuwqdb5B2JWLbzriIBeBUyAPcFZwDipLnX7cT8KKtl4J5kMepXrKoojLcK0rV-h5BPC7joPPS1IYT6es2NsfC_oqWb-Wq0VdywhN1Mis'),
      G('grass-cs/AABkmLdvLdpZImAqFCrEAK7DR0KVKGf0XW-tuWiaL-MirhocyGKI2o3GhPZRsXdvh8zKIyPNdoE34Tgu4mVrPeL6ovmLs-yV8IhesBxClsEophcPd3yv9wUFMkBMR5iYjAFnOq9c9bXWkQ')
    ]
  },

  // ───────────── Dondaparthy / Railway New Colony ─────────────
  {
    id: 26,
    name: 'Shacks WorkSpaces',
    badge: 'Standard',
    rating: 5.0,
    area: 'Dondaparthy',
    location: 'Dondaparthy, Visakhapatnam',
    address: '4th Floor, Vijay Sales Building, 46-15-44, Dondaparthy, 530016, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, Vijay Sales Building, 46-15-44, Dondaparthy, 530016 · 1 Google review · shacksworkspaces.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17794026059958075857'),
    images: [
      G('grass-cs/AABkmLcseo-1WL9uZkRQkaCaZsrXQ_iocl3tWDSBsUP3LpFWyqXCqIlCY2GVstLwTL_QDI-gsY-2WEcUH2ZvnHmkFU2zSS2DvSHlQ456spQLIEj0mX0Z8tcpCyn6qK63Oee8R1AcKDrajw'),
      G('grass-cs/AABkmLcB-ESFcLw-Eovdt4oJO5St2xN3AEvbEodde3F7u-Ao6sLfGkl3vQl7HS5fTxpAT1N7MqYTpzKRgN-C_ezOGPOCEz1MTtiLfeHuHkxiBLMu0VB_yyi7GOoibopEepGuRTm1H9D9AQ'),
      G('grass-cs/AABkmLdgWxWtU_BLiKN6MbQ7BXw2ofxH6LZg-E51nlfFZevl13G1LAbEzXgR--y_yhDsFbn3fFljH-l6pYY5W45D3jeaGmK7xmMiSmKiSPAo2WDVZcEMrWPXQZpiGr5aQKiXKaEpMRyZUA'),
      G('grass-cs/AABkmLfbwB_HK20wgb7e0QhknVkIvxaWiFbQkITPdz8TIjt08Y56oD0gTL7Ek1x0FuBRS4i7yC7jUOX_nvBbo1E131Fm7tE6WYf8upwgaSGBfZYu7OROANbxE9A8rJhoxUP1Hf6Nq4uAeg'),
      G('grass-cs/AABkmLeFLvls81XW7x1x4tjAr_uoEOHdJCDJ_dh01VBwTwmKNWP2hw80TJQ0c4MXUYF68tLMl7FAI-Q0_z2dcRsxAqiOylyEc-_dA2TwqPX74KXRpFEe56TDsNJMwghRycgYx3J_018f'),
      G('grass-cs/AABkmLd-prXeVhufNyQ90sSwxvfDp9tenuyEMohZJen8-ojH7CYGWppGZVzV-nhLFfU6dCq_OgBkbeStfBC56kA4xRqVDPVMTXipjgUQ5Dk4NxdPuzbgxF5qZqxPK16y7IUnrw_lavsJ'),
      G('grass-cs/AABkmLf2wacdJRF8rP0vgZOH7sfxYMIF-ntJrEelloungRI0-n0kHz3WoxeVGb6kFccRVuKUocY-vGTTSOZvq1qahRjcEs329kO6Y9TSUx-0CWRghihEykbUXKKQcCrdulm2p1yh0OfUnA')
    ]
  },
  {
    id: 27,
    name: 'WORKS9TO9',
    badge: 'Standard',
    rating: 5.0,
    area: 'Dondaparthy',
    location: 'Railway New Colony, Dondaparthy, Visakhapatnam',
    address: 'Railway New Colony, Dondaparthy, 530016, Visakhapatnam, Andhra Pradesh',
    // Railway New Colony, Dondaparthy, 530016 · 4 Google reviews · works9to9.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('18154098217726304087'),
    images: [
      G('grass-cs/AABkmLexuq8wr3UeZPU4cDll-J1BMpgJaV--7vZrSLdy13MEyOun4Ku_wWtWY7IOTBPWbVnYE1sv7hjX1u8r2ms7RqTukgKUyzkMXXkLfgmOYj6XxRKtMIuwI2tx0KsbujMHOA1GRnyBKYJ2UGw'),
      G('grass-cs/AABkmLfHj9CmQmnSkIxvNpBaVZ3-TSxZ2-yLDYDxMxVlzCHnp7MzDQ1yPuZCDpiTyNIbFXvqSTJ7NTk3oltQbMSF8PJ90eQodGqTidaao0pZ8mf0N554Z__Be_DWuijYzOqInaTG_bgY71ExtdqM'),
      G('grass-cs/AABkmLdkbFpTKFEGqJpWuK-fDoisCsx6ufE4nXJr_Ul7VsElX2hu36X8qjOJRTGVABO6YLhV6TlgdUCPEEH8WGsy3r2gkgEN3slVJDKGCzoe6zmfPdXeacDSf6-I93xGn4Wo80d7TdKhRA'),
      G('grass-cs/AABkmLfOK31nhjmS6zW4szoT761YWR0-8HJHP328QbfdHZANHr0lBGws6W9Nz4Azm3Fn7ekMdVtd9YJYF01_XE--y9EX1yHcfEzZJx9ZTYk_pQMlO0W8GevRJ9S9FC1sWYEsEGGKZzXY'),
      G('grass-cs/AABkmLfO6eq7DOQnMEj_ECGVK9KErFzweMg77Td7VSkmyd2MOy3PGUmMDecNe59AUgPYUYLrdKuW2rE95dl6SYTUKGfGfiL5R7uCEfN7xwR3-NUpqWs7B-gIk82SO5ZO_mIHZFuCPE6VNVkjunD5'),
      G('grass-cs/AABkmLedRFinGzkFOjW-bt43a2AsXFArqkUivLV0qrDcmK1FVZdHOE7CzOwnE99N-0CFGY8OSjLtkyyCA4MfWK4tgzdl_DjQl_8DNEVied6W3OtxYvBZVxrkv7SxyUM8eDQjjssJDm1OW1YaS8g'),
      G('grass-cs/AABkmLc15nakJYTZUv0R0t-DeXC9z0tP1kQGTWNbNLKFKJ-OhnrM3HeafMY5N9Lu_lM7lJ6HkSdvZl_6R7_VAT0wZWRpRllV6EPqiD83wzP305ZWTY9dkx19P1MkVlIa3fsqP3fX8nVKLCXTO_Uv'),
      G('grass-cs/AABkmLdhp_U34h50L9fHlgQ8pIoqimHWG1Fste4mvJi3whlzeznSNeXA5U54Lo9PyoqGTNOJc_SwuyIkhU_F547j-jEKqqZca8yQoGA1QM-DgSl0ICOuthnpQGIDSLE-TIHln00C1RON')
    ]
  },

  // ───────────── Akkayyapalem ─────────────
  {
    id: 28,
    name: 'iKushal – Akkayyapalem',
    badge: 'Standard',
    rating: 5.0,
    area: 'Akkayyapalem',
    location: 'Akkayyapalem, Visakhapatnam',
    address: 'Aruna Inn, Sankara Matam Rd, Lalitha Nagar, Akkayyapalem, 530016, Visakhapatnam, Andhra Pradesh',
    // Aruna Inn, Sankara Matam Rd, Lalitha Nagar, Akkayyapalem, 530016 · 1 Google review · photos from myHQ
    price: '₹5,000',
    period: '/ Month',
    priceFormatted: '₹5,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('390214117908857239'),
    images: [
      MYHQ('ikushal-siripuram-2/red4sx.jpg'),
      MYHQ('ikushal-siripuram-2/hbm837.jpg'),
      MYHQ('ikushal-siripuram-2/nzkgaw.jpg'),
      MYHQ('ikushal-siripuram-2/rnxnsz.jpg')
    ]
  },

  // ───────────── Maddilapalem ─────────────
  {
    id: 29,
    name: 'iSprout Visakhapatnam',
    badge: 'Premium',
    rating: 4.7,
    area: 'Maddilapalem',
    location: 'Maddilapalem, Visakhapatnam',
    address: '54-2-44, Ambedkar Colony, Isukathota, Maddilapalem, 530022, Visakhapatnam, Andhra Pradesh',
    // 54-2-44, Ambedkar Colony, Isukathota, Maddilapalem, 530022 · 3 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('18185864547191802282'),
    images: [
      G('grass-cs/AABkmLdSOqwm07MiE-oDnXFhO0LVNPmZ9iFzVFK6kuT9xc3mFVa_ccpQVefOEcqUhK1FKAGOMMDByX7yZ6HiC8p9zx5iAG-WUCejXct_fRMZU4_E4hjgulyAXvc9kPM55CkbgQ27oKBiXJ4FYrM'),
      G('grass-cs/AABkmLfYnSmIsyypZVjU-PG2FMSAwk4pEXAZ9UHL3V10ThcrJX3m_Fs9sEBzpnyHHqtlJXV-Fh9jSlLaUbz_vc9vdkLfquhjFCFYQ2BT12g5bIUzOonCAvn_L2EHLo0wW2HmgZtpmmGHUP0kBj9P'),
      G('grass-cs/AABkmLeBrtXpLVp5CTUGRhd2EKKkYmpGNfNk0i99MFiUbrF-ziBMnKXg22cKiaZ_Uz7KruZ6P5g9tsGEG3AQQjjYJmGamCHRxO7tWay4yk8JWDxYG-lyjeP7K8ZPiT7Kfk_yoUjrtGiodUqouXpE'),
      G('grass-cs/AABkmLdIXHe87D5ZDu27y68DlJcBprBqA0HnebfyUlkuk9xdYWF_Hi-n_TgLfv2nu9f5KhyT63IYR7zglOLA3wIMmwTOChm6kD66nl_HlaGbSDRIvNNTBIrB7X41jSqlcpBnOXii8A6GEDYZ8nPa'),
      G('grass-cs/AABkmLdYoT7Jvq-w9nHrofb2e4mFXcmsQzyQ39Nuz8AyC8KVRVhWSF7sdSR8wUQy0uSJfBCwBeEABHDbR4-M0U6Wyr_qCg5kQp5w1wK5zwRAueDwovCOsVKCvOyn0w-W-qSVDF6Q3kPLprJt8s1n')
    ]
  },

  // ───────────── Andhra University ─────────────
  {
    id: 30,
    name: 'ā hub (AUIC)',
    badge: 'Popular',
    rating: 4.5,
    area: 'Andhra University',
    location: 'Andhra University North Campus, Visakhapatnam',
    address: 'Andhra University Innovation Centre, AU North Campus, 530003, Visakhapatnam, Andhra Pradesh',
    // Andhra University Innovation Centre, AU North Campus, 530003 · 216 Google reviews · a-hub.co
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9574775547875172639'),
    images: [
      G('grass-cs/AABkmLeY-M2gD7iFXb8R7buM-hEG_-FCz0vogj63RCFJOvkXrLjvWtgA79mu1b7fwK1oAzyICCKCwjV4Blkc3XPNRW_CIHz09pyy_vvu_7zJSeSQVZ0Dw5fnasoZ45fKVEakp_wgKDEWgg'),
      G('grass-cs/AABkmLdKT7hy0AmEnfZSafpBJ-vyN-jmh3XSwXSuyalmAEAX0ym6mfCt3e6v3AllpctGpG8hr7sbj8XtW_WR3ON5deEAf3g_nzxodWSGfH7S7Eo-FpevHMiHT0U0VFBMQqWpYQM85bncEg'),
      G('grass-cs/AABkmLfQ3iAyBu43lsYrB4bZF4QKgXkePKVP7AnsdLc4z341F04KxqlqcUf7Ucx_EoOH8Ga-scyEl-EH51DpU7uDrXIUaYAAmaqs4aOJa4lzRyEfWlDmlUMoccIO8QhJ3v3DFGp5s7k'),
      G('grass-cs/AABkmLe0LH-2F2VaEaqwKsH2WIygZsz9406lYjTbVzSwI0SkV9EL6p7vrnA8ZLEe9I1ae2OhIUqumPuD-WEJnRQqACZUeZxNQeBoz6tkU3eKfIkqttv6BiBrlGrmrk5ouwvl8UG9f06K'),
      G('grass-cs/AABkmLdCjEQcV-ZO4vSNBRRu8A7qYDypb5jn6IVzIpmZpxf5Z6Hdp8EmENiGkBAelIbN2qLA2zl4gQLonPU_rXyrJ_3Oe5jy79y3IBz24YvTGizdOpY7gG82x8sdm2VpFdNVz1SEVd-lqw'),
      G('grass-cs/AABkmLeZEhSu3xJmMrTKBzpTTV9xzAtETlg3NRQ4ODF4zC6sh95pK_wTH8ZuzWjaHn2VCErvvl0vpSd9T6vU5NleaojHbd_aWYPCIu8yRLBVVT7Q6hr-ZDg4v3dpEdl6UBUyYTfH82w')
    ]
  },

  // ───────────── Rushikonda / Yendada ─────────────
  {
    id: 31,
    name: 'HawkisH Pro – Rushikonda',
    badge: 'Standard',
    rating: 3.0,
    area: 'Rushikonda',
    location: 'Rushikonda, Visakhapatnam',
    address: '4th Floor, Glitz Building, GMK AI Nexus, Law College Rd, Rushikonda, 530045, Visakhapatnam, Andhra Pradesh',
    // 4th Floor, Glitz Building, GMK AI Nexus, Law College Rd, Rushikonda, 530045 · 2 Google reviews · interior photos from myHQ, building photos from Google
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('12379351314755450097'),
    images: [
      MYHQ('hawkish-pro-tech-one/w4je3u.jpg'),
      MYHQ('hawkish-pro-tech-one/u2t6sm.jpg'),
      MYHQ('hawkish-pro-tech-one/8qgdk8.jpg'),
      MYHQ('hawkish-pro-tech-one/jy8cwb.jpg'),
      MYHQ('hawkish-pro-tech-one/mr5hj3.jpg'),
      G('grass-cs/AABkmLfin2iDdwBmFITukiZEzLcTNUzTJCy1TwJciriG-JfHUFnrcq54r7WsbU_hvZkshpS_-fOTcgbB4J3G2t1-EstF7Xo8I6_OLptZFPJ9GT2A_8SKs0ROTIYpk6Y3SVSD6Om1RFtK6A'),
      G('grass-cs/AABkmLcXIUJqk9MuJSKpKfpd6Gi4iGXbKKav5WbRmEMY-s5IHiJJ6qEfqPQpxUpoOPBT0ZnLomrs6wycajQLv6JvBSzaghsEpWNKE_fst_IFah1Yfkjbv4CZNWyKPj2ToFMfe1uhfs8FQ-lkf7zj')
    ]
  },
  {
    id: 32,
    name: 'CO working spaces PR',
    badge: 'Standard',
    rating: 4.0,
    area: 'Yendada',
    location: 'Yendada, Visakhapatnam',
    address: 'MK Gold Coast, opp. KP Icon 308, Yendada, 530045, Visakhapatnam, Andhra Pradesh',
    // MK Gold Coast, opp. KP Icon 308, Yendada, 530045 · 1 Google review
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9174576186932497173'),
    images: [
      G('grass-cs/AABkmLedoKPZWUfphbT8HkpBpJNehuxfhUTXfbkcxRz1NpSvddiAVGem7u60XUw543iGXfCrKnv_acdDGSuaJgfF-kWKXCqSpRk85s6etjHbinQdVtgb1CMOPJ08uy5A2gqItRCZv1HwOsF674lX'),
      G('grass-cs/AABkmLeHba3VuSP4U69CDgsPrztwUgh1NbNtVs4fhdseh8JB0Wrb32at0nbI8q3I_WncSSO2Cktnmmy3--5e74RZsf86EBc0DCfsPeb3S50_5PM7GQwQAD_uWwuhAiw6FdAOZh7HtiuBkztuSAbZ'),
      G('grass-cs/AABkmLeJfQa19BX2g0ejA8Po6LGmL_qUbwzRuF0Kk5JXg7IpuGFuoYsoTAP3eR06EFA0yifjU0jOtouTuHaDLprZa9EVw0--CFRsxviwHxMHzkokyKqsyVnmBlS_vbPp0ClEAZWWFAk87y3dvzs'),
      G('grass-cs/AABkmLdgR0j17-0NtGbzMYCQWIwhEVSa8VXCqo0hmR3Y8ERE4C1S8p9Yi1sDHXVAVgn09oAZzrO_5ZiySDXx3SFaqnlTtaqMv-1MDBklHEX07_KRv32pSgJp1V3Iy5kKC0297qVddS8AIYZnQUwC'),
      G('grass-cs/AABkmLexbMwOcg_uO4hkHeuTWlVS_GaX804LiLXcL4WOmmMGmGKNDJOphn66pfcHmuHba5iZcRD36p18j2rL0xWszrHxjjFzDrzm7exAhMlw4b6KBGGL-uchYR8yYc4x0INFdrXFa5jNpUJQ5Q8'),
      G('grass-cs/AABkmLelw_xmGFFV66bVhabwrCH1qRt9G-Ynu_ST6-xcVlb0G1OmY5WS2QCfcPJrcoQS7ixvOfgm7-76IxHyUGvRXkgI5mzb3n7tiPv6SW_RhgCDo-EnMbt0_Fh-I7kmfpIpgS3oLBwOx5qdRFo')
    ]
  },

  // ───────────── AMTZ / Nadupuru ─────────────
  {
    id: 33,
    name: 'iKSANA Workspaces',
    badge: 'New',
    rating: null,
    area: 'AMTZ',
    location: 'AMTZ Campus, Nadupuru, Visakhapatnam',
    address: 'World Trade Centre, AP MedTech Zone (AMTZ) Campus, Nadupuru, 530031, Visakhapatnam, Andhra Pradesh',
    // World Trade Centre, AP MedTech Zone (AMTZ) Campus, Nadupuru, 530031 · no reviews yet
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4783011570679885943'),
    images: [
      G('grass-cs/AABkmLdBK7MpLpRyAy_DVt1nD-vaPZKfBqS91kB2Hrd81ki5MbSicj6cKdrOepxWmse7MkuRigTGIEl0_1f_jusSRn2pg8dR3i__hBKr4w4QjxLkhdP6NLgmLOZ1ibbMjDSzkbbiB1RDA2Pt-jUE'),
      G('grass-cs/AABkmLcKt2KbZEa3El7h5KXnzrkQGYXCnYcoli-taLdFsKwQmY4jEgwGvHq5xdHNatUywDb_Ms-XG8Z9Se8fOgvQaEVxGm3LpRL0torWXYstrCqbjtvIR7QgNLcUHKVJ1DAmX47DELnX6GZLRVi7'),
      G('grass-cs/AABkmLe_26aztH1fizkGWFiUEPAipAGCF3H8zhUcMReP--6pmiWtL8H3TJmhBXJwJFQvPqAWTOXRkjsefOCeAtDJEfP26D3XviMQauJ1VEQaA3vn_1Rxkund6Yw3t3KTmGgyBZYeJ7rMYJKmuTaA'),
      G('grass-cs/AABkmLeO7GyJllbSmW2-nBCYVO_9cjM9L_vlvu8fXprViUghb_4hHmrTYxyjw-dTvDJb0wc-Vd1tudcutSuqkeJql8pjdH6iVeIwmiJDneUW84e-YjoXy3B7s9-DbTZGmnIRo7Wt5zfsvwt3JXyG'),
      G('grass-cs/AABkmLdxjmrcoTJpcQfTro9UtteQhVeiyAz1MW-6CJeGPPtB4PD0j405I2Z_4Lj7tlqvl5flDTnFNpOrVV546KNRVJoeCQGTYQ1GnIV-z9IbCLhwByyAbe8y_Dw6TjOb42cH_GGD1tjpKqTiam8h'),
      G('grass-cs/AABkmLedWYjp-HTdvZz9IaYR9fqUIQbsOHYkMk_H1ZWGKs9ywiFeqQHATtjs_5RRbMkAwFUeDIuFRaP3kOUMzuzDCWfKu87aJxNWHA3QMhP-lWGgSNq8SUYGvwp04vSQH_0tQH41qBBWoDeqa3_2'),
      G('grass-cs/AABkmLf5OzL1rdJKgEaq09rzwfmcfLtLI2Nld1TQchE9KdMOHXj8Vu86UbuxTZS_TTp0nGDuWC8fFAgCxatj1As6fLYdqmR64hW6S_b97n7uuEcVBYXLzMKkjwFp5WKxJEmlY3FSUxdPMT79aDY'),
      G('grass-cs/AABkmLeKZaPrrfgJIS8pBz2VGmI-3QWiv0-EZ0rneAchxwuWSEkkpOvawMgC_zEK29PdWYeYEQQf2OFVK1QXA33v1b39TC30vJsu6tWCL_W8ymCLZHHoRKfH4wrYvRyfBZJMR2JZy2CR6Va_K_sT')
    ]
  }
];

// Operating, but no genuine photos of the space published yet.
export const visakhapatnamCoworkingPendingPhotos = [
  {
    id: 34,
    name: 'HawkisH Pro – Asilmetta',
    badge: 'New',
    rating: null,
    area: 'Asilmetta',
    location: 'Asilmetta, Visakhapatnam',
    // Asilmetta · only 3D renders published, no reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('11521721360044025258'),
    images: []
  },
  {
    id: 35,
    name: 'Coworkoze',
    badge: 'Standard',
    rating: null,
    area: 'Visakhapatnam',
    location: 'Visakhapatnam',
    // Only promo graphics and AI-style images published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9017925853286028750'),
    images: []
  },
  {
    id: 36,
    name: 'KW Office Space',
    badge: 'Standard',
    rating: null,
    area: 'Visakhapatnam',
    location: 'Visakhapatnam',
    // No photos yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2356149487789008737'),
    images: []
  },
  {
    id: 37,
    name: 'Meher Plaza',
    badge: 'Standard',
    rating: null,
    area: 'Visakhapatnam',
    location: 'Visakhapatnam',
    // No photos yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15171482918880213350'),
    images: []
  },
  {
    id: 38,
    name: 'Mikro Grafeio (Beyond Workspaces)',
    badge: 'Standard',
    rating: null,
    area: 'MVP Colony',
    location: 'MVP Colony, Visakhapatnam',
    // MVP Colony · no photos yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9863358433271997452'),
    images: []
  }
];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const visakhapatnamSpaces = visakhapatnamCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const visakhapatnamNeighborhoods = Object.entries(
  visakhapatnamSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const visakhapatnamOfficeCards = visakhapatnamSpaces.slice(0, 8);
export const moreVisakhapatnamOfficeCards = visakhapatnamSpaces.slice(8, 16);
export const finalVisakhapatnamOfficeCards = visakhapatnamSpaces.slice(16, 24);
export const featuredVisakhapatnamOfficeCards = visakhapatnamSpaces.slice(24);

export const visakhapatnamAreas = visakhapatnamNeighborhoods;

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

export const customizedOfficeBanner = {
  title: 'Customized office solutions for your team',
  features: [
    { id: 1, text: 'Customized Office Spaces' },
    { id: 2, text: 'Prime Locations' },
    { id: 3, text: 'Free Guided Tours' },
    { id: 4, text: 'Perfect for 50+ Team Size' }
  ],
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/83bb813890447d5d3d6bda55c7133a5fd48cdbc5.webp'
};

export const stillNotFindingBanner = {
  title: 'Still not able to find coworking space?',
  subtitle: 'Our space experts will help you find the perfect coworking space in prime locations',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/406c83ccb0729b57d9beb973b7e4088ab7640ef3.webp'
};

// ============================================================================
// Visakhapatnam Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allVisakhapatnamOfficeCards = visakhapatnamSpaces;

export const getVisakhapatnamOfficeCardById = (id) => findOfficeBySlug(allVisakhapatnamOfficeCards, id, "visakhapatnam");
export const getVisakhapatnamOfficeSlug = (space) => officePath(allVisakhapatnamOfficeCards, space, "visakhapatnam");

// ============================================================================
// Top Coworking Locations in Visakhapatnam (Explore by Neighborhood)
// One tile for each of the 10 busiest areas, using a photo from a space in that area
// ============================================================================
export const topVisakhapatnamCoworkingLocations = visakhapatnamNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: visakhapatnamSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

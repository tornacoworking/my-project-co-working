import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Amaravati (AP capital) region coworking — Google Maps + myHQ / Office Hub data, fetched Nov 2, 2026.
// The capital itself has no commercial coworking operators yet; RTIH is the only workspace inside
// the capital region. Vijayawada (15–25 km) and Guntur (~30 km) spaces are included, tagged by `city`.
// Google photo URLs can expire — refresh via the Places API before production.

export const amaravatiRegionSpaces = [
  // ---------- Amaravati capital region ----------
  {
    // Government startup/innovation hub — incubator-style, not a pay-per-desk coworking.
    id: 1,
    name: 'Ratan Tata Innovation Hub (RTIH)',
    badge: 'Startup Hub',
    city: 'Amaravati',
    rating: 4.7,
    reviewCount: 73,
    area: 'Chinnakakani',
    location: 'Electronic City, Chinnakakani (near Mangalagiri), Amaravati',
    address: 'CH77+JH, Electronic City, Chinnakakani, Andhra Pradesh 522503',
    phone: '+91 73968 52244',
    hours: '10:00 AM – 5:00 PM, Mon–Fri',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    priceNote: 'Incubation hub — space typically allotted to startups via application',
    ctaText: 'Get Quote',
    website: 'https://rtih.co.in/',
    googleMapsUrl: 'https://maps.google.com/?cid=13375607600891187747',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdoEaqxZdFb6fjhqiw2hExncaCroPkK8OqwrMj2jSL0K0Fr0f0ZHEyKOGBLwcumlsNeB1QOapmfAl6TPbqzMgI-i24lyzAy_bTnBEdbxg79FjTO0GkmSGxsLEeALISfTr699aMHEjQRB9VL=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcc4Uqbo6F_yS6RIHKZ0gXM8Sqh4gOZjSdf-O0i4XA9si0Iv7c6Oy8GYfCxLKvpLAoROOhKv5L8U8hLuIhzhmFYJONkD3SNmQVMWC0a5ajUx8omjDwSRh5BsgQ5mkAsWtOilV-B5P5rbWvX=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf2T3crMpb0agQgdcAWxYP8K4217lpLFmyIsnLURU0-ESsC4JrhECk8eZ_uMb1wvQWfpt1dNtXqc_CYUxEe_PZ4pM2yRmfL-kzmJw-lzZd6OlMFq8W_JV-2DdWZd3t6s3S7B_lZ012ElThf=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf0xbKOUczs0_CPTcEF7-9XmWA7KTowmeBL6fF-3YHUTbdY_WSQdoeJyz6ELgODwq4sUi4l6Ty0rES5fstGDZRq78ishjsvv_2NX6gAaQeYIU9OFHSgJVWmkgxjcdDSvBmZ6Vwmnw1gZZbH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc3uO2o4boc1H5uJJlrT29clIKpuW-53RBV9zHO3R5UbyeU8kK3oiNjInOwYRsnfebk3TvOzqIoTxjGWuB2x51EIDMXDs1Lv93j6mAsFPskL5QYGs1RK-0YSJRJqwWShd8YI7xamFSNzL5J=s4800-w800-h600'
    ]
  },

  // ---------- Vijayawada ----------
  {
    id: 2,
    name: 'The Cowork Spaces - Benz Circle',
    badge: 'Most Reviewed',
    city: 'Vijayawada',
    rating: 4.9,
    reviewCount: 400,
    area: 'Benz Circle',
    location: 'Benz Circle, Vijayawada',
    address: 'R S Towers, near Signal, beside National Highway 16, Patamatalanka, Vijayawada, Andhra Pradesh 520010',
    phone: '+91 92466 29129',
    hours: 'Mon–Fri (extended hours), Sat–Sun closed',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    priceNote: 'myHQ: "Prices available upon request"',
    ctaText: 'Get Quote',
    website: 'http://thecoworkspaces.com/',
    googleMapsUrl: 'https://maps.google.com/?cid=13567595231032964517',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeOqT4DQGtqljd34Dd87jZR4smjEjGBfgwvVwSfeWvEDhDwm0yxs15vyG618ZyoNBrIxLe60YezHAXCEECXZ8-wOvZa5MAt5smrgkEypPTRSR7fsQOa6Ewrx9cwlLyqas6N8DwUxw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdSGZlIJ6H75QS_qN19NZAY9K3gr2QK1K7vHtRkxOYKtjjCicacGigNouM-ZS90SK8-LgP-n2WNaN-zEhu_CqllmtSh6OM19AOMJnX3Y2pIadV_7stVAhizA7h_tEDz7u0k5aeE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeCU2-wohnsuMDWO_ljiZ_jirbZyvikOjvDRglaq_VOO7Uw52iQH6lYTUZpm0p47pr6zVnjdDZOn3mtz7xWZoBa1zJMDhgFx7gxdrvfUMbF9m3DvgCIYQWIRPAt8xmwUpa337KY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdPeRx22VlV57ZShY5ZdNZle-chvjYANuHx_UWL9VjSbkGbRgYKnP2jcNqRY_ZlgNdHrUAi2UIeZmXbSG9yV0bO5wiU3OpE1YgMFvBzdy3sjK8UWohEmtTcz7tcHmaDvVWlbQUyKA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdEKzs3aUcEhOzmPTlN_pMFHGvRs6nvhuYIjvs6oEiyFwjsVo-XXaEDAz82kmyM9awISk85aSn7_B2fBajQRkLuYyG8Dky6QBzYL41BKiEbVNdDpTvydMfxS6invnurqgY-PC7-=s4800-w800-h600'
    ]
  },
  {
    id: 3,
    name: 'The Cowork Spaces - Sai Odyssey',
    badge: 'Top Rated',
    city: 'Vijayawada',
    rating: 4.9,
    reviewCount: 368,
    area: 'Guru Nanak Colony',
    location: 'Guru Nanak Colony, Vijayawada',
    address: 'Sai Odyssey, 4th & 5th Floor, NH 16 Service Rd, beside KFC, Guru Nanak Colony, Vijayawada, Andhra Pradesh 520008',
    phone: '+91 92461 16364',
    hours: 'Open 24 hours',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    priceNote: 'myHQ: "Prices available upon request"',
    ctaText: 'Get Quote',
    website: 'https://thecoworkspaces.com/',
    googleMapsUrl: 'https://maps.google.com/?cid=6924994841613367045',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccH2Mhi0osdEfWgEf5fPkVw2MzjcoB905nDPqYb40YiLDPBT0B8BOFb2Ijx-UBEBG6Wn9emDjTIdOKQl6EzjndUjzJx4mkV7ccZto-2Fw4obllNP2BdgaB0Vat54U4pyBWe_nbFU5MIwKt=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLebDYDr5J0sW2u3tWsVG4yFzZpnwWTFnNo1lBvou_06xGGxv1KPEkBbixi4znntd19IK07dSv8meNLjrEzW96zxyNyKxz9zt_TLDvTABa8Tpast2Khk6TkJeT2w6qB-8WEqo2QQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdkQQxzb0YDB8wE7trfiyq57tpU-OmzSFFRy6QCh09A35GZ_QIxE3s0r4cbk14WvqgdgNatRETYcBHRmMLotPODg8DfL2ZcLHiABo3GteVvQeT6oWrlXbVVajWiAFiWYlJvGWd0yozEtsc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcextKf3I29XoiDzd9YOWn0q6ueL4aSPn_9pn8m01GKsY_WCNewyvjBp6DsyvK0aThX26XoPqNs1rbFL6F5thWg1MSjFygIUqyVUiPgMcDIe4buyBxi8uH31mhY1TVxRQeTxKfCdQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLczbXg3bME34ENd88DyCPuZL99s8KTARSOxIRzXulkF8NqCGk3lCUocEpNcLFekqKrB66bp19N1PJ0EbRgPbZp_637-o7DtOspcnGZyL5T9pncEOmfXlSr87zZpxIN8iOObRN0jFm8XP8XC=s4800-w800-h600'
    ]
  },
  {
    id: 4,
    name: 'MyBranch - Coworking Space in Vijayawada',
    badge: 'Top Rated',
    city: 'Vijayawada',
    rating: 4.9,
    reviewCount: 39,
    area: 'Benz Circle',
    location: 'Benz Circle, Vijayawada',
    address: '3rd Floor, KK Towers, 40-1-52/C, MG Road, opposite HDFC Bank, Acharya Ranga Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520010',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    website: 'https://www.mybranch.co.in/coworking-space-in-vijayawada-revenue-colony-park',
    googleMapsUrl: 'https://maps.google.com/?cid=8684349962129932786',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc3JlHEU5TmDU4LBBW67e2_mqpspq1zCQOQY-hdWBGY2KpkuOvI_0OFqrWb2EKm4M7QxC-tbfMKCD6yURwFyFX-xLD0GRf6WmtZaHfYq0WF9B-uSQp09zcowLeYLp_Tal-1Ov_TPn9J1JPQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdwu1WOIXNASxigB8PQvREj8XDcvC2_YRzc-ojrYCKrKmBJ6ftudT_fAcW5Ds0oKG6n3S_l4fnuo3YZNrRNgXPGUi6XUvKYw_16RyvRYKF9ldPSTJZYTDltCr3hauzATGkBzq5limY4GnWX=s4800-w451-h501'
    ]
  },
  {
    id: 5,
    name: 'iSprout Business Centre - Amaravati',
    badge: 'Premium',
    city: 'Vijayawada',
    rating: 4.4,
    reviewCount: 94,
    area: 'Benz Circle',
    location: 'Benz Circle, Vijayawada',
    address: 'Door No 40-14-8/2, Mouli Towers, near Jyothi Convention Hall, Chandra Mouli Puram, Sriram Nagar, Benz Circle, Vijayawada, Andhra Pradesh 520010',
    phone: '+91 84649 99920',
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    price: '₹10,000',
    period: '/ month',
    priceFormatted: '₹10,000 / month',
    priceNote: 'Per desk, Office Hub listing. myHQ quotes ₹9,000 (negotiable). Private cabins min 3 seats.',
    ctaText: 'Get Quote',
    website: 'https://isprout.in/',
    googleMapsUrl: 'https://maps.google.com/?cid=13389674081454363198',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdN_dcgbep_VV4xlqukq1INWoul7J1dJRTvixOM9S2O2d8RX6VHcpQBTk_i6yMayaaoa5mBD8LP_zGDEhilWTg1oDIFrNXKzUxh6PbwSB6fNq28Wmrs5fs4Y7sYWUsR38Ulfwg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcbgD9VzHpQFx7Ox0bep_rZsaY-78tKWy4FSP6tq1hUWgurvqNt2bSrGMNU_bPzOGzaPpprsvVazHbn5Y2tELsXgY6Kkn2_hWYwVJeEmJ3sKosXpF0FwKChXRjKj-Yfzhp1lCVqag=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdrWc__UtjXO0tp4ItwKPgIqwsMk9j1qPytrVkDqKTivE9C-YbI0NnBVeKbS2KfDnUBlGvRKNo_z14v65OfmfQkinIPXMSJTAnN3l5dwoBy9E7ECkY49afuliQLYn-6NtCjMwAv=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeEmbBuVSicA6owwnbZu1zEh5y-Q7kxwc0O6L_68OXa-CAzk1PcMCgVix1XusWirK0mDe6oENG764aJ2gQqBTh51bCEieeV2vGGLVaDoPH5JEdKgguEAOdrnDkPiXfAarAwC1a8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe0EEe2tgKIR1Iah-8Ovm5ELmyUJtHKqreOScwZ8n3gAH3PlcPdrUXoYqdk0NuS1oRWxct0YiKCxu7XTJO39YOvJaCjLtp-Xpv0WbHVdSv4DhjuOfM1iz53QcFg2xYEFpHkNH3k=s4800-w800-h600'
    ]
  },
  {
    id: 6,
    name: 'iKushal Coworking Spaces',
    badge: 'Best Value',
    city: 'Vijayawada',
    rating: 4.7,
    reviewCount: 75,
    area: 'Labbipet',
    location: 'Labbipet, Vijayawada',
    address: '5th Floor, Prasad Plaza, 40-3/1-46/4C, Koneru Lakshmaya Gari Veedhi, near United Telugu Kitchens, Mogalrajapuram, Labbipet, Vijayawada, Andhra Pradesh 520010',
    phone: '+91 81215 55503',
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    priceNote: 'Per desk, Office Hub listing',
    ctaText: 'Get Quote',
    website: 'https://ikushal.com/',
    googleMapsUrl: 'https://maps.google.com/?cid=14290158450630591415',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeGn1wuu0dwll0jL9CcMYVigqkhwHsY_3S3fqGWSO7V10SPn1CIjp55-CM5XdHNyCrTFRmsnVVv8sIPzROai8777SZZRMOS_T0yEAJoK3FRbsoDgliu3fIsXc026T8f_jcOTDzY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeDm7LO0WQp1xrtI7u1zJjnUP7tBvGMakw9eKm6CNm8EEkkrzIQWgZR_lFr30-xqvA2f8Nc_iKR4YSqgG6ffhP6s8h9QdA7gdaXSUgBvrdiQQyAQIZmrUhny-XND7cN7XCkjw8U=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd475kur_3s6LNJDyUM1maXrHobBE094GW5uChOuRYH2oqVIjOjmftK_erin68A51AuCTJi95njkevHYOU4XNDGMzJJpmnvRstv9LVNg6LbyyjPELe4xOZSe-RTTxQaoAH4BazPYg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccohjVV-I4YY-cENCFvR8FNa4-EsGCQhqa1F0qyWYg2e4LdY-Bh0ysyfOnnU4tRMaxkc6of4a6uzegeWS38yGq0fMqVXrcm7QTb7z8ZjYtk80hy8_dUJt1M1Kg7WYb6L8P6l0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc4P1-MlmwRFJr8TgX2cFigw5GXa4bAA4KOmPIg4p9OXcWOUcD52VV9qEkMFEIcyMHlCgDOUgSLk7NE-Yb4JW3P3Jvw_WkI4KY0YCMV-WQ0X_ThIwgpAs5At0D931lUwMxkhVAa1RmD2L8=s4800-w800-h600'
    ]
  },

  // ---------- Guntur ----------
  {
    id: 7,
    name: 'Guntur Coworking Space',
    badge: 'Top Rated',
    city: 'Guntur',
    rating: 4.9,
    reviewCount: 33,
    area: 'Krishna Nagar',
    location: 'Krishna Nagar, Guntur',
    address: '5th Line, Gardens, Krishna Nagar, Guntur, Andhra Pradesh 522006',
    phone: '+91 93936 93938',
    hours: 'Open 24 hours, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3898482549184689080',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLezSjjCJ9WPuVNEfo4Fl04QNaunETVudjrHK_NYJmperkyMTziejBY5qU31eOgiutqA3Lw6XnbI6HCgYIPS7aOqEAZDezwVZwj8HSnj-24pqFWnnUi_TvVCKr_ppCbRQDXuuLLBj-ZU-KQy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd595lrvXmqoiZdErrRPZJEB35NE8kP28Ttikcv3IrlpPq1XvPUhH_UlTD_bjRS7OJxYqgrups84n2CQO0gDkBhqlmvgOsOrQL1B-ao1d04l3hz4oUJjMoaqmec9qPbgp7XEr9zf77TU0U=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRwqWsop1RlzpVYtkf69kNAIHG6A6a9ceI3uQCFXNpmm3JQBJzdTMRz99sxSIdCE-Y9sKikIGmPM4UKoi6N4ejZwgZwBqkA_5SP4uwTUsTVGGETnjRawbuk8gf-CzF6D6yrWhifWw66mw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeztBMoQ6naBJ7qArUHg-Oivg9zktW4ULdyztn47ZpAgss6bve1q3C0U24XKry7o4aZh_dThvZLlCjbYKVM6HYmXrubrSQZsvll9LKNV369yghlILjorU3I4eYoE16SupVcmCjWKriaEXqb=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcMVgH98Vh7N88uRUWfsramMzcnou8V-9ZY1cChu5oeysQb3WSeKWZhOW_fHC4jiAutxMDgTuDa_at37CGtJYrREkJ_KvGLf9La6YBVdgt96uh4IXnCHEVf4O_6QOgho5IhpJvSPfqpiQr7=s4800-w800-h600'
    ]
  },
  {
    id: 8,
    name: 'My Cube Work Spaces',
    badge: 'New',
    city: 'Guntur',
    rating: 4.7,
    reviewCount: 3,
    area: 'Panduranga Nagar',
    location: 'Amaravati Road, Guntur',
    address: 'Door No 133-8-1923, 3rd Lane, Panduranga Nagar, opp. Naveena School, Amaravati Road, Bharath Peta, Guntur, Andhra Pradesh 522034',
    phone: '+91 98492 35760',
    hours: '9:00 AM – 9:00 PM, daily',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    priceNote: 'myHQ: "Prices available upon request"',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=759768817016298170',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf3cre97HtvaTlnka2CS417vCZwv0SKflIWoaokSIiHHymoxJK3gF288h1lDvxn9A7EBVdHtNI7exFpO5_30kpD6Dv_pgsMTdXZbscbSdyQnTuLkYSCZcbWXkvkCvj32K42KzTSaQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdtR4m1GzfLFIKxp4q6zn71yccyO4CeHu2mZHq3n-4y2zlU3Wm1xgutAPnO7kOS4Gw0S3g5td1QFRro2mqSGqFaoV91eUX3vlY5lKg6zf9bHJLxuJdjqomQMb6GoMzyp9mfPSs8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdXNGLoKf3LP7L1D5zNx5HmYoNBsEEmjZ9VW9qkhks6tDg9hLEuz6JzGW6FRN8QGSUCvoAe70W_oRPrXhgL8DVE11vUhEePsMyHt3kNcEzIxllRVE2A3Epyq8jZb8nrz6NhLOwa=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf0rQXLY7N2tsjyVRZNAsjYdB3EDNtnYip114VakfZ4frAaiNvHk-0WMJD--kVqWq-Ry_TT6jU8QSvBxYH2p1mEPVnklgUld-cVWmQcxBeMBtLC63qLFfQRon_CTOpsayCGDh4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcl4676Fs3pPehWsWPBDXBUwMTPcChxXV_eY_owXAXGDrva6iZ5jx06VIGJNnIQzssRiaL92I3xqkisUTqawmVYpIDEW3UBTUHtFDbsD5nBx4gfWdplYcEaFi9ZgXRw2Hfz2eG_=s4800-w800-h600'
    ]
  }
];

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Shown for spaces with no photos yet (same placeholder the Noida / Chennai pages use).
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const allAmaravatiOfficeCards = amaravatiRegionSpaces.map((space) => ({
  ...space,
  images: space.images.length > 0 ? space.images : [FALLBACK_IMAGE]
}));
export default amaravatiRegionSpaces;

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const amaravatiNeighborhoods = Object.entries(
  allAmaravatiOfficeCards.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const amaravatiOfficeCards = allAmaravatiOfficeCards.slice(0, 8);
export const moreAmaravatiOfficeCards = allAmaravatiOfficeCards.slice(8);

export const amaravatiAreas = amaravatiNeighborhoods;

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
// Amaravati Region Office Lookup Helpers — slugs end in each space's own city
// ("-amaravati" / "-vijayawada" / "-guntur")
// ============================================================================
const cardsByCity = allAmaravatiOfficeCards.reduce((groups, space) => {
  (groups[space.city] = groups[space.city] || []).push(space);
  return groups;
}, {});

export const getAmaravatiOfficeCardById = (id) =>
  Object.entries(cardsByCity).reduce(
    (found, [city, cards]) => found || findOfficeBySlug(cards, id, city.toLowerCase()),
    null
  );
export const getAmaravatiOfficeSlug = (space) =>
  officePath(cardsByCity[space.city], space, space.city.toLowerCase());

// ============================================================================
// Top Coworking Locations in Amaravati Region — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAmaravatiCoworkingLocations = amaravatiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: allAmaravatiOfficeCards.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

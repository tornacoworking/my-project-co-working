import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Vijayawada, ordered area by area.
// Sources: Google Maps first (listing, rating, address, photos), then myHQ, GoFloaters, Qdesq,
// workin.space and Office Hub for prices. Every photo belongs to that specific space and was
// checked visually: people, events, promo graphics, logos-only shots and duplicates were removed.
// Closed listings, study halls and non-coworking businesses are excluded. Checked 12 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/${id}=w1200-h800-k-no`;
const OH = (path) => `https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/${path}`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const vijayawadaCoworking = [
  // ───────────── Benz Circle ─────────────
  {
    id: 1,
    name: 'Coworking Studio',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Benz Circle',
    location: 'Benz Circle, Vijayawada',
    address: '4th Floor, Matha Tower, Guru Nanak Colony Rd, above Axis Bank, K P Nagar, Benz Circle, 520010, Vijayawada, Andhra Pradesh',
    // 4th Floor, Matha Tower, Guru Nanak Colony Rd, above Axis Bank, K P Nagar, Benz Circle, 520010 · 90 Google reviews · coworkingstudio.in
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17765652278898489129'),
    images: [
      G('grass-cs/AABkmLdmXrK36clXchJ0D_TlWfVMMvT432BpeIC1PNhE2Ix-gys19Iihn5N39uNbOLbG-A4rgtSx5lqgC6s69ypG9K7-tB6gjBJhrLsQXuuH3CbQjghXtiFCt-qPDst_-cjkpAU2ydhe'),
      G('grass-cs/AABkmLfyN8_1xTEfBJXhi_pwv1AYhjlbtoP310nBA9QFCII-tWA62-O07kMsjm4xlyLJdvks-guEkYNzeljwqVrEi86i4JIImUI6BbEGmcPE7aI3YMJEpRkxpKZ_2FqfOpuxhqQOu2VP5Q'),
      G('grass-cs/AABkmLfoF3WibjA89MS0I2TbCjd49_n40JVJiv6akAn_fX4CipbLctEERnYS-wrv10a5igvXBAgLrrvOwm3xFDpc88c4Q2aF6pn-43E8VjiGoma0BLCguSp5iA9Bvnl74n7YMvXd2kXU'),
      G('grass-cs/AABkmLfAO_psH4XdX6nMBiPI4bddWo7kEjAJZ5CC0XbKOYQUaq8e-ZagJ8ERjhVb68yKEq6zx5YxUY6nf044WFm9Argh2E-hmpFgQm1pBT9qvXOF4TbFUCmq05FQL-KsHm-O-KZtlrQ'),
      G('grass-cs/AABkmLcBLRaVFhlcEKy_vPgVCxZJFfJ87U3kJZZot0aC2ZcE8ztP_B5LgcfrGMF_j4ov9b1-O7BjT_GLNianBEAphk-AWRZDO8375pBsw5Kl-KHdhYOwKU7K5MfQDwoWMEFToTg2rDU'),
      G('grass-cs/AABkmLfZySsi6ocJpjARN7GjUBTXXB9COdeo1n-q-LmeIaqS3vUAkceSe-vrj_z5JfKs3M_4-70_XcJy_KrorAuFev_DtsAs-wlchoAw4KJtufnbXeKOE2D3Tg2v90i5i6_UkUgAVxWBLA'),
      G('grass-cs/AABkmLf3nni8GowmYnixy-DUBTpNz7tmq7LrP62yW2aYqCvjSVOCsU7PjJbj1V-9R6xpxkImDx8PcDseMDq3610225na7BH0-gPcWBaGWJPkDJnQMyug20rqSCveTT9cS_ht6eCZ0vVz9A'),
      G('grass-cs/AABkmLcvzpwjQetA2HvsELFmuFOdD-cgdpd_SYEQH8Jty1rUPFVol8QrsIGx3Dqr1AG1OMzFO_3kGNt8cHtQ0g4m7sPiVW6uvqfd8YM4wvzwnom68OnomDLq3lrrqWGsQiK_j24taKlR')
    ]
  },
  {
    id: 2,
    name: 'The Cowork Spaces – Benz Circle',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Benz Circle',
    location: 'Bhagat Singh Nagar, Benz Circle, Vijayawada',
    address: 'R S Towers, near Screw Bridge signal, beside NH 16, Bhagat Singh Nagar, 520010, Vijayawada, Andhra Pradesh',
    // R S Towers, near Screw Bridge signal, beside NH 16, Bhagat Singh Nagar, 520010 · 400 Google reviews · thecoworkspaces.com
    price: '₹8,000',
    period: '/ Month',
    priceFormatted: '₹8,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13567595231032964517'),
    images: [
      G('grass-cs/AABkmLfPQON9nbnFt0Zm_WdccFdRZVBIYOvvAAU03_O1rEIlw3ZWchtJP3iUJ7e202MvHRpJToIlRknFaSEpWq3ICS1s2nIyRK6bUP7fPIPR5TjogOltPxaVX1Pyg5_Z3dzOz13TWUo2'),
      G('grass-cs/AABkmLfy-mbi3CzmYuC1W03m9e2hDunQIEwzFNeKp4bzdyqmz952yWwmDVnOpLzoGJfdspZ3IM6mcB0T2o40pvBYrnuki_x9DnLFGTx39XdHDqfAeatsuvDx2Wtsa9ybpO01b66NBy3X'),
      G('grass-cs/AABkmLfQhWGLPlAiAW1HXL9lHoz2IeNxa4jcvRQ7UY5DNGO00_55tXuF_jN8CtoQjxMaeCfV3-ioqMtR1eCw79EQUsU5KMeaLp3cxIGZPYa_ixiLeETF-2o3BHkf5mFD67jKPh4DpXdZ'),
      G('grass-cs/AABkmLePHVFDUlb3NSiuBm_selBTSaQiIE_Qqac8k0x6ONdOmyp7OFlt8Txhb0DWLyu6l7HeB319_iAKElhg3EBg6gbOuGubVst7D_eTXbx-jzuT0NCuJXky6csX8p2zPpiDEGqT1AyL'),
      G('grass-cs/AABkmLeCrM3Q388bjBc-hOdIvIRcYAABlgoUAmDhrWDJpsLiysnmQqAr0_ygUR7msLVy8HOjz6EPiPr21kzFF31SvcjwvA5Q9fhU8mUK_f8ijFFuOWp23pUnRAn78dHUEWChOZYRHq53xGpSTaSL'),
      G('grass-cs/AABkmLd_BzSQPggb0eiwA0mhwCZellQSNSTrKVegaFjM9unwJi3EXEeHzLxbjIQVqGW82i-shGs3uIx2F3Vckmx1tI5XWNcu3qgQBXYhYRnjvWJVHFeaM55JxxoFbYdrKBAW7D-AJo-_'),
      G('grass-cs/AABkmLf4FPQyrhxI7eyDRUc-49KGn7EV71akHq8aF4fswbddaV0Xgt8HHdpOxeogQKRwoziG6KufTeoVsssVFqRtI0lspAz4hgFLuZrbkAokg1dUYKMioqZxkvkpX57NU2nV7JpcWWSDAg'),
      G('grass-cs/AABkmLe2Pr8gqJnT0y-FaTuuze-LhMBtjl-htmf-jRjpSgE59NR4LPgswvHAlg81nvudgEZvUiU-Zan7wDBed2NHJc8SeXmfucIc6g9iEL8F09MB5SFeVntu_jux4fx0VQNgpwoDPYOteg'),
      G('grass-cs/AABkmLcEUcX5FIRGQ77hlK2v6Qz2UIKAETutj_ZkXxwkchZWyOQhoQK_303FgoN2hzBlJIEhmAFUiykbbNCa4vcyXHVEHO4RtXG_WZesOTrl6AFaBg1om7npqXBpYtjGYDnZDRmZ2T0e'),
      G('grass-cs/AABkmLfwHMqK3jkAj19Md6nouF-HlbwJGkb6RfQAaA9mH3f_mee3VuKfh3Y7GaD5kuiU_O6TiYo7HCWCro8b6rFd5kNQ4kgt1oVFgp49Ws4mTVznu6Ti2vqVgTSd4rw0ckt6FsdD_4_8Eg')
    ]
  },
  {
    id: 3,
    name: 'MyBranch – KK Towers',
    badge: 'Popular',
    rating: 4.9,
    area: 'Benz Circle',
    location: 'Acharya Ranga Nagar, Benz Circle, Vijayawada',
    address: '3rd Floor, KK Towers, 40-1-52/C, MG Road, opp. HDFC Bank, Acharya Ranga Nagar, Benz Circle, 520010, Vijayawada, Andhra Pradesh',
    // 3rd Floor, KK Towers, 40-1-52/C, MG Road, opp. HDFC Bank, Acharya Ranga Nagar, Benz Circle, 520010 · 39 Google reviews
    price: '₹9,000',
    period: '/ Month',
    priceFormatted: '₹9,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8684349962129932786'),
    images: [
      G('grass-cs/AABkmLeR8Y5hgxuM5gSZ0YZLsMynaKB3S_tLPVDYvsO327O5i1AMO8F0pNF8mMs9-Ubs6RnVaq8Kn_jdfbcN5cjT8LZxRKOLbd0nVp1nckTl16r-tX4SWlBOBdmNkLG9HqTCvb_iTZ7eThD36NoJ'),
      OH('63697/Serviced-Office-%28Classic%29-Andhra-Pradesh-Vijayawada-Mg-Road-Acharya-Ranga-Nagar-Benz-Circle-unnamed---2026-08-27T094305.930.webp'),
      G('grass-cs/AABkmLdm4EyYxNY1JVAlLd6MecjixVdZcSbZ-CbDuRmTzovP7zuktiOSRg-xq0Nn6fWO7PKOKIrSOy4qLVO2C4sCrWG-RjvSA66ZkLJW0j3NjhWtpY1-cPfFMpNsL-lFbK5dVEBaJPYjq3jmK82l')
    ]
  },
  {
    id: 4,
    name: 'iSprout Business Centre',
    badge: 'Premium',
    rating: 4.4,
    area: 'Benz Circle',
    location: 'Chandra Mouli Puram, Benz Circle, Vijayawada',
    address: 'Mouli Towers, 40-14-8/2, near Jyothi Convention Hall, Chandra Mouli Puram, Benz Circle, 520010, Vijayawada, Andhra Pradesh',
    // Mouli Towers, 40-14-8/2, near Jyothi Convention Hall, Chandra Mouli Puram, Benz Circle, 520010 · 94 Google reviews
    price: '₹9,000',
    period: '/ Month',
    priceFormatted: '₹9,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13389674081454363198'),
    images: [
      G('grass-cs/AABkmLcT2wBr4y4x2yg8cE-GUQqeuRxiCZgDuBWO6xfQ4G3F6HqG4r2w8YyJW2FRd93thkkmLTidcEkYAYp0p3nA3TOukgeFcmJAJlh4QOZvlXp6TcJ9kSePi74-EeZ3CIjFBInoQbKmgw'),
      G('grass-cs/AABkmLclw3xshz-MHfxY3lVFNoeRAPizVTIk99LoxV_xX13hXNxkl9DEP4ff9cikVljwfwNB2xlewRS4zvHixsZtsrlMYoOmJVUIbZP4Rse6L0Rh9VV2hGuU15XeqS4FxlEQ7-HEzt0V'),
      G('grass-cs/AABkmLey8Zc0U39CDFKyc4DNf_LsJF8fzQ-OmDras-o_LNgYMCQP4qDBhO7ynrvZjLBykZJLQfd8AuyvEJFVDBggiw2bCvofGEeeCkDLJysYhGSyRQ57NDWyQj2Bqrj5kEkU4IDrpRg'),
      G('grass-cs/AABkmLev-aSQOIacl0zUpGbS1eVFWEJQUK9Rbh21kGv5WtFAXY7P5g6Q7NPQAQNdVELJ_3dwIh4RHtVRS_t9e_nNgiNRKOkavevlc6UDRQ2PBUwGNTRR7T5zC2zUaB0YooHHmSgI_Rad'),
      G('grass-cs/AABkmLfhDn-CWS7wspJ5ulQ-J0-FxvXTiASYflxQMwVS2v5VzdL6nFZvp4-O0DN-2bq_SGmVRUvT-PqMJQY3bywOaB_uD6_F_MF-JvETgMapzd0HLF8DHkkEVA_qIPNVTKVb4cU6Vq1p'),
      G('grass-cs/AABkmLd13HAZ9zxkv4fk77f7qtoGKqNNmp7AQmOt36mYq2k8_iH6FyWHvL9_6SXdxZOaZtf8Xefik3D8DCUdaMH5ZXBQDVzHhCO09TQsaIhbqIvuAvBjsgBp6ZfcVt98z_jR19XQATPp6A'),
      G('grass-cs/AABkmLcyDb8l-O2Y9xeh0JfIkftMnJNo26gxc1MgSrCsuyUpcOSP7j5RhJ3ZWpsXPhjaiEOpQoKW9nHDMzbrOXxENdAyi_t0W6QTwoPrqNpAkjHXPYKvi7gvv-zyVAZHphyjIFvi40Zs'),
      G('grass-cs/AABkmLfr_5vLNvDvxs8FNGuA048uXoFWuueAn8-dP2QMqlV-6PscI7KwMBjFVMTKPvHiRKgQnOWsWGbcH8kx5y956bpPLb1utvvYCMn7RIxuSVnEq0uYzdJnVomx9EGGhN7Q1m3N8jP3qg'),
      G('grass-cs/AABkmLcMnN_iT52Ik7RgCcWlUHBP78CnjgFha9YvlRf6-CIzTAvvOo8Cpwj801_QgiQp0UV4mLLEuxWxd43xvlwRpCDRxrTEU62dSCXx6-oq1pxpooWDr5DeOb6pnqrMSTBsyT_LoeVz'),
      G('grass-cs/AABkmLeilGgUyNxi22fwiQacD1OaCB8LP3qxVwyt8jGKUhyrcHV2WtQjzV9fuZyBR1GG0Jpl5OjdnbKto3bhugTbRCe1uKKkOCFTO8JDnjDKY5QY_7d2ZmeFlrYdRh_O3ANhIawDAiNx')
    ]
  },
  {
    id: 5,
    name: 'iKushal Coworking Spaces',
    badge: 'Popular',
    rating: 4.7,
    area: 'Benz Circle',
    location: 'Koneru Lakshmaiah Veedhi, Benz Circle, Vijayawada',
    address: '5th Floor, Prasad Plaza, Brooks backside lane, Koneru Lakshmaiah Gari Veedhi, 520010, Vijayawada, Andhra Pradesh',
    // 5th Floor, Prasad Plaza, Brooks backside lane, Koneru Lakshmaiah Gari Veedhi, 520010 · 75 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14290158450630591415'),
    images: [
      G('grass-cs/AABkmLfaktFIE-dlgl7nWcR5ZcuuZpc70jMN_wSEnYuznpTqn8jv3XjC6GFWS1mzS5SmDEh8ozlvIkydeJph3SKWg7TvAtVcUdt_akSzLWJEjfmru1RXrb0a6RhOsWFDUpgDMTu8OU8'),
      G('grass-cs/AABkmLfyhKBRdLpVYlIABK8w9AkkOHFhDW5_7bPmsrGa8kI2XPDyzyWy6a9OeOShB9KOSAEEUET-XA3Kl4M5WeYX9nXPOJ6TGvtjtqXOONf_NJTmJt8psvRNwUXcTW1iAVFIdawPTukM2g'),
      G('grass-cs/AABkmLcYmRuQ8UImmMGxLQcnGUJuMYLPzIeAgVEBLFV4X5IVSN-2NReihOqZ08ZQ_D8N5Bl8_fxnVnk3UaRTT5A54Aqjf3e9XVeLZYIm6_NmiySw6W0eNVDtb5Heh6gMyOJSgFhZSLS-'),
      G('grass-cs/AABkmLcOJEMmebgdB_0pVbG883UBr4zIV8AOxJ2ZEeCpFcbzwJuSStVmiRnep6cGQCKw2mkZCnr9hvYFd5oCBX7L___cAiCh5nJQmtt5xdY8zwd3Hn6RdLsdH5Uboweo7Wtp2mVQvH5djA'),
      G('grass-cs/AABkmLcbbreEJL0AevIQTZboulXjUty1-qNrcie44mZRSWycXLZRRXp-8cqzmjxlLOkCPNf8gtf9XiavfhUJybIHV49YDdOPWOANBSJJZAv6Z2P06KuUQKjg01L-1Gp76PUWrvAGCIMdVA'),
      G('grass-cs/AABkmLcL47TX6Yr7DuS6mLTdcOw62Rpsw9QqT6WzXPnYE-d_Ofbfvt7eFHI7U4tJ7vkbcwYVm5BvERyqsBs8PM3LVodtC8kRKwNI0n_44oA2gjwbZLWnH5DvhrvyxsskXhdp8Oat53re'),
      G('grass-cs/AABkmLeJMoCauY6UqzK1fygSN0rkNYMOu9rbgQ8NpUPVPRyQxIoLaoI6CqCw4wJoAfLwFNjYSTS0elDmc_j3j5YGIIGu9f-xdGV_hwo3fJKjvEU_gTTIZs7knSCJGRTlp9kq1cAkHAt0'),
      G('grass-cs/AABkmLcBdyCX3Q5rmd5pcC1ilJNENaiBkXJFoXQXdkEPyzdakSghmSwrTH8SB_nfLUjSksuVBasUaYqqWajID3RPlpVLzmUPWf7dRku2RWWF7PO4dfLTXLrObdq1CfBmq6GchPBw5js'),
      G('grass-cs/AABkmLc_Btyv9dGRMAyLTJ6GZus2o0FED1d0jk-E1j09U0ybp_KQqmTNFgTxfu1IECFYVPBa16oZ454QqpglXnC7hQNQYWXCUFUVv07vns4c6D_xiXtGEzdmTejHniX_PibXiNJlA8WZ')
    ]
  },

  // ───────────── Guru Nanak Colony / NH 16 ─────────────
  {
    id: 6,
    name: 'The Cowork Spaces – Sai Odyssey',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Guru Nanak Colony',
    location: 'Guru Nanak Colony, Vijayawada',
    address: '4th & 5th Floor, Sai Odyssey, NH 16 Service Rd, beside KFC, Guru Nanak Colony, 520008, Vijayawada, Andhra Pradesh',
    // 4th & 5th Floor, Sai Odyssey, NH 16 Service Rd, beside KFC, Guru Nanak Colony, 520008 · 369 Google reviews · thecoworkspaces.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6924994841613367045'),
    images: [
      G('grass-cs/AABkmLevcxrFSwBinvetsQkABdzXw28T6OKA2cDE7dxkfBlJUPiayDhX8p8sDE5c0umSpK0NkVyT2iOkaY19P4GPms-62rSBOGeSWetZ9UW5tw9NMKzfaIHP_tReBRcuXFMyYXMiXxYB'),
      G('grass-cs/AABkmLfZhL12XtjlwoBp8MEQ7ZXuOnLs52gIYakmNADp9bORmod8qbYfCOkLN11aA-UluRtpiiucZUjrSupDFL50TvU6bq-a5C25LGJl6NmNqK87xkSBznQhHaJxxq8aKxehtCIzO3ThtA'),
      G('grass-cs/AABkmLetlkL6pt1ro_LfaSCce9Ykzj1g7jPPnt6NGRUgz5php3pGl1HPU3HqECLUbLptMLxlfU4avcv2BVUln7KdfEINXA3kb6HV7GIq7sG7sKwpChB0QTjeb-t5AEPC-d-5pdx_q-YTNYsBxUZK'),
      G('grass-cs/AABkmLdCXl-HGLO6_bGZH98Ml9pfcv_qaO_cNXnvF3C0PuF6FBpSfL5yjioo3B30uhNTfcnWAMP4OitYJ5xh2EgqhrWV3B3v9pDa-iu7OpM2teTHN4WMDO102_Qh275wnzmbLxBimGQ5pg'),
      G('grass-cs/AABkmLeXEdLVe6kmeBFOIQ4Me4_XDUx_sVT8VJgeI5nIRfe-6HC3O4O7xDgMgzUEA1J1EuIuhmfPs_e7bizBfNbfPi-ERDz2TgR0LdyUnCnQuK9oRg9LVh_gS7nYLwb6Xrg-E1iQsI4M4C6P3gsT'),
      G('grass-cs/AABkmLeYPgGa9dXzU7ztaO4g3n22-Vnxzse6d1fOfQao177cabCUXsNx-A6MVOTJkj2Bt4Ubjlxvl3oJAeTVQaTqtIaJFuKLcmatDSbTvJekGj_gSQ_KbphFjjdWbSbsYKfQuc4IQH7q1g'),
      G('grass-cs/AABkmLfUinagl3OCLDr627iWGe2pgi2jvcSLWRobSh4jfvPg0mnZnNPfo-lt6mgwlx_bEqwTcEV8TtEYUIH9W-K-i4nlYdxfXPdr-eXqg8WmmWJs8ifQQ-bo0ew2MBHkoznBJQXcRKxR'),
      G('grass-cs/AABkmLefK2PD1mYK6eTFRP3VqxUdJWXaGSaY3mjhYhuQDi3c5m7eY6b9eLCCkzv2y5TZtJ1sryooFAOFYFvLt2KOjRunuDU6w47fBgTxbLxtFNXg2G1A8mVQATSWNBHl0iLPJ4_K2il6'),
      G('grass-cs/AABkmLe3oNyle6TvRoFDDnHdIpV5Jr_6ZVwEHKIULF9eVPn_GGYKURaRWpCRF2t0H0lf7n0ccPCgFpwe2IA8fvW4KoxzxHwlOj8Vj_m9okaJt07cH5cGWQHZu3NgDeSorNKwN7cJsyDybTpQ3Ec'),
      G('grass-cs/AABkmLfRfIM1uo_pZouVXsq0x8m-vukHh4q7eH5YSjzgpjs4SeWcE7aq4OqHJfHrMERkxvcqgQxAUuTjDt3uslKMfZV1_S_4RcTUHRHdS0vfklajQDERqCmkKacavoWIx-M5thhE-XXKlExfZAY')
    ]
  },

  // ───────────── MG Road / Brindavan Colony ─────────────
  {
    id: 7,
    name: 'The Cowork Spaces – Corporate Centre',
    badge: 'Popular',
    rating: 4.8,
    area: 'Brindavan Colony',
    location: 'MG Road, Brindavan Colony, Vijayawada',
    address: '4th Floor, Corporate Centre, 40-1-144, MG Road, beside Chandana Grand, Brindavan Colony, 520010, Vijayawada, Andhra Pradesh',
    // 4th Floor, Corporate Centre, 40-1-144, MG Road, beside Chandana Grand, Brindavan Colony, 520010 · 47 Google reviews · Google listing is named "Politha Smart Solutions"
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7082120317227113328'),
    images: [
      G('grass-cs/AABkmLfqM5EFx-8H-b1gdVdhEsUYTGCx2xwsmrFagliR3cPj2qtx1ueJ2TIGvzLjWQKkHWdeNCtDqRpVOq1FWW7yTYDCF494pcfzlziKcTIvJasncN23JGVjhD8qFSXJItI7WQcmMMSMmQ'),
      G('grass-cs/AABkmLe_XBWjLLEik3CkZ1CRorpuJulzMd1EWnXSys5aNosHUUd90uhIKIDSY2af6bhb1E8fUwukCt_xkRZExt8L3obj8GCJNs1FNqvl1jF20a2IxyqpeSE2QUZwIbOh1Z-a7w7HKfQ'),
      G('grass-cs/AABkmLd6QlpWiNhwN8yusSYpBwPVXRuZCB4HaSEcYOuLKB_IXfGdwPyELeDoeTLqe7E9r_7levAPEIcT2nBviM3qhs11PZFQjmr394jduEwN7QAhjaSzvdsUxjKZxetu2yWiFKKgenIq'),
      G('grass-cs/AABkmLfyYlPx7npy-6AlaHx2CdLFpU6tF870thKyEKfnJMeyjARTp-bOYPNlMr0Eci_Z_G3f-s_UtMPLxDI3WV7AT_ZnDLcAOoDZgVIIgUFuIlYmEFOVnDreldZVPeRKlG7WZ9M7WSXH'),
      G('grass-cs/AABkmLdj3eGqkVueO_mdsYQGT8DpwID09Rw8zEhRTSUObes1Bp2FJ4paTm82Zft1URFv8BRMj17ASW3dhWP4Z_pKLIBlzHQbc2v1tVGrlrBPWvFwxSJpR4oCm76pNyaiyaeHS3AkTdBf4w'),
      G('grass-cs/AABkmLdR_axfxhrujYfMqrOnc45MBXR5-ZYQL16Ej413wUIYb9LS-DRinMe-ml_CXHHtNg19IC8jQ6JL-vRK212mdIi0GNEqFnrdPn2a8yXcpABmCsdapD9fN505tdeP2Vq0EzO3ATWDrFhUubk'),
      G('grass-cs/AABkmLdsuiszbxToYKpMu3YoZAsDZuPYMvvhIo2gcL87HxG0fFufSW2sBDBP4mQ5pLyb2xE4cezcbjHH8CkXxqDR61t2hhnZMews6m10vc_fyo57wBFWaANu3SlJhdoVyN22UO-AVEA-'),
      G('grass-cs/AABkmLfZ_tpAXvLcJPdFnK75OruyHmY_5laH9it39KZSScprSabmygxPma1atkABr7lqDQvp2VEPzab3sTZthsd_9y6tO3U-I1l88O3sCCV4onWo5-AxAS5YilzNg5fL6TXJB1KeVh0U6Q')
    ]
  },

  // ───────────── Moghalrajpuram / Labbipet ─────────────
  {
    id: 8,
    name: 'PCS Business Centre',
    badge: 'Popular',
    rating: 4.5,
    area: 'Moghalrajpuram',
    location: 'Moghalrajpuram, Labbipet, Vijayawada',
    address: '40-6/3-3, Co-operative Bank Colony, opp. Gravity College, Moghalrajpuram, 520010, Vijayawada, Andhra Pradesh',
    // 40-6/3-3, Co-operative Bank Colony, opp. Gravity College, Moghalrajpuram, 520010 · 91 Google reviews
    price: '₹7,200',
    period: '/ Month',
    priceFormatted: '₹7,200 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4704608977416470003'),
    images: [
      G('grass-cs/AABkmLc-arjuNTo5dJa7k85SdQdnBvfY96jLom3eGP3A94_ku8Nx6gTqytuVYtcgGuzPOdS5V0dA9ssGBRVDtLM0ySFr7GKMJtzFU948AXJN8p7o3gSQNsgwHj_UFF-tBJ1J1V8K49g'),
      G('grass-cs/AABkmLfXeK7op-0ONlkwRgXGxosHI0qyhJw_JWkjzI1HsjOCqhqx4-LOWvIHFCwH3SwKWdxoqp32tME94y5F0w_fqlvCGW7HNOvwGhFpc0GySzC8lk_WGCr24uBPwuN0o-HDov_IluWZEA'),
      G('grass-cs/AABkmLeu-WrdCrPHswYSuaZPhoyJUUZCmaHJWF6mxbh1MRHX696vAMp9tpW4yw4yz7REJpBpv1lwX1s26CpuAL56rrOqsD0ZaBX6MEhseIjhYRb43bxBuerczOgC7eBg7hsSQesm7adWOw'),
      G('grass-cs/AABkmLc5IHoelYEETvYoQbbDA2ztagw-6SQtbYjIbzAnQUJlVuYuUWV13U4053NosVxhJTtqyFQY8e7aPsF96f9i2ErbpqQnxJhsrMyLwiaJFAYUu32-0tDGZLC02UnoCeW_2ivFMOfC'),
      G('grass-cs/AABkmLdNixyeQZsbeelBz3D0z-FkVlLVTge3sFBpDxpCDErzGu51o1R4jvMtSGc5kXY_1QvQjhLLRKFrOijIgvwzgA6dpw9xaDQgmCFUV0AyVfrps_1_YCNqUgBaxeiew0gMMGuyjZ2S'),
      G('grass-cs/AABkmLdkBzGYQmHXG0Im1mNkawo5TkGBVWRmpGxA7LVBSt8nN3Amaq2_Owx7TqTre1VVAw2SsN9QtkcHV7XyjxF3o85swiVOOqq-DEicQJQaQs6clZEzEr7zxbT2nvVxetRBTuvlxi8'),
      G('grass-cs/AABkmLfbQdiYrp7OhRTGObeL7gSoBFjymkRD2tFTR2uNEe-prN4F74aVwNpqVvuSP7F6l70QxhyJ5ZmHT9wz4i8jUXSv_fMgTq59hPEo2K3AIA2vEjdsFFqxirj7r9cJuVpXltEv5w9PRw'),
      G('grass-cs/AABkmLf_gjMy0W717-cqizfiVz26ngTcSudQYbp6pj5ypU_PwCCON3KqQSoWjVNMrQ-GlhuII9ISjeh_wIDVqGj5umuRQaYVaRTlnMCFP1dHM-Aa6-4bfe7P7bi9pUGTTArJ4a8i2sbtuw'),
      G('grass-cs/AABkmLf1xxKVgUdb19PIYm-r3CEJIHvDCT_jvIS8WrpiPRaUtZQ3HbOfeRXNi_NXmBEmqrpkMWOFFMQGsXZpKnfTQdcN3k_u-1c0S5H93BaQYkOxFzu0tr3oTj9TPLD-tsi3eo-2vtCjqkoaD4rF'),
      G('grass-cs/AABkmLdQCtHD4DC77ocwbpOQ8QlzTl24XCsjIQYlwK8Tvvb4qvOZ1_9m1-xZulsFpefqIU5-sAF_EhaQW4qoYVAiD_2P751CRxRaWnldN9bpyRY_Rmg4B4zQlrYgGH8FC27NNGNkrTf2')
    ]
  },
  {
    id: 9,
    name: 'PROACTIVE Co-Working',
    badge: 'Standard',
    rating: 5.0,
    area: 'Moghalrajpuram',
    location: 'Lakshmi Nagar, Moghalrajpuram, Vijayawada',
    address: '40-1/1-30A, Lakshmi Nagar, Moghalrajpuram, Labbipet, 520010, Vijayawada, Andhra Pradesh',
    // 40-1/1-30A, Lakshmi Nagar, Moghalrajpuram, Labbipet, 520010 · 4 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14041405389917978040'),
    images: [
      G('grass-cs/AABkmLcIhCQoNATdNdm3kZ8Oo_8pSTYsW-wOX05JJL9g25XxjDtpt5WDhvWRRdvWWFe6DrPh_z6WvjOliBtTXSP29Hqos4l0FJ3lG2hhoL0T-8u0lxss5alhJkpmQpBMnHxwrTv5KOxjNOnOYS4'),
      G('grass-cs/AABkmLdTAkP--vfvPL21v7Sia5ap66ygEB6p-HZLpIXolgV8OUuqP3U7MNBsVtvU9-cNz47OSfssyxVVxhphCMx4sOv_mRKrnSIRxqkhDMLm6ih-uQjB2VL9K7ADTibPRNJCWnN9a98bQtu9xPYT')
    ]
  },

  // ───────────── Kanuru / Sri Ramachandra Nagar ─────────────
  {
    id: 10,
    name: 'K Business Spaces',
    badge: 'Standard',
    rating: 4.5,
    area: 'Kanuru',
    location: 'Sri Ramachandra Nagar, Kanuru, Vijayawada',
    address: 'APEITA IT Tech Park, Sri Ramachandra Nagar, Kanuru, 520007, Vijayawada, Andhra Pradesh',
    // APEITA IT Tech Park, Sri Ramachandra Nagar, Kanuru, 520007 · 62 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7322406984691800989'),
    images: [
      G('grass-cs/AABkmLc0lq_vdiXoqNSEW0FjtNVmdIX0dOWfmiKGAVE_6IMN9NVhG5a4VYzg_XOSE7D8Qcb8ButuOspKnfUhMhdLQBRPVv_PBT1wAlXgr8McSajSCLE6_66hhO1uWc8a5V5U7XlV15o'),
      G('grass-cs/AABkmLeCwj1dyJDO0hFaInAEujOFM3DbwfbhJWNs4lQRmjqY5R_ShPemedytW6f6MO12nD-PE2cD9ZXqiDAIduCyoMRHiY_k9qf1XLeHXpua5PwqLCCXUI_7tFzZAvrxw1BrtRSvVZhMPA'),
      G('grass-cs/AABkmLflAlGeXWgU_ATgdIuA1S69AYE80WpQMsJ_0himcuVsr-9aMXu7CuQcvcP1ClzjZGJoMbYpfb2zVCNgY-itUIItMLJPXrZ3B00gcqde9Wi2kBucLsJheQBP9_YISU0FM5_YALA'),
      G('grass-cs/AABkmLdxThWVfYAOWaNHb82LBFs-krp1NJXcsaGoCQcm9o58_gLJ0KctaRTWx0ys8dwuQn6x0Nk06XgmJqjefLrLFdTUHF4LmH1AjEA0qmtRCPrZTlyzg49YtSGPsVPULsMzxARapGVl'),
      G('grass-cs/AABkmLeovaSsSPest8I87H8m1xkIr8tS5h5M7STj80dQiSujE9ApvNh8qTAZ30YZz8c7okpXpBeLzaNqDS5d_lCFOAAdG1c8bRdUsqusyBpA7OhmtDcyaJ4raUgARLSHYks2l-f1hQug'),
      G('grass-cs/AABkmLeLbD-S2lIAGjFo3wOtTR8AdK07zqiprm9LVIeDOZJPehOUKU-ePWoDg75xIEdO5fqe5bGLz9apYG3Zns7BP_peCaEzhCYyKHPaD8a_KwqaiOtMvyqToH2OQkg7jP34dyKgkrA')
    ]
  },

  // ───────────── Gannavaram ─────────────
  {
    id: 11,
    name: 'iSprout – Medha Towers',
    badge: 'Premium',
    rating: 4.9,
    area: 'Gannavaram',
    location: 'Kesarapalli IT Park, Gannavaram, Vijayawada',
    address: 'Medha Towers, Sy No 53, IT Park Rd, Kesarapalli, Gannavaram, Vijayawada, Andhra Pradesh',
    // Medha Towers, Sy No 53, IT Park Rd, Kesarapalli, Gannavaram · 23 Google reviews
    price: '₹9,000',
    period: '/ Month',
    priceFormatted: '₹9,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5372049163263082015'),
    images: [
      G('grass-cs/AABkmLe_QlyOdScGbYyeBwwmDkgbM7JkXwJL7l7sP6BGHfDKG5xkJa8KjmQbmc4bq7RLvBQPVn5p2kI3nTkObTqLlNf7Whif6bntjyukhhHMkXe1HWuPVUWsi41-yW_aPpIB1Y48vGElxSWa9Zfx'),
      G('grass-cs/AABkmLeSVvvg-IsbhTovHD9wky_PoFShpRZdwWACs6FRnjmSzsp0--XnMnhGVlZo56avwT8NprDBHhcH3E9x-7iY6BqLoJf8HsrXowRdKuc3RZIGKpLtaKOJIhikwOpJ7Lp_LXTcVXq0WrsZSXxT'),
      G('grass-cs/AABkmLeGq-zgXXFksiu9ECn_QjpGKMxSOYbqyJSfd3Uqzie_rsSht13kI3zzPKFvlLt0ack0AFRowIc8kQU6CbU9S-9Q4hbPQyQYCIchZry25Sxu5atqOTo5T9RMGegR3yvNpBRntTozAZdFAD7-'),
      G('grass-cs/AABkmLeeGv9NINEH4MF9VQYjCm1TaZLnhgMzNvtVUpx_8k42W5wi2GR2SOH0s_8LXQ598I8mdetl_EbN67_OaZo-e4xyjKGVGQYjOuru7QsSxhhDK8OfHj91DXNAP3sqaqjPRSVO-Cs-cLX5DrM'),
      G('grass-cs/AABkmLfAgtZKftGVQuYMoaOtteFI6XJSmbu1I7sMzIhc88dZ5bin-KRcuzT_8iJtIlE4YPx2Hn7AWzI8DjDGekAQpUdA9k4RHp8_qZP1TFMXBq-pBvuP0A_5RfJsPRuvVnmAJcA7_Fl1_QbMRS8t'),
      G('grass-cs/AABkmLeI3xcXKlk-BJFPqmDzJhWLsRxO4tb1hHRT6i9bpzpi-e9BlKWX--dXS7O81f-c-umelrtqypqAB8uozjt85d2U7G5Gymr2-11Vxj9vW3rtcFX6M7-tmFH5lIFGuA7TSFtXM6WqLDlSz90b')
    ]
  }
];

// Operating, but no genuine photos of the space published yet.
export const vijayawadaCoworkingPendingPhotos = [
  {
    id: 12,
    name: 'HQ by Regus – Bricks & Palms',
    badge: 'Premium',
    rating: 1.0,
    area: 'Labbipet',
    location: 'Mogalrajapuram, Labbipet, Vijayawada',
    // Bricks & Palms, 36-14-3/2, Mogalrajapuram Rd, Shanti Nagar, Labbipet, 520010 · 1 Google review · only photos of other Regus centres published
    price: '₹10,990',
    period: '/ Month',
    priceFormatted: '₹10,990 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('847299417804108113'),
    images: []
  },
  {
    id: 13,
    name: 'IndiQube Pushkar',
    badge: 'Premium',
    rating: null,
    area: 'Gunadala',
    location: 'Gunadala, Vijayawada',
    // NH 16 Service Rd, beside Bank of Baroda Regional Office, Gunadala, 520008 · not on Google Maps yet · only IndiQube brand photos from other cities published
    price: '₹9,000',
    period: '/ Month',
    priceFormatted: '₹9,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=IndiQube+Pushkar+NH+16+Service+Rd+Gunadala+Vijayawada',
    images: []
  }
];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const vijayawadaSpaces = vijayawadaCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const vijayawadaNeighborhoods = Object.entries(
  vijayawadaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const vijayawadaOfficeCards = vijayawadaSpaces.slice(0, 8);
export const moreVijayawadaOfficeCards = vijayawadaSpaces.slice(8, 16);
export const finalVijayawadaOfficeCards = vijayawadaSpaces.slice(16, 24);
export const featuredVijayawadaOfficeCards = vijayawadaSpaces.slice(24);

export const vijayawadaAreas = vijayawadaNeighborhoods;

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
// Vijayawada Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allVijayawadaOfficeCards = vijayawadaSpaces;

export const getVijayawadaOfficeCardById = (id) => findOfficeBySlug(allVijayawadaOfficeCards, id, "vijayawada");
export const getVijayawadaOfficeSlug = (space) => officePath(allVijayawadaOfficeCards, space, "vijayawada");

// ============================================================================
// Top Coworking Locations in Vijayawada (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topVijayawadaCoworkingLocations = vijayawadaNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: vijayawadaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

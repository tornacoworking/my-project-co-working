import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Udaipur, ordered area by area.
// Sources: Google Maps first (listing, rating, address, photos), then myHQ, Coworkingers and Coworker
// for prices (two prices come from the spaces' own Google price cards). Every photo belongs to that specific space and was
// checked visually: people, events, promo graphics, logos-only shots and duplicates were removed.
// Closed listings, study halls and non-coworking businesses are excluded. Checked 12 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/${id}=w1200-h800-k-no`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const udaipurCoworking = [
  // ───────────── Hiran Magri ─────────────
  {
    id: 1,
    name: 'Habitus Co-Working Space',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hiran Magri',
    location: 'Sector 4, Hiran Magri, Udaipur',
    address: 'Rajlaxmi Prime Building, 5A Nakoda Complex, Hansa Palace Rd, Sector 4, Pooja Nagar, Hiran Magri, 313002, Udaipur, Rajasthan',
    // Rajlaxmi Prime Building, 5A Nakoda Complex, Hansa Palace Rd, Sector 4, Pooja Nagar, Hiran Magri, 313002 · 99 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('689785790221372189'),
    images: [
      G('grass-cs/AABkmLdU3A8J0srtUA9Uj335UoiMjlSWAhUBraJjDDrzUEx6i-nMD3kcl6HUS1b8quhqEF55CJrzL3-mzlbnIieTN9BEEDqbc4H7tnewOOWhoPosmyHATilr5pC_zWSGor24a4nPHMP_'),
      G('grass-cs/AABkmLfUUP2FKOvbPv-z1JJBCYfwsyzsav1TkLjRtaRCjXnKblFzzoqF7Wmsm5jRt5gGlidHGH1ENjXyrg0b3ee4eIO_Bcd96hbKRj_IuIP2xS5b_UdJ_9ItKTAfkPmg3wJphyhiU_YVyw'),
      G('grass-cs/AABkmLd9sbdTtQmbEaVOl_WSbHIuMj5SbwZwuKDMtkekOZeXXDOxfxzKXxBa6sTygIUSeUnEBQoQHfCanf6ctjyqWxOOq9cFGtsNwo-_2ki33asjo_eW5-yTaBVx0Uf0ScNIjry0ePmq'),
      G('grass-cs/AABkmLc_lVcXWEmmm2_BdL4TpzET3eFikkC8EcOAZn8lxXv1-kAtXXasrfVvas85ixUcO9-kN4yYqe_BfK7xHQPUbHbICxFslgy5ApJ_xvNEcK_ageT5-5Y4-PDSbEk4IxeU8G5xpfWk'),
      G('grass-cs/AABkmLfLcdz41HpQRUE0qsqLgXq5ai4UjM3G8qVwCZECl7V-J9zG79mUpJ7_cv_0em-eqIVP2f71qI1RNZ1mFvVnq_EyiOpxb045ZIUV3ANzPt18uxJJY1AanTVQzL_vY9DJEqnUqeg-0w'),
      G('grass-cs/AABkmLeD_yGm69MMt1wKYjT5_vSsz1KN9BE5nO1RgX74SaiAY4i7xNQYuMusfm07I6Gn6keafBu-hti26R3_lExMvuH9IHRr5EH3cmwFCBBs02UcZypQk3DEdNRcBLzFmiqLLvTWlNNb'),
      G('grass-cs/AABkmLeOe4uPKa31jiLG0GemZj61FmXj4D_Bf8oPXw2GQG-MShT4GmXNw_lrDOVeSLS1R_37D_wB8Yq5HxryMWaGOCxGKZtpRHMj4QT29lzogPeQF2UZJoQRpPvAGtfNEQUKpzCwLMDG'),
      G('grass-cs/AABkmLeZD1IbxDs5pitoG8XdwslKoNvOAQtZXybhv1lfkEmgHcHzuvqsaM4NeNJKFBA5xQvQL7OVwqmn_WhullIl0yCylxaXc1nZ2bk7V2FaR9v2QVrI9icguuuXsoh6OhjCFgbDUAI'),
      G('grass-cs/AABkmLcBUppdDtRruU-sX1msPpNX6WuOibNrcxQqIYVoT7L5H2nxFLc-8v-N9ZFkk-CttoPDWy5TYCG53Bx9AgTR64dKQ9eBXaZ88OtSl56zgi8lYHRnaClp9VZXQvv4LQPAB03zGjiQ47F5-JEA'),
      G('gps-cs-s/ANWiy9TeYi13IxH1QoIGFdqsUUK3qR8bsKen-_gUJhK0GaoeTY5Xd3aqkyYcHa38EbQrokcChIFzNiHZUGSXD6VnQaygNfSHNJQcz3VVseMIQlejPnSRHvQXC73u0ld8HI0YH7eLACsd')
    ]
  },
  {
    id: 2,
    name: 'Elite CoWorking Space',
    badge: 'New',
    rating: null,
    area: 'Hiran Magri',
    location: 'Sector 4, Hiran Magri, Udaipur',
    address: '5A Nakoda Complex, Sector 4, Pooja Nagar, Hiran Magri, Udaipur, Rajasthan',
    // 5A Nakoda Complex, Sector 4, Pooja Nagar, Hiran Magri · no reviews yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2358269494710232191'),
    images: [
      G('grass-cs/AABkmLeZ4jmuuQIBZUEgxcoNuH9WEZcI-4zR19x3zorExaIsOENTaD2V8mcR7k-YOzR4wLz_2BTXnzLYiWha1rvGvGJYoXkziDGpLFmzJwaKnzR3yWvivR8yHsl_oScjVRMLg0MM1GzDsw'),
      G('grass-cs/AABkmLfmN-OvhPirRWO6qU9og0QaGgTvKJUc023Lk97m7ADLYWSM5fDCKhq2eVhtdHSLbUWGjL6bSRYT-WcrDN8Szl_96-U2Jg5k3AkgnOoOensNFz6P8lyqaZ2i5ECtxdPlxgil3ww1'),
      G('grass-cs/AABkmLeQlXlTz8gc22v477Z9WMf2RvXSDmMRaaVvyd6MGEDweJWhiyLcdWO9QBJ6ZDGq6dpA-ZYFtdWKp4lVu4EuhjDYNASVT-2om8--vjnKUg16nAunmqr6FXJGx5mp4MdT0qDnEc3suw'),
      G('grass-cs/AABkmLd1ln9glJ1WU0fGi0Yid9qjKoAFfbCjfizDl3gS96lYXC2LLC7msrdGLMSts-ieZ55Pg6qmmmUVyPkN03d39ZdniikCyhNKhsE59oZ6wYJEUSFttZOnki5mcxkRTJG-IpffwLPw'),
      G('grass-cs/AABkmLdWt_AQj2lCwX-ExPsLzbWpJNSuRffZXChvPNImWcqABt0STAZ6dcyUYu59vi2VBS1wih15pt29txAOKENyYlZXD-4mdwXdRvlAxa4MaqD4QV-FN_T_gnLj6NOFuDsVK4iNlQ'),
      G('grass-cs/AABkmLeE_uZUfCGoFccWfGRFgBDTUkEeibgmlHq4gyenZKwIl7S8QS1Wv7VctOYA6RocfdWQ3rSK_GAVm9sASgrGtxu4xnSPPLF94NwCIvq5_vDgn8f2fY687Ye_Ai2fsa49gclqTW9mcQ')
    ]
  },

  // ───────────── Bhupalpura ─────────────
  {
    id: 3,
    name: 'House of Words',
    badge: 'Budget',
    rating: 4.3,
    area: 'Bhupalpura',
    location: 'O Road, Bhupalpura, Udaipur',
    address: '169, 2nd Floor, Bhupalpura O Road, in front of Matt Park, above Cox and Kings office, Bhupalpura, 313001, Udaipur, Rajasthan',
    // 169, 2nd Floor, Bhupalpura O Road, in front of Matt Park, above Cox and Kings office, Bhupalpura, 313001 · 58 Google reviews
    price: '₹2,750',
    period: '/ Month',
    priceFormatted: '₹2,750 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14300035215804344102'),
    images: [
      G('grass-cs/AABkmLe1fOEWE1QXlWel6-Sk5GZHJhUQeFIlnyMp0CDWIts1JyPWxVUXAtorPSmE5HKAlwKZtIBg9fBt1ibM8-31vXZ76RfVQX9iTUiPibEv1WuzUwIIMcDX_5nIB8mASUue_BR0SA0'),
      G('grass-cs/AABkmLdrtglmGrtUrYp0SiuNkfA2Erb3U_8hZvN5oqjyJHguwnGqAsofisb6-R9MKlTFXakM7NJegwMccLGwtEtg2i1HbdKKnxNUdHXNRMiQkzmOXQNzvmVuX49a8zESUwHmweChcuGYTw'),
      G('grass-cs/AABkmLdt6VtKXJq1aF2zgeNtN1SMRdVl27shrpkF-D630fKnTXW8J2UWKAo4rFovWWqEOs8wdSxGFB_ZFIkZKBtzfvdaOpGqKwGw5Tp-NkNIyoUKozsy3sgKMK6t5WrG2NMkVB39IFFSHA'),
      G('grass-cs/AABkmLdXCf9l_FhbB2Sv6cnQjmRnaLPxuV-Ya_Wj9P0QQos9JOnHgenxpoq-uTa4VZT4YaUKinSlDty0cTds6IuFeFc4hAevuRziOZjqeT-6MNSC6YQrsOkxK15EyOgjtTkLgnAmBcJTbQ'),
      G('grass-cs/AABkmLcsp4X-RV1EjQNigyOTqA5nXcbsp65rGp1U3WHbcAPLVuQjAR3ncu7xioE1FySbQKfzmAXS93OzZE9Np5sA8Teejt_eIAA3V4cInApfV88IXj2PmXg1fswbBEaikTPXOFT_TZ76'),
      G('grass-cs/AABkmLfIMAMqsvnNRp_-iuVVAHDbtSuKOuk09DuFpSgghdPh6bsAHDEaM9m40jNEgHQDeDVT37rIx2V-6A68HO9iUEyEDP4pNtOfDnvs4ex1yrOaAQ0bwN3J39d2kxJ8y0DA2xW2FP4n'),
      G('grass-cs/AABkmLeuTGS-MEllSD9cqX8uHEJmFar6Cs_l2MgR5T5nySIKyTxjeyioPUc3bc58YYvY8fx7wHFtm-vApZJl0uLGtW8XGzWdrWTs94u57UDgRnDXqt2Vo-u0FG5FzHIUvAGa-kuMXHIq'),
      G('grass-cs/AABkmLcmjiYWGZtw0nBkDomtBYWIePuhzQQVX9d8RR_AUyjMI_xJZ_wARbPJEjhdxgx12K4AwRawWsvMDRCPEKHOZ6eDc51cxN__X4xTXe-FWoKSeIDH6mJOeECByQfFnvaSwXk8IT-PVw'),
      G('grass-cs/AABkmLcUaXiCwkhove7I6H1ZrfABjs_PGGXON8_CV33sEwJJXxJSgCj9EJlJR2n_OQSUYUBcNGouZygVk_2BQI2n6SZvXzcWVZuQcFnxOVe0-efDHseChnEo-oAEeSekkpw_vVTRE4cHtQ'),
      G('grass-cs/AABkmLf3m5taEZgXDuH1KgHf-fTDh3ul-NcBTK3iwVRdFGn-xJ4fDRK_MUDrecXzZciDFMZSlasgnsstmgVxzCewVEuR2DKuhobvbtbUx2iBBKAtFQWn35MlpSzFi-Fi6ugxQFQt0VQ')
    ]
  },

  // ───────────── University Road / Shakti Nagar ─────────────
  {
    id: 4,
    name: 'MyBranch – Amrit Shree',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'University Road',
    location: 'University Road, Shakti Nagar, Udaipur',
    address: 'Units 106–108, 1st Floor, Amrit Shree, University Rd, near Digamber Jain Mandir, Shakti Nagar, Udaipur, Rajasthan',
    // Units 106–108, 1st Floor, Amrit Shree, University Rd, near Digamber Jain Mandir, Shakti Nagar · 20 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7298494661073789696'),
    images: [
      G('grass-cs/AABkmLdXE-GYTAa2Fix_b9yj4PyFDxghFgzR6yrqa4K_junVxHpAqSaypAbqtS8DVoOzFfIgDYPDBCyjBlaiuC2WCh56moyxI2d5_jxmPLlMqE058cvHY6IX-c1u-A0neJc2LRKLcx6S'),
      G('grass-cs/AABkmLcbJ076YJhjJgPTVs19lQsm-s1RwaQ4m8OpH_hXynvhqjm0a3nBI6lmdPvHuZbbPa0Lza02JQwrdOPkc2qDMQmVkzQ_GxcLSNzKNAP6DifSaYOFzFJ3guBp27UY3zLpMPxo24pm2g'),
      G('grass-cs/AABkmLcznUCX-mGIVJIOqU3v_Y-e2DwEghoVoerhSe-VrK0P87WZia5n55quf8I0sQI8636QX1ptkl1p-COCJu8JCn6kCcQUFygWfVa-VmlfFYVS0lEkTABg0gb4yp1S4S90lGLLjJYY'),
      G('grass-cs/AABkmLfHAI1dW5Mwt_DhEHlyKelQNNMfbkC2Cco4rxafpbK2PHXMmG2P1pGIS091oOAcN6OsNDn_UcKCafE03zKNL6GmVZ5rfXI3Jmxcralef5plN9UacA0K-wYwsu9w1vJ3QQFzLsw'),
      G('grass-cs/AABkmLf0oENx3sZaYRGeGucBIWvPxZWVlhBIIRpSlw1HevtjkLD3zEWdpTc-mUezbjH8fhtH1AAUcI70tlBxbliv2SY7PTDD42of03Z8ATb1DU7o00Pt6vYz-OtpvI0mE3yk9XWXPxG67Q'),
      G('grass-cs/AABkmLcyQydqud6Op_O7z5frVW5r0bAIEJ_LjazHbvsBQ41oYOMjSwZE8LFiTunbr7J6_fDmCZbJIBJ-JPlqwK9IhW9iP787lLoshaJR5E8l3VC324WhQvuWmLlb-h27Kp5Qd_gNIvrD')
    ]
  },

  // ───────────── Railway Colony ─────────────
  {
    id: 5,
    name: 'DevX',
    badge: 'Premium',
    rating: 4.8,
    area: 'Railway Colony',
    location: 'Paras Prime, Railway Colony, Udaipur',
    address: '501–510, 5th Floor, Paras Prime, Sahar revenue village, Railway Colony, Udaipur, Rajasthan',
    // 501–510, 5th Floor, Paras Prime, Sahar revenue village, Railway Colony · 28 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2865438166905234046'),
    images: [
      G('grass-cs/AABkmLdn8kG-ilJh9DRFhhE2z24cwrZ9zpCIF9KfRhS82mbXrSm4FsHBu7g-P2k-6-ZckmXVZ6sBhfCW-sABZKdqIKjnUUKTD9KkoTaxJDUoGDLdwCmv6lvRmrJF_ryXznIYxAJqkzbgaFXxF9nY'),
      G('grass-cs/AABkmLckcnxvijtdWxfchb8fEFm9uA_XlsK84oxE5snOs7kJRwH9AEnoZCzJZC93ApQOA34YTdbDMaG00Efbmrdxg0AmBrU1hakqyidpydBrUgmPzlbbjgbY70QxilwPfdHPkzWc2iuU'),
      G('grass-cs/AABkmLczk43mgG7BOiQYVhRii3yQ8dbEBwOKcaou7KJA8SNE-KJHbHcCG6PSufT4PISgcuQ6Plvl2OCxQDrBuzJpOvS29IS6lRe0BZLA0bZTCcC-KK0m2G1wEPGihJ0EIIACEmM4pl9OXsxQPJbV'),
      G('grass-cs/AABkmLf1_csxJCVSp1ONzW9CRlZh6CI49zSGBiXsvoDmKyFspTILmJAS4eR14FMbjXN6RIUwz0TO7JomyNsMO2j6R6S_cNB51R97Ujr83nmxM3Xdg48-_YkcJI0nWKt-85ylKgIuml0b'),
      G('grass-cs/AABkmLeqxrSUwTvC5Zchp5_bQa_8OrN9Qmw9g99s0uh976SRl9Yx5m9b2suGZqOpJtqJ3oRHto2zTxgfyYuuBc7mQlcXda_Rprnwgneocqq5q_74J9omApFDCM5WkQwEocttV4reLamx_g'),
      G('grass-cs/AABkmLf6gyXP27sZklUW9hsSOQpJm4GXB-Rw6-Bg8ZsPBphWPaR1v6QyLUkkC0TKEQkIytbPGBJPYGP2ftsIVji70zbyEjpnNFOcGpYoWlvB0eM8JW-rfYVhFWrSxDaFrU0qOk66MHht'),
      G('grass-cs/AABkmLfpxPTGQeSgLGmrzyBpbCRG3ttpckV9VKNpVV41y9hDcY6fa-d_Y5hQL4w6FXkpLCScjaE1Mj3D8zhO8YlrPVy2Esvyqu1rmYF7s3MhgLas0mn_A-s2nlJtdtp7h4dX-6LllgZphQ'),
      G('grass-cs/AABkmLeclsi6SoGw8qcUiaUmU-nkzozxX-lRyvidY1u9VfbZGePR6pGEBQ14zIPR_Gt9IuLx8bcNKvKfmzySkdbQHh6Jn_hP_3LW_l16aUfcpcZMajXJJHVH1j8L2jL-AlleBV4bR8mrnQ'),
      G('grass-cs/AABkmLelYNMClqAIaTqXhEt5jfqdQskVMe9VlNzFGQilZkc9zG8rABiO4vY4ArpAlNTVFts-OZqPxcoRYz3lYC2-myKNX6ocPn6nK-LLFyOtG227mo11afc9WG1F_mvkWRWCDgDJ5aw_2g'),
      G('grass-cs/AABkmLexmnC32OVjuFen9w-bvSfkoIlaCroQBvBNfgqMRMT0inIMLvS4KjFFMQFBuim6hQqJfRSTxNmv8cwFNc9LGdyPndGY1qdny_671THdzv5qXuKyTdC2hqQFhEQBoxtKAi4tsac')
    ]
  },

  // ───────────── Shobhagpura ─────────────
  {
    id: 6,
    name: 'Orbkraft Co-Working – Shobhagpura',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Shobhagpura',
    location: 'DPS Road, Shobhagpura, Udaipur',
    address: '2A, 2nd Floor, Shri Bhairav Plaza, DPS Rd, Shobhagpura, Udaipur, Rajasthan',
    // 2A, 2nd Floor, Shri Bhairav Plaza, DPS Rd, Shobhagpura · 46 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13923262924300949939'),
    images: [
      G('grass-cs/AABkmLeTKs_moLI6VWA8wQu5RJJmGUZ9bsTshG9bd3gBoXEkMpcLukBWsq_Yn0teTMtr3tdy__p9uAPGv6ja36Src-if5_5TxvpaG2oM71i4D4nlvLmGGIwpj0GZPFbaCimjCesCIdg'),
      G('grass-cs/AABkmLdh2GtvVKM6NsUr5z_qxLjkLZsHWx05YoX7stuIjLWnbmcHEmcjx8Le2PNTi67-AyVAWun3oCCbqFI8Ruj-9Buv2cof-HWD87f5c4PsOhLpHd-pEZUEkthJcGQq1CpUEtdopAPaSA'),
      G('grass-cs/AABkmLfNpF6nyiqeDDHtY9I-KzYg2YNHTGPXw9S4ZXUmNF7iHwWMGpfl0ZN4FRYoiADAGIG7LTvA-MnvM3-5FDnLEj8kPnKNLUNaXHi2mgA3_ohuNUyYpUn3t4nASUCyqZ1I3Hnok6zf'),
      G('grass-cs/AABkmLeTicw-haMNuZ_Kl_49_W4RdxgKbrkkO9C0-Q4cBnJaHCtaY3SXty_uRkdpa8YTVn_0mMQSBT6Y0bxq1ZcVByOMfvicHgEYYOMOXwlDtXropwtfWU-LCt_gKskLw3G2Tb8hPhuJzA'),
      G('grass-cs/AABkmLekxRInwFTJjTHcPBN1jk23jBf_U8pLJYixCn7XM3yj_yrXEg532GcMZhQS1H8HeG5DADC-bW1OzDW2Dg9GhpUCVSa4jGrL9olVHNEQI73r9JA6S7JiLQND7PTPAGU8stUIloRA'),
      G('grass-cs/AABkmLdkb83ku7shCNKA5fLXQG09e1kO5kukwkpxYZbb7as2_okDnkZEdZHJQ_k0jhWcucOoqF1Wkp1S-Af40PPc4bl-5aVoI313sLFCsziBV0jL0K6ugcQJTATIYzKiJLpXA9ffrkxK'),
      G('grass-cs/AABkmLdWW6HyphPI8WwwgFSLzW1rEFuq2Y7HlXpoTz-8QZjpnzEeEVIwjoBviGcTvEuN_SGWGnPMPi62J74nofRghAmh0yQdgUTT8pDiy17yjEz0RYI7XW8bSQxDDw2ZHmQVvWJhUS97'),
      G('grass-cs/AABkmLdhN3L_xJ-VpOXrkAypOiy4RRlCMvZg_g32bXMmVItjioOfKPbQJhbCx5L_4niWoWYEa3mrbdtV6WsUjx7yVc0729qrj2fDysMQ_24RN9r0kMRytlkaFnS8cfTsSPkqcpOFHS1M'),
      G('grass-cs/AABkmLeWESJCyFtpzPGle7P9eFPx-t7iI1gMv24LdzNdMSAze8gReVEEokIHpW2YkO7G_HirRK5PWE5shENpSbwHoBsM8D-SoB_B1VtIp82tCiWQQ6tOB-qoarNi1Vy_OHiD3y4uBrW0'),
      G('grass-cs/AABkmLf7a_Kb4QDUqrVB42RGXGodW9cADFAjoYPm8RAtH7Deil-kqVOnVNfibRzHZ399uC4fVx3L4bMXJgt0N81zVwnF10Gl-lf95UxKOp0n4IXCNa-dOemdg9EX894fwubwinj3kvM')
    ]
  },
  {
    id: 7,
    name: 'Utility Co-Working Space',
    badge: 'New',
    rating: null,
    area: 'Shobhagpura',
    location: 'Vivekanand Vihar, Shobhagpura, Udaipur',
    address: '10-E, Vivekanand Vihar, behind Miraj Malhar, near Zudio, Shobhagpura, Udaipur, Rajasthan',
    // 10-E, Vivekanand Vihar, behind Miraj Malhar, near Zudio, Shobhagpura · no reviews yet · only one photo published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('452620392220178239'),
    images: [
      G('grass-cs/AABkmLdLjdACUsOzv9bNdvzsQbehONImLyPsS1j0Ys25Nn4zFVk5kNEjs91w_TQ5FkLh5Ey8ajygzQhmly4KivTJH5Vl0eGWKH6wQ9p1wlf_Ba1SwZ-aJgFjB7q7Gi8p-9Ypg1gtPy3sWZWFl5s')
    ]
  },

  // ───────────── Chitrakoot Nagar ─────────────
  {
    id: 8,
    name: 'Orbkraft Co-Working – Chitrakoot Nagar',
    badge: 'Standard',
    rating: 4.8,
    area: 'Chitrakoot Nagar',
    location: 'Shyam Nagar, Chitrakoot Nagar, Udaipur',
    address: 'Shyam Nagar, Chitrakoot Nagar, Roopnagar, Udaipur, Rajasthan',
    // Shyam Nagar, Chitrakoot Nagar, Roopnagar · 5 Google reviews · monthly plan price from its own Google price card
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6035632927222103153'),
    images: [
      G('grass-cs/AABkmLci9J6GIVzZQa3G7UiDI6fW7iX156pj5SGy3XcBIWtIlAuY9h4b_sMpl7z7eR-TON7cuj5PzMC-aqJ0l7GqNOjECYGL08AWgOsMV2RghSt64ZMS54rGU5mtq6jEoDPKnshQiB4UbNMEvtM'),
      G('grass-cs/AABkmLdvo2Uu1NygcxTcmsxAfbjkKLMHf37F23pQFrjaV6R08DGLOsD9nYPOEpBvmzbv-V9RF19SsFmWLKLR52NzvoPeaNlsXHe9_V8dq2B0G3ZsTtf7ZNENi3tIWMy_-4jAs1svlhHalnOe3lIm'),
      G('grass-cs/AABkmLc-mDRdnxV3c-QwMrdTcQmLQ76J8kxunwTG8Mpg_yAYpYUPp5peSv25ZFAq4k82onewIF3tuC3mncdKFBCF8_TUy0TxcaUzCbDWGXi_wHTyLzybaQY4Rzeu7E3P60ivnafg3Zx8OKhTn79f'),
      G('grass-cs/AABkmLfdl19HIbpT-JXPIbER5UebqTg9kN5IMwj4O_Pd71vv1R2vyv_4uMUWUv2VcoTdNpC8kQtp2fHrn18snPVOANtaFVQAoAhlphvQejdD9gZhG_NhfyOWD0qqm-A4u30r00Az-Mma8GbzlHeY'),
      G('grass-cs/AABkmLf7qU_d8JCzmoMXxmI89wZnzsBou7-MRjY9TcSys76WLiRT5_Z-5hcFCtGuNy22eAmiCrBfs39bOqNyffAKpJGuH0pri5NxsRKaZ80gvTvHRusLNkTHj5qQzbBrcnEknkXRE-2qZdPeQeKV'),
      G('grass-cs/AABkmLdRBlJkNdb1WT6Cb9XJASgzMtPbdaiUrxh_1PEEuATU-a0B9xNR2c91SQxhaZycybroVcFC3kQ-GZGOKZ8zi4OZFF08rk3WmXsL1N_Umx56Pg8MCvVX5O6411hvnOuEKf8ACaFu29H2euwZ'),
      G('grass-cs/AABkmLcbdMwzqOz7KGufjQowCcuBwvI2N2yde_ldyeXSL4sBoJzwnekJ5I3DIdZrx326KKpkSZKjFUZfiqDyxI99SYXu0zsc-_HH9MkAmScXV67gSSFM8lSeVUr0mRYz8hUbmGAev33FTaQJnYuN'),
      G('grass-cs/AABkmLch14vgsl-QYAVnetx1wfP-iuXwwIox6B5yOd_A3_KkUcMWQ8gbrAncMD5omz7WE6WFDrvuEOFz8V-dvO0QvUl-8NBqKTrmtMeMWL8GsCABpQgKfZLsvCWMcsmo-L_Hn7OK88qPQscT4MvV')
    ]
  },

  // ───────────── Fatehpura / Pulla Bhuwana ─────────────
  {
    id: 9,
    name: 'Collab Workspace',
    badge: 'Standard',
    rating: 5.0,
    area: 'Fatehpura',
    location: 'Pulla Bhuwana, Fatehpura, Udaipur',
    address: '1st Floor, Hotel Kari Inn, near Galaxy Apartment, Adinath Colony, Pulla Bhuwana, Fatehpura, Udaipur, Rajasthan',
    // 1st Floor, Hotel Kari Inn, near Galaxy Apartment, Adinath Colony, Pulla Bhuwana, Fatehpura · 10 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9128208125560768368'),
    images: [
      G('grass-cs/AABkmLcJo8d_18U4I08Cpzc1Fk7NTQDMBDRtTz3PvD8Oa8yZAG4Y3zVwQHLC2V0k2wq-fKgeJvjlknTA3j-OEiGFbfFDOihFxZRJ9vHUT2dK5WrAzG4FxG9AaWa6A9SjaT6VVYkzGpBWT1cip9qG'),
      G('grass-cs/AABkmLeWROOTjaSLa5qhN0AQww0E4j1Ff__VGI4XneanPhrzY4fO4SSGswOunoNmrpInmPEal7BXLJmaHad_ZA2OCMVvadym9zJt8gbY8tqnACn2Z1CNH3bW1bBQ-Cp5Fs_QevSI7bmyz-APztxy'),
      G('grass-cs/AABkmLdA1fkveBMOQzBogs4scbLjb98V4ZGGNHT0vQlN28owMfx-7SLtLsnD8tXP4F1J36BOyirTeOWsfZLxhlmv8OFVJtQjrbwrz1al-R0s84Zu8Xr5FteNunHxMPB1AvbNPA9KbgGWKSjdx6g'),
      G('grass-cs/AABkmLeZRpayVJ92AIt54eMbWx630pPtzCjR5_hlOmDMVyXv9iKAwHJU6KrN_fa8O1YTWatvtKemM8emA2tohOP8g4_RGwkJMIWbEa2ElRtbE3GQllV1FHjyxDsMrHAPMHKVRvoY5SaGD8AAlcpo'),
      G('grass-cs/AABkmLfFS1xEfjGM90Eb5Qla0YXfbppavuw1EhCiz19vr353DmcQlJ-DJGWPLLG7Z1EtHuwbDQI9JIDsahjkiPqnUwtVZ0Niv2tb_i0V7CQtkB0YGTSrPFjVfIfQ9IVnMBziAd2PZQSQbH-s35Cg'),
      G('grass-cs/AABkmLdQRJLHEWbn4bkN3nl0uEmgdlVZLXa49VBcGkwIrQaLc5-YN2A179i504tySzOGS8OkifuL3laVnXuI9DBEviw-hZANwZE_EKmJabhUFhQblhrY0GZi063FMsnCBOKrHXCJTHwluSk-VuQ3'),
      G('grass-cs/AABkmLeWQuxwYUjLIWtRQ796VgR_HxpiaNwei23O4TR2bdoliq3IjTE2oSF-pEdB3wOqJisChhRXvcHtpFE6VezYwxFg2fVkCNb16jVTNnLhZEwhA6f1Erjghfg0s929KaQ36nWZ1Ga_BHYPK6lg'),
      G('grass-cs/AABkmLdxYEuhAZRdmTJm4u7YGUt8YYcWNrInNb73INuaN-FPEOpQhF7Y7jMx9Sbaik0-YUd4C1qYAm6k88tUBYqlhuSSTdYwiGB4ELoPTmCCT-s6LvrngJkJ927mZ9zhJxgT66igOZTEGJkxACw')
    ]
  },

  // ───────────── Sunderwas / Ganapati Nagar ─────────────
  {
    id: 10,
    name: 'Eighty Two Spaces',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Sunderwas',
    location: 'Padmini Marg, Sunderwas, Udaipur',
    address: '16, Padmini Marg, near HDFC Bank, Sunderwas, Ganapati Nagar, Udaipur, Rajasthan',
    // 16, Padmini Marg, near HDFC Bank, Sunderwas, Ganapati Nagar · 21 Google reviews · monthly price from its own Google price card
    price: '₹4,200',
    period: '/ Month',
    priceFormatted: '₹4,200 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6828970741551868489'),
    images: [
      G('grass-cs/AABkmLd9mCSl4XuQfM1PtJVujm4545iQRVSB2om5CH2UpHZEQaMUKOVP2cFRZxJTJj0zTYBUcAlo9KMvMd-4CXBUPEmVrmTewAoUNCnv6ah_FSsHbvgPkD15J5bNKy9fATEeytfTG9-Ehw'),
      G('grass-cs/AABkmLcjqE5JlhnyXQ_8HM8YQSPqkF0ybyetfbhtjrenoOaBOjTuMTqgdSIiYJilSREELJ9SaBf8o5dv6598oIxr2EdxJcmo-T-ZwJ5t3slsoItvVxk4P6Z8wPPu-0SgYS9hrDi5d46zLw'),
      G('grass-cs/AABkmLcQkaWLdpgC2qXkrUWhcwVBrmqGHmhbFBBzIxcFEjiNQFc4pCkgqkrlehp_Ss-Ijyh96VvKS8FlfXx13mhEHupPgf5JOvPKKD8waOVXzqhPgZlGw3wvw1eXEZsffUlHLF6GBwXm'),
      G('grass-cs/AABkmLfsgoz5qEJgmAPpTFPObDz8qKbhEjrHh-MyWdRIbXOq4HRIGgNFL9tAjWhfbx1uncQSEYspw176PEqw3N5Qxj0Rhi78m8_gursoorcv-JHDL2zwiXTEDhgon-fZAUTUxZahsLkh3Q'),
      G('grass-cs/AABkmLf6SykE8-6p01ivzC3trQJW17vaJzRhstLm48yclNHlr1cmzz3Fu2u-Ka7jtTV2KwngoQar-sE5JcQzGkAnv3I6cRc1zwpLJx5H6idjQgAzKgoIAdBRHbJd0kFIriQQLjosL8qg'),
      G('grass-cs/AABkmLcFNMlfVZSB4y5enmJazkpqDNQ5Qos3h4oIaRQCfzWItN_BtLovRCAfsX1xMhAJ7P0MY3SxWlpHl1ea_P_AgdaouyeIq_LPJ5mCMBVxg3nFZ9Z5rBTiQkP2VB5zBnkseJA3jXk'),
      G('grass-cs/AABkmLcX3oQtjbmrqVlAsee1Crou22iRhcYYQxFHXo6enXV8VoVkif1cTuN4fi8wmscrk8K1Yrii7ZlQ9ReNtLWbmsGA6hMmS5O-fqTSdNHAAB7ER30gO0benruqBTZE_FMgvPjesczHKQ'),
      G('grass-cs/AABkmLdapfLXQtjjh9ZAWUoa219IOpLopSb6Xe6r6pcUoDOkoER5l-l7hXBgsGghLFiphRvAoP5u_JXNsAX0xbo8NdpsA3EZORb_panvvehsx_HKrXGw6l3iFpkwwWEMkrKLjKGRVfl7'),
      G('grass-cs/AABkmLf7_xoUkYaE_cv3HoI9raOUyf85ehoCvpcwl7jBHt_6flbeHVRG73sVYnXX1MuKHFKxE7FRMkRRI3Tw6XkReGkfusyrydyVHOUt0DSMLLwxzOh3W2jxUrN0rVfEwPW4i_DNCsovag')
    ]
  },

  // ───────────── Sector 12 / Goverdhan Vilas ─────────────
  {
    id: 11,
    name: 'Executive CoWork Udaipur',
    badge: 'Standard',
    rating: 3.7,
    area: 'Sector 12',
    location: 'Nela Talab Road, Sector 12, Udaipur',
    address: '1st Floor, Plot 2, Nela Talab Rd, opp. St. Teresa School, Jyoti Nagar, Sector 12, Goverdhan Vilas, Udaipur, Rajasthan',
    // 1st Floor, Plot 2, Nela Talab Rd, opp. St. Teresa School, Jyoti Nagar, Sector 12, Goverdhan Vilas · 3 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17895320929695246516'),
    images: [
      G('grass-cs/AABkmLe9l-wxo_xddWhJghq-UndOkDm-HOFGHoTrPuoH_BDoFnd2RPjKam9l8wlhrElXN-KgSuyks0zdFTZta0sWDWPIaPXkhg4Krt-UnQDPzCnVCGguFV9AcB-aj6nmsRw8tMV28JVLJObn4Jyf'),
      G('grass-cs/AABkmLc31so_yLuhHO9HQX9j7ZR0pMLXsriu6kAlZENBmyPu6KpmJLGZOk-HGEV1BqCLrdp1fBIocrM6dwAQY5tJQGkE9jzrQnVGv8G8_nkYAMuo-8c4zCCmNKAmEXHR6qW_F12VYeqsR1N_dnLP'),
      G('grass-cs/AABkmLfJlQXoddHdAKS_vI5_1lgr5DpqQ1xEAd50pb5wL5Ghsf0oCPrdEv83jeo6P4duvf6kairzhYAGU2YMRaVL91m_Qp6ikfpZnx1ZI1eEmgD4xNLGnjtuWqfqUVDUz8KR3j_FVjg_ePaA2TRd'),
      G('grass-cs/AABkmLeHeNdwNl5TY-EaVYhJqIMrbPoe1uC2h873SRJhWa4VCPXeJyfnantYY-zggYz-va1QtX1JBoDru2vjTXVuh4ez6H0pGu7hPqAsIQtPhuu6YlAK_ogN5CC9QznQcWqvloBuJAsyG-p1yquf')
    ]
  },

  // ───────────── Savina ─────────────
  {
    id: 12,
    name: 'Karyagrah Co-Working Space',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Savina',
    location: 'Savina Main Road, Savina, Udaipur',
    address: '1st Floor, 15 Savina Main Rd, above Jodhpur Sweets and Bakery, New Colony, Savina, Udaipur, Rajasthan',
    // 1st Floor, 15 Savina Main Rd, above Jodhpur Sweets and Bakery, New Colony, Savina · 26 Google reviews · its Google photos all show members at work
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9341790898306906312'),
    images: [
      G('grass-cs/AABkmLcPlFagrCHgPCqjmtkWRLLQwVMVk4v7arMwCSg3ETqdz89FRsRDRBVuQi_KPoB8SDaps3oYElFP8DIVs4cjK2d8BjyTvPQ_LtLMPSx22kyeFOQs0jAHuRL-lxVQJexnya2m-XnZTPobYXpZ'),
      G('grass-cs/AABkmLeZiD30I43QSf6joohTULlmPe4HigvkrBaw1ZScRCfwAweCsHVyphQKRdx0SnpA7i06gXeu3kyN6CTKwR61VMNR01qzvDJZoCbJXND1OuSAyzi6so6XNYJLVEow9_-5u_iVfXqo_-UxLSeu'),
      G('grass-cs/AABkmLeg3lbVZdKhOv66HFjuvojqtBc7xl89cJfgxERnOfuP7S9MIgQFLX0xxi6OD674y0KY1agbO7V8pG2tFsY-74UGo1-X3zI6c8NRMx93N9bTIBVDlR1NW_BxExeF3dm4SrDwZbxgiskBuiA'),
      G('gps-cs-s/ANWiy9RE1D7ISereP52lg0PRp9r4-IWRjZjOLpRHaHAKgt5-2VUpeGgiqdichVOpQ11S-twpbPjpuSSMgCkVtVF-0VeDhyILCbknaAeNSlCQQlJzpZZiH5wQVu_hXNS9kGYAlTvduddMrWh9RjJt'),
      G('grass-cs/AABkmLfN1q_s3KkoeQwpmew3UP0HM1MbeEvVjewuwajsHOYjc6YlIvoQMDDrmGCvEDh79HkcxbwNFMarJesKBZeTJtowlKDrUdfmqZz8e_Dzr8H1k_dHy2HskzBScz-DghMg3u-zSOyhQIoKzEaW')
    ]
  },

  // ───────────── Central Area / Delhi Gate ─────────────
  {
    id: 13,
    name: 'Velflo Coworking',
    badge: 'New',
    rating: null,
    area: 'Central Area',
    location: 'Parshuram Chouraha, Udaipur',
    address: '2nd Floor, above Radhey Sweets Namkeen Bakery, Parshuram Chouraha, Gayariawas, Central Area, Udaipur, Rajasthan',
    // 2nd Floor, above Radhey Sweets Namkeen Bakery, Parshuram Chouraha, Gayariawas, Central Area · no reviews yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5036208355045630562'),
    images: [
      G('grass-cs/AABkmLcIgpR9Ln22y1efpZe6iZqKJgwF_F8YJWodiZwDMNW6HH24Y8KDb1OxXAdRryITirpEgSa3LFHJE9Bhka7FRENhBHPbDCoHGaDBo3UBgDWUhNRTIs_gYYEUp7b7MT4FY2MlQx9YRb-fGsag'),
      G('grass-cs/AABkmLd4Ev9MRG6jLbcu-KOgGuE87lkr8E1NGiYPvw6ZO4H2VAI6rYZAmJ6mhsJ5tLOp7bCgtpJl_DezUa4hKQrJJusivOBbL1oWqS0qjMh5HoiIQ0ETGuqNLwpRyKa2rnudVq4AkQQhS5MkOoM1'),
      G('gps-cs-s/ANWiy9TavMbvZ4tpNBVYFZQwNzEoSAYQJJeqTGzLOnXAzGzhw1beG3IfcrW6wmpqtNCHTm8CGnyVpWTep0R3-tdKL_e5Wx7jY9hklu27ZhWRWxociKMXzNm6fDurFQp3K5-OvGbq1-EnofQMgRU'),
      G('grass-cs/AABkmLccDpm4alBNvmtEOg12ukdGNOlmqlbfk6xN2qvP1mstInjTmph4MCv0eDYfzzuTdOM5_AMUHbJd3Pa1zDDu0lgo_XVcarBbGz8caYklVo6qTSYfqyPr49IsppWSpa-zO3xqnVUecg79Gno'),
      G('gps-cs-s/ANWiy9QezOtOmrYsFzXV7MgbN3JEGKZqv48VojzziR2eyfF5Jg6dHW1XeDmTjr58LcQX2uy5Ii_m1_6AR2vroDd-nmML8rvFS7S_7_DSZBSjW2zLT_V47p62Oene2IOpmdOl0U3Zxv_qY7N5L7A')
    ]
  },
  {
    id: 14,
    name: 'iStart Nest Incubator',
    badge: 'Standard',
    rating: 4.7,
    area: 'Delhi Gate',
    location: 'Collectorate Road, Delhi Gate, Udaipur',
    address: 'Collectorate Office campus, near Delhi Gate, Collectorate Rd, Udaipur, Rajasthan',
    // Collectorate Office campus, near Delhi Gate, Collectorate Rd · 9 Google reviews · Rajasthan government (iStart) startup incubator with coworking seats
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6882141146191869800'),
    images: [
      G('grass-cs/AABkmLc4I1oJkbiJR969lrNS1v-vRXfuEJsFxA9aHsxM0SyR5wqVtHzy8jVy3N9MYRKkv1xz9EPCAQ8XEl4Xg7SdA-ymf0vijAJ8j3C6dSPKx1J8bFuOncm__VYq7qcTNpk6cbSTXO1LnA'),
      G('grass-cs/AABkmLfXcxE9PBXsZbT62r3nQAa_bmLnC8Qxh_PGqaOsEJPjuKLv6hd2gsV-s01ZR8z1db6aSHog59KfTNGBRLQ5gwVBjgeSO8Uobw-1BZCx0JJkBqMsYY4jKkTJAev90PAReb6VL0U'),
      G('grass-cs/AABkmLeL4tzJtiplAcECvxNrxMQLiMtpuiX8qaO3uucs16g9XLhKHCkWSgi9LVdmMxW6Gfxb0aHs9KcwIolSzVGb8osCA43E7XohTsf8nHcY3dv5uFaEZtwt2V3PalfOnzQbW5rru-9XHA'),
      G('grass-cs/AABkmLfL0Pa0xCMWqW4jEjWuGGpjPp2TapPdSxsgzHG6QZ5VGxzbY5lNB6mGMw-me0_ycNYCXSd8ArLiF2fprzAoju_xhaqfDac6HfvG26TdFUWU-ycFs6n7sC0Xhy24qYPl-lRViQta'),
      G('grass-cs/AABkmLeeDsW7r6y78OVPN5h1JHpx7gbleJshOo6OJ1Y4kS2Mu5RsTNuf1GSW0DgCRjpDyCnIhMytRgSH61b5Ro2X6l0wsqF7Ix_s0-RpFB3bx4REJn-H1zkMN9LNX-SD6su59zR5X2dlFg')
    ]
  },

  // ───────────── Transport Nagar ─────────────
  {
    id: 15,
    name: 'HQ Udaipur',
    badge: 'Premium',
    rating: 2.3,
    area: 'Transport Nagar',
    location: 'The Keys Hotel, Transport Nagar, Udaipur',
    address: 'The Keys Hotel, E-263, MIA, Transport Nagar, Udaipur, Rajasthan',
    // The Keys Hotel, E-263, MIA, Transport Nagar · 3 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1090659186370719488'),
    images: [
      G('gps-cs-s/ANWiy9RQZ13pjZqCadq2-RLyGo2uje-b3fovJ5R7O-O1p2I6dbPzi2ab8KS2pLtsbDpdfV1mrVy24TE1xfzcSbKYHbsrRe9Ocfq6k863X-XOilTYSps9Up73APxFyLFXxxf86HQKRMyImRKqCZ0'),
      G('grass-cs/AABkmLfrbA6T4nALJ5HoodqivsVEvjmHKBxkrn39FG5hhcS4kbDC74Pxgeb5Xd0d8UkI6c9Cp3l-QVvjs7vS70uX1lJ5c8hlMvu6f7fkAS5JfQrs5oTDp-JB798hJXGDwFuc80TMJJT93yQ-10M'),
      G('grass-cs/AABkmLcTXnWH_1obxlQmF-Oml0GlCUiz3GvcNFCia1horX_RATcVhraASiQgOoU89FlQ066CHF-N7owFxGL8sESIZeuAP0jB8a-mqFJcR6HtecMVmnpV9YTZ4NKLrHKCYkbr6C8DU4QYnqaJTFK-'),
      G('grass-cs/AABkmLeA3rE4MivU8NevHKySyJ8Vx4yaJpdUnOfGYca_o-trpa648j7bqYlBxx-dLagEUsCwHuhsayHZFaYlS_lhJgrGyvyQua34KCnbWuCiywaXjbj8KjiILihSUgDfh8R-yOcP-6F4JdTnUCw'),
      G('grass-cs/AABkmLeURKP22lwsmEduEkytoE7D-ujGlCI3K85Ljdost65KSFTkBEQSc1fTorcgB2S28pbLEiU2NpsjB8UuYvGdEN15dMKKtWavamHrNWa4ykworzk0rwwbzAO4LFqnNG73DrDANNlRhBF-WnQ'),
      G('grass-cs/AABkmLdq4jGo5g8Jp_L9RPgMvJAg4zGTADmIxbSi3LmidR1PDzjEhft0YPdiDpcaiOMHBFneU3A21dLKcwfdOp00y43JZq8wSMdx3yFM9hZ27xwvBEvPxBet3bsj9mdhmeN9AQyqUHUfnjkV1KY'),
      G('grass-cs/AABkmLfZ7hQ8419pNlRoSYkgAd_rOrAbp_UBGhVI-F8kIheMXodMiX1zkQ71-JLBsCrTA3bpu-iBlU6xAeWU07eEO4ow150CUUDloFInDuQgP7I2BVQBszvsf-ZGji21YT-eps1_R75Bs-wXiuR_'),
      G('grass-cs/AABkmLfGuZFRi0oJc6tBf3fbwGWFFsBRdLJKfmJkd4YcU444o8D7aVeQt1jK1Zc90LTWLXC5btc5H2yBQNAqRDqiF66rPUY22EXheW6DBpXUFbizSp5cs85KLT0snICHFOb3B0T2GKn1XH5j9y81')
    ]
  }
];

// Operating, but no genuine photos of the space published yet.
export const udaipurCoworkingPendingPhotos = [
  {
    id: 16,
    name: 'Vecta Spaces',
    badge: 'New',
    rating: null,
    area: 'Ayad',
    location: 'Ayad, Udaipur',
    // Flat 302, III Road, Shree Kanhaiya Enclave, Dhool Kot Choharaya, Ayad · no reviews · only logo graphics published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('11401093395888212050'),
    images: []
  },
  {
    id: 17,
    name: 'Founder\'sCaffe',
    badge: 'Standard',
    rating: 4.7,
    area: 'Bhuwana',
    location: 'Garh Magri, Bhuwana, Udaipur',
    // 4, Garh Magri, Pulla Bhuwana, Shobhagpura · 3 Google reviews · only promo graphics published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10384014235394547498'),
    images: []
  },
  {
    id: 18,
    name: 'Co-working Office Space (Gayariawas)',
    badge: 'Standard',
    rating: 5.0,
    area: 'Central Area',
    location: 'Gayariawas, Udaipur',
    // Gayariawas, Central Area · 2 Google reviews · single photo could not be confirmed as this space
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14395999126908932678'),
    images: []
  }
];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const udaipurSpaces = udaipurCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const udaipurNeighborhoods = Object.entries(
  udaipurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const udaipurOfficeCards = udaipurSpaces.slice(0, 8);
export const moreUdaipurOfficeCards = udaipurSpaces.slice(8, 16);
export const finalUdaipurOfficeCards = udaipurSpaces.slice(16, 24);
export const featuredUdaipurOfficeCards = udaipurSpaces.slice(24);

export const udaipurAreas = udaipurNeighborhoods;

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
// Udaipur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allUdaipurOfficeCards = udaipurSpaces;

export const getUdaipurOfficeCardById = (id) => findOfficeBySlug(allUdaipurOfficeCards, id, "udaipur");
export const getUdaipurOfficeSlug = (space) => officePath(allUdaipurOfficeCards, space, "udaipur");

// ============================================================================
// Top Coworking Locations in Udaipur (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topUdaipurCoworkingLocations = udaipurNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: udaipurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

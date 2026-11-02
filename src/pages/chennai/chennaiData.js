import { findOfficeBySlug, officePath } from '../../common/slug.js';

// Data store for Chennai
export const chennaiAreas = [
  "All",
  "OMR",
  "Guindy",
  "T Nagar",
  "Anna Nagar",
  "Nungambakkam",
  "Velachery",
  "Perungudi"
];

export const chennaiSpaces = [
  {
    id: 1,
    name: 'Canyon Workspace',
    badge: 'Premium',
    rating: 4.6,
    area: 'Thorapakkam',
    location: 'A4, Chandrasekaran Avenue, 1st Main Rd, Thoraipakkam, Chennai, Tamil Nadu 600097',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3558135789788642058',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TBBZpXm1VBXiM2E9wfzS851SKbIPa6i3HyTg_oFGJYnni4B2_83WQ30ZvOvxYhyBZLaoiXh9wuUJK6BDNILTV7e0E8CcTyq-Vai0IxOUC9-xID4fbf2MzQldZh_hAIW4FYxrah=w203-h177-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QgOPw-sWDzUAlqE6yAWYgQ7T5Tu01XvCsUdt9GP1GIRD6ecadPUUP0gBJ9BH515AnGxp0So2xnyuXTXgTAFp2HIbr1TLiR1CIvKLddu-xb1NJoiDY-QXY_nZPG9NB92uyOvtjslg=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TTjaCEVdbiRa2yBSdUCxaPcVsDaTXtg2j2hb9P6aChaL0IQoQlfERtyo5ZE_Jy-GtRlVGWUrBcoBgcGXfn2XF9kRnnlfM5g5Gdd1j7qjqUrpFBeX7qHC9svBOgqWc88zw3_roM=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9aGLnYJG-paK9q6tEmXUBoVJYAlcI-Xwxna7Srh0JnkRAf4XmMznjaRi9c7Nlb--3VWgSvjyHxBA5svVHc6K0nDwLBBWgtst0W4fnIbDNCrctBJ7pY_RmEi73aphRJYTS6pIE=w203-h152-k-no'
    ]
  },
  // CHECK: no 'Regus' listing at Express Avenue — matched 'Spaces Express Avenue' (IWG/Regus group, rating 4.4 matches). It's in Royapettah, not Anna Nagar as the card says
  {
    id: 2,
    name: 'Regus Express Avenue',
    badge: 'Premium',
    rating: 4.4,
    area: 'Anna Nagar',
    location: 'EA Chambers, Tower II, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=134534960508971098',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QAAOxjxF21wdkMJ_GrAaZVqQpoOnmXu3p6VCWLQUoJqYzoKEfA6MR-JqrJGlJWwSkfbMnDT-AH6lJvPKexJUkIJPgS2b-jA0KYQ1hNaPru4zMRWfHDSzWGAd7LkZyTTlyDp0VvY3NR9JQY=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RrO_2JLzPKKk8HdReLS2_GVOSn3c5E-aQKWcsNe8cNr1Pk8eAAWybui-n7sPqW-2vcAa561YdSRXNlQ16I-PcOXfCSxyGvRhPQddb1ewC4dL8sMyDKikvGM4ZjCaCaOxlvI9xQV1D-GVuv=w203-h253-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TPt9p2_d3EKuf-tIk9rtv1T_wY6Tgg1F5fVTDZDKcryy1Y3zgNOoQ7eo-0C1TfAZDqZGBJAlLvdnaI6kDKWiE_2n46WOsM7vHXa2CZ0qwuLOhYGUPFVDtkjqo8dag8HA8ibz3SAtSoP1If=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0eoXUTz9BHmPN6bBHXDlG21bOjTUUmpF4cNgBxuVYGc82RI9NvzeLx9yPNXSVtkdOF3quc2GXADMxnuJNXSxWzLkVRjfOxxhWtZGhi141VA67Qu4YB-EEoCo8_qrZF5C9okVOg6tIhDI=w203-h203-k-no'
    ]
  },
  // NOT_VERIFIED: Maps has only one 'Awfis Spero Primus' listing (used for id 13); no separate 'Spero Primus 2'
  {
    id: 3,
    name: 'Awfis Spero Primus 2',
    badge: 'Popular',
    rating: 4.4,
    area: 'Guindy',
    location: 'Guindy, Chennai',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/df945569281b92028be0575c2c2e7846e0a93d25.webp',
      'https://img.cofynd.com/images/latest_images_2024/d4d296ce0679e8cad696d7d60e03e30d9730b7c2.webp',
      'https://img.cofynd.com/images/latest_images_2024/7a9e9db363d7a33817d593e9ccff8777270421e8.webp',
      'https://img.cofynd.com/images/latest_images_2024/813132be51f29e91167307f84532f03e9f4b23a0.webp',
      'https://img.cofynd.com/images/latest_images_2024/6c2886d5eaaf68d8e111b01293cc996c2a8d68b8.webp'
    ]
  },
  // CHECK: Maps listing 'Regus - Chennai, KRM - Chetpet' (South Tower, KRM Plaza) is in Chetpet and rated 2.3 vs card 4.3
  {
    id: 4,
    name: 'Regus South Tower',
    badge: 'Premium',
    rating: 4.3,
    area: 'Nungambakkam',
    location: '8th Floor, South Tower, KRM Plaza, 2 Harrington Rd, Chetpet, Chennai, Tamil Nadu 600031',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4599811806175479165',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SrTczl09Bcs7RAZu92JqM4vgUnoXOZ1QCkTXBseT43yVAAXtlQLMAphMBTs5Q9j8A27XBAaKVjaBTUtEPDI2mZ7T6ZhAby-c42Se4au_6i31FQhFCB7uFmLK0xICDkXckPPpJWXg0cRqkw=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RmhXToog2NXaKAK__pfdqrrgi8aHkCRYIXnfwkCFZ8--i6seOHrlhYTuBujP7T4XjfRfe7pELzxlCwswGLs33ghburlxy8kUJRJZpvDVDL_YVKaq-yOdahtpOQgfxgYZPUSLxxdWhZtpOI=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWj2XAhkOpKWtTqogvN9hzfyXx3NUYzYkXzvvPaHLsuSbdweEr69V5O4pbYX3mIoyvs5TTbnMHtsHuGPVMeIS1osKfHRQQ6qacmuySroSFcTQk1Zxx97t9fJIS0RwuLi9hn4BjbKOVCgQ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RBejy19Yq2drS_CedUfhYG-o0Yn1IqJJXCa96D_vPJJQgKOwk5pIMOuFQaS3vORYKpziRWBjLEYB_PYpLkIuPSq2pM4q_IWpZqJKcLfKIos-wT0Ih6BFdA5EZc5jWVnhUaFbNV8O8huO2n=w203-h135-k-no'
    ]
  },
  {
    id: 5,
    name: 'IndiQube Palmyra',
    badge: 'Popular',
    rating: 4.5,
    area: 'Saidapet',
    location: 'Thiru Vi Ka Industrial Estate, Saidapet, Chennai, Tamil Nadu 600032',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15628682792216702229',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QjVg-lym2snFlArYzb4ok8YlBP_0yUfccwglpSmhMgMFtYnWNAjxRZB4E2z9GHNlUagL1E4kW82UY-XDUuAnZ1pdlMjmghK_YkxKHU-KtkRzdrQWZ_rSUWO8NId-Am64rnEAs=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T07HSDprJvIPDPUrdmQsi_pYRPMdjzW23osg69cXQfBDF9mZALZMG0RX_HP_gZoHqbk6NllqBKfdZ68wQFnJkFbL6Hrur3uypN2IiJQUfZxTK3PRvM0Fw_dXRrvmVbjRc-VnRxBjA7aeqG=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RLdGvPrTiTHx1UbN2wKirNCq3qIWLvMMu3KOlw4rIsW63WyBegytC4T0HK29Lo1Xmb2uE4gGbpOh86u-r4c2KvB2RrjieeumQhiChoQOdPkiZNAwVt6Hr6pcL4pbbS-qgQUNX944GnRH4=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQtsUmSVyjjL_EBbDHWejeMomiHbuvBWvlxLgjdQHabkCiEhE79_f19ZRTjgC3nruYVqEem0wXtp0hB4Avib_J1QYgf4i8h7hvX1o5Y6hUiB8YQCsCWLHnxu0512VFPp-LQ4sU=w203-h152-k-no'
    ]
  },
  {
    id: 6,
    name: 'Awfis Sierra',
    badge: 'Popular',
    rating: 4.3,
    area: 'OMR',
    location: 'Plot No. 21, 1st-3rd Floor, Electrical & Electronics Industrial Estate, Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2265918611969710263',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RPYJSnZdAwByO-y-2T7ge67Q2MiWt7Pdtj__eYtm5x5_lZfWghqxZu8PXvljJYzt4KGcIGV_kviFmb05k9xgoUXAIgFTWmWfcdhIooXtyBMjy3fE1dH9Qj3eDRuF5ktb4dRZRHfCtZIs3o=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9STKHWwt6E5BWGJZB0VRdOe9lHOK8B_gdpsLP5dGNUC7dCLBD-JdTHbjbDpFo2vWR3gAJFBsbPtb-pHl6vj2AOZeFItDfyqNa1fFRTijGYb2HpAWNXMDA4FCafCS1IYWf7SUrHb8cKUkA3e=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Si6LVVVQCyCXf67byAtjqP0FScIbBMKk-csySCRx6sPCwoEp1lE11ArZDFWib3PmqIA7pW3_YYFDBhPqfyb3WYtbl9IMj1V4dfW6dRREbULIwK289K8YNcnbvkKX2VGkiv8D-xdkql3w0V=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TA4xtBxPoWOfOLLRLfc3kNX4Uk551z6dfN8R3KrLbaHh7f5m6j2uEv-fq5OYxfUMWb_qLz3oqjJ0k-rUaNW37nT8WrfhmMBipCBkJmCndHcGzUlY2go2sK3cGiDvSbDkZVcUBjUA=w203-h360-k-no'
    ]
  },
  {
    id: 7,
    name: 'Regus City Centre',
    badge: 'Premium',
    rating: 4.2,
    area: 'Mylapore',
    location: 'Level 6, CitiCentre, 10/11 Dr Radhakrishnan Salai, Mylapore, Chennai, Tamil Nadu 600004',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9171420066733428305',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sa1B8MD-29zM2DnDJhsUcKLeD0iCsMO-iuv_G6m-s8oZYi4jr_1eeFFwEcATpTFOHPn9L3AX08rYda6oLUWZFpIymWc6ppUunyKKdl4YhZGb_VhyRExFAlp_p09sL6qHL6WJGeZV43Jp8=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RAyIyT9rCajtXU8TRT1HIhuBliClL6FTlS0kqUqpQtyfGp1ljX_7rmHXD_3gC3tbGgY518CA_hq8D2OttO2FQhGlX3JptH30Wo-91tlG27MzGSuNRz8CZ0CQL0CDjrqsGvnJWf7_OQWvCQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TcyyQfvB7rtXoeIW3gHv94mwk-MJ07yrocMD_UGNvV_lpKNlMLaa-GNXu8JZV0ZX41xuarw7ug2kK264PelA3OR210E1rmz-V4Gpv99ZRly5-dGJsLd2OX1aLVJxyo4GDmuaLnuLakVOM=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SNZHnrUJNw3eaI3BNQnA4JXd0i3CFb7wn0AMccDh1F4TtMmlUUsPaD0JGkLwTJVbgw5EmXo9Re_AjtU0A6sHOv5rkEQlCdDLkLxWnUsww-3kla89NZSQJ1dDcdrtMjdUk319zabQ=w203-h152-k-no'
    ]
  },
  // NOT_VERIFIED: no Awfis listing at Prestige Metropolitan on Maps. Rating 4.3 confirmed on CoFynd
  {
    id: 8,
    name: 'Awfis Prestige Metropolitan',
    badge: 'Popular',
    rating: 4.3,
    area: 'Guindy',
    location: 'Guindy, Chennai',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c69cf56227d1ea338efe409b4f5a89a9a6491844.webp',
      'https://img.cofynd.com/images/latest_images_2024/a5b6d64229450c480887702af46e4fef64d897a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/52182ecf8e0806d45b2c27f2ce6d8917129e52ed.webp',
      'https://img.cofynd.com/images/latest_images_2024/82f1c1fff838ec4b47d6c7ab02cffa3e977d059f.webp',
      'https://img.cofynd.com/images/latest_images_2024/d3981da8070b1c702af629d1ba85b5ccad6694f4.webp',
      'https://img.cofynd.com/images/latest_images_2024/d26f178e85df594501fd950992a7ef199f859cf5.webp'
    ]
  },
  {
    id: 9,
    name: 'Awfis Arihant Technopolis',
    badge: 'Premium',
    rating: 4.3,
    area: 'OMR',
    location: '7th Floor, Arihant Technopolis, Rajiv Gandhi Salai (OMR), Kottivakkam, Chennai, Tamil Nadu 600096',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11373805746367140179',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SOuAffG1oVyRaGE5NTA-yAUcQgQD6Yb5HFdVFUfORENMSugOAAMqHbtwuKyROyaN--Tc15msxmjHuaMaDRQu39XuDtz0IbWe9xbQZOAdPCjuvrxbaRq4YWw61ITpARvqCxlIaWfiMJwRHS=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RuxCBd5sdarBcoezFWetjXKcHWzw3ZV1pJrLcQk_z6OUEAkJNFOkmHYf0jMkoaWaBtmKGsAM3LB-kH-fSlGet7Cq2jv4ILHadndXVbyPSylq8lDr-EfVW7v9L78raBs1BOk0iVXlJK27cp=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMBYl5HzZ5VFRx6ANru2uYyXS59t33cn7kvTXM5gdt-LzVsKhdPhUfUpMtOEk5yxEXIS50mBkqUHv8n7yizhj-S_m0ANJBCEMuB6EqkC4dGQWKtW31_fGxwbVuYxMNALCry7WKJpS2IB_6=w221-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbzMnP_CIz9vKO7yRTxhtWuRKo4LIGYO0lVqdwbF67UUN5ekTmd96zCCCALT0SMLy_NFjLe4tpadmjQ88QeQC8nJyZxJS5HCMK2bpsbgqqGNcOQoNuUrLsDwKDV7hwnXM-DMUe4IOzycEk=w221-h100-k-no'
    ]
  },
  {
    id: 10,
    name: 'Regus Amarasi Towers',
    badge: 'Popular',
    rating: 3.8,
    area: 'Anna Salai',
    location: '7th Floor, Amarasi Towers, 455 Anna Salai, Teynampet, Chennai, Tamil Nadu 600018',
    price: '₹11,499',
    period: '/ month',
    priceFormatted: '₹11,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5349641000630920956',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SBc6aTMmjjIVvPhKvyxSqge3faQVjKCIkZUqf3mxCbOkZc3NwWVoi8qgUAanbPt8xEsWa5Wjd8h5ewqITUsneEU74od0jrLD1_YPwcAgPJdYZDqkq2TCJzEMCXxLY2fz6CvV52Fzm8w_Y=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TneeMWy6QP0U_2h-5XixRgoBEgAfUvyo6lLQXbR1QgQZIWmkJUaggVkLOGZswk2aP3oG51drouiQr8odL3Zw1R_HbjtUqso41DJvTHtjVjv3AZ_Vu50IDxOJqWKk_wvX-AKw1hBbHT1_Mw=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TcRQXdQIvDzvLlF-Yw7sRnu3P8taZChUgEc6LYjXiitffKucjDQ-hy5-YG1LPosUQd_1OCyhwpv5Twv6_lwJMYZ_8JND2QAWcfrgkoSrY-PBFSnF8PUYANYH_CEevtC8RZ7HLkUpG2nLbv=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQO4D9iGA_owcSTckO-r-lh0_Khon-PpSsZ3HqBHNt6wusquCqCBd70vRStbC_rUP2VCgb7Dxlv1GVn1_NaoSZZkyBFA1g9WQSKc5YbgU_c7fwybtxCwhgEoBo3DPFA_wBD9ugJxs0iEWc=w203-h135-k-no'
    ]
  },
  // Maps listing: 'Awfis RR Towers'
  {
    id: 11,
    name: 'Awfis RR Tower IV',
    badge: 'Popular',
    rating: 4.8,
    area: 'Guindy',
    location: 'RR Towers, Thiru Vi Ka Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18162778806645730687',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RFsVXQlzgbDdQb1jSCCnKRnuJk3X1bVD7RSDTVE9YnrqpDrEIMTQQyD6qQ1-WEJPcr17mpHD58bWIgpsP3kAOjB03D-jeBzFl5NdbRuFQnnAmMhyBzhzHM8e1wAFcRS1D1lPzKxO7eJSk=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q20DlDNOkXu4fWjr8y4LyoBkT7P2PDlaUFGsD_BkfOsojLADz-I-IxTxo_LkzbCNis6tHzDc7nRhmU24I1mgCfR01bS6r0KQeeD5UqmaxPY6XkI4SFJXBe3vP5fw6_NwBnKIUhQxhI-N8=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T8i8jAIc7C5t85UDWyzxHlpOqNspPZ7y09yRfDkjYM6VPPrnJbL6CoWhwEHB7lI-US5hcPesDR1WPzOoZX9Qru2kxGwzWh5eowaj5o3ipFtNlsff9N0IbhKV2urin11LtcN3v2OchwILl2=w203-h450-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ShDoeod6U0n00_n1ILPBaeXvccpI5paLvOn2XH6l033jCMug4szMKYS70nJxjAP1w8KQr0OfUldBSZeGyX8BUrzCcQbKgbZiJKdOoxmju4gB-6wlK_MVOCBnt1riOSWwN8eyKQy3bAOlOA=w203-h114-k-no'
    ]
  },
  {
    id: 12,
    name: 'The Executive Centre RMZ One Paramount',
    badge: 'Premium',
    rating: 5.0,
    area: 'Porur',
    location: 'Level 5, Campus 20, One Paramount, 110 Mount Poonamallee Rd, Porur, Chennai, Tamil Nadu 600116',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17295276087432763827',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sci_wdHLVA2r2K5mrOmef4tqTfyQ36Foc9ZmlAgrIAGp1plm-uVFumhmUfQRgVn0pVUsqtFQmrFo3XBm1SiHqZnCBp_jvQ7-OjmMxCcOBieLVM5dEjOAmogat-Gc9r3yzeVuE=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SWBhZnvJr0Rp5t4IO54NZp1f3QDfqLfy-5pzmijpGz_9dVLc-iVY4hdtsf5AWap5qTPnpsHwnIF5sGsJetBHdgl79D0E8_YF0XToLmD_hkFxlCDAy2WlxIYWsTvocWf1QzGKCT=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SmTVXT7RdjwO8_8J1gTM3m912kqgWVP5J92uDCiY64oqWwd07yMPR92PoxWUaxQsUN6L1y-pDs8TmjKxjDAZopr4sF6mPH0HeV535XYsXa-2XhS81txO3tc8m--Nj_8wVf9SaU=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TV1O_LWk_d-22fpyvWqbkMLHxWyyvi7xiBAl8--McY-NUlPMOENuUvlRXNOY9UgKJ-Hcz7sdK8_G8ytDkml8AimMvStEinsjAidIbQNetSsqlplrig8D1JayjIP0e-wMjMZwXA=w203-h152-k-no'
    ]
  },
  // CHECK: Maps rating 4.4 vs card 4.3
  {
    id: 13,
    name: 'Awfis Spero Primus',
    badge: 'Premium',
    rating: 4.3,
    area: 'Guindy',
    location: 'SP-7A, Ground-2nd Floor, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15549628553298535373',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ThXjDx_s4eZnjtczHNO-FBlR_xDXUThUK9Ke5eRGmUYrFxrAy98PMF_GDcVOaM13Q9zv-jGh6xXrlovmOFf6siUzkDweO-AerLx2uZiUUXonbKFjTUqRiICksaEKPTcG5JW4U334dJwy9Q=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QF7Ih_EubhBZTBOUSlqAfWQ_wez6gt6YrAIOTIMDmArCwiieHeSZ0Cg9TEEoXWtGQH05Rlif7BfwianB1_bO5TgXbQPbEFK_q1Lgwg-W4ZhHWVMpN7VXYxUvR0DhN6ee2C-2xazzfjNDde=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S40ETSwK3sTVolUxN48xxPyIi_-lms-6gEILXjFgI1ukNVrtI_rLJTXLdABcN3OM165MZiysPHeT_gbw98Mtty8qNZ8rFK4WSGEFZlam4-z5HcOHUzej4bFKKKgA3_gER8zwKN=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSzi25jJ6F5cqNiwiZOq-0oceruhk_5q-PvqNTsEDRIXHnlWj2DSmxjVt-iYRvGUJiFeyo8ljutavpseI2juBNkTa877ftKtjioQU0fzOvJNUOy5soE5euAJEh1OvG8Vqi2s0C=w203-h270-k-no'
    ]
  },
  {
    id: 14,
    name: 'Regus Shyamala Tower',
    badge: 'Popular',
    rating: 3.5,
    area: 'Saligramam',
    location: '3rd Floor, Shyamala Towers, 136 Arcot Rd, Saligramam, Chennai, Tamil Nadu 600092',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6768589709105447295',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TTLPWS3-RavezS_NR_lbh0ni6VutMbeT2I2DKBHq1cvpsMYa8yBNkuQ2aWGvpirctm5nvragix_U3lrvjZOtpVZd6-bf-HgHqgLZjjEbJKHF_LAoRgU8sHPLfG-MuuMqeAuw4q5wE7DLv3=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RTCq-oQDKn-F1I1KReouVMMxJpWswGbmTOjgupNATBuLEeeG49wHg9T_Ht1AoOiGKDGpdMzbYa1On36Rq3RxUs65styG7U6YEoc4QYF5_ROZJ4R0gDNyYXbpyHVWoK20Jg0nXMI0m9XjxT=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TdFigD2bPwMtN65VKrkwh1mr6rCYyM8IRk3qRCIwYxIsz9yBdd7w7iQb2ROHHoAORZUmz-aU5vF_5zzT6xASyu1Spvg333RzFKCoA_qfkjHOECwY7rQjifpSh3fcc1pKEvarOr6pLH9THp=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QwqKnL6XwDzXT7FTcNy9ArbxgnNljYgLTjM6U3M298r_jmSsYnGYo44pkuhohIJlq6P3ZcZiK7Gy9QyTT9EadRKMEddwHrRyt7JfLEKhxIBBGfs1SGxO1Y6brSdQHhkYHvaTFR5J4aGhZV=w203-h135-k-no'
    ]
  },
  {
    id: 15,
    name: 'Awfis Bascon Futura SV IT Park',
    badge: 'Premium',
    rating: 4.5,
    area: 'T. Nagar',
    location: '7th Floor, Bascon Futura SV IT Park, Venkatanarayana Rd, T. Nagar, Chennai, Tamil Nadu 600017',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=266603914724462981',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S2SHo21Od9U4hL8L6_p1gamgY9W0UW2VHMhY9Vudj3VjXmw0DgOnknj8pdlURF93eQC0QUOdYyfhvtWoIse9wl63jv7IPUbwo3Bq_u77pVh7D9IRqaJDGYWf2pa38DkA9leogm=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QZosXUV26K7UWjGebY6qOaHwG8bn7vR6xvNR2Zxfawl3CSEd4dp4pM5nbsYs_WMnMCV31CdCLZ_bCHz2Uyhg8IsluqEIYSvsKkIK96Xj_L8e5ilB6PmyX4oGQygWnECzEJVWgu=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RYi9Vxo0hCbV_TOWP_kibuUe_o9wu5_xrs-5E6rxQaRXaAN5-lwCkS0S9P0RkTAxeOZP10tRdsrqYgxyg7DwpN4NnAMiQogbKfWTgVMHGu6Mw0dAVgpkoDeXiEvLwIyLZvndr0=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qan6lzNBtWA9Qr2Y26Ia_gvOzsIfM6CP9XYgwQQSI9RPNksp7uRMLKq9-cO46E4TUYxrG3mebqBXi60zah4GDLZ7bzdkcOHFQEpxShxQX1DVJVLynrg_wwmfopLEOAAUCwFBpp=w203-h135-k-no'
    ]
  },
  {
    id: 16,
    name: 'Regus Olympia Platina',
    badge: 'Premium',
    rating: 4.3,
    area: 'Guindy',
    location: '9th Floor, Olympia Platina, 33-B South Phase, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹13,499',
    period: '/ month',
    priceFormatted: '₹13,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6673953060564277745',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rc3guQJVn3VsDRGmhO-3xR9e7srIh_ienCY8LeIB75KJWG96gqOgHcMPOnqC1m-oAIKb6WLy7OmYsHo9Uuyhfrmdewo3H8P1IO6fGb_aCI3fMqHeT7uxysa9A65fM6yp6UTHPqtMkPLc-K=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TTt3K16kuxmoL-aMdx3cDKelldW-fyVYvUJ5w2c0jbP6uY28Bo6Tle2pGO8oS7Z_yyvU3YdxOJ1f28wXA5EMcWS-W7IRa4HwmpfL8vfm6m6HwFU0B6JkfpLwAKMG1slQxLGyElu-Aw-gS8=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RUUhm2LoYQaKvtRa9BRiWV684_IYtWib2m_g-ML6ojUGyxlLIwm31lt0vEYuyHEhPtR4BYLrLSck2zorv9P82ZwMcbUH2Dh7R9LcxosPdjQPnpRDM1UI5J4OTSIUtgO7EKwwZoIdzSulNL=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QUd7UQeawgVEobXYVZ5XEMBwO-kdEhPUBckz-dSI3g57mo42-h4jylW48NUHVH8sTXfnn2Slhn4VgfExc5uHsaPC9qPkye1sOC4DnhUnTcrbLESQ3UheqThx6eCQwcLRXr7cbqFdwFVz0=w203-h135-k-no'
    ]
  },
  // CHECK: Maps rating 4.0 vs card 3.7
  {
    id: 17,
    name: 'IndiQube Alpine',
    badge: 'Popular',
    rating: 3.7,
    area: 'Guindy',
    location: 'Behind Ekkattuthangal Metro Station, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4094453735640196029',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sf5_WrG_ZKdmct6NGybwV1reYW3INYMOMLATl2-pnc0vuv1GHTHN7Gy_H_-nopbvkMQ58lq4jYEOGyK0eIgyweR8dRyx0PqRNlFnbbFqWYLTJ95M8XtEtfpTL5uPlykop7HQqKI6_2Lmzp=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RG1v45UJpH9q0c4_szeJo0gVpN6bmgE5kxWt50zyX5YaqiK7bDW22OC2k1z1Sh-xMPp1b1PeU3jKG5xrpDpTt_NPStOLu1gPZ4nrRtkscbrArCOHdIjUQYQXImMPz6bl7huzp63TwVK56y=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Shl6HBs-e_FQptv_J0ga_Vpp0gP0dD8DjMFNVRpiWeAOQnrVSn0Ub4yHAM0mlmkLheBZ8ZeoTn5BqufhCFXtknrPXDdcm4XGGF82Qc5g-oHzpniWESyswbxJHM3AnTNz7f8m7ipvL1YwU=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSUrJN292eLH5lkPGuqHkOmas3MLYqomQsfEHeN7eYqj91-JBWY43DWD1pRkyoTPydSMOl8-qzA2OdW0pjBDzjUw9HsPdSiw6BBsVEvGf03rqPP0fxuGYgxt-bvDgDsuR968Gs8iLWbAve=w203-h270-k-no'
    ]
  },
  {
    id: 18,
    name: 'Innov8 SKCL Techsquare',
    badge: 'Premium',
    rating: 4.4,
    area: 'Guindy',
    location: 'SKCL Techsquare, Lazer St, South Phase, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4217191772929404609',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-OUz4Z0DAJpBFI4LAjN81rZC49OvZsja2-5-U2eBL7joWSQUQCzpf82pGo0IhkEICBsIJDkY8RaSp7TiXJEU2tsITYz04IZzvzlPLv1tbfRX_8Gg1sncke82gvp6CY48lPk-PIg=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QJvTsPrhsBi-uFJ3yb0gqGbn4llPPeo2n8I10qbYAQQwDbcTb1ONW2BoImENvMqyM8uBtoPlV4cXTSmxClRcJwii1SXx7ohorcZB1gi8Gicd4GOFer3ULhgnpicRqVX-y_Ddk=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_DCIsxeb_r3xcGut8nEVi2tKIUqb9oV-2rS8K9KFpmdUFehCJwdy8aRCbqsw4zj4j72wdsCxArADnM5jdA_5LPyFTSzFKZzmGgKLkvCp1tgl9rPch4-Cgkqv0Afrvu-dS0uAP=w319-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RBRB8gXOoK_GFXFWFQ90bdFOgwHZ6aJlHflGzz7ygsA9A5MOe7_SVNzCsQ3H7voWurcQCNBd1EC6SlT4Dse7bCCQ6_vdzHDlR2MHzG4JVrMMqIUciBLruVdzglQy_GWrVfTn4M=w203-h135-k-no'
    ]
  },
  // NOT_VERIFIED: no Awfis listing at KRM Towers/Chetpet on Maps
  {
    id: 19,
    name: 'Awfis KRM Towers',
    badge: 'Popular',
    rating: 4.5,
    area: 'Chetpet',
    location: 'Chetpet, Chennai',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f508fd36763d2da977b346f952a614509a12a335.webp',
      'https://img.cofynd.com/images/latest_images_2024/e0552bcbb10ba6384333e61933cf216d369daac4.webp',
      'https://img.cofynd.com/images/latest_images_2024/8719e5ee33f12f16bafaa28e1ad5a72fa56ec602.webp',
      'https://img.cofynd.com/images/latest_images_2024/8193019c4161c359d3b592d86d35705ee8b106ba.webp',
      'https://img.cofynd.com/images/latest_images_2024/4fde50f391fb94d9c11c594629ecbe8bff5a68fe.webp'
    ]
  },
  // NOT_VERIFIED: no Awfis listing at Agnitio Park on Maps (only the IT park building itself)
  {
    id: 20,
    name: 'Awfis Agnitio Park',
    badge: 'Premium',
    rating: 5.0,
    area: 'Perungudi',
    location: 'Perungudi, Chennai',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/69b93def437bd45feb153d955c7336659267f63c.webp',
      'https://img.cofynd.com/images/latest_images_2024/7020811a9722f00bbd2fb9bc254b87ec53551e66.webp',
      'https://img.cofynd.com/images/latest_images_2024/5cf56d995466c55db805a3f5963a8d9531934558.webp',
      'https://img.cofynd.com/images/latest_images_2024/9235c5b0177b38e867e31ef4bed9f6d32a96139e.webp',
      'https://img.cofynd.com/images/latest_images_2024/3aa221998bc442e3cf58a4dd4bcb61217126ad6d.webp'
    ]
  },
  // CHECK: matched to 'Innov8 Coworking Space Millenia' (Campus I) via CoFynd's map pin; Maps rating 4.6 vs card 3.7. Images are from CoFynd
  {
    id: 21,
    name: 'Innov8 Millenia Business Park',
    badge: 'Popular',
    rating: 3.7,
    area: 'Perungudi',
    location: 'Millenia Business Park Campus I, 2nd St, Kodandarama Nagar, Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8455788532734170774',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3ff2a19903aeb0c2991abac10f1be598476a30ae.webp',
      'https://img.cofynd.com/images/latest_images_2024/dc1a41ee7796a99faeb90556d2031a0b90c35fcc.webp',
      'https://img.cofynd.com/images/latest_images_2024/1c3d53a230cafcc08d340e05d632edddd5c8995e.webp',
      'https://img.cofynd.com/images/latest_images_2024/d87d73bc05fdf3ca7852dcd41724735bc806060b.webp',
      'https://img.cofynd.com/images/latest_images_2024/ca2253fd59017dc0d5ec7fc0c5dfd6b947ee3e3f.webp',
      'https://img.cofynd.com/images/latest_images_2024/cdf0213f4fda37ca9bf36322a67e5d7562225292.webp'
    ]
  },
  // NOT_VERIFIED: no Awfis listing at Prestige Polygon on Maps
  {
    id: 22,
    name: 'Awfis Prestige Polygon',
    badge: 'Premium',
    rating: 5.0,
    area: 'Teynampet',
    location: 'Teynampet, Chennai',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4f9acb6561ee38b619d7bb1514e4c3cab7a5c3f3.webp',
      'https://img.cofynd.com/images/latest_images_2024/e0181953f320d241c5bccc586c1fcb4cca766edd.webp',
      'https://img.cofynd.com/images/latest_images_2024/abfe1b1159caf44e85d08bdb80c7a253883b9bd8.webp',
      'https://img.cofynd.com/images/latest_images_2024/3a9fb9ea683054743282e4f1befbd1fe13ba1413.webp',
      'https://img.cofynd.com/images/latest_images_2024/dab7903430585ff4ffb679e65a93f6ca314d9b4d.webp'
    ]
  },
  // Maps listing: 'iSprout Business Centre SMT'
  {
    id: 23,
    name: 'iSprout SM Tower',
    badge: 'Popular',
    rating: 4.3,
    area: 'Perungudi',
    location: 'SM Towers, Seevaram 1st Cross St, OMR, Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2445030413891752543',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QTG77vW0sy_EkC4mnWCiegqhaJkjRyTx8umPQPqmfzqrFrXQIYSZKc23IFnyyr-jsJfdlgW5SvaODT2eeLCSDAlXx99Aqrs_CZ4bd2QGFAHd7vmwHFZ2FVBE9Gnaqlr910mczN=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TiZCvpzsXwIZV2gYcJA4vPlBQmJESc91xQJxo8RtKGL2m431T90L37fLFqzKkFOMnHp9odolyHyAtQbtVc6WpHG03iRvOkRcQgV044-ADEPW73mNYSvSpF_a0kfpHSyMcwWiA7R7eYIcI=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S2ZOoFtCTUhaX4vrc1JsHmBImQxIu0UHgN1IidqYZm-Y-7G_yszkaWzqo6FgSR2QQBto-FO39U38rjySo7-2tXKsfBkNNLna17wdJ8nuGYJrEvBsYFrqRcY5nIh0Ubx8NYa4y7Uw=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9vgzNJ94OkFsdD4unFzkMiw7Aqo8HZQEHgJYbMmtKaHfatpTh137m2Vg6g1oI0gFqoMBp5k5uJyWRJ6-jIPGMcFZhYnR0jOcusfL7Um7otq7n_tNVttkiVzikPmq9fG_TVzhGag=w203-h270-k-no'
    ]
  },
  // CHECK: Maps rating 4.2 vs card 4.1 (card rating partly cut off in screenshot)
  {
    id: 24,
    name: 'Awfis Gemini Circle',
    badge: 'Popular',
    rating: 4.1,
    area: 'Nungambakkam',
    location: '143/1 Uthamar Gandhi Rd, opp. The Park Hotel, Nungambakkam, Chennai, Tamil Nadu 600006',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1550447726656181607',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qn64yx951BYY5OEbxSdmIgx_fPSFp-HPcB8a-_olpX1AUHUyVXsGU68rwArU2BXBonzen4h4ybngeizYvb8jZdJLUdXWWq-z6PUUqaIye2z204aE586s8TmVAfQS7Sm-StSl09ow=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPDeKjSk4anAOtnmP10uIRDamHIkGECmk2fNrQUT-BKa3CfzmVoyhFbbptl_9Qir4nBhQv8TDkHCPVfuvqZfz7fiOslLmrMa80O_i9B27BGtBi6D2hVZ9Su-HZfcTTdG8d4vRc1hqToP43=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbkYLpxsbe527Nbo61lW4oa7xICXvQJIt2skQBoHPgynK_NCCg2PQhuKgrin4Iy_8U3Aao9vb9FWdMqe0GnTdygnPCpWnLiQio79HZ7R773jN_PlIupOY1nxVt0YxabzaVS3QbcQ=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sfe5NjTiO76UcPJNtIghCmiSeQdzl60h0jLxsX-pwYigwSVC7aE-e0pe56kkIiwyk84gl-RKFKn03ouFmIFsnC8GXSmA16PXyIpZK8oLrY9NOXWck-ev6zGMasYKd-08YFlYg-=w203-h440-k-no'
    ]
  },
  {
    id: 25,
    name: 'IndiQube Viceroy',
    badge: 'Popular',
    rating: 4.4,
    area: 'Guindy',
    location: 'Rajbhavan Telephone Exchange, Sardar Patel Rd, Little Mount, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10413449379610503440',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-iiufc03H2z5IiFAfrl0whWx9HRzpkeO8FAVSXV2APwlK0Q58-6_iSaiS18Zy0zpFrwJTlMAatWszJbMmwjuKFPVYluaJrOdpZeuUt133v49dOc0pppOJyePM_qZq9Y34NfaaN7OMgNHI=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sa0ojcfN0jbV-eRFLiwVDnSkpPSQnXW2EjHnbs1R-qhcl7Zf8-HIF9vxchAYPidu1Vzprldat-Ci5ouE6Gc-ir5BkydU-6njqo5Uytbo-vVEG4GQAfP8VUMJdzcTi1IvqfwAWxDnGt0GGk=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9So1MZFk3N9CNCfthC2ey7thcboXoVB4UuWtI8OhOlOwR-9jb2VxzuYmI_tvJNPkxXCWUlkfP2FdgMWnDBLGIXtrnqhPB4B8OJMzeVccOy8hkR07PmULCl1UPZrFvJcKcSk_uk4Nq7rxIs=w203-h131-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tko37NvugmTz2PUdHAGWcyxaHeWiD6XPNDhJHfdkSv3Z1THwYOAc3701I9mlw6FNJREuz1i1-aZrG_sQ_FNNUxbVh8FWM25dbQiyoo-qW1e4vFZT1zE_DYHD2gCrtgPGYItpgJiyk24Sjz=w203-h135-k-no'
    ]
  },
  // CHECK: Maps rating 4.6 vs card 4.5
  {
    id: 26,
    name: 'Awfis Rajkamal Pinnacle',
    badge: 'Premium',
    rating: 4.5,
    area: 'Nungambakkam',
    location: '8th Floor, Rajkamal Pinnacle, 145 Nungambakkam High Rd, Nungambakkam, Chennai, Tamil Nadu 600006',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2652523349917224567',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1cYjjbE9rYise3_2exYErNw0UY4n9ZVRAJhARmcF_G63LXgR0EI5aCX5yUn3qPbKkSDPrGhq90dbpXcDs2f3gT9ymE7xqStGypwhyufY-00r25FZYOvztnUASM8pp5df0HiRk=w203-h451-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TzkdyoyPrCRJMnPE8gRFKiLJnwi6FeTfDBoWl8GQmUB1e1ctuWFcKdZN0MlfX5_lV9Wd2WdQtQKKXiY27OUPWluTI7BD6mBLDTa8VLlEX4oWO_uYhtfHfk7jkZ6ojfBxwrRYQ=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SLnb78B0l1q9V6TcXFdFwslBDubLYKVsMtgk03ZdGOdU5Rn3wJPblT-SlBi3tOSqzKnawM_cP8M_tGbBF3Jt0B6Y0deZeqT3vlyWhTgwJMzO4HEmJfG2sAzlT_tcDPBZV70sKEfQ=w222-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RkIwcMQXYe08PP5pz-_j2d-L1lblLCushKeEqVdTQRwqtDehFcu-KWUW3rVQ1OmnaEvoWqOWrIPyI6-SdE0sPVBD_D0_MxfkYMjt9oUEtlwQ8Umkl7ZJJeT5M2v3M7yEwhAdhw2Ap_Nngz=w203-h270-k-no'
    ]
  },
  // Olympia Technology Park branch — not the separate TEC Olympia Teknos listing
  {
    id: 27,
    name: 'The Executive Centre Olympia Tech Park',
    badge: 'Premium',
    rating: 5.0,
    area: 'Guindy',
    location: 'Level 5, Fortius Block, Olympia Technology Park, Plot No. 1, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1518075888796399558',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Snm2SLf7jF04I-jkVvkXDgA4asByzvi-nEFtyUu5rZqVXMZVf92xRd6t0v-yb0G_t4G-fJhbI2xXISUC2zzXRWZKziDeugURv0tbIvs6J1jKPvfOCFr8PK5O6zDM0kEodIL8qw=w203-h137-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T6pW6lWKs8zOtCiy-bt0fzN0W_tVepEtrEbbB7qfD_3BWJTxOrFA_7udF0X6OT5y0kBnei4AHGS1wnTNqH9XlFycLLHDpeQq-ZD8NDRsw95UQ-8LDFZw7E-U0y2nsQpA2WycdagA=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QvEGOg2XuUS7Fo_ElhH0U9mN3zh4iU0SRZeyiGnLHUVZ4R9bDVaxV3RoAyyWG1fskYlqiuUpPRqxoWH4NtoVjDrKUC3VqgqdRtC2IdNXXbDzf-qmwI-hT7boqiBtPOqEz-Tnqrqw=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QrYKmC4rUj0mcuY9iAMyfjTTn309XMm_HpP-GQl9xrVikF9COfLP1Pfa-8A3twEZaaJCOyqmYoHBPfP1hKTJ-aQw4EeGZkV6OLBm0OEhmqMJHXEkG29ihJY3lgtX_4jJ-lweUt2g=w203-h135-k-no'
    ]
  },
  {
    id: 28,
    name: 'IndiQube Excellence',
    badge: 'Premium',
    rating: 4.6,
    area: 'Guindy',
    location: 'B-20, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7324884912420174143',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9St68g22hhUUi9Z8QXFwVKd6XNxPsGK9Mn1WLk3hv3Ia_Ot7yhRSVKYDdXrbJJkbUz15eREV3SIm8J8ULk4ZCmvWmxRd1ZWlonwyjuZ9-YnoUKyI8rXLG_1cix33ox03VXe5qcZYXXe2BiV=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhJ_zdlPaRT6f7ZabJhrLUnkdUbcidprw0qmRqpEMxWdNsd6B_Eg5cQ8IfNHGCSLGB_0YkIkxGVJNrfwHrlkUOdGRlE_jd2Pt9eITmv0HtWw1vetUrOfg8aArjEkgLbASdBpuHkA=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SruQYH7SvoImyjYqZWVzX1yeqIdCE9m1e_09EOh0gMys2h1E34znClLRx7EDu58Tj9vU2QXoSJVprRlVpzXf0zoTUGX6IHLuVBqdGUdWmc1NHUHdFpVk6szujovOzOqCUipk809Xas9GOz=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QBwY-e71-YA59ih3DqUYF5PrlpjUmncuRWKU1rjX7xCw-HDsJaUKMkyyjJ3vTHsNSxC3Tpd0-t2tcMqTBY0efg31wY-wjXFiDZJVy4TcrpjdlP3bQqm76BV5XvNDo3h5jBoqNY9w=w203-h270-k-no'
    ]
  },
  // CHECK: Maps rating 4.7 vs card 5.0
  {
    id: 29,
    name: 'Awfis Prestige Palladium Bayan',
    badge: 'Premium',
    rating: 5.0,
    area: 'Nungambakkam',
    location: '8th Floor, Prestige Palladium Bayan, 129-140 Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=699675857236984648',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q3PxYmQz3BM9cuqx6CotGWXNeKzlH2jD7YEDS0BON36xrfUBxPU-19L9SyDOAX9CnFgcXQ6W8unMbQ-OR8rPEJX0f8_KcyL5wERt0cUEb1cZLiVcR510EV6UgN-8ebsz6YQeYqrWKDrQAF=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RZJHUV9IX2Vsr0LVCvPcnnIxM-D5ACre-9oorAq-zSxHfwLXWzzHXbf7nFVl5emLF1SLiIK7sLMbfHO2Yg2Zg9MgnzfFfTJhRYELy9V1W_fI3BvoXzZnlbkb58G6TnewZVXrm45-XI-iU=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R2SP3l8ooMhT3toqNqMz-fLmO8vRqHGlLYBQgn_1N711h4lPx6BFZ5kU_I9TRZ9GUFXRE-eOQa95oCbHyYMeD5U8hkRkyKhSSiNmJPdb89wJnfTdbMV5OOVKQDEKIfQkqtCo9mi0-ZxyQ=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TM2rZft4LJL1sdX4OP0ZnHdaeEHdqgG_3zxULrf-LWdu8nN_vTK6kTvkifAJi0klYepmTHGQ-BNuOD5CZOChtUkGuyMsKIjk0bLVOXXarBt6dyAWLz3IYKtjPU9gZAKND0B8un4lP_VqRT=w203-h135-k-no'
    ]
  },
  // CHECK: Maps listing is 'IndiQube Ocean Bay', rating 4.5 vs card 4.6
  {
    id: 30,
    name: 'IndiQube Ocean',
    badge: 'Premium',
    rating: 4.6,
    area: 'Guindy',
    location: 'A-19 & 20, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3105383660372210294',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TH4fMPiK-ejUlkhprsDVrbI2JZAaQkKb4f-OwEccJmYjzvlfy4SSPXMkO3QyJCtjwkjiVRJXT3RP4o53VkwOmi3dQ-4tV7JBYeWeHVEST8mcG-aTMSUU4SjruWzetgDyx8_JbNU_vm_fqx=w203-h304-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQ0KJxKy3ya1EJ9SOgIJjqTm9vK97V_IZwqZ3vGVGgR_rZiax45XDpredafHyjkUvTEpvwGI-xAsAMC4MrPsKgwdQBxXkVPBvbICV4KNUFslzvqNCHUOD6Xi-b3QKa31Jw_0BCW_lD_Bhb=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9HCI-KGeGaNHF4WdielvE5PXfxkXD13IQoMxrLL249XPKVpDVvme3WoMT8w17BSGwnrhi-oYrB4xPhapupiabLOkF3cBQ4dYhiLdN3vH0PRo8w3wlJd-kL3l-PbIOimOXaTQ2=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SDyRo4A_YEqpn-7fcLrHB47ItfrDGQEdRnTI1K3k881JGAoiZeq3PA_eBGCtd22vYrQl6e1uZ45it9mbjlQHRPKiscobLCQJvUP9OZ8j2Hr8XmuPczF04XcmCRJXK3DH37PSMq=w203-h360-k-no'
    ]
  },
  // CHECK: Maps rating 4.4 vs card 4.3
  {
    id: 31,
    name: 'The Executive Centre Tamarai Tech Park',
    badge: 'Premium',
    rating: 4.3,
    area: 'Guindy',
    location: 'Level 5, Tamarai Tech Park, Plot 16-19 & 20-A, Jawaharlal Nehru Salai, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16758147857283565015',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TT-89FFuLj3ixyfnteoNY9Tud1QvceStOLPkX3G2_rXZs86tMG2euqKBioiCsgMmzr-W9viE4kFBIbWqLJ0aIG0aRl-xGvbZ3EvyfuJcCoCPAt02QTvSMd8fMFaRkUDiLeL7c3=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qy7cxTRBClLwv5mHtAyEQhO5-zoIqJSKqpDjfhb_2xI7wHM1w3ckmCWMdnTkNzQM58SfXDXz37szO2BxC1xdKO8GuciqFX8QQQVj--aBFcqS6L8kqpptvq3iTj7NoZNYRqlupSzQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_-qY9h5ZTrkLicUcX8v4myXC7vs2jkBmo9dTI_N1ehz5_b0UglVTJxpA5h10S4GE5dmxuMo1qi9whk4VO2Y441PnghofAWywR9HqTW7JAEes3hRuhWUXOcU-ve0s4EbD9mjFw=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1oBhZx4g3-f1CMtIVOGbos4fumiUymIWIhw4_UJ11HGEf0HNCe09Dvx9cnq2g9NaEAGYFt9QHwz-K-i1u7srD8PkdyMx7ALsyWxcFiRg52Up7iZ6qmQ39z9O3iVzwg_pXxYtj=w203-h152-k-no'
    ]
  },
  // CHECK: Maps listing is 'Awfis Omr' (4.2). Rating set to null — it's cut off in your screenshot ('4.')
  {
    id: 32,
    name: 'Awfis OMR 1',
    badge: 'Popular',
    rating: null,
    area: 'OMR',
    location: '111 Rajiv Gandhi Salai (OMR), Kottivakkam, Chennai, Tamil Nadu 600096',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16440632088378849245',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R-IOVDgz2MYTqRhQXLNfm4ieW3Xgz2aJsQSE7doCwE7cjk7f5A1puwhhvL9FPbFF0AyAkyaG7zD5ZbTqLXKKX7DECy3wSOrA4LWJZMdvxK4WxFRWWMRn2AZQTFkubKzSUMgixU9Q=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S7XgPWGzKtpttogQG4QNe6fQMU2288G9y3EfgjaKvD-70sW-fT3RWbbCYBh17v50el0j3snbHim_q8DMRwhZGlrDo_ib4CqZVdUyd6nXvTkCHnSDJ5WVzG0fIAmMqOSLTkbFsr=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Re2EGhXCfodXArHlbI3-CZV6WdxBecpOe3Zm02bK2KkX1zRl1QZjQQPda5p7bzo5XE30zyO9xn_RSSe7LnAS-bbZlewzsEJYBPxlKwHZj70x4_HioSHbJt1CnXkUgtjh98eL0Y=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RjJB1oFnf-vLbehAUB_rUegdV4Uu2i5kCkWX2SSOrY2c6g46ETFNHEmB-rhAfNTtDWyWFi9v-_uO2sdhUTA42I_52LsSCmYlQL3wf_7WIC6hzFsPadCzq2zEflknzho5tgbf98aQ=w203-h270-k-no'
    ]
  },
  // CHECK: Maps rating 4.4 vs card 4.3
  {
    id: 33,
    name: 'Indiqube Wave',
    badge: 'Premium',
    rating: 4.3,
    area: 'Anna Salai',
    location: 'South Indian Film Chamber Compound, 606 Anna Salai, Thousand Lights West, Chennai, Tamil Nadu 600006',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=446135364798574875',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9kGH_Po8y7x8N5OIhn7V-3hR4XamH5F-67irT3c0g6hhY3DME1xgYB3V8o-DZ4XnLHc37Db7A1t5Tz0KKYIZzasMrrW_HG-Ie4bWB3KnWnmeUTXPaX6ghc4nWMq7JyXAo6V5uxGO3vR2n=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sa91Sa1AqZWY_v-COmddTSn8hQe8fvM9TVBs5vlmP3crYgaYNLDzJaYC_SOdMBSGn0n8wENOeK4yn1ygDYJSRN_c6vU8r6sMCmSt9fXmWFGMlDM3ZQfWnIaSoFxFEvRLPzhdCyiXybr3Qs=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SuOp2FIqHoLqOmmokOUN299EuPG5d_1-X5UhA0fLjMV5xbc8C28LPO4gMIsqp2iJS7IHGB7w_cVN1HuZq94mtXVnH843ZMslyh_Qx9rs3tC-B64EsgcIC8mptvXGCRKCrIX3LbvSSR-Fc=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPa2N9XNGQwsId1M-2p7Ymf_KHXIaFScZ_qqj8O3CZpV-SYwNzyBCNDZGyYl_S8aFQ7gVI3jWX-61eKvXVvf7iGsEauEhQowqTg82nu6kVBeOxQQmI6aMswSTziAn888CrdbTI=w203-h114-k-no'
    ]
  },
  {
    id: 34,
    name: 'JSRY Properties',
    badge: null,
    rating: null,
    area: 'Selaiyur',
    location: '3rd Floor, God\'s Gift Apartment, Plot No. 5, Bharathi Poonga St, Bharathi Nagar, Selaiyur, Tambaram, Tamil Nadu 600073',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10051031294903094630',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3ml3K2vK1Fr6acUg3uHDiOf5qwe-05wtIsAtwNdgHEQIUzkwa3b0UtO9FZrCqHSJTAES9AJY0J0_NX70sLBFK42bcm7LrKmjCI-wJ1vhA5SLMNOwSiUjDkvBwPZFe1QbtcBgcs9bk2Iw=w203-h151-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ToMaoEGBUN8JqTj-uwd6PGy3_Yp-Wy3ifYWW93oin3jhFxq6ZeIRnpdL3otSr-vmk6aB0PSPEjcFPTSRsZbAF5h8S4jgRYfSYPxOi0edHb_HnN9cSlFfpo7cTeFY_4ZwgnlwoJRM_bAk9s=w203-h151-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SroPWMDrID0omDjxdN0KShJMFqBQ8tkSSiqCHXxB8sAy8QrO5wV3sh-khx31Mgy9JGeIRH_MDFKPGRDILaM4Cp8Do-VSnOjR7-MNeTcTX8zn-1SGYtGSHnthavThP469OwFZsGo5nxDow=w203-h271-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-r8Rqxsgc9CIxjuimgkLmRKpGvS74acPdM-zp-Hx6ZpW8AA_Yn7CL5y4i7C188d3ZEGTD0BmCFfTu0tv7OBwbsDTI5_lqE51HVEMOQZLx-5x0zelUiWu4_eluRr6cXmkVSbp1kNczgC0R=w203-h151-k-no'
    ]
  },
  // CHECK: Maps listing 'CoFoundry Spaces Private Limited' rated 5.0 vs card 4.5
  {
    id: 35,
    name: 'Cofoundry Spaces',
    badge: 'Special Offer',
    rating: 4.5,
    area: 'Anna Nagar',
    location: 'Flat No. 2, Plot No. 1051, Arun Builders, I Block, 35th St, 18th Main Rd, Anna Nagar, Chennai, Tamil Nadu 600040',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14745498690602041424',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qc9qec9zzFvg8Pon5QpVFFGiZT-4mczxrtF2KuFvhpsGgLu10jkCmD0fiA7gnRK4XVNVKvTufwBNZ82-IZbXJwdXTHxSCpUf_4xrD3vC5dmpKkLIuv16MzBRwIPjhPQzwmfOpWPc2Qzw4=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QDuUfIZqyC6jMwp2IUs3JlVcHCtO3G-ySPM1zvsnvPb96N_MkxhqFKFVmUWqUSGYFRbOliubhaHoWfvyDedHJBAmnSVIW4ROj1vvdCAydekjAuZGAr_lRS8SMrHyIdtqZuT1Tpfg7qJSWV=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q50xHOPOkR6au547u8PUHgmO6_32ZOQJirhhJmjdYHmVo9ssvUaTX1CZ1hWQUycPxX6enC2JiVF_WUDoU-wLs0kDvcGDAR26_woUCW3wz22KkYndC1hmPnt2BfT9BslQbVsi6JGnbIDxk=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QmOgGwBlp-7zQ3J6qPSBPbJo0nlL74ue2DxMOLb47yI2BGjfTWURqOUZ7qSwRRXpMxXF8RbzyL0AMX3nV5pjsBp1BmZ3sXeOa6dgRkqUlNrraBW1F6i8PH8EOLukvpvARg-X5vPHQ_oXvT=w203-h270-k-no'
    ]
  },
  // NOT_VERIFIED: no Awfis listing at TVH Belicia Towers on Maps (only the building itself)
  {
    id: 36,
    name: 'Awfis TVH Beliciaa Towers',
    badge: 'Premium',
    rating: 4.4,
    area: 'MRC Nagar',
    location: 'MRC Nagar, Chennai',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/97eb6564a389cd58c29da8882e5cfee5a1021e84.webp',
      'https://img.cofynd.com/images/latest_images_2024/a13bd81c15901817fc6809dba284d08c7707a816.webp',
      'https://img.cofynd.com/images/latest_images_2024/13649704bd3a3e7749fce300650f646d55cd0e79.webp',
      'https://img.cofynd.com/images/latest_images_2024/7132ac6e7cb9f24e270351321f62f2efedf69013.webp',
      'https://img.cofynd.com/images/latest_images_2024/9d36b604750d42a38aea79005daca4ea83a189d8.webp'
    ]
  },
  {
    id: 37,
    name: 'WBB Office',
    badge: 'Popular',
    rating: 4.9,
    area: 'Anna Salai',
    location: 'Room No. 1, No. 19, near Little Mount Metro Station, 35 Anna Salai, Nandanam, Chennai, Tamil Nadu 600015',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12718018769941246273',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5XM7vu0c4FlhgX7TG-n5qOqqOyqDun3-v0QtVKPaAsYJDFKR77HZfwZQJkeAN_ZZx7z7T3v6P8MpoXDm-4GgfAJhNYOnztbH2vlxqZIVrZnoilsn6WorLgbYEDG-xav6U8SyCJWE-c4De=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sh5SGU87nS3iYZp5yrnZE44XQVGehjPm_s1sESR0pJhDHT4OjIqpIy2eEZepqADVcX_mn9ktIy5QIoU4mXsDHcMTZKwvDsNiicWyyxOpXQS96uPTA67jr289q7t_p8PRARTVkTwKkVoD8j=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T6POm9jL14JK78lS5VHQCff0nOcyLwstVDE9n8ikZO8crfT4djwNTWg533JlHazUKpoTp1m9qrInwOiivJrbaubAq2cPSA90FKBkOy-f4cwUbSZqdEJfSMf-3Lg4eLogvzzw6A=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RzWGeUaCYtYph1drEGjPOiACTNH-_18FCZFBXkXy4LmoCj45o8Vve3dX0dTFpYyDfc9YBysPuxXK86R1Jt40mCv-ZuUNYX-qBc6GDqVe9Lypb5MRVSJslkptzHl8gW3qHeTUVMHDh19_zk=w203-h152-k-no'
    ]
  },
  // CHECK: Maps lists it as a business school, not a coworking space; listing has no photo gallery (Street View only), so images is empty
  {
    id: 38,
    name: 'Institute of Venture Building',
    badge: null,
    rating: null,
    area: 'Royapettah',
    location: '7th Floor, EA Chambers Tower 2, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014',
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17985257852553520496',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0a0aa16ef5f84bf45b6d8557f38d5b9a42c3096a.webp',
      'https://img.cofynd.com/images/latest_images_2024/0a49b0a562f97a834f7a1b6027bc30a163d532e1.webp',
      'https://img.cofynd.com/images/latest_images_2024/1e45fb07aae74d006df367425da31d98a0482cf8.webp',
      'https://img.cofynd.com/images/latest_images_2024/38de6017c4861168637a5abce306dfcabba63622.webp',
      'https://img.cofynd.com/images/latest_images_2024/1215464ed656e86b6f7d59290ab12c0654046f42.webp',
      'https://img.cofynd.com/images/latest_images_2024/2075777fadefe6ac9be8e4cd4e5acaa1135f069d.webp',
      'https://img.cofynd.com/images/latest_images_2024/0a72e5523d7d40d8865044784bc21cb53223a9c1.webp'
    ]
  },
  // listing has no photo gallery on Maps (Street View only), so images is empty
  {
    id: 39,
    name: 'Covework',
    badge: null,
    rating: null,
    area: 'Perungudi',
    location: '267, 1st Floor, Nehru Nagar 2nd Main Rd, OMR, near Kandanchavadi, Perungudi, Chennai, Tamil Nadu 600041',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11693922074968415293',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/38a32d75a6e0db5e065136e78e5d9726daa0da0b.webp',
      'https://img.cofynd.com/images/latest_images_2024/eb421e92f8bbb980bfb8b33a503cd684d8ed236f.webp',
      'https://img.cofynd.com/images/latest_images_2024/b54fe09b6e0df8236b880a50967287e6a9b73627.webp',
      'https://img.cofynd.com/images/latest_images_2024/489fb31ca81a5bb6e421631f5dcce2dbc34bd82c.webp',
      'https://img.cofynd.com/images/latest_images_2024/af4e8cfeaf212b4b336c8e21d6bf2f280a4497b7.webp',
      'https://img.cofynd.com/images/latest_images_2024/bbc625d78514138bf354d17075c540ddffdcf114.webp'
    ]
  },
  // Prince Info City branch
  {
    id: 40,
    name: 'Khalf Coworks',
    badge: null,
    rating: null,
    area: 'Perungudi',
    location: '9th Floor, Prince Info City I, Rajiv Gandhi Salai (OMR), Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12619774279816096019',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0cJ2uaoTt5n2IOS8gdfxs3Lodg7hfwGErERsJrC3BsrD_axIEzXv3S2AUtUQwSw6d1zUlM3xGDhWEOTwGhGXn9Xs3-yzBjMdsQR6haiKn-1G1e7EwvyBIXoCGacrxbGryF6GybITIpPU3=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q98uZyHpxQ0_6BLlzXrKSP0F_LHknq7tgMvQET6h17c-bvRFm9z2igO_X0NP85qx8BIfYYcfcDu_GyvY3gwI6Xjy02qvQ8NEl2KJ21SDf-l5I552MxA4pqRkF-1MIbFiv28a2X=w203-h150-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMCJ6eqK9r4fDXxYBWaFhysiQbfgzRxGZyGWDnDQQyWV7AoMPcyxDTP1BFHuDN1N8CaQr8uW67Zqf2t7agJTYKFmJ-nZmsNiGrRECQzxiQuBP5yzPS-mTS3dHvgdLihKlgLfaU-rkSdcHI=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGESijJ4hzymG1DYP2WzddpQ7otGwHOwcVVEd_y7E3JPle3HLGgDRDYck9CeAeYeHQZCFKGnwkmzRu6Dm5Ih9b95j1H1oeVHbbyX5f_V86r_NZsHDhPt2wZ-uIgGd7NIMmlZw_hPYzz9w=w203-h114-k-no'
    ]
  },
  // Guindy branch
  {
    id: 41,
    name: 'Khalf Coworks',
    badge: null,
    rating: null,
    area: 'Guindy',
    location: '2nd Floor, RR Towers, 3 Water Works Rd, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹11,000',
    period: '/ month',
    priceFormatted: '₹11,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10110778258318021904',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9_-8-8cj87QSQemjXXp_dMRyWOjl4DkqawqwjEMqsteIOg6ucUSyy2SZTyUO4qxX0sRjlcBo17Bw7855RrwVuUCGaZMq-q4f6G5vnkWlMscohW2bjUyyaNjBu6cFfiEzedNkC=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QypwGgtqxM9o2EC8Oh7MnMgGz-RTQ_n8xxH6y-uRxF1ATOiS7hsP4gUPN-K0zkoPwMsbwuBMWpWqC21BZ4haCEiFXLjkExj_fxShEjV0JP_vsIs9EQqqRlbaxJV4S1yOOIUAf61w=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ReJaD0MPgyeVbfgCnGVsk8X7HyXUE-Z-bh0hX6VRIw8VEtFrpT_O9-CvZp01_lhnG9pcUKyGMV94G2gjRnOLnpbJLP6OpJYDX5NIqHM3vYUlIidjwAJgpjPX4DrkOEYv2wAMai4w=w203-h253-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RVzHn_X6DwFIGZY_JpyIf7CRqD1ajmAsjHH78t5WGR5Tz1IvDo8_MvM-Fq0TnZ7vnMfQFrEGC5-FtCPaO5TLJqGfZl_m2YS5G_QAZxaTFeFf52p3xhdMcyZA5Rcl0lt2x5t3bQ=w203-h135-k-no'
    ]
  },
  // Anna Nagar branch
  {
    id: 42,
    name: 'Khalf Coworks',
    badge: null,
    rating: null,
    area: 'Anna Nagar',
    location: 'AB 103 & 105, 2nd Floor, 4th Ave, AB Block, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=157651676984286094',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXFYZyOdg9rMT_vTB3QVWkLTu9BdAs6HkkwqnDkJ6aPjV7oU9GOVsS75LniBTXrz7hnr4o0Yyo12UPTRvg8HtByVThFzo_LJHV_3AKiFq-_qwlpyR5KO2BpW4keer7nbo8lUMKtQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q4nycdpNctu0nfjk7KNznJ0_OgJvpJSXL-KifACcY6iqxm3wpryhM7Yzt3OUHNzyMm6SCuPLJRvZmqBm0BDb4KMCMGhTaPvhsm455HvfeJ_aI_999FdiMXjLVLgZqC8st_Te8=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TI0lRzRKGkyIVYQ39knYGqmdP_L02FaasNYUPGzS4fvu_kNL7foEiS9loL6cZjkTQJyIeV1lDspuhPd14rb92bRWXxbZG8Fp_rZG2PVnsSjIDUgw-VtrKIXpF_jBcFC27Z-_-_=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9STnUJ6n7h8HBhK1655xfpu_ORYQ_ox8kD44OXhol-0fHBuHyglu0k66TeGv7qLv9Md1_wSQ7fXrKNn4kF78bb1O1jnPxAnqCXLE0kla9E0WTg4-8KnKf-ZU_vj7GHzFYifJHjP=w203-h203-k-no'
    ]
  },
  // CHECK: Maps listing 'VSion Tech Park Pvt Ltd' rated 4.0 vs card 4.6
  {
    id: 43,
    name: 'Vsion Co-work',
    badge: 'Special Offer',
    rating: 4.6,
    area: 'Anna Salai',
    location: '8th Floor, 672/476 Anna Salai, Nandanam, Chennai, Tamil Nadu 600035',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2004078627599769404',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RY0HFxbijEksR36nAx-a6ahppPBY9BsIgz2g_8RXXaOc_REeZgmBJrtAPcsrg77mJ2JdILCkg3D8XtIiOQhJIOZuMzH8P_YFwm-tKw6x0Z-NXErGX1cKLoj9zt1KUuttxtNOOO=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQDW1hzOYA0eJhS4FFYdaw99r8TWENvjweUJRmca5CtJIbBWvkfBzM059atd-5nEj5lEG3FsJeQcNQGoU4Y2RmlFWObr4G0aEJk1hOnPbGqLIOhC6-plQxi6PyzPSyQQ3rLv5s=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S6tP71JeUxWvExm5ZFNO9w1MItPQjOq8mWwEIfe3yj7JW6PezeA6mFwmrY63gYY_sj2vIt5vC4fLlU6r3AVBmFdr_mLC4m36WhLr6-YCYCnCL85IILqJT5m52vUX-bgsi7yo5P=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TJPalgPv_KJIXruA5ekuztsfoHtLY9zXX1vrjVbfy4FAR8yhkVr-pIPEQmXlAu8tRO_FTrGX8gzz8wiRI4NDfmKI0diIsFzPT4aBl82Jeqm6WfL1WZ9f-yhGnHGqGO7e8-s9L9=w203-h152-k-no'
    ]
  },
  // CHECK: Khalf's only Perungudi listing is Prince Info City — same Maps listing and photos as id 40 (possible duplicate card); Maps rating 5.0 vs card 4.4
  {
    id: 44,
    name: 'Khalf CoWorks',
    badge: 'Premium',
    rating: 4.4,
    area: 'Perungudi',
    location: '9th Floor, Prince Info City I, Rajiv Gandhi Salai (OMR), Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹8,599',
    period: '/ month',
    priceFormatted: '₹8,599 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12619774279816096019',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0cJ2uaoTt5n2IOS8gdfxs3Lodg7hfwGErERsJrC3BsrD_axIEzXv3S2AUtUQwSw6d1zUlM3xGDhWEOTwGhGXn9Xs3-yzBjMdsQR6haiKn-1G1e7EwvyBIXoCGacrxbGryF6GybITIpPU3=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q98uZyHpxQ0_6BLlzXrKSP0F_LHknq7tgMvQET6h17c-bvRFm9z2igO_X0NP85qx8BIfYYcfcDu_GyvY3gwI6Xjy02qvQ8NEl2KJ21SDf-l5I552MxA4pqRkF-1MIbFiv28a2X=w203-h150-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMCJ6eqK9r4fDXxYBWaFhysiQbfgzRxGZyGWDnDQQyWV7AoMPcyxDTP1BFHuDN1N8CaQr8uW67Zqf2t7agJTYKFmJ-nZmsNiGrRECQzxiQuBP5yzPS-mTS3dHvgdLihKlgLfaU-rkSdcHI=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGESijJ4hzymG1DYP2WzddpQ7otGwHOwcVVEd_y7E3JPle3HLGgDRDYck9CeAeYeHQZCFKGnwkmzRu6Dm5Ih9b95j1H1oeVHbbyX5f_V86r_NZsHDhPt2wZ-uIgGd7NIMmlZw_hPYzz9w=w203-h114-k-no'
    ]
  },
  {
    id: 45,
    name: 'Smartworks Arihant Verge',
    badge: 'Popular',
    rating: 4.2,
    area: 'Perungudi',
    location: 'Arihant Verge, Rajiv Gandhi Salai (OMR), Kandhanchavadi, Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1615590578051545362',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S7BaYtbYS2LXXojvVv-FIjyZ1_63sAT0pOeenAKdrBO1mz_YOw4QdNvbREhM5dVHV_Rqu-aPhDSorckC3AIgT9VBdlE55yNJCWaMQE-o951G3fiL_2BV1FBm8OwEVoeGH5q52dSQ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1Mwl1TmxAw-h6sPaHSc6V2SqHKoWa96C36RNoxJ1khi9U71bfw-Zlw-pqZHxZGD__K175sYIosVNTOuQSlSGyfNB8Muh5qBi5F9u619FlaDj-x3lcZD9ZV0Armmi-0UACuI1V=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rp1yrc1OCTq8gL6A-xu8GvUvfGaMTXpbdDLB4tYEkfiS_VYl4ykgoIcB7_VyDKAUqw04OOX-bRrxlYLDw4o_o5TyKTN_5qco4k67ghP_6gIAAqrjWSpAsUOU8-67gYDCmaU0L5=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TzFGzLk77o2MiPyK4B74_rLyY5NCNozg3ySlP06dhebRDEbD7FBqlW9Ei6qhas6O0ERwQ7wl1WcRoevhc4dqphvYXTWDlSNpI8MwR8zthKYMTIoezAn9LPDKLGTMxPIZYQ2yDX=w203-h133-k-no'
    ]
  },
  // CHECK: Maps rating 4.6 vs card 4.5
  {
    id: 46,
    name: 'Cowrks Sterling Technopolis',
    badge: 'Popular',
    rating: 4.5,
    area: 'Perungudi',
    location: 'Sterling Technopolis, 4/293 Rajiv Gandhi Salai (OMR), Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹12,499',
    period: '/ month',
    priceFormatted: '₹12,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13806649900787453288',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TmvSu5R-lXGBZlbs3xS4auO2OI_d_9H7lErlcO56aXbIQBj7sRz9tgHA8z3woOI2Axlc6PXFmChkXIRzLmCVKkOOJHMsqAn4zgCzDsYNIg2gIig6enCISJVeU6DzUoXudf4kig=w203-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QWzG1shgHawiKJOnkQxDJtdyjEruuFquOnFmHK7k1FXQ-sSOD_rK8zLpP90q1o-oFTbjHyhDyYDwy4hWk0iqfXl5syTyy85PVD-fPp-5ZuW5Sfu253-DxX5OcpL25Eks85Mv9C=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SnEips81B6NnKiXV3FiwTTcRYoB8kJNb4Xn34EQBihJsSIuvYEdhRg6ilX9_KTs5ypc8Nh8Tx8XZ6hW8Wk9BEnKs3CHSpYHs3F268Amx35gC_TPGDEipOsilEngG4RwqL3BCxu=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RzPmTT8k0CYkm8eJvp7lmuxiZGM6J1Kk_P3Rn7uHm67bpp8OGvy2s54NywDYaYEElqT9vgIEuCKgxPcJUg_kZlbgt-TRUNGiJHhBeCHT1hD6sVLA7KaDcErRB-I659xDt3DwBVW_ERvPzD=w203-h270-k-no'
    ]
  },
  // name is cut off on your card ('...Palladium Bay...'); completed from the Maps listing
  {
    id: 47,
    name: 'The Executive Center Prestige Palladium Bayan',
    badge: 'Premium',
    rating: 4.6,
    area: 'Greams Road',
    location: 'Level 5, Main Block, Prestige Palladium Bayan, 129-140 Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7105170973427899591',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sw7UrGyiGXNw0bZCqb3OrrNd0aHzMFQXTR1eBW2C2Pew2MXp8KyaNYLzzvLo6EV55DiDIWBOo6WVbs-_TPz9miuIvvr7VKUBRR5jqyVqwx10eMkYTlg-9m8vHy5ZmS8MWJGhCIAg=w203-h128-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qtpq9BI4VMe9gl3BOoB1eAYCKGGNul-RDuckTFQPpH7k-ycvGshSHDWoG5z0lyT4KEPrOsccJTd9he9LO_Tt9Wsqws47ShhfBtkaiO9hMO2elQ6N0O7TiK7ch0bUkN-3zooXPAnQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbVAGClSwSeMsUGlwrGDTQd03GQZcx_NsEep7HZkJV4_-gaimhnmX6BZGe__JA23DM9RpPXOjC8VkuLvPU4jLPxrxJs2oTLQRjjyOwK4S2m2X_AymyO0g1VnHBiJq_5M98U4I=w203-h132-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q7lA2xBF3pw8GGTmeqn8aUlKyiW0EVi5MKLtxMOjmUbfhdI33Kd8HMWKtybdtapb3yvmv8rED_CV4A7nSq9lGbz1nvCCT9NUhtH7xTgOLxxatwl5Sl276xVZRxqCARdFjzTBR9=w203-h304-k-no'
    ]
  },
  // CHECK: Maps listing 'IndiQube Rivera' rated 4.0 vs card 4.1
  {
    id: 48,
    name: 'Indiqube Riveria',
    badge: 'Popular',
    rating: 4.1,
    area: 'Chetpet',
    location: 'IndiQube Rivera, VR Ramanathan Rd, Mukta Gardens, Chetpet, Chennai, Tamil Nadu 600031',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4865062737535792829',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S6VVTSgS4pEGw5OXNbFZkAzSM2e_5mkEtfLq5qEph2PTMTN8CXefJkNAKK6eRLsZVwKzLwlpFcygHti6M1ptccbfws55MQ47mfkdAGf1BK5EqZJmTwfLMLSWP4BMAD6HWVfR9ukcwPpESK=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SmRj_5tzSm1hYCmhGiN_lQ6wKCa5mrdNOFxjz6jZT3OR1ldjDjlrei7wOE3BkPSHmG5HXRnod0HsCmHctnsTYl8jZ89ipOLh_FSvo6skxwYSWeLlUEE-_bxb4HSdA1H340nilPuGeeaCHe=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RHtKJfTEqIdyu0VsHnCXBUxVmff-3LsQFncvgMRvbHsKJobsoV-UcQBadpftv07y-k-_6mda9-lxryIXNuu0FouLJ7MCVZpI61kAzy64ymbNFpwCQAAU_9JiYPV_SWNHg9FfqXvanHsat3=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQ7fBt7nE1d2rGgitwtwOq00zJ10qsUZ-5rTTqTDO0rWTZbcqCmkNaieqmI1HCgMe2I7_5KOHNJfpxY3xBtcSCIDwB4UxOvlLyOsmj94JDjuxavoPt-yVEIfpCuAazvMFB9KxaMV5SI2c=w203-h135-k-no'
    ]
  },
  // CHECK: Maps rating 4.7 vs card 4.8
  {
    id: 49,
    name: 'Woco Spaces',
    badge: 'Popular',
    rating: 4.8,
    area: 'Nungambakkam',
    location: '4th Floor, Status Quo Building, 11/38 Sterling Rd, Nungambakkam, Chennai, Tamil Nadu 600034',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2201819185661613100',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SkaDpjj34NdwMa-MJ763E3JwSEFWUzUEqO6Bb_ZEhFiXGt3tKaaJ5T_XPCrgocUZzQvYzEYnq54roTkPeXJ0JsoGsGbvvH0SOECBloNgoTRC_IfOjg5PyaXEOKd7eGbQb3ClzqwDVIPJg4=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qajv4bLK7eAVPbRaz_bfSyDSJrITDqgJLMBQrS3wHE4TCtUV1ccVw88Dm9WxYTLUhr70atXNlG0ZLmbkBw4pym7gzKxvWt9rBKlByNvUQDIHmPrIEqE0hbRXUbEvoylVBLfcpz4PiW_7HQ=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOJ2VTsrVD_X3JaIDHUmMCRd2oL5XuFAextGqLsxuvZt8ZKS13UgcpUBPhGsYipqPkR6mMhVKceWCQpTYrvLQ2-zQipFfEFtHzcPL-HfSqmqrXPzUeC8RhJ1scvdqztfkO3Atc=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qgw_9klyvOKGRGSiZze-qu3tWC5daX3KnD-O9qTbukOZEurNTlvHgyx2wtxC9cZziikZY_3N2-FJlnOo-3oxwJNkl1F3Qo_VC7UUk5KPi81YMcWFx0P1SLUeJhGebsv3Op8XGdy9cf_vv9=w203-h152-k-no'
    ]
  },
  {
    id: 50,
    name: 'iSprout Business Centre',
    badge: 'Popular',
    rating: 4.9,
    area: 'Guindy',
    location: 'Kochar Jade, Block No. 5, Plot SP-22, Ekkatuthangal, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2645721929076551943',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RiTjW-KHyRAdBvfpm0lusuU9YHQEHVZy96cAiFpGwGSd9bmftfuIS94xajwQPt3wqEWlUX-sOmerhjWk7JngHnAZ9BIx955UHfOnPJ_JHpK21UTbwniBzE_UVdJuofkDOqFsFwYg=w203-h145-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RXQYxtH_b_dMVIbt5vE6Yms7ZXXDLCX1gOTpfNzugzD6B1XKilO6fH2T6QA1TjYrcbwmCkNe3jZ7maoQ7SoVAByH4LxNMh50MUIlaYQ559CK7tVENgINUdGzee4SVQbYDHLziS=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RnVZQYGcUgBqWn9cxlqrrhb04XLYum9Q7L6HmnPRGcAufOMWALTyRmRwgHdBznhhhmMCYIlYrFkMqlX6P1dwqB6Sl88lHUKcJGIgXMoUGGeRqS24l5C_zIP7pYyHoKJJDvgD5iSQ=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SL7D2V4klm4WkrngLFCyVvae1EKsnDQe5X8WLGcirl-K3ykoR9umw7ZvTm-STEpGpja9n9T2fGifCW3GFKPe-ho1qdCF4BK-ocfMWJXgUow9MI09bATAbo7JiGSo435_xOwrsJZw=w203-h145-k-no'
    ]
  },
  // CHECK: matched to 'Works 9to9' Nelson Towers via CoFynd's map pin (Maps calls the area Aminjikarai); Maps rating 4.3 vs card 4.2. Images are from CoFynd
  {
    id: 51,
    name: 'Works 9to9',
    badge: 'Premium',
    rating: 4.2,
    area: 'Nungambakkam',
    location: '4th Floor, Wing I, Nelson Towers, 51/117 Nelson Manickam Rd, Aminjikarai, Chennai, Tamil Nadu 600030',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10688251906036463493',
    images: [
      'https://img.cofynd.com/images/original/13f974f6170ae62210a014b9407ac1012e926baa.jpg',
      'https://img.cofynd.com/images/original/d97a62ab9b9092782818633c1ae71e36fa56b6a0.jpg',
      'https://img.cofynd.com/images/original/a6cdb9fa227175ac773d4a93282fbfdbaf906f53.jpg',
      'https://img.cofynd.com/images/original/016905b035321f6f80fdcb53b80dc6400d6c60ea.jpg',
      'https://img.cofynd.com/images/original/6e70904b48c72a41339cb64729aed7a921a7c2d5.jpg',
      'https://img.cofynd.com/images/original/c8d7a3e6f4d13b923f5a09e5db207dd4a1e8b867.jpg',
      'https://img.cofynd.com/images/original/01d6901203e28f49d205ea4bd370a09c87a704f3.jpg',
      'https://img.cofynd.com/images/original/c1fef1c26f81428bbb4198985dcde0ee254c4d2b.jpg',
      'https://img.cofynd.com/images/original/1892d07bf1ef40e43ea814f7dedd2a949e68394c.jpg',
      'https://img.cofynd.com/images/original/c3c757c8d6d8ebf084178967d088bdce859948dc.jpg'
    ]
  },
  // Maps listing: 'IndiQube Vantage'
  {
    id: 52,
    name: 'IndiQube Brigade Vantage',
    badge: 'Popular',
    rating: 4.3,
    area: 'Perungudi',
    location: '1, OMR Service Rd, Santhosh Nagar, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8949702645583263746',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qt5_fwrDoWaEPIUOzDa8_XUqKzyFIX5V0gJRsqJ6N6R-O6cVywvvXqghD1k55siRKWTT-5rUfwdzRsujzvpKO3-M5fI6Jdq_aamfC8GQFHHiCqmdY3KLHXI4dwqMpVPV6nmCe6YA=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhJEQf9mWgExFIl0fsvzsnEBf1xbniZ2N12sCgARLnHuzcDKeCDHcUorUNZVnfYuhk8MgFgu0a1RgWVELkws4SDD495vKLDNcqIGqc6kvLFM4fg5lJd4HEd07TKsnRf9I7uWuF=w216-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QmEwjCwbxrhEQmQ8TV7QZgfGmxDWTZXMHBD280QE0R08x7JYRwAsMzANtqndz0ZJE7OKpkBSf7WdZym10Pkx7fjKdP39ao8oga-A04O7z98ODV3GvpeakEkbrxjm5sXjqhrVqEJQ=w203-h450-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9kP2K7Em82SczN6E0MF0pJnbwGrluwRZh1cVZqEYdOWJLGVZQ1imu5E9nHM19fJaObmkXVlJXgzXa0UTBLNxIp6IPTbQsIFa2NAguCznmTUEBa-40iLn7aZczpq9QmrdZ_kZftw=w203-h450-k-no'
    ]
  },
  {
    id: 53,
    name: 'Smartworks Olympia National Tower',
    badge: 'Popular',
    rating: 4.6,
    area: 'Guindy',
    location: 'Block 3, Olympia National Tower, A3 & A4 North Phase, Guindy Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17001289406457548675',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q71vC-G3WiNj7ViZwlSz9MllCZ0agQ35uxM11BXK3LkgMzpzkt7RmDNfqTVOIu1i4a8xwFdghrUsPAtDrmyC1A-YQHekieBZAAfY5IvpTR9iV98G0QUKTYliiAyeBrXq1i6U_pAQ=w203-h304-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RTqgFKPcMXrO2KAfXf6E8eiWmVUXZipzLSLEWaLFoX1GDx1EEKsVLqCmMm0LdOuZQRtO9_rOFdBIjv3OKIXM1zq22qARYUOOzDyP0M73HycQaECOsYYqe3rzxhC3sG7KOyM2X3=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q3p7RjUPBgK74fF7ETODYUMzBIuPGH3_XfDz1zzgCIe2pl4gK7ST-uVGzZTjSTMscr1bAPddKkPBh_ThL7ZJLPlIeIRdRRe6zXe3oI5kJ7rmcSKWn5CwJK8xSTWtCzNnr-Td2Q4qoV3qc=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMImUOJuNYSbe5uxBLlM8OSjjuPVihqhh0K8lCcqJONd0o33garW9oS_rEzAgw7u8gOhcNGblyJxBiR2cogzzJBojp2dg9vUBBfsgPAAngEU0iMCOXTCzYAJc3d2TxJrpWwyCI=w203-h135-k-no'
    ]
  },
  // CHECK: Maps rating 4.3 vs card 4.4
  {
    id: 54,
    name: 'The Hive VR',
    badge: 'Popular',
    rating: 4.4,
    area: 'Anna Nagar',
    location: 'L3, VR Chennai, Anna Nagar West, Chennai, Tamil Nadu 600040',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6704026323108471534',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TpYYUbuG329d7vbfjDV5BZAMjE4dTVHW-57EjYflQeuVreTaZJeCtEQ9QEIFi6b7JHgiZHKjf-MtFAyydQQ2yX0S6I4EeKS7OImxarPFkX-of77bWpnJhZD8nWViyglfuwF3ZLVg=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S62H-kCR9ymx3IgFOSo2ox1bjTxUnOEyiHODu2_Od69PthnZgRvdCCgmmjsdUXLdBegsQG_d2CF-LIhDAYPfDqbMhaPq9GpVWKv_y9mzY0aTAbKmlEYPNrlTW80aMZdE7VSzVjCA=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RXkGSeC7z_YM0AofX_dKsDtk9-vX6MI6hhLFVYZBNX5xJqQP9ixwHX7_HnzXTC0CdCfyju8tuqIJUSTfYqcUDMjED7sw29gQjUqZSiAhTo499_JxoKfX_AQPClcewoaZ42uxZBFQ=w203-h289-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TewEMwu_P6G7sGQdvOjXsSxUKEWWw6DmtakZjNPluBSmkzairhH2_PPGWhQ5J-h81uHibErUdYdTXI1VI14jerdGWkMFv2gym-v9OTKubyS5uB9F9sEHvxjFWyxlpCQ5b_wNVTmA=w203-h114-k-no'
    ]
  },
  {
    id: 55,
    name: 'The Executive Zone',
    badge: 'Premium',
    rating: 4.6,
    area: 'Anna Salai',
    location: 'Shakti Tower 1, 766 Anna Salai, Thousand Lights, Chennai, Tamil Nadu 600002',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15679267964629400372',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRlzVbWvXIALSIlHRyhuDv1rxFv0uCiTuHJ6zk67Tu_hjW65mc4P0idAJXvWJzP-VuVqEjBhazm83oZjHgR9c130O1qSlDL0OScjjdjmivwdTKOp-hMeB14GPQBbt6WYNQXe8=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8Ot0dTzTiBi9b4W52Wds0uOZ-I3nJ9FdEgiEvZG5cLYSNBbD4rkIedo_Dj2P_k1MfRdhkkEFRUB3-sCudmAZryDVZH-o56dXVQEvGkxYnqXQ1uke1hIzSE4buhCE7AdPNeftzx7vhvVv7=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RcsV-3zOR8G7jUrdKOk4znqWwxNDr3h3r3m263_ddm_OmBk927jMp24eNXGIi56hlDH0KKgOpZ5Y3XRzjixNYaPneMTTz7KW7KVmSqx0ppEnr9clGCOvyxb84qtug7DrwZNrJ7=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGq375ghiDw8OIzvJmjt8Zqd_JgNvQ0ky_LUTZDwUOtJn-xtObtw9eSNPgBunEmXEgkgRAz0yDtuHZ3VZmBYPf9z8eUrFYwjSAHWy_foeA_iCRD9BLPSOT1MjW6H5AIHhsIl4e8qPTlHn8=w203-h305-k-no'
    ]
  },
  // Maps address is Manapakkam (next to Porur)
  {
    id: 56,
    name: 'Awfis Centre Point',
    badge: 'Premium',
    rating: 4.7,
    area: 'Porur',
    location: '8th Floor, Centre Point, 2/4 Mount Poonamallee High Rd, Manapakkam, Chennai, Tamil Nadu 600089',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9161454939392733252',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R6gi5Z6Wyy7JOaEMEORqi8E8xUTIGyTlhD8cC7it65fexahbJYoRhDqv4uDBvfTyfmL4v7PqjwM77mp1ckf6csga2YtJb6OGY7B5uzCWyUBgZlkkVNzNIHYUm7HQf2jYTemePq3_hNbLxI=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9BELh5UEhcQbPgcYYoE4xukQGP_e7bKgMDbfA2v5qH1RonafHZ9sc6Gp4d2eL6Cbha5pXO94bflge7ibaIQy68Wfq17N-3JckMtZnRnms281soPCqmJkmrbkG3XTf2GR9QB3xxVvbh6T6=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SeyXdz6crXSO5mkt_5cuOpmqExPAXnsuiaUNPTNfM0MnwyjnJTahVGQeluJvEdQC8mlZuE2523RigTviicbnNvTKE9BTs7nUkvALHpdEriMM7arYKr-7fRMEv5kMmYCTdZp2_M=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TuF5VLKhsE7GGdMDooU3KWD5NgM9XSON_AVulXGY9T50EczN2oXk6mD4UQQlM3BtHkFI4BPgEegz4A2hcxEO1vbeU5cbib6JRWjDLtNcweS5LA-H_MQAVEkfdDx3mf0EorlN43Jv21F1A=w203-h270-k-no'
    ]
  },
  {
    id: 57,
    name: 'Crizone Business Centre',
    badge: 'Popular',
    rating: 4.7,
    area: 'Ambattur',
    location: '64/13 Mounasamy Madam St, Venkatapuram, Ambattur OT, Chennai, Tamil Nadu 600053',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15513241477487545037',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9qjivCIE2QHtQE6Q6TjnBWGLKA_FHzZZ8kJqzmFF1BtAGUP8E0ouha0pF-4SOmNNvFV1kqIvbwRnMRDxF5wWzwLoTIyn5KIHNF8uzExPKKaNoPkZj_gyNE64sE5ZRMF8lceyYSGBqdH5O=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QqPPPk-MEB207Iwl-86IFVwjLvjd0rhT8psUQ0QfDCDusm_HVKsuXnXh0Py1-drljumcTGECgKRY-s58oLeonjnTpVARVvB4W3031mXnKGm6kocBQ04R7ibj0yCBY64pQ4QkR0vu_prb3s=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T77ojhh0TKe3X6efe_uoUwhdszRdd-16gdfLHBMqOt4-JzzQSihJ2eaddy7tFNGba8WVZ6E4rbC1i2GMf_73BMhfSEge0oww11qJwPzWWFzueujPmL34qIOTHv8XPs70ZkDENszDUmVwM=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sev_AyYyzEame2Yu4wyMLTmMrzj59VQJYrnBIRxKu0JvqUoPf0EK-zxPEGfu-I5LATplf965WcSyRxTzVIemZsegAcUtlzCyUfRhcyPs7pzJ9hvb4xga3PX9h_juUT2cHM_KE8uNJ4kq4=w203-h152-k-no'
    ]
  },
  // CHECK: two COWRKS 3B listings on Maps; used 'COWRKS OMR, Millenia Tower 3B' (4.3) — the other is 'COWRKS OMR 3B' (4.7). Card shows 4.0
  {
    id: 58,
    name: 'COWRKS Millenia Tower 3B',
    badge: 'Popular',
    rating: 4.0,
    area: 'OMR',
    location: 'Campus 3B, Millenia Business Park Phase 2, MGR Main Rd, Kandhanchavadi, Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1468974489004264833',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TECKJXYeE9z77d6NX-Ggk2NmCVVC3h2kRgmCuSmn9F1OzWMIoUM6wG0YQX0VT-8srJKwBCDZBh8Dkr7jKruCAh9Mo-fJJ_ReY_StKDv529Fd3kgRACIMuz-O9ZsLCIDqpnUrtA=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPX9LQjhCLxN14Yq44N2-cCk0qdOMYML1_kYEo3C-0H61JDrfm1VxR6vpsxHVmnu7OkmwxHCTQvy_MYBHXd8wUniXVNJ4xPh6D7WdNdCPLoVbvRhcynWRYI1B1iC7xyXCozR6DYNmvZQY=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RGCCct8lt7jT-kVLlzcQAviX84kwjoT5WhdvJ5Q5TJfCywYTagZvZDDEGagDLbCGhjG--73vpbHBGC_AR9LYVjty5CZWBqRnTE82meUR-qoQKvSdHte3jXbqfPsUKILQi0Y7ZuTg=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRpuj0p4HgTCPVgLENmwcjtMG1BxRh0jMKQJVpHS7SI_yAMX518axP5d1AvHSFke3rNzJl3BNiewPBMSKq8n-Qh9Sll9cLYLp5YumJDpAX4yoK5WDt4K0e46MEA67n93SvVRv7aiyD2KYI=w203-h152-k-no'
    ]
  },
  {
    id: 59,
    name: 'Atrium Coworks',
    badge: 'Popular',
    rating: 4.9,
    area: 'Teynampet',
    location: '1st Floor, 581 Anna Salai, Teynampet, Chennai, Tamil Nadu 600006',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1665677568486422570',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QL4lzyQR4watmbt6Tlwn5buztkfwK6f5KM92-EKjbgxcwICNL03kZzJHcs13zl5PDSXKk-iboIL51CGPhb0y1W5nWqNlSZTuqqFZfAfN5l5zkVMYEYGk37EoKf-oONogZs4ITNyA=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RR4VmS_Nam-pd1DGExKqkJM-AehMYxa3x74766c68-KF34yBHByDjpuIaZuckDBm3SriPjjnzfzf-yx7t6x95UoR8PZYHACtC86vYRiDGWyrvxHDZBnmn_Mbb2B13zKB7ZyPhPSaH8ZpQ=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q8rHp6eoGQpf0fks0ZHFtYDKVKBasWj0wiBBZ7T-QIlK37Givzp0Mf1TbupKZV2qvMwYVL-VZACUx5pw6b-66vQb9vl5pkpIxMrFJi54ehjet7rgFx-LMqf-26mFWyQdTwMHiONyQyc1-U=w203-h169-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R6Wa0eAzSr9hx2cfSzWs8MEe9Rlt44C5Ngdv-GLhSdrIly32mY_V9H5qAMzk0Z4G35iDj9G-yDCwQh0S9m0ixc4y-YvI0F2qKvtnqQMaFyJw-VI6qeADQdLsLhlbG0bx-Z-IKtyQ=w203-h114-k-no'
    ]
  },
  // CHECK: Maps listing 'Trend Works - OMR' rated 4.1 vs card 5.0
  {
    id: 60,
    name: 'Trend Works',
    badge: 'Popular',
    rating: 5.0,
    area: 'Perungudi',
    location: '6th Floor, Arihant Technopolis, 4/293 Rajiv Gandhi Salai (OMR), Perungudi, Chennai, Tamil Nadu 600096',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3237644788559771319',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TUwLtoDba8qkvaI2CnC3Og8SrRM50wGuTbsvvny583GDwFu9a7abwPAxbEW6C2lE8itj8j737uG0THWTWIOQfhgHoXWxcafiLVQ-qcdOTelaAGYRSIg2jteIHDoEPK6bN450iNzQ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qy5ve71zRNxUvSu-nX9OQ_gbjCFxN_vU0Ng3uLA83Fyjqb3RXUTNDVQ4BokV0gOpFN7bq2yLQmtgxx-5BNF_A1JI2lqXExFiffpxxbjE9BUzv76_g0Tbjozv_ZhDLTaI8WgAph=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QramN2d72lD5Dkf4yRAJ4VcjtkabERv2ZnGlEaB55lFxGcy8Z6hB_jb0m9Rla_MAWxqQFEoWhOrhhhh1ggSBQVJfoqXFQi-bmixdjiWrterCMzgZGAc24dev00iV1IeE1p8-uTlg=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SNkhU1CUaxv7zw-qFO9CTxvmNGv9l-8J--tD_UpiPLYDlBSwCL4zd-Vc7DI8TZcPSezGsU0qut8DpN-sFFPwKJZLtk-2o8vOOqfr-FiGej6-YoFBRnkn-DMZeg2aifotS10mei=w203-h135-k-no'
    ]
  },
  {
    id: 61,
    name: 'Trend Works Bristol Tower',
    badge: 'Popular',
    rating: 5.0,
    area: 'Guindy',
    location: '4th Floor, Plot No. 10, South Phase, Thiru Vi Ka Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16793295857958806633',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSBDwyoSaFX6EXSm3JP--o7wz-kIw_9W1mPCWFBc-4gfDbAjZscoPtwbg4XSTIxaTKiOx3OmNPUW-tGF2FctWq8zSmexJ3xQ4N7IsdHkSetMqmUFb8oDYY2lWQJcxiIFygIbOTKg=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9St2vk7c33WiNOzyGKecK486S4LqVhw8J5SWXCJpIyIvphunaQjllbPCCXqmQXdn_VV3XVkERKDC1Q5ZaViomSUf1Ij4gE4HOuo0wUwQxf3xL237YDLpgiDvGJkqNGwJma65QI1=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPZv6rpc_ayDI9GYpCMThmKnLfxAq7Vb-pOs59idMmmwqxT_pT2grcPcFDKJRVkZPB21eJ_n_Y22Cu5QNZZbxyYXzZ2h5YSXEkO6y7jnBsASH5xz3i46OeMy_YMG-JVSekAeRB=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RkGwqde1LSIryQCt3TX5wqHQTEWSGZFlyLCPntIubnsKtwFHRD-8_tJbDm9mI4WxKLQkbDPZau0TPRDPI6VsCs-Dm3NUxX4fbiDSeMAReumnQnnQz9iRwH8pwB4LAXfGvutqpr=w203-h135-k-no'
    ]
  },
  // matched to 'Trend Works - Karuna Conclave' — CoFynd lists the same address (AD 45, Shanthi Colony). Maps rating 4.8 vs card 4.9. Images are from CoFynd
  {
    id: 62,
    name: 'Trend Works',
    badge: 'Popular',
    rating: 4.9,
    area: 'Anna Nagar',
    location: '3rd Floor, AD 45, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600040',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10152227497421612070',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0ff440539b8492068ef06c1ad0d27047365e47d8.webp',
      'https://img.cofynd.com/images/latest_images_2024/2aa4dcefe90c37a47fa2d88195c62442023ad17e.webp',
      'https://img.cofynd.com/images/latest_images_2024/788887a1a4856119fec94ae5d51760e68c37ca79.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa754590043430a51f30b4b85aaa8a5aa5aae288.webp',
      'https://img.cofynd.com/images/latest_images_2024/48461c5fc365ca67768eeaec0c08ea6ff15639ea.webp'
    ]
  },
  // NOT_VERIFIED: no Works 9to9 listing in Ambattur on Maps (only one in Aminjikarai — see id 51)
  {
    id: 63,
    name: 'Works 9to9',
    badge: 'Premium',
    rating: 4.3,
    area: 'Ambattur',
    location: 'Ambattur , Chennai',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/original/f3a36c946aa641e0cc77bafb2acf6ac9cb4aae27.jpg',
      'https://img.cofynd.com/images/original/a1c97e5017032e89903d0e0b3a07c2fc6b6a2b90.jpg',
      'https://img.cofynd.com/images/original/d395aef68cc464951d4bb466afb523d0940e357d.jpg',
      'https://img.cofynd.com/images/original/a850191ab29731ff53713680f03a143bfa47311d.jpg',
      'https://img.cofynd.com/images/original/fb41fab6c8a1ed0bab830185eb1ef7a86d067366.jpg',
      'https://img.cofynd.com/images/original/31ebc3e5d534c44a741c458f14b140240a41f748.jpg'
    ]
  }
];

export const allChennaiOfficeCards = chennaiSpaces;

// "Explore Top Coworking Locations" tiles on the detail page: the busiest areas, each with a photo from one of its spaces.
const areaCounts = chennaiSpaces.reduce((counts, card) => {
  if (card.area) counts[card.area] = (counts[card.area] || 0) + 1;
  return counts;
}, {});
export const topChennaiCoworkingLocations = Object.keys(areaCounts)
  .sort((a, b) => areaCounts[b] - areaCounts[a] || a.localeCompare(b))
  .map((area) => ({ area, image: (chennaiSpaces.find((card) => card.area === area && card.images && card.images.length > 0) || {}).images?.[0] || '' }))
  .filter((location) => location.image)
  .slice(0, 10)
  .map((location, index) => ({ id: index + 1, name: location.area, image: location.image, ctaText: 'Explore Spaces' }));

export const getChennaiOfficeCardById = (id) => findOfficeBySlug(allChennaiOfficeCards, id, 'chennai');
export const getChennaiOfficeSlug = (space) => officePath(allChennaiOfficeCards, space, 'chennai');

export const areas = chennaiAreas;
export const spaces = chennaiSpaces;
export default { areas: chennaiAreas, spaces: chennaiSpaces };
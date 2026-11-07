import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Agra coworking spaces — compiled 2026-11-02 from Google Maps
// googleMapsUrl = listing CID. images = photos from the listing's own Google Maps gallery.
// price / period / priceFormatted are null: Google Maps does not publish prices — fill these in from the operator.

export const agraSpaces = [
  // Maps listing: 'COLLAB WORKSPACES LLP' (category on Maps: Corporate office)
  {
    id: 1,
    name: 'Collab Workspaces',
    badge: null,
    rating: 4.9,
    area: 'Sanjay Place',
    location: '205, 2nd Floor, Corporate Park, opp. G.G. Nursing Home, Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
     price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=74811290234250333',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SF3pe7AzTU7gOctsmAJRB3Ubeek-Ct6ZVd6Eel7VFc6qA_oQgoJh8oJqEkGWhqgOngrvQ3akEVnUEbkKvuCUL1mHiRHhN-_AhcSbQSn2My-oiptiNpbJyn6VVQwZz5bgP-Amx17BMKQFTI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RdKnNMX8rtrwF0UvE8LRumfPU6xIGA9whMZBe9j34ognO2FiGwMVz2zIKirse2yBxPxUghAhUBSbh1xXSlusm1vBhwkMwRpDUbhKSm3hRc2gRiVJRWehNKUmfPmDy16FUZ4YgD8r-DZAGc=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RDfvkvTdk4GjQWgUy4oEOrl_-8eM0DxpX69eo_yG541dL1HfinZ57mKz4G7TM61V5hiZS9Xod13u5yIkizrFjQhFvBrR9T0bRzFnRwkOYmQrWznnDq0sEZg-2TWPpCxIgniU0yGq7d9KJf=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9l9UJVTJvSGkgDpLEk0vOdHUP613hym_JXyjmNmDjD2hcSxeP41ik5kJNN_suKHdB9qOOKgmzpRXcf45c3MEXF5790Vw5BUKLPH6E0gW0l2gcOrkPWT9M0elKAfKgNVk90xKAp3Po3LQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RB8GjqCtclNzySlW4xllUP78WzX-6Gp35V1hyKiio6Ftx_A9Y_DtThDp1oWk4Q9pId_apciROra2lBNCXD2yA1Tg0K7Gh6uA2_DfWynedPGUfm3DzGi8SUAIjxnQr3pcO2jvABfDhTCqg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rra34VkifkT577YWQ4wV176I4ADxnevwcTALZTuUAoBm_uUIdAdLtXyuHYBYgwSsLBTVwaIzT4RnWUCbJvl1GlZYwCSrqE_V-WQiCutJRteHKAgFODfKcYKkSt0eqwto_Go041OzUrwUzG=w1600-h1067-k-no'
    ]
  },
  {
    id: 2,
    name: 'Deskspot',
    badge: null,
    rating: 4.9,
    area: 'Sikandra',
    location: 'Unit No 307, 3rd Floor, Padam Corporate Park, Sector 13, Kar Kunj Chauraha, Avas Vikas Colony, Sikandra, Agra, Uttar Pradesh 282007',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8758242473220421576',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RIYnRBay6XVvW9bQF5NHam4ugi6oAv_9jqFLMnwW_1EYZNkbYt47YD31hWiKwz-a4sH26R-ok896fuR9RHWRRGoFxfji6yEebJC1CMpHzzWq4qfH2Vb6TdEqejwAyRgL0y2yYKXArsV58=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZjbtOT0AMWdYfQdZuYh3vixb6XaWqMPMh98Z1fFXGuO7QHDsQaO5fEkVxMBpgPMjBJMiB1CHxnCYP3zbZh6wPU3JtoI54ZjbRZ1uPhL1gkQNwYZLl6ZeldJLug9jpjmr376s5szclfzoD=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QBcFNVpMYXg9gJZvKmwJU4i7tl8gdwJ-Hp8YtZLpzzmKGGBM5cbG-MlQzMBe6GH9krtP5VwAygHwsnzsP-PNSfuXWX5fTxz-BOVg7dewySBOsWNa2Sf-9k0E8ZfosQ1dovvrap27Ye6Y86=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TO_D6cURzT9NRTsRzfJZrDgP_TaR-csiYDgFDhDx8OAulL9g1TgnAxMen34m5tIORwfBoqd2m98qms9VkfzbanyknTU0JfXVUfdpGvmHDidII-P9QJd_FbOsNPDcD4FFOqRVVrHDbgjfSc=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TirGjM_MSyrbem5hgizTSAx6OhJXMWegk5cG1CPnqzeL9D_Z-8X7KJzwArpZ216FlCdWc4zjv8iMlebk3-h3QOVfYUKD9hq3A1h6vs84ip_LCMA0sZjCl15TuV4-mRDzl8lHFqwYgGSWs=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1AiIBeFrrr7IQzJPDZo5btBHh9O7ELU2n3EENsM72iqt9GuJGJkaQAe8ZpBHvQs-RuFU_QIIfy5_qPc6ZSyYfiSn_pcJlz5rry0Tpy_ITNi_zjTZ7tzuWVAtrVflP0DcAWWiHyzBArHzb=w1600-h1067-k-no'
    ]
  },
  // Maps listing: 'MyBranch - Coworking Space in Agra'
  {
    id: 3,
    name: 'MyBranch - Sanjay Plaza',
    badge: null,
    rating: 4.6,
    area: 'Sanjay Place',
    location: '2nd Floor, Sanjay Plaza, 4-S 115, Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1335635814492668121',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tr-hcdR72e_ZTG3urwwxF2FMnDq2l2n77BndVdlWHaGSDNgJQ4z8KFhJ36trKQ_bvOTjHshykYaL_ujVGHnpkUyq2XIRCjIiSMTw-UY32DgUaPSk__vT-TXrEWC6I0YSzcWoQjz5PhZsbX=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qy9nrinu-GsOLzsqnedEHXf-kdwek-PBxfFGqBYcUxBeBaOl_9zRow3JDTEOAz6OweQS7QHXOAKUP9f9JZuhgGFK2iEzVs2MqqOP9THD39g0h6rqG36kbb8zzaKdQqRblNyRmA_xdoki0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sfu2B5_CDPFGr8ZOyOa0niCtjw5cLQAgGPrwJTNn6cB4mw746hxnG6Vyko-iwEi1YIGYFvRqoctMu2HzeMSP_09eH8qk43KwopPmUaOPVJVEnUPNQ1HkVCJOl2TTvLmph77CVZTuvykgsS=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1jdsGDGoP9VgbalazOzQEc4HDy9gRCbzjxyJGwcNlhg7sIOS2NE8hvdfpVapPRXx48Kz1SZs51OypBAImxsY7iCpx-iS12BWpM16v0MzxXDJAS-dxYxmeJZSp8tdzsAuxbiBsS-VwmhU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRhYrL-xTGFEva_LEm9fbOOzHVem3J2yh0IOjbtfVCZfhntG8mcvluh9wxKkxfBPTeqvs9hUjiq8E9EDeAVh6wkoezRju-43bY8eXTP504aTpmRgi3IGxRv2sz1RXQeyRzB4JYIrQCTKud=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TEElRcIvEIjJpc8rFWDFw9gwJqKlxtaLhn37Hi_SFIMr97Qsgwcu6FJ-X8CKmHBtcX3033eUwYbNm3EsCRM0n-GM_xRfbM_vKC56IIjCpRX5X1mrXuUmtmGk7RJBVb3JwIfeuneuYc5-xd=w1600-h1067-k-no'
    ]
  },
  // Maps listing: 'MyBranch Services Pvt Ltd' — separate listing from id 3 (same phone number)
  {
    id: 4,
    name: 'MyBranch - Block 86/4',
    badge: null,
    rating: 5.0,
    area: 'Sanjay Place',
    location: 'Unit No T-4, 3rd Floor, Block 86/4, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11837585620803996168',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QHfliDvFyxfiXB9OCSK3_5ZS-aKWBZq44CTGt0FFXZW4DWZaUR7NsjdFWI8J_L5etpT_2TDlwvw780EcEWja9VPQe2jM4vBiCXuOP-iWTRQ_-XNQvRoQxbvrDCOgcNXJel6cCu0scCDLM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TM3OYUbSdHJIjuriquQ2tCo8QAcAT1ZNGjtP2_R2LNzp3weTR92p10uHz9zQ76cJP132PTTG6B15UdX9Ks73Uz12qUW227yeJaeENe8WOBnittLUjnmitUFNHhPbSo1CwcLJ2x=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QUvzyFVeZciIlzy1_w3vZgQQENBjexz1J8r_d9rPQeBkiIleyQEaRPIAh6R6o4-kt_A3nTE6fpPAa-JHDwLhr6bXTQFPIjJIpeOfI5YXGGHC-Q9ZTD1_KYZn-QAyO_M7P_Vugke7iCXG7D=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RYGMshutq_sb_gJALQOa6KXLVBI_yGEWyGyzFIbWCffNMhnPP1twSqOz9QHD65hcZFTgmPkDa8802s_YHfE2I4g7QoQx7BB612gBFeQcYYJUj3MDiTTQNMhYVuBp2llIjj2tfPWsbI8Sph=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJuK-zxV0CGVNKJeAwg7ZwcOHyLN2nmN7wokw-Gj6Cx8raUMFgS3UyZZl_GZ2kclfEQYeY4rY8OX7MXeC9XePf8du85CLdyslm8M491DF4u-cUSjKm70odWbpom0dYkYgfEqmm5hsP13I=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNcdMC2roKOIaua_riROrkwrsiKhBp_d_U7b9ynQchddgXv7CCqiHvU8Rd_EejPIjOwv5vE_4lNLmTz1OPL8NUVRgaNZBOtCCRUX40zFiOuXd23zAioTLEE7vGUP-OY6Y_WjT8xebdrQo=w1600-h1067-k-no'
    ]
  },
  // CHECK: no rating/reviews on Maps yet, so rating is null
  {
    id: 5,
    name: 'Worklab - Cowork by Dtroffle',
    badge: null,
    rating: null,
    area: 'Civil Lines',
    location: '1st Floor, ANH Building, Sultan Ganj Ki Puliya, Sultan Ganj, Gandhi Nagar, Civil Lines, Agra, Uttar Pradesh 282003',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11461659306967386932',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RsoDGiq53FbqAGYAJqGZFDGoKreiRlrchw_oczrtRLVuME_gsPseY5QVpn5Lg5vABQWg_RajAk3aF1JJ93ZPB28LyyX4opBSOc3HU2hoAORcKFettMoquTMNonOSzXFX0KJiqgpiOWhCjY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QUU-Yq-IJdZy68S9eHjhpY9qsSQ-zclu9s0uAUZqgBGGFlE7QYH2SeiIjTL5py5maDjlmo4HhR3N1j6F3VTmfL65sVcEZiJsOgNcIY7lGvEr7V_L17JA4EBdxw0DrkwejP2EL7ezZZjYk=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbB0EX8tEhVo0xUk61SUGpWeu1Wmlxvw1iXvfGqeWQeS_GxV-MGNWmg1jpbTqChhTev_fb49UStMf1H1fipcLL88bDW6naxfv2146yGi_qAnvKAFZVDN0U6yl4ow8PgHVTD1CZy9Y7RMSk=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R-JAUzT6Tzb7ADCd_AplQks9a_r_f_G2bgksXwQB76PlEOkOHAy8EhErEmImbsxgn0aPHlw9HoaKARFekEudc-K_enwPJF3Prvyovl48Nu8kE5RZRRSrqFZJrGq7mv6uPLmEElIHWotgU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S3UdghjpxRKQz5DV3EHJu1TFKNgHhDzO_zaRYb8m833TjEbKisJGqXnFPVBjEr0jcbfPW2nQyhzAQwolVh3bNNo9ZGNZbkcTh7OFLRgVCjKeoLb5lXlUEbdpMDSjFoi_lGnIZbP9LDIXdE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rpng1_r_Ftq_rJCTqBOKfMt7_TToVWY7aCaxhEPZ6nhTfTSt1JhJIPpJSwbUpD7sf3fgIQU40ikRnHp8vfflb06JMo1Rs8G6M-c_tBT_xDnSTfu8XLMZYEzcA4pj_22hK9dbhw6FOv8APW=w1600-h1067-k-no'
    ]
  },
  // Maps category: Cafe (also tagged coworking space)
  {
    id: 6,
    name: 'Jobaaj Work Cafe - Sanjay Place',
    badge: null,
    rating: 4.6,
    area: 'Sanjay Place',
    location: '8th Floor, Corporate Park (Zudio / Adhar Building), opp. GG Hospital, Sanjay Palace, Sanjay Place, Civil Lines, Agra, Uttar Pradesh 282002',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6674804250007714370',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RjYtPjQMgWdSjHXa52rIo6nOLIlbm8a4QvaptyjtjbaRaqCPcxhWRD4hGh8b6UMPUqJuOIPGK-09VzNy_Z9PTifMsXhzT5Zho8ttTb61Jz5F3NT1lhEmVa-aLWy0-937Paxe47mw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJN0oYWNiPV4V79ysVT7qDRDVA2eRC9uLY-g25zc_7K-JndLC4rqttM16k2SeaMozLVhZzuef_oF3mrqACmrQYrMj4kJ38L-jXS8_V1e-4g-gE2yT6TE2Aj9ffpgOyHx7iBSen-_0U8rRp=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SESFHPZrwUH7rqQ8dD_hrmz7MrcbIvdobe195W7bDrU8QpFpybELEjWlexlyu85T9Xe_0QH4PBHsNf-pB4nU7eTaDYcZXSrR55C_0PKA5IATTD_mTi15ArdjxtB6DbvoXL_Ws=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QAsXhi6xu1qD6SGdhCde1Zp_Cz7byUzELP8gmD6vEhDUk7mvDyCIdN_USCa_uPH3gQ13IqLZ5AZNd8KYFtD19V6f9ieg-2cVE2OUKPlruxXqWkmwEM5l8Del3hP9NgsGQduKYQI16zMdCQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SrPf0YPazn6-rDGCqC25ItL1hoUVVY8aOqUoKHWfK37HLyhUz7s206PL8OJnnYYGY1WqbjCh_egz_DeKsRsmQ9xDSVOTqeT-Sr17GzqjQ0i8-urhFebX-IeM-t18EIcWsNmbiXSiFbGkUv=w1600-h1067-k-no'
    ]
  },
  // Maps category: Cafe (also tagged coworking space). NOTE: your link for this branch pointed to the Sanjay Place listing (/g/11vwfb2shh); this is the Fatehabad Road listing
  {
    id: 7,
    name: 'Jobaaj Work Cafe - Fatehabad Road',
    badge: null,
    rating: 4.7,
    area: 'Tajganj',
    location: 'Shop No 8, 1st Floor, Jobaaj Complex, Fatehabad Rd, Bansal Nagar, Tajganj, Agra, Uttar Pradesh 282001',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14329829664797297120',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TmIrjoqw1-8jg_Uv659QVn5SEnCFYLERNXppD5_FC2kzOdufWzGKe592DiPgI5murRkzxSfokl7L6WobYpRIxiMwqvxV49Mvp4wDvypyh1oIwxc-KqF5kQjlRDfJpVJnzy06USnRf9GdQn=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0EaKuyCFENBi7OZ31yW230EK9NODacDiTzc16cRfcS8M8Vq1hI-T-1B1SpHOgHRalXpO05SHHWJcPTixXmhY3XtwyxuOa7g95REAt4i2yKiG3y_dWqm7wMmMXg5_Ms-g89vexmFPuuoZz=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_uxNCTOAZLlOJnbOq0UBEEtjPXE7NPD_T0jAcMQvAbb1lJEhnXY7BMZg9NvZ2DkfVRp5TUeDkUQyKbL1HGnmt7uxB7fiu7SttsmE-0YnM8KHHjF05HPyLEesSLtEuGMSbIlEgM7h3WYo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q8byZ5ZYatlGf931WjE5Gysjlk51l0d0zc000z-yFT-Vlz90KzEhistj4okaroBVGqwBGmwBba-0aE26LmEbFUKZoJBlVJuyKGfiEi3u7dRNEwJQRQQzBpynS96Hh31d1pUpnbVghb3tWZ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8_x-8m2vi6T5zhJEYYCjO-5mbWKhCVesZ_hrWh-d5CzvNeeqyVvyjaDW5yw1uM75cLWmCWuseWK-A9iLR4_EN5CQfwwl2vUnwNvPCQe8OzYiOUKOfvPFEK06R2v-o0v_KnNQxE6CbeQPt=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9EThibJJ7_61eQKJZXNTx9SSm0U4P9QpJRdt5I6qTE-3VoWNjF1VbDQw00xYk6RRtFRuQH1EpHYtlgzJG0uN6VkNZ2AT9G2CJPUY9JmmDzIqK81cLM50n7jd77uUEUVlfDP3Z3Wg2mQV2=w1600-h1067-k-no'
    ]
  },
  // CHECK: only 2 reviews and 1 photo on Maps; no opening hours listed
  {
    id: 8,
    name: 'Litnest Co-Working',
    badge: null,
    rating: 4.0,
    area: 'Baluganj',
    location: '4/251, opp. Baluganj Police Chowki, Baluganj, Agra, Uttar Pradesh 282001',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5247557896568346161',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qzg02TMFGrwPznJmnYeTmSCt-eEK6Y_oTRVaOe7vjGiTke2tcwdGK5LV4EC8abOsbCti3iEL8AFdF5dQXTg8ZlC_MSM_uld35APljXwvYxHZ8a1GzXxk9rCkJ21rVvLPnEO2G5=w1600-h1067-k-no'
    ]
  },
  // CHECK: Maps category is 'Office space rental agency'; no rating/reviews yet
  {
    id: 9,
    name: 'MGM ShareDesk',
    badge: null,
    rating: null,
    area: 'Sanjay Place',
    location: '506, Padamdeep Tower, Wazirpura Rd, Sanjay Palace, Sanjay Place, Madhu Nagar, Agra, Uttar Pradesh 282002',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15472809011198422315',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SMlT5WTKNkK8sr-_sKkI_6Cyv7NbPknof8MecIO7JYwKJRN4z1KSsNDyLgB6b7HEs_usbObpL7BlUXS7wBbSjexItuwsZ-kSBygCnHNO9UxDZXEWRLOrtobX2IOXr5HjWqRw0Ssu4VtJSk=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RnpQgFFOimmtQ3BJdsxRkeVoSaqv65lf33O5NJf4F56Ct-mgqxiHH_Tht-1m5JqmhZOag5-ndXKW-NZq-_vuRvS_-9aT9x3jF-k-pbzHi3Ra89fg02mJg4_YGSPShMVG2NOJiAyVd0b8I5=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QJD1EeTarH5Zp-uRdo9YNIBJsZt3Ryqyg-DT4WsSQ7-OiwEqrVfinIRbfJ-xzSvPytm2zCfhIDs0VyQK051L33JPtbFg75g5Y7m7xB-0bsRMlI5OSr5oZL9NjMcp-7FNigL9CEg8z61BQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sdo1ZhpFwkSiZLWsbHIe_khYGALTrfO7j3CGsn4qZfXCf5WeZ3Vqb2sa2RzaGyEY8nx9N2VOTGXA8wX6nUh76dyGM59WaZQNuskw1wU-kAxUWBMLSuhZzU4fpz-1ubeTB3LZ4gc0w-0YWo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWxHxxhibNXPkheD8VUdrvvhKu9Qcq-hVNcvSUmxz48vcVim9tBb8oe5IsqH5tnQ3ZYegUAtXrsYZITLWJPwmr5u9A47ehm9Q2LQXtMoR2vkR53EqQCovVyRGvSguKWHo-BDpV8nTBadVr=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QzvTJik13JX0Hqotik-_dXdMbM9Wc0xojUBNX9AREZY3i6hMs7DziwkjQ9UZ1oAQWiklb2KnGgKnUHGWT-vn5yAcXAVtT0u7SkKCIWFXMGK2ZvcQ9RXbzyu4AAA8vtfyCpjV95-jXO5-Q=w1600-h1067-k-no'
    ]
  },
  // CHECK: Maps listing 'Software Technology Parks Of India (STPI), AGRA' is a Government office / tech park, not a regular coworking space
  {
    id: 10,
    name: 'STPI Agra',
    badge: null,
    rating: 4.2,
    area: 'Shastripuram',
    location: 'MP Road, Sector D, Shastripuram, Agra, Uttar Pradesh 282007',
    price: null,
    period: null,
    priceFormatted: null,
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12942985371915714313',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TA_U90qWLgp7YF0czrzvCBzXDRUYRFDRFbgaxOwmsT5IBWp9m9GaynNtZyhhtOPIONtYSmiQEF53k9UuB290Z7iy1yYgtOHZyZ2vs-iQ79WrjPPB2KGy9TockU_erbhxrASDgkusSElr8H=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGtO8slU8sarWOFcrQKqmHIExqy3o7xDQXBsZbmouZagUSV6olh--okPYEESn-Ki9DI-5ZymxZ5udmXaUgrs4quqfi0h2C1zVdRkCHb3P5JBBP5rr3B0FedP35FjFBOLiGKQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TyVQ2rMkxDjKsVhsr_lA0ffhJM3p7c7Uj1S_tbGRGNXzvpUObb220dFUPqALttP0EizgQlWv6NjUyohLrIbltHXQ4_WI8PA-BXiB1MPgNL_AC6929C8Nm1pCP3ZHNtepnyanA2FXJ_boLn=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sv3HOd_2uf_fUpgfxzqHkFAFG2_Hg1kvVw9qmv5UMctE9gV8ITV3G-IUT6YqQTI2Gm-Ex30lb_hA0QbuN8bb6vGoiy7D_fZeiXuStz8XBK6K2QRGTYX9FjEqptJKr0OEkjFq_fYW_9GlBG=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sf3DfmlQYKwIaLZoPq2El3MGI7Y_hYKdk-BFEkSIQskrcAnMZJRwdWo0CGeJ9jsNl-fa9syVOxktpuUvQt9IWvaP0s6fGy58ATjYzFo8N84I-QPMavW1NhvSaJ_SvnVDNo3TMesLWvVCps=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SC_vrxPMHkAtz7a0AS4I0KydFxYCwkgnt_bF7LHNBmXOZwUlAqeynLWUA-pPPkt2bo6uQFqLHaM7NXGEn20V1gEhBRyDPx1vprlebLnCYxq2avkyRg83VTS3C4IbAB00_FkcFqzQ=w1600-h1067-k-no'
    ]
  },
  {
    // Qdesq listing; it marks the desk option as not available, so confirm before publishing.
    id: 11,
    name: 'Urban Studios',
    area: 'Sanjay Place',
    location: 'Sanjay Place, Agra',
    address: 'Near Corporate Park, Sanjay Place, Agra, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Lounge', 'Printer'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: '₹10,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1640685342/a5b5kdzagqenqwzhuskv.jpg'
    ]
  },
  {
    // Qdesq listing.
    id: 12,
    name: 'Space n Mugs',
    area: 'Basai Khurd',
    location: 'Basai Khurd, Agra',
    address: 'Near Radisson Hotel, Basai Khurd, Agra, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Tea/Coffee'],
    capacity: 35,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1612338507/s0rtcev2mprvyullanry.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1612338507/tqydo0iuhwmnfgr8eyww.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1612338507/kja0cki0diz7ro2tup94.jpg'
    ]
  }
];

export default agraSpaces;

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const agraNeighborhoods = Object.entries(
  agraSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const agraOfficeCards = agraSpaces.slice(0, 8);
export const moreAgraOfficeCards = agraSpaces.slice(8);

export const agraAreas = agraNeighborhoods;

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
// Agra Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAgraOfficeCards = agraSpaces;

export const getAgraOfficeCardById = (id) => findOfficeBySlug(allAgraOfficeCards, id, "agra");
export const getAgraOfficeSlug = (space) => officePath(allAgraOfficeCards, space, "agra");

// ============================================================================
// Top Coworking Locations in Agra — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAgraCoworkingLocations = agraNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: agraSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

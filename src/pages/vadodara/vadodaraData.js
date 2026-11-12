import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Vadodara, ordered area by area.
// Sources: Google Maps first (listing, rating, address, photos), then myHQ, Coworkingers and Regus
// for prices. Every photo belongs to that specific space and was
// checked visually: people, events, promo graphics, logos-only shots and duplicates were removed.
// Closed listings, study halls and non-coworking businesses are excluded. Checked 12 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/${id}=w1200-h800-k-no`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const vadodaraCoworking = [
  // ───────────── Alkapuri / Dr Vikram Sarabhai Marg ─────────────
  {
    id: 1,
    name: 'The Co•Work Capital',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Alkapuri',
    location: 'Alkapuri, Vadodara',
    address: '1001–1005 & 1008, 10th Floor, Ocean, Sarabhai Compound, near Centre Square Mall, Dr Vikram Sarabhai Marg, Vadodara, Gujarat',
    // 1001–1005 & 1008, 10th Floor, Ocean, Sarabhai Compound, near Centre Square Mall, Dr Vikram Sarabhai Marg · 87 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4574547750616002825'),
    images: [
      G('grass-cs/AABkmLdSN2IcyfTEcyR_Qi6dLRhqe6uN8tTNEtiUjoz61zbAFB1rxLTUNzoCnuN0ARgJZcYEOR4LV6F5z7W-1P8TrdPoQaOtrDLYsYwPqundl_Z4l9Kd45liNs00KF401rEAJj6Btzo'),
      G('grass-cs/AABkmLe1uMtS-sKw0IDVSNTJT7bZoOFkBHyfbHuv3urOletyqqbVSeSP-aQw24KHFhnTjsta-CZvF098aL00v5OKYA6JoGUqW9Me16PYQGpt_rFJwGRToyUikq5aSwMwxuowsY7xkdHs'),
      G('grass-cs/AABkmLcxtJa4PmzZjAh-F_nx2lsKTjPVjdI7tTWMZ1PrTbOYaR47Rh8wRln5POdUl4dOC4LrToMYc2Wrph9Ty9uM7ZW1PgzmWmv1YzTCCQ8_5Fjqi8VBLrTkGfz-kMdya_28HEFvH-d3'),
      G('grass-cs/AABkmLf9WL2dVaaOz_ahioFyWKKMbpgmEApsE-9TOu8pO8B5SRkLBS5MMUtHKsBfjX8E3E48qo0fLtS3YIbAr0b57KfJ7MhylUkvRzNeZ7w4vUF1qhR0gRBnOMbzpbIwkYy_RNsKtsvP_j8hDLSJ'),
      G('grass-cs/AABkmLdtDSftscYw5XaA8exB5DhEMdCnAcpyek3Z5NsvJ7NW2H-DUn7KqM0W7h-VN-VWMTP_dRUZ563pSHdL7onWJHUIJxFVdircWG-Fion7E3Vb5C0roZGDHQWrKs5aszRYXV9Y-24'),
      G('grass-cs/AABkmLdKNORSj5gwGHTfcDCq4r4cui1KSta6iBaa5pnjw95JbH99aKkxGl7NKWplUKP5K8D8aca0lo7dQU8YaBmJLvGvwTO6r8GhpmlZeviyUGiwcY4F3HGRiKvR8FJU6T2g5RWDmX3t'),
      G('grass-cs/AABkmLddZNjQOAksX22Uiq7rOmEHQfxXuOd14gY6wviVIC2YY7F-f1OESQgp9Y9fwahLdIYLOjyBUJ2GP9L6_RZFC5h_DS4mHFIo4sik3DgBBPj5fDmMJ2C9eGJ2CKr1HkD7R1OpLCZ7'),
      G('grass-cs/AABkmLfll5UA3_WqgvOM6EVtBIhutdlo9FEyQW_facmxpc7EztiGnl4V4Y_zVpdSIudP0y8DgUTft21z_beRtBpU_gvMoc_UwOP0wuFggdB55847_0yZ916IaOxUqS_B8DfnZZtu8THrbA'),
      G('grass-cs/AABkmLfHf8vd-E3KhQ7AozpJoUBwv-ZWhhwCgZ0fXXDB518yNE_JzqKjjgVmPGjU7cu4Zw5xGguwEYyd4WvAk4NtNkaH0A14f6FzOGM1Sk0sU_RX4WBwInBWmdygCVFmTyOkDKMM4M2B'),
      G('grass-cs/AABkmLfa3qmPYVwa_BeeBG1rgA2v4OfzC_kscTsY8Mfg2xaV6FIVCXjvpmBBQ2SwnQie5Dc8k9wuWzylEBweOFU-ogzJkXXUarmokhx6q9uYYSG-0NLuxG0kAgmvUyoraCZLen7uewcowKVi8L6R')
    ]
  },
  {
    id: 2,
    name: 'Kplex',
    badge: 'Popular',
    rating: 4.3,
    area: 'Alkapuri',
    location: 'Rhino Circle, Alkapuri, Vadodara',
    address: '1st Floor, Vadodara Hyper Complex, Rhino Circle, Dr Vikram Sarabhai Marg, Alkapuri, 390007, Vadodara, Gujarat',
    // 1st Floor, Vadodara Hyper Complex, Rhino Circle, Dr Vikram Sarabhai Marg, Alkapuri, 390007 · 273 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6791594316609081368'),
    images: [
      G('grass-cs/AABkmLfKiPE0CM1j1eAnR-6mPpFl9fQahTXRf_QBAcntWCz8Ws4nKOaNL3yGYP6vDYwTwPgzsPTcoC8dg14o3SJcijoREU-E9996ZSH9NpKUnbTdIozb6qKGEcqyO1WciYGmnE26l9k1JhuMU43x'),
      G('grass-cs/AABkmLc-OUm186rgWlvp76NpmL9YsI7YKBGEDXG2rq2P7-9Ech66zkXrkAe2Pg2UgIUBmYWoCPHad09YP6MwZK-RzsexrBXbtZ9pzhgidPSK3Bl8eG-B9wqqmsOkaXbhe6FJeyHQn1jnr4d6GbGn'),
      G('grass-cs/AABkmLehhzUG1BeUculGPu8amXN7hmi1QqwlfAXOvv65M6HZpSvlA6t7dP-p1UwzteoysYs_vpjqAIED0HVzZ2kVc9L58rSQQY3klNFEngKqgO51V8kAX9lMHvKyG922_V5c9sWr9unSyKPbzt4'),
      G('grass-cs/AABkmLfW50ToMOq7_9f3xt_Bv5QdyJ1awkRnPW4F08en_swGYGoyAayFdQlyL3U7j7EphWGr0_3TTFlOrK6m_9StPd0YwuxU59bRDTXJbyg2TPUzjEwQtjNCvRm8x1XzMan3pSZuj9aCUvNLqHg'),
      G('grass-cs/AABkmLdcHfR2FvLnzTe_58sDS26O3EIoJ62n4J7I10feP6ZOFOVwTctUthAq3XxtYL8BsywicTy6sm_LI9eeEK5FrxBfcCAnqHK9ERebi2GRHEI_EuGMZSNQrzjB18bODfa8Ko53hV-N'),
      G('grass-cs/AABkmLfMTBvUUJ1Bkh-JQqAkzRL4kFk-P8RWCDP5wqqYXysmQ6TXi-qtUYAvsLT2miuPgT6JA3OtYbHVmeafu8r9I2Km6fLI5TznsGytBkuODDMht3CZaSemju11sjYBvhXntsSWrViI'),
      G('grass-cs/AABkmLd__sTTIvREdB3S1o5V1N6diH2ymZeG0BCOy_W0b85QyBsDa9iAy2Fqo2gNyZJOQRBit8iIkHfae29MntwQ_V_1U6sIph1OUjvGcrify9E8nUZsPvkj3dIyyT7Hl01mPy2zsTMzQw'),
      G('grass-cs/AABkmLfR4NrkeoNAyqQGrgnv31oLpwemS1yL1QgtofT9IWek6F_spBw7U5UO3k-J_D0SrXQPbeE4aAdNdU5I_B32ZAf6n7_sAOi-p1yuMGqa5FjUzZnjOw0WPYDoB3EdFDjJK_ZNg-Lbsqqc-q28'),
      G('grass-cs/AABkmLeivd0nKuaeTBvCG43kWMfjhcwXY3ek2smpcIo_RAe9rkq4I0JIaFXXJUDeniTNCHC557EQ6_ALIYZCU1OuUo5yYQwYveWPUbEe8w_6yjzZEr_0Aw9URBcav6uMgpJD8W3mnPU'),
      G('grass-cs/AABkmLc5KE1-_XAYh0Hi9cHNiasIUagvz2ENFWqhFUN8G8CyNrIAcfIlZpFlZZQg1mog1oyOC_wdDI9VYFOqcET_WwThGe1l7qEUyBSEZdiYLllahgiq3pSNskd_AuQuHH1GiijNQKwnZhzQ0Ik')
    ]
  },
  {
    id: 3,
    name: 'Coworking 101 – Work Unboxed',
    badge: 'Standard',
    rating: 4.7,
    area: 'Alkapuri',
    location: 'Jetalpur Road, Alkapuri, Vadodara',
    address: '101 Deepam Signature, 12 Sudha Nagar Society, Jetalpur Rd, behind Chocolate Room, Alkapuri, 390020, Vadodara, Gujarat',
    // 101 Deepam Signature, 12 Sudha Nagar Society, Jetalpur Rd, behind Chocolate Room, Alkapuri, 390020 · 10 Google reviews
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3906473872411983428'),
    images: [
      G('grass-cs/AABkmLedgrGvImoJhwEhk8jGcPQ_MJbIwVorf4E8CEFA37y_fERLYdUS7GO_9dSJtyP3SMValFV6Ui-62PAsGHUQMyx66dCoMRRhApNeESiw8RefACU39qVE_Fd-1FRmPA788ri6g2og'),
      G('grass-cs/AABkmLebtZFo9o-5jJN7Dr8b0esMut9yPpVa_jGM_nTFWyLX__DMy6MnH7JRuQK7-R8GEXVQCBQvK0ldU5Z3nnOAiYeQobM8yHrg5XYTha95JdEnssWZ9mcLUosMdrEp1Yb56fqaYF23WA'),
      G('grass-cs/AABkmLepkphP2eVL7opwR-StgpOtQyeGB511PxN5g1xnrEqjaob7-TV6Um8o7fQP65qmplJruWXWSAmKNgm7jZoioFfd-p3u9EDLOpZgKUS95NuCMJzt0Mps617qFXiHjqgUExHxHib4iQ'),
      G('grass-cs/AABkmLcuTl6ZRQUQ5GHaRdyElsjZiIFbtkBeJqhufAlD832wnDzBTHvMopXKXZNToF5vm9xGmHkqsJe323Jh2bfQpN5k1ZGyItoebpezmtw3s2G4tT60wGu-Ra5IKMtjLoWqOTuXuHS2'),
      G('grass-cs/AABkmLcu9rMlnm05wbduiqY9vuTQ-DaxUXMYal5LSl8M7jVkBLPGCrOmUsL83fPZbwar2NljRf8grLdjeHzag-vksUOJh4Rs0tuvI4yrwy_ByGl1D0Y2Z5kbyhXBzODxdrutiX3ventjew'),
      G('grass-cs/AABkmLc8ilwnitjFqoAxE8bAxShk0E08AQYs0nWilPvZp_8C4bag73a7YEpQYZYeO-yHYBwobpF8OMNMit9ZKHMDS2yQ1G0CTC6OZvs8J2jG3Rb-HEBPcXRiecRPCToqO3w4HPrZVbkP'),
      G('grass-cs/AABkmLebZb3pU9MwXOVRIaJCcwqFimobT2QxbR4wr9UlntBx3Vv7ZwmvNKKIBBMl9l2r-6VCv_IIJFDp4h1-Pn9LZSPCn3zwsW_hb3qTS4rbSB7qMqQcbIZoiXo2io1eC9MgtQ7Hhi1JPA'),
      G('grass-cs/AABkmLdZO0zL7WiYSR0gxbzpBmSjkpxcoILyE9koxMHRDuWVlLT0lWPB1fdVXdvxKA5LQpsvqzvDSP42ZdNM38VHotJJcCxncfVGckValw8xGjf_fpkktaEDWcvVawx5Xlk-WvRQUMN5')
    ]
  },
  {
    id: 4,
    name: 'The Nest Coworking',
    badge: 'Standard',
    rating: 5.0,
    area: 'Alkapuri',
    location: 'RC Dutt Road, Alkapuri, Vadodara',
    address: '9th Floor, Windsor Plaza, A-wing, RC Dutt Rd, Vishwas Colony, Alkapuri, Vadodara, Gujarat',
    // 9th Floor, Windsor Plaza, A-wing, RC Dutt Rd, Vishwas Colony, Alkapuri · 1 Google review
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8044194789948303365'),
    images: [
      G('grass-cs/AABkmLcLGv8VBec4vLJZhkSxAQUrpOIV3EqU7eSQAKg8cD9hNgPP0u8snk6bB9P0Da6r_rPk7ldOBkUjFya-sH9llYhpbmF3lPlxwf25uQ-LwYJDIFMLtIG61A6J_uDzKON42jUaZNSzvXW4BQlE'),
      G('grass-cs/AABkmLeooAj-hwwS23vXAr9m2m76qrc3pKAtKajEwvlFVex8Oqd88P17wySYnnznVeC1T0Phr1iYkca4_CjRIZMu2qyAoWVE17AFxyMwgbsFffoVqWrV6VsxxMRvIKJY2Tm37fsg0NmiaLsC4VjO'),
      G('grass-cs/AABkmLdCGRFQRC-1kDSVaVmsqZ2S64QTK9vcxNL3s5_ryXsWKl7cQXFD0Xu-_KVfP_dwrFvoUGC6wohjJfvGqMAiuih_Q9W-RCAW3VIBlbsfuIcaw5XCnOHwsnhqY8bv4QgMCoOYiupCMePn11eD'),
      G('grass-cs/AABkmLfQG4AqAaGAkMDlv9Ew5ubenvlWJDU098wGt1oXP_7QyFs_84K6-_oKAF3y8BUqV8K8GaYgqs1hLtvleNL-uAH1TXTSVCe4QhsodLh9tHKupLQ2Jj8JzixqxB8f4oZAIotxOgKuowrEHy8k'),
      G('grass-cs/AABkmLdbZBVCZEPnOIujPDk4KtXTTevwhze_QxexmIdv92BYLqZiQ4hB_vDOzGH3Ktt4tnHW6bAQutmLn-SP_W_H0yzPmXu3dNoUuEyT-msF_mpqPnQIf9bXaqw4wkogiCPmbb-tsitG_jjzSQEH'),
      G('grass-cs/AABkmLeRbGLuDNXsYNeX1jnsvLB9v2-UjwMskq9IseSDzG5pe8oVzS3kQadZDtsEKWI0ZGqu7ZILC0OxguCmQKk8FVmY_F3uCw2UI6BfompfAFWGXPGXFcGM-5hOy-1ZrmMNWWV7h4YEtiuFmjKg'),
      G('grass-cs/AABkmLdz5tpptHtYAzc1k1TXiKuK_XA29cOdm_xDz-1QWmZDVknmJD3YS1yOoMRVsBE3xGnkDdRcnEeSvLh37vWA_oUn862Fhf4WwL8Ta8_Z_kufeng-u7dIEG6Ch-o4kB7AtgACYzJ2eYexTJ96'),
      G('grass-cs/AABkmLf0q8RUDAynRePj0Q60OdS8re_5qiA2F4yyFgA9BIiQw6FfIfnT3cdFm4rSeVF6dazq2ZfTMAIKYvgaso_Vsrkiv6ThDXyf3MsloJDodb4sxBhHZTxaEhKKIPQV2U_tq8CXLZ47P_3FouWA'),
      G('grass-cs/AABkmLe14GAcgk3V1bsn8VtsTsYgXbkVkKhHArs4CX6QIPJBRkA1Y_kjoUWk1mUwSuaIHZBxtAVkbxuw_Ig4JGkXfDNFGNCphHCmjrTH442R1CCnLM9GUX5_20oo_iFUYcMFiF-6u5QkycaNtZLz'),
      G('grass-cs/AABkmLeWd-4rFmSeWt7nB8UjRH0oPi0Mwi5QRq-E0sPnJiCKajwNWDe2quy2AAK4NOQoH1GMBGMkTSR5kO3wnqvzDcV5Xp4tegwg2jGkQ17fhterTBKtZRKej1Eti_pSSHhAUSmTlBzbW45nhtE')
    ]
  },

  // ───────────── Sarabhai Campus / Vadiwadi ─────────────
  {
    id: 5,
    name: 'DevX',
    badge: 'Premium',
    rating: 4.5,
    area: 'Vadiwadi',
    location: 'Notus IT Park, Sarabhai Campus, Vadodara',
    address: '10th Floor, Notus IT Park, Sarabhai Campus, Vadiwadi, Vadodara, Gujarat',
    // 10th Floor, Notus IT Park, Sarabhai Campus, Vadiwadi · 101 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('16680577921588745713'),
    images: [
      G('grass-cs/AABkmLeNjOWC9e8n6Rog3maFTHYjkkE8jzlglZxr4ahTzOoWQHgKyq_7pt3oVwhR_IHlvgzGVn4jMswzz5ykxkx7flm91NFwfdu0BgHrDvja789H96fNcmacNzdTk544JnU76Z5LPW-n'),
      G('grass-cs/AABkmLccz4O2mUqzkmwhRdo_qt1MThdbko_D_lQPoTDWDjZVMH4hK0FbkPJMGQEd7aq8_99OdbJscfmqd28B81WItYd_Xt5SKZ0_1aVg4vO7kOaLlfBDEGaUmLorWzmkdBXqI2_9LT0ozs_sYoBS'),
      G('grass-cs/AABkmLdc0eeZFZAua2RkYRU7Imw9Irfg06iCV64mzmZCaakM99ZGqVHiMhyxo2_AugEpyW-PK32vRQPoRFAxBkHHXGmugLz_9kMTS0wZ95nwSYaqx8q74AEyGeMNgGXepPiYMjZF_Bu5bP8RXceN'),
      G('grass-cs/AABkmLeKXfPrn_UZJ6Gb03c7r0pppL1o_rKoLbqUztwahCXZ6EKdqUgoVV3AfSJHpofwOgLBmZzB53Ycaac_jp4BxCQMJbUrumLmnkkJn-2c-qHVVKdfEFLgaX8h6PSjnwiyqrR6zU9b'),
      G('grass-cs/AABkmLfuJrJjW7vaqenAKYv8QMz842PiwtYm7rBuUaZHTYJc4y1u7YLj0pXgwx9rqDSoIlfg5ABU35gmk9Uexim6CEpTOqjRZr5llyv7qJDGGZlYC3zR04ZjoRj_3x9jdVbFhmEYtE03'),
      G('grass-cs/AABkmLcdbcR4pbDkpZRR_yTGck1jckPzkGJdDZH7DlcHCac9Es6B9FnfnKDP2e8_WoiEeIKr-77dFxRXv5SYncUuWA7COmhBZe-0urusA66wDYHt-tmKKwCLGOYg4Gwb9Pq3kG-U06c'),
      G('grass-cs/AABkmLf7jNGxLcBZd9tvHlDF2jqEWzswJhDF-iaNiPgPSTccK0vjczbO-2QF-yxCJE4FaOaQ70kPXa4kDBvhmXDuxu8Tb5HlIVV6UboBvsR0PqicfSCve1Xdjk7sAef4CHfWJZ3my9O1xysQkQI-'),
      G('gps-cs-s/ANWiy9Sqqg0csg1-AwwN1oZL2Hhu4kn4lPo5WITUkYyMWbwL7L75FkMaZKi0yh5ivwJHk86p3QepZpWXZmAFpMupmyZJZ3uHTTmbNnJHHB5yToHWd8rHNb6P9Rg0D8AKGQLx3nsY-o1YfA'),
      G('grass-cs/AABkmLfE-r-PbpVWxBmaatHrF1zeXsJicjgplgoWN2lsJ8oZ9HW2Wq9ZZsEo0TIfuwdxAxcz8PMhPdFWE6nENnTEQz7s_7vM0IpbAGs1c6v_uQlbJ_CETB6k5wNaQdZvnWm6v13qE3LwfsDm1rS4')
    ]
  },
  {
    id: 6,
    name: 'IA Spaces by India Accelerator',
    badge: 'Premium',
    rating: 4.8,
    area: 'Vadiwadi',
    location: 'Neptune Trion, Sarabhai Campus, Vadodara',
    address: '11th Floor, Neptune Trion, Units 1–5, A Block, Sarabhai Campus, Gorwa Rd, Vadodara, Gujarat',
    // 11th Floor, Neptune Trion, Units 1–5, A Block, Sarabhai Campus, Gorwa Rd · 5 Google reviews
    price: '₹9,000',
    period: '/ Month',
    priceFormatted: '₹9,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5428540376395469185'),
    images: [
      G('grass-cs/AABkmLdz-wYHPGMJK1NuK0u65wm5J10r5CjaK1iSIlP7XcMx5EVVhSk-55D8MQvDhSb3rRaXNcRqZ5r6X1mxzmVpWMNHvmLQjEkHHSZLbEM0K2av4LRFHo-Ihn8KnbRIXX636FNK2EcAYYqLlEw8'),
      G('grass-cs/AABkmLdNYIYc6VKVEurSrkHKbakEDBfdlWnJJB0DKfsyIgi51s7slDFAebORVy8XJ2zg74oqiGCkdBbl2BfhfeoqpmAZay0wcdApYjtE_NseiRmc-Jt1CdXsnqt3B5Zqun02SnUqcr5PX1FPSusf'),
      G('grass-cs/AABkmLfGc23NqXdKtMOypdL8DoO6e9mTs8vJqK8txTpp41NqtzdFPg9Lp90u7Jl8T3PohsYUC6WrrIoBjJUceZGug8FusLxtKPLr0T9KR5mAd0JEeY9xWBoskx-30vB16NZ0dfG6A94cA_eW4el1'),
      G('grass-cs/AABkmLcGFbHTr5no4nqjhDjnxAyi5sFue7gbY7GO6H0yDmPSKXaNPDIlWERnDvyCPHSbsUJjr_qTFOMRQBOsfPsGbvLLS7TPCYsJIv9rXKgxMD6FXqgICBduMI7LksBnezFreF3eRu8qShPZB1uQ'),
      G('grass-cs/AABkmLctcFhLNhLTlzz1RAqRNRUKM3UzqLcjTGv534JkvMXJIKO9OHKQOo0fCS--207_UqwnK_FFpLUdcjh8-G37Xbgv5fcF2XJafgEFX1AGqtC8dR5ye2mxo-W9LT-4N3obSZxz4yq4CAablVqG'),
      G('grass-cs/AABkmLetIDYSAfRpawTw9qUJVDJ3jXM04dgjaAh8BfpoI08UCuM54MS6NdJc-6reCRI86DtI2whqoKoGlOSjFNwDCXiXxZPa2kzMfbNYjxm5q789CXuHCNkDEsdoVZpeN-vfB4X5jeK1VoaCJ74'),
      G('grass-cs/AABkmLdFIS-qZs2XMvVTDSkQ069pGJrWiahmj6eW22A1AD-FKlZHvgZROVidRjmBK3s0t7d9v3oxrylyIIItm3-o1JJpgfCWED0KwndO2kgUpMlgcsxZPbflET-40Wlb1pHOFZ7tzQtU372EJlvu'),
      G('grass-cs/AABkmLcqwnkB27HclwMouZVBRUFl9jwlf-HqAaC4NWWKk3jqQ8hPPNOJoBqcEMKG6l8dR1eRSoxh_s9ljHlqRwZdSgPqGvEO9XiOB3yY59IAPLNy3iQoGIxYpFojcFKvlV-lmiJHNN0W6Lqw1il6'),
      G('grass-cs/AABkmLeNzE-P098I5VVKpqN4xssOke3wYpUAhYKLuN8EG2-iaJP40vLREiQtq37PWIxYumjDELG4ugUwWT2bQrjRaz_elWcTbGfygp4auc_owtaIHfCunQhBZwldBF9dcIVy-J4VqtRU7g6GI_kI')
    ]
  },
  {
    id: 7,
    name: 'Prabha WorkHub',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Vadiwadi',
    location: 'Neptune Edge, Sarabhai Campus, Vadodara',
    address: '3rd Floor, Neptune Edge, Neptune Campus, 313–321 Dr Vikram Sarabhai Marg, Vadiwadi, Vadodara, Gujarat',
    // 3rd Floor, Neptune Edge, Neptune Campus, 313–321 Dr Vikram Sarabhai Marg, Vadiwadi · 17 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13263586438483063613'),
    images: [
      G('grass-cs/AABkmLeJC7Et4UaVyxfHEhKrcLfW2g9dIMaJSIOdAqRKw7VAudn6Q82_MQ7YFKInBM9jH53piViDgG4PRBYW6mU9AT0oVTQSlqB4Ku58CLPbLKDhUFeRlUCAWtcyyevFXO9q3mwlT8YmNUznIkY'),
      G('grass-cs/AABkmLdvfX4G60wQ9zzQKmLPMvpg0kaGXUnW3U5pnIvJrluKy80NBdAVmx2SU6zH5Mu_UKR9c4rqyqWWgy4VPt3DblKuJV9Xp55zVrpDCbgor2LFSOCk0pX541k7WL6U8UE4lttqm8iQG9keSSGb'),
      G('grass-cs/AABkmLfmi3qojix-A_BygiohaSc3o6RJMZoNkowGQcxo1ylqhH7fnggTA18aHreGHXFuoTm1AJOBrZp7MXPkTsiDTMw76aGVzEOda1Fufc179DywBB0Jv7AhCeoXq85Up1D67pN76NuIbSvYsHY'),
      G('grass-cs/AABkmLcmNkiqkmC9gedTZc5biLxhd8zq5qQjJGL0tPvROqlSBz7pkXOWZ4OpbeP_xNaAcAQ31YWsttT3Mr3bz3fbNB08tJ0U_RWV0ADZxTmGlZeq_f3U_t_52NUyVBRfs64kZY85tuoWSYt5VoHy'),
      G('grass-cs/AABkmLe6c5z0Lrq9sjF-4UfbgnnoH2UmVvdnu7liqyVtfPO0DGR3rkGdKMazw9Xnabg7yyJELw0BS-7qDvcLtJAQFEDxTMsi3OuLnIstUP-32iU3No2lPkj28POg90HGdpP9Fnks_lh3iyQqf2MR'),
      G('grass-cs/AABkmLctcqzR49NPDOz_EsHliXontt4169Nb0FOZ2rOKW4LHLfK_gZ1wh62-biUFJHxCZpJCU5WYBl3RFRsrHA54hl96ZZl9BtasDVs9S9ZPKWyRn16MtkDGDXFSgDERQmoVl0c5ZvgkwwrV-bWa'),
      G('grass-cs/AABkmLfZExuW_WUgSH0clKcIOUcdxgN4t9gKncMeT7462dWgGkmxsKcA-jbrtdqIEhpeK58kpw3AHr085-N5z-5EbeNSaYJdK0YalBeMUB_Lc5xl9bO4VDqrr-_OizBr1FSO1V5BR9eDmKDVSd7H'),
      G('grass-cs/AABkmLdsVpp4q2ztF6tc3pen5P5sG4p94IE_uMbtIkNLL_5Wjs5fjq92TZjcJjGOH7YzdlNHLd5EHbIyGmw8e1cm24PsyI0qjJ_6sp9o1JdfM8W7MgDP6x_EZgDcg_Fs1P0LL1V-yQT4COEALMJX'),
      G('grass-cs/AABkmLcgwW_6rBeRg4CB8QgNU91zvNybNXTVvPMoV2ZTqDwBlJQ2KSkV-KhXqy72a5OF3wlJyu_rh0samdgl68waaTVGMI7He_tjo6sv6KFnNjRIfnOcRO4I_i-KUQwr26rvbS1yCOf6zItMAI5C'),
      G('grass-cs/AABkmLc6kDSC742R-JycPiu1Mb3TUza0QuMBMDjvlCyH3N-C-LVMzDIbwo9Hmd0caG8y4npJkM78woQV0w2AgJU3o9SZtEMTNPM3FPJMHNNSSkkBJgj2H5IzF0ibi_OG1vMIYAnfq-jRUuh5bw8')
    ]
  },
  {
    id: 8,
    name: 'WorkSpaceCo. Beyond',
    badge: 'New',
    rating: null,
    area: 'Vadiwadi',
    location: 'Neptune Trion, Sarabhai Campus, Vadodara',
    address: 'Tower C, 7th Floor, Neptune Trion, Neptune Compound, Sarabhai Campus, Dr Vikram Sarabhai Marg, Vadodara, Gujarat',
    // Tower C, 7th Floor, Neptune Trion, Neptune Compound, Sarabhai Campus, Dr Vikram Sarabhai Marg · no reviews yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9669041266602472934'),
    images: [
      G('grass-cs/AABkmLfFBo94tq8zLWYD9LIwW3FK-m1Qcv-yLUj9z2xbeIcopks_nnGcuy_aEuTB5_wolrBS3UTtdJEaIWqBLpO6Z5b5FaL1Jca7aQq9-2yr3IA9OXSAAdA6nz_N_-Talr85lBrhGen5oT9772I'),
      G('gps-cs-s/ANWiy9T0qqSHdc28AyqK2imjD2nWpRR_jfjbHaDFcCqi2Km6cAQl1Oh1THO0D7JyNr_eoEm-wBkleqIx3K5L00-OqrN7btrYgiTPeY8W4-La2i0OYw5waDE-5jA6KF6Ni1ly478VPZAxBMGUZP4'),
      G('grass-cs/AABkmLesPqvxYiIp0eQfyEwMFrjGIyZDayr_W0lKuqfZ-SaOcaMxkGG26kTkFRSe0I2MmzC_wF_l42Qhe60Kl46Q4u6yB0ML8UFie4BDqbBLuPXRVgR366OrKTQ5oHXcG2Iv166eWilQrzIV42YM'),
      G('grass-cs/AABkmLc232MNlbtGokJ7toKSYgdeEJDPiqnOLPWoo-SsnUHV7OOIY_ueLTAyRKXv4uczXNZXFcpc1quz1oVp4VFkxib_uZMFOHphFPl8kfmbrGi7oYRBxmAWPKHnOO8US1QO0VCKF2o4nPqn2DTs')
    ]
  },

  // ───────────── Genda Circle / Subhanpura ─────────────
  {
    id: 9,
    name: 'The Address – East Avenue',
    badge: 'Popular',
    rating: 5.0,
    area: 'Genda Circle',
    location: 'Sarabhai Campus, Genda Circle, Vadodara',
    address: 'Block 4, 73 East Avenue, Sarabhai Campus, Genda Circle, near Bhailal Amin Marg, Subhanpura, 390017, Vadodara, Gujarat',
    // Block 4, 73 East Avenue, Sarabhai Campus, Genda Circle, near Bhailal Amin Marg, Subhanpura, 390017 · 3 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15460707506192450561'),
    images: [
      G('grass-cs/AABkmLdSY1CDj9JHK1zh97s5l8p36mIiw6IWfH_jeUDKGfDBAu6bQHd4Ln20KwwtMIL2riU9RgWUNKlRUMoH_uuSr20Zfc644L0pUqaSI3MKZ412Wr_bNJQfcM3LKQ9rpcGgDJoeeEez'),
      G('grass-cs/AABkmLehpgexjIyFlLGqlVUd_TUtOFh6ZX6eVIXl65K8Vkp_mXTInoUSbE6EJ2RA7vezT9oTGr3BmsPPJ9-BFE_Y2s-c-1LdXFkPJDMA4gIRHQHThIhUjPrEg890iUnrqF_rwvshY-fhMg'),
      G('grass-cs/AABkmLdGrPzwecBBILuBSIh9NJ4OUVUKLOw2pB7hgDANIJPhqG720rdi71agzDj9PdH67WPY8hVFXN5ELmiiYO5iYBr1686Km33n2ZnC6CmqJ6ckLNXMOTMGCTrkMtGLXnFiZwisY6A0sg'),
      G('grass-cs/AABkmLdxqw0pTS679TZ05-4uLD2rBz91_i481V1--VqNrzMCLB0fAhn6PuUVWUkYs590vEn3EmLLumZTJrKx6Ik0_VCAmRy3ApF0IytacIzUj4ORqeJAHFwBlvrrEfVxvCkErHY-2Xw'),
      G('grass-cs/AABkmLfYrUJD-vNv5GQ9IAzjBvEkqrNVr_3q9KwfyW2_BvUoq0Q30yhW2bcIr9YYHpC7cwmO6nEGyR0z-zjgjEBinp9y5_LYr-kTQgeWYBuQ3ianNkL4Hh0s9RrMhlr5ZqIP2Qi4he6n'),
      G('grass-cs/AABkmLdhXjd0Fzrm8lJo6-EsBcdCB3FvfytNlJH2_RQFBcSsSUB6_wdHU4WOqTC7wnT_6DnE5oZWyNzUDh6MUFQgzXe3gAXqmGhApjyjbiOHYpWtamdl-pk8Eynuo-3BnPmhoNMUWoJRlg'),
      G('grass-cs/AABkmLfbb0j6B3VBetO0Cn-UMHy63wgKEOwbKnkJofYuPcUga-OomNbZvmF_iPMjx2LcLr-I1xkWve2uuA3P2sVqG7_jW7MdhLv0ZJVLD0Iql3hh4dNhmhjXI0oenPsBNWTFy9Ija1Gk'),
      G('grass-cs/AABkmLcL-kbtcrqSbtRMuXH7GvkSdBcPYfCX7ALcBiv2SCjzsOX-U9ppBKzqe2dgOUFRrKyXvaqyamujaCjpRUVPH5VPqw9QZo91ewws0a_bqqe4iS8bZfVDtCqDOhIslqzTPNKUbM4a_NiXbpQw'),
      G('grass-cs/AABkmLflCqOzTlrWog0E1GfdMcchlpNU1HmWoFNlMUhghjqQ7VevTT6uOGYOYXdFilUKJJ_N-8Sumau0xNAedN0r5fCKzE9LH4vZF63Gz_PfzdzHRbPPvpvrb8np7EiQSsg1Yq7StW01dA'),
      G('grass-cs/AABkmLdzozjxVCsvOTr9JgmjUypAenCITLHw-6N0v-34DYz0gnTGDlqb-N8StlvilvYyzI9XiFYu2eLLoklxAsjW6jkWHsDtjBdganR62BTi2IqvupORDhv70WPV1Npx7L3cdKmJBZYJdQ')
    ]
  },
  {
    id: 10,
    name: 'The Address – A2 Building',
    badge: 'Popular',
    rating: 4.3,
    area: 'Genda Circle',
    location: 'Sarabhai Campus, Genda Circle, Vadodara',
    address: '4th Floor, A2 Building, Sarabhai Campus, Genda Circle, near Courtyard Marriott, Subhanpura, Vadodara, Gujarat',
    // 4th Floor, A2 Building, Sarabhai Campus, Genda Circle, near Courtyard Marriott, Subhanpura · 4 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1925418791711154605'),
    images: [
      G('grass-cs/AABkmLdkKBGAeIiJH-FrCQeWI4ICldZCFbSi_NEV3ztaQH16jK508LjRl_6Iapgo3PLwPnZ_iACvIIwXiq_iZEpj0jXGe45UOPhbVNrmRadVgwsaNJVnoRRukSuzGaTTVkttSJsVzD1_G-V6EUc'),
      G('grass-cs/AABkmLfZqQqhj0JYKZBKJmd5t4bTXzjS5JQ2g_nE0nKW6Wvx6EYtUhPv-sRXL47OYKzue_IQCnPW62qhIGoXXcWx1tRjHiPTAxNHK7iM1KGD6aALTSWV3gTk_yH97-H7-3QgJom2u1A'),
      G('grass-cs/AABkmLeU_obLS-dyRNQ2uP2rWVH-cGkqNeFW_rGwBW4h70DsskdnkQN0-xq-TYh0DCR63jZD2nCHSe4kFOackSlEbtETzBZLaDFlgBEtLlZgIGqOytm_qFXGVz4vqSu2SK2IGKIvwnSN'),
      G('grass-cs/AABkmLeS1dlLZeHGAgL4BWCCzmZrmHrVx2KmRwh1Zy0yKtXxEq3ta7snozAh-CbJoIM1WTqpdBp2rYcGCeivpFUVjIeQADU2y00qf9YM1ObiGdHk_S4O1Wnb-cvrZ_b93I_NZ2Kr1Qzz'),
      G('grass-cs/AABkmLdhuuWHqa20PeukoC7NwmYKPJw-GWQd0f2etad833ZbB6g91qOiYYUmqamFN6mpu_k7fuz_PJfeeTvAGMaB1YcSLhfLL2_6DYfMGirC8ko88F_yD78v-3t6OHMVFwVIJcZlWmu9'),
      G('grass-cs/AABkmLdIeEOVUhFzl45jvXZ5HKXu3XE3RssSSUmuac9D0HdEaXWj_Wy7pSSUa32ee1jgeRNs9DU-SieT5r-OtcFXoyBvzSfcUOoMQyqL8cNBo5NpcG2noAWSZkowo3p-zmxBxd3SCDY'),
      G('grass-cs/AABkmLcYilrJNDSyNx6n-dGovhE3Usr8iKp9ebYLg3b6Bm4DeKiKdxq4ptdCg4an_oxvXMeTT5NV2SF9SvpOYGFihcEFQedSLR9AuCeLUvBoS9mNdkGenlAm2AiswV1HRhaOKDop9kSR'),
      G('grass-cs/AABkmLe0S-7xHSjmWdoO55O3H2HsYrbirRj0614XvKZxy8eUx4JTPnNt3sj9Wnff01zVDUz7p-0jRDC6Vpget1kYik4lY2yHExOzTGOc4HF0XsblYDswBrZsMproU8TaGzJHobrwgubK'),
      G('grass-cs/AABkmLdW_t4KsJ0CFNy8gvvBQRK2Z9yIuljYPLjX437FjY58LsBJbjKPVC-0-kJ8DFf1ytEauWR6-drXwdRjgujptvrzozcsgjqxAaeiXGODhBISleJxw2fOTPlDmZSwkl49OXmW1Csc'),
      G('grass-cs/AABkmLcq_VuOVkszWOcNCU22F-YUJWopShOdAVsT53qx5CpoNb8s7cPsXRX64SbBEwyBwvILsbDtxPAMFiEJH0R-jt8DhXzAcwX5YaXtYpS1QuZoFK8__5M6WNeGC027KfSLBWEPxiWHwMCTiOg')
    ]
  },
  {
    id: 11,
    name: 'The Address – Shiva',
    badge: 'New',
    rating: null,
    area: 'Genda Circle',
    location: 'Sarabhai Campus, Genda Circle, Vadodara',
    address: '4th Floor, Shiva, Sarabhai Campus (Monet Properties), near Isha Hospital, Vadodara, Gujarat',
    // 4th Floor, Shiva, Sarabhai Campus (Monet Properties), near Isha Hospital · no reviews yet · photos show a fitted-out managed office
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17584355959421689766'),
    images: [
      G('grass-cs/AABkmLdznFFrIDlbFywqwR4JEXsVF1M9Xw6IRXv-ur4YfNL5EccBfmjs_xGisaibnZ4dF4bRVs_tY-Gpa3_bhdjCO_hJ6nXcjHzIcq29i4oIZbO5YiQSKCPUVaaTjbfDO7Qfdz4jeccubMSOtJta'),
      G('grass-cs/AABkmLfNsSKkSz2f73ABSTs2qGDdc7xZBChFUKx0vci-4V3Hq4JNCmrkxqKGW836Ok_Z89DOsOqqb39oDzXouXqRjUY_jNdn034NYxuGLqFo6PsF9cunffeix6qA1VLh8Vbhhh6FAbt2AGL_7F4'),
      G('grass-cs/AABkmLeSVO3zCcIPAC1NCI55rGikaqELSn_wcvG9y4J8kB-mP8SnKIp7JGVRGTLPQMPLOdYzVVc6RTCpYPq-4YWJd-RYhRLAVHoRv5zR3JmHAR8HqzYlwCViyU-BmV5pAZsLq0VA4IjTjQObgMfq'),
      G('grass-cs/AABkmLdcrOpYsqMXX9t80mNcjDfAM-qR8msK324ZtT9JNenMcVH3Jw0oPKyiGvEIqso5pnqG_l0yEA92tDmheWWALFWAywa7H6TiAq3AyRSdSfwM9WIU34uziB1CBhPGCaqQA38PqmQpSVs9QWq9'),
      G('grass-cs/AABkmLd_WbQqpFtkHKbggWKelbIFlEGCXUIV_UdSbg869kFJz5csLwP6cDWWupDEW58iiCD0BFwCYGaPr8j33nPXK-Cxm6V-HtRblftCwzGkQX8GMrt65ndMEp0s08M6pfCVl2AbaG7XaEM-2Hc')
    ]
  },
  {
    id: 12,
    name: 'Opulence Coworking',
    badge: 'Popular',
    rating: 4.4,
    area: 'Genda Circle',
    location: 'East Avenue, Sarabhai Campus, Vadodara',
    address: '10th Floor, East Avenue, 1A Wing, Sarabhai Campus, Genda Circle, near Bhailal Amin Marg, Subhanpura, Vadodara, Gujarat',
    // 10th Floor, East Avenue, 1A Wing, Sarabhai Campus, Genda Circle, near Bhailal Amin Marg, Subhanpura · 29 Google reviews
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2814533467408878020'),
    images: [
      G('grass-cs/AABkmLdNgHLnBmMX-qDXa4RK7f9oTBCsj7ab-0PdArm5BwjVGBAkelbidmo5Uid2hFu_DaIUxA9K_H72UkKeBG46BqCZ01Z4x2iIZoy23B_7zkElATN2dqC5ax4oz1wRUWMe_79fxVyP5g'),
      G('grass-cs/AABkmLdn_ZXAriGRjwm1dI2a2crnG2HY13tkqcrWq2YTRuF0TyRw8nCo4LAAlyHRq5FMFJn9lBAkPiWr4_aT4z1HIi-hLTRRwRAkus24Nq684EnbIiW2MRswQzcVHVdrkOmTVp4MTZFt'),
      G('grass-cs/AABkmLe3Yq5xMni7zlcoiWLAIoZFhM9ExaviMV6jGjhmXiHy86zWS2EVvQAJ7xZli7Cj9d-gaEyDWKT_eV-OOWAGWYlR6JbKkvkTsUmEpBd8ulFzcSaTYngTpPgBb5O5yQ77Zq6hmGxG'),
      G('grass-cs/AABkmLeIU5mKzIcpEBc1D_4jXtb1retQE-SVZGKXRh0riZ7KEpPspabYJZFMdWLyH6AL_zBM40O0OMlHdYpdFR57-cEUUrIoMkeydJUCEvnrxO3tsxo_udxHfsQMNKhaTdBOXzLjbDMs'),
      G('grass-cs/AABkmLeudYPrShH-GvB1AqFSCi9f23aAznsDETUomRvv468OonrRv2qGq864EU81fg9rk0Gjde8hPMwf9mKBHcoJUQbA4TVvXTirpuw4KzO3Cav9viOeytgOui1bepG95xSt3GqqMsASww'),
      G('grass-cs/AABkmLd5IJ3vnc7Mvb9vSQxsBr_a4wqL6IbtAG9IxZziZsnDgEkltaA2nOvdIOgfLb1qxa9G1fNlyV6kIvHgN2No8m8vYYXu4EpJVEI3onbutFstJsMBpDElv7dNgVva0OZXXA1z3Hnv'),
      G('grass-cs/AABkmLfW9_lnXP3souApwGI3gSGy0urYEes1rkUH3Rd2DhFZltiqKIKzYmo8dcRHl0C4o8GAtt73-d0szNZ3ybcYGo8csLOLOIAHrGlDjsoXtkq1Nh7j6NL3j78QETwnJAxuvYYqm1iIHw'),
      G('grass-cs/AABkmLeNWZYfPjC5N1r5iOtwWYCZng4pAnGfHOnkUGAG4RzolPXXuGpqxF6FC_0eMLdum-P8j-81EqAPgSJfKNeA92xVSHspF_t3UxmLFjGz9NPmc9dTLozlvKz_AsyebqyiXb3oB-Q'),
      G('grass-cs/AABkmLcZJXcQwMGN960gkfh3FQQBIkjWPpbbFfHSNo8waHKN6GdLJhqElB_4KMjgbkMtWuODoRvxcx4AX47F-p5PvciwQYmOD-2veb5RboYt1zfNHYgZXoNkzzkFxRLeU0MQN_rxgRg'),
      G('grass-cs/AABkmLcRlkHzRwJr32H_Mk1u_E0C209XBE1H7tDZeTCh8lI1Cz8p68tGbJgVfF4Q3XUyssSqyKITRDjG_GCRM73gOofY3JPdPa-UkztMXip7ty863AYlTAp12rYXQ-UL5ellRMrw4eTJ-g')
    ]
  },
  {
    id: 13,
    name: 'Odyssey Co-working Space',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Subhanpura',
    location: 'Ellora Park Road, Subhanpura, Vadodara',
    address: 'Ellora Park Rd, near Balaji Hospital, Atma Shraddha Society, Subhanpura, 390023, Vadodara, Gujarat',
    // Ellora Park Rd, near Balaji Hospital, Atma Shraddha Society, Subhanpura, 390023 · 263 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10016614600030269188'),
    images: [
      G('grass-cs/AABkmLe0mwEop1PPMSIKXWjhMEdFT_nsP26lRAs6subNP9HbiMxgnJD5mAXqQNKqqMBzYOKF6Z6-EVaY-4haA-JgODhDjOL5pzMshEf6YSm17X5AgsZkG3FVA8Yhwnef6RdjgLU4RAOJ'),
      G('grass-cs/AABkmLchn-Evk8qlfq-7LSoq6BO9AZwQCa5du2o126EW20dmEoMQMBUZbBEHodx-Oh2S_4KLOxonuzbWoIda7Z1cRn9IFBQ4WXmvADxeCAuXAaOm_ZbHtD0ZoaCDPjP-N-3vZrqvRS1mMBJd5k_P'),
      G('grass-cs/AABkmLe2QxrFE_0vEUfLS7fdqAPDUT76lyiQtHpBbuJbaCNEJuxHm-zzoCYuKzNoxqpvhg4ZztSE8p7I5o81B_4__hALu6kOYwNkRJa4XV4wO1DO4bV4cm3BDOkUv4bMQFzTIIcEbN5wbg'),
      G('grass-cs/AABkmLce35V1Gd4_avW0d4OGJERyxVAII-Kcoicdlq9cAeCSFDd6mohgMQ1SrhVJybapVOapzuu9TbPBS_U-97gv1rDkeK_yeTdYY2-duYh89iUrDsEgSfxWAhre4tNAvcNplr4Fv1-K'),
      G('grass-cs/AABkmLdLUKCVK4BUwfAX96PS_mtD_GEVZ1uTh0vKKO7_NWndQzetPg5mcd1MHr4n-jSUPSC73yfcjSN-owevcWJHnO2FnuA-2RazSOQcWrKrPc2heDI2HPhv5W7LmrkqZ0p15tcVqZ__'),
      G('grass-cs/AABkmLd6s_dq5rVx1jltoEbFQ0QHEI2uII8FK1fsYWABFIeOS_k4syvck0ooOLo-DcPORXssPEbDNFfdmfzvUhwHf1Z8iJHE_Q3Vw8nmXrkfxSwGyg37TTp47u9cdyuYWuY85noQl-IERA'),
      G('grass-cs/AABkmLdCLdAnK2C6_Fl3PRnGFyLTVFKsSG67gFCzy9iH2bL2CSv6qjoCYVWfmrhzvlyf0uO79aPU1_bmCESbEWjs_tVL5RASHPK27vHsxvGi-2NHtzQu-jQOlgVRc4WfF3C3bJhEXbd64lfKaPc'),
      G('grass-cs/AABkmLcWhYJkWJ3tltllRtwWj4tSCaLNV_t1z5Dw4wtzOEjtkWjpkysFmtquYUmwZnZor590D38rCbyLa3NlHUob6qlO6SA_ulldJoMatPEiQh5tcUGtKnMrxmyTYxHPYBmmM1fEzcJHIIjEOvQE'),
      G('grass-cs/AABkmLedYvAIFPiqia38lqyxZQnvfeB2ON14HJUg8caIHvS3YN7FsP1GbCKrwtA40mVG6ghFDoresXJy7tXX8OZeCkre9EUBCAzD6fWwpocgM22XgI8_qGbDrwzhJVQtQzahtZvg-HSUWjP4bho'),
      G('grass-cs/AABkmLdz5kx2oQnlBAi7kk9_3eTWj07fAdTVcBZFPzkgLrvnSJX6Ul0WIVmNHGMZFA6VpscQECZb825RMiWwDbJ08prW7uPTZTvI6qmokxCZ-ig0y3MjHe13eH_17uDMSS9xz7Cu8518')
    ]
  },
  {
    id: 14,
    name: 'Sasvata Spaces',
    badge: 'Standard',
    rating: 5.0,
    area: 'Subhanpura',
    location: 'Ellora Park, Subhanpura, Vadodara',
    address: '42/262, Ellora Park Rd, Odhavpura, Ellora Park, Subhanpura, Vadodara, Gujarat',
    // 42/262, Ellora Park Rd, Odhavpura, Ellora Park, Subhanpura · 2 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7937795169992844414'),
    images: [
      G('grass-cs/AABkmLfbXM0HgSedUoujXhCeoBiqKcYKENaBNoVl9BK2TJ08dVona_2SorC19MbevzALq2cuif25i3TobrFywo7ysX4c1UXUpFC_dSWQW6KVZoTR5R5Mh_0qjJ6SvSXu40Ods5SjJNNYhzqUUMg'),
      G('grass-cs/AABkmLf9A_ixWcNueE_LluT19ESzSz1vhxK1AEu6xzQ-Bxsjaj37nIdCaH3zYMmEs2p5AJQ_j9S27ujTkw79ulNgCwV-zHrdRQejwTyhEqxqvxVRbMFOEsD0qSx1hZ3hS1sl837gT3xWw6_L45c'),
      G('grass-cs/AABkmLdpwow9bMZpJ-l6rgWXVD6NJBuwoiWXflIvbuVM2PcHtCVnYTC-TQECDiB5ZjRYvBkzmUVH4imWLCbjB6X4hLXb2sMMzLx8Ubg1D2b_U62_x9rrwDMPZXqdEPI5soJ-B8qlsZkpqKJGBw2K'),
      G('grass-cs/AABkmLfvFcvxgvZQWicEt0gAnuabLLiTjwu8K6GLDk21zhnPCCQ29yPns_kyFG9oVKbaXvvcXzE5lTfGsMdef6e4pVqjLUJrHXnHqgn1yIHUgB59PDonI7ifBEq5tkw0UcSRaKk3aScsE3kFwbsA'),
      G('grass-cs/AABkmLeLe9NZXDg4KTH-VzfA0cMM3jtHD14IYJXxRvmy0CZaEcOEcVnZLcA9K7zaOMsmtuQPNk8BJTWnnefCxae1u8z7z7yxkTEfqZ0ys6hDS5dkfPrKuGo8gFXrr_A467REiqa-KybPXKcNKyQ'),
      G('grass-cs/AABkmLfM3yJLwEHGAfd7DKnfKh7JUfu7hiGc8xYJ26XE-RsIncVj557WOP8-S2NJjcsQ96ilZSmclgsHb5dXCk3-lDQsVelbDAaSq8hJtFDbYFvhjMXe_XlvHfsPyI4mdA8B6Cm4RWJrbXKT9eHb'),
      G('grass-cs/AABkmLfWY8v7TdiOhv97lo0rFfEWyayhnbH1ZzYXpjEXEQ0Q_MTEw_TNTRONKDxPgFLlp8g53gOwQPUlbafaObijZU2oxjbwVC4DptJ5g51avvWnw4fM6inKNQs8YkE7AkclzzH-13ulvNBcmPsu')
    ]
  },

  // ───────────── Gorwa ─────────────
  {
    id: 15,
    name: 'Incuspaze – Alembic City',
    badge: 'Premium',
    rating: 4.4,
    area: 'Gorwa',
    location: 'Alembic City, Gorwa, Vadodara',
    address: '3rd Floor, 1965 Alembic City, Alembic Rd, Gorwa, 390003, Vadodara, Gujarat',
    // 3rd Floor, 1965 Alembic City, Alembic Rd, Gorwa, 390003 · 209 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1171575697654550698'),
    images: [
      G('grass-cs/AABkmLcVOBnX0npp8p5MD0xrprTwWhT89Veg5jtmFzKhV1yDQRsi2_rjxEINnL4v9m9hkDEgbv-lPvSnbJhRN8ZxCPKanC0OVZl_qzU14KKZF2OozgFgipfT9XCLNDWGcVsu_ZvWte98qQ'),
      G('grass-cs/AABkmLdMOM69auxPeKiafGN_XJfj7c5FjU27aySoKhTV3BsCOCS6F0L0kMDrsy3EAwABvaExrt6ZyUPoldO7PHVBbG0D-MPAfytBD7WYmUOfDk9flgRxG0Bv8bXFuJIkcyp1llbq52cnqg'),
      G('grass-cs/AABkmLezfvaacjWX-YTCzy5zItXtNuRF0v7s5wI54pF5lujZVn3d62dAfX10z6vd1qVyo1sP8JOhluaDTz9wQe-UjTd0Fnx5eHOy-5sGiTKe7athb0OKVHdak8to9RwnjriSPBxQkDnORA'),
      G('grass-cs/AABkmLfnZuQlkEXuo3BZREZgpqYve0VrWKqk3EoSsXU0tZCkiO7Hk1el8j4W5ObZRh-gAoOmLoK1ABHM47HCrEYL7iU26vRpu2JnWzWDKttcRZr7FrJ10LA3mlxVLCIM7cQVOq8TlbMo'),
      G('grass-cs/AABkmLfr0F-ONz5ISbjAZzYOwWzKNrTr1B8DIL9smy5CjRxA6ZkyVRcDGSvrXrdrNQIgX3h6TGOgUm1iODcdEcyYhe-MQs45TLFrUh3ALZaxL9uNhk-pm2HRjZlsM0LescuXH7HdKoMjxw'),
      G('grass-cs/AABkmLeTcwLm6fs7AjD-AyeEkd5wdReoQXdqwHsNPBVN5vxJBFBpsv1emDJu_AKwn86SaVVJCVdqpwUDQFuRWDfep4UlzPoESVCB4wmWuQ7QLcJRkMuobkA_GWTLk_sjzv0Z3IdVTnsy'),
      G('grass-cs/AABkmLe3JuqttpxAJaLqxAS8yfzp_woqUmsordr8gSppJ3JTAc7s3mSh7qpHEBGH_Kj9pPZPnSiIoewm_i5-XXOW8TDeyCdxBE4ZqlUbD3cp6Pq-P3RA8hL6XfCfxXFTxOY7jrnrYFYy'),
      G('grass-cs/AABkmLf4ZEQI-AGHxmnG_QssL4EJPfQcv5yluPCbM7i53qdsi0WgfdFcaEXmC0OQnDVIfslwt9FUGToeJ3l6mOCXZ2_-P1kGKcO0pyle40BXPxFy7AbAwE4zdQk1QLcGh5ONFayIwnu0'),
      G('grass-cs/AABkmLc3UUjb83ByWiqXnJ7cmy--g64SAgqVvHyqMpeADjQ47rAbLEykupCbRZ0tAHybLbfDjWbJLteiDiie7vjzubpXpy-2GFilWxfzy1ou7vGJmwV5YtcH3CZY-4JTrvPR6x7LVn71'),
      G('grass-cs/AABkmLf2lFZVxCFaqF8LYU6AX61EUIV9j7kTgP6xLuPReZOVfYAsjq6fQR9Eu5tX-GgQgoiYUb_C5k1ypqbNE6tkxiOif2MtbGPzMRGWDErdIazdhJl6fHuECL1jfNKYTX6bm5HtIRD7HQ')
    ]
  },

  // ───────────── Jetalpur / Anand Nagar ─────────────
  {
    id: 16,
    name: 'Elevate Workspaces',
    badge: 'Standard',
    rating: 5.0,
    area: 'Jetalpur',
    location: 'Anand Nagar, Jetalpur, Vadodara',
    address: '1003, 10th Floor, One Indiabulls Park, near Swami Vivekananda Railway Over Bridge, Anand Nagar, Jetalpur, Vadodara, Gujarat',
    // 1003, 10th Floor, One Indiabulls Park, near Swami Vivekananda Railway Over Bridge, Anand Nagar, Jetalpur · 1 Google review · only one photo published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17645824338879696507'),
    images: [
      G('grass-cs/AABkmLc2MUdNb3w-LqAWpqFqAawckbGBuvfbdAa1STJkT-ecIG4UXwHnfHyz3CbEhZwAfHAVuaX-K4Im988De2VfNrwzO1nQuyz4Wd0cEa5dScjdCCykj8ryMqfmrvBTWW3cPlSutSxBryQ-vB5j')
    ]
  },
  {
    id: 17,
    name: 'Second Office',
    badge: 'New',
    rating: null,
    area: 'Jetalpur',
    location: 'Anand Nagar, Jetalpur, Vadodara',
    address: 'A-603, Samanvay Sonorous, near Swami Vivekananda Railway Over Bridge, Jetalpur Rd, Anand Nagar, Vadodara, Gujarat',
    // A-603, Samanvay Sonorous, near Swami Vivekananda Railway Over Bridge, Jetalpur Rd, Anand Nagar · no reviews yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5540353224980101993'),
    images: [
      G('grass-cs/AABkmLenYxmD-Phtm899edyPGf8dFRid7Up-Vyg_u2Bj4KTt0diQboyzvH0yUzqsSytY_410ud-jlvAKQYfqE6vwoJ_ZAsehBJ1qYyb4r_6-5L5MZo58tOXSdMqCm13wYuzjzKcsnYbabfIwGNk'),
      G('grass-cs/AABkmLdaKXCe-Dg8rjef0mDfz0JLe5Jayw3Y33R-Uyji7St0SIYxEGg0yf7Wk31tSK7p7frQRmiXbItYjvk22NU3xa6DVsNYpGCuJKv5I1bKRKQ9bk1FNu3T9wimSZKZIs1N0MxpMQ3aHueMuzze'),
      G('grass-cs/AABkmLfmu_6BkaL1YUcwDCtVzt7je7nRaikPa28z9yc5wHnKXjTOoSbfaBZea-39s4TWjIUCA8KOe5B_XnUrtQLXBwwqVxEDPhX6OHQpW_t0FHoMqvQyGCLrew511Lz86s8CqoonPdGiwNhNT1GG'),
      G('grass-cs/AABkmLdrw49TwXHuTdCjqMv9pOQxyL82-c_3rvZdwbQr0ntI3al96TmQzIGiAzU1jbTywN0h-hpI7eTAyZCp6a2vsWZiH3fZ_Ue3sdnxjxq2ZNZdI1d3KoL5baH5r-qO6f1jo-tDeQ9iOiS7Y-WC')
    ]
  },

  // ───────────── Tandalja / Vasna Road ─────────────
  {
    id: 18,
    name: 'iSpaceHub',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Tandalja',
    location: 'Vasna Road, Tandalja, Vadodara',
    address: '601–603, 6th Floor, Aries Galleria, Vasna Rd, near Cafe Coffee Day, Tandalja, 390015, Vadodara, Gujarat',
    // 601–603, 6th Floor, Aries Galleria, Vasna Rd, near Cafe Coffee Day, Tandalja, 390015 · 137 Google reviews
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('18444559121784419793'),
    images: [
      G('grass-cs/AABkmLc2mVoIi_q3773754BJCxoY9Bgt9zCJLMZ4E_QOtUJMgxXYT0jjQ7P1pTUaAmi2WahRFp-WCib3XbtCisUS5KvWyp_MLaOa8tXDZoDsHDnpLtv4o6khews2rqc5ZbCsxz-juHLJB_gy_5Ab'),
      G('grass-cs/AABkmLdpTMnNSeK6WJZyyEFYV1W6baQkNzEvIcLksLBCbp0myXZ_tdEC_cWZddvRJlHgF84qCGpSX-6jqMj2a7w3G7Bb16UXpz2ZF26r2bpD9hGVudTXQlelFE_Q76PzUoEg9x9mRoPt'),
      G('grass-cs/AABkmLfurLS5-6rcxXbw4aoRpFF0gF8AyGcMpeFRScfzEieddeTQaxd4sEcAim6Wrd9KP_gS2ygh5medowIU6pPD9wj_gtBek9Fi4v-mjyo-PcGIPGWRhW2qRPwUsE9CXn4sq4vwfOTwVC6Ne6c'),
      G('grass-cs/AABkmLdUW-AvlYBDPvwWcwF1cICRfzpClGnKMvmwGCwbcBqKQ7_NbX0ubwtKdYRR37dkuJaf9KKmkyCU2RKmzDXX36VgGXSazZnrCha3_n5VOBNIYzaDyfS9puICGjESwN8_s7LbjSHLZQ'),
      G('grass-cs/AABkmLfSoEDheG5sn-IuPWQ_78I-jhn2bSl_G2MG4kC8wYpAimKez9kY_fl3QSgN1NeoW03Kd55Pt2DKJrX5pe3g0Q26DioPLsv8H8bsf_vtxBqVynkUpEFn3oVqWH_xyMkiaH13jaVbTw'),
      G('grass-cs/AABkmLcocABPH-g5pQ7OmK9YjLPGYC1uxuqVnVDmflL7ws-MKBi3Qd_oqfAEx3uuF4gD3fl1GqKp_2urFANFUWXN4SWuIeuLCSYuiCvUty5PRRxNCKGdA3uXA7x2N31V3mdFwBK4L36qhQvLQfg'),
      G('grass-cs/AABkmLc8n92xiuSIqptu0rjqBbhnYkIkfyjJGFgZNAa17aVGDex2bZAOSB64YCyWljLL_ikIzIhiPOP8gI7i2DBkW-BtYlKlki2_4oKKSxlgr3YSG-xs4OGBPaC_Ltnxwm67qBHO8OtD5LLPkYo'),
      G('grass-cs/AABkmLdiUbxiYmPFAKpTHnUcsXpSD2l3bJBl0gOLE2b5uKP9rfggsV76NRPUD41wuIsKRbw145PqkgqNumkODTGUEqPzUebdrYL-p5Kjw2-abnrrcG8TF62SGNjUnM2ftPrdD2pJoOop'),
      G('grass-cs/AABkmLdneauT0i6eUwNF7TcCKW_1dUCtkFUTAkeaajYMo2hi3z9InzAaO5o4bofcHVqvk2c3-iTMtX0BtI806TXwwj3Z1jDCZWnRbulYMlULuiRCUaSgoRw_84u-znw4OHFtK1O5w0pSariiQJAz'),
      G('grass-cs/AABkmLcsCZ6Rfn6nT1CkLOVt36V5iQYWnqKBKN7FKVQvjHZapbtEFvBxa1uqKEDTKM8KVfqFz_91tP3DQI4AbfnB7sJ1NLvjzp8OOte19KT21JqjeLg6u-B5w47IGALn2-mw9G7lcIcDXmk3LLE')
    ]
  },

  // ───────────── Karelibaug ─────────────
  {
    id: 19,
    name: 'Vadodara Startup Studio',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Karelibaug',
    location: 'VIP Road, Karelibaug, Vadodara',
    address: 'Above Diva Hospital, near Amitnagar Circle, VIP Rd, Karelibaug, Vadodara, Gujarat',
    // Above Diva Hospital, near Amitnagar Circle, VIP Rd, Karelibaug · 28 Google reviews
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1934210710118758472'),
    images: [
      G('grass-cs/AABkmLcyWyg1GwIsWDlHr311vzEIes8ThzqYMuYkMdneoaLPwc1QuvryFXiiasvBi3mO48vANx0-rBSm0T9Yv9WSnxHADMEgHBUO2VRsZNpgdKpTvc8Da-ZPR2O6Zev6GdlCqNCxPAH97g'),
      G('grass-cs/AABkmLdLnugBvL2icAvK0yqblvngNodIyGVijfCTxLBA-2VNQpE5W0NXVaLgzh4ktp0918658AR2BBLYV17o54Bm2N5RnviuOvNUp6fiBbIR4b6M3Pxel-Ue8gFsYgunhkEbf427Hohn2w'),
      G('grass-cs/AABkmLeFYpIPOFUjOgFWmAbVazbc5z5qv4q6AzrpcZfXOdnCb6CaRCd-wlcRpDgFhq0-XJaUGOFwnPX_Z1-B0R5JKidopyyIMExtVsq5n3wd9uEHURGJ5CWLhXiYJzUGVfu66IMJFgJ1'),
      G('grass-cs/AABkmLdnyI02S7fKZj7ps4rr2Dw8YDdTlf_Akn_RRjB5EZRuVlwL1VezIIap5SsaQpsL5cFe7Wgouu06SY7-zfGHTh-7wfN6gECZHsK4EWKsqjb1Db2s7__V_byfwJAnL056laOdgjLi'),
      G('grass-cs/AABkmLdAAtdRMSnniq4HXkGyZGzrdDmwGu5LEHwQMiydvDMbukieGjmoh-TQpB-ikk7dE_K5k41u88d4PSLKaVYwhD86RvKKGB2kw-1goBrm63dYnK-QsbiwQnjT_imqR0VRTPUQwmmi9A'),
      G('grass-cs/AABkmLd6NHOXdPXWTDZlI1Wl5nyvJx8_QaNYuke-frlFBee1sx8Ukv5JlGyl6Be9xgkolRZZdSASzMc2YcEoXj-PxieqOLZmiChdvvUTNl5mk1NiuQT9_ardg7ZM8tis7uvmjBsQB3w'),
      G('grass-cs/AABkmLeLo19csuDcvUX8sgM99DOhbANV6hf4-HIR4wY6BFCSkHEmo1-1S3ASDQzBBsquFL9bESn4JirfijaCLbobwAturKlfX0KiAm_HlakN6vx9dJMPOJCpEEo7VQ6Ul1Cd7Zd3gR_H')
    ]
  },
  {
    id: 20,
    name: 'LMP Co-working Lounge',
    badge: 'Popular',
    rating: 4.8,
    area: 'Karelibaug',
    location: 'Karelibaug, Vadodara',
    address: '3rd Floor, B Wing, Sun Enclave, opp. Jalaram Mandir, Pratiksha Society, Karelibaug, Vadodara, Gujarat',
    // 3rd Floor, B Wing, Sun Enclave, opp. Jalaram Mandir, Pratiksha Society, Karelibaug · 49 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('11440960376580070705'),
    images: [
      G('grass-cs/AABkmLdotLzMZHYDm4Yn0AQlW89VCywcrLSzBXrAFOVDirB3dKkFgtH5neJoOgoC_6TrRUwLKKuOWl516XxcRGdY2aKoNNe3DRge8lBfHefeHPBBR6p6jjizgWpHRCGfVbIZcJhdEXF1n9iA0xtc'),
      G('grass-cs/AABkmLfE25KngkjrKwyuzR3Hw4zAtsMrAwSbKE0vP0wdauAmZjUZInUjuxc6miBoF_Kec5Hwet3SHc0XDR6IiM-T_L_PvzLnWYPGTKN-f8vEeKaregvksyZtVZhdQ4Wy3wYBBHsHKI7x9x087L2f'),
      G('grass-cs/AABkmLdGvw_-o6sY2JyzrgnuD-nbfZjkrEUYdQprUfAkJR4KaBpOuMpsQU_GkaWvmheTFKampDnWJHAe5Tki_enjSlpn7RhhlOgVrpUTj9_iGMAkVvG-TtYrmO2F47ReHZ305eQ5JCWdmuAYHLWG'),
      G('grass-cs/AABkmLd5IwOpmFGAkrUEW2caRKQdvxxXsz5JYqo4MTim1bYQqrH-nByTQnBTV40-89Xukfwxeo4WoTgEMEQFWLHhfWtxj-QdNHpn_8LRjPNYagvLSH1rQAXi9j1nhY6Mnhi4LLVUR5Rv_NhYH_np'),
      G('grass-cs/AABkmLeB7L6tSBxJenaniytjOayv3T8ntmAeHIJJxoQqz5S4vU82fR4TUYzRf_T3odK6aGwJ59mY-Yef4B8nCr1fEDvH5mDL_1SvnhEJC5w20iKwNpRhVCZGJiuCzeY1GdgPspI6OBddNv8H9fti'),
      G('grass-cs/AABkmLebKMa8HF4dVfe4g6mVXP6M20P1CFJyYAnPME0Vro-tWw0d1yOi84Elwmy7ao1I99SOMHHoTumoSeNRfPhlRXNS7CwmiIEF18GT34LS8BmEOKm7FkAalqayCzeFPqHJSsd36ST8wcxi4JJM'),
      G('grass-cs/AABkmLdeJff12P0DdDWPxkSBnEmlATIdGmqL09TkYrZr2aUjv4gFo8AUvOqRGMd2giUBqbWdfg3Y5BWvBLRWMBXkmuvaMsoCuwydfqJCcW1IA6kOgSouW_kYigqmNCWONXaa9gL4d_U4_I8cNUX9'),
      G('grass-cs/AABkmLe6Ij40MX-vgfoJzGR2yOc1NIwNhnOPs57K5_KZmh0pXXDPnGj6Jwhy0fEr_x5uy-tnXd6kHpMUxvamQdZYVY9TDzmNOCFZzlVukAEMj0lg1VwaySXxhiFBCM6cPwoLqSosU9NGi650Ozv9'),
      G('grass-cs/AABkmLcy27SvIq7e8Wcd6NJ3FtpWRT7-OFyrdog4oPBgcNH6_5Vak03wMOBFKj5Lmd8wAkakqBZ4giWNCrDnMSZ1opASnT5nsrcBAPXNq0TCc5JL1zAGECbhU3oM4Sq14BIxXz2s7oSIw6JkYq4U'),
      G('grass-cs/AABkmLfbEpiQHWGSx-Mh0gGASKCya78H7GC1OQCpJZ7RiQbcap1RFMvRdX_ICXkBJQ4c3MrJHWv2sK96DVs2vUHsciB5qL7j8igOkyfUiWddixAdjJHdjjKrWFbFUMvTKLy977TDiPoCl76x3vfu')
    ]
  },

  // ───────────── Manjalpur ─────────────
  {
    id: 21,
    name: 'FLUiD Coworking',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Manjalpur',
    location: 'Manjalpur, Vadodara',
    address: 'Office 415, 4th Floor, Darshnam Hyde Park, near Bahubali Chowk, Shakti Nagar, Manjalpur, Vadodara, Gujarat',
    // Office 415, 4th Floor, Darshnam Hyde Park, near Bahubali Chowk, Shakti Nagar, Manjalpur · 18 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5889493701110720357'),
    images: [
      G('grass-cs/AABkmLf9nOsuOC1T41GOSOpD4HYkTjAUuTmqxT6qEh9x4mfpjYiNbmcl3SA7a8Q9Rla37-r8PlgAvRGK8S-L3p2dQXmz6HiRi_iQyeX3COTlXTqC2gVAcVVq4hZQ1oWr7oVEZGF7PWjJbQXSD28'),
      G('grass-cs/AABkmLfvA-ZepfKjqK1SzzLFfFrSmhBVV_vnrKjWqkZ0YPXXYIHDdRKzgnxYt0i81MpCfkQ83s-b68frkhicDXdRELXsCqtc6Elg_3YUumTSeqpgBMzRrZZFZ7TgqgbWvpYPDubyhPZQ23apnWiW'),
      G('grass-cs/AABkmLfkps4HW4yqD_hfaVoaIVkCpsPbplAtSYhStOig9DKlcglZMvGvG7RUsBi6R_HokdUZFrRcC1bE59Zzrw1qvq06NeMLWQzA6_4v5bijvlu_6sch7adGq5H_rChY_evG7gMn5O1pGE7Swzo'),
      G('grass-cs/AABkmLf3DS4yZMTO0kuFpSfl6cSOdM7ZbMNIxe_ZBr2N_WBv1H6APp3rSoBwVOOK63AVukVf9iAgIlDu8NHGowr0zyYciPy-4eGAQkMXsvlUTL4f6H6UOWquxDrXKiD4Viy2XF3QGpQ0TwRZSvSN'),
      G('grass-cs/AABkmLd7Wcal6tBUccW1UL7nmM6Ym3q3vFpJvysiNL3YaDy_3aLK2jrzt8pVaNIsLhN8sz56GW9b0bxUq61N1iPO5q5xdtMeD9WhV2lUAkSFB1iaumfjUYUnAeVjGSvUpScfQmyeV34MvVpEtPvf'),
      G('grass-cs/AABkmLf_jp-h-Nn17DusRP2G7LTXBGn6L6uCxACdVDSdMfivSgEkgHlTtk7otQZxAB7zo8Igwo76mJLSn64XCtW5W9S6F5tpn515GQ6M9pow-jlaK604NQYakRbB9YTF9xtHIBEn9STW6VH-2Ed5'),
      G('grass-cs/AABkmLfzNkHUJoI1wPuMJkTZtx3S7NvyuLPJzpui5RrDyRKdnGhaPYRduZfarTegT9qYPh3qa_kGu7o0v6PSJptVGdvraRohYJ68VW4sTKY-4zVhg_gE-f6p0SiH_8mIo9HMtcObxmVQuCJ7JGc')
    ]
  },

  // ───────────── Sevasi ─────────────
  {
    id: 22,
    name: 'Kahaani Coworking Space',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Sevasi',
    location: 'Sevasi, Vadodara',
    address: '501–502, Raama Even, near Sevasi cross road, Vadodara, Gujarat',
    // 501–502, Raama Even, near Sevasi cross road · 19 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1670055481996903435'),
    images: [
      G('grass-cs/AABkmLdeDvy4_o9r1Fm29L_j1RG9vzpbYfAWa5lpVXbT-_lNUbWyBz1TS7jDA8cdQUb3RLxXO3hPfDxESq4qDr9FC1f8TohxERd4TvFlSgKt7rB4yJlIEmpEQaDERZObha-7Srk42uuzFIHRJPaH'),
      G('grass-cs/AABkmLd1pwx50hFPEVYVTVtVFmci5uus2YKqQO57WNQVr_M7HSpwWGcd4XbxEkEITnpt11DAlX6zb7ZZUjhD_pFuKBHxjnWDDv64vXshXuwqgT6-GhEtgcCBk3y_JMuNxCte2vL7M5bLrTy-zbvF'),
      G('grass-cs/AABkmLc7lOy74ANc58AS4hwn-388zeH9nTwH_-461KWZ_DJZCPosjABIaTsKHbFwaEFApxZ06-EdKWpuWkucYTuHu5nCdqOJm_s42bLJkCvXpOYXhxdJteiH7g8hIXP2Kvae3A8YhZBNw63cMu-5'),
      G('grass-cs/AABkmLdB6R9gtpe4oCX1Oh0JOcbA_Vp3MaK6ccp2LoiRY9EFols0AWUJehIDnUZCQYgsg8Oh4kw3mBy22tittz6MReuz5IK0vjYeqKAXwCfqqY7wIK5M0lM65D7mutV6bGQCs7pSAfI7_pIip-s'),
      G('grass-cs/AABkmLfSTNr4zybS6Zj4ielh7g4G4Kd6MY7EEH-LlV_1a1ngaIoiaNaCtl5RI3Iq1Rad0ULvN943SrOnZsTeI3U19lms_MvaypHD1_inLJNpetGJblJlywg9xTeDPMhxAhRYfpPgVVUegCuXGjuq'),
      G('grass-cs/AABkmLdPuplXhEoBh5YKOx4miYcYqeWq2QXMn8cwWqV637nK4BqkLG3QiFmJ04Nuo-IGgFdcEImHNe04wCTMkHFAHRyMVHpbHU3_H80E5WP3GFZZS_5eP_u2jvVnMGxFN075FN2cHIeFegNVMNM_'),
      G('grass-cs/AABkmLe4hrUeTHz_hIrA8VOi59nP47lWHSWrt5MMGYtpHqzoVPUBoLNl3R6NZnoNDGomC_7SxwJ5jyWfHQFI9IOPYOu4pfN2gdjiSiPnPqVYrY7dMrOrsRwx91KGqS5PMVQrxa_z0Kxp0H1bnJwm')
    ]
  },

  // ───────────── Mandvi ─────────────
  {
    id: 23,
    name: 'P3 Workspaces',
    badge: 'Budget',
    rating: 4.9,
    area: 'Mandvi',
    location: 'Mandvi, Vadodara',
    address: '2nd Floor, Nazar Baug Palace, 2066 Mandvi Circle, opp. Jamnabai Hospital, Vadodara, Gujarat',
    // 2nd Floor, Nazar Baug Palace, 2066 Mandvi Circle, opp. Jamnabai Hospital · 11 Google reviews
    price: '₹5,000',
    period: '/ Month',
    priceFormatted: '₹5,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15252119197116314521'),
    images: [
      G('grass-cs/AABkmLeCJzZzc5WMjujAtUHDIHnWSOC7DaRbNOt8tP-1jJq4pe04kOQyekfjrEyqn-pmmRbygsaLoPS4fItt6XzSHdVuBFE2XjoCM4TVjCVUzxjgIyhFuNXB1BkAe7z_yRJMwJxVl5nlEIHntA8J'),
      G('grass-cs/AABkmLc4OpS-pLXTORdEPJqCaae1_DA3Pl3LDAVgybaLVrvzBifW7xQm4gZMJS_ThGepYT4cTbaGlvzOrfKG3v89UGscGuJF0YI5oaxcnlqFikcenNkPn9pn-fQ7XDSy76pt-SBsC1fkT-A1brwP'),
      G('grass-cs/AABkmLd7UQe1bIcPWoYADZ6D-rnWjFvqR0WaKPRrEVHLaAWp3ZGhlxfOWNnMPe7cZ6TlY75-nUh-tY6q446sIYo_FuJIoBBvuLQg5d5w8VRrz4lWc08SCb-SrF-2nm8a9rEb8nnXqGyHtqXt4Y30'),
      G('grass-cs/AABkmLfdZ5Y1VLFu_0Cas36jp-rfUl5qs0VaKV6vfmzP8aWQ_kKwqyo7nXFLxQRyDk309MwlfpmrLM7-sEjV9rj3G2JOKvlemqWlEMVX_Hpw2FyXCuaBukalPm1x_zDgFjKBRWg1MNN_MmNUjtW3'),
      G('grass-cs/AABkmLeo8fHEYNc72ih4x7dKZyd6ZlBXWFCCTGp_QMFiUg-locBM5rWKLpdvyh1XQH_nFqdnUjXSbk6V2oxFtqQ8gS0funRfVwxNFU_uqkpQbKtgms2P3lgO2-dmqxNlhffvqhL-QzFeosEQf-M6'),
      G('grass-cs/AABkmLds-vsuARtzH3wEfP10XvluIAZc-EzWNSPLgzTHgNKMuXLFMQCTYpwBrhsirq3kpmaaT560FO2_-8PWlPt4F6zdsSS99Tilj-tz17sNIE9DvyTxfO_9yDnKERfP1j8q7AoDBmuGTWXohzJJ'),
      G('grass-cs/AABkmLccQdbRi7-1mj5eihFyC2fBRP-YkUgM4RVaaU0GjoeKkgKKuQAlVO8KIwto7ZbsbguPogDlu3vJbmxtRZrEFCGjgmWEQvk8OQhvAG_moqr8uQWSFZSLnDNhUu67cqgKqyD_-E_VLcKT0TrO'),
      G('grass-cs/AABkmLcQo6DQ-OnR0V2hbFtlyyXkmeMN0O0oVzyR45VwTwqB0x4fSi-q-FeTSLEy0yN9E1gKh27jKQ-pQT71JvIeh6x26DOgWFL8av_L-1lYZM8kxehxJT8Ib8BlGv1W2r6TxaF4Knm6lHP8hXg')
    ]
  },

  // ───────────── Nizampura ─────────────
  {
    id: 24,
    name: 'The Workspace',
    badge: 'Standard',
    rating: 5.0,
    area: 'Nizampura',
    location: 'Nizampura, Vadodara',
    address: '310, Aditviya Complex, Passport Office Complex, above HDFC Bank, Nizampura Char Rasta, 390002, Vadodara, Gujarat',
    // 310, Aditviya Complex, Passport Office Complex, above HDFC Bank, Nizampura Char Rasta, 390002 · 2 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8755340376685551560'),
    images: [
      G('grass-cs/AABkmLfUn9hanydxVoINMBR55tabjpHdGCSPcEmfpI31JQHGFMfTMY5Vaye9_rkbhQi3KWyxtRCV2oy1HcXLjmWCSsralZgtQzuDKVQDYbJePQkrh0flFbsP8Jrd-zzmJ9xfAOiXsnbL'),
      G('grass-cs/AABkmLdYLBjvANE15UrjXsC9momFGm9wn1kqPCJGtafQRRbCLMPmoYk3iU32NOsPpo_qNSSLqufb1UqoN1moQp_YnFfOBYVCxtlPwbZQ3Oarkedw1YYUxghs94Os-lJqTsuc_WS9M95d'),
      G('grass-cs/AABkmLe949lRblAlS8YFlD_mAydriRjVx4EVcCBj7UEITXn1OhwjQJucQHsge2j7W57U5axSi8i0IrplfpvVTQiiPkwZDrS06XRHh-sp-VHO0LaoV3ZeiX_yvdd-20Ai6GgGCyT5NS7F'),
      G('grass-cs/AABkmLfRGSNRAiPc2NOqZmfT8uhdYHpdoOi19SBCm3t9iJSxB2etTvtBDhACpiRohKv_hmmvGabJQnV6ZRU9hp9qO_khIprdgvpjujk1HLxpOBt_s00IfWj8uI2KfmYQO_Zlf3Qa0LTvJA'),
      G('grass-cs/AABkmLftTk22BpL39TAUY-_wbSzNvioIG8RUCXvkYj8JpBUwhHJetoE8XuIsIj3R9W7Y_wiH4u8lvGYir0PMX_91SlO28Wyb4KW1dlFWgCwRXngrwSvKzblyPuLl5Pf7q6vQb-0PLgGa')
    ]
  }
];

// Operating, but no genuine photos of the space published yet.
export const vadodaraCoworkingPendingPhotos = [
  {
    id: 25,
    name: 'Regus – The Baroda Crossway',
    badge: 'Premium',
    rating: null,
    area: 'Akota',
    location: 'Dandia Bazaar Road, Akota, Vadodara',
    // The Baroda Crossway, Jail Rd / Dandia Bazaar Rd, 390001 · no reviews · only generic Regus marketing images published
    price: '₹8,490',
    period: '/ Month',
    priceFormatted: '₹8,490 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5409527409170724547'),
    images: []
  },
  {
    id: 26,
    name: 'HQ – Elite Elegance',
    badge: 'Premium',
    rating: 5.0,
    area: 'Gotri',
    location: 'Gotri–Sevasi Road, Gotri, Vadodara',
    // 7th Floor, Elite Elegance, Gotri–Sevasi Rd, near Lotus Elite, Gotri, 390021 · 2 Google reviews · only generic HQ/Regus marketing images published
    price: '₹8,090',
    period: '/ Month',
    priceFormatted: '₹8,090 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('11794537108340521656'),
    images: []
  },
  {
    id: 27,
    name: 'The Address – Notus Pride IT Park',
    badge: 'New',
    rating: 5.0,
    area: 'Genda Circle',
    location: 'Sarabhai Campus, Genda Circle, Vadodara',
    // 5th Floor, Notus Pride IT Park, Sarabhai Campus, Genda Circle, Subhanpura · 1 Google review · no photos yet
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8925407476092520158'),
    images: []
  },
  {
    id: 28,
    name: 'WorkSphere',
    badge: 'New',
    rating: 5.0,
    area: 'Old Padra Road',
    location: 'Old Padra Road, Vadodara',
    // 2nd Floor, Shree Jal Building, 301 Old Padra Rd, opp. Collector's Office, near Malhar Point · 1 Google review · only logo graphics published
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3254288574602357391'),
    images: []
  },
  {
    id: 29,
    name: 'InfuseHQ Workspaces',
    badge: 'New',
    rating: 5.0,
    area: 'Karelibaug',
    location: 'Karelibaug, Vadodara',
    // 2nd Floor, Sandesh Bhavan, VUDA Circle, opp. Ratri Bazaar, Karelibaug · 1 Google review · no photos yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10499590118319384694'),
    images: []
  }
];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const vadodaraSpaces = vadodaraCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const vadodaraNeighborhoods = Object.entries(
  vadodaraSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const vadodaraOfficeCards = vadodaraSpaces.slice(0, 8);
export const moreVadodaraOfficeCards = vadodaraSpaces.slice(8, 16);
export const finalVadodaraOfficeCards = vadodaraSpaces.slice(16, 24);
export const featuredVadodaraOfficeCards = vadodaraSpaces.slice(24);

export const vadodaraAreas = vadodaraNeighborhoods;

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
// Vadodara Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allVadodaraOfficeCards = vadodaraSpaces;

export const getVadodaraOfficeCardById = (id) => findOfficeBySlug(allVadodaraOfficeCards, id, "vadodara");
export const getVadodaraOfficeSlug = (space) => officePath(allVadodaraOfficeCards, space, "vadodara");

// ============================================================================
// Top Coworking Locations in Vadodara (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topVadodaraCoworkingLocations = vadodaraNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: vadodaraSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

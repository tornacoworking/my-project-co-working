import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Varanasi, ordered area by area.
// Sources: Google Maps first (listing, rating, address, photos), then myHQ, Office Hub and Coworkingers
// for prices. Every photo belongs to that specific space and was
// checked visually: people, events, promo graphics, logos-only shots and duplicates were removed.
// Closed listings, study halls and non-coworking businesses are excluded. Checked 12 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/${id}=w1200-h800-k-no`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const varanasiCoworking = [
  // ───────────── Sigra ─────────────
  {
    id: 1,
    name: 'VHV Coworks',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Sigra',
    location: 'Sigra, Varanasi',
    address: '5th Floor, VHV Tower, near Sajan Cinema, Sigra, 221010, Varanasi, Uttar Pradesh',
    // 5th Floor, VHV Tower, near Sajan Cinema, Sigra, 221010 · 18 Google reviews · vhvcoworks.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('12053890290818599404'),
    images: [
      G('grass-cs/AABkmLdRk6JwxuSJmdKKKLbRuHDqonv3Nvn7mqyFZdTlEnKdWXtgKAgB_6AUH9DrHUHuAtttINGzhX6_2sI3au_T6sO4zYOtfNJWBUzA5b2fK0LVTIOjS689oZTacWPwuz7kgrcSoqpj-KKZDS-y'),
      G('grass-cs/AABkmLeHP-Wx7h3JliVvSxsj5YiAxVmFuR3phlJNwg9DHlF-56la-37mN0hAKIlJNgKhMrYHVe79HfesTuMONrXXizdpirC9YeJgK8T8MuwtUBgvLzw54kXiRnPkik_zhZD-GmKzptWl'),
      G('grass-cs/AABkmLenggmVv97e4T3EUmEXK_XDWPUMuUs8UddBCC4bfW8Ji7jCDijZ7nqG_uD9F86Pe3RvQV8vWZTT7TWTs9YMNSP1S5u_PQlSZcINW2Zkz2wd46Pteb_vMEkq6b_tjcJczYduHjv2Cl4n5vTh'),
      G('grass-cs/AABkmLfPDF43ECNBFNmee_zGDPGukkYFlMJ9-voahvEn2xuqdPKzV7dXDz5uJNpNDaFikKH1Zz6qcf3ZETxgDadOWoW43akYRvdjRtx13IbsSoP51YDfs19-7elCx45dciUgqfJVXRs6Kg'),
      G('grass-cs/AABkmLcVUI6Cl2ETH25_1yLDOtyDwLwp9zBWA3hzsZtAfMc3ehNTv-KbMRfONtbsSfMImWU7mkiaa415c_VmJtRL40k4LHKx-_qAahZOWgv6NU4PtIlODKSJ2NXR8g77Oh8-eQucFs_weQ'),
      G('grass-cs/AABkmLdekMJrZgRL9OtXCSU3mad7swdkzz4zTY-tfXqrBfOsl2VgXEeqsTh_BdKBORORBVToEXI4x1pZpDRnu7P5_8XyZyt4rZKRxuZWXjdrcj0V8StA-RmpcytSdXZaqb3jIqag-F3XDsb9YBYD'),
      G('grass-cs/AABkmLeXFBgVfkiN79-3XQ-tSEu01YvVCgEecZLAXuboDV65U1X5V6f2ICkKWXuektDZpGDn1ZkdFnrl8C2_T5I7A7uUjjKcx_M0QID72OoAMcLSN-_fBhHtuKNKDZZtdQw9R5mcxbY3'),
      G('grass-cs/AABkmLfxD9Orlf0vIj6nQMwzdyoCfCxZtB4A2k-1r1qejBfJjnnVPlTAslYZ8yuZEg4LAfyQM_kaEH6xkluBTHxPUWcF7KzxmaZWJcHerhtzOpRQTMvxIGKkiH6v06a7Vp4RVFToTiQQdRmKmgb0'),
      G('grass-cs/AABkmLeTsWhcFKb11u-0yji5DxIpUeuCmer1aSV0qcHr5C57AdxE2nBK-QjYCO8NwUl2ftcZIDfFPGqqzOZpbXNGTMHuxhSGyxEs3SGlKm6s5j3wlQB51_tERsqyY3PlL2Q19Q6H6BJ2'),
      G('grass-cs/AABkmLeancsPGby5QsFWl65Sdkb-PE1b-bG0aZYLuXS6NdmF6OYLfU_skVyJXa-eTvR35tTTZ_rldhjNFTQ5tRjSfpP9vagp-PNTes8jv05Q6iKh_BdhB7GxJW8tHKHeurhliCYpwmiW')
    ]
  },
  {
    id: 2,
    name: 'MyBranch – Anant Complex',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sigra',
    location: 'Chhittupura, Sigra, Varanasi',
    address: '4th Floor, Anant Complex, Chhittupura, Sigra, 221010, Varanasi, Uttar Pradesh',
    // 4th Floor, Anant Complex, Chhittupura, Sigra, 221010 · 76 Google reviews
    price: '₹9,500',
    period: '/ Month',
    priceFormatted: '₹9,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17638873253738310757'),
    images: [
      G('grass-cs/AABkmLdLklWnGfUpGysVhSBysl8hL6z2B92cMjN7pf6eZHgxLuJi5ED833CK1VMINYvwJDd29rtS9BRpLP-B77m8aNDjq7vui82Oyag3yPy3SIsbRAEuJFhvJYiUGsvCqdCX3zoOyplsA84o_1Bp'),
      G('grass-cs/AABkmLelD70p3GmO8fsSVKEqvW3AZKQZQXwh3r5QjfHWK7Kv1wtRi6QR0o5s6ldThIywk5OktHTQdAD70TFe051LDVFJQWhGSl_gglaGET6U_RE2Ho3nT7LVqN4EaDPHGP7LO8kD54qVBwq_URg'),
      G('grass-cs/AABkmLcKgkgYRlyQcGoJhvcHRvlFWcGg_peS54UgS15tQ39RKs9DKDPLyI0VQfmTapAapn-_g9heXBswKThalgPb5wEkcXODpJzyZFwWYy3eE6CBcDQezhsxBLL-TRzP5s_2DQx14DuKVvJQvleG'),
      G('grass-cs/AABkmLcHMyfcc1k_2QfkqzWGrwDEMFONMjrZQDZj1TdBPqA6SmqHnjaGlvs3RvCwS8XC8UEl0edvda2F0mydzjJKAqoVa0sIF7FpCTi19SI97x4FGG5uCfCjhrkMuxFWWUbpLdqJnO2Jfno4a20M'),
      G('grass-cs/AABkmLcpGZkhyNh1ymUFbxdTveARoi_MPYcXwMPUYK_a5VWEyrVJ6vbE9Fn2RUF_es_KbRNPq3rgvqJYw2EtQOfCL8GUhB_7fn9zkH0iU7ioRTMoMDvnZ16EstnXXA7HYAJJY4V5bx4u5VhLWySV'),
      G('grass-cs/AABkmLfY7Hry7r_QGl6dLl9MfltV7FWsrcWZbikYRe0osEpLyRD_f7xrr2nQdOB5n-x_na0sBYj67-UeecAwAwnxqYBneKcffaxqOVT4MjRBjA4nXVzl31xIg1qocU_es7WEHFDyvTlhKfO9nQ5f'),
      G('grass-cs/AABkmLeNrl98YyEDgPJ14kgRDefB3tYTk2AFB1OT9R8JARWetoYM20xDUwyhWHyhv8OI_A3gI7eUoOQnHw3hEtyNe1YjE7BVkui4cfOIkF8Z1x6XzrPKKoAzlsZkL3FNV0WtZyIsV0yogivtFpY'),
      G('grass-cs/AABkmLe69QWhb581xS5LhLUEmKi4plDs2LLj5MH8CvzIRUou_0dlqZSZFfLBksGoaGjamFiIThPWhIgkJn9FiuDIswDejWWGa3G_Srked2zeCuvc6zKiO0eN1D6pf-YuMTbnk_lMfrlp')
    ]
  },
  {
    id: 3,
    name: 'U&I Co Working Studio',
    badge: 'Standard',
    rating: 4.6,
    area: 'Sigra',
    location: 'Shivpurwa, Sigra, Varanasi',
    address: 'D-64/98-A, Madhopur, Shivpurwa, Sigra, Varanasi, Uttar Pradesh',
    // D-64/98-A, Madhopur, Shivpurwa, Sigra · 37 Google reviews
    price: '₹6,300',
    period: '/ Month',
    priceFormatted: '₹6,300 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14591050923068069319'),
    images: [
      G('grass-cs/AABkmLdPHvGECfTX21osjbiE2sOzn0STBtAIcBBz6y2zrjazVVh5eL2EcXGlDsb78Vm9TwWVusoRTEjuJzIwc2l0HFRyJAt8kZqDIEEuzXGqViUIe51TzMWGGkEdJ_2eYlTh5yvVj1m5ZN7DZhQ'),
      G('grass-cs/AABkmLePMsf53wJkt_bGaUdpMJapZGiluZjky-4N-r2WbGk1mkgyNvhwV0eeT5rW9LAJXLg7_wP5RcmgoTBbArOnZw1sl4h26aq_jGEFuqU7BpHizJu2VAFsmhUWfeyWW65j2uf8EkFTKp1K3aMI'),
      G('grass-cs/AABkmLcHjTo7lgoeCaHsVTDVL_roGPYZFTMeqWSINofM-K16SP54cfa-xvrpOIT7TZeXgLl0M0VEQrLa2nTU7kUpVNVETuZqpmS3JTQk-ay9dlFkZ53zXXLriWhkhaczVJvZWqU29MPi0vP4PAyE'),
      G('grass-cs/AABkmLf-iUwmWAahVhcEXE8dt3gIOAcdqdG32uaHP87bkyanUL04rIS6jATYU5vWXpXUjzxDWXXkOeGNsBf8BYCfTAEQrPydwBp_Zzq3TOTcF8Eh7Q6rJb-uxGaKVdbLYrtI4s8GcAY7Gh7lVDgp'),
      G('grass-cs/AABkmLesrtGXzb7hpbpXyYMcq6bihhATTKDjPpOsWZ9woSHrlDer0MJ3F79J8HGcVtYtTTJi9qqY8vvWmrRYi4X7BKNwW-hcEUjLity9cl7TFbBHWvMXY_FBAsOg-NImJ1zQ_CwAS3IzbFOZO7ol'),
      G('grass-cs/AABkmLdV1QJh_Dmzzzjvw1YefSnA4b1dD545tk4eJz7_ONh9mFKCi3ltRd614bohyfqDEwpX7r67GUw2eQBxeFbMqtPn5fQ_RoQUdl8LW_mGAWgM2TdyJLoDOqfvZ2DzMqkB7sNV1_QBVdBfBQhb'),
      G('grass-cs/AABkmLd8ok-_uEknM0se2wKotogoMNLCJaU3JkQhQIu2atHxPdFa5nkbVki8eBKzqJHcVXVhTzNsJ8_GZYdtXtt0Bb_hLiO_phWNDvM7WppQaTKxufX9eeCZi_-QemCCzo__UsWFaw5O'),
      G('grass-cs/AABkmLffTLTtHLd0JRlmOADsCOoB561Fl3YpvsJVjluLoEgsx1rfG2ucNhq-w6ZQ45woT1bedxlg-osHWe7Zc8lzZla_OW6CQF_qY4Cid7cK0RPGz7kgrQoW0yVLMVYtkOGVtPvrop2plFbK7Sxf'),
      G('grass-cs/AABkmLfk0qJZOKNLcDxqbp_0ndTLceHxIKQlOuZvCCFBqQxZkBVQKJ205qjB3D4PT6Ie57kyO90Z4qkzAftxii5t_r4JHCIvlR6_0K08kORFKSG2x00ndlft3HPlXf_WxsKBRz6Rd34PZaNRxUhh'),
      G('grass-cs/AABkmLeMqUQuF_lEZ8jcNJJJlnXXeh534_www8A7NXYRmGc_4EI2GCPBqVvcLBd0NtfrUblnFJG1S2nbL63Lq7lMSURI-x2cMebHqmEgZZYTQBH-LTzYzWhSvKOpFR2NtNkJwAY3YQCNxw7hi8Ns')
    ]
  },

  // ───────────── Cantonment / Phulwaria ─────────────
  {
    id: 4,
    name: 'S3 Workspace – Cantt',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Cantonment',
    location: 'Phulwaria, Varanasi Cantt, Varanasi',
    address: 'Near Vaibhav Sweets, Varunapuri Colony, Phulwaria, Varanasi Cantonment, Varanasi, Uttar Pradesh',
    // Near Vaibhav Sweets, Varunapuri Colony, Phulwaria, Varanasi Cantonment · 26 Google reviews
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('329772619273409237'),
    images: [
      G('grass-cs/AABkmLdBzwFWbWJQsMO3oBVAqrInuRL4GRu_IZbed7cT8Gtmy78uRkSosUR0jCuEe0UPHksM_DJlVJvmIH6A21gaq3DoMQ3FDOzHFDp6J6AlODOsg2Mbf8DVTI7QIIvJ1Ob3TMOD51P5J9lQwMkb'),
      G('grass-cs/AABkmLfcb2afLA2jQ92bgjI2iG1I9XgcRfMiFaVkhMhCrJgUNuk3izknFqMpjxEWKeabKMaD6krmPjg7OIaS8-wr_idq3jU_EFqhKiCwMaL2STrRTmNpCmn9nJ4G7wl8IAhIouhGoueQeMpLriYt'),
      G('grass-cs/AABkmLdI0BLSVBbOUerH8ZqdxcrVjdMv6YNrNaoZZw_hhlhZLFc2HkWOf_BEWgIEME5S0bVwPVllLB7mmwS39BnMlsp7T2XSmiy2IgP8e19bbukbTrXCE3BzqcKwItAomD0JbxvaB8op3DkT0EOt'),
      G('grass-cs/AABkmLfSYljMAaZlvlgj-3RkQtUCtB6cZ00Jwi_lO0zPzdV6bSiIV70os6fpwZS3s21xJIcGhDLk-xxw0yL4susx740KCEK2ARv6TrYMAr4GItREM1qzdBvkrFgSDgV4c0mW8jZe7r_G2g'),
      G('grass-cs/AABkmLeAyItoIQhyfP0O_nJp6JXIFJLCg8pzw00qt2rwSlQzIN3gUwL2iwkU2xfzH21B6FLOOhKjBbHf86p5s1xhysP9vbUj62GRa3IdvNesng3TdJYnvCrLPr5O0r-a26DdpwElFKfCBg'),
      G('grass-cs/AABkmLesEm4J10Ia5tEsgKKUpuCKkme5GEsnRKy1HCnrYNDIBzQgbFcyR3pTdcUdXBRMaccoFAsW3TjcRVv4maq8JXjhee20hF6mlRTymB-1nbqaQZSnnNK0dth2ifU1F30Q6C5oisYMR-IcZzc')
    ]
  },

  // ───────────── Lahartara ─────────────
  {
    id: 5,
    name: 'S3 Workspace – Lahartara',
    badge: 'Standard',
    rating: 5.0,
    area: 'Lahartara',
    location: 'Lahartara, Varanasi',
    address: '2nd Floor, Harihar Tower, D65/429-C-1-A, above SBI, Lahartara, Bazardiha, Varanasi, Uttar Pradesh',
    // 2nd Floor, Harihar Tower, D65/429-C-1-A, above SBI, Lahartara, Bazardiha · 1 Google review · s3workspace.com
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13202597380559616675'),
    images: [
      G('grass-cs/AABkmLcQLU6KeuucAJLoVVGijq2tjVQ4TL08EOPdhSryYbusIqQDtsImNz_PgqO3DjjIzAegftn4HefYbCRnJK6Sv-QHDYXTFFbNbBEPJVMs2BKXtIV0W6UMAOegosDDSohkYyuWqiWKCYCWeHw'),
      G('grass-cs/AABkmLdqaChSHiTr-814V7ikw5yicLamhGpSWFV706BdU0fBr3hi_XhjqPIknrcvDfsVIrjlK_WqUU3_Znv8U5D1QYsYgVTcsRo_ptaOJ0kvhoJoXBMOsQMJKjQua2AeikN-hrTl4OtcIH6wMP34'),
      G('grass-cs/AABkmLeSnqZkgbaVWe5ePljsrvZ4GiijsOdBlbsDrqIbTJ0AzkIJNw7BwHGRI8O5q0Qm4P4NwkGfCnqyWuwjrWS7X8bm1G1IJ-xXfQK88LngV28HzyKSIpZ_IcIbxOEUwzyJ4bmdbbVaxVyKbIf8'),
      G('grass-cs/AABkmLc03GuuhlzhekdhHIunaqfcTyrHtiKT8AjkdUyG-XxSve1ezlDNEmDG3XgrjCVP_cYSSTM-j4EbPSHAZkVVXWChIiAB8pzt7jeoVRLaa2681VllVuOrHpwDXOcmW82-zQ8Q8Bn3wNpq3AYi'),
      G('grass-cs/AABkmLdiOIxaCOW1oGHRq1-hMowPhF4ShEoEaIWCfvfRMtprS7X4XOvT0n0wh6Xf043upc1RqK4GjVjUse-gIwaHEJ6QWwvbA0O-ofIhro3BRwLDT8MJmvjX7vsRqvGTtlmRjRRZk1_8uhza2Men'),
      G('grass-cs/AABkmLewipyqKfImbDJMwYaYgySq4V_H-dINRvPy-ggqGdljYrUtJBtNxFjIF5KNwemyKPJbWMaorWuByb3P00wIHfO2qZ7xXKpCX2FzmI7BPiBhvm_o0NEKK5BYIGLM1SUd2Jct8yj2JtNx85Pv'),
      G('gps-cs-s/ANWiy9RKNYzNPoXGYaFy6GngurEF_Rkcq01pTlp8okg6RtIxtmqUFhO4lvq1ft4daCN7LB-FACBMFCILO6eX7NpSXP3g_5rBPWtHR4MIR2uUo9nxvofFRkJHD5cKoMrpcMAbBmmPa5JbmVyjK2Vs'),
      G('gps-cs-s/ANWiy9S9f1OyLg6Z7BO9qR-PAlR8LfqImNLAJYbDmUjVi-eKHiYoWakM8BaCNeCsu4ZrVAPf7fPitOjjwnKoDmdx9ZHBqWj0RM77dbxFP80j2TOMP378esWjKQl-IkXdB3pYkhhvk4jf7Z2UqMai')
    ]
  },

  // ───────────── BHU / Lanka ─────────────
  {
    id: 6,
    name: 'Atal Incubation Centre – BHU',
    badge: 'Popular',
    rating: 4.6,
    area: 'BHU',
    location: 'Banaras Hindu University, Varanasi',
    address: '5th Floor, CDC Building, Banaras Hindu University, Varanasi, Uttar Pradesh',
    // 5th Floor, CDC Building, Banaras Hindu University · 127 Google reviews · startup incubator (AIC-Mahamana Foundation) with coworking seats for incubated startups
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3222686737967785464'),
    images: [
      G('grass-cs/AABkmLdO4NsOOo1a4TozmTNNgXJ6Z_Vu3zgcioC2uq7qmw-BbeHC2KH462yq2Tp5D0fhvSckPqt8REIbsH14ejmFe1n6iw0OQVhvWYZpejJgBKW5GeNsoFNYSbiwERPJa-q1zCF655Rn'),
      G('grass-cs/AABkmLeBh4sBdaR7RQMjbxWqaOH10pdg_Juqk0ql_ckQfODLTLSfgwcJNKoLa0rjt52QyyYduwglKA35N8nUVnSVzlEsyNETDDzdlWMKVxUiVhN7_Gp2nlWrOClFcuhyWHTIPXtpnRPH'),
      G('grass-cs/AABkmLfKZ4EDUUleiwpDNK4Qt1BEvsPj8AOTuG_mEEejKGE8FCaKjyLSKbzlDjl9hhbUVaCCXDKHDhMI-G088Iw8F25milfo5f7NBy7KNt5MxhMhv1uuiHgQzG1Dp_ckBXcfbQMMRjCm'),
      G('grass-cs/AABkmLejiWzARSdqfJ4VkQuSuTNxaSuh2T7Lijr3ZXqtrDkAGkF9C36DvPhUqIgZJZsIbQQRjhR-MnVtHXiCuTvSnvnlBxlBte_IS0p4fS5HqwZqNxbplaf8LWHfL--8EYFOBXkxUNTZJsefjiBR'),
      G('grass-cs/AABkmLeF5177nLyVhh9Gvd47Z93PSL8F3BBpvctZ6azkaAQXm6qASxRuTME9Be5K5ZNVIbO2DzpRZO7bsoJCnurNLH1Eqks4SnT1AIegY23FHpxgZIJbAH8pyltfw_OIfloxBl1CPLMvNg'),
      G('grass-cs/AABkmLdfXtKn5w-ov9crgqAwTtAGTyAACtg3w4eiLvX72_e_U0-hdevXyGqPDokw6Nv6eGReiLjjFXBz7q37yd8z--go50xaoz83yS6WMnKUIFExgDbGy1bV_g3ljG9fun5lr-KBlmon48EMZbHZ'),
      G('grass-cs/AABkmLfh20lxRbZdXLkdK1ZUaGOtGdKZu9pDxtudmfmMgwGIeGKcHvxBUcSC7ldAk4Tt8_xThhdiAxolftkFNNOdrPCeAmv7STGSaga_2L4dYZQDrBc54PZBhxNlaj1XthomevwGQUM'),
      G('gps-cs-s/ANWiy9Rtlq0eL1HQPOWqqyeoAWVQfbQx4V4yYLOPWt4N4hp5IdSrtxLUa5hO5dBYK_l3uCaj8aww4yBQzfwOB0J9nLwuquhp-o_y_QkkCrN5YdE4C5_sffg2gc8fhLkVej5ar7Yms4YA')
    ]
  }
];

// Operating, but no genuine photos of the space published yet.
export const varanasiCoworkingPendingPhotos = [
  {
    id: 7,
    name: 'Co-working Varanasi',
    badge: 'New',
    rating: null,
    area: 'Shivpurwa',
    location: 'Annapurna Nagar Colony, Shivpurwa, Varanasi',
    // Annapurna Nagar Colony, Vidya Vihar Colony, Shivpurwa · no reviews and no photos yet
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9960235460941432018'),
    images: []
  }
];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const varanasiSpaces = varanasiCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const varanasiNeighborhoods = Object.entries(
  varanasiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const varanasiOfficeCards = varanasiSpaces.slice(0, 8);
export const moreVaranasiOfficeCards = varanasiSpaces.slice(8, 16);
export const finalVaranasiOfficeCards = varanasiSpaces.slice(16, 24);
export const featuredVaranasiOfficeCards = varanasiSpaces.slice(24);

export const varanasiAreas = varanasiNeighborhoods;

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
// Varanasi Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allVaranasiOfficeCards = varanasiSpaces;

export const getVaranasiOfficeCardById = (id) => findOfficeBySlug(allVaranasiOfficeCards, id, "varanasi");
export const getVaranasiOfficeSlug = (space) => officePath(allVaranasiOfficeCards, space, "varanasi");

// ============================================================================
// Top Coworking Locations in Varanasi (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topVaranasiCoworkingLocations = varanasiNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: varanasiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

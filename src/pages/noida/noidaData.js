import { findOfficeBySlug, officePath } from '../../common/slug.js';

// All Noida coworking spaces. Every card carries id, name, badge, rating, area, location, price, images, etc.
export const noidaOfficeCards = [
  {
    id: 1,
    name: 'Workbox',
    badge: '',
    rating: null,
    area: 'Sector 96',
    location: 'Sector 96, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6497825048180575061',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QU9_JChR5sQ5C0yQcT0070T0hV1RpnyoJCkodSNMtCjvIVvbCARiH9JlB38vgwNjOiKAjtnegfReXB6nBNMJztCJ_9dCrG8lxgl38FUsY07zXt5BHs-F4Ts3ggb6ew3j9IeWzG5ETySdWy=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qan3fWd7VGwlGolM1oGqwqYh6vtc6DpaWGRU7PQDp_UtETwNN3B-wXVLFUPchLUo-xwLWFRN-ncdnf9baqvwwSzPxuowDPGOFKG29-PSJM8BQYDh6EOWtcz7NU80HGXAG-ofY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SrMQ5wBDcnkQ-qAmNzFo7C5DmwvRJk02v4JQdx7o_yxLrvZ6Ne_ZQIW8qv6O7bjwvZDNiWyQLzolfTlM-olmpIZxAQGd_E_z15PZyx1oAyJbUGQNesWQosyxuej6S7EheQVEonZA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TKaHhHNZeJKl5de27bdGdzSHigzFQ4VZgdozyf9ioFV-PMq5JhqAFE0njt338ufqzbeCQZu5mKSuO-cGo8fq8GxGGIWnaR2SfiWxR0t_Kp8V4qOHwXwEhImQTIEjHpFa5jIDfvaPiEGevv=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RLqSCr0qIRSa1fbkvzvBe3iuOoMh-nP2sKhOAYmih10kV1LrdkgS76MD461C6xSG4IY1ewejESQGWgvz-lrX5Rfwro6xQMYuF3X5upPy64XnGHO6b3SvDN_zsYKj6yzEnA9a6-Z3yCz1jm=w1600-h1067-k-no'
    ]
  },
  {
    id: 2,
    name: 'BACKSPACE',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7333449638893815699',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qo_raneFu4v1L-7BkFlILtXrLXmfTTMLCdAds7iqLmkI47d3yku_3Wga1cg_f7eTiOXpoiq52QLrCClMCLjY79-MFAcfen-ttGEb6B_Sc-R9JgKDbktTcOnm5fIIIHrW3qsvGI1aHtVkJM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S6l-Q-8P11rxaCA_-yeOAcMIhOK5FMXSXoHIcuFdapNu-VLHK895zPs1Nbmkd0tkGXlk_IQ40L0rkMve2Eq4PTUfuc2T-RmqDYjvE6_B-XsKjaNuEB5wPjJANP58Dp-j715GNPV6iWBXTd=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QKYOpSTXGkzm2YHyBNt_lsJrpeS9EkOrjVev5Z0NerDRZ8tBBVCQqUx1U-z3EL9p24Es76H3jSgu7xdZ-zKS4g1SuLLeU3qgwjm6_dPBmBMCcnu0VDMXApZMPJ1Bcrs3w8sXL-tznMDZUt=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SQFZ_po2x7yMDRitMlNdyAWI03GV9jtHbFtm96Andj9s3XRpD6aJwG0r9TkdD1ayIgLkRJxFG8y5WBc7kGtOuQnkpawOfWaoKb33vlh3By8JwL-Iijr77pwZpojq_fu_pycEomKQB-ly3o=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tf7heSPjwcMWlc6pND4pFGYCpmRQVnVz670iDrRVmMN5SmoCs9HvJrWsZ5XWamTBm6M0xY1aL0HyFXMiHwRtcHhamgsZAIhVuZDGQv7gBpvUpU3yj-s0l-nupsZ5GCOSfr2mOj3m4qtmRW=w1600-h1067-k-no'
    ]
  },
  {
    id: 3,
    name: 'AltF Joy Tower',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17134704219138947401',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0CsVDA41XEfO4GRIFBW2zJJeN3b5zDKC6w2P1epTs3lEehpNlJOI5E25hDJ0qiBCIOrvepo5wI3RBCV6_H_QVumlV1uA3caSRy_GGS8ijRPUb7JqiAFiPpfn0ADbaReRYI-4SGgxsdqQ_=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q01W-ZAINxEIp5p9MvraONvBMWjr118te77taVs4Bg21PSvew7yX_ktP5vxjek89H8FHKcFQj1Jl3Dfc6EKT9OAi2Y0MzYK6YC-MB8kdUQhGSK4kdqpB7TBzW6rT-gmCANd7rROJ_iECjL=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SNkhYeY_IHMEILdadx3LvGJIYQGi5KHO8TENGtsKrGB-ecMHXy9GFeFP_OoL3PhUK8QR7VfP8EHNqjMPsSbLfXuR6btxSFTQGJNdr--f33N62GqEr7A2wx00736JfXFJHUAnGYYy5P7fhI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SpxkVpW8O5htJTplAS0x4ubkZc62SfwJiYN8x6gOtawo3yzEnIpqeD6-ajCwTix4Relm6SCFUKAGQs8Nwfh3gVSx35IMfSazyiGQe7omc6AclEUNvlDUAa0H88W-z4txHm4UV6LHBnxpcL=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNWbDUfhrs-QnzhaffHiO5tJ-vS-kxEUcSo4bDyuYLOfDBmu8CXHkyhNkgW-tu2MhvLSiLD9fpmSOqL95Kqx3ZKwOZqEmQcqkW_7-O-xVX4nBF8aSbQ6UucgtXzT5VfEeRwFIv45OMqjKb=w1600-h1067-k-no'
    ]
  },
  {
    id: 4,
    name: 'Limelight Coworks',
    badge: '',
    rating: null,
    area: 'Sector 127',
    location: 'Sector 127, Noida',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9327804022537462813',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R74v-4b6zEUyPr1Cfn6X17d3BJLPryILJch91dfD62UIDNkpwl-jibJqnBiYy_FfQuT5tDJ98gTp0bPR2uPdl6vOxNTUPJLZXeVtsjXxvAITyKtIWZtx2LAmOUXY32NIqcAgMa9MYaHUk=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TqQ2eYQAg4tiBqsBT8qKf7kbSYYOY8oslrmEREjg81zFTXu4PJytTD1iVhRhTJtqFIfWzcUOIKhlNohAZKgE8tmmmU2mhwPc7RwpkBxObM0EXMILFgopOwt7OFwl7pqXWZamGdUwn0A9eQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7Bri2q4erFab2gOD-HnSXSbqmwyHZyTtKKOo4SARZ4JyVBFZIs2pSAg_x8hnrJIM-bY-V2dZsoGW8K6suRO0lnXLGBMv73efBkaaxJpMKpenmmesWU6mr3Iukun8ulvo9XwUk7B900tt0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0bo_1_7mzvI0Zutf0wJE80pnH2HI82sSjSnfm89FUoFy1NPzA5KY81d2v5ycIgm6HrEF9gtJCDYYToimwi42yTvNJx-QEQ0SoAkCBBrf7aWyLTVuSPvW1yDKH_K3uNANgPYWa4AitbqWn=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QokAl-tSJZcuknqNp5y3VLoZkYB42LQWMewkAS2nleeSXRpqhADxaAt2dIGhWZ5JqlGqoRL-rjzgdimehYo_iW_F0brsjxpUtSSE1omFZ9N_GVGBk16KBGxKjgfqnd-ml1FLtmxNkCpMWX=w1600-h1067-k-no'
    ]
  },
  {
    id: 5,
    name: 'Superco',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 4',
    location: 'Sector 4, Greater Noida',
    price: '₹300',
    period: '/ hour',
    priceFormatted: '₹300 / hour',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7149854329570791114',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TBO9OdWuFMJpQvNXH-xtzL2o7amWIfRCUWG-6PZUnf-ZieUN3tQDeFIbfbQvKDKXjEO5u9mhzvo0wJoOHOIZc7dcW6VwGiydPmviRnbWteZHDhMAQPvVSS_mwZ_tZsJw91KQDn_3mVKFFW=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qe0CHxPXyMjNJid6DTbqkuFPU0kdr3P1sB9ibpFfPb0vI1qKGl2eX8EuofVPqZXWtUG9JnTB7jcqUn7SYRVfOHWYauZDxM-AzP8r7rO-INokCUcl_6Cr963aHt6zll3KZdQLQHCzBIX1zo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QwjHboAMQvWW3M-b2hs0jSAGyz2ZWkUDPaQZJWbF4ucDsPa3CmoivotNCnUfFvY1gtvBtx_BtY5l6DTd2wWZcKihb6eniagJowideHeOhVtJNCyY-aq0y69rxM2q7eWMgUNU9_JLmq0ZXT=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THbLjeHxlouceLltKeW8TehvGCobLbIOo8ycGMVsLouZt7CZPobES9jmUP3MeXcIeDG5boXlcb9Etv5owcoy4dQ2AtLInReSShtT3CMaLN48DpUGer5uvqgKOkN2EtE5rm6Poy9Xxbum4D=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QlOxfnxCVvVJy4Qy2pVKgHPg7w6uMtAmCwEhNookdpyFvCq8j4kkw04ds-pcmPlhAujNKDsX5xcX76_7tAMiItHZDLUEvZlFxDYTXK18CazjPRqDrGP0Nx0FIefevDw0gtEK1ugyKR4IKt=w1600-h1067-k-no'
    ]
  },
  {
    id: 6,
    name: 'Worcoz A24',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2801258606987247254',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QkptQT5a9A9nogZmHQL4qSz43ebD1npPHFKeSUnb5fEUHhhUf46yLJu0H1EF3Uods9gUN4O76AQp30eRKzLS4e0hcNtPHaFiXn8L9fl0KaJN9CoQKtZ3THIkER0uxfm8lt5qlm=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TTFFJpjIYorjkJdEsH066kSI7G69pYxmxnl3lfaTMuAk7ET7-5K1QB3ksojzW2dExiYaZNsbNcIxZkZUJJA4Ncut13wcHF9z19PGOTF7cgF-iSSpd_S6RhQZ-Y8oSOLm94zZbg409Cyn4=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SuJu1GfJ26c67perep4UvYIWkRC-Q7oeaXQejoBqnr6VduwpvIPJV7wVP3bYXRYST8ERSRqWR1TBTqM4hH1FUq9dSD8fudX9Kcgq2Qgn-0qPWWizPEMLtNWB7zAsvDG9esJvi1=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QjrbH3OHJONfzJt1K72-3mVWUqL8iejbK8FQADTsK1yD35eLDW3lFCJYbY4hcSLk5epqZhjmRPZPQsBrgOlnDDApupZMpiugTc3gYYpNltb99gLWwNmr1uSvLP86I4jno7okCXf2LWCvf0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qnnkrcg1pHF7Sp5fXTTuydi5vyZI3a6OxOKGvrGZAEJSXpTqv0yLKPewwE7cDqPqmk5v5sIwpECt5nZ9m7Mx9bvaiPndrShjmdPp3OwkjB-wobCHOuqT2IJLL5nyI6fDK_fFTbYQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 7,
    name: 'Regus Green Boulevard',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹12,499',
    period: '/ month',
    priceFormatted: '₹12,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16399500642265539255',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNI8AxedSxghbmqpwRTR3vPJwvj15sMwU5Y8nDvnWHd1qTNRCaf_B2h-1hDDVwwQxcn2VWwHlKCCRVDuIOBr2GfJQBS9XZKduqta4LwQgIt-szCrU0pEhYNMQBGXHYJKBtC0c6y5HaEcnk=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T4b6hgQT4hb02CqJmffcg_U7VbeVxWOAU6VwYEh-OMJ9K9ySqYV-T4dXmjL2go8I03Xe-eZ3-kqPbdB0VSkfwrjOxZN5MLa_BS8OuCX-Y5ccBhV7EGvRdgjH2NCnCkXrzmY1mceDG_GiM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWrbbagDTDm3cQi2JyG5WUhF0CbRGPbV8hqjN6PXy3uz5DofkU1bdwWh49wrZNXInDb9FZu6PQ5fue0iJz_hDI54INdzbe_OGy0QKpMKiVb8i2zr7szUs0Fy0ej6pfCnFBnkjy1lwwJjOv=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Th3iiSyU2coOit8mdxC0nh07du9wQ0K9lEA_BdRn146StNxddHZiW9Hvj1FoTbV9wODNk1HE2SNnp9v3uHHUJ_Fm5C5hdBCGrPDJmjTc38gPqv6fqWecQVrCXr8JO-rSvEvn4NsKuLmKKs=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TXDVLPwqaTkyEQbdJQtOcWyowZ9AQ3ocuPW0vf0si5TblQnatvlF8PD1QWGIqkrOEXcl_rEnRxWBudjUfizzZHl7Qkt-phBqbE-8dxi2TB4gimYOYvyzg5FKoVI7d3klrJcM1mHLip21mP=w1600-h1067-k-no'
    ]
  },
  {
    id: 8,
    name: 'Awfis Majestic Omnia',
    badge: 'Near Metro',
    rating: 4.0,
    area: 'Sector 4',
    location: 'Sector 4, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2282363462780901904',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rl5Z5QseGYpPz8kzQAHkE4swPl9mEZhsqsKgudMKjoZbsY_lnlyGmb5SEMC_NzbDe-oYGio0V9WYVevi7-zOKB1dkZESez7OAyfe1p_ANh0vDpLYaXYg5t9mRDextWVWpuwv5bYQuEgX0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPrB-owLNe2i67gXM0VMEyY6xt9GSJaAcLrFJ8sJqQ8aZYF-rj6833riHKH_rOL8Z-9ya3ksu1UH8jis7x0QwkJ-Tx_0Z8eLtdY-sO4x7Q4Ky0KDRDWt7zKIsInSyFXRTaYme-fwKul0do=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhjcHJlq6Osmeu_rKatdqTeKST1673PhJqmMcaEskhBQU-DroLTS_oM8LyDlN3aW0aZid_MaQehCDvizaot8vI0eDlopsRVRdlDm8gPkb8xI3sT1LPHuwKXG1h88keua1a66BVCvkesd5-=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R2s_RofY6uyjGY7O1TsyfvkqCNxi8AheuNfTn081azE0-0cugfo-l1tJN-09TIA58BPnBXzznAomXE8DjY27cT8mp9-TPehfoArwDgjSs_DDfLk8v07QwqVz1qLhTar0G-ofZgU47riIQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q0su8bfW-428y2mzjpjIBUFl2l_4l-XGMjpXbgyd06UlEY3iUIk32qWVVKGQPfCi1VJhOHF4j2fPCjoVEGIvZdBPVGd-8pZaUlKBnPKQgfLiHzhMYkUdpRqhyhXz2l4Q26sfYyUQDGeJjs=w1600-h1067-k-no'
    ]
  },
  {
    id: 9,
    name: 'Nukleus',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 142',
    location: 'Sector 142, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6389556388634462608',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbX6c313BLE9oTbG9UYosgZJ8JJA1ZK6mbdwTkJHuz1jYcaMM7dOIkh310hSWb6dPFVkr7lhgytppZbkKZew4piPZ9KjmYDHYgSzaqHzSqx8ghMdZw2tF9AARGL46X0pN_kNZY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QptfV7toB18N3qAwOd-W3-_7ZkO1qeGIW81NBQGhFzSzGMSO-YHNgvP3lKM9KoyOzMEZeacWCmr0B_pz2jgTdRpI5EFcNKeqZaXQiBAyojZ010y6Y7qkImGG99MNtqEISEvMuu=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qhpa2zOFKTE6Pb60Nw7wOYBJU_f8nDrZxcHF6hGVdxJFQdDHS1CJm_g2dYqjAI1bLoG7g5QFSfEiMPHMGGJozbibUSSVaIiKD6pnLqX4enZXiQeTOv7kjV3GIu1piNLCldGbWykA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QxCOTMqQ8uXG0KaxK9xkaVvkZRpVl-wLdw4ZfKHIwnNgne3az29zYElYWf96s4-c7QpVs8XSh6k8ZsCmpU-eXozNFtchs3fm4YkmUtLqqWOQ7C4PKF63UrUXjB7tt5EgoL2138=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RwObs0BPGjK93vxS65R7N9sgzW7CbKBS4RqXzGBUFL6CfmN6BnMOcukTSFwZ7VIIDj2bEhwTloNO1B5QGDhjq2NdhUm3L6BsSgKwGoWjdzo04nl5kypL10pFTFar2NCLr-C89C=w1600-h1067-k-no'
    ]
  },
  {
    id: 10,
    name: '91springboard',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5038819873067251058',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qc24KBwU3jSaK9AFU9C6Ob9DZK57kTYKCtjVeg03_ArBB0vIHNZAG-Pcl83SH7evEZo4NKj885d6oX3JclHWcZF_tSbsIcngPD_yPrO_cDqRarFxX-vOiNZ9l6Sf46ls8-9zxaMiLWDDfJ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SFmv8f00wXjwJ8pXcLToIIjwLTdLEk6fkyiqSg9rD39x8U8_oRX9MC67FeOjgDUA2CNlzlvem7EQo0sDVvkWHcbzJpuJeegEVGWxKXTy1tUGPswAxAjqX-PtL9rAbd6UWQSLz9zTqyOOE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QIqczZXORHKbcAxM85eankFuhn22waSmpsynDRi3ZEMKgjcrKk0Z67jbYBClfWMRBqkxwWRgafMFjtfW31HM9gTp27dgMCDPNko4hY-VpOagb1eGtNigu5Vz7KLL_dwb4zSlISoi71gpnr=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RnDwazkeKe9yFeq1v0O3wtwrpxH2fh2kCu0WsnSRGcWwiYCEDwDpiF8pcz3kSTmwP1lkAa4dpo9nAKN9T65dxzq94TlMKXRQNJdX_iEMHgDyukGg-IFl63pZvUpPDI6azwc4pEOcw4c-8C=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QiGoS-eIXbeqcdO5AL42Pjr4yra0N_Xf1TeOD1xJs_Dv0u5PglZgwzQxy-8sJZ1sUALXa6cfuQssVTn8CLZCh_cbDJ7acWqAK_EiTFnmBuw7cAHhA_7aF6-ySh0N_S4KXRmjIzpbchvpPS=w1600-h1067-k-no'
    ]
  },
  {
    id: 11,
    name: 'Smartworks World Trade Tower',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11091553554284956161',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TOwPgp7zVhUp4TU_05UZ23yrgofJUYhVAh8gB9PW019NcPurtG8MwtNtVNuPCImuse9VxKC9_DCKsNbcnUxfVPkvGQPkB6sEWAnJwhfNPt78qd0-VkYOl_vcFGuGer-U0_6Jrp=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S89U1ceyangTVC3BremUICaZTwXSHCik_L8xQNY_26QOFT_UU4DNr7bjmeoCTucVMZl-IbD20L89STIcTwJo1RJDL0J9PhoFKaFe7ixUeOV9VBoOfjop7NDI4FgDmlke-FDj4jPw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TYLgacJqv53x4kqZuz0y8lSKFhcCJruI82pzm6UN9pYT010ZXVpwMq_7lCGytpgsJsffwUlxwHD2-6IsTcBnssNMNUN_COsAZYwQl7ZO6qjY7NEX-KATRmXe9eOGkCVfyMyspE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9StfWZeJ92qmwLaruzBVo_wa5UjiUYGStvY-RvGGFZwt_-5-vPcfzQRQdL_2lHJ-KR5IJw4iGy7Xtck5b4SXBwvRH-dTAsKG9VQOmmoPhF2fe_DT22P28TVjCVWjJtRs0bNwu9Y=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXsOxoyMxNp7JXmQ9G6od37hWoKhL5hm729G8lxJ_r0glfhPmgAiToRrT_sN5_y_BwG5A_lZwC5L7FtHRuAHlnyuTetRi74J-kWQTjSIQmELjBlailE2pGidyxt55DR0nbsto=w1600-h1067-k-no'
    ]
  },
  {
    id: 12,
    name: 'AltF',
    badge: 'Premium',
    rating: 4.8,
    area: 'Sector 142',
    location: 'Sector 142, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2699411020769895538',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RX9ZvnH5WZSO8AVIeVxzhzLCZ8TJlLhVAvGj5UfLMqjU19dK9irhhCWGAfqhtQbgTtmneb3LXYRym2BKQ3nwojNpGv6rHrgodY8usQtCVymklu_chuhDAGSKHsCYTQMSKb_s-RzXPzsRPV=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SRnMZwiN6IZQb5LIUsIDWs0v-jqEzP7-ywM7Ouur_f29LAUL_hUvASlJzkglstHmLg_1tjoscP5Aij7N51IqTUGLMkH79X-93kmXJyOXbP8QXUxHlgKUpME_WlhGGDtqZOlpap5AgMTYs=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sg2VXya0bHTBkw5Zv3ZiN9icrKhdn93QX5CGADipQIaArrXIQlwCVBhE1gvohHprKWhQPdK4nXFVRNkNsc8N9uWqmaPqs8cPtyJnMG9FhAqjWm4hO7ThDSIKHJ9o3Avb0SsQL9Gw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXoWcQasbZgiHBHPVYajCUgHEcUnsno2WS_baABOJQx0c8-EoMDQiLhCtVwETCEgGYUCWUU1UFMTzVSYecV7rZK8I9rjh6l8JrSzVedJEWYGRR_YlDchkxlQIoXmXO4k-XcWOj9-zMwVta=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QTNp_OZ92_p0D-Lm8XF2ffLnfQN2ag15w9PDujpOTzk2pkha5wvmpWDV4KB67OvhX1e0dFBXnWL_RR_6apbugPzW6RrIXiRqBdJKZISkjzel-xLMmiK7lZf6d13oZ7ChPpVniz=w1600-h1067-k-no'
    ]
  },
  {
    id: 13,
    name: 'Awfis Knowledge Boulevard',
    badge: 'Premium',
    rating: 4.4,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18029115670579868882',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RjMs-ghrIigur_1bBXUUkAGIbNTRWyqClnV-LXXuGeADkQ9p1_u6XwNFvUQ0IMZ6etXcUOeOwzo8WmaILil_4qUSgYkVuLjSLq5f6TaqDXwebMirT4xB1k4oe58KHT7C0Ys-_1SX-ZJI92=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6FEoGXf7d1MtwAwx5GbyEJ7MFfta-C3DZcZVjLFgOR20pjUwlD5LbLIpOWtq-AIUuG9nFE6hFnLeDf_V2AVI6pwimxC5Z9B0I6UIej9nWxQYB-x6CTQMLNBCPm1ZyhdoyGQYpfV6baKU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qb3R3oEHLsIWiY2csehghklEuBLC0phLmFteUfFZnQugthiWKek3Hj-lDmgNANyhvwOJ4J344Z9aAmvoNbeiCwg5Ld1AkPxf38mCNJmaYXsbHy7Cv0fu6tvBYVSJykv8K-JkBQgeRVpBVO=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TltSXvEecpjkOqoEqlNuuPY_XymqZo863JquW2eNcXOTrLJZ56mFHAeTOfQb_9i1x0hy2RozOfyvTYuK9GP2apA9Now0Zjinx0s7VUX4tpWwxZhV20m2mE-jLvO0MnmqKpDFjts8lZ_lc5=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_gT1JxYVyyAdw3o2yoVTLFmMf3M7w4iKezdEOPJXf99wvm3Q--ZFJDayop6_d3dKHDNX4Zvtm9Duf3cUVYUZyMH0a84TlpdOioANdRclkaSBfudapmNq7HcdskXKvnob9Kvo7mc-nIgSJ=w1600-h1067-k-no'
    ]
  },
  {
    id: 14,
    name: 'Akasa Trapezoid IT Park',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4639686011133987252',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1WaXmiUApjtgVvFsc_IbMa7DIKzbwcmIfYwk3buNgUALJ3tXiGZVlA8JbJ3LIllUtkjAdCaU-AaIxemE4JDW77bS29wed76lH0xtIG72SfyTuuC5Pr5aLTWzvsVZHqxF1SuZR=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSsKjwxZ8cPhCGliDtw5dBIbjQFn__pgLpRJglokaM-Y9O_fA8zlpePqM7vNzzyXIX1LQ71h3QAfOqLcGEwt0kG8VFj3iPDrZTNdQgwORB69EhURXgCtAyC5IYM556n2B5orWr=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R4hWeug2cNyo_bN6cFQyMMTqEl9yKxvvOOawb8tY3cWXaJISOe6z4d5FT0k-kBI3W0Sf8XHRm2J3f8z7k9tqpTvRIup7ICymObzEEXTkQp83wEScraRq9AqoA54nsAsxSlFoLL=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RmbONbjEhENf_MAYT8FnfKg_O7x4dUZHN_ZvgVAdiESd5qSdB1vRQhLUm0bv1VWDMQS_7iw8hsKbWc7tr8MLjvn-4oQekZQZjXCf9gL4c03yOglZfgxqNA0cYTwuvHfU1L3vJ_=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qqtvu_WBzTXp3xigpTtd-MxRRXctqEIkua1rcLIg7tEGowZ3uOOGFKbOJukunZLMmRvZo0e1YqqHnJeaDQjRaIZ9CEN0F_MrBGyuwVP6EULhlUWvTXbelPD2kPu_cbrTqtw-KDEw=w1600-h1067-k-no'
    ]
  },
  {
    id: 15,
    name: 'SupremeWork',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: null,
    images: []
  },
  {
    id: 16,
    name: 'Regus World Trade Tower',
    badge: 'Premium',
    rating: 4.3,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹12,999',
    period: '/ month',
    priceFormatted: '₹12,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6836972668310262381',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QNOmEKUSunX8_Xp6kO-3pFTFW_OVPqd3khMPh88HltxC-Uy91HKaRx8PLEh-xcPoMZYBJ8VWugaZ65RpIa-_nSySApiY5hlpDKLPwfjCgdcNiaQ99JAdNcpx900mc3dBagD7JCuZiHM4A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RBe6PNZ-s52HWbkUKIpznHtUYAk0fnIr9hSFwrEvzDqvgR1WYl5AH4APozUytFCKU8pr2HPX9eHpw6ugrYmnyFqbWDIprGx1_nRYuKMwqslFT5E1gEoBhT_FTC__CX_Fb65BXLGTvqgULu=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TcTTatiFoRdL9Aqgmttvul7zNa6J-RGyKcSekoHGny6Cwy947y73hrNyB_doNSi-3QXu0jPZ2ib66YKQisgbbihY3OT5TRF0ZxgPOdkILOCWgNDLU1dZeL4LpW-8GuM2mJxZkI7-qPqMWL=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tl8Cp7xrQB1U8Is3oddWt7qDdnAlz6IG2ZiptPbaMX9SDbURySda2jyJZNYx_oJErHYoYr-uHlvJofIHXKQnor53h_BB77Ybp0n32RvlRv9YuwiVBFtO0QaSUi5FM5-w1n_lr_xcX2_s_M=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TeG1ZOUfSWgHiq3sSQhoCXuqwhrh6PPG7cy_id_entPVQfAJdRL1EH7eCTNPE0EkuboEH-INJfx-DGz4_dUyTpVjUvhlqaUTbZoVwN9t94XkfPK3cys2Yt8srq0Oj8edXkkOfSrFi14o4=w1600-h1067-k-no'
    ]
  },
  {
    id: 17,
    name: 'Nukleus Bhutani Cyberpark',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18182678633391349853',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJXfNyuX6MxAJ6Jem_t0s9Oa7uH3DPzc67IQU_GFd-T6-nPj9pSX_9nTDGNIrC9ZhlZK6w-q0-7ZTUAr40Jm9ZQ5BTZeSRbAA3fLoeCaKZgMFzpyv5Bf2ukOfTHIA_VgP21jQE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QljI0C1fHQNvzAB2ZdX--5qyYpEYAKnmOoKWZ5da5VfT4QJZXdBrQeyEhGAQjazIqIbSEEcHtVyEWLpQDOxgqflrke15e89XAKYyXYWnTufedAlVBeU9_mAImanem7zGVBdS0zXA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ts7VGPAB35Xt1WXceuvWsiLbX76nzlkyKL2LRsMs7P5V-k0FNE-JFbhkZ0Wr8sAxTCV9ElIPwNvfEWuFZ_bhW2iiIckjbT4VacTYDZVV8Umkit_91vLQcU7ZEj2Pvp23kbz76I=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T70k64SVwKatihiXvU8lbToVM1krpmdDJRqXYJzeWklftOIgAua0-v5e2HT4_6woG9l1UN-43FIhtk6hWkzQbA6D__dB6C9tghtd81Ri4220Luxapo9hDrFZNNpFiBROR9gFKhfw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qf4I_xUnq78BY10l0Fd_tKgaT7pHyuPpS4Unsog9uKUTOhJkV6QPVT780JfzflfF1ecWlHgL6ACobFl1TIdyql3qiYUPtmX9dI33l-5UsR7PFzVCEtJcGHB5uQiERPJHDHoHU=w1600-h1067-k-no'
    ]
  },
  {
    id: 18,
    name: 'Regus Assotech Business Cresterra',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 135',
    location: 'Sector 135, Noida',
    price: '₹12,999',
    period: '/ month',
    priceFormatted: '₹12,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4629359163733701764',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R30p854Y8UQriuQwbSc6LD3d-wcbZbXHIBB8YQ6Q3BKvi-mOA24YB9PBOcgHmpBaL2a6zR-2GeKiX4tGS0bGDiBpXzh6kgEuQJDllFgjjPC8YJg6B9N1mnPMG9_B_OipMs6fhztoDPXqw5=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QO1iZEX4bMiLFmkUVDYfEEerP6EnWkodx9fU9kg7tjXvyF4Vcl10ajLazXzxccisgTFzfTZnSMW_5axTVkW3qmAr3a7v5w3zgpJYgBkmLrHLVbHyg8rDrd6P4ScnFeWbV0Oen1=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TmKK3RYz8O-LUWeZO_UEnG3Xs6B8Q_I1ZS6iDn-4xKSIMsLMxZ-W4elRUil46qdOuwHr6Om5RGJhpwzVvKhKmS-eX1AevWYkEQWlqKmJwcTCXM3gGbOMkLJhpXZ-IgIG2SjTPB06DHWQCx=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SKyr1XKNaaR5Xdi97Jrfc9UkxUdsIfOp9elTJ09ugJrOYwzQc-qy93nhGe_L_eUr0_hQ9Bty9v-17k5qXk6zHqLv53w1vxDEIG_fXXjhiOPJBvZhCvzdky8AphioqiUZxXInVqqoW5Fe5p=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QDXoi-HGNx3gx0s3F_Vjnn3O6VBtTZyHkZ9GlvAwvJT3FO5IUhGXOVbxPtJEvjICR3uIsnXULVmhwEUd53mSfGcFqWkjfup459Iuvi29a3BNQuqbdTX6ANJz-nrvTDxI1GcZPfpF_Ir_z7=w1600-h1067-k-no'
    ]
  },
  {
    id: 19,
    name: 'IndiQube Bhutani Cyberpark',
    badge: 'Premium',
    rating: 4.6,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16069060955668470070',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRQD4k9vaNia-ECvSA61VPTSlHtHpuOy5F_mOaMxAx0P3jJ67FrarJ3afShXk0YM9EMUJ9e-4Je76aUvyFBjBPEK3tfD_ld7RzP4-w3gdtMd5Wvjno3R3IhvqJLa-DaLIlMA19122KfoQy=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-HwIftsqYPaXlS8mHhEvi22-LXgOSGF56WPN5zQCnpQmDzbQiwmuXjhKH6EuXhkTMEt_9wesQIrjvJ9xj6bOM9lIPbvbd89oeoMoiOyYDYpJETJa1bDD-DFe7fTPWReaPvBVGpSVQGvQN=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SsjRrxKBPN4wzAs7pDObRb3445a8zMMMnnQbK5b1_ZmAeMYtLSCKzoVci9rs09ytZEDl4AbY_lsJY7qA-xmWPeNDv3gau6MhWwkzYbUvKMgmPU0RXwEPNC3ltJRaT9bQDW5KSMFTzt65A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0-iw8ECxWc9fylfeVXEo7Uz8RvLRLvHcB5kEpWvhXceTIyNfB6h9t0v5fziYDP82VeaeCpoJJqK4fed0kYMq96M8eTg1F746nkepoLxCd9bSCXxyujhO0yKcc2PRFjWUYjB4FuAGHa2sD=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TJyT4RELU0BZOpTf_NA2wkqH6UYv2ZDKkwp_ZqXUfbG2Ep8OInXVsbtjxw4K5C9zjeqdTHtcJVkz3RCPTtJ80X6GBCqWcweEOu9fwehvglBe0tju713lSQKhngXKxfGJ3O0reN=w1600-h1067-k-no'
    ]
  },
  {
    id: 20,
    name: 'Regus Max Towers',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹16,999',
    period: '/ month',
    priceFormatted: '₹16,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3419749645043420571',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rx7T1qpY1OOJ3QnxjeJK6jz5VG1GRjbSWvIHVKO5iXRGaRW5SlI-vj2rmC2QiZ2sBfGmWoypsa-FBbcX0ZmiUjLaeMXfmSW51-FMkYgBinrpkLcHO8YWf8vIymDybL_flo42GNCcMzvbXR=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_9SffZtLYPlw_aJAWkQQ3aWwfGxrL_wvLR8kP3vjnnmv1s24et8pa2yVo1sCkxhyoldCSCVZlfA2nZZNTaNKfQ-yVD5XuAn8t16ncERzvUDlpil4-BRcZoQSvRoyvwmCDce_cAJKRmpr2=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SP7CCJYn009d_dORrLFy3VdR7uB-rFxWEhCwclZHY8DWW7F7QWEohqg7ro1nMTWH2R1dNzk-NEgF8NZfebl664dTCh_GDbr_GbrgoSo6WPuo0EFXpXUsTayHHRAIvPXSD3w60e_olWhuU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSqpx0IALIPFY1xlSZaf7N_frKBickBQqctwe5XlI5RhYDxsKv9KBrMHapRM60N6fu2zwWTytH7cbRDu2cqapsBgtxoEcshOj3wOepX2Mc9AZU5KV_Ohqz6mLaKofv6Y3aXvPhuphGotQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RC-fJBSeUE1w4IpDeceUuPkHxpoDyczPNjYN_QZ5pWlTpF242AGPl2MHTOIxK-_lUcYv4TenOLML2Y6jM9fXpJjCD_dPNcUfX8xdsxXQ-nHWQJNUwvMKyS_sM5ySFbk_y-U-I9NgVQqAn7=w1600-h1067-k-no'
    ]
  },
  {
    id: 21,
    name: 'AltF Grovy Optiva',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 68',
    location: 'Sector 68, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1527062355107558247',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SgOMUYMwXpYPwYZX7NuxyuJpImM6F9MZGsOcYbbewQUkXaouiXC8RXvxIIAfAjPl01Tw44V9qH85HJuinRb5IWQBHnonQ6sG9bnG_hoorhe4U2EA1QEF4RHfqR1nD8jRFEqqVY3g=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TMUAqOpyFR5ppedrMbZKk_MCac6iFwzFWsFV7wIxhlkXnncPCfQsDrGjET86mVx6c923rUqV4fU_IZtLBbneTafMfizbVgrWGCyF_AI6ZsXgy_oXTYChKN-5l8-fBdtWlmO04=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S-xNDIbGiFDWwMML0XJQ4k1nEZOqU9ejUWnaiaAQ-_rgogEgsbA1MLfA4s5p4bDTN-3mwAcCdcaIaYwLe87DQB11cT4aGP4_AQn4xoCQoYbTirpVRUErAg6H2xDIxq61w4I9FD=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWecgJ9nJE_nEqkSpsAmvtDrm6KOudOh9DeMTqjIrMjUU_dd0Df2p4HJcKGOscY6ETa7V6Spnr0CEoQ2MWJqtvCGfrScLG6LhG0Ue-2DYylDMd0Z6z558HwrBCy-sENaavgyUQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R_pjnJNOMGhxL_y54J3ydJ4dfnHHxBS4KVqM6JKDxshfk4o7q_sYo96wphX4qaqFdEkLLBvMNf2SPox1io9iIy5jvs5vKDJHXJn8a_P892wqN3WwVe3OqITEdc87kP6VxdEFLOCQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 22,
    name: 'Regus Logix City Center',
    badge: 'Popular',
    rating: 4.1,
    area: 'Sector 32',
    location: 'Sector 32, Noida',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14325656021897864040',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8IxX7dSwPtCgh8-4dp4sFj35sDwljifcS0SNbZHUe5FgzT6YdLgWmFBb9hfN0rXs6KVtZt6opcjCmLZ5_ejL0WOU_ALEmVOfn5sO-K8kddDcnP-jIFfwFTjP1JuNmJXNXNBGK=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SdvZv9J5J2md5JzGXqF_XEyPKfirHD4EMweqxqlENVF9LQ41rQO5I4f5mHJ6rIGJtjLZioiwMfhjj18U6uS7IHGzf0q_vTvn_sti4H37_des262J2FAonXmfDvwjQM-vvYTAo=w1600-h1067-k-no'
    ]
  },
  {
    id: 23,
    name: '91Springboard',
    badge: 'Premium',
    rating: 4.3,
    area: 'Sector 2',
    location: 'Sector 2, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3662961458849445041',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TJchn9x3Igqw9ARFmqadhNafpNyXsv9g_GFoic5nULXfhiZeIhQW7RcIM67qb4gs7gLkFfbBawi3lAmWVd8fo3WLnfFoOnRqNBN_0zBek2CR8L_Pin3yNR_vdXR7mpJRnlPQqHpQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGLm3mGuVE10qw-Q1-UcTLbB_F84XlaX_lealt0qaGA4ejF1K7Eaw4mn2bMCemmcoyKeLc7qgjT-6EZJwFgleE0DPOyWyCEYrd27oJyRexP33lbNQdozgFV29v3uSROXjMBU93AA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TzezSAgItzOtCY2F92_AANeNQewuNLDjkFW107D0auD6oqnggojRMftMyacVPQMEfdyEo_Xj-KYnOJ9k5WvKMrB-KXIzB4QDsraZrCD5L7OoWGRU_VYuxFW-IHbuCJtJ9_huS9Gk0Ft-Xq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tn9KUgb-JS8qsybqxhtvoYw05slily31UxpV9IW453ZdiX4NOK10DW5gMpOd75Hoz244Rq_gI1CXAY58AoRsJzihOAkNrEYyTz1SHw1xtAQDYkN59KsWP4gJ2WEAYoZJX1R7EM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRrSCGnA61gq7LljH9maqE1UCwPKbmyj4oL_oBaQvqvM7PqPRdSNfOef_qndIEsj8DZ7Sa7S2MnDV7_23XCeMG-cD5SzTHX08cJMmWoFv2I9GfEir5pi-ire4xLZJ1XOmmvcow=w1600-h1067-k-no'
    ]
  },
  {
    id: 24,
    name: 'Awfis Bhutani Technopark',
    badge: 'Premium',
    rating: 5.0,
    area: 'Sector 127',
    location: 'Sector 127, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12810277232449995846',
    images: []
  },
  {
    id: 25,
    name: 'Smartworks Corporate Park',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 125',
    location: 'Sector 125, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4550404541765148195',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SRwhnuPATsK5sVIxLe8ezxJKgGf7EitQ9jw6BoKNpyhvDTqLo8euYFUwVJ9Xo5Lmv8fPrRB-u9N19m4f3VFHE8NePlnLKva-7jK2xKTfO7P58VSKYFCrP2bdGwqsoOv9QGc6jBQA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q-gr2yII97_vOYtJdKD2WlDJL8yO9GjNaZkqB7n6adzpWfiBT5noBb_ZAojwJ8FztRtprnD7fwWF0tLbe0yWy7usmSBolk8bfTm1jk0jY_8M_JHcCS-xLZ2uvIBvSKqwxIq3o1ZA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZE3kNaHpJmE30Hh3kJ9ubJCTwufRxZz27oqqLyek7bsxltDzTVCooU5WW8YNHl7-Xtp4Rj6DqQDxEn1YWe-3ai3bhIfZgZPh9feTB7wLncEpWfEEbACGTopr33TR1Vi_wyOCU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QsNVGer8kyxeleaGNqiJvDMsV1v6vO_AIKtcVpfPlu0W8ZRwjw5uA6EnuBuGQiVPKZmxPy04wt1Ehib6lltOBShCxLaZNwWXuFQG46MYVxOP5zp5XVwNWq99CfF93ZosQ-d0p-=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SyAmO2483Y_z6LQkWDN1SecqkfxWbLzd9D8vCUUDTOtB9fuhoGcm4kNoeh2nno-IJ-9-jhu7pRdqD8XJCMiOqHsNE4Bo9BwxOlEPt8jce0c7J5rWEyLkOdxkdwRUlY_4hCJvs=w1600-h1067-k-no'
    ]
  },
  {
    id: 26,
    name: '91Springboard',
    badge: 'Premium',
    rating: 4.4,
    area: 'Sector 1',
    location: 'Sector 1, Noida',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7721719209814233526',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SKHdVwhqFboNOxfw3J4lmQBaqrCTQDmyFnMV2XabL88sMCJl9phKt5grHFLBPUndK-RoeOwkGoV4wjx3wHYYR4dZlHAm3XVbV5xIcSc1qhdPu9Ymx5MtGWqkVIi9o5k_CV9ivc=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rii1Yu2B0GObZ2n85G9y7IVhKmg4g8E-6nZHjIoYyOXF6o2ONCrSLpIenQdSRl1mFK4lOKtdpNoGSSZIu_mAaXkrXurzXowFql1CZa6DWJIu-3HCv5cy2FzoFe1waUahk6c8Utjg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SCeIz09yzN7RHMMoe_c2VDwSbnUe7wgfnl6S6MNwpOCmMm76qqQ2vBKm_glXnEMfXxLxcVbrrfKoTm9nxKY2O_oN1J1ElGZxSw-Qq1feysZ8ok9BqC2EbuPPUGA9O2K_jrQQs-gA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TIhatcxeS-kh-vIn5FIKWIltCNUY9W05L2IhcGkLkSqt0VHkrY3dQMRBCQKNoEsiPBgCiFufv9DVtZsqSQQSvoBf1NYxmuHN_R2V4wISwTIPStHF3zkBR-_Zz7Z5-bOmLEUflw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ShIv62hkKSWhrtedu6m1X3sz5rOEO9NzedI_frxKw-yjhnL2b11zLobCl3JQAnxn2EfB_GO99sk2deY9HwmE8r-ebK0-_YXXn0i_AGFLLBMMItdhux2VGGUPRwnrsnOiWCIbRI=w1600-h1067-k-no'
    ]
  },
  {
    id: 27,
    name: 'Regus Sovereign Corporate Tower',
    badge: 'Special Offer',
    rating: 3.7,
    area: 'Sector 136',
    location: 'Sector 136, Noida',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9758946750775436429',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWzEPaBwvrGB-EX0hpLOciacZx8FPc8076B02zhlmgV3imrGc9yO2g7sjjzmPJcygr3sE9yl9BdApjzj5MWtSMxtPAT20C11bTV80KT0un5nGx6glFCNCE8uHLJkukfGLD1RHCdRiqAns=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TH13ea-0x-uVjzQrFDeIRuGU6XxToH2ssyRTHDfF1qupoI5OZBLKt0Ztq9o1dmWRVr1KygS2lXzCFr5R0U2OUMHdwy6_whsgK_PhlFAaEDVGQEdXEvm6uHozsxl9IYycDI2qEn4P0mecyx=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbO0hyZpiJtPsvY9UsM4cGg683T3BilC9Ipysnshp2c6wqQBWhm1uO6tpeCZhsaWGxhL03ZF7rw9wrSB7RK_BPz4NX0-C50OHSiGf9PcnfqWozIS6Offi3d_2wIMVpW-oMvkmdyC4qeQI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TdshSQgealS_P_Y-obVMXegrSbjW5LNwzizUj8peaRnyLIt-feHNrDFpesRunApXAu8aVe5PTcmq9TGYijGHeC9NPQBxXthEiyqYtytn4PqPY8R5HfqHfFOMn7K4QMQGQh3OB4jmZhaziP=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qqk9G7hJDfhjcvPnoi5i08642S6rNFUU6Ez7Yz4XQacz5leAuNqOS5t25L0EXNqw6Oq-mD5aVkclU-3lXqzDUN4IIXgM5EDZwnf7v7m_ODxgpzPDfrq5xMb9rPmNp4L41GghBJ0lKZQPev=w1600-h1067-k-no'
    ]
  },
  {
    id: 28,
    name: 'SupremeWork Spring Meadows Business Park',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹5,799',
    period: '/ month',
    priceFormatted: '₹5,799 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10293817156998035907',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RsyHn4-g99TGnW0VokpL5kO_1LZjVUihqa7AxxuY7n_LtNgKMsqt0tfTiBdkKlmNF_yABfiAV4lhXMU3LCKbYY9iDx8XtQh5ZFtItYSpbZXXLFlF0LqzUHDegzjS9ksNiY5-gm=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QwkcIcysit4vxLKLGkg-Qo3BTgZl57HPgW_8Z2nrpOkCcJljbfdV0Op-snmCY3dPz39XDe-eRk55binZbxSyAjWlNqkldc29GO5Wrwy-pd3IK8SNmPVaMX-E6W5IUPyimZ-yxZYw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_1ypV_4_F2-2Xsb2E5BBO5XHptMl0umQ6LGHMfwgDxGDRAAiLb9xqNvrsMJMBBfb3cj0AmcGj_IrSI3p29QphRPkCR4AizcggQk3q3nR8qKsj48WB0m7nt_U1QcyrRui8bMVs=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SAMJ81KiHkQ8PKgoGjAeZ73h8C-I8cWM9FX7iR68nNr055oCwEnqVClJrqDkxyzuI7Oecm8KvURPVW8xq3HZsOY6ah8_C8LNHd4MC3m0vv3fc_9Ijszn1isRGeo-fmxazpU6RA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TuqNI1m0s49DO-GeQPXh0mAtZ88kzvOzkWhhvrb5Ao81To1JiIZxUQh4KlIjDdOkI9wQ3EFE8KbExXi1OofRFnsC3ZhwVvlD_oNM8lt3Wx3kh2GFRgIkzIyfr_LvsSm80o3b8p=w1600-h1067-k-no'
    ]
  },
  {
    id: 29,
    name: 'Awfis Bhutani Alphathum',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 90',
    location: 'Sector 90, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1103776142976001018',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QtON9aT0DnACSjKfV215PJhK5hn253YOkyWGgWr-dfzFZ9v6zmP7elLWiYhhusg3lF7tYSFBPLVloVIukCgyvmxbq7mxDXmCsjMh5fvpX9wjCXq4KPsFiGKPbc9T-Hf4UIsp3A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QnBjJR-t4Rm57smenQKssbIyEYEimwVjeBVDM8jShaR7hKt67ePABW_S9pmBlNXIWV5IKJ8tohx4EZuU4FpDpUwQsgA5EnxFbtT4_lQ4IMVrRxGinp8oOATf39-UbQpeUhEsMszw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QGdbtIyhXpuUVGaldJHQHpMvzwQwRSG4LifrHieSOcuZzyLqr-oGr-XuGLQMg76CjK7T5McQkfaId4d3UuS1FY5IFzdcgCJcHwmIreXJKTt4p-Yy42jJLMXaQcBTHFGd1SHMV7cQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TlE3S1yEFd9ufDw2AH2vpDvKCe0a9njDZjni3mfguLJ3UX-4JQ6BNn2nHw0eUp_qoJ_P_V-hIqTE5_n3uNxAzlI6U8Cck1CSZzVmdukM5uenfT61yt1VQGVt0QJj23lPBb7GE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TqwmvCIZ9ecskx8Hpb_Jk2b4CNwqNbkKiZJWbuUJheU0SWDs2ACn_2_wpes3nmJxH8x5GJzpZMsa2R2sjbRgpqlSAvDYohmi7WjIydZhX6sH8KnypEAs4-p7m4x77GpoAEQkUoVQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 30,
    name: 'SupremeWork Logix Park',
    badge: 'Special Offer',
    rating: 3.1,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13788979476710523939',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sgh9QqZPSSn7C0jQAez-Vjv4eh6o4_YYLhVlAmzXrTLl_MkQIe7ubDQdz-5sYk2jXG9TJs4fVFK1PfNIqLFYOLYT0Rq1NYCGE1ZeFog1g5_PnpX8Vh3E7O42RB5Jctol0dI60IHA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TE09Z0Y-13SPaxxGUNt81tF-qYlvIBpO4m6VG45uUDiL8Q8EI00bkQCbSjy6b7HZPk8bDy9uBRSGSaQLmrsbP0rzYWur1iO6b3mHu0YZ0l657e4t3HdK-FZGEvjHVKPbGVBjlq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SNun4DF1oC2ApUE3VJJe7KU-OebLZEPyuBiEq9W0h5zLexp1Ix1DZSWWvpBPnbb9D3SKbsfjJsKZ1C0A38uQpYtdEUqf0NY-e3ryWLuJLZ_huGTRkPSwhfAj_gus8oDaLmcLVtRA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SK1ZDIxvLmPBQEKoj8dxeonfZPOghjdY9A2I6l4oXMyBUs6KH6n0ODcxhlXLnabJ2KSITNrNkOhXMUywAe_3AuCgunPfbNQxdQjNrWJTJcjVvf7e2Uf54MNUcjmETLiIthLWTm2w=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TVi-g7gwH2g64sUOE3bn43RrE8SrDkYxsJWsOaNypeuAgcYlEv6u5_zjn970YxQ8qdfLoxKIaVjyewT58MyNF5qeSk064vnWvYmhn5Rv585tHLXUxbRD6Lr3hTIvUmI36bOWtrnQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 31,
    name: 'WorkEdge Coworx',
    badge: 'Premium',
    rating: 4.4,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2624281604684747220',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SnUZMiQwKucW89vBMcp3dchiZAi3Ss32BDBkSSplLBr3WhVJ1JmHkkMJ1rKYaBatyAbXGC-xNhV29R72ej71VmLiX66MvZdUlCVZ0R_5a9_kuynMnN_pxy9arn7DvHg3fjpvWA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TYj_JPOLp1wZi9_En_VtQriWSEL8cCQ1e3eTlI679xz-GEO1ODjUb7wMMmn_91ghf7_DAPAyWAMbX4u17X4ZT_HpHroXpp44MLj4btF029StZbd6YlTQOY4GMmnRbIT5RITQbg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9YH0FitSRJsmoEJg2iN7hkTZaRphSJXvBq1w4375A2c3PdWRkTDbazlQGPtF6o1XlaAGie4ARFD7AqrlHDwntIliOXwkvfDxYVQCVLTCGm3QTc2gfw8LYVkE2NRruw2oIMzzs=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RxWaHd6UzJrHObtkNtoE4fIp-KUsNfFYvRUn5GEm6cNAsL2KWtgmrxyC_tlm5LDYE9jChwlDUTUjSLdOe0W6DDK-47b1kzcZ1YxpmsE9EOY-2tin31gt-30MbW9hdH_VH48fC2=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tk0_a9So_YWkb9W40HP9tMky7C9Xc5-xW6txYyt5ZhHxsIqOA-ctxFk4mEO4WVRx2x4_PSXWhEOoMIF0pV_Ktuv3DysSqeUuHGjdjNH6uMi54kJtVQ_UGOFQiwoaJVYVn2pPlMYg=w1600-h1067-k-no'
    ]
  },
  {
    id: 32,
    name: 'Workwings',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11576920499905668143',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RzHzDuJt9312OUhCjks8ZT70myioG0r15Vnm5LbhWP-jd0iNjsYE_TlkDZGnsqc-Ky_ooDz10cIJGi1bOUe2IubQOjdPYBIl-8f1GlS-jSTRy34RL4fPPhUZ25oa0x1-CzZ1pc=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7kfRJLBHXE9sceFnnqpGvCfKU1eY_sIW_GjCTC4NfRFF4kLdtEiWWN9KLbhLpGLo6cqKVOv4og2F_0cxxgxezj0pvTDBivRTa8uk1R_wKPms6kW_8toQ86KgYnkPFip9Y0Dna=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNeOwQO72-kNDhuAmzI9yJ_OesUGi80D71i1OPbVGekf2dNgePRm4iE3qHofirZ1BT0d_RpyO1XZUQBWlTmQtauiRb6nCdGVDwUeFVucUCRnfJdHBGwPUaZST19anpLHBVM999=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8JwCoRGdGUhSfhaDOcsuIiqfYbV6gGhpwTXoX2dyKS_gh-Iu8UzlQLxD7ECxLUaZ8EmZFyPayz43LfOnIk3jga1AYSwM8hgfIqRpVx5iGk9Vp_vfo8MRWP7-jD6BcLjfMtqly=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QO5d73lN3yXGgaDP49Boks88R_69gxMC3WEsY4sHZsInFIw1Z9_Q2HzrNYhlYmKMBUQrgmKWhsRz1HQP77EaZY-FCo4Eu5rMtgnC7zZfpgq-L2Lv9QDfWDQnBIUqzv5-wxvHcF2w=w1600-h1067-k-no'
    ]
  },
  {
    id: 33,
    name: 'Awfis Majestic Signia',
    badge: 'Premium',
    rating: 4.7,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15119876279800274577',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QV_xxGcc-SuQnN0ul_EE9LwqNhO2fo5yoPErCHKHjeZwTwUoMur8bDhBWO4svqfJbr1LdkOrC6hhaQ6Oa0gN5fXPisHx_PVPx5EIT-NZJRgPjq3Ki49fYjln3_Iwb4POGaw90UApHJkjem=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RiESnRM1roUH5CLsg2vyHk-mrL__R3ain-FV3208l8ZDIcEQrJuxOFbRm6X9AGEn3lijDRAq8DFcGWEQi0Uvvy9Hc2rV7GBhWUkS0JeswV7baQZG0qKPe5fyJEjCOx8vt_HmuHF1YSnF3C=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S_WeJUqY3Kxaqq0id05NubZov61TguWlOkg3Wlm2153Y3K-z0-n7NfMr_-zsQDND2DTczCJgYuHcCSFr4rhQERI-F5LeeaxtYItmwtMGiTPP0l5P7L_VJ4KzqBh5fAxwCjKDTe=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5raLoTwX6iGHrzKSrMu6vMXd6eEekLV8RyaAz8SoSKi9GNcl0bAqEBDrIvtb9bPiKeTmtA4tANrFsyy7B3zg5LjKOw7KaB1FAcNq7N_Gn7zwD7ZBvMtxFZGuyNICRXAypYH-173A2JW_u=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QPPsfj3nwwtUDPkeh9jh4w8tzb8ZsHicAcym20-4qOozekMeiqas9nUyAlkPnoTO7gXOurW49mcSf3Z6VdZu-gR-c7EI5Qn7zyGLky2qec51QymehX-ba2LGV5OqYFhsmmMlU96x5uKQ4=w1600-h1067-k-no'
    ]
  },
  {
    id: 34,
    name: 'Ofis Square Iconic Corenthum',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2731433877623215506',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TKuOJCI6cAx8cPiuaT9T4HjixYq9q1Y3UgrKZMd4T0EavnnY2MOBpscjlzOlFonNpMkxeWSfJPYjjl3pOpbGJZ8eLDxQomAl63XDaY1tWWgd7OuaR7KzUNGWYOhRbV5dVVnE-vrKuB8Gkn=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TlRfS0Z-ODFFLN9hy6gtVeNlACB4n7hGTdnfGmVZtG55pG8K92D-N1d-T4DzNrx8HuGJl_44B_KgsK7dVCCGI5yufPa1sPqI7vO2LBvTDlE2Zd-ukCNdAaheEgs7Cej6oD-Jw9sj2_vZ8=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tpp6z4vApWj6IKO48rzCN_M9Cc_qluIzQ2ziD47FHVM8O2nSAVoGFwHI8suxLXvoaQSDgSDUEILxG5NrphzCidHGBOwFSKadA-5qixdFf2ulhW1daX4Y0-19BEy2_j0G_qt90bjaumjAwI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RTuE84_9izUDo1t3lt9QRVABDmPqRpGmV5Cs5AYzORUF6aIoaUs7E49StFcJZ-5RJoJdoT7yynEqLMByaX6k1qkkoFOX2q-jInQ0PsoRvBFfctfA2v5YUcHzap0CdWIeszVFjxQpzZSOYP=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RXkkoXCPwA3a5_tkDmGq8KPNtF2P2Urmai7AE0vOHAI4jBDyizz7zg8PHKsCa4bzkRGw6zA0rfiHeBlBtof0QhUZrBF18nRygIYdCabGIMqaU5iUZVX_9fDvJ9j-4YRqlTTvM_jz6BDA2k=w1600-h1067-k-no'
    ]
  },
  {
    id: 35,
    name: 'Vatika Business Centre',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹12,999',
    period: '/ month',
    priceFormatted: '₹12,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10461180311752664552',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THQAOzR_z7nMvECkKxRSqLvVg69KM8WcNv1guWBGpCdRZqciKPBr7fysfuetJgck_6PqXwKznkzdyoqHW_mTGuoTJm-mgcZECEvDP5me6Hn4YMnygnekmg_QNkKXYY92yQorHIqiz8NZCG=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SarOTv54b_ogSbCVukPM55pXAzK291WifSkYCUui5kWPdMvGtbgTwoMRF2ugHz8qq581LzoVwuv_u2VjARbqDhZ9ObQ_JBsRKT_rvqjBCoU-Bk0W-FoFJY5Um6YyN3gyVjeptcXR2WTlvk=w1600-h1067-k-no'
    ]
  },
  {
    id: 36,
    name: 'Worxways',
    badge: '',
    rating: null,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9950897387178352064',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQcUZeuA5zL8F7BHzrIxE7Y1q-m2Vp9bsf0wilIVISH8UWiHXs6tGQnvJSFS4GhSH-10E-Tczt5Ixl10TC_8IQ_ZFNuv9ImUXe48lxjxaAttvtJ8AftdxRchCMSfkOblLssLZDfLHLDGE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8QL0WmkuecbRKX7aSLdJb-OljM-a5J4Y2NTn6HnIi9TQTh1gzR-alyNeboC54660-hLo08ens36HeJus_vCjQKaETpCMfRneSB726cIOQOeszf6SFwqf-SOMeYV4kRy-TNuKQdRe_QGmW=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RjU3_oitO66pwr6_aAan27aZYHDVw4O9PIcjlFhrxvfpN0DyC8crHIXzzexkssjgRNnDG0M7GtiRBa2-3Yu8ZdkSRWEFbXAODCBJskj8podAbjklq5JuITMnZE-CIXY766bZfa_6Q3b3Ls=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYJkF2Vsd_ydGAI9w8mI-3Pub5r9NXdb6f6MXh6J6CYw1VUxZmXygWAzs7p-T-aX1D0EUceiR8iDeSNY6V0Od33l0-YR0lg8f5Yh8IXXgT4e8UlZ9FxlAxiFxcTmNEoIrMAn7dXz02wcA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rc20tHfXe5lUJkRCMB8r69B-JdEoYvjGv1i3oPjzWIhYYxEY3gz6JWcCUOgWFWlGlXtDPsLY6LOs7YGjdFd5dSsp6AxrLK-J9hqQITkrxi2mTDSvseFxoH-Cs0jhb4_bWcHt0CKX2czBLS=w1600-h1067-k-no'
    ]
  },
  {
    id: 37,
    name: 'Incuspaze',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 64',
    location: 'Sector 64, Noida',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17605643744736632436',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TI7WSGyYo3UwwCwcs4DBmEmxlif-hNbbqJlryP154FXoRak636UZjWcWJapqOtA5vOqQWqJ05Kr5OFZ3Zr9WS1YfrEBeNwAL01qO7QQT6K6C79WIzisJ7taYsyF2D2Tsl9kw4l=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SmY1E8FQ_X4emJDRdAsQM7TbjF7iyrbOk3_e4ceOTMEthgVpZT7cHkfjzWJb1xeaV6dhVHQMgCGQ19wMj0ED5NIoXH6zlujHhrp6fnDQJiUZu8V4ywLSSwc_Q0CDQZw33iSGqF=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWHqz8F8isJZZvLf6JgisAIEN-j6qXQLmqY9yMdayThU6eNWc8KTTAfWVpQB2oIvDbpX5AdWgRjAlr2Pvf9ZGRPoOSH8xZXilRmPmYWs5KuyJ1S0Cd4c6ajfUIreoyo7BJOukm=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TPMKGkv75_KDdvCLB4_jvuIIN2YB0JekyPGA3zXM4-1lway77ij-QlwFhs6ASgmXBACGY4hn7z-hERkVmP2O2VtUvuwFMd89ETVu94RiNMpFaRaw-hmwnWu8XCSxbnlGnFY_VMdA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_uALQr0eH0WuV2efsfTVOV9WqipQSvUI3yp42Kvs64KR8I64VpVBiI_WihEGyLjCO-V7iYatus_2AEclkO1W9iDsixooXSYoqvpc9xLeWfhjNpQUKpmjQ9TcXjJ2oYDCoImpu=w1600-h1067-k-no'
    ]
  },
  {
    id: 38,
    name: 'Serenia IHDP Business Park',
    badge: '',
    rating: 4.7,
    area: 'Sector 127',
    location: 'Sector 127, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=511125472568401548',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_e_-MCB5SyEoUMxjW6gvlxkaeCUYN7hSg4Lu88UnycFBn1cawMVigPTD3pLEKRT-PoQRLzvXanz84GlUuqgCq8VnrFBV67uLixjhacebxzY-UGUgfephomMnVJtmCrAilr5tw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R5cILrd4rqBcx60oyTE__x7aH1WTP0IUBsTFYNkQ2PTw_pprT72lOoqa6tJDbibEjPaEWDZ5JTDJFXHpbnhYtr3zGYZzoo-Vlvr0L-z6m478TS4RjuqSRbbfU2HJgWQxz7W6ZZu94fx7Hw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SGfbB1b45B35enWWWtqlEcbdUf8OAxj4dddX_34l3nHvi9Q97uCPm7aPdiFSpAYJrYRhXt4U7Jt8gFKfgAZla4rZsvxE42-tNNEybV0_HGobctM3wg_ACORaOlHy_Dm7qJ2zZx=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RvgWtBhK47KHmL6ysVIwTgFFrfqZNKZDxoRd8_LU_SW6tJxEw-BoF27tXvuXz78R9wKRluIQbCglmJt9nDGajppj44ji5YDHJfPCO-pBd2VInbB0C0KVlU9NFxV7KvNP54zF3ubQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T68pcfdtOfp4bcqBCFm4v6argg9muN8HdE7FHrWPQ6fmOHbCvST95C0LbEkowr_yir8PnsCAApEOeoSaqR3FY4dVSwg5PXI_ZBZ0D87TEIQpaP8rOtzjSvXgfMzEBckIjHcYOzi-MbSLZS=w1600-h1067-k-no'
    ]
  },
  {
    id: 39,
    name: 'TigerCubs Incubation',
    badge: 'Special Offer',
    rating: 5.0,
    area: 'Sector 2',
    location: 'Sector 2, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6870506480286603426',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWkU6vSZ-ukO_YTx1OHcKB0cN8a05th15CW_4SiJ2uI6am53g1V-YcussotRTV5wbYhaTGzK8KuvmqG1Kep2_vG_w77yciXbUIudtv0fh8PwC7CsnIxxTwRhU-TN3roVNdSacjdw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Twz3FpjfCqy5oHtlQRaI6DIP8aUxkLkuXMvD4JRjdMjHF_wCCL1Qb8Ic-s-HeF4pIyL9pyUHgAQ8zt8kI6ximu7ad3BAWuXA22vouAABoimwc-EPaT13C2zG5xwyrcOAHnf8nq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOKDaNx_E_Y58Xm_wgILm3LCqf5iZ88lTDod0z5mmlB0yE8nqzcXaKFiKXmokeu6LQsw5K_2Phx1yzelH4y3_8WrC9gQWBCdntuI9oP9JJhL8qH0lBNczs3u-pdUPsUSo5Jz8bOg=w1600-h1067-k-no'
    ]
  },
  {
    id: 40,
    name: 'Revstart',
    badge: '',
    rating: null,
    area: 'Sec - 125',
    location: 'Sec - 125, Noida',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15231822855134857441',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QR2RSWBMuBV3_M4p7wje8HV26MTovenQgndkP3YyzNKFAC55zV9i2a0RQzemlWVQR7byZg5ENm7PDj8gkY3xG_PtbExp6H1Cy9O_YNWzcqaqDb1U1ncI4kykTlNomMu5dOxrbU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TD1uwF_TkMhgDOi-SWZwyiTzRluKASHvoBEI-YvYhvBRN9rNz1OD4MT_ZCS4nYoiI5ErossWJijRtx-IiOSD6tDtob2_e2RLriBsMwEydcoUTTqPugmh7F5nLPSpwMUEslhBdG=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TVGWioI4uBIB-o792eny3TUfnEQLhx0uu4eNc59P4j1qyWqSC0DMImNOZ0n1er_qMvZ5qudofku5lCB4zGee8RuHPkqhrp5zqjyzNr8Qk_svJ3J1hwjLyyzDefUAvL0yxOGFQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qvvxdf3btFW0qpugIj9BvNYDeMxo_uaJxhglhHGEvYiZfpmSOY25tBkePGzTDSNg4pfg_gfBKTK6U_tpujq7yunZ9EqOfGWty-wkblAUyaocJI4LCGzztE7o_w1AqtkEAgCVhY-g=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRbtyrtvAUN8yMYGRk1GJEb7SgItMGK_pXzaF9hkXrobzHFKpmtVooELMw_jZoTfSIxq3N4DOVs3JM8nv_EBoL-d5TakzBjxlxZMV1JsivGKllwt2q42BZ8XX1foHQtUPhV0oW=w1600-h1067-k-no'
    ]
  },
  {
    id: 41,
    name: 'Usis Biz Park',
    badge: 'Popular',
    rating: 4.7,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1577536391657812820',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RsJkQ825o0cpde0RPDgoDC2SPHk5wQVBdC7-CqtMFuVA-R6v1dXwmqQU2lFOYtFLTISl50YOQuh-clLvgClLVROLPeTyuC7_6pMHT0LWcyrMsgtd4c1VpVDD8M44iGtk8Z8QkhVQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SCsq5HzRbvBaQEpiODbobLp4G_615olaHy7GB_N16J7UTgARF68A2ImVdFVqEyWaNhz_TXKfiXbY3XMMtiJIjHR8z03M4p44CAqL0UHUGdyD-X8WmlJhBcBolzbA6P66UOUo7i=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SNbsGGkL9UPIzgvLhnKzUwYv7WhCtJozPYBLDbWNLRHgRWO7OnrxW8pmogDvhSWkLsV719r_7-YISBLD_B-40BE9_4302-IrEAYuHHqRDmiL7n4QfmMXjLSisOwtI4E0v5Rb558JgKIvX3=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TeoyT70dE56QNeYNG4y_NmMbCANoccqDZaWQ-WeWukUsRtf8rg77EGvYcCGf5ASTQ0KlG0hQlX_7I2twUvX25Ypsmxs_up954j-BY0qSFjXHLO-oFgcJUBxl6_aS0RCSOL3emE80BnrSES=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RP8VMMSt1PU3lvU1q0gxKvZiwCmrfD7JAYOx0erjcsAlD6rV_gYKRnGagMhAZLPTVI-BEjPZbNyyeAD_Qg8oCV2zLonqJ6Q8fJ7AQLeGGv_xd4uoTIqsNTC_9ogTSYYV8JL8MZLw=w1600-h1067-k-no'
    ]
  },
  {
    id: 42,
    name: 'Etherea',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 90',
    location: 'Sector 90, Noida',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12986363367727717962',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RdN_80T4m82-fvcdAnTgO7_qnvDR56gBgsUUo5BjJoINDR8WKJVgVqxFGfvgAEy5BfMo4dWnEMqW8vtUtVds3ZC5p_KcCb02D1Ixwlnw0sFoPdrY-FjiRWd2WA7149VIZU15AB=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rh3CCzInMgGGTk2KwgL966YlwGJSrc0WOzQmrUCIQ33n7C0m27lM7_JrWv1ynVr2z_GCv2Vj_4K7IjjHsYNJ_Oqt-TPCJk_Bhz5PehqYgI4gODxaa12-japaWYQgtcBrBzPaIS=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rdj4aM1nc-hGQoLxP5gGWB9i88sRjv8IpKwMSmzTvEfYHf31ls7eoiPpgxylYLQgyaUEi4PBg1Zq74S_TZFfXiNKkzVebuZ9H0dg9nC7mGza328vFTSGQvyz4IMsMy6x5jNYHF=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sr3auARvhFX79bm5IL1gydjUlwt2MZw9GWkYuAWwEGPwvhYFL8oQunTJIi1PNnG_XyfZMZqDdmvlxH9-zk_wQYHDi3WBZ4Op6Ci7MUYegdceeI5cFAR6e7owuzbsqyMk2fOQUDQw=w1600-h1067-k-no'
    ]
  },
  {
    id: 43,
    name: 'Let\'s Connect Business Park',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 136',
    location: 'Sector 136, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17065727386269434451',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TjpbPpQZJYc-wDZDNDxkUMC0YiIqb3UfNKi95le1xzVVJLYVzKx6EBBbFPbMLKp8Qx2zKPFurEE6xHAF1kw-KC6aFC_CfRgRtFgZ7chf4exm6o57ARJyeXawRtJNPlYIOzBru_=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RX1_cNTLtqoZC21QhHVX_CcPZj18kRISHp5fz7n3xKX427aQIjppIUjtFdM-NfNcce2qVqzbW2YjZkHH8Zovz51LoimZzgq2KIJYD05yHyxU8Pd74aRqzYNBhi1cBJ9OEF3k9t=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REIazlyW2JAGEJUYs6cDp8qpEB3vrcustgNMFtAsLaKBh-JIv_y11h5UvCXdXTEmMEdogzgNac9-12bViBP2GgMA-9waKqMnLINTt95sWBpzQnRjDK6LWwFoK1gfgcR73VY-Zl=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9FeHiSbNmLuijd1r6XIm87EqlFz_gt_k5z7nhje66gJuXpO75NGH_9htXr_lo9LDRXgn5io7wwl_retSn85qzktAl5-d5W2-QeQyy90fDmf57fFVoNCQfUfv3BSSDnigW1m_wUQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tb6DGp1tsJApacny-CLWNrNfOQmIYBWnQUjG-OJc7v7md9-wFsH_54uEzxpcyMX-wOlrrJB0R_iNmoviW7g9EUeLrj2lclJTruxYc-48SAZSzka-OGmSBLiwrdDjFeyQMD=w1600-h1067-k-no'
    ]
  },
  {
    id: 44,
    name: 'Workspaces by Innova H-57',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10298419982885560383',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RVjJE0nMQ6lY3YRJOh35Uw67YF3CHpQcMbxmRtKpziEcASjL5_YmvPbTLRMU3UePlhWeT1Hmk6kfcnevMPr6UjILRD4yLAutuCCXShlcM_GtiWPaSFO_f-B-lxzCiY1FNXOCy6VEGQ3Gf4=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9Cuopt6dmBXrGIo6MyIxR7VE5tpDD5mjIHR7HIbZ-d5gIk3_BeJH6DiDJYpTq4YT7YeFWRJyubYRuiPIYfVFZh0Vdc327vYoUFP4b7gw3uRrnuo885ZpFNxA89V0VeFbb78iHgoO9dP5R=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPsXZAMi5olM8GBNuiNsYs7c_4RTbrdlxS0LVWDypK-MPQZ1bDpipTbifcaB2DgZ01CJmu4FDb6g51YZje8DLYSV7dD8fDn0_S9cZ4EPAoPXIyyhDKOXuMqDM2ZPWRilqih-901u8nhV4=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RanHmH2-XQx7mY-2eLXLFyxc1L3TZTE3wKQgiaqZRDsbkInDnS5rtrOEXHWjFtLCoVbWJxs2yyDFnwogYjM_EvpqDS1JpiELf7pi3qjmkrz55k-Q5kmIiaCXhuNymrnGkmJOP_=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RRlwpLN8SadZRv31EORiv8TEVCB8oDkqiRSKtvV2MZNbkMXG7gPxTLF0YqjelvDXdUKcC4mKslBo-wNLiWVsyK1HvU0aprY3AE7StiYe8BQU-KTrZ_3_lbuVB_A71AHQdBS0M=w1600-h1067-k-no'
    ]
  },
  {
    id: 45,
    name: 'Aspirelabs Accelerator',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 1',
    location: 'Sector 1, Noida',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12440644025617445666',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SojtmUDYe9_AWL7z0SFhHll8dZS9tv3Vr9lu-OWg8LTJdYAEX0peSVcx_GnL0cVVeFTiwORHH_rbamh0y7sS0qY4WRz1Yvoi-k9fP2ruSUn2DQiIDFCk22ndwlyOcSnjHYmjtH=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RGAesg7XWQv02xJR2hCg0lTzfYYHTBR13Fdg8w4nqTLJHP6JEdABTEMHIXJMgQws1GQ_SObk0u0QpGXLAEiLZ3eumJJG0nUz2lnzlb5shT7xLvAVzBXp0-Yv_L9fT6Rx_2mjLv=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S4eV0HsraZ9qzf3PS8rk_cKNVewtB6q0nJ9DvlVt_h6JCHdmW3HhwAla0ioyj4eVDTDKwipNYlFpyjskIS-PVcEP0iJwCuG7QCpJyNtn2TgcVG2QaR2RGqNiPilcOltFHau6ys5g=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rt8ElCQ6CXgnXrjZNIGSvFK8PQ0213hOxQ8obdcrHJsDB6_R5QRPdfYkXw8Whdgcp9usNN0SynTSPsyjxdVkzzljp3-19IUy6R4i7LltOTu9r1alBCXtZA-vztaUk7n3zGWbu7=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QL0LrdmBw4qf9gNTxcMA64vo1tCMoOiHx70Tey2KU9ImbxmK_Sw-cSbgjS3T8tjYCTCbK0VXzLQmkJLq-3N3hgU19w0oK3iSQSJI2xyAtUVuHAsCI2ia2Pam4nqSwg2WC3IZPb=w1600-h1067-k-no'
    ]
  },
  {
    id: 46,
    name: 'Worknest',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 3',
    location: 'Sector 3, Noida',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2993657821577623825',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RIF7OLgvxcI8kkA4xkCGrcnPLZgDtHXbRXgowrKxu3p1ggxAjZK61WjNEDNUQhvSMcliXYu06e3MgB_i0QifHX37ZEOqNOzDPmPThdlPJ8yXGpVGYiIRwJyJ7mMwEN3aedwEO_UE1ZUXI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TXSB-e0ody69X1UpN6fe96zY-gMdQHKJ0HgkctEh9-pn-hY0iKBJ4ccdaJN86s5b0a9BWBPMYjFMX0ghpdHlI1dzUIF3NTOAvoInldjv73tw5dhhfenKnYBNDp4gPH1W0MZdolTw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0VeKlqLeYTN9qbLLxFEuNTQJQLawbQuVg-QLe1J3vKgIJtUn15XklSglxHuL9pMswJrUq8r20DA_7WtSGN7uYeYqnO3rIpv-vvkk3aE52RA17En7jYiFg5VDu0fLgaQ-WqCQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 47,
    name: 'CoWorkZen Bhutani Alphathum',
    badge: 'Popular',
    rating: 4.4,
    area: 'Sector 90',
    location: 'Sector 90, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13833517273774651079',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R5UjSV-xDC-_gyFkA5q8feT2GDvTvBji5Nfo3pTI0HVE52AhLQN5rwLaFcXFWeJljgQ782pKTj-E3L2vLCGwQBshJaUQxUQVKpGjj2TlUf5cEsgZKygUCS9VtCwuoYsS2cKOLG=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWVOErg-fVVKIXPL7DWYK5M2tUw4R_bv74XD-5DA3GorPf0u6z5RRVccqpIvR6KvrG9N3OgtagtGKwVQosip_ScgBlDMazaO9pyhYEqUDcyBFKbhSlwUl3L7aJKdTRMHj-4o-k=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QxqFMsy0GId5T6Q6wqra_3YDbkXeT8gNx72WcFN0x6SnC2ygj5y0hNVdP7wCEfHowySTEI2XTKvjp74uCYK60dafnCPs7t9K-Z_TShzv1lyVDBbWNDO4ckMmhIpAYYJsXRzljwpx1Dk8o=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9Cl-n-MprwS3oDCIwpBx-LNstoDSN9BUwS8kCAjkhDZrHeAPAX93jhpQBfdA2ttnr2p2n-cwC25Kj_mGosWvh-KmAh--NdfgaCS-7G8aSR3G5ib1Jk3NWnvHRK-iMlUKiDug-GPQkTwM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Th1IB8Gmur84ngo3KwwXgYWLuYP10_4T-eviAOtTIPld0mQwofJQji7BQ44mT6yxgXrbV4RpqakJ2Hhiq-0n5BpY6akQD5r15LnwVfkZF9FegsD90WlaxmNIEWeAUSFxoqBmDlkJ21UHkH=w1600-h1067-k-no'
    ]
  },
  {
    id: 48,
    name: 'Incuspaze Corenthum',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10545171977120299046',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SLqkf2yFNxN6QpX7zb-pWQVTwPWi_VmVTMsoLwWAJ48CTazA3KhDocvlrnu_eThyU5g2V-uNmJKGTFhQ-rvv3AS5Nr6wywpI2YXqSm1nF7gxUg0KG91jYk6vHsr69j11SQhYqJqg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhuqVov9xWCORp7t5rCAtUpF8bCnTC4N7SGZyHstQh4wyPWRo_AObUsD6bsVFMHsOeAmPPmJTe4xnPuvRcpSMejbS_HesdMZqx-mOqcGXO7nBYeY7AP-qTxWfW0fP5EncXjIZKAw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RsLXAXu_yp6Y0K6Oai9GAVPGNs3fzZzcHazaBU_tKFtDtZrFwVb9JNvmrisb3z5CQUUWeoxlRX8GD9DDxY12wcCWmhDn0qv0vIie-i3gvz5SDdFFtkPuhR8O9aibCpzEjIRE0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SUhmc1ZNDZBGpZ6ufGosZCzRG4jdAvoUH6wwAtY0CFy565jVC7bwedO4tHYT2-7PIXZ2Q4ySLR9i3X0mwgknw3CTzBDIZmzco6jwIEZp4SpFGFkw_8PV1flo6lh7u_5giqzxaI9w=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R4j-Ict20XQfIUC7wR0ERdG68k07Rkd5NGIDYij79Yl_OZ29ZjvyNPdvnTki0Sf2v4Z-HoSwXTO6oeD5Jrdm4QitBqfyLsvX3fCpW9j8K8zPjLmXsItYiMtP5W5KKtmuaqPuah=w1600-h1067-k-no'
    ]
  },
  {
    id: 49,
    name: 'The Poshmind Spaces Hyde Park Crown',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 78',
    location: 'Sector 78, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6510949862427838815',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3lzvcGdgheLcuk00z3Nxztu2EutQKG1KQbhMV-isqhYCkmZ9-spafFf3OGL42ENIQgRfxapkPo14BpQFMFaL8WpBoQMpnM_NqmUrQCv41ByUXJjsi7zulPdZE9m6RAvysedQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SFFTSi5VJdEOjyfgkR9wU8lJ1SQe0W9MD5csCzPSaV4hCE6hH-Dk5D2YO2ZFEWOO8PdQFI8dZ5nuUD01TV3YZt9bqi2aQZNOY1MKp_PvwpiJcHtyoE0j6AKiPES2K6a-vLab4=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TgK-k8wt-FnYkll93YQywiTJ8MQKyUJG5zD65pLHzFGYjfOVYTmnv8uwQiRsfn5w9kgNxoYhD9M0Zu9GoTXsktd9RYxmBLw5a48p_1QBOdzgGhOLSBT0lN83DNFMmQL5zqEuLJ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9STtS3UqzWjoHzn0AYqh015KbrMpb7_TG8o3zl69j6chqA7-G5xhdDdT5SFk_dZh7kJUeDna0gI4Xmb41DOHYmcWMyto8MF_0U1BNyxnGSbPOWHAtE2FO653VWOYlbMNk21wQ9A=w1600-h1067-k-no'
    ]
  },
  {
    id: 50,
    name: 'Incuspaze Fortune One',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 126',
    location: 'Sector 126, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8707744997479744945',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R2lOHrD84L-Iysl85_IWURvt8bR8z_zOOm86SEzsN-LfNhYsYzu7qe-jDNC9N3TGPlLvau1aEoNmpGv2KCLppXklesltaTVkI1AXB99b7g01JBo358yfad6Eb6MiQYH8ONton5=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RmQF1FqBcDrAiiOKc9LTLCJb9AFW1wRLSWM-iQ1JhKiWxfPbr-dKvXtOGrHXp4Qzk-ug-WBJ5H-tbUlSCJwuz1VbyOQxWL3-yDz84s7R5EMAx1dK6p_SB5xULjOFem-836Jvg71Q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S2Q-xIF3FCnV_1Fzg-e99BDcWUGIhu8gcwSg_Vy9jfJ-WEbbJ6QwGt38fGILPoVP6u2alIxeMjFflKNKSlETywPVeRN9jEPYdWc3rrcR40UA_faIdQiZTpPgjp4qq1TS4HVq9n=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbRWukx7J8sPlyUQ9ubWCRlnYgWGvak4rl5SKrfjBmFgniPoSqm_P2PI_GaPbZOOFifqiOrQXKvNCZcu07ia4dc8rPQp7FLQhK2Fa4DpQW2aUbwPlvh15PN4FQM78Xwr7Uj-omkQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGSDj4Gj8k3N-xXHQ7QHLOd5MjAuuvzNG78s7CCGLOOCQ0vZVnO4QAK0i2mkvROfiVMA3AJo3w9fC9BlHhnJJqesLGoL8emRXftvvc0GZDcAW_xKQx0wp2rWiI_PlqFYv9Z-snEQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 51,
    name: 'Eccopshere',
    badge: 'Popular',
    rating: 4.7,
    area: 'Sector 67',
    location: 'Sector 67, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18110056826746983682',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Te1txP1vLR1EML85sewoVZAORRNxawXJdd4qz_wtljo05k2bYshrevXlyVOwBHmR87h9u9VDqLDaRIYOeci6fT15HOgy75CxjqtBH-NHDT2nk6WVpfvnf3jh0qBbViikjiTrCO=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNnboq1_vSOkO9rUciW3CienW_vHwEGevpuS6bazPTzkv1dfTlvbjKmcuFGuql7x98R_ImlfmSE2F1g7fJ9MXOLP19RttZlyP8Wzk89VjNjLKbng9ie9agAFQjzG8hoYOa2p4=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qbyj756t9V7Hryk_91w1K4O1nUCQBAR5p9aD3eC6t7C8X3mGE8qhT7PRtuRglWng3bxv789JGxvpDv4UjekMF3HsV_LExkU95dP9c1ZE_N0jcPQRtRNntO5bGzm4KfnvNuMUf4zQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TEM-Er7TcGiGjFEnIB6I2_aop8SOmK1Q5_6PMfJAERpYJDKcF4mK2Ld_BD3SuDaBcZawjQv5u-Ojmk0Vswm-SFGv90e5VpqwavHgvOkf0AhFWq6IA23jnMbcDqQrr4SBTaCg3llg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_vDtG8CHqXxqlXqlF8JwG-5hcEAhXvzNgqZVg_lJS3kCqC2ixAHGtrNf01b0irFOQJkVHSjsuepiHmdkk686FzQUcwVyndbZtNBjQJVGcqwzdcsME_c-4SryIdLu7ZYsMQEZryA=w1600-h1067-k-no'
    ]
  },
  {
    id: 52,
    name: 'Amigo',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 8',
    location: 'Sector 8, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3394910171844086375',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SRQnE1a0TOvQ9wdnv--AfxdbUjUd5vUyi-4SqSojMmTRkzhOkMTmPeW6oj-AOKra_p5GQ_qEkRestQMzUvVmdLndCvEw7UaTyzIn3L2THCnA8-cGP_j2fD4kcCbcdXH78Z9AMYmw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TtCeiXjKvff1LP45jm_X8Sx9GxDwDyQgxMJHshzn-uUPm1fdheMhMDCeE01iHpJ027Eo-InXzy7VdfOMosi4ajdstvHn5N29P5EQqzz6wsha0ccyq1UjI55GII9Vp2X37Yk-cZ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S92CHZWgaDQ7YJ002AnD75BI6dKxpGsYkuT729hGj3u6MOZDm69FvqWxABWo3Hb3pZyDdH3ifmCOpqw1GLyI1X1YvTAlOFhyZXBJbtJBCccd8Hye8U3W7j61GJmdcPzAGu36Xp=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T3C3MQ6AwjdtOIY8oJ8nTyIh6U379i3ZwOR1_rw5CTvu7GaAULzJ8hxUZ1oWmiUWePlmB8yo_zlnsEuP5phJUCRJ0kFKhKhjiD5bmD_YbiIEmuVmMXFMGGIkfvfKP8msXYpuWGHQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SnxnN97BbJ5aHVjiQzq8TehygH5HsAOh6CWMFKHq5a21xaCdj4iqRwWeHQW4pLoFrfi_s0LZ5mA9SDaISDTApJxjK0uQSb993Y0aIQ-5L9v1w2nqUdMnsF_8Rwb3QxvyHYmbw7pQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 53,
    name: 'Workspaces by Innova A 61',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3727837277055924556',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QCn5GA4OQHNUDgVEgIW2aqrqjIaaeBNPzQPZqq-SZzqLykG9v0mKPI9vtvD7VEQvw1aX3AoYe1UNbn5N9Puf1EhQ8iT7wMGi9xvfkIMz1AiKOWiUnzncVTe-2Xqz8KpQC1wBBc4Q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RSqZx0oyS6kYD9BDXSeNzME7Gh_imaZclv0bwgwgINF8WBgcsSufr_bARWkyBWS0c4BempyzHWsMe6EJA0a2AlzTtmi-SxCNS94pr78jZc96NEmEouRoF7JouztV9VKf8aSCbU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q82hYdDlMLJ4NJBMfKYlg4bZfhBhZuVmXJ8WdQPWpCB92iT5vLY8bSI-JLQ_bQ0Zz7FHbmssFcs5QGUukFC2GtNn8WUjl86_Vo5_LO_OpT1SB5RKm4Ia-riEUu5HO6gwWnt5hmmttZPgdp=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SGhh_3NB02gutHGw3S02B5lsse3ucL3vGIPeQtjqWhJrFWDYy1rJvrsfDV_iT8ZTDegfhDVMC0AQGKg9aWDDJNwB7AGoyt8ai85Vzj8Sd6HnPcQ9UIW80U-XhB9yyuH3Ju8PwY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RPjmyear7K78MYGESZMJAWZcFr6IBEVmjKRcc2Ty3UK35Se-0XdvAwCUvdzzbrg94G3V2qw-X_e0g7eJJ7AiGOkpmeTVnQmQUt-_kkm8ywHTxV7j_zA60fQX6Pl2l1awUgmrUz=w1600-h1067-k-no'
    ]
  },
  {
    id: 54,
    name: 'Co Offiz',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8772228302065787581',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QsvSvcI9MknUcLHNym0VqdCuHHZilrXqlOKC7h4YWA5arDTJWDtWeYty8yPfDKQngXXP5a85eTo7XKm5A7ZXAS_M3Lgv3kVb9HzgkBb0GcWoVVwTVRtZ1xpmg10EihtPAo0gfMIy5DFLU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T4Iu4g2hfbtp0q4TGV_Uiyd3VE7pwfbtyOM4NdSyOYbd7fCeohwIZcpaF275FskkWGsDMUYKr-FQl6cb_MYQO9Nc8NondSP-UrRcUeAX15hhrDiHGsbPNwg-ClqFxP7fsAuTcykr1y9fso=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QfmJBhnD5gvdqXpMSLwrOK0bCFoDJini2wDPTj2yHKX0_sQIOfu7GIKXlbs2oiOEFuRDI59XUn1rJa5nNBhmTUcCRLRgelPtxzvnZDwinDGKd-iV9JTnnJfrGOPNqzFZsh612JxPOlMq72=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0CTswCWzlCdsiHdTtOR21732RcitfvWWryJTATLnKqlzaV0lcvFHRisi3YSJ-GJ0wi36-0H5ABPQ0uKgwJKVCkAzVSeY6mkLfGcoVZWgsvdNXGKvTKjQtFdTcjLohotMFPM0hmEZRnXg=w1600-h1067-k-no'
    ]
  },
  {
    id: 55,
    name: 'Pacepro Co-works',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 8',
    location: 'Sector 8, Noida',
    price: '₹5,299',
    period: '/ month',
    priceFormatted: '₹5,299 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8531451022386420461',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QSHNV_42PYD247rcRk8NMoFLf1Yn7sYgDXFMlm8aqTVL38uWHjBiXB_HD__nQe34-7sjBqL3HfbkvMwdkoLKbemZogvHc2kBrMivnZrLt0lnhUSahPpfTrewz5f6IQTtCtacA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S7yaCVz6C3Suo7vMqQAtU4Pfx0wMZ_ljCjOIB1YNWipyLOQNZZT_0hSqMlhvhUKioQc3okQ9taTiAHsYD5SJyZAVOnx7A5HjjASgOZm9OuVShXXA33ASt7wWF4uryfv7P1Hlnkd4TMobM6=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJjAA91ToDCRnVAsAAqzgtBe6mePahydNfReCZLsLaOUsy45a0SqeIR8uwB8S_adXRk0jQy5qqTmGj-KVyUitYfBE9UIMQIlk8dTiHWuNgtG0iPI_8aWM0qjzIxKAYK1XYw97oRd-EU3sq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TgneALLGjohlWCe4r7Yn5cEtz5ji6VOcZprFWl1vG6qlPCtPT-2F9fjP1nADyIOz7rUkoa_9dX7kJGEpM-sLc4O8QFn8Yze3jhflE4IVhJcv89uNLNVAkrr1HANFyPMS71ELSC=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-MMliOmEpb9SG_hLtJgb9LKCrdAs5Ts0S4rLPS-7Nc_oKseSt6M0xbeznwoWj3lwOlcwA-hVg9DOUNMlCgHKTFSL-Jl2Fij4Tn9brP7g2FULHFpBD_pWMxq37NsUPpNwGeUe0=w1600-h1067-k-no'
    ]
  },
  {
    id: 56,
    name: 'BCogent Coworking i-Thum',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17011150840136956930',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RSo6bJsEvTqkhJs0o-CV1e1WDYCQs5s8ZvytmBwEHMBBuJkicdXLuoK2jRvhWXH8AN1oiXoXSLs-ArvCXIOPYFPOCOCgInfe9PAraGZ-gebaMS1jX0SO2CCMl2GNJJTMsoQ-TDtr8S8_eM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rm9Ht49tLdX2oAy0ldEq-PgAwGM_uRgUOFRpHom6ju262WrC8uYtGzHt4z52TB2t091z1ttiRxbv7LR9Dxh1XI_kq1fN2YYr7X-Nw17QcO2e04GNrU6yskjv6ob2ukebxtxQXH0A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RfoUUfNpXSThFJrywKv241ODIGWqlBhA3-7epoQyxBAjttjUelEsLJHGmzeLytzUO89GT01R04jbhqFrwKiLVuUDf5bCbckOypikTCQOp7rHJegy2zWw75q6_Zj6wUgwcS1mI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RKNDm3U8BxzOMvTAsmbASeEmRVL4FsOG12BMwvsod2SSYLTkSiJWHAgQX8uU-99FAdSsIq-yvVElCRYq3tAGM3YDbxLd4sN6_xrluPIVeMJFMccfUbDjVlfQGFgo4tiwMVqCSX=w1600-h1067-k-no'
    ]
  },
  {
    id: 57,
    name: 'Execube',
    badge: 'Popular',
    rating: 4.7,
    area: 'Sector 4',
    location: 'Sector 4, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3195408705086968929',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RfBh_AYqpb44m1yGMHZWda841EC2NZJTb5f5dZEShd_FQfGNME6qjBe4SyZXBNfJSVYjnsWoeYhviTFMeabt1hvH_fWhu1gPeX960l3IfEbKtFLr9h3l2DZk6mbbIp8oF04dZ7=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SimVo539G_iuMol9_X4AUIwszXw376NTAq0wlnXIlWI9A9vQ-6hkEwc9ZalskT9wvhjvZusTMxlEbncYHtZHsol5RmOs4JKetSKQTi0p3dCKAIdKDdEPmlTtBkedGViSawtySj=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SjOLlPrFHK9dC_w571yE-OIH-aTc2ShuwTl_B9RD3vaoaYCDdXRCFJyCka_WhSUqaQ6VbdFuvOAwLtTvArBDt5R0EOvi7aK4p3P0dtBF1dABTvZe9zmKFSI7vDNDFw5sj7-SCk9Q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R6yy51kyvFCb6dVRUn2k4p4VgZ_2GyryMV0dnaZpjHojrdinwDwfYixcagbE8QA9FxwTsA5AiwoTwjgthvImqpMnbCgJT5rZWQQhuLv63ufOs7KxH__9ZdfFc_dMb4-oQLkpGtHQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q-xXsu-78GGf8WcXM7Cahnpt4JCgueFMN2C4rGtHi_8dpIraxrVDu2haSusNodaoscUHsrQ91Vm2RmcpsOwSvXkkmIyjAQxA4m7yl3rS6-6V9RsnUX180CTbvCwUs0gIfOgtgV4Q=w1600-h1067-k-no'
    ]
  },
  {
    id: 58,
    name: 'Setu Space',
    badge: '',
    rating: null,
    area: 'Sector-18',
    location: 'Sector-18, Noida',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1619390933480197980',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TUZz5TqDh8WhDVwZDyyHbUgY6Yn8dDv4_MFkCjpzj8qETXA9mFHbDALnrgiiqmlqmEX9Tg3hul-7SO_02N-_LPC6Ck0bnQM3YDYAR2aMU9pkl7kkIx9l-o4oNOBtm_bnk3pPMZ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWZcbFlZ3Och_uwQocpUWn5wfmPMIaVnNqzPfpQ68soHWzSLaE8RZ9eUodMJTI7he5Q1Qo2KaQsYc5eqjsPfqh-SSanzd2YqqAYJdTxfnYtl454DOlsnl3CTyT31_9mtskYS-wag=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tro94pVNAx0OyoRQwm0oM0HjWz_rLltonzxqPxB0qR1cfZLxEaZVdeqRTUx5yMyuV6GxX1t0BWpAho22LjRUugHZBIj5ANh5jG_246j3k8nrrERrWmTuwdgN6dBPpl0KqMJ3S-=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ShUbXFtIO4kJo5ZtJBLAw3vO_16fGhgeID9v623Uub9gRsFcmvhV9E94q2XK1Ie_VemBsPQGg5fepiRKAKsEMlNT-mpUTmz6UWWm5jY9FFd-qIIfXGFvpkMBdC0By3DOgdrSbA8SM8JMU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S16leQxstLu_tTEdLTdbwC2LHPJYWMjy-KGpnetwbfa9BFnjGOkZquBzME5kIqEux2gaYvtcrV-G8lZ4CnXeXrwCaAQ1A9XSyLWipQYGn2iv-_WsoaM2Qr0fipBn4NxnCiPTI4eMCcXmc=w1600-h1067-k-no'
    ]
  },
  {
    id: 59,
    name: 'The Office Pass',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 3',
    location: 'Sector 3, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12053071757450009186',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9S1nIyc_rO0myvGh4hAG-0TQ-ipKOUA3RBHGBRYMRZF27hWZQwH1NWqGsfbuDhNqwmgZpw6XqsX9zSUlK4wmSjbJ7AM1XQANdlYL8zYA1DwJW2IvTQTZ-fjDjqXMnChtoyxQ1cA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWqTZKJ9fqTjbaoPZ0ov-1HQjULO7_Py7kOldughPKXbbvAghTZWOhgKcj6esw9YBSa1MtEWsxXJRiqiY9IanB3tCEw9G_uLqZKS39l2VndodOWep_J7YnciQ1l8HM_o54mejU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbH8OMRcr0Rg8bBbw0bibjaU9T4cF53MySfTA14haR2iB9G2BXS0oMvC0CVjJNVQBsYCfJqNUnvrIRs8dmSYc-scY9q7ZabV7QDXNip00iU5CmCoO2Ro47xtKHrdvMwFqvCFxA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RO0mURffto1U1Bv3P6yiGQNBZDqPWyHwNQbVe0IQlATAPwsQNH3EMywUH8P4XGRoKU1NS-ghpAcYktVhzuHHbWXsgc8DmqCs0Sm5lGrtpDF7vlWE1ZUlr7yqL0TsukUErGJO8=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qcbz0hzCKNE4eoBjUKNvqMfwObuhvcLtJqWE1gOl5oPv5BloRVbdRCl2Dr5Wmu8JggAhx-f_mVhDygf62jfHT3R9YLj3D0CsfHnCYEiFsIfEbBPwwWA0R6TeJ8qhJHzDRFImvn=w1600-h1067-k-no'
    ]
  },
  {
    id: 60,
    name: 'Qbicals',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2656203795496698434',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TuuexCLfsNkfGbqf-7WBOIDYJLAS1YI10KKZ-gxZkZa0oQLijoP2HHQKnwj8-upLaOnpY5Y68DZSKYg_RJtj2zWTVERd_tX3A8k5UBucCroEgRfD1Bhak9WCt-RUKJEfJ90kJe=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RapBaJU_erR9G4yjP9EL_atMtkfgAZ4Z5EODFqP63VPRGg1bO2Lep0dk8kfDFqb5PvSO4kWO-xFQfdUQxJ4nN0DEh4icS-FRIBDHwQ5gDIVikZLs37j6qPOaIKCQL-PzpZFGqE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOh0cMrVaL7oM4CeApAzRMc-GTebbWqNv0qASVeqAuiEa5nkCIv5Y9oSs8s098P8nvpTQaBpPYS5MRCIjWKiGQHbNd3z1GdOgRo60dPJsNDclWt4eWCNL3G6eTnXslxFzLlvQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RshdCFMUrpoHMCZGRsVJWX9OJtx3roxZfe4CTk4yQrSahnmQT9o9Md6TWL6Vz233VDlHsdwi9OKoKyXTyA3l9tjq5QFAz8acEmAE3qsUoOZZHI4LJJ7-jmlicUduR23VGqx5-2vQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SmQwivlLgiopaTMyTa9qcHBfBS4o7sna94x-8iSiPTK_A8pnhyuilMzJkPiAmDA6Zh0osjERaW0_7MZyX2C5VY2R16tZHtYB7noq3wHYOjBJHk8Y-cXDHZDDbwhP811_OTzocU0g=w1600-h1067-k-no'
    ]
  },
  {
    id: 61,
    name: 'Parexl Workspaces',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10687816881711247740',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TslHI1NF9TfAKvqtU3ytVZnf9he27_vwaQ2w5YZBIXbdzr1xerUFWldCaoVMpxauUEbxS7r69j-GwLumSUylUgynI85Jyqfx_2hCIOGUxFkTODZZxN-WT3gQj7H-UuRf2AxF7d=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TCmNmXJKcOK7D9UNp0_zwRguOZCv0SnzEymKKs20mG_DHHS8kSbQZZMA7OfMSf8PDErn_bY__dmtSC_rDSGmDw3B07Q4_FNSbRbAl4tg1lxBcg6m5E-s5w4XixwQoSCHCDcEPy=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QQBLkBZ_-dAdZv07S-i_I1Aerz7rXUafUgO-UDtxgvC_IBb0ix_8YHIXKmp-mWWVYSZ-rSqTKRkWaUB61zOYeDtkb9MXgCoMIDtEnq-8-O6-M95kQZ6hIVPYOZyuGIA09PBXH2-Q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RGtkORkZPDu-6amt9ov9YBei9N2pcb5LyVyuwEJD5ukI6qjHSWOF53D5aGrsD3zY3BFNtbJF8zU2PPI99AM29T6tPMJSwsrlhK3qwbSHI7vmDWh0F5G56lYsc6IOoDCCN0N8yo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0c3VyrhG1qSYeRkfYhLvrNBeG7z6rpsVRYt1454xjsHJBnSoO13bFMhOKVfReFEb0yHwjWm1yqj2yZhmscBo1ynbPbIOJCJfS4hKrkIpzppPZjopCyaoSwVjFmL6Ha_7-v0m8pA=w1600-h1067-k-no'
    ]
  },
  {
    id: 62,
    name: 'Unboxed coworking',
    badge: 'Popular',
    rating: null,
    area: 'Sector 65',
    location: 'Sector 65, Noid',
    price: '₹500',
    period: '/ day',
    priceFormatted: '₹500 / day',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6691524411509387052',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5jiYj4MZJNyrAYohHuuSILRDocEnk9WLaWG6gZF5Zlq333nlA0pNbYmf5-uxolAcRkgyvuDAhdic4Rwy9MUujYrofXjKEva3pxGSGZo1OyxlIf-wLeWohaABQ0c8ghRg7UeuiFA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9mNIPHsH7WmKukJL4Asrn-W0W_CZ6Y1zR_gfRGowM-u76rlse88bzS6qrm5jWZV9OYh4gL9RypadUDMiluurdlC-BkifOGB0tWVt4d8HERbPHo4XNNU3LbSiijAIvWTaNqq6h=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TtdKjq4xn5PHZevm2s1td2F3Y87IY6GwAMI3knp-7CRhpRkxDYDobiu8n_7NJXajLcZtCR1j0f3TLc7MmPglVnZ-1Y_lg0MDJP8ybqYNidt2VVn6CFrLfVN2pJaogd2b_hKNve=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tf1KTwYbglyY7vrKwX27mwMUTd6A0J8WStJ0j0dwxwhvlLowNZN4oqpacdaaWpYHRLChmk0eC7yU2xHfSnzQgwebCjKjc4ky0IRfebU-5yw0_-x5iMMY20SypPRKTvW-YCU1aF=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RvK4UE5QMbPk8XWV5QtfYTAw7idmSbOCOHkZYpvrFb2Eem4XgeUMORJWHc_9shjSwhSeWjsj2yNOdnMcJPdIw24NEavmQAKx_nb2qnDG0CjoRyQJO19D6YZ6AyZrZYN_xp2eyW=w1600-h1067-k-no'
    ]
  },
  {
    id: 63,
    name: 'Office On',
    badge: 'Popular',
    rating: 4.4,
    area: 'Sector 2',
    location: 'Sector 2, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2544041573337421076',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Txvkzw3AhIpV0BxnwwTVEpqf7uP86Iqi549ERANLe6jBInb2cHiRbWKJp3z4Bnh8ICP4dfGpsBfv4eZqSttWNBLRIsR27HR0YgtKzYDuZB8-n52dgvc9260xC0WPAKjOoOrbif=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SXjsCjrF7ak0iNahLGAxBhRdxCNclxUHN5QFsqo_EsJ9qtkGxuLeT_n0iHfveL_Adlwijyk7E3dDcu_i9lIDm0ZjuswZuLhFdSjs9nsgxDd6-UEVdYWrmxH6YZ3vaJDI8vNyo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RXbBSWY8PRDgDq094UuXOV4B10DZRtc1KNz8KyfxxiIctRYJkM9pJ6PgLqw6iBj6lzLRqBPKtOVeg7vILRDqmGML4TeorWJOUDEYte4Cizl9Htptk8lLpduxJslIhlyODX0WDY=w1600-h1067-k-no'
    ]
  },
  {
    id: 64,
    name: 'Wizworks KS Corporate Tower',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2096928397403875240',
    images: []
  },
  {
    id: 65,
    name: 'Sharkspace',
    badge: 'Popular',
    rating: 4.7,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2246047790982294060',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RTwZuKenyp7icO6NxUa9bUdONZQp0wmCigqMIbe1dEeNW441e7OydSJkjvxN-tUgzVep5tboAyW5NfDeo6Ucq1B32cj516BIndJndvPOPoiOQChVwMTtRurPjOebmug2stT-39Ww=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RpBf-uE0mF_CgNCUYYfGgIretya1zeUVEEtYmWXqHdaBQyFZ66bvH1qP-KDWcaPT1xFg43Jok1wOlMif4WY7fSlAB1YapSnfS2Jcyj6s3Yq4mIqVPKOmivI6fBANHkj96SyOI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S7YGao02EqQAl5JVkWwS2nnPDc8PvRJywQQFQ-T4O4CSmNjhWYO630FERstjOev5USuh1FJvc_TrsXFpGcAzniGIQjQqtZZ0Ai_0_KfHSqT8MJDLZpCUEr2ZmioYWHxOWgvWrNwiIDN2u7=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S-fkgS4uZzFMWKUPu-5Zi67ERKfWOeicvq_zs0TnTBgZcO6jxjRKcHqLDAN0R5HEQDwuKTdIv1IoX_-vvr1cYvo0Tch3iSeVNU7RfiopIBkOyHY1-tgOytTe9QjI33m8m68J-pKg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sf4SYrSaKpZnu4pk_FhosWFbBtx_XZiXqTL3L5uyKKyn1Fa7RRwAJd2jZqoUPo1uG2JY4v38CXb32nmv7FUc5VOSj5E1D_pW8WUDE-kdRGY1RiVprE9Nsmc2a1-j8O5at195coCo1_lsJP=w1600-h1067-k-no'
    ]
  },
  {
    id: 66,
    name: 'Workbox',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 96',
    location: 'Sector 96, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6497825048180575061',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7yyg67X0flsgKady1ZVO_uyqtELzoJTYGfCQnrJw9d_1gfN451kEdWLKUh0ijgGPMJPP9TQLXf0u_zeL0NnsJ9BEDTnAtLyBjlZ0XsDw5RcyyTXMB1YL5jTXMH2tyDRS7_zw_B8D_ldbH=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QaQl1S9ksnsw85Cv2FZpTPr4LdqN4wUbtMDrEbuzqQ8FLwXmmSKFZhmXAiSsf6DGASmsTN0PcTJNjd7-WEKGD36OGisscnL_JMI77qe01O0w5mT9jTq00MbTDk5UUkKMCdOfY7gg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMlZqT5mVaOQ7qG7YkvwKULjZKtH4n2EPgrXoSGXUg18ku-FVlPmGA8JT4uY-TzluKo_b-JzOPUP7WTV76_gs1qm8alG9VHBILLXvmOhWwEj8Ev07rBvwpL461wOfSExMJMrSx=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q489zcypDNL-FD-8Ed5eOmFVBrQPMMQerKG4fQH6Mvuo4nd7PWPK7dAQwxhv2PBWmcoOnfX-Bp0SIJDMWWVBij_h5ttgtkfCziHTBNH_fjrJg2Xr84ZXC4R9kHPzxZa7Ew6pylBWJczv4=w1600-h1067-k-no'
    ]
  },
  {
    id: 67,
    name: 'Shahi Cowork',
    badge: 'Premium',
    rating: 4.4,
    area: 'Sector 8',
    location: 'Sector 8, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17398969607358163299',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SmMqXwM-DNN79ORCNigsp04pSOApQvIo9Lz3oICMoFDxRyontATmm88_Neuccu5JCLuLxIDMXBZAxdD9QO8xO11gJaObVhqEm2H026PfbzsSF1OGlBT1mu9JxmkQ2w__hhXTUJrO8rfoY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QR1Zm5Ha4eltrasoa8gxALUqjZ0ZpJQQVUFfEsWb-S6Xi9AVZntwt6NHcSaAIjZMw-QWqmtH3cM1xxVOu0NCecOqOfTXoTce4jpJGRK0J54dtc5DV3utA0CvYAOIUmKX3dt0xSRssl0QaD=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RChlXr4TnsMpAUE2Ju6yv0EKqq3MN3nE0dVLtMyeB2JHnCd8VNMaIfA-2C3Id0GpLeQV6DOUrHun69bnN-J3eAVIMybxUXiixeiOaTp7D8PEOtQxLLOYgtpPjlSsHgOray1uA451O-Pqo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SItOXxXHPvEXVdSwgWhD01dHBZDnhYbw74IxDqyxLHnQ2Yvbkz0flgXBqd767ZgBoc0MuahjnpvnN2jMsKY-J9cuQmiUv0UenfChvWZjOxBNebLyDFp8hY4d6wzWP0YyKn0C8Ti_DM0iQd=w1600-h1067-k-no'
    ]
  },
  {
    id: 68,
    name: 'Click Office',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sector 2',
    location: 'Sector 2, Noida',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2708633007078176498',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RRzv5F0dXJA2GY-cXHCVSLr9qiugi4p3yiG-ugx7VRicn6sW3xkU_rYn1MjVoq1l0X1Y3AUl7MnX7lcSjSPNifo9MsneoFwCyeCTf3NrNK3yRh35gfvWsmzqz-uV0UahQU244z3-z1svM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RUDs-4q9obPUkmLTa21J8mCfzNwDY3SIzN7oiYUYL8BzeVd2ebMpW1LLXF9CkSaLI6V2FNBIkWbpdEKs5NxiNgox_Vdx_PTaaBEV7ZSVQirAS38iwSu-nyptbohRJdrG9iH7rbkcGQyA03=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qr96NZtT5W1S9UFzjhaCHCiXPjZSQnu5lfO6ShRQDegVcNJU8BOTbHctEEtjX1eyKtql8CNd202QlAdvJ1SNN6LK9PSd0sfx9EqUtrSyrvv2uRBEy0g3BV2tCKlgY1axh072rM-tBoXhOV=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QeSuugerT5VkItg-oPamqOoddWHHd9qD-zbHsgjuid4MGjjrLh-1tRk-Wj37umc6klN48DvxBSgbD-1oITi_lxNo9pl3fUi_NilgUpaZ1FvXEGXtOiKpYrzObeH4ljK2GVcGgKUVPuTSU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0lJoLg1ImU6aYrp8NmIcG1jSOTxAUqix8-KsAXm2iPv8YiT-HgVLOWVoaoSZopNu6DBNVOowQGyAmsbWbxaxaZSNCj7UjZiuk3pnvDYH7vwehWIcSaO8zoP3M81U-xBR0e_wZo554rec=w1600-h1067-k-no'
    ]
  },
  {
    id: 69,
    name: 'WorkNook',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,449',
    period: '/ Month',
    priceFormatted: '₹6,449 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16054617381886845487',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1WJkTrME9RAg15tfx-80E6cvFlffYdprcitR94-nNek6L0b6DnMz78BHjp9ZjeKL5redCaa7pB00ewLCHMbcqb-Lv_v58Q_ePIqG5NylPgPT1X3NiEuBwVjQU2HUGXTKzZkKztA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9StSKwYQ0cgR5nrYupaBwgfvOXBXJr-EXzJyIO1BdaUY8FFi3SicAU7DIqiYQtdgGxdQaO7doi8jIa35CxiVocYxjVRe44Cc6NnnvLmU9ITQVj08POZYAK5UEkcJrOAKbOwFZ0V=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TMpczh5VpPYWaFSOBza_1kCRRHY5JdQWGXFfg-RnC5uaUP2xlmW9yJHzXFj1ig7PatEZAGsMCVLfchfm-dsdQg0wpIAVF4VEl99NJf4fts_1zk5_VHoNvXWz4cZGFjRkbnA3LD=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qocp3oL4ZofZR1BaIY_eN-pJzlz_nUidsC1JAKaLAEctUyaaEu8Xi4PyxpX9qK-_cNmBNTqdL3mGNK6wbJxWBgPdTYVdCHdWIaSkQ3NR6dKdgiHfPo-p5A2fHs5INUUvA8liFG_A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TEfIEufs_No8IYerLZFd2jEb60FN4VqQWiNHRuqPSz8GDyraZKEwtO5k8MoBxGMLgtv-WcE7RY4xqjw8i1OOLbuHvw1bjPbPxMtjLiU9yiGDfWezKt7WHKXasuzoApfS0fwHk=w1600-h1067-k-no'
    ]
  },
  {
    id: 70,
    name: 'Serv Spaces',
    badge: 'Popular',
    rating: 4.1,
    area: 'Sector 142',
    location: 'Sector 142, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10304448349838716644',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SkxmswvVV8NqZV-FQBw6yvuilK7SZH80At1BH1xtEcjbWD6av99p-XIxxaT63bP5pazy0hfEu2e5u6oigaOg3ScrhqzAhQApzeOOnAqco6r9poihz4vRKRTSQ6wkv5OAIx0Uw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9VK7QFLvZf5sKt8bKllzuI_EVkykgIuwlTjp9p2gml25-lMRd0UMyVOikoJnQJH42bADSEbjIkkWHHThMqiEaTU1-Tql1jUQmkK9DDmOfKXLOFTRfhOsnJDpjUXJJ6s6XyK0geg=w1600-h1067-k-no'
    ]
  },
  {
    id: 71,
    name: 'Akasa Tapasya Corp Heights',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sector 126',
    location: 'Sector 126, Noida',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=819523155646153060',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8h_YTiH05IG3Y81NCPH2SopbZF3Dx8E4yelqGkrVgs8fymK_LtKbELq97wYuyS3J0VPGTWsAKRYhXIppbUO5HgYv7RA9dUMi0m_M9EUEbCuii-ASamkBdJCtWmGDV69zv4vJ3z-dW2e7j=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2CCklugkwsNhJyQnsF7rmceg92hBDD98KmsMqCBTLjMqxcn6yzDUFYYJ4n1PbpPrsd-MWu7gTp7AbpU5_7S-CtVPGPcjQX-0LPUFbEjd2RTR4ByGTcoEfrjialc-EBV7JhOB6epkooqor=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWlYnua-TZe_Nk_bdmzrvdVH5-aincThbUi2eXzQu5t9Yx6vm6-65fFH8TREeO9__Ddm62OS5uopoXr4ldTLHgXaRzdFowWNAgEOUOnyaKn6AsNfsyEV7Wwy5gfKmvXbvub4umZ3_i7UE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SU67DcsYRcHzr1aFVDqouFOb0gXG92fHYKIuMDp7ex3NOLLDQkU6xLI4rwb-DA-d_G7tsyB14rbbOidaYm6-8NRnIEDtGuOY3z2M0Wdzj5ClaMCmc0SWXtblNajbapfQlPHdlHBJpaiHM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SnAnui9M-uVZ2MqROTMS-pRCKF2UA15V_TJG5Q3KQRHhQkT4faHWi5oNYW9DPiXly4H00VjJwKgDEq0blrVh30Ka792OrTl-E6BF7cyA2i99pcEQ49r6Wveam2zbxUDGs_S-6LAQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 72,
    name: 'CoWorkZen iThum Tower',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17614375738707055893',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SuQPcNFmuMxuTlLS3vMIaL0wrXxFoPFnokKsyX_0w99sN1P0nQXlTt8-hptgG7UrJGtDjfQgBfOW64iHYcYWukrOW5vIfWvyZMAGOA-zgjNRUUcS2h4jKqMb7Gdid_gdKNJ0vQGg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REeM33_-dTztujjEclQon1DAlVJ-wixjScjxGKx20LLDQn-mTDRL44Jb4j-wgztaExWIph7cw2zGtlmQ9qJ0ApitScCT1BZ0Bm36ctOwZ12TItAbBcqL2phL4Zs3rYr04tUFz3ag=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGX7zGoCT1edVDzS0qe5-E-PAQ89AYtpfT53RGWtXnYv_eY25Maugpa3AWIyLwtKQCEnjB2t3EXK1jIGQFHKpv8buvEQdFiHXCpTWopRh1hw0cHMkKvNYvF35N8i-twIX4Q1mS=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QF7mPsyDZhyJTpN6beYrSNvuJiy09QwAjxTVe3ZQsTiWKynO_s4ya8wuDcZs3Q5WI_sbH5m4z9ME4kKWSU-iNfURujmVTI5FeTj0uvCsnnFVwCUP9KrDrskB7DrApixs9Y3uvS=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SlXljKfluSJK7Oa1gehceKQIyhivV2P--TZStPfp5hhgrHVkJqv8eXOPfv3c419WMMhw-d-7epKSewkqgqsvR3IVStaHaz-G65GnsttE8ttCssEO6BnbNX3sDUFvNgArvh_p2L_A=w1600-h1067-k-no'
    ]
  },
  {
    id: 73,
    name: 'Akasa Corenthum',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9371041114023380762',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbDeiz0OeJD7v-CBf1TLog6B_F93wdw3tJ1bj3uC-ghKBT6orrVtDC33ijOolS2jGTlrZ8vd__2u7_jnDQLyXAvAUdWr4pZHWN_8W1KGMIIbIo9MZSFjchWLtC7NP18kzuaUA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rm90KEbjb_LmFjNweXtqiMNcHUrnbIgjMmELMW_JuG3atsnz8KDvkxiW7OkHIXob-21IW1U7bUnjbJ_km4THVyJwNUjtrxxf3RpEUabotW0vyBX0AV7-D1KyvbsDLrRdXcXGrpuQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q8VVNO-5jHjMZibW0_LzfXBD8QWoWLiEllkpytVkGjoNnG-2uXQp9Q8lc4PPsSLXV2_0N6T8a0RYZmCIlKx_NP_CgEaURz97r2QEmA0juOgb-o2uQue3urzcr1GcKVz1wdL9VY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWTsF0LjefPgaCGr4p4y3rZQ-kw6ilrqReRJs0_Cu60kPStsyejXxLbiBGOZN_VI_6Lz6-UXyixS5VoQslXmgxwk_RFEgxl4CyGvu1VgpuGz5RL578FEHmvfnNLCfT_2XGst24aQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rh2_UiYB1qGGa_-4eDyBrhXzaQnwdQTeXIL07oYPDHiOaAW2VTXONqmJCXJb8tFhMIiIP0cyrogPvoHfWh1M5Icnas2IchzrnhX_VI3jd2IwIOueV61b34KQ9oHlcIVUT4ugYC=w1600-h1067-k-no'
    ]
  },
  {
    id: 74,
    name: 'India Accelerator Iconic Corenthum',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17266180205457593830',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9wzYq2qure4Uy2-hkpgKmMf7QMVg9Sc0TlPO2WNbRCoBbvo4ZaUVJvteHeKX1DZNssZIjEwWSl99S2joPB1-x4GCs-f4BVHIHjjIgfg5BsRCOMvM-U3QCuEqPvkixqrKQPiDkreIem9aA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3V92C8fgpCNyjyXM6JJEEZeApll_7FW9CHtWBkXuvsdgc1v0SIyWirWRzObRZDTjgsJZoBwO9G_xTn_uoRnvWkmALD431PSPtZR8FrVzOCEx-Qle66PvYHx0IhKp0UodfQiE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7CQ63v055M1LN1dVBsh7_ahGNupq-heN06H4CXggJ7w4CZeEftFds_jSfQziKuT5-CfU4dynnDf2AqwVpu4_IFsVG4FipoJ58BQtzjvrGd-I7xQ7RvV87kN9KNYaeDR0fhY1LKWkxljsb=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbgHnLzciI-O_kUBj3wtqDBw7v5DQMg2VhaAbX4gqnXB2hIn_USsZHAmBGQQd-ZuLyhXja840wbETQORydFl_UJb-Ll7Q9aHdPUgE1XWJHNLa1QPIi_Jb_75DktyKXiweLFrhX=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TtqzjOKaMAk4Qh6LZfoVxBCPZ75QT7E9wROe9sBSvOVcosaAVjef1vhDrEgQ-W1XS29jQbK5UNkRRvLLL0qaECmqbHGLjIJZmoOtOKqjO3mYWaqdtZTjX6dIyGkPO5wZJSimsk3qj2cIO-=w1600-h1067-k-no'
    ]
  },
  {
    id: 75,
    name: 'EFC Sprint Graphix',
    badge: 'Popular',
    rating: 4.4,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6331053550208009899',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SkXlrWvogwZUjnIKtW592DX85iYeLJzb59cyGfl4Q6cDlmo156aULAbiUn13VEWEktW1jUV6BRHWjEczomB4guJb0LvLnmhGEByjaHzsNBa_C1PeHF2uI1Z5D2UlFiNG-YREuiEQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RYjs85MGviVtdHeOZx9wFT2-i5tGbZZ4-wrp6b9wjJv2RaqUQMuJyc_mkUSnENrsgyYAenP-miZsLIk--4p5BFuXxRWSWURO2vgXHRnvNCM862LBTIvNY2iPcDgiZ3qMs4bNrwow=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TqI5aCZRiS8RaEhNhxJ0uzMbhqj1fpqMz-umuqWDR4kKwjP8r5CtF-ZAtnl6S6xjZh2XmVzrTEU1yTeJQJan1XO5TjpU3RuRQR8rVzLpDZ1wvO5aR-Y6_hQ5bYIbgE8HFuox8P=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1uzscMhfoI_M-Ni3apD5-_c-rL0YfOq2mLVLHUOzvBIaUeKX3XZFpQrkrHVXrVDQpn79KzIgqJcdjYQxpUddKfCP5ilJUlyIQUr6JgBCL0KqXDL3btCNwDIGJcttD2LFWXjUz=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRIWCFebkVEPQwf_t7EzSMoPYkm0bY56r5ynNWBaSPZHLh0yBZHXtt1UbDTNLBHmbz0Si-c6tWqFozqFKei41ZbvUr8eK8OgDtOEF98e0KcPTk9ET1xUGtTNXWyXB4TExPar8W=w1600-h1067-k-no'
    ]
  },
  {
    id: 76,
    name: 'Innov8 Graphix Tower 2',
    badge: '',
    rating: null,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14036151075080697895',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q0dsxSvONdxxbTUEt7qvc2H6LFZsP23acMAull83wCVYhOHe50iV2iyIx0kZ5yUz4szUQNK53IiHBEyTNk3qBGgW9bbXUNnx9PZVXePRSTJL6wabK3_IMxAH_X_wQDqWNA4bf4UnmnUpRJ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RAeL8NmTDIbhgL1X8k6UEzf6oZzaCtcsWt6-zTsU9Mb99ujYlI8zJ8fL5cFEm_bHs1XxQDjvh3vw5VXMAhMClsIDY-PTH8BXZO9K3Fa-WOI-gWx3td8z3kucRyROcSY86aVdzeYlLZGSLF=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RlDWd_UBTsPpast55J8Ssy9qX5XZ2hdlmQF_2DOEafPgjUhgTmidLrdp575XGrKmLLVUiKIREX5IJaFXhYOUYuuxg3G_pxLzW46MmhxUZSNud673BFytFYtWJMr9JdAY90fi-5whSTsjXO=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RUWWsMr52kwrIJIRbHG6eLT4wnscCtOyFYKXKSEmetA9KlGZ1G2Oyb2krLxh1FJMFbemcQG3797fFdTkEWtmZgEyvt1jAKf4s4gFXqtwGL1OoXP-RLIMbL4DI1t8wJD4s-Lf-V8nVdycUo=w1600-h1067-k-no'
    ]
  },
  {
    id: 77,
    name: 'Myworx Zone',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 4',
    location: 'Sector 4, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1668979084603527603',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhVvllF9sX6-Jf8tgR7gClIf3qOfYAlgc45KcMrHYOJ9_C4vIwo8FGqFFU-COfE1EAxDqzhtzXZPjuqQnfLdQp3Y54YpTx4F27VgJl-Mm54ol4FvsdU8rOMMSYgkhVH53DWeob8A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S8f17odyTnwpBo6SXc8zXNdy9EEm79hkvSvw_csrb-o2IXaTAT2GfbFjLbtL0JQx61sy-LOGQ4eSKDGl-ChDPo6Od9_gG2l-K-iAzzDjjjwPgdzvNlimNlttYkBo4RLCQ67VR0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R57AikgAisexds4b9tC3YdU7GsAW-Ub79_hHB-3i9hOhbR5AXe_WsAvNCuCq75uQlnHFzZgdh3LLQhRlCTaeyD9-wNN5XVvkmETcBA11PuP-4Wasi2gI_C3NiAb96ZzWHTVoEj=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0gob-o4tGzYmEngACr4-u9EOQwQuUNt6xm77gUi8l22MUvAGVa7zOaWsterC9zNG0FnNVx_ATQC6sXZWfs9kcaCJ7b--bS8BZMHjXcy1IiIhNPOlaBQDHmyuWA_YRVi46ybY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QFVwqsx9NKrF8PXWWmn-2MFko26JP0_MeG1-CXbM9MlL0AqOztRZ4lY73ety3mbC4r5PAbgwhUo1mP9uPbMRWV1r_vF0MsyOMI0NWNR7OPLTp1Lddzh1-d25kmzbPeNnimjqoWLA=w1600-h1067-k-no'
    ]
  },
  {
    id: 78,
    name: 'Smartworks Logix Cyber Park',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9973679436443067980',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QVcDU2YTvH2w78V9CfPy0S2J-0KPYJUk-RMeP_HYA7DD0IpB9sckkRp6BmGQcb6taQGMx2ycqE3pFAHtIQWNtsP038rtkP8IUa1_qKYFVSpqOqZzuusZPxMvCgfr7EgZmjqZGG=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SnzNWdub2vE_I9wAmiuw1BU37-LEiuLmo99_LepjVH3ZZhVeLeIVp30O-0Ef2wbfl-Gduo8YWT4irQjh06jVvnpOalPYUDiCIEKtWWHUV9uMWbstpWD83jTa47Hy42z_ZMDM0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TyMbBr43GHkEasYPcbL2P0x73I95jidx4oVGv0c0liZStCDX6tT51E2A3dlXuxCTLYmrTgvhE-6_0pk6g68bBvJIIgcQuePTQe_fkMgUzjQWtReT0v0IrlQT6MI_t9mrjmPRsK=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tabl4kIbTC4EGkpcwbgLxYglvKH2lKKCsalz87IaEffokURAp6FOnKhx67xHFLOL70xrGPDiUJZqFjonF6X-9RIjQDDZe2Bownfj6i7r99EnavPX64OqcPLgKLnnfFvlib3VE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QAjfIrdDlWokFEwRAUIRD8VNKOsDf_RPLSmgB5EyUWD5Z_kPtqdgBH3HbAGlgaP6w1uA94jP_E2UFU5sVS1RC0kvcn7FNuy64MjhI8vnYkKdxR2MkyY1JIhmShL2rtNGgQnRbd=w1600-h1067-k-no'
    ]
  },
  {
    id: 79,
    name: 'Tablespaces',
    badge: '',
    rating: 3.5,
    area: 'Sector 94',
    location: 'Sector 94, Noida',
    price: '₹25,999',
    period: '/ month',
    priceFormatted: '₹25,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2343439744486042474',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TOO7_t66myV134AklQTjSf5aPp-BCRCGnSK0KrcBKDJ30qfH5buN27EtDTfkICsomxkYFFeVOBM5Et05vPfboc0y7GofzLklTpflSPpj5Ly5_u1QpRg2tqNGbrOeFsI40y2mhC=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QX8cfzUtTfAoyQmu835EKPXzqs-KnWxtpua2nuIeVP-bd-w-ZyEvIcRkngRDmmqz2BiwxWIbgGL3tQBrZPGWgBwi8tGRX8R5EPCUkrKAs5-Yf336CF1v7L2M9TJCHvP6TMhq_g=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q89EhRbBXC4OoZ4D5syd9NKgeux_2K0p8yjjofEEHpyqOMJ2II2FoxSgwLvCTF5NTbzHrn0ylTpdeyBDYYgSXJ9M2z5n3u45-fRV8RFmWC7asTVddWjRO5hP9OatAhWo4gDgn5=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QfPE2UXBbYuKr0oRPN_c_L0CdtBSsjgS_aoHAtvEXg7s7ZXuueOWkIP5jXYhoEgu0dvBm_LuG0SVZzIQxAeCCeTTVTu_SdWxanI7nz2Omw_rnK2-XiAokQdO1UNr9_VJxoe8Q8Hg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1oI48NUuNNpNieOPxrt-th5bVD1Na8EWEBo6e0qsX2meU1roydCq4EnyoIPCbI_LRYXfEDqB_jjfYKclZJOH7ym0XRRk1MHJicbdyt9muNFHZ07CwLLmb1F3mSRVkt0Zt5OuWAw=w1600-h1067-k-no'
    ]
  },
  {
    id: 80,
    name: 'Let\'s Connect',
    badge: 'Special Offer',
    rating: 3.9,
    area: 'Sector 59',
    location: 'Sector 59, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12678445405096621593',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TDVAtpftxJb_-2FOWzQ6O_ilffhh4PUnBleeBdrALp2a8dO0TEmWRi3upZZli0Z3TPsUVy-Y2JM4N4Wv40u3os3GV8ZHqrl9DYHp2PTKkB1A4feCGQ0JDkpEKdLEWqc08neaPB=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RxhkhLH9NCkNl5NgQS8QPu5Mk_zXNvUoRykkkV0l84RKGhLmFMHmR84SP8PUA4D6rEs_yPHDoXFbP2UWCPi4EZT2h9Fyd-vdhIA-yauHwk_iGUMNjuDJkrAuadkSdpvJ7Uf5-ZWg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SV7-QRYtm7pyA-uul1-pb1fQb3liNwyYM0vo8sATOpEBOd5MGd4bMVARAcTS2Dngv8NuRvR1iW6wM7SVcPyjDuXKdqTOG69ewxZAHRw2ZIZqEmVpgpdAWg6bqC3O4aELAGgY35=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Th1-Y_t1Rlg4shNk2bJI2d7EnSzp_FdTroeVwuI5ZQHNWDtbC2YjZzHvbUXj4L2dOGnQg7DH3gbuRPrGx23rVDO01C7LW8EKmlZyHDQ8YUv_3xnTlGeA7VMGaSnozfSvmf41E=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SwIeNgYhVP9O_-o8JK77QVFxzbkPWxN8xsW08_KxFIdF6_27j30RH9pSU69frgqvEY-alTN_mkkfNzjkHCJABtOEEV5f5Iajud8_UvXHQJpaXCDqKghZd4--eMAsT-TeGriHXN-Q=w1600-h1067-k-no'
    ]
  },
  {
    id: 81,
    name: 'MiQB Executive',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 58',
    location: 'Sector 58, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18167377721165830116',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q58lid-R4Pzdrg86hnsaZrLIuqLg0ZMQFs6vuxhtVE8W1mTWanmgw4hbEkqPHF8_qQAqfbmeCXVsIP_j_wbxJEfp67J0osCgKYHX2-wxDgKnXybx0tqcuFp_DGQZiIyw60Pa8B3Q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QhQSPZErp8EvdiCG1OwzzIlIYHqjYj5uvsDVDznyL41dk-3uJ1XsOX46XurGqGN5voH_WyjCDIoKZGAtIiV6VK7_CmJ_zBA8vkq0yzr1aB7fOIULR_EXTGeIx_MBGFhypYKqMOlA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5GXUVuC8CrdguYT0sgg8p0NiH4mOX6bcKFiKalgc-MRIFTvswBXS8FqTistZkwe0KK-AMQtT_08J_o4Q2d15CBsDrTCESo1IRMXZhyEiseEQM-IHQlTqI8VXmd4CiQ4nvu8OGnQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ST_CzwYsbPmmB3vIbvKofYNnn3ab7nXRb_aU0DxUMX-3X85LwifggijZzFCY-BGzXLxjcscuRzvrBbtutBx3KSqteQ45eaFsHItkf_LPwVYbC8FjnQsH_bpJ3ObYO5EvTRJVg=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q7K88AoEtMrdTAnjFNLUkOe3c-E_lMjsZ5M1kgW-l2jIOB20yhdLoJvOfNL_XPZ5DrkVvUvXzck0rwOzmhJNQHe4gbSfupfgAYsRUlOaCdy_qdT-uG1i08HchuOvBlj1K7MS0=w1600-h1067-k-no'
    ]
  },
  {
    id: 82,
    name: 'SYNQ WORK',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 16A',
    location: 'Sector 16A, Noida',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9098540273638292801',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RepReqwoXDamQiw9v_gFiH6n2_1FHwVuagY0Imuu_bWRKPx2cgPqqFuWYBX3p7ZHtRVLh-XRRv0LflcoPTPCQaj0048YUPusFxGg17Qy0sy9UeLC2eIgJmBpt7d-gxlsmMQqdInXlc2nv2=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SCFglHvV9jqiin2AreLwM1A23gDu98UTsjsKzYoL6CT1V663d9jR1Su6ugFltn7skgX-GpjPyM3ZlqtoLBDY9Ojm7fYP-nW6sYblyhKARvhFCPiWXkX5pYF4efYzDrn3D00IvIA3A0Or_q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SP98eLfulQZ0N5h_eMHLzFObHR-PZ8wTW8sUlf-x9TXoG8ET9oT2Fp6IhDG2TXDie5JabsscJLyzPw8VqSQsi0BX7bq1vvz302wCiL80sXFsHV6u-MO2DctTPI3gLpVFJLQE7hHA9_FkqE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RVa318imA8Q9Nmz98AgfnhYOmZGF3bwErEM77yFHOsVAgbqzNDRI5MflXOK-JhV2D7LnerChG6RxNiEONuEe9DPr2Rw4XlPgRF0G5PqYKBa1thQL5S0bc4Qc71EnGFVqzzmMmbbhSP0bHe=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWlQGZXgUTmxsJQ4ohGy7kORmrebC1uMRjVs4HBTGAZTt_c0mADta26PBJr8P7rq9mAOflQxGLCE6-3VhIdq8vqQ4OPTJL0fxvWgUWPOnQt05aBPbHX5UnKoe61TCQEsxDpGfslJQAu1_C=w1600-h1067-k-no'
    ]
  },
  {
    id: 83,
    name: 'Spacient',
    badge: '',
    rating: 5.0,
    area: 'Sector 16',
    location: 'Sector 16, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15964233992259948986',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tx9IwjVAdFWZ8FNIeu91ubynDWs0AICCua3pv-aoXr3h1zKH9uDTZIRXzKC-R4P0Zzikq9gRpRLKN4csthPgtGqQYJU1IpoQD6saFk5NlxdgdUukX4xDbfa9FjDx1VBBNGrKZApXpZ_9_v=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SGwnB1yDBP540TRjv99W4ve_4ASVLx6UW84fcJF8V0Qdz-5FPJHltub9gE-y0m8D7J7YSMOV-oFIKAHutZgiwR6XbH9RwibTbbiUU1Hv6tl_G6n3qEs-NwDFfLszpuMVt71aQLLu41hVE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RmyRN6uF5B9rqoISzQDyOJbMlgFjrdXYEohZOpwm8NdobGIyLji4gHd6Jv4kkcTGXb9aE01dKfc7IJa7i4_ALE-N6TrqBw_HK0rdNWWpsCV0OMIbTKjQu52Belxc_2iz5GGMz4GHh_OIk=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SE4Wv-7tjfSRGlDyogKIBbYgePhZIhU8f3AIXIXtNDE8uq3egnCYLDdILNVtiCwx6auUJmXfMFwi_YioCvpu9JniJ0VxXyIZIXIjsS8G5NPrymRko4RWqP9KTGvUz0_YQ3_T0ANQy-xC8=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S95Pz97zNYgwPcuTdVfeShaRdIv2HlvLXIArD4aCn23m9w3RJPv8jBhFcjObU3jkcttg0KqjEO_9nsvTLQgLxTZ-WGAyVLXsj3Pl9alLMXvJ23dJnbB8GCkurNhB7lWHtfpdH64EI87cm9=w1600-h1067-k-no'
    ]
  },
  {
    id: 84,
    name: 'COWRKS',
    badge: '',
    rating: 4.8,
    area: 'Sector 135',
    location: 'Sector 135, Noida',
    price: '₹13,499',
    period: '/ month',
    priceFormatted: '₹13,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12306562017226367098',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R_nx0DO48un65T6IpCesf8R2MG2kFh9lrNo0JuEx0gE9e6gIfKXrwYTEs_qDi7ccpN_HfSX5UQ2zU6LeB-wDeLBSSRYbCzEOhh0dX-Nskei30DKlWaPaFdTHVoYZZK5XF7JlSKkJ9jpFP9=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qde8s8cpWtVWnxxRqYW4ipCsfVxQ0LoLr_47FbooQOOzCbO8s8LtuWr11jUFhNZnWl-qg9ND7GGq2N5qxhADhbPxfy7pHWQltiBc_SApDzqzOLHd1goDcdFKC0m7JfiJhEFNBWREorFn7O=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QjiKDqRcqe5wS2txRAhSBeRtINdJCq9xWcdbpSIPPV9u7s4oRUsLw-MatLZx0plAH9f5Vb1UTI_VWD3RTJCf-VZIUJOEOg2Mkgs-NT8qpknI0irvfCwsYb7H63MhQa1qoLq0m3PrzAZ-U=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RY-Y17Hkt-dvxWTpEw-qp8EaRWn8aH3AyZbKTO9tOZEhiTrJxynYPKBV-Qlak50PSH5k-7lceQT_NUl9u57LOiXDq5kK9TVBDyJd8Wi7AOuFMpqp8lTAYKHAWwuOgwOye0tXJczbgz9TI=w1600-h1067-k-no'
    ]
  },
  {
    id: 85,
    name: 'CO OFFIZ',
    badge: '',
    rating: 4.7,
    area: 'Sector 3',
    location: 'Sector 3, Noida',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14122701610901017848',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tc2J4VKoI3EVJ51LY8UQ89h6AAQoI516_P3CTJkvvpYECvRHMX6knGbGENT9NgVGT2sIfQ9IGZLr-Qi45n1N68LdFJ02vlZ222AiFnh0BU7ltTmmITFoe3FqmfeBM-b2pgHpjKNaxltSY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RUAkMpeia_iwq45e-ihfyfllsPYqcA_eRq5vXqmaBfUknFmzB4ABTYO0IL3qa-clNstCzhiBrkg-kxCwKHMiT3Pi5p1c2KECkZ5dkKJOQXGLmCbjplp9ysdRKmXuIeddOAH7isWJ_6abNm=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbLiVMd8yetdfpVo24wTL-zRauqAWSflkC3Fmt6HVVgu7YLglWPQGDlRLUvCQF2c6VZ2bL0zAheefMQkwaPQlUim5hymJgTyfLIvh4AJRNA8pTfLPHe8TiC-9cUlLxlfiUsTDLmVg7iKtv=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T5vOuQACn5zjPQfFdV7uPRSME0L_dzejbF50oT-lQGvHHp1_tDZLyWMdCx9aDKNwoGi8oSvEDqYTDZcsg8_VprtjpG4C1Qrdqonj8xLUmZIje5W_l-Ze-uCfXHq4fqYUM6Kl0c5Mhw26w=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TfhKr4AujkMRgPhN3ZsL4xnoiZo4Lzo4e-lj7SyNj2zAtJCaBREweZlm9JuN-iytdWgPxGQRjDnT9fhiCCE3sc5e75-YbmR4lY1ct0bz11ZuatpKfSSK5NybMETj3PaxLg40iYLDWg_p7t=w1600-h1067-k-no'
    ]
  },
  {
    id: 86,
    name: 'Workshala',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 3',
    location: 'Sector 3, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9618413682947116779',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RvZkzQIgxrxfE9svMJNGBp3y2cIomJfLui6EwSasSKUCzS5Uaa-l2TUsnTqJCq07XzKqMKxTiaNQXITRgPGYqE5qwlg2pa140viV3Ds_FPhHiggZg3zv-2J6sgOXFthzvceNNu7g=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sq6mKwrRSYKiqIWmz9U3THk-zOUi-XoD5f16bnVw-ZVjlSdRvaA4Jpv2V8v-KyG0V2I-1m34zoLt1u-qrffwNAFW9vSKWzYEB6i1sITZPfgHAu3TYjQkv_0gv-0c8RV2m9pUE=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7xPW5mL1yW0m05-TlNdfi0YWTXhXqu269HN3JiaQ6X0Mgn5SrZikPLeC5fJdnLaofeFphD7jFzpCVgHdle6F5cbmkL9hhBMY2XlHYExHX-aLqaanjIV0217njq9biJg4yevtEzw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGRsq-qqp6QYIbQ_5HOkaZiamX9d1sL4Wv5HSDlfqWZ1vYpKjnA1aXbI7ABVi3ULObKNNK_3q_cqgPpqdAHpqY2g7Lba_IOt6DQjsRpM-J5NWbmdlVa_lrPQf9nIGnA82idrDzIQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SXpAVuDsideCspMlBH4a5QUqF_7zS-_TGkfSv4wO-KzqB1kVY24_CglTmdQYZ5M2qXapuIBQM1PLk50JEb5yBgmF5FHm1bGyflQpvOejfJsR1f08CbJ6n6_b6JynAEHqZ7fQlf=w1600-h1067-k-no'
    ]
  },
  {
    id: 87,
    name: 'Classic Converge',
    badge: '',
    rating: 5.0,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5575382819927191809',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RCz9mZQtuWcjEJmfGfVrGC_iBcW5YoosO_upaSMrfroz-Y0wmAjcRivhdWxuanfmDxJH2KijCNXl8PQubjzwitGAplrIoaZDfd7TL4CDHcncntn3ehOOMcPpeQkbUf1yIXpR7kiXhO2opq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RMlyP_NOk_DRvGPQBmedQDoXe-g-MuZ6dLLUkNG5ipt4kvdoT5UGOxMx3-mG4HIH1soGX7Pll-x_Yt8GgZ8fqHXWRc8NjXqDqExTxv2CCxzoWh2T6tGaDuFLTsGpoOTqs7JWBmj0OHTvn8=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RfcIm0-YWJ5wZBpg8d3RDnFX6fStFOaxZkpnOz5RUct2SYxIAAHLbsBlc9xfMlD-ajj_Kl0rcg_CAKlot5MjQ7OFSk24SY0dVcplzZKohC_i8WK2zGMceoDuKnnOmGz97K8e1x8XVMClrn=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJ3cGoJ2PN-mr01RlZMPBZ-UKuA-4ooCyyW9SHzkEwzgMEcx6Xj6u00fvD9QfYe83NL7AEV8yvfV5dj34tOyE5dSL2LeBE17adYoblA6xbBJfEjHASyWzh-BPG3xx5YW9-ydGKm3tImtne=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RAa1dHFYolMs7GtjLg624b-D8EHJkX5L4ZNdxWqoFCH4pKVsV6Y5YsiUnVa3ACHQttepMi80jr-WiMtTG4zWj9T_HQDGPQIJZfAssRz-5cQgrHcgz_6GObl55XqS_pilN9LIdHEIHpXN1n=w1600-h1067-k-no'
    ]
  },
  {
    id: 88,
    name: 'Bollco Co-working',
    badge: '',
    rating: 4.2,
    area: 'Sector 125',
    location: 'Sector 125, Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5993201844787914294',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SV9LOj1eMyIrooE1eXRjNOzVQC0V7A-mAn1cmIEzy6rr_4AIf_RqJKygK5OxTN3ryIRL98yBpDZgvJh-6Wk7r02WKdw2Pbb0E6KTIglFIPtuEaPuMoE-4lwVhqL68aLEVGFu4IyxRhVS0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TKc_LA7QZooqDpagSYsr7YyO1lGVQaBOdAF9WvqFlFMMxllPMgkL7MYwijUpeN_GqYkiZ2YZdWi4TtG8Il5jYVcciSPZLyWXaMIzzeOswPLJm5hL9aB76K0MLMWAsakx75pNxh7U5iI7mA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7ufAUSju44xcfIeSuXSETdxpnjPoinb7_sQ84cbwcHYTrlMnyC9zlRqDeyWJ-zDas4OQjME-zMkJMvYqUlZW3bVMSEa0PZFVdZ03SSlToSNohPEWCDMYgLANAaqicagZcxVNEoBUh8Cs=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SN9OHJgI7M7024hO5Ndd2ES5ijEPRkfbcivygQ3ZUQfDNjEfTcnuQRDLfP1Jnnme7x2rpXdD4sKuWQyf4J2Hyt_rPsO5OAPsi_sObpt5lypgX-cYikPsT552s5wV3oNdY-9tmoIDGlah8y=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJsJgwSuEzmM1f1aK1L2FA7FONx7fryfswheyBkzKbMMW-Eknthz53iHBrVd_xlEqT3j019-KxN4V5-BEiQ7yEXUdy0iPgjn-cYZdyA_wUWYF5rEQIePmaGecrJFqRAcrHR7KgWcFfiaPI=w1600-h1067-k-no'
    ]
  },
  {
    id: 89,
    name: 'Classic Converge',
    badge: '',
    rating: 4.5,
    area: 'Sector 3',
    location: 'Sector 3, Noida',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1155880413315058679',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0gOd_Yhnv2WmkUEdvYQ2m9jUZzLQ1hw6vbwf5C9DV9mCW9VrDoR2HchFoJ02HSCfc4OVz9z2Hrx1QzPGOj6I2cGktqy_I5ukS1hnPArlF0rTAz32JldmGkfe3dHlIwKNHk4vw_OYDZIXo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLA-Kru6TeBCI2tX_xVfD0iJJnwZ_FmSzFKzCZ84BWdWhbGmqax_GKDaX_vPREfEIt78F9WcnDy7_pAg_qj4HY106xvxpfb3N4_uchXc8o0_QLo4L0Cxya4xtIF0vx7Zz3xzzzFd4g7so=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TuXHWAs38ddMqzABV-ET31gSI3cmIzq39ODDO3TqSV34rhCA9OaV1c5TeTaThoSEF6qPYjvHBVQB8XGWiKUZjzZZ217uVPYriQQn4gCfcoOXeX0a_MrRDDCOZ1eHmYNDKHcPjtZ8wtxYOL=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RCYPn9nYVIojjAoZxjj2mTNXGNu2SMP8eDjeNWx9CPtoM2w7xu_nLc4YBYp1a84xhlQ-DpenIitJ8Q-vJLNS62YR9QRbIOrVxBtm-x4hIwIKpKaU9JgsB_6u4xsg7AJosHfXAuEpAYQ6A=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TrHXdhOOcjq3vDGEUtJVqX0saZHHmpZjogRmsI__8o9xM4Fug0uzh410bSEvlsyRF-b3Y8w9BtLt5ymLkhAPuis6uki2k3bQYo3p1oe7BhQHeX3njoqLjk6-1yfoM8yukkh4VtUQEwh-ph=w1600-h1067-k-no'
    ]
  },
  {
    id: 90,
    name: 'BIZYDESK',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 3',
    location: 'Sector 3, Noida',
    price: '₹4,499',
    period: '/ month',
    priceFormatted: '₹4,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18327799262778925783',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ShH8w2NqrCOzFTkI3fHAlatDPuXq3NhU4HNuAcy4qvaF60QFHrcNaT_yv8ygKKzohP73xRVGEYRDx2aPCkPGvPmuBvPQp_4Pi9KyomSKOr_dFUC8UxyQe9SvUXLGx0asLsrVI=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T8lk6_v76bV08vED6JQbjBmsHT8ikEpQMAgCahc3FDe8wxbQP_5caMtwKl01SCXk5lGU2YIHeBs5lKKmYhNfeSiaG9v1LwNvP23pUli9Yp8Am6wrrlX0nuKA12YvS3JoFScgW0nw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RIMucyPC7PZfFTsbRZGfNdO10Ewgwf3oNg8frOqELl3_YtaehMazpqILL5VYavyFiXKbYTgF35YbbXeFOpBEkx_P5ysoxneeeeav4diSe8cockedPu5BM2N7xckJFyrWrg_F9W06gaAZPy=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhbSWaCr-OWu7FT_7X62BBPZQbnUrrHGolIH25CSRBxYS7ZPI6LYFs11NMd-PMTXTIUp5sK6XMwWlXMuzGGQdHb9TJyObpC215FdvO4bymsnjiFHHBYnhZYaxZlk5Ca-09rf_sCQ=w1600-h1067-k-no'
    ]
  },
  {
    id: 91,
    name: 'Onward Workspaces',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 126',
    location: 'Sector 126, Noida',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12866382019858121052',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbMjW9Ylm9atmuZoxqTW4NwAvnGWDGLGTHreYcm2LG_mzcv7bH5amBq7uFiOD2_VYWLus7mEMN6PrvEEkLqOxpRYuTkmO7a_3cNXgl5yazhY6Fkl9Be9r2ewVVSo6F2DOOD-mKla5L_sU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSGed1u2iB0tzv8Zt2Dhu-4TtYDvyBzKRPqkOZEr_RjRXLZkHCaxukYjPbI2e8Us15W1cSojL67HJ5o5f4NNvgx_-5fk72fCOCkaiEwrJfAdS7SvZVQMEMCEupGONeq6hfR80-U3FVkFw=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQqyNTFPkzs7hoxBh2nU06rlzoD2AY2EYwueb6_QgWxVgNTyL2vlJXM-HNgmxtX_Bn4AgvX_OV8VFTGWHFPwCEhYRKd4MZ909nyBVFvKP_CVF8GAzUnK_LKuh7M4ztCz6i3IfNzZFB3YLo=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sy2CUhFiLOMBmnFmn5B2pUZTMf3PTCztMPYCZmN4nXSKioE0Um-PyjncmdueVDdQwMnzKjb1jHVSGasPFecDMbv5Twqzf1CJSMjc2XlySCpgmWRRhsOHvQ2ioHWWLI-C22fTguL6Xf4-jM=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SyPvL94-HeqB_SAjRN1JH7eyLJazOTreA-NCrHnk-VMvMHe-pTSpO-_lprACe040HOGuAW2mIei_TogfMUZlXe0joOmZJfgiSGCSrV_c48V-sPkvQ2BfdtfLBfzNPaqrcMBrG-wiK4tOQN=w1600-h1067-k-no'
    ]
  },
  {
    id: 92,
    name: 'Office Craft Sector 73 Noida',
    badge: 'Premium',
    rating: 4.9,
    area: 'Sector 73',
    location: 'Sector 73 Noida',
    price: '',
    period: '',
    priceFormatted: '',
    ctaText: 'Get Quote',
    googleMapsUrl: null,
    images: []
  },
  {
    id: 93,
    name: 'Table Space DLF Tech Park',
    badge: '',
    rating: 4.5,
    area: 'Sector 143',
    location: 'Sector 143, Noida',
    price: '₹29,999',
    period: '/ month',
    priceFormatted: '₹29,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12403400306034305314',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SvzMQ3wghb-LmNgxIfB2hVYVMm0yXyWAUgKWgo_VU_9yvm6xgS2k3wxqZ_dsfEBe9o4_5FNGB-Z9_rf61apvMRD5IhGKX_UTK3inhmeKfEXW8CoBrL-n66g181oPJx959tf-Ratc8IAHJT=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RBzChfc0_r8enYYucUhzutwVGPbG-kGEhyTzmIXTdpbNnSZUzhs5gmSVgKgtDEpZEwMgjjqdsDQhYQwkmPQrW-oVOnHkgE-3NxVPOhTmFr8k6L48f6Rv0-bSh7k5rs5-6PlAO7dQLGrnqX=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TLsdFp2A7SxEnUXfF7eFors-2un9_Mm8r6jzwvg8aGubujUomC95qRxEoa7x_DXOn3i2Bl3oBRxcGugR1Ws8NjQl6EBYoTxj1GtEbfEBTkqvA3NhsdFnZeYvLS2XMVNIJwpxpxrWdfGilq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qc3UaZ8KrMlFu0vb7TPKnGY8Wde1FnUrVVJrU8ttvQG2hntspnisrbaFTvfP76TRznYmzSg55v11EU3xffQgieq1Tql-d0ru81oyY5Zw6spIJZnx8E0HO3PRBp5uOblrkm5Owda5xcGZ0=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R5BpGuUc_8Ibn8aKAK4GfZQAYRvH-0YovnIlQJlJ610S3wvTWZlQXJfCa0RHOs9l9GBItsMLBfAojF34WfDAc68_eBoYcg7g5isEorlkjGe17LXXAsdod1iQtz2_QY9Mcxpk7XjYoEFyf-=w1600-h1067-k-no'
    ]
  },
  {
    id: 94,
    name: 'Nukleus',
    badge: '',
    rating: 4.3,
    area: 'Sector 144',
    location: 'Sector 144, Noida',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7137651913352038879',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Skchg8lcl2AUpn6fP6jhtxOXweQZR0lj4pOFqifuc91anf2qtsUZ1-22sQH59SC5ciOV2sDXL3ikRJGzSgYW3DUx5aif3hyhsZgcXFvsZedNOBPjVvmGfRK90fkYFU4IbxVHy-gonkAMOb=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RSWuSBag4FjIJbRa1kkmD3vFQ5fJK7yrtqVKMMX2DUegJc7HtCVOSiDPW2LhXt1vRJ4N2uMn0AC8kyF2Kw3Ql9f4xbJ-5cdWh4bOSj47ppaN6n_VewMtL6kPtfM5wW26MOQ4Z9kRi-zv27=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TYDjbPrLxIrP2i0WWTDLoKfU2tsr7SFPZRN3pneMP_J8YWIaFbuufTXhfxa14mTXJ78WP7oqIgQYAgVNBoWj0LPm_rzJPByejJAwJVPFo0D1sha83kLmBZGX55-zlhm7PiYiPXh7kLKqW6=w1600-h1067-k-no'
    ]
  },
  {
    id: 95,
    name: 'Awfis Green Boulevard',
    badge: '',
    rating: 4.4,
    area: 'Sector 62',
    location: 'Sector 62, Noida',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9462880068218831183',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R83ngum8ZIbuyalhkQ9Ijc-mFLF1XEXh39odvTXs0YbWVJymXbduSSk1lxhSktBYfq3NSPm7I0MAXoISa1pZDsv3UF8LlxjsDtbosvwnh9bkiDWYExTFIYS1VRMvRmxdiQBapGQxNwZjn2=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RIlKsBwC1ObVMgizh8XqRSRwqwQ_TDdn-dBgRR5PYZQkZWAADYZjCFNDPRONnSBQ_3go9lslaC_99HB7CqWrk5GV1ZJ3Hb674VLqYnjr_uw0f1A0GNdRi0yux_xR6Dnbhm-uyjGKm5tbw=w1600-h1067-k-no'
    ]
  },
  {
    id: 96,
    name: 'Workspaces By Innova Pinnacle Tower',
    badge: '',
    rating: 4.5,
    area: 'Sector 142',
    location: 'Sector 142 Noida',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7311207202220185691',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QpRbWdBiP4qw3pTTweG2OdyCwzjTkSzp0E-eQR01n1I6ADS-h51_9Xsrn8b7lScQVR47KVpCatA4sogimvFdhkUK1bD7ww1pj2h8AH31vuSGtWjvDIAbvX2DyYHQUPW3ot9oowmzXriyKq=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJwduCaxKmWRh5bqpfP9j6bhclw6blalmxMoVYsZyMxfErsXgz_cA1KnoofzCIijbQnYGcYzZdg3H0yaPGX57omG3uWvod56EhMCf8rJyBA_NYLeqJJo6l7Gv54wuyVuDy4NnZlYkozfU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tu1R1GjLXpXJHo-MegUhd2lDqDO-WPx5qECC6RpWdRf_dXr3fczbOsWJp2eVTux2Cc0L_ZNUbaHUEB5hpE05RYACrNZAKE2a86oNqggs0hhUiZCdyC5Wt1n36lHMppl9EY4F3gu7P6JfQf=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TEL4Pv1CxZyHSAdivofbo3-W7sFKB1Kw77q7DGthBSeAKd_MBgpVwm-70-ryEmR-AFT6W58uEOqaoKBcY8-nxKLaPkDejEjH9M2fO8dE9TuOMF0FWkzC4NGjWGSSRcizXQvQHK4Irhj0Q=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q-6_cYMMLQlp0pSTO9QUzSyl6jLvwgYOWO_ti0h5F5H9KJgE_JcGZKShKXH3y0bM3qjKdgwydZXHGfwxV7Y4gV3yuBI9UN6KTUSY7pOpNveO9Mgrcu4B1Ow_Edk-DcT-pqbbZgTIL818X1=w1600-h1067-k-no'
    ]
  },
  {
    id: 97,
    name: 'Nukleus SkymarkOne',
    badge: '',
    rating: 4.5,
    area: 'Sector 98',
    location: 'Sector 98, Noida',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8324274712659491609',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7ft3XnMYwhUqf6_GTno3qZ7ya9IcnTIw-l7VS7zL-f1iPcQGAvqzG-bTw-xbriRVz1j6hxBK15oCzyOrRXePlmpwkOPObFTflwVpI8LSF__y7C_Q8Whv9mPgvSX3cKUbCjBh2HQbn8sA=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RI34vTB_rgF7mhUL3hyGoPoLbT8uLSs54Xz3r3poX3xEyKkaWdhGqjTXuX4jFdhl8XMVy98B0lUpkr3tdjbjEbRCBJNNU2um-gFxP0_a9KoJ4TwqaGOERlPQXnvnEww0OqWSyCgT9OKiY=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbRsd_Jowxcecq8hwVykeV3yHcL8E64f2sy_6ftWFyjwGzRemeVTFE2n2nPqP89OcYXDGAVZmCfTAqCxUTcGFU-rlyUPxY3lrQaVmUeJ2fpBbZGcuNsue4YCXNDD1mVyKu4oCF_bkztTD9=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QTvR5eSro7qrqDLJkheKreq3AZOjw5rrLonTCZIvdEHF2F14IYzAs00FrB3munFZisKsTsyC_Uq2IZMftWybzui4yMiWGhqyBzU1p9TJnWZ9PH8TCfQN3En10bhJw2jIBrbXwC0LSHuZQ=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRyeecg5PtrhgJteXEkrZMUJ6kVz_BpmTJGeEBxkQ-RJLqcaAV88KQmeDTs7xBC8QIdqzDkEzXngQeQ5y8pBS7IZNgtfKICrhMCxAKuzj7WVR2rdTrZTv7oxgP9mThrd0lb0nTOVaETJ85=w1600-h1067-k-no'
    ]
  },
  {
    id: 98,
    name: 'Co-offiz',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 63',
    location: 'Sector 63, Noida',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8772228302065787581',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QsvSvcI9MknUcLHNym0VqdCuHHZilrXqlOKC7h4YWA5arDTJWDtWeYty8yPfDKQngXXP5a85eTo7XKm5A7ZXAS_M3Lgv3kVb9HzgkBb0GcWoVVwTVRtZ1xpmg10EihtPAo0gfMIy5DFLU=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T4Iu4g2hfbtp0q4TGV_Uiyd3VE7pwfbtyOM4NdSyOYbd7fCeohwIZcpaF275FskkWGsDMUYKr-FQl6cb_MYQO9Nc8NondSP-UrRcUeAX15hhrDiHGsbPNwg-ClqFxP7fsAuTcykr1y9fso=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QfmJBhnD5gvdqXpMSLwrOK0bCFoDJini2wDPTj2yHKX0_sQIOfu7GIKXlbs2oiOEFuRDI59XUn1rJa5nNBhmTUcCRLRgelPtxzvnZDwinDGKd-iV9JTnnJfrGOPNqzFZsh612JxPOlMq72=w1600-h1067-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0CTswCWzlCdsiHdTtOR21732RcitfvWWryJTATLnKqlzaV0lcvFHRisi3YSJ-GJ0wi36-0H5ABPQ0uKgwJKVCkAzVSeY6mkLfGcoVZWgsvdNXGKvTKjQtFdTcjLohotMFPM0hmEZRnXg=w1600-h1067-k-no'
    ]
  }
];

// Area names are written inconsistently in the card data ("Sec - 125", "Sector-18"), so they are normalised to "Sector N" for filtering.
export const normalizeNoidaArea = (area = '') =>
  String(area).trim().replace(/^sec(?:tor)?\s*-?\s*(\d+)$/i, 'Sector $1');

// Filter pills: "All" first, then every area that has spaces, most spaces first.
const areaCounts = noidaOfficeCards.reduce((counts, card) => {
  const area = normalizeNoidaArea(card.area);
  if (area) counts[area] = (counts[area] || 0) + 1;
  return counts;
}, {});
export const noidaAreas = [
  'All',
  ...Object.keys(areaCounts).sort((a, b) => areaCounts[b] - areaCounts[a] || a.localeCompare(b, undefined, { numeric: true }))
];

export const similarNoidaOfficeCards = noidaOfficeCards;
export const allNoidaOfficeCards = noidaOfficeCards;

// "Explore Top Coworking Locations" tiles on the detail page: one per area, with a photo from one of its spaces.
export const topNoidaCoworkingLocations = noidaAreas
  .filter((area) => area !== 'All')
  .map((area, index) => {
    const withImage = noidaOfficeCards.find((card) => normalizeNoidaArea(card.area) === area && card.images && card.images.length > 0);
    return { id: index + 1, name: area, image: withImage ? withImage.images[0] : '', ctaText: 'Explore Spaces' };
  });

export const getNoidaOfficeCardById = (id) => findOfficeBySlug(allNoidaOfficeCards, id, 'noida');
export const getNoidaOfficeSlug = (space) => officePath(allNoidaOfficeCards, space, 'noida');
export const noidaSpaces = noidaOfficeCards;
export const areas = noidaAreas;
export const spaces = noidaSpaces;
export default { areas: noidaAreas, spaces: noidaSpaces };
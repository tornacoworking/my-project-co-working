import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Raipur.
// Space list, ratings, prices and Google Maps photos come from the supplied data. Every photo was checked visually: promo graphics,
// renders, shots with people, close-ups and street views were dropped. DevX Raipur and Premisin Lalpur were left out (no genuine photos).
// Addresses are left blank where none could be verified. Google place IDs were converted to standard Maps links. Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const raipurCoworking = [
  {
    id: 1,
    name: 'Zenith Coworking',
    badge: 'Popular',
    rating: 4.6,
    area: 'VIP Road, Telibandha',
    location: 'VIP Road, Telibandha, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10709170694418440179'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rh24IEoLRt_2Qs5zMGKwYgl52OT5SmPYloY9DLYXD3wPGVU5XNRFVUJbep2DzIzZ7sxq8uGGlaOeHpetlksDdRd0SQ-spsZByX7pV8mJrZP1J5Gr2s-dgaTMgqcqsJfl1qDAlS=w1200-h675-k-no'
    ]
  },
  {
    id: 2,
    name: 'FirstUp Spaces',
    badge: 'Verified',
    rating: 4.6,
    area: 'Civil Lines',
    location: 'Civil Lines, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5002069126166939044'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QGjb8jSffbtyRaGliFGc36Do1z6UApc50Axd1-GPBPz5Rtu8ry85yjuwCSORUStI4WQ8i-Ebas07LVr_dHpmdX8pq3Okb7QfrhX_lKzfi67CuWOu_wKtAHO-Tk8ruSEn2Xz5hU=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_AeVRBKpuGE8BnS3-UvYUEEV_hsTM9h-Edwukmj_GLUQ-2J-jdKVpjmdTpKKNHb11a0Nc06Bec4P4gi26VlEUOGfkqFdDAm2V62f3OkwhoNo9p_MY4fYI7vqF6GKMs8nY3eWb=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RwpGbiJgiVT5hIEcyvtCm7Ly4c9YM9Is3BzEog-SR0lWi_L8FOFFYXZFarh9nTv6E3uL9a0VSJ7SZa_hogMDOFPY4T3osARyz1E-CUfe8aPg3lUbX0XPzXKCHi0oLvEATKtc0=w1200-h675-k-no'
    ]
  },
  {
    id: 3,
    name: 'S.PACE',
    badge: 'Verified',
    rating: 4.5,
    area: 'Indravati Colony',
    location: 'Indravati Colony, Raipur',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2451517873893668874'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNeF2XeyzcUhvAsLnnGfTTR19UY6xFwM4j9pggmbx_mTIG8Air7roTAJwl7p2UlTDzt5PzW8dP7MhHN9hh1Bw-27Phh5KKaH56Rv3PVgzQ6_35fO3wq3W_YTXG9EDgv3twM65iYA=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFw5whD6-5HayNViMrf9SKFKvIBZ4On8wNoOAHZ5nqV4oU8ObBN5odbXe6qOEH1CZwSwr5x-H0ysfwpz6qbT10BAyCBHjmzRcs_zVlwKjm7djqhVuynViaDXVjbUmAQh_OFq6zsg=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SwPUUoHoZ_f7JbLo9IawgzMJixynYRt1_0mJLEnnUy2JFon2rhKAWxCPybyPenLfo5jMcnzO2IDSEGdUxtFeqm7wxlRDKPigDVB1O31Z5qrcuRXbMiIvdwQqHZYQBzdKscbcPTDg=w1200-h675-k-no'
    ]
  },
  {
    id: 4,
    name: 'Premisin Kamal Vihar',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Kamal Vihar',
    location: 'Kamal Vihar, Raipur',
    price: '₹5,000',
    period: '/ Month',
    priceFormatted: '₹5,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3317102013369278919'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SViColdYVA6VMpznBMc7G4Pn_6fIRT7mX6zhCGpOsRVWj4sMBCzZeg4-Q2kgOhcAmWi2wziUHmKjm9LA_JXVYC4_i44nJ9JvOiwN9w-S3rV_xGTZV0OafXVMLNDPYttyoz1NrT=w1200-h675-k-no'
    ]
  },
  {
    id: 5,
    name: 'Kursi Cowork - GE Road',
    badge: 'Verified',
    rating: 5.0,
    area: 'Choubey Colony',
    location: 'Choubey Colony, Raipur',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kursi+Cowork+GE+Road+Choubey+Colony+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S8WZKyZIRl3k8juXPbPQpCTe6AqZl6HQcl7P6ZHlbhqI4l_hFK7k4pmeMl8WyFNLtK6auCNO7c6hk1wzJyTTxY01SrRtcD4ydCIFfUrmf9BRpCP4BuNgwH9G0Lp-vvsJ2ygIRQZXY6uwBr=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q4tDvRtLBq27JXibCzqM8De8rknvGw-BMcryYdV5ULc7am2CdCNzvRbcGv83HJxlLPt2vc_0hGfbjZ25rs_bl58Ni-s3TAdDLQe_KjtQXKFWXKGVRqgbDxy52a4FMtLQE9lXg68MnP2NzW=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QkCXjiuftRxaZufrclxwGTVeq_upbP4G1XZbDbagjGUGdelE65sB_BE4fVyeHO7GEx8WO2VzuDXEMnKwtxa3jwkmOpFwApREXEUyN3iopKeeK7yx9gqHAYKws8tUAU0ZeWWHD986XgpqI=w1200-h675-k-no'
    ]
  },
  {
    id: 6,
    name: 'Kursi Cowork - LK Corporate Park',
    badge: 'Popular',
    rating: 4.6,
    area: 'Shankar Nagar',
    location: 'Shankar Nagar, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('899753061610422349'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QhbpfUePjeqIKgxqgkCAKauFRB7jhT7DxHUWuo90kaWalAtO8uQjAgpjasc4XEi7awpwzt9YqfCyUIxOjCBurW-XCtXHg9IteAHFu7D4sJjazfSsdC2iWEjOEzkms2Rlo1StfPJoBbFK4g=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T1TMMSIAJXGeGGOYio4qxVCicaCYtNqOHYP8wHZLptRk8X24N9RRyBmlZx-vTqjtQpL_ad5_HAQyYkCbQi_3arKInV7rwW4YdMFcAHrWkUtfPyBxqB_OShc7DHpjry1dSeg6wuoQa9D9tO=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QHeYnDvIrvHhWD_EH_vQpK6soi0z7dJhrejaeqoOV9FLPdWMp6TVkgNVJobbyCjPeNplZFyCnYfI1sx77cIRRef2sa6GqgVql24-q4GfXgePVRUP5QqP7TFE3ZgGYJP9xaEtYmI0-kTY8S=w1200-h675-k-no'
    ]
  },
  {
    id: 7,
    name: 'Vibe Coworking',
    badge: 'Budget Friendly',
    rating: 4.3,
    area: 'Shankar Nagar',
    location: 'Shankar Nagar, Raipur',
    price: '₹3,499',
    period: '/ Month',
    priceFormatted: '₹3,499 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9598091627297304689'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SwTmVaHoa3c3bgHXv-FyiKBkonK0x49FtlX4T3wrIvrBqN073Nfu6m2HRtV3go-R0ySu-w4UXoLRrRfFw7DPTiWsF_CMkghryJmNi042oLpBLxwPKcTihpdoMJAVOxv7R_sUw=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8VPf_DyLjs21bOY6hn0525Ldf44Fa5LGx4dMHSExVH9Na0hAMH9bwMEH-YhPL1nsr7hyAaujI0gJpo0l2kSOa1_CUZTB1VM1qP2DDKtzoX8WOyW0PJTyifus8AzmrA9fN38zBJg=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RITem8Y-LkkzTgwNRsQsSyDj9YQK3wyN_U_iy2dARBdEZXw41kUqjUwnIm-d2-SSXmB6nMkSC4g26CesbzrhXL_X-hoAkJk8_HPom29k4EUexYP_zpSMDMnVumkv113E2qYYg=w1200-h675-k-no'
    ]
  },
  {
    id: 8,
    name: '1857 Community',
    badge: 'Verified',
    rating: 4.5,
    area: 'Kachana',
    location: 'Kachana, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10812615891844488829'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TOH0qDVf1avPuR8ZyH6Zq4epaeHvHJBytGfthLWvMfQ_08O39gABx6K8W0vRRSUST5soLJUSF3DrVcxUqFjNQ9QOtrkqbRF_Rvr9hujjDNeg8dHtVHdsbQ3rX7kiFLQVnpWfvM=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRP_DvQ7zYaF-F9UJFePa55ABwlAI7a2-wLT9hRJ5hmQxISLGAuXeNsKHF6aWdr6QSa8KpwEXy8JiTp40VLkgoI11tSqWqprwMLpC7JQkYRDKxlNfCJHUXivolk2bAvRmyGFo=w1200-h675-k-no'
    ]
  },
  {
    id: 9,
    name: 'Deven Co-Work',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'VIP Colony',
    location: 'VIP Colony, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13374449049325983814'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ql1bfkCl0AYMUIdpOqVgtzDjI0Nstdv-DhSETXeRJE6JAwDEri9-8JnoKSzuSdqLskvhtGTt3I5qCLdu6lJf35RpRx7gN88tH_FCBLqmd-GbsCiytxfKDuEIdp0ZBor__GrlyAaOshcKfz=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q1yjehmKjjWsra3Na4Bf7aaiLwb5Emd7h17kdHYmmoA95oezOoWcp3VjbkcEpz_qUx-vaGoyv5VYTYa3hjdtzRM5JPRgGWFfpmJLUOOFKtQsE7J-tU94e70Qmo_FFDVLTFouQYGeoo09N6=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RFdD4FUipGOQiTvTMU5iWK_mYPKNm72Y3y2zSBo42cF4xuJab3mULDgc_9NXWJV55NOxNWz1DWfLaXiXriDM2W1Xkg31mpsq7CalXQx8EsX4S_BxKlVkkpPd7-5VPBfTIttU9ec2xFbcc=w1200-h675-k-no'
    ]
  },
  {
    id: 10,
    name: 'Innov8 Raipur',
    badge: 'Verified',
    rating: 4.7,
    area: 'Bhatagaon',
    location: 'Bhatagaon, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13143195841005316855'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TLO1f-sDun84IGwQoYgzkDFnqzdVmn82H6XTPQHNfQNpiK2eWH-U7cx1pUFiN15Wrdve6tItUdulrZLi_eeMCzRlWLt0ECtZn8KfuRk5dZeledYFDxb8_QA_4JKzeKeffY9MWekQ=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QEi63KbWfLoyf6XW-LnUUlBKiFPQAZvYUDXSD4B4LCItr0HLQ7iZBXadgyfWoAS9-SU-JwevJr85iKdq0D0FT0BniijFADAeQekGNuXcadNROnrNF8zFFm20V2TeTJw85Ry28t=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QNLZak1c1GHIqwDoi0vzSyEhzKlSl_H-VDwlAL3qwLfNu142yM6Sit-Om6l66wa4H9WSXlTZa_oCyGTdwIeCSt7axTqYB9hQ19sBqg444mVOJmdPcNz086h9xKTgorMCbepic=w1200-h675-k-no'
    ]
  },
  {
    id: 11,
    name: 'Qube CoWork 1.0',
    badge: 'Verified',
    rating: 4.7,
    area: 'Rajeev Nagar',
    location: 'Rajeev Nagar, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('6675434205124312737'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SV02UXQgOhkg5IU2UF1b30oySjMh45jxXBDFIpXfPUDnaULDFbFIQ5hKTmZnsYiDUWmyvPA8xB5w_v9uLnCdCv0t8D7i5S2RvzrJO2mwhf0BIMM3sqQ6fwEphIC7ZyciJhXJtP=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RC5iJ-dvY5AW10jH-5hOeGbk6l1fERF7-b4ztBSpeDS6PDNuWZ5o7I13EyZ3NXV8Lf-_qb4zTNHjyOkbjekZgkJ9I3jNKBDlEY5AVnFGXA7IHdiOqb8meeck-1diSgF1WFrU7X=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Te70TolXC5Z5749W1ygDm6Q0_z8rs-XdWOK5yQSbEW0yDPh3RjtXrX-Ombw3-Yg447bGrqIcl8T5b2ydhETIlUlv-FIn1Hb4t0lfFgo9n_m9kQsFwxijQgygAWc4aqW8roxJCStA=w1200-h675-k-no'
    ]
  },
  {
    id: 12,
    name: 'Qube CoWork 2.0',
    badge: 'Verified',
    rating: 2.0,
    area: 'Rajeev Nagar',
    location: 'Rajeev Nagar, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('4580824740773316920'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THoRib-tkg7aMDLcWHwApNg4fj5RJiHBbU7o_gCn_qmLrfrtXYvS8u5Pn2iThe0bSE8hp7T_oYP8r5V4zK0uuQqTfMdkbiUbdLOIPJGd0GfVO2kWahKX-c5-kTmG-W4tCR4kE=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJn508ktw6bRFvNADII0leaUBLSvjstDAHR95JqieYtgkr4DHATfRDRz5JqXDTGGfjHWgskQQcrSdJubNUlQkzHuskXMLp5C7R3pUHfUS-6UfnQfhs1F6W4C6xjTmVZiQFHGjp=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rvnw-1ZqNvsqcPO3J7OIbRtwgh2qulBL2CaNgVfS0_aA_G1mptbbPlgdrJKHzASR6e_VuZ5-f2jBvOWXAc-Kc8lwGMv_ez5Vn9iOfxv-p3BZQmUnSMCoGHmFXaqRVCjJfy8LI=w1200-h675-k-no'
    ]
  },
  {
    id: 13,
    name: 'MyBranch Raipur',
    badge: 'New Listing',
    rating: null,
    area: 'Telibandha',
    location: 'Telibandha, Raipur',
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=MyBranch+Telibandha+Raipur',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51458/Serviced-Office-%28Classic%29-Chhattisgarh-Raipur-Bhawanipatna-Raipur-Hwy-Shatabdi-Nagar-Telibandha-2025-01-08-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51458/Serviced-Office-%28Classic%29-Chhattisgarh-Raipur-Bhawanipatna-Raipur-Hwy-Shatabdi-Nagar-Telibandha-2025-01-13-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51458/Serviced-Office-%28Classic%29-Chhattisgarh-Raipur-Bhawanipatna-Raipur-Hwy-Shatabdi-Nagar-Telibandha-2025-01-08.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51458/Serviced-Office-%28Classic%29-Chhattisgarh-Raipur-Bhawanipatna-Raipur-Hwy-Shatabdi-Nagar-Telibandha-unnamed-16.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51458/Serviced-Office-%28Classic%29-Chhattisgarh-Raipur-Bhawanipatna-Raipur-Hwy-Shatabdi-Nagar-Telibandha-174158692531911zon.jpg'
    ]
  },
  {
    id: 14,
    name: 'ARB Co-Working',
    badge: 'Budget Friendly',
    rating: null,
    area: 'Shankar Nagar',
    location: 'Shankar Nagar, Raipur',
    price: '₹3,333',
    period: '/ Month',
    priceFormatted: '₹3,333 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=ARB+Co-Working+Shankar+Nagar+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RrkiIgVl_ZioCD78CoLfzZUqfB6VxPm8UMflLEWdY9ep97Jt1jIR5kdmNRBllsci0PCT03wcDxBzjSg_H-iyTzB20HmbE5ZCTmBWXnnJ_a53Htbiinncfgs5wz0VinpiKlLfLxhw=w1200-h675-k-no'
    ]
  },
  {
    id: 15,
    name: 'Aarambh Coworking',
    badge: 'New Listing',
    rating: null,
    area: 'Moudhapara',
    location: 'Moudhapara, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Aarambh+coworking+Moudhapara+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T6DJK3uO5ZdPef7REegMnzqXDl1U8TiuZ7zhOoYBAFr8gVNrgNEIJz0hwY-IgotfWq1MiPDcaqPpkBJ5tt7EAXwxRRWHAuXprNKqDXdRHluv3J0jMazXG9lfE2TSoFMDyrTAI=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SwyoFtqj2kef9SmlKkgQ2I7DwnOMB88sWC4J5jq-DZcCQuBlOw48gsrwKSwn8MG-DxEhn88TdEq-ktYhM5y8Syzgsx5iBdmLXcquGPPV5MPzQfNv-EtKXWDvhzAyw17UHTmMBx=w1200-h675-k-no'
    ]
  },
  {
    id: 16,
    name: 'Deep Into The Zone',
    badge: 'Budget Friendly',
    rating: null,
    area: 'Devendra Nagar',
    location: 'Devendra Nagar, Raipur',
    price: '₹2,190',
    period: '/ Month',
    priceFormatted: '₹2,190 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Deep+Into+The+Zone+Devendra+Nagar+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QvLzVaCay6X1Pz4B-EaQnxg1v7CSAtb6Kr5a8VsAJlIaEEr58pW5_1IrobBsxIjnM1ZBfEPMdyouVG_INJ0L_MPEwi3tUkWP76E3kzkovpONvnqbFeUrcQG-NckICBQ3QD2DuP=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q4IMOXeSd8XRssDvGs9t6z8xTY-mXp4ru72xbk87AzDvinqeDAkJ6DrW86XIQFGvBekh815G_J5ar9s_F9F4g520PpOynPByyIsEnpvYlV4g8_LcP5paE_nZ0FOHZrlvS7ctXIfQ=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYFIdOVtciejkszi_QkMh1LnT71ct_xSNe0pocOleZ_yaYuxinmkzzILPxNlxlqIwi_uBW7-v5XFKA9p9DuCYenajm-s23oLLCXHs-vIqEjHhlstsNFGasNqV8Cpg4yoThEGCA=w1200-h675-k-no'
    ]
  },
  {
    id: 18,
    name: 'Premisin Vallabh Nagar',
    badge: 'New Listing',
    rating: null,
    area: 'Vallabh Nagar',
    location: 'Vallabh Nagar, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Premisin+Vallabh+Nagar+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REdRSuA2fcIQFcZ7F0MqE2UBlJ9b3UrBvXdm82fGmDh1GCx7IP_XT5rEFumsU-yDtpCpvHLcML71YPBlu4iLTz42Tw7hx1YHsvWjUAnvVyf6nWjqZFWhRDItr--mgPiC3_NWcqrTndSCI=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TVCW5Xca3t8sy2KtFZ1zx_QbuiLlfWn8y78NF3SBOBcywXP9deK5gQaGkgxmt8AQcawkK5p0dql8o9_br6IjxKwvBtb0OGhAbTMvpkK6hDmqPTUjhNC9MdQGHipvKZU9RwMH6aGfnuWzXe=w1200-h675-k-no'
    ]
  },
  {
    id: 19,
    name: 'Premisin Bhatagaon',
    badge: 'New Listing',
    rating: null,
    area: 'Bhatagaon',
    location: 'Bhatagaon, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Premisin+Bhatagaon+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rk3ADHX16vsxTCXG2rwbsYGO6TIuVAa4do1dXbYTqTAiXPLs_O4BRFlBOHBL11JzT1-zTBA8A0GQaYKNUQ7AQeU3RZ9t3POXuOvJsBrtcfpAQJGfFs9aVON5fpJddGOUOoxO8H=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QbG-dcDRt7utHr8BT_Uk9aXoW85gf0pOcGB5GJ6hVzdWV6SeKC8CMvenRNhqL2Z8pdCCdLuZ51SPnAP4FHiwTZrsp6g9-mQ8zOiwDBTw2vX4AyqChpV-9DFDpew3WSLmOlys_a=w1200-h675-k-no'
    ]
  },
  {
    id: 20,
    name: 'Premisin Agrasen Chowk',
    badge: 'New Listing',
    rating: null,
    area: 'Agrasen Chowk',
    location: 'Agrasen Chowk, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Premisin+Agrasen+Chowk+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SFg8q2pIZ_woZ7B6Mm8JU_KGiWpuZ0ahXb7U3gSHZ8tIHpC_XDBSy26xwqpAmNFGk4tKc5cY_YMP167mwwGRzmIZ9Njd6pd-DxU718jnsfgY6_ebYz5iAffpIRZNVGM-3LPCM9RA=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QGZaL_ApmOugGF6Xo2wDK-K8ilxy2G87ONa6v8mjTr4dOjfOX8aOUOJQFZ_NhVkqzd5Z7CAKjkPXauTc0lFFqyt1bBNDwsqA7lisEXeGiUbUeF6XfONdXquBAa-6dAwHgqa3HI=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R64X5BewgtSmWcmHDP7MdkbAECntF7ywU8oT84bMni7Mhq8vmywj0Q7nTq6d7AlwSHfISHHj_z0yX8BVXZeY4KL-oUqvYTI_ffsDH8zCDN92L0tMebRkIn_-SE2W5St7ho613C=w1200-h675-k-no'
    ]
  },
  {
    id: 22,
    name: 'Premisin Progressive Point',
    badge: 'New Listing',
    rating: null,
    area: 'Progressive Point',
    location: 'Progressive Point, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Premisin+Progressive+Point+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QTOQQhCkyhrdFeWrhY72FFsILEHjFYxHM2N6BH1xcdzp9fGspOoVmU5l1doAzQhTB-eSgg-0glFkEXDiS6fA4tuBBhq7fJ5GNbREsakHvKQqvMUcJ0JpHrEDd2-WuXK3sz9spW=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QrzsT_YGL0vD-RU6o5JOr8pjcL3Utaz8RGGAzCr9ktzdNDuzh6ID40wOqNWUfT09IGJUp9tT8G5Y9BViVwc2Dp9U8tsmcK0qaKl9k7aw2G4c4XaX9YXHLHSg3XSZQHQXX5T3qF7Q=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TNNa-UXjSfk2DBen746lmiJgwbWgVeAPFeWI9C8D1ocXAkgTVWXAU5jnOhDm424UWHXuRydwNPK6xoBAx_uu3JzeP7WyCunb3CjkdXR6v3uCInz4wzztGvCZirlTD4GgJYZ4U_zg=w1200-h675-k-no'
    ]
  },
  {
    id: 23,
    name: 'Regus Raipur',
    badge: 'New Listing',
    rating: null,
    area: 'Raipur',
    location: 'Raipur, Raipur',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Regus+Raipur',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tr2WssJv77_2ZoM1Dr4BSumCp2BdwxXYWJFxURF-ns9s_3wM8EojK1CjXiNPA2MBhr7ja89WGEuoQVXw8NTcuGx5P2lwPa1JaO17oojdXxcaFuLvESoxnqfaWZU-NELW9lyY--U4sOUx2f=w1200-h675-k-no'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const raipurCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const raipurSpaces = raipurCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const raipurNeighborhoods = Object.entries(
  raipurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const raipurOfficeCards = raipurSpaces.slice(0, 8);
export const moreRaipurOfficeCards = raipurSpaces.slice(8, 16);
export const finalRaipurOfficeCards = raipurSpaces.slice(16, 24);
export const featuredRaipurOfficeCards = raipurSpaces.slice(24);

export const raipurAreas = raipurNeighborhoods;

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
// Raipur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRaipurOfficeCards = raipurSpaces;

export const getRaipurOfficeCardById = (id) => findOfficeBySlug(allRaipurOfficeCards, id, "raipur");
export const getRaipurOfficeSlug = (space) => officePath(allRaipurOfficeCards, space, "raipur");

// ============================================================================
// Top Coworking Locations in Raipur (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topRaipurCoworkingLocations = raipurNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: raipurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));

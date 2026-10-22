import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Bangalore Coworking Spaces Layout Data & Neighborhood Filters
 *
 * The listings live in `bangaloreSpaces` (bottom of this file). The page
 * paginates and filters that single list.
 */

export const bangaloreNeighborhoods = [
  'Koramangala',
  'Indiranagar',
  'HSR Layout',
  'Whitefield',
  'Electronic City',
  'MG Road',
  'Outer Ring Road',
  'Bellandur',
  'Marathahalli',
  'JP Nagar',
  'Jayanagar',
  'Hebbal',
  'Domlur',
  'Richmond Road',
  'Ashok Nagar',
  'Hosur Road',
  'Rajajinagar',
  'Mahadevapura',
  'BTM Layout',
  'Kalyan Nagar',
  'Bannerghatta Road',
  'Residency Road',
  'Kadubeesanahalli',
  'Sarjapur Road',
  'Sanjay Nagar',
  'Nagavara',
  'Malleshwaram',
  'Kasturi Nagar',
  'Brookefield',
  'Basavanagudi',
  'Banashankari',
  'Vasanth Nagar',
  'Shanthi Nagar',
  'Sadashiva Nagar',
  'Sadanandanagar',
  'Richmond Town',
  'Palace Road',
  'Old Airport Road',
  'Maruthi Sevanagar',
  'Marenahalli',
  'Mallathahalli',
  'Mahalakshmi Layout',
  'Kodihalli',
  'Hoodi',
  'HBR Layout',
  'Cottonpete',
  'CBD Bangalore',
  'BTM 2nd Stage',
  'Rajarajeshwari Nagar'
];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across Bangalore',
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

const sampleLocationImages = {
  'Koramangala': 'https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp',
  'Indiranagar': 'https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp',
  'HSR Layout': 'https://img.cofynd.com/images/latest_images_2024/8a42a52f0d08b1fe8fbc67d8a16ee3a22553597b.webp',
  'Whitefield': 'https://img.cofynd.com/images/latest_images_2024/323979251e5458d1485f20d1ff9fcc33b230dfb8.webp',
  'Electronic City': 'https://img.cofynd.com/images/latest_images_2024/d72385e6df621c44142ed89e03ee20dd32220d9d.webp',
  'MG Road': 'https://img.cofynd.com/images/latest_images_2024/1288e19a7b909ea9ebbe71a2fa95c50736afc7c7.webp',
  'Outer Ring Road': 'https://img.cofynd.com/images/latest_images_2024/ad7fa46d9bdb766ddb3da837e007525c9d1a0a11.webp',
  'Bellandur': 'https://img.cofynd.com/images/latest_images_2024/d0477af6807946ce717972841b30b7b5613cdfb9.webp'
};

export const topBangaloreCoworkingLocations = Object.entries(sampleLocationImages).map(([name, image]) => ({
  id: `loc-${name.toLowerCase().replace(/\s+/g, '-')}`,
  name,
  title: `Coworking Space in ${name}`,
  image,
  ctaText: 'Explore Spaces'
}));

// Bangalore coworking listings — HSR Layout (ids 135–179), Koramangala (180–217), MG Road / Ashok Nagar (218–236), Indiranagar (237–268), Whitefield (269–296), Sanjay Nagar page (297–316), JP Nagar (317–342), Jayanagar (343–355)
// Text fields (name, badge, rating, price) transcribed from the provided screenshots.
// Images: Google Maps photos for each space (matched by name + area). Listings with no usable Google photos use whatever Google photos exist (even 1-2); only listings with no Google photo at all use a reference site (myHQ per-space photos) or CoFynd photos.
// badge/rating = null where the card showed none.
// Images refreshed 22 Oct 2026 from Google Maps (no image URL is used twice). Google photo URLs can expire - copy to your own storage before production.
// Duplicates removed: "BHIVE Honeykomb HSR Sector 6" (same card as "Honeykomb by BHIVE Sector 6": 4.7, ₹8,499).
// Also removed 22 Oct 2026 (same physical centre as another card, per the old notes): Innov8-Prestige Tech Platina Marathahalli (was 378, = 305), Office Republic Bannerghatta Road (was 400, = 332), Energen Works Ashok Nagar (was 451, = 447), 91Springboard Mahadevapura (was 476, = 471).

export const bangaloreSpaces  = [
  {
    id: 135,
    name: 'KustomWork 33',
    badge: 'Premium',
    rating: 4.7,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5a7028184bff38a4365e3b49f50ada4a5ab61936.webp',
      'https://img.cofynd.com/images/latest_images_2024/65ba755ebaedcd75a03675ba5fd707ce2cc9604a.webp',
      'https://img.cofynd.com/images/latest_images_2024/10ae467ae3fd515b64c615138302c02a7bbe8532.webp',
      'https://img.cofynd.com/images/latest_images_2024/88fa7dbe61ddd2bb58af03d899feb2ef60f0595d.webp'
    ]
  },
  {
    id: 136,
    name: 'BHIVE Premium',
    badge: 'Popular',
    rating: 4.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdrAqa_PTNECZpDTtjrmxvlm_7beZWsXDwe3V8QYCxuJSRUjwFBSoaw1Jp-VMeQFGV-mKpoXtyX7JglEj8yIwMYGsklnaS8b5M-bLaiViekLFWs3YynrZjXNNXSYBjQTV7Da4Tz=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcjObUiyG9GMEqd6XoI6iMmK2m3vm4XQWm1QrdQ8MQlgRAosMDdiwUo5Lm2KuNwEF9KEzeO3qcJxH8EyJsIr55lrCpfFuhNoJFl7EdMmHffLrllQjdnANVCOMe-lbPq25hMJGZTVA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf3-Lu4kTEiWpAAVX-NziRsDkjKm2SfBBkmNy0D3s8d5IzVzt0_wKTf6cdof1FnGSrb_8rd4d6G0v470Rv_XW8dl9Y4ZuVpCCk_ukfWN25JfXqjsE6gqd1q3HO7Z5oSuI2cgn732g73OflV=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe_p2PPYzMo0zZMqF9oyAVaW5lsqRmGeQHOPIMU5v6ljjNRS3tK2oCEeSH2MH6qjxlUIkd3tMoBYEx1oMB5B4d8VZunf0pRB29BZpfiOF0pKvHEDbEVK2jsyUCmAsFd0Wp3yvoXCw=s4800-w800-h600"
    ]
  },
  {
    id: 137,
    name: 'KustomWork 531',
    badge: 'Premium',
    rating: 4.7,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdxNWY89DNzlCmsztH9lYb0IGI1MhdAzbRVOVt7SC1mOOgywqzu_zJfoo1Jg8kmfDBFwnWMeYOrf8SWKxVIkL4tBJG65jonTX-cYkNJb59_u27ugj_z6ZstFW0oPmZ9DqJSxQ6uMrCttFLj=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf_FTi8AVZybpO1AvjspEvOV8qOvJwWv8nTvwAuht8eAs8JNtXINSm1ry5y193QGaYSM6UHzThqMKHYX-j0Keqc3lpqrM8w3QZQEhO-hN0RvMmNdUxCJ6GXWHs9bbKI1jwlJPJoqiiZHas=s4800-w800-h600"
    ]
  },
  {
    id: 138,
    name: 'Hustlehub H206',
    badge: 'Popular',
    rating: 4.6,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfsoRaMKJ_cEOMDC2bobOWUWRqxo9q5IvdgqPxXUsGxSyIoOtiVobliNCNdvbxkiQgPKNxE4aJQ-Z0JD9KBIwi3emm8n-coX8izcoMEaxpwYjsd3WmyKemW6ltVP8DE0HCTaxEAOw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdMsXh6vRgpEzH32Sc0sZLmeVB2YRekl2NauAfM-BDAS3i9I2bIeqgeme5wDEI1kdsAWzYMCHZ97jau4XoPXZ1u1hmQq0rTm-GlnVh8NT0zVPlsubObaf3sFs80Q3nvtOxfnj3tHeheXg3M=s4800-w800-h600"
    ]
  },
  {
    id: 139,
    name: 'IndiQube Delta',
    badge: 'Popular',
    rating: 4.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeJm5_YGFqVsME9VVbmbsj8oD5227GAcel5ceix1nW3MvbeUD6CJ3MqVBxXRMZFU2YVSJLI3QH1pqcfMczT3oNZYmr_jsL9irMYK3sz9AKoT95-rvEgjHvZVtDkng8lUWxuP7XD8w=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc3w0AceN9rv_ly5cgrv2biiKAJvXlh88K2-e57i5DWX4HqoDsYJySi_vNbxEmLWU778H447OvTnd36Q8EX3I4BrYGrCCqaZTPry8MS5-9Spv9EBcwSg_TZnkR7UouQfsOWZQ8mKkvZECIc=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc4McR9B6HBDq2xfoJtcUMh9AY461eMcUdxoSb9YA2-eBhtvA63v4JPtPTnK2jzFDry-UU0IqZ96G4NL1ERRfIOh4FI8uPeRjJlKYYxFyR1G6Jc-RCKLA4bCzUDx3OEujtoez_w2Q=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc3pXm4E10s-wxipVBeT13NpN8uLZ3ejnYyywSKgYKVxi_A76WNzmiMxwt3eGK6QOExZizTzGxhPefo08k747B3nVD2YdndZLib3f8koMTae0ClQhiPQEx4QzHJnDsLCU2kwiUcIg=s4800-w800-h600"
    ]
  },
  {
    id: 140,
    name: 'Enzyme Office Opal',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/enzyme-office-space-hsrlayout-2/dedicated/pgtuh2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/enzyme-office-space-hsrlayout-2/dedicated/femvnf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/enzyme-office-space-hsrlayout-2/dedicated/cnwqur.jpg'
    ] 
  },
  {
    id: 141,
    name: 'HONEYKOMB BY BHIVE HSR 27th Main',
    badge: 'Popular',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfmpvXv2qYaF1x1dfYhRQTUSU15_Qe7u3YcmUqbrJT7GYdUAhZLKxLK9z1Lju-gPql1WsQbGJ3odnBtmnO4RPzYI5tRMnCyXXPkgOK3KioLc0ThC0TrWNStGTpzn7aa9xPcRw_G=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe3x1G8GAy3UekQaJjnkGkEdAhqzgfWV-RU55RpeXH3q4vEJw4OnuWKFaHMA3EAl2ek8oRu8_dhFjl5vQUHEQw_5AgAdcAO0ZSZXTfJQU_HFOXe6t6MC1sLihyhmESnfJJ5OsgW=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfJVrLnlIJqMdzvMPe6MIwL4kRegJ667-9yKDoRqfpcwjyk3QELRsH_GDAK67vIG3mLb15xvohIWH1M4L3X8sgjKO2inYm54jKckg3QbKYojgHEPSlAqaM-sSna088JK_YZtBAMM9nKrrwc=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeC4-EA3i4FX-4zD02YaDbCTyUwpCawJ1izCyeO1XdhUyndR1EgxUSg5G0nbnS1T95MEOH8OkDtvAs7rdWpDMU4aqrWiUMifUTLuMqk367Jo1X3B3duLcAZY8jk52692kFMdc84VA=s4800-w800-h600"
    ]
  },
  {
    id: 142,
    name: 'Hustlehub Tech Park',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLegF9ATh8ID4JmDs4JMzen9aPsuq8w9f80LmwT-qyLg2of-B3gcC-fgsuilMCSWJDUaq8F-FYhdVsN8aS61y7kTf2tXpL7jqmETqKrmwRmXzxzASHaNSI8DkOoRS8RNv5etf1Y5CA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcIigS2bUuWm9Qf7tr4w-3HHOv46-XZXK6KRelT3B9vTf9dTj2589aGaTuqW5rYJyY9vGYj5dHoGGEky_8ghm4cyC6fSjxNdkL52gMW7oIqeVgHx7Gby7WALKQTfeLd1HhKirwM=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLew3vmw0yoeQsXRbHg0ab7SK7VQpKKKbGs0WFFePpn_98P_Z_3EGpr_K5X3hHG9TsTKahd_ZAfitkarf1JmpY9drfN69_UnI-LRIDcoZaH8nSDP1o_q95y4WsS_dYov7ZO8Efw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeWAw-3vEDYOeCMj33LQIeZZv8giU30k_cRumhmPlCpgC6yr9jPrwpZ9ZzH0dFNIn20kkdFmB-2QqTq5STbaqpLIl1nIRIZl9TMYj8ItEluZEkXFIzY_t8h7t3G5UTu1sWI72XQXQUf-9Ar=s4800-w800-h600"
    ]
  },
  {
    id: 143,
    name: 'IndiQube Serenity',
    badge: 'Premium',
    rating: 5.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfMGMJMPFH2U1g3xzKFV7rRJ4UUlFYqYRkNbCbY_QKMhOQJ_7FTUiHx2zk8m_HcHTKbh3wMFYQLC5LeUi5srnldVOKNCCudSlQPaCMzsEohqm-N_NibjMRvPWTuV_jzlrSYj7AIDsPKc_So=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdl-U4KlgBtnDZv5A586LNKWfKVFowDWXMsgcgWjG1mEYxYHxn9d-ISzjUNg92aU_6UR3cf46dpgnreLJict7hOWJYvg0LoWFnmprHFnk05JdhSxEXEj1RJKE1cFhpuZbSOd2FgashgJI95=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfSzNiv0n-NNkgsp7aLc7Zd1mHrLocp8FzwlLGs30QCGzDs3mFYmoFHG54-zLj8o1Kmqdc0ZgIR3rLparOzPylkLWx93obuFWlIDF5uWegFqi5qYAw9pOOJniU5BAwFQN1A3BSY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcs58CutFgZstlJGLm5enG_Dd6trN8_lBxiAh6RWXYkXLVbUDyWC8fsi5_W3q8HkpGDXoGDaR3dR3zRZkDP9IG_oVu-9DTYDlzjcfv6M96tfm3gpi2n7E3RdIOXrXqnd-NGA29DJAN__4Y=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdcjRYpHYL24Sgt_cnOh--K-oJyLj5qWqO5O5AQzZbIlOIcDstH4ihf8xpN5KUVD-tgdwwOJ6DUUtXk6u1l1HIuSYaEo6kXTj_jc9afsB1EBv31_Df-3Aah_XgceegXIoJ84QwdQYAnTyrB=s4800-w800-h600'
    ]
  },
  {
    id: 144,
    name: 'Enzyme Office Octane',
    badge: 'Popular',
    rating: 3.9,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeo5ho11XTu7kjK1fHaeVDflQXfVe0HZhvet7n7OsxCyEDFX1D4mN5IcBz2-Q4DdkxUvmw9p3zpWdXpGW35BGmb198d89OH8kx2bLX56o-Db_VXg5LlbdHK0ckMLp9wYIyfIOxzVsmWbAH_=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd14uD5DpEzqn6FqgnlheAnt-6Ec1VfWuYlESwyfBvUcSNvc9AWcTw1u8JfWe-_TjFnSbY_zkuNZUAOPIPIe-BXdg1ZmM3iSi_dMJto3ViqdEPIotYOsgrAba8v9RlW3zdYC6lBr1gFm0kg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc7hrODF4DXsrtEC3M6z_ATLvVgQy-7A120jvMalc-Px7t4mZ1S_CtF1TJfaSoCi613VUHWJO18EEjCMY7kYNMBYxWZOLk5rCP8fKQQCMDkHbLsDSUWdwV01pXeZyRJORZ3E0F65imIDfCb=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcpl9I2aij7wh6AdOz3JWaXD0IENyJ1R5RcmOZUR-obRoHO62dCrdkdAL_gZvUuo43dixRi-Eu_AtH7vtsG8VgRdRWAuBSPp4wW1lOYT57i0Ar6PPDv_a9i52RoqB3NcMTZaBT1UZWgENnA=s4800-w800-h600"
    ]
  },
  {
    id: 145,
    name: 'BHIVE Platinum',
    badge: 'Premium',
    rating: 4.4,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdW-lLxLcpAqQHIOxTGlhd6yhuNu-fcKjxtCsrxbohNrSRIvEY0ToCL_qMNYH6TQf684t3n1vus04gvNzGG781hnPJ4ufcKlP-Fr_i8qby_vMl5VbizUxiAmwGbscWsAu4mcTYz=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdJhAjDnOv8rQYU8icm3X7ttfSSrgudzlK7VNBp8Atv9eQmjpTVRB29MJUfbyvBoCz0DBpk5hi0nuxIwU13hamclJji6y4skDYGZxvtq7uSKuBaS4dRy64tUhGypvieVKFnWN0o=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLewFO0pVog65z2GJzfmy4ZElrlGjnOv6hVxBrFQZ_2TX8lWo99NTZIuvjr7z_OmUf598q2wjCwfqTcLooibrIA-xex4ZYWuJZb9WVlUBrSJKJcZF4WscfZMeuJfipYsHPC3to2k9i1jVGg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfgVuX9m-fLMhPWDOCe6whJZ5gaOlMadgA7OaRj8fTKmWu9kv9CYHbkKhIWQaK4FRZA_9lxQlYv9f-x7Rjcz5T-x0XJqmeBlVQpa9XcUOC6Q_dE1qSgQDRkuGDQIsajLtm95bx3R2qGcgko=s4800-w800-h600"
    ]
  },
  {
    id: 146,
    name: 'BHIVE HSR Sector 6 Service Road',
    badge: 'Popular',
    rating: 4.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1c71ecd09f09bb5594eb8afdad8db5912435fe81.webp',
      'https://img.cofynd.com/images/latest_images_2024/783d46d94c910f3f577055c4befb1e510b72d7f9.webp',
      'https://img.cofynd.com/images/latest_images_2024/1fe9fad637ccbf7f00b240d1a13497fc708d831b.webp',
      'https://img.cofynd.com/images/latest_images_2024/124c4d37219e7b1dcdab1b118b65392a3ce12d99.webp'
    ]
  },
  {
    id: 147,
    name: 'IndiQube Orion',
    badge: 'Premium',
    rating: 4.4,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdCBBRyBrof3GA3cy6twENNf6ELccT3INTo2Hs7OTo7tlB_RgFoYCP1nsfx0_lk70WUmUBWgs4DwdVt_dg-Q78C95VGlZ5CyoalEbp9e_Y9_6Arx9WwdXFKvn3-AcKfxGR_rQzc=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf2em72chKj5HHZL4w-FQqYS0geIy1ZmT-QCpkuxkGsAdFX2j2FNaOYO4vF7g2u_gbp0hQMkSobMLSD46rYiw1uwbN-S6YEgJlCZuE1OjBupAn3BBExvl6oSgy8jHKOpnVjjxyr=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLckSdVotpzD6rlA-UC8OYTgV0Is2_sp_TGshZp4vSE39_kxu1-uDEIpU7XgGJ-mM1LYYS2L9np3wf2E_EwLalhweG9hkELwrapFQSBoqWyCe2zj_EwL9fcZ_OjwDhoDoYduq6I4gnJ0-6s=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdAZLjAAiJc5byD9K971zuVi7ii1dg0FFYWBtR2CQmiwL5olrk9VPer6OV_o4Ulix7HylPH8nx_cM2QSVjerivAeoi5vqLTqC-Dq_1yJ3Wv9fdzybyRhJcRHIjEFCSlqEsarO8k=s4800-w800-h600"
    ]
  },
  {
    id: 148,
    name: 'Honeykomb by BHIVE Sector 6',
    badge: 'Popular',
    rating: 4.7,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://honeykomb.work/wp-content/uploads/2023/03/BHIVE_Sec6-1-2048x1365.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/BHIVE_Sec6-11-2048x1365.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Honeykomb-HSR-sec6-6.jpg',
      'https://honeykomb.work/wp-content/uploads/2023/03/Honeykomb-HSR-sec6-1-2.jpg'
    ] 
  },
  {
    id: 149,
    name: 'Obeya Verve',
    badge: 'Special Offer',
    rating: 4.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfFIaF1kyDB8-qloIO1_Wmj-tT4qH4glV81ORVnNd0TRtTFWi0UGJOXLoIj7Loqx5WCSqULKa36vcq1ZvyPM-ueaej0tBXCx8fsJe0KD01d7dwK_uwrc-fIT7F-rh9LEKy_M5Ta=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfcThoetUvSHxgwQeuyg26ooD1MlmlZv8OSP_R58wZ5fHzM-g5GSdV8mfDVDrWl0yHSlL-ohztC9PzsYBwP6lErFBse-Q1UOG8huUtduMnnVIXbiVYWgQ0M-sFrcv_p-Jwq-awA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLewmZ5ZX_kABGrKqkJ81J0CKO7gPKnkisI4I3qJg01P6YEewVf3U_r1mwQ83ByTf4RKcJuuUbNvMHulsRY4Ydo9Yq5bYN7A2bIYfRVLJs1m77CZf9Q4UGibEmd9TU10l7v8X-A=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd97a1aeIZiSbX68EnSPddMrJgwICpoQSBX4OQMYt_7TaeL0IrGrY2VdyHVIo-xWoAe9nAxHik2562BCVzNpeuNuczXw8JEg7ZeyawPRVzgf7gfz_WxqUV0X7Tl0KNKPDHFRjoaeg=s4800-w800-h600"
    ]
  },
  {
    id: 150,
    name: 'Obeya Gusto',
    badge: 'Popular',
    rating: 4.2,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc0vRMoH87Tdvpt1nouNfs7QQHdheVua0nJWQ4J-W0sUlAQgHuRRTJU-bGZJH9tCxeKfxXUyVIoUl9CNjqen5Av7fDtrYk3ohB9vgcDQHtyhU9UBtN-bO-bn_Ybz4sHk0TkEbcv=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc8nqgmAtfEtjcfDnHrR3OMxsqXKFqo7A1Wr1NUEtHFZTvjRULvZ2xUa1aVXIbbacxCxZ9TT-A_LIvodgJY-6x6CRFtfyHECKlce46jBmbZKLZpF1t0NgRuH0XUhUsC-Q9P3SLW=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeSMYfCfEHMoUFsusBh1SaV626EtljkSrtQyIN4IDaFxFhP6W1RAGDZInGLh9GHCCVKsqN5BOmsxeoZjfKlk_lAae3MgFS8h-KuhUMoYJ9tSdCR7kkWfzkJzUUnjqeF6vmuL_5qzA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf2PA_KPiUJ8fLdyxbdBRLjIRJCOLnq0DFAntZMUOOh9mn5hxZReEHowL3SIxlHgzDTuN5C92DtxaJG7dqa_uYzxGDIdVWLkCUSATwSlNFdxoXj22jhXjztx6GRr6Hk97dp4h9ICw=s4800-w800-h600"
    ]
  },
  {
    id: 151,
    name: 'Sierra Cartel',
    badge: 'Special Offer',
    rating: 3.6,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf5CtHP1N5s5OTegvKu9q5Og1Y-m8jvaMyiz5WZgURwIJDubz_rnTcpInlQ-KpqY78kgv7FogghE16fpnl4LoMAlzJ8AWXdkEHNUPuikfLMsO_JP7V2mFNT9DkPVGoUmLzkCW4tQQ=s4800-w800-h600"
    ]
  },
  {
    id: 152,
    name: 'Obeya Milan',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcmDeWxlDlNj7gKwmgr34PP5te6nDJWGEG4_D1qHxhfrSBaTvN8-sA0TQGq7FuXl1UFW-KGlsahqJaaYMXvOXrEs_8nY8eRzwmqG9MQRxjokWGyWA_YI_YpPCRBOyLgfHs_cLSjnA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLebaJtFztNHyokBtKLiJvQi0pm2N-2p-mxR6hBcxpBhj7JHw5Tf2atM8cy2f-VPFeVQ7xy5MQJ8h92flqHSUm54qqp6XojbuXgvwjnUOcQ8scBs_fitVKV2IW-AQzf7w-8G8mK0eA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd6zT5w19RtFzUsXBeaqrNhmd-SV6f2bsT7-ezE0VdbZgWYUr3Ga9uts3vbInUEUK3XZ9N7c1Z8QaJwpG_cRlJr4X0PWWTdHD4JuelaqSjl70npRtOMYzMp_46BIAgJ8Y_ur7a6=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfMaISofVz9beuMbKyVX1lZ1AV0UoNbo-E_OfsBgM5zdXxs_6cTCoJzr-DYAlcbS5aKTXty2OA6s8M-ed09mpuL5qRP2oqoRTqLh5rB72CFMyBggiwnaja-9TpKVnkLblkpmf3VjQ=s4800-w800-h600"
    ]
  },
  {
    id: 153,
    name: 'StartupHuts',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcr9_BeN5JNoBAyQc5s6GkkX4CB4v6OS9w2_79lFMYdAIbxltM7vjRQWjJXjYcBvoYblUuGfXqIR-tfjqEXbbwJY87XrRMLHKtMNs2mX64Z1id798uiIo1dfNZnfxYVd8Tj2HBo=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdPHSPDaFUNNCdawHW4gU8vj8Ygk6u-kWARgVmHLQ3_F16mcLWMfubAM3--rrZlf-aM1Kwur8JrjJwJHdVNsAWgtpcUkfteA2AGh62snEH7mY9GsNJYKhUjn-Piwg5W3KfE9hocEg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcEYSdHLvYyT9cbBRjrmcNRfGxELlVkO3AwsQcTg6NnDM3Cj8SlcgqrLX2HLUMxTSN5fa2oFwtFVpaYf5KbiUy82xfMF6OGvYDq6s83-4lzOXMChqv2FPBHim7GjQygf3YS-Cyv=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcZd3B6zQzr-K8vpkNV9Fpe5hPiR8SuAAgTuu7mnHvBphdgpWRNZC909fxNQP8JmPQWTMjGGx5sPDl1MSKlXuQdsPmn_CUyXmYwraaUjRigjgjkY1IdO4EWs3wclGMEbcXuuN10=s4800-w800-h600"
    ]
  },
  {
    id: 154,
    name: 'WorkAdda',
    badge: 'Popular',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdQbUxKVZRG08TV-MwET7XhheyUKUby8K6IzNgpSAybwk3WXR7NqHPa9XAbY5BYUKeFSrV1BPqPwQK2qjZj2YyDI6zcjAaZDA6cgm03x6fn1JnVlMHBmrRYRTkx5Rd1J_1TWpLE=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcr9_H-Efks9YNJWEy3NnH0IbI2ZjCmYfFPijp7r4V19zP1d4naI_CtmcvfkiKwSLxpOpRUswCma6zfBqlsFumzLRfgt3ceEwvg7115sM9xJgr9Ru6irYz1hQJSxejkE76I_S0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc013p1GmZODAvtp6OWd4vWYP7UM_8UGDMAkA2EzsXZmMy_zx03laDXJZlRdTgzR0knKdpRJ1au-KcRa0FTy0wQm4FTvZB9iM-tmrg-fr7NfuYTo8bn4zSRfrp9g0ujz1dvgoA8=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdp75hoxJ2LZ1SNKjaYZEiiYNdNkzfSk534yWyfyh1s5estvU5rcA6uE3TwsVkE7E4RzxIFwguBk1c-SmM8ucrj5ZqcPygo-mqW6muz_gIwfi6XCftxzFrtyK69CFj9Gz5guwIQew=s4800-w800-h600"
    ]
  },
  {
    id: 155,
    name: 'The Venture Studios L 176',
    badge: null,
    rating: 4.2,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcisgIr456CtWBtyn5X7X3dakIRX115iYEkOqxmpf7ga9082loUdA5MM9t6Xtsb13cJO0G6L2VgGfXV6fIkLGJ_dvA7MAdEfy9EzvdU6nA24vGIt_E9FojQ-4L5577_qwgb34ku=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8-eoHS2z9WWOeC8IFUmqtCu2GPyAV7VPR5YD0xx9Kjl5ydNh8iTLojZSP-nIwzhHoI2ZfdXK-isauRHEWPJKDvjIDHdQ6dAopLQ-lkPaH-0XrQCNkYwRTjBsH537o9pVEVlWM=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QvhMeQqkCjgGqr1q4G3JsyVlB-6Hv-SqNQDz27OJLlaUYU0hm1xS-vo9s8XwjuRTJ27jhBKHB4X32fa2nqrbyyEHh0oRjKuz1JipfT9wU-XnPnbMkZehsOR79f0gq2N0sh-LEa5BNIG3Yv=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SL-heQG3vf1-KCUhID9JkBrzS1fZsyIFmawJ8zsu2T8gzotxOGCVk6MZh0xnmS5ZYPu2_iSqa9jhlIyW4ADqL3wrb6BMlIF_ooippLi02yC6x-exokpjQVYHJkZ6lHsoRM19kQ-w=w141-h141-n-k-no-nu'
    ] 
  },
  {
    id: 156,
    name: 'Workshaala Plush',
    badge: null,
    rating: 4.8,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SKfmdUwMud6TZ3NYvFaF0WAP3GttarbXNriq7rf7e70qAWdBIKCyWWUfatCkd3Dm0pv2eyTCSVybTFr9BxkIS7laguYpenkMZBXqw1lUgP9r3jT7j4Y1bogUAGuMgJEksLXPID=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TF3h-NF-xELEWKfWIwvE2QrbjW2NHBl_yyW0IXeYyQdInvg5YZYi8lnSU91QStDg_4ICRdKt-0oGWiaYAXG74w1hjH9shKDy38Mk2IpfHBFK__mAHgtr3N0F-k93HFRByeeO9dkA=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QSv1h9LJRym-fJ37oQDKjKXSoS3Gm5bG5_SA07_A76MlEAz4dcWfj6pWBFKmr3B4LCgOornACdx-aC357Ll-a7WYW2iONft666xXDJ13Xs0UA9G20p0NxSN5W0XezsRp8W7BR9=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RpWvAu425Em3rMqC5R_Hgyzg216OI3a9H7Uw7kpjTw1AC86WkTkd0NgPd_CusLJzAyIavKnyfbod82kLc5_V9gnExpy4ecUe9n1myKeo8M_Tyz7umEJ17c3wko8UpC9DDb4AtruQ=s1360-w1360-h1020-rw'
    ] 
  },
  {
    id: 157,
    name: 'GoSpaze HSR Layout',
    badge: 'Premium',
    rating: 5.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,899',
    period: '/ Month',
    priceFormatted: '₹8,899 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gospaze-hsrlayout/yt9gbj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gospaze-hsrlayout/nrpn38.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gospaze-hsrlayout/e87hev.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/gospaze-hsrlayout/btgbhk.jpg'
    ]
  },
  {
    id: 158,
    name: 'WorkX',
    badge: null,
    rating: 4.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdUUHe_cUYmOxJin9zfo8pAe2cJHlpaOnlc8Lq2SVpz8CRZ5zAYE6eBcPHaIFTqYlZwvDBgUhRySFsZsxho9bH_BSbbK9-A2ZiPC77-9c0sA5lrg1Rx7JTAuCBk-emI85dGqehp=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfLQMTUq7RRDiQ8y9uQtzfn4CMQ5GDye40YA9HzEbBEuFXpSA6J56rjr88xThIiusqy1miAzzVqsUtNbqzixGKMmKdnxr4C8G1uGNuwrTD_u4sy56Gpe5wSlZgDwKGFaQMdRwAZ4w=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcbfrxz40GUvZlm7qk3g1dMR5zr0z85BU3oru_YK74eZ4e-YMbWfdip_bcOvBoUaZj-ebPXemm8LnETVDi444tBhRmGSXP7Dt3BfNaSgQT1THWU3LNyuxSpmE8HQvLEEmPzSe0CgQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdj3xLN-sQcZIT5m7HBK_d9AeGiFZSpXG7NQK47haOsiNVGSZVHFkPX3tNaS1Cw1gfB0cmUV8SZjYP233FIkhNvxK8G8urOCXcxCmd-DbG4DYv9x5WNYVVl3O7Y48J1kOD9Hwrf=s4800-w800-h600"
    ]
  },
  {
    id: 159,
    name: '365 Spaces Nova',
    badge: 'Popular',
    rating: 5.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcHo3OaKHnkQ-nGVEnl6oldoB-E3hzR-g3qPkmh6780GTLKpjhANSU83zfMiTZjdy7zesH-SXnG7y2z4GiJPhA3v-IeXylLkimDgm_qtCuHVbsR9FLajWPTwL4aQROE_pLEE_NtuARg7O-O=s4800-w800-h600'
    ]
  },
  {
    id: 160,
    name: 'Olsen Coworking',
    badge: 'Popular',
    rating: 4.9,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc1rmLC473xnprwnV9rYe_W4Sz6-SQo4MyozcrdxUrMKkr8gx4yTZj7SMU_BVJWcTD3aLA0L15mRsGzGN_hJdA92nMimW9Oplab4WdouTCRtcpTP9xRLiMexJTuRYrmT1nQ-uDVQPVEwa0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfizbjY6B_90IsZr0KLqvQaCwpveciNn_iCT-kJSS_HwWKXoyB4Eq6xWctek3XeN_2eKPLWf-KTmNWeJWAyMzsmRvVaSNlFwIm8KqnD0qoM9DCNZ_6DrQIuYe3c8iY5pNMs86WqZKyLG-aR=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeSr4lr1h3LxGFXhC3LhtW4D3hwHdTs_IXfjIrxP8UFJx_Kz0veFG-_pdwBFFxJ0NTwdYXC-DZJwet56rKQMBEoly8vjOVFPUzgankL60N1qUS_-fCVSNquN4zxixKwVWZALvE3SA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfZr6SnXdyMZri7BnrIcP5_hwtI0Tgc5h6iJ8ZQB4dql1ukY6Y54SYBWU50B-UL21YQRW_vJnNgKxJULKgC_gD1mGaAocVOWNizEE_TaUc88MnUYyWj2VrBBTxannYR-seiTXz3_FxeGnXF=s4800-w800-h600"
    ]
  },
  {
    id: 161,
    name: 'Cocktail',
    badge: 'Popular',
    rating: 4.8,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TUwdTM2X3E9sWdgdUsR0Lhs7a2X-rnLKGBO5rBbSEK2L3L8b2sb8sI5xZ6mVuawqyRRuXsaUC4DuTXAnJZe_x1ZVBSidEqSIG-QD9qrFbBu9NzNzA06BJWdbemIvtaPafqLgc=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SgyNT5Ei3MSQ59h6okGSX9I8y7l1O8NZhH2wWB8V56UXRWVceq7o7EvomTxBv4wO0mOLwfbqBr5hKm4lJt9VIO8xPJfNsEmfDsYepiDSk9H72VNxpIhgg1j2b-Ti-8SPssbqgk=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QGZfVtVYmgKqYtgZ2OPiooOlaU_55becG_m8ht-XGkSfBNxntni-m28Hzlhr0UtFPWJ6759_8sNtGJ4JoDOdN0VE3uyrYWPwrhxxs78kqL6x6FeFQIxzPmLEX9OpkSh_W-lROE=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3e-hwspH8zbdzugDOHH0S0Kf-Np2El-cxbFNUodKrDg7lTEcnVnDZQCFs7VsY2YQLFs7fWeGfEJRC7C6rDIclMd23RPTYSfvTLrY1cbIzWsUECAg1D9w1XmxrrXscXr_o9rbg2w=s1360-w1360-h1020-rw'
    ] 
  },
  {
    id: 162,
    name: 'The Catalyst Coworking',
    badge: 'Popular',
    rating: 4.2,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/240f1a732216e7f7d9367461649c24f353b7d224.webp',
      'https://img.cofynd.com/images/latest_images_2024/a7c3f9507e35198d7743c229acbcfea785b4208f.webp',
      'https://img.cofynd.com/images/latest_images_2024/9380dc7e9f85ff0ebf309523393cf5649d09115a.webp',
      'https://img.cofynd.com/images/latest_images_2024/e1223a0a3c72e8f2be1b36545f5c19429f9dbb3e.webp'
    ]
  },
  {
    id: 163,
    name: 'Enzyme Office Alpha',
    badge: 'Popular',
    rating: 4.2,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfN4D-2vNNdHnQN6Lj6knKCzIL8ajWRPBXV11zneWMNlUs54NxcyqMWsSReH5BLJqRUVSN9VDAqMzAENkL_AB0CUcS97bJlOAK8FE6pnDfC4uDfgxtF53kxPivbOhZX9cRwdZ4D=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcJRNZD6vCJzAOfsgbPsqR0ye1mQaY4YkF0-6lKUkoqL4o-GGfARCfXBBN85dHnmYGua35Z4NsE5voKRnmUM8Y7GZT-HuJ-rorD-30QOJOKdeZVvp9ulfKYiUBOPTB26K44R-rm=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf86Ns3U6YunJRcCh32OlTARcFb44C9tJT4031IXMVPIwqmd6x_uWCetns3f7rzXp-S4ZPIA01eQM9cbj9p-5qDFUid8nK60Yyr2pS3B_-dTAOeMXIPRZ0WLO1UupPLYNbH0LMvcK9cXwg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd3jDNnPa00SFpsE8ZaJwOi-p8NxGODq25lHNJ8UZK1p0JOP0wrdDqcoLh4L0TJxkMMsIprWN_Ny_W2CHJZI3hMvJC5LxQBG04Y_65jmQuBsfnXmXIxcgxa7z6qsFGP28Qi_Xj84HSDizbj=s4800-w800-h600"
    ]
  },
  {
    id: 164,
    name: 'CRE Spacez',
    badge: 'Popular',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfYlum_b6euB8tm9sxNDAEodfbZXbLzBoETsTHQLwNEEhYJdKHmE3_5Bf_dt4UwiAOelQeQJv_Lh6KPfVwQywoRVv3PEwwR2Z_vjRYzmwS6LrbW9kPodULogFKJo3shsz8J6atn=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLevd4QHk5rJttvaOP-3NF3e5SVCMfvSR1sWwSr7wP71yRxvKvZy3Z0GdGAUAQEFwb_jxt9m2VJp1_izYv2uM8lEhKwDkCcwhPduBgUSFezPqtq269x25icdaDFLK1DU35dT0wkT=s4800-w800-h600"
    ]
  },
  {
    id: 165,
    name: 'Tribe Coworking',
    badge: 'Popular',
    rating: 4.8,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcZy8Dzivb1qZE20NUp-l55oackkRu_9YyyBXDy6KJjJf4w-jcFzn44W_22Q4GHxJThPlDRyJesSPLLXGgQpy6Xd5xsQMYPpA50nBiJuB0pF8x4N93Zl42uY338P0qIaXQVZfSU=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfIiBkGDxCDLIvjrBcQkftBw2zCrgEh8ZLiZPV6OTNJHzN5uwJhQ_Sli1jPHroRZqe5Rz2s3BvaAe5ohH1f0Bx1ZPZK48I196_TJsdy47SWBGKhxYxtmA_UDQL009Ax26Ivwqx1nQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLexokh1ABCOEloLW_vqI1xae4tisHQXDHa3Bia0JCekV49CRjlmHdol8QNHMbcB3VYsAurPiOsg8oWoNUQFgEd1upvf8zq3as0KeeFSTkbi9UCBo0lGDrXcecIUUEwlfX81QONMKA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe_z-M1echPyTAIFmN8jMpVy7TMChSLOkYkhHePQkbXzyxFmMIeMq3xWUiRqObxNMLlcRPGK3WzEXGUjRYLyqw3D-6ol1Fg-hGImcrs3WbZTb7o0S2KpqYEc8Pa7dGI8AEksSzx=s4800-w800-h600"
    ]
  },
  {
    id: 166,
    name: 'All Time Space',
    badge: 'Popular',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://nobrokeragehub.com/wp-content/uploads/2024/11/Coworking-2.webp',
      'https://nobrokeragehub.com/wp-content/uploads/2024/11/Coworking-3-756x785.webp',
      'https://nobrokeragehub.com/wp-content/uploads/2024/11/Coworking-1.webp',
      'https://nobrokeragehub.com/wp-content/uploads/2024/12/Coworking-For-Rent-4-5.jpg'
    ] 
  },
  {
    // NOTE: separate centre - CoFynd lists 'BHIVE Workspaces HSR 27th Main' and 'HONEYKOMB BY BHIVE HSR 27th Main' as two spaces with different plans and photos
    id: 167,
    name: 'BHIVE Workspaces HSR 27th Main',
    badge: 'Premium',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfBRBRThHOTeDhrrSlXepFfFeI6pYhFR3xfP-exWiG_UE06jT2617lyqb1AQxJKUfFwhlxfJP4HpVD5nwBFr7TStbHZebH9YDQumkUA1ZGrUVP49at9LKHaj_-Rntle5nFZ-MjWgA=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RbHJp2mH1PjydWqJmyJyZxx5B69wECHzlpSW1T2NIQ_ztQKrJJKGBuHUUxTQacX3hfo3LxyeZudSjDatBYCukY23H1fXc81BHsNifq4mmLIyuiEzrm3GPLxCTdPD4o066T9WTb=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R83rBycnqxh4FFHYVjYVm908QmsQ_tW3dmf2XEJR3mjmGm3SqKxeOB1ii3jz37l0WpaNYhzyw0Q8Q-WqaAf3_ID60q_zWpiYxG728GIyZAmm9ERovpFIxMQOq1DFPeYVqyyX3Nvg=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S-6hKB43h55k3rbhDRQMaxP6eZHiNgszyk9HYI95zOsGLfpCUYg4K4iwAtpnYYqGsdB9d5js02MnOgYLmkslnp1oOb173bFOLGYm_0Qyfo8oDv_JNgWZP3_08mS7Fi9AbGftEjxA=s1360-w1360-h1020-rw'
    ] 
  },
  {
    // NOTE: CoFynd lists this as 'Honeykomb By BHIVE' on HSR 19th Main (plan ₹8,000) - a separate record from the 27th Main and Sector 6 centres
    id: 168,
    name: 'Honeykomb By BHIVE',
    badge: null,
    rating: null,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,000',
    period: '/ Month',
    priceFormatted: '₹8,000 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QYn74dX8u88KlecQudF_912UCxKTTjMPoAa4R3A6b9JNTbGA9ZyJg5EcY9CXSQuZ42w6tTtVDMHgZ6LeocFShd_KlaQvsiwOfAfMW5LLfiDUCAGeklOPKd7-4hpuT2Tg4bBukGfA=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TpGaXXbKh3gpiUh5JKOu4_czqzC1qnQmjO43AHX02R1I7lgyYAkRix1El8Akb-vqno7eIgPOtyayIeCVAwJO0Z7dXT_QCbkr2bNGG61kCYFta_eF5qe88QmKcC_NG_zldFzSo2Lw=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R57ygMCSp54lk8S_sw7uz4k2LEk7rpI5qajdbiNyCMHPmPRiDYpgQqNGYpl8PHINljoJPY5r9OBqSef36SpTcJe2U7DxnIv6ppzEe0PNAkTkIKxseMhz_zm0-SV591hCyMNf9d=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QJK5U4x28-9NdCR-_QaokJ0ilKurYA2Ho7JD82zjCXDGVv6Ja2LqBHPtZpY3Ghg7KTpfVqW8PH9TX7s3dvSqI1w61kFVd_vgRdoBPiJ5EB5WDpl1p1P6jC3W1m_MAqcV2OUw4yQ3ruspA=s1360-w1360-h1020-rw'
    ] 
  },
  {
    id: 169,
    name: 'Innovatecture Workspaces',
    badge: 'Popular',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXNruXd8nU_2BVkHH2Yr6NooMPX2k8IimdSYFQ6oiC9XCo5E0ehWJMCYpnXHJQvyTrmzgQDrBNwnXMQMjGxmrjGKVsIom7eMDsfqKp9mTr9jyUI3JGVhDbDjyBWSEVs3y1uQNY=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sm7Fq3SSF-jUR3I-cONyNxLRLXRQaM0TRcNfVq_4MESJFcMlZ0Zfgm8Lk6hIIcwkcjYkiTCs-wvjLov3D3equCTuFyHiNvCBRvb2QkLpjERHw0_gZbyhqMi_fJdIlh8qXXx0zO=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QB14q-yQnnvx9_5j2ezumLzMchuPoSgnz55dyFg5VFHvWx9I5oYZBBSsDNduci3AQASYjc_0rWIFsqZYT-tL_1MMrHuDOVNiBEitbNfr0oa0Fppt9hB18QFltK3PEY6MNAc80P=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qh-i2Ld5CbeV047N4M5ADOwI5G4VDu_L09WUMgspiDkgjzI9PnJhZJFp5hHWCqpF1bhUnG7TYmtRqa6zKp8SlGc8RNdo4cxItsQ7I5c7egMYjDDkiE9rnFElsdQfqCbwNXWshf=s1360-w1360-h1020-rw'
    ] 
  },
  {
    id: 170,
    name: 'Techspace',
    badge: 'Popular',
    rating: 4.6,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S29XBlVLGja0tylEeiJ1dhKr1jsoaYTRWCooxad825hJhomELqYPtYt4eRJRnowPLhsqgkLvWApuEe3LpqZQvTrtx0VJro5awBifhi1Had6Z5NUMmSNWaysYdE_HuxVunZneq-ug2dXGVm=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TjC847k58hoNaYzCo5hlPO8i5XyECFZz_ZE_OqVpPmbtJ2pmz0F6y9rkQ0QxCyPF5Qvcm74uUxhh7y_1s7QV94p9qlVxOxqzdvOSdr7i5DWyuhvHdGSQ4wyzwq7g6Lji2EvzJuGd0ekV8=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_tE-F11tf_RKXWDitCmpCupsdCNYmX9FEbMPlLbVlK34SHsdgXG1chzxPM-2NAXwxtpkO-7n8IrZCO5wyB4mvm-LhWX1eit_JwFkcTwvH6_QCU1SoWSNNLm8Coyo5JEwbkdez3HZ8wSw=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R-AiEVBUSyo-BIFqQNrJ-KN-CW0hrCDWU4ZnxjJ1eKbKBzo3JtQyXIDKWnpovDEsjdA3pEek1o7bt4AtugMH1z9U-obVUaR2ITd_JU14ViYw2dVV8j9VAubmZG2z1Z1hIVohlTMBxWRQS1=s1360-w1360-h1020-rw'
    ] 
  },
  {
    id: 171,
    name: 'IndiQube Hexa',
    badge: 'Premium',
    rating: 4.3,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcDAu8OqMoZvHoK3SsL_u7KPU21_sL6T8ngEdeWmInGVeeUVNHSVg6UPIrd-luojoHxMrf6-0sfiw_-Wei7rstwqwT4XedzqtHcovDys-NwuLEmgsdox-UUS3Kia991cC37lHDwlw=s4800-w800-h600",
  "https://lh3.googleusercontent.com/grass-cs/AABkmLf7LXEGWA7rlN4pv5VByGzFwEYHnS6KAm2ikE6KPjTKa72zsTftZRC9NY-yK5BEGX0Xj4AGCvnwpeSyxW6EXvBBduK37euXRIvbYb2RQ536gknJ-U50rKxKVuMwAEux-WMimjI=s4800-w800-h600",
  "https://lh3.googleusercontent.com/grass-cs/AABkmLeaIli0CvyAIlE4SRg36QVLN4GYHlz2BsEjDpx_PBAkJWVp4eN0EsPme0fdntFS9G6Bwtg41oBu1uBsR9FDfT8pgG8g-xSU3CL-8wCg975ZMy-xPxE4Viv-sNnu9FkLlsLaIAUeXg=s4800-w800-h600",
  "https://lh3.googleusercontent.com/grass-cs/AABkmLcwUME5YAdsrU85uHnruwfeLnTXRCjCIvbskq5hfhxd0ANvI7gm-8f5XyX3pjQc-NQcpLPxzSclR_KYyo5EdojUG14PHBBOoISd0AzjQxBOS5ktl8FcqU7M7mqCNmF3XfSp5j5R=s4800-w800-h600",
  "https://lh3.googleusercontent.com/grass-cs/AABkmLe5QDBTFsgkFjh1cCgFXNzchUJg-Z92hY6jKCBud5U_gUrHmfKhheKL5DVzXjhD4VjoWxIyLPK0B733VmTsTtTEVbPXsJ_BzcNHNlbMuQWOQ-p27ZWleVOWvH_pyoKlYOBy4yfd=s4800-w800-h600"

    ] 
  },
  {
    // NOTE: No GoodWorks centre found inside HSR Layout on Google Maps (CoFynd does list 'GoodWorks Cowork HSR Layout'); photos are CoFynd's
    id: 172,
    name: 'GoodWorks Cowork HSR Layout',
    badge: 'Popular',
    rating: 5.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d5b7b0e12c9aaba8e5168d49129b4f59814ccb31.webp',
      'https://img.cofynd.com/images/latest_images_2024/5118fb8443ccc725070938fa74cb16d82efe5e32.webp',
      'https://img.cofynd.com/images/latest_images_2024/2433df737be884822e9bf4449d61accbbc8d4abf.webp',
      'https://img.cofynd.com/images/latest_images_2024/c2cf5aabb1afaba3bc2da4b4e1b178bb4f15dd38.webp'
    ]
  },
  {
    // NOTE: Photos are Hoda Workspace 101 (Sector 6); they were on id 174 by mistake
    id: 173,
    name: 'Hoda Workspace',
    badge: 'Popular',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdQXHNgBah7OJOSbgLepYBAEqc1rFFn9gT9sptWAApyEgdBmjJxnFQg40PO-Z44b0kBS8MhYyImJZ0c_MH8Agk9HbMpmr8riql7filPAkFoGbWBZMVfMn1zBjYtkhT4JlEvUzPGSQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdu_RVSvoUeXZbuHXk4ShI9RGuz3fxOQHa5pudb8HfC4It3j3z0ffPwhqBUo4Bd6VbR2GshR4WoIREVG4Q4arMH7lgoCKGZeRGNSRVxs_AAWgcclBCB-tFrfKAD9qO5-9Wg7aSOTkYfr-VT=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfTXBnfCKgiwzoaZ6MqpCA4WTc-evfjcjFEmltq0XUJGS7R1GGA8hvG8oe-R0ysLFdQrgW6coPS5OliPtNyyjdpQomt4bLOGI2CEN3tI3pIjxRlZY9diKNsaUnNpkFOe5eJOyp1=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdQEvS5IdDwQxhm0aTQ09U_ceS7FK2S3SG0DjwFAnjZZvB-sZOTnfl4zsOsKH_bfNPkdGvXfg5PqIN24ASRL9qeLr08SFRk7DrW0NGGFYHqX3XAGx1fTpaWqg5w3gh-U9c8gaA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeHA_qAG5yZJse3tQhhT0lW0fCZVdzzHcylujEZdwvurWdLc9s_sdruPp789VG4WDh340y8bZDISGgD3oJCohLM-rsFla92OtD48JzV-8inBu9uG4-W55OKhQB6OyQVOgHVAK1W=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Photos from the 365 Shared Space listing on 22nd Cross Rd, HSR Sector 2
    id: 174,
    name: '365 Shared Space',
    badge: 'Premium',
    rating: 4.5,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdjRkujR_-oZgVX1w0CeHWTVOUOB5_w_pEcVi73q-aF7PUWMIvTQLSJgo9N_-ad8SIKZ_Ciah2NmVdGSGTVQ_1SYnM1yKWkMqm8JEtN6j70gmh7nfstmUNuoTm8oMu8xLmQDZlbROx371sI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfLVkzv_oeJLgloiqJjEFJUA88jmNS-YTqsjdN82MP1IzYzVfByDEb7rixUOmA9OwFcx-8NwsyUSVZBqt1NnFOWz4ssazkkrfbCPal-Dn2W2w58ZgkeQZXCcSPRFw-MSU0cu3zY6eRmUN6k=s4800-w800-h600'
    ] 
  },
  {
    // NOTE: Grasshoppers Mekong not found in HSR Layout (Grasshoppers has NILE, INDUS, Volga there)
    id: 175,
    name: 'Grasshoppers Mekong',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeuRHJSTP8QtXqk6QzUbK9_LoBEjH4iixR8N0kMS3mWXwpB9Jb5pOKxzx4sYtPwTQ8DtHKvwqaCzdMf8CfK0zEtdL46OOEL87heFt5dNBFmjYVN1zFq8UJAZK-nR-Jj1e8GZ34qqj3_et_m=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdz-cVVyji7FjjD2EZDZ4ce5KiadyFwsuE3VbxK9sdErkDL_j_nNsbMfrFX-Q17qaN1qSUT3_ZbOQ3cTl4Lju9jqWOPuhxh3iQkBTTCBFyVktJ49r_Kh_0DWIW3uRghpYL4gEGdlYMUzSrP=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfCkl0Y0v2zBbUUnVHQ8SlVPEuaNk-zM3fT8_f01twUUNMqYJCrvwOqztitKO_y0CH_GuEjUma8Rkyw5TGGeREL2ycs2axIQc9KwUPidGsiFxCIxhLaQVzPlBcSxyjhH65Zyfsi2IEmMzND=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcI-tEngKM2jk_Plydh0pQHxNsInkwA-XqKnjkziWUIiMINXSQU44QyjZb0cFjZ5PF_bpu--EoPAoAf8S1cc_mcFwXN9eBkHYjH6IMPD1zAI0SRFc_3JkuRXoUCcW7c0F3Bh7ilL958k4C2=s4800-w800-h600"
    ]
  },
  {
    // NOTE: CoFynd lists 'EBC Space ITI Layout' (HSR Layout); Google has no ITI Layout branch, so photos are EBC Space 2 (19th Main Rd, Sector 1), the nearest centre
    id: 176,
    name: 'EBC Space ITI Layout',
    badge: null,
    rating: 4.0,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0baGwu03ja426P4H5PaskVPMYLpmN69c4-u09EoeCbReOF4noIOA0eFyfvKfYjiNBndGoW-fAuncW2W75g1beUzZFInM2jFE96ExAHdxREhvfeWvqJjvpoisNlHXNfcWuM0drdlC-VUMG=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeC41tZGeF2WB0Dz3f-Q4L-0UDACrKZJLjUZyM-_U5nS-AjTZr_Yz5uycZksGYlgF7aVnp99YgxcuKId3khATbGt88xDCpj6pet_TltHq8lKVyUDfq3dcjWjzJhFsBlMdeY2zcrdA1YzcI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLciyRizi3Xe3_e5m3g47tF8r0_E7ptuXyFXjjT8X6SJUcNJNtxGEf5-0-mzWLYmDCd5XMWJZoFilVhrLBxyU3eJ97PnWKPuKywP467pdEjO01XB-BZNghICsIa0tqEV6I-gZQ0I5GoZ-DDR=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd0EZsXrpzg7n6umku-8bJw_OcwpuurwiOa80AmCF2c6uUOU49_DkiihpFSQh6hwRaHp0yDNGd3ECuktaqXoAAclhB7OYebQJOniWPX-oYkcfKC6QeCDdqZmcJp06Pc3uASPVeUK-80jko3=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc3-MTMbg7JiZHv5cmiONmtORgCooOH60NKp8HHNjuc3Gs3KUochbhGyxplxv3NTsuukg1k6b2zbYfyXeEgrJW354AN8l06KUpdb2pP3cmXNXMDrftFDoC-AP6wfrnBfc54XqkdlGEd8AM=s4800-w800-h600'
    ]
  },
  {
    // NOTE: KVC Coworking not found in HSR Layout on Google Maps
    id: 177,
    name: 'KVC Coworking',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9d33c434b0c77a973f9809fca67b57fb39e2d07b.webp',
      'https://img.cofynd.com/images/latest_images_2024/577ddf71a9f07b6fb89f9d743d70a6f2fc1e3831.webp',
      'https://img.cofynd.com/images/latest_images_2024/38de28112daa28d9bb9ebd1af6919a60ea05e5e6.webp',
      'https://img.cofynd.com/images/latest_images_2024/78e7bf97ef9eed18a4f4d575e94318b5487487aa.webp'
    ]
  },
  {
    id: 178,
    name: 'The Desk World',
    badge: null,
    rating: 4.2, // Google rating (card showed none)
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹4,499',
    period: '/ Month',
    priceFormatted: '₹4,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcFIoLFwYEV_XoCk9cNAd20QE7c7SwgbDjEIguneN1esLaTLw-UUTJROaOf7IALR9l9-C5TM3_HL4hi4yfUYDp1H_z2Eh4nXdd0GiYITAQGSnfHvywwP66947RdlJ241vFcwZmkcXEYmd0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeSS1P3uS1NCLn94CktCP1VhedB4eFWD4R2IYtexeMnl5KNFl8qb6ikWkvRnLomVgVGUXjfZxVOhucfNgtz6Srd7SuIBC4O1mfBgL2NRyWnceP8PcqkWzm0Ag6rJBgdvzbGP4JALP3ZlqRC=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcA7_jY5TVm7lF77ykEUPxsCSaY6dgAQyXJbm70hf7Lr4hAOo080izNaxn16QDTNxGSbFpCU-njrR3pKEL5WI0_lF_DTdAPZ4rmeBkYbja6Q35DP48o3GijtToaJ2Jwt8lPL4OB1A-QEKoq=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdYvaD62sNw1D1XAeIvUY7oTo22JNHyQ87Mpq3h9iRBTg-Tn8SUwgyzk_kSDCazYkcPiBIIJGfRwkMLQnU9qL_4e7C7NXngeJjtUTrnCRWACaTATZsMfOPv4ZnhL08CtEKEQNknf5RyaL8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcBuUjXcp4sz1eSHOcBlV5kN-y3hv8Bml3mc1EzQpE0Loqo7de2PElkiAS-7cr8s7LiTu4u07ixSoth6K3xlNByOco2gXvjNGmTauVQdb9Id7Wn8N9rBlFV6cfdgnjX1YoP1ZVKWZhvnWZg=s4800-w800-h600'
    ]
  },
  {
    id: 179,
    name: 'The D Square Company',
    badge: 'Premium',
    rating: 4.8,
    area: 'HSR Layout',
    location: 'HSR Layout, Bangalore',
    price: '₹6,666',
    period: '/ Month',
    priceFormatted: '₹6,666 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLePuQ_4OCJL9LT6y_K8yNwD9yJauD231ZW10xIF-DqLnyP1KJJoyMEKcqE8UppqIBu5w7eM_gDdRXonu0lJxkbdGq6PvJQWabBeqsmT-IwnE42BoG7jh9Eh0vrK-c09nVsaHblFpBTDiJM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfZZ-CTONipsB5fBn0MP6mDlD5FTmNV8k26Efri7QivcGdYoAh8B67bwiDJhS3VGOPz4jBW9VwbMF7sDgEV5cZuNpgQpxg0D8uzoCJ_GLBrGOWcCM2ChcQoygLYOJL7cFJSYTiOSjAX7_0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLesYoW63gMpWjZMJkGIDFuEOdhBWO-HsHTFk_DUw77b4WmCsdvu4UN6JIIKYd90po_q8DBoaOcvdS5zhGncWuzR4E0rVdZZYQbMvGFlTuFiN7juUh-kpv8jF8k_WATSdqpqDIyZG8AuaCJq=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLftsgseljHgI2zNIWvrMo1lX-S37MVdFWVduTBATCSFIf9DVhrNvE76xxLJI2ge9FXtJz9JtveC3FpGTPWmYrTpO-5P5oNol1E91QEwfDd4g2E6wWpb-YSRkzaNpB5cRKE19Y7uMRmteUw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdPDLwvEva1-4nhR1MZVq9Q7FIdIhRa6XdFNQjmRscdWRWtgdwSwREKtBNDyKsbfsGJf7sCkP6PH59ErtVAYew4GCvmN4DUKqZWfHx3J4Yon74RSWKsuYPWzGXtSkrBAYyRCb7As2F9lkvs=s4800-w800-h600'
    ]
  },

  // ---------- Koramangala, Bangalore ----------
  {
    id: 180,
    name: 'away.center Koramangala',
    badge: 'Premium',
    rating: 5.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹13,999',
    period: '/ Month',
    priceFormatted: '₹13,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd88WRgCBLWy3p6Un9UTMB2F1Hy_d1Bmqn0QjZSlVyHI-xC0V_15mYkcPhiCtqZr0juQNo2_LYt0LUSKmnOk1qFGjncMlqaXCyA-oYbe_xEQeKlfOZZwLjDSbo5CqNNt_f4mqOGreJ33P4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcSJIDtyL5aYhP_mCibCyder3bjstTKrpdq3fE3cKYHfyNk9hm_ifaWjXTQDWx45YzW7NiTmsEyamzTsIPFxcvU40kL_y_llXOMUyVIcFkrH3NA_pyqYz0kv0EcMxXlSmnreyhjzDLUTb0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeNlrNBCVwe0UX_nTNlxeoxrfQQIOYBp33WD7J3y_DqhpXCjzj7PFVcSL_cmHjPv-M1j6J95eOb-4fATjTOHEF1KP_blVgzk3r_8SX7FVrK2SZO76lCE-CCL5OkymHZ2SxZQLH5oHyBvxBw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdxtKdlhBR8h3UQOcHV-Wz9pVd7gePy4Qt4CT0QBiKmciyFeZ9vjaWnDPzKOYKxRnGmzv-v0Du83Smnjr0cmNzfMnqS29vAZVMCxcDa1jQK7u9FB4EiEo98ZieFXoAHiiGLa9fGEyFG-uQ=s4800-w800-h600'
    ]
  },
  {
    id: 181,
    name: '91springboard Padmavati Complex',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeduwlJqtgyMdqm1uCCk_YV4JBHwv7X7RP40r4Ev7lMurJyCQLq1glXxWWkCh5ke5xBBB6LpsBRYaB0wi0l8SaVh3x7T6Wvcok3Ci5H8ggydIilm_Y_os5ML0VO4ecVL1xA7zo5=s4800-w800-h600"
    ]
  },
  {
    id: 182,
    name: 'IndiQube Techpoint',
    badge: 'Popular',
    rating: 5.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdHu5fiaGa9afcr4QwsKDCE5GYuDbk_55TjO3XvYkHkdCRev2F-AGrQ-0KbrYXUxVtGJzr8_tA6wEENf5dB94QtImUwn9zjHxWKsqtObDSBzaWmevQ5g11G93Cp0B8zlBYMnXSp8vBNIwxO=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeymVKBKjVEtq-xeFnmtGXMA85rniRxBQ3k8QQEei6l9-C9KCDKuOZfHS72rkll-T5AQfRA_ra8unjIjeXx2Zsgv5xf7CNBy_m2j7pqCILNfrjkZ5lI6hUl0cJhXGN4Di1BPTDWwuatHSk=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLczxxD6197nJ0k1Iz--3If6NoMGHL36vDsBew4iD_kYfmc9DmDTepikqYz_XtqBmz5neaBoYytTSdsuutbH3qhLkhCwtAVjq6jgYG739oI1kPfI00B0KyBClOIU01g4keCU31gF2lOBpeY=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLekaXuJM1Ka9cuOCoq03SJEMgN7rL-SQSRlNA4jqcEJFNt_wzV_uoi4Wf6RCHFAfkDCTDuWaISrkqgy4UM-fbdAg4vN8rK6TdYD0yYnJ-MJM_bj34Cx3pkzrcQNg_koh_5oRjXmHBmPAVg=s4800-w800-h600"
    ]
  },
  {
    id: 183,
    name: 'Awfis Prestige Blue Chip',
    badge: 'Popular',
    rating: 4.1,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf9ISJsKq73RRwShUdx5_ICGkTb4xEIjA5439_08TBTYXZHl1P1rvfyAHnw1GtTmsg9IwrEoqy-m0rb8ARz1yCVrZUlRwWShcmbbkn7eNpXrc0PzL74aMq8fjnYzYpqdsm0A7nz=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdxfsbMXStto_-cOTO_3WmR3OSxZtgk7INbfVHAWzMcaGsOT6WqNPD-9_4R1Asqiao8VZVTxbJrQN3lEawV1mgyNShDOCiw6uNyv2uz-N0G892ZHwUOsYwMexojvUoXLZiSBu8r=s4800-w800-h600"
    ]
  },
  {
    id: 184,
    name: 'Instaoffice SPD Plaza',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLetPQzZZ78ZJtfJwzGidHaep6wnWiLvFKIgtcBvlXOruTJCbRmr77_Vmxr1_mNAfW2wyWItBQVW1Z_oxKN1jhZx6Ip6xz2RE1bnNBWOWWmuqbAe4tf0-_MSHGAdtPU3BSVOnDzk=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcJTjwcZrAi4KgJaDGQQH-CcTXl1dv3VEnyYXJCZ72ISh2bwWlPt6LNxZ0Zzz8_ga5mwG0SGnC-LVjUSBKQVfmAivuEdNsFk2xRx7lRzl5t87beZQGq8NLgcgGoVlyNhtKLdukk=s4800-w800-h600"
    ]
  },
  {
    id: 185,
    name: 'BHIVE GNS Towers',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeMoBUCFaUxfCUagfk3FUVu_eu2Cop3wMNdJrHugv0rMWpEsG_-fmVnT1ntXM0DfLVZ1PNwuHfwnS8R9ZQDhKRzcTGqvIAG6PByymW2VanBPs7RbhaBd4XTbn65xSSw494_-ol4Bh7ly5bM=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLefCyA2EWUQYkaLWXKaqkS0LAPob4O9epn2r9UC7Uyl9W0qj4bfM6GOb5BDGkPfhPodp7PsbNjMcCt8p9s-RtnDyfsOt3n_iu9VizznAYUL8J5hImujTOPLBwRdxmvncYa7t46F=s4800-w800-h600"
    ]
  },
  {
    id: 186,
    name: 'UrbanVault Esares Building',
    badge: 'Popular',
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d286fe0e3fbae9913f65d7701f2917d28b874c9d.webp',
      'https://img.cofynd.com/images/latest_images_2024/4bf637cd6c31a9132434746c42665a762356beff.webp',
      'https://img.cofynd.com/images/latest_images_2024/c7dc3bf5a2b60866b7026ea9144dc21105bf859b.webp',
      'https://img.cofynd.com/images/latest_images_2024/28c39a6ba3c1df685372ad48efcfffb7325d2674.webp'
    ]
  },
  {
    id: 187,
    name: 'IndiQube Octagon',
    badge: 'Popular',
    rating: 4.1,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdH1CZd5BUXi2gRiHu7p5J6omuP46rTeGcRH1wjKSJWM6jb5zHAGdp64GuKJzS5hTXqjYE1mUPE4wxJxtUjdXc_t5GEirzjcusk5XXiwy_kElstIwrj91V7BvtD0wim4omfVHRA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdaxPqWU_ogHAnOa2AdvcqUl4FAmf26oUjZVhrZgkgXeUWwXe_lMP5X3S5Tvm9A71h8bV5US9JyAP22PcC1Pi-3gg_OgFB_l5W-8kn8nArKVDFIrU9RA1-i0X2k4PnBzy2EMANfoPe7b_Rs=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfmVv_DIYXMxy1NzfigsMRyKGzP5CJHAfjltwNlGpp7IgWLow-HaSW_J2nFl0sibQ48tZROWM1Plko7A6Wjm3kT9Nk4o929YBf6ZkvknJlcX382UX2xAvvucfGawKuJLO2SSBo=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdyvXdm_hFKx1Am7KU-gpowRLP1Nc3riEqIlaFq1aXHuBCpw7l31WGHefSloJaH2UZ9I5OnxxdsspI4n1DzXiPqP9WyFXN-vI6A6YZtwfM2EEFQTMcTnejRjKkOKsQQDBwmNDbk06p6-OtP=s4800-w800-h600"
    ]
  },
  {
    id: 188,
    name: 'IndiQube Sunshine',
    badge: 'Popular',
    rating: 4.6,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcKRFFRvGLfvnLJ5LU-JCk25XC5feNEiU1_xiUJNzxjhiGnpSH64pW687E60HM8ocsVdw5EcrIRzFPFQpfhjI9C2dS6xcSqYPJE1FPWf7-Z9SKj7sNRf-SuTeZ8FWbQNxKKUNYssEhSLFc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcZOvJ38s0vLHtWF5lpcETma_rju4snytEHJsXfG4sUF0scTLiYMO1iwl3N9oxC7oNyeA0BMrY5ejWFsBh-Ze-w4LqKww0dl0mL_3Ffzog3mEdOQpbeG_jkYzHFjDhP5KkNfmQum8L8XRiQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfFmQXDRM3KKubLI33KdCPmDPHXmrcu_w8OvCZAYG7o1q1QeRQv4y49jjihpTXqPCGJ4kYsbpy3T_ef-ksjVmrYMe5ibc0T3RpYTHZuvdz_Wj0U5fHc1w8aIIYXO_BSW7Pe25UjD40RdKvz=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd58QqaRLXMGtYdsJxQ4yTvsKanimHUdp1CLvyOiMKcrA8QwLwMOr5hMVknQCVCvbVC_3yNAJufKzNX48NsfYukhVU5xG2CQBxW8gzrPd4N59lqt6JaIS1vUSCd74Xcqe-3z2FG=s4800-w800-h600'
    ]
  },
  {
    id: 189,
    name: 'Novel Office',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdQCEWi1TfNaHJMEOizUztmY-PIgDlLwhNdwOXoJoNA53mvTRaP5eCEqpzj99eBs8npxU1sTR_q2Yxpq0NpndmKYDdZXSQPZRAs5r8mnFQkrxtaPJnN5igrIpmO3XQoISPuLcPgrw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdzX0bTPhVTFSzt-toMi5wcakZVXnparUqCRupRs2C0-I0yoCItLIcaSrzJg4bfpfYXGrGBCu_cgI4OIiy8M1DukGCFVvvvWhMuLTlzXnfShjtD-JMF9D4ssssjd3QGyTjRUOg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeCJEEorSpcoMVW9rracYDHaxanwA-JgqWbGHxj5MpP9lKchRp_oPmokoVoDIkytxJeGgXz23Ux41dWQ-fVjWOR90l0Mm2JlnhiiBUt6HjzD8tr67RxwcDDfj-1RI1MztW8rpYDQuAVzC_4=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcRAoBbWU06lk3orjw3bjLIYAyDn64366c2TyecqsrLymwAbri2cRp6PPQy_vrL_PQZ07hhMILBz2WiVOljaKfQyxb6_SLJmcQv9ay-FL0t1NgNaZmXAIm5MTvwI4pHpJ4XWj4=s4800-w800-h600"
    ]
  },
  {
    id: 190,
    name: 'BHIVE Koramangala 5th Block',
    badge: 'Popular',
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcZViBryfKkL_sEP4_UHS_gvphWDJL985Qplq656w5T8Ju7iMP5fr-_lesfmLwX9CuRQ5nI6Y-7L9zAmJ383iR1qZstj_sHVejtqh3I7YVwe9DxnPLXeVog7GykTXWckoaL-QLdow=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcH9HaqKAPvdscn9f3v1hGsCJtXS2qi0NlpvlZnQplatgFLu9K-9BP4smvx6vgFYXtvf_iM5nxnrBoNpPfAs15FP-q2MfCze31uWixwI2dOKxOdS30uEvjwgrbLD_QwGUGpsiZo=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfy60cdS4EG6tj5vJ_fxpNdb8U41E1umGQSDvVLNMbkH9ZiqieXV6s_-_VMx4oLfWH8gFBnYdhlaubtwH9xyOEGztjdfXj5rcOhOm4nnexcQ6YDtOvVl8uScl0euUWzakef7GvL=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd5M-GJW_K2XeXGLABCCJ7d9XguMAb9t-XclwTx3t4z2oUl1G_7JeyckDGjF29foHvAI6ggCDx6uawJ7zVA1BuUqNQgueM5O46tLKCoYPho7xZBYsO-8at-96DsWBsMOW4SZnk34sYR9F7z=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Found on Google Maps (80 Feet Rd, Koramangala) but the listing has no photos
    id: 191,
    name: 'Indiqube Royal',
    badge: 'Popular',
    rating: 4.5,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/fcc8573c26f87f7030d92b7dfffdf7b27cdc9e3b.webp',
      'https://img.cofynd.com/images/latest_images_2024/92e9d053a776c72290f4ab84920aa917a9ae8108.webp',
      'https://img.cofynd.com/images/latest_images_2024/24a0ddcc8a1ecdbe23ccdb1bc02ad19a6351616c.webp',
      'https://img.cofynd.com/images/latest_images_2024/ab83961ba0a5770f91152c75738d631f334db756.webp'
    ]
  },
  {
    id: 192,
    name: 'IndiQube Celestia',
    badge: 'Popular',
    rating: 4.5,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcM2sJzoTYQSsD3qGXiTviOe7I7MgHsmsgBd-l56XrI7h9oWxVmoi33WE9L4zwhXrQdiSrxMkxPZ3Lkr4kH4TtG-ow-iugVVyCFteIgtYFOE7HgFxmseS3yOt3YHqJe6PDQndQ=s4800-w800-h544',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeP04K4SfMxUx_meAG6XpswLO9O94N1mlegdi_h7dwBN-_vXdsH2g5aohcR2ImnIgsjeUjphDvRAUQcskgkJH8xiPk_eFNXImJe34reWUoMZs5NnlXb_2Wqif941I-oHXIxBsSd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdGynqikqQKoSRSkL67KFsqVXdd63s_MB7PNmc6yxfOJ4wGhlHr_F-wFztCbpObfwzzXVrGJtuh8LE7iHwGj5VH2lSPatXDXM1-c_kcSLXwpjtlNtvmQFfNJxOJxHimy6gCr9ZDSw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRTQuvC9_O88vxS13LGNd_adGYvvZK7x6QBrIM90RWuC7eVo_p-0MutP-_foWf5zNaxTfiZkeBOxTfL7_1nI9DtbpOEzBBQBvVApcVhhrzzTCmkm8kCUuBg4iRVOIoXN65XcFB=s4800-w800-h600'
    ]
  },
  {
    id: 193,
    name: 'Sparkplug Coworks',
    badge: 'Popular',
    rating: 4.4,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfOSxst1SNkgSL29566YClYOJ84gYyog_qXNHy9iOcovYBicpwdxkLMUkXYI_K_15rNfci131vAqzdkyV_WFi02Nc73XNkL7VgL2hpPSM1BwfQPQ6Baomp3QxNFgI_xEfiRnlqt=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf--J1k96sG9FP7Ym7qg16hA4lvs0WikdbpAEpywhru0200c2ax-W4h4Tg_Ch4BWEo88vz-Zeh6jRNq4e5YaQ0ljLTn3_hvsMGT0TzeRZKk1-qHgKgA_yC6TFSMGf7acvIjpQMA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdFijgWDaM_Iag2YvgEjANgPmAMvnWoruw5uaQAI1J07Tgotj61K8dIgJRSvl0XrfrLU9AgUQRs_oDElvmyrWuI4dxeWaS5XEjz8woYCKRE0NK-xkUimib75boDi0AChTUGEkij5Q=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdOMesvoZQGtdmZLn2vnrLMvmJZtySBWxToZz5NynVxkjK0hNtFsE1WYAK1tSQLc5603zHWZORgQqQEveVes8wonQg44PXKYf4EySuMSLIeJUHdTUI0WXK8sy_iKCzIxu42rkUXcw=s4800-w800-h600"
    ]
  },
  {
    id: 194,
    name: 'IndiQube Ascent',
    badge: 'Popular',
    rating: 4.3,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLePM1n1rQOpq6x2TTtyWgBPEPcwPAT5NqczGt_bqYyehjiY7DODr6tJVi-URk_zXB0GUyQKxUjnAOk2KwFFrcSLWBR9qs2H7kPeTj8S7JFjzjmeGZxy9W967ZBD_HnZEM3sv3iz=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe5q_HwerjkQNuTrtiq9x2wh824SKXxOi4aLYmcvov8miJ7pupHAU-xHh9KZ9hPrbdG7EAod0pUAXEtcAzplVvOB31DzRJEjJoE03HSJ6Hwqp2HIWygfjNiIvGdETH9xADpZcw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdaWMRPM2RkHadEPgD-5CenlQXTgCzC7IkLaamIcJ7uB5DC5HNXQ-exKn-T_iXKxidTFBBSxQpYtiBdNeTKvCBax6JXEO48nxnNWG3-onhLUY6Ns4_hMxMelrP0UJsbOowxSCYHmg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcbOXpvC0emr6hM3sWuA2NPX_JbBJa1-Jws1gtDVwE4edYPYOPNcne7lVdcOGybjxGo36ilIxE5dtucZTuas2pmbrGoJfCSUYH-YwYwk6_QDbXqdCXQHWyvOYf9In3TSIM6XnAOWg=s4800-w800-h600'
    ]
  },
  {
    id: 195,
    name: 'Attic Space Lotus',
    badge: 'Popular',
    rating: 4.1,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeGaceHKDRYArd5txZ19rJaTJGvuqUaXEu6IBreQr5d0pVbBNpol6WdFR4LpD4gqFmu8YTrqNP7Y9uL-HbnX4QhBPpz_H9S14CkMDKBR_zhV-95XnFTeG--5rUbT1CbzyQDtUY1=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLda8bkmgNFFLoUEwjiqe2jsLWO_RTuv0ujbC_GhxTy-aISfTxyYUuCXzYJSmfigNaC1lCBUv345hXke3qGmLaT579f5NldrNKxe27KQgXRe-yhL4buTFIaZ34ENVekFOfHAc-Y=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf7bu8kOp1igafdmuNre9db-Tb-P-iI0_V3ap_YC68gs9fdM7qKccsLqfrwDSvfr3dmz2mBOFq8oy8gF0Kb9jhLHQt-Ry4lZRDEEoggMyKvb9Ocl31svKUTCheJrH0xeDJqfOPZ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcebEJRDh5wYN-bTzyusBhOhwmQh6yj4qzt7lReP0DukRFq5I0BYpF3uFIewj6zxzcStxOYzKPlc1Lpx1R15R3aUsEDIYbTetx7eP_RW3ZOLkQf_z6v7QjPGTZTscxmQ0lATQd7uA=s4800-w800-h600"
    ]
  },
  {
    id: 196,
    name: 'IndiQube Aerial',
    badge: 'Popular',
    rating: 4.5,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdUCUzrKjXJ2rJkneB7OCzj-vapfsW3Hrl8nezIQADeHgGlARnrQ3TrWkdNtBFp-9gFON_4C5jLIw32CqYU_yEehdne7Gll0K6MI5kAwcZGYrenOzBagkbImW0XVUbN11La6g6LjQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfYeUz5kwAs2jnxLNk81QlrM4Lp04nxI6R5rv587l-sVxjvPngZq78-r4Xo9r3CO4vulDXidWthGWKuAWf2n88bS6pdnLimoM72wZovi1zNXomQE1kwRPIJe0Mz-h3gkCn8g4pY=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdNunjw71uCjl0sJigrTS2Sgx_wnE-Hqc60DS3WeYkEjNqJBYJfGPWQK-3vtCl7_4NrIrDARtfoFcqeUqKvlgTOYuTJcQoNl8FHT48XFtSE32qSpCoYJFpA8v79Grf5D5WKcnk=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLevEkl8Q1jZSVk-KOSo0M0t28Q71eGYdy7Ldc5fomWambK5IqHsCAsvDln8ebyVLB7jKIaFkDeJOABMCoVAwptTz41w85RWtkIpHpK8szY9WPDTI21gSMte6oxYOaUXLMsc3Kuq=s4800-w800-h600"
    ]
  },
  {
    id: 197,
    name: 'Workshaala Xenon',
    badge: 'Popular',
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcpZks7rgfQr8EIZaeas3ft6zhyCzbQXKJIEq9-t9hxH28AmubjYxAPawKtN39ys3IScSSgoV6UOJetfmmZekeIgMd5TlMRWLShAyZvTrBqEbybmecrFMGdtwL_5J0kvAIIhvqp=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdJr8UXsOyPrTn4TLdTGR5HAAwBD4IhrrZffts4tJm1lFadHLjFX0sprTNDOeawHFkRAtBKbvtPGnNlaBP-u2tKcrwN7OZzH7uostNHRIKf6qUjrt43ybzR77mEB_MOPyN2byrK=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcBNi8OBxD334YFrseYd_ozkf43ed0On9_-JUj84hRgD1pEyw9HW2LG4WB3iKMKb0B82VomFFHAZ0fgGLQ7niODAwul7Iw3-CqTA9on9dbbJnSGrt3xB_5OdlBkvJF6no0FqYc=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdLHuNxnDBLN8MwbV9d1xd1-zWs4MYrL-FQfKMyyhmbQSLKlFa-2gGYRY0g-0I33L3WkSHad1qD9o6IIoQMWtgOzu6NEwpMXlO3bjI06oixIbpj9GmX-T8sEc_V3m_Utp756xVdBw=s4800-w800-h600"
    ]
  },
  {
    id: 198,
    name: 'IndiQube Sigma',
    badge: 'Popular',
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRMscoehgA1i_RX4LgcRKsQwvG9kCoP-gyOZrg81qXWE9sXO1LC6jgS3fFuyZIYcFGPZ9FkxJ0x1-U-QjV2hCQJj9mM23-SlWeUvo8HI5va4OnaeMNnJgMADNExp5isMdAtCkF=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeXAxLC4ElUCg9LCVjSBiruhu5epMd0vpy5nSnmBy_eXaEMmB3Bi0438wjNYlHf5z5GfViUngckdf-WJSfpJv2Vjn6xOjJvvJXHoHFHCpIFkr0zYVMmBrhuns58JEosWpI30mW6kpZfAHU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccX1aGlAAO1IsUrGyOZ8GSq_8WMqJMnHBCbf04NPOnuasv6s3wpIDv13hhnUKR2Zro5sHnfes3gyOlcbLNUuIa2m8HDr1lqO6YrWEu5tvGeHtC_GeDXUE7aAl6x3-VJqMf3rJrj1go-kA9=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLea1NK66_SaE9OjIfv4GXr--UjvifRDA0YqLjcrZ2005iDSyev9h5S657p9AE-NuZbv2HhuAqiJq-90Wv-aj0BpKi5U8EU4frqGnNADA5MzPdA_D81Lp7nIDjYOGA-e6zydWLvR6wT4UIyZ=s4800-w800-h600'
    ]
  },
  {
    id: 199,
    name: 'One Co.Work',
    badge: 'Special Offer',
    rating: 3.8,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcKJ5m4mDywext2LlMXqqzPu_oucehbhPjtFePovMXdDsEpYfccVIvUufc_JBffo-DTn0eElF-6d5_uZEQ9jAMiomw4u4g-NUdEMtlPlT4GEO2Z38oICoRo2BXOaeowFlim1-AZ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLctTvrbFMoUZK7narSPlVOvPeFJo8JtEJvLlQsrz82eRsDsYmLLbOYAtryieT-r2RFT3YvtSi5JzcTicpfdiXQt6oUGve5iIkzVUFmlkW7A6ka-jazZAa5WJSjL24MPjkdrJo6R=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLefXU5c1etBgcyd1gYHlwMWtrB9A5SkJKpqt7j5_1ltSELdSHZOoYkcNQE9UtLOrnnxgpONWIcSINICR7WpZo0mliQq0YvrocvPI6F3iwAv_P9kBpyTE8ZzEDNgH2BaxMIf1wOqmQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeEC_M2KwZZCRylp267FcaNnOTHQ8vHJGk4dA4SBTjo9Es5ieeiEApPlxAC54geu2v8zedwmwtGvVwrX2dU7wwRxhS_pzwhizunPz2XIT_inRXehLsNVFZ0uek3pt6LzTvTS2w=s4800-w800-h600"
    ]
  },
  {
    id: 200,
    name: 'IndiQube Ashford',
    badge: 'Popular',
    rating: 4.4,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfj6YGxEKv4AFo8XjvN6E1iRU4bUPovgqf6CR60KtyyVy2hUx3DhFmq_HHRX1vSozZ9jDAiYd30E6JBBxraTslq7RgHddMLFPiK_-LB1aU5pAm7TuVu-aRJ6JxQev2n_2po80hxrzLFGRIu=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfBdwMmTpA9wrbuJOct2yLiXi6YUOIhPxD7xPY98scUHePdHoeRWB3O1V8KfRj6APUM4MqWfI8UBUDFik0G5SdO8iSE1FAmedKhJqYHNvfbwj7KariMYpPVpWqf-Mvv2sr2XrZO4lzyoUI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd_b44PwGDlPY7rPU0859xPxwekLCgOGO2N24LmJnUW_2yxKXjV69LzXy4uN04qq38A8-m4vhOqXFJujFZrjWqtYayIAPdTZTn0k9Sxyr5yFI5072nB8MB31VB12NDBJRuOdstsJ80c9uo=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe-7Bz7S0peXr6ZzF-e-JYaG4rBy14P8e1yRzWKPwbKKaYxJpzky8fpqQQAgiEcmpfRRBibpnWs_wVMIokf8T1NKmff31MRioRCnbVN1EMM2AMLKJyy7wiXcofLXe18GQJq_6Wy5KG1wng=s4800-w800-h600'
    ]
  },
  {
    id: 201,
    name: 'IndiQube HM Vibha Towers',
    badge: 'Popular',
    rating: 4.6,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgV3YH91ghR6LWC_zRD396dcv6qp3OjcvMA9MutBLKI2SJdVP6PqoFkzlpqsNc00nZqHPoAdbn-2BM0-lX4wDCad1EGq-ah1m3WmB_HUo3c-pOfcwsRUjTD2saw-M2I74SxTPAguHEvlY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfsidMnCJhUIMjEWvXrcFcrHeKSl9CW6STZJxCbmZlANWI7D9uo6YaOzAUvputqZ40Pde-f5K7VQT6lL5KwyzhxtKYGtedkx-mShcbFrAOVCVu732CWpm-dafzbsy2ZY7vCfrKjX6MuSrFF=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfSBhAtVGUBw7J-kdOyoRaEBH17ht_N4mUHRIsq3PNUQVKeiFTpOWOop8G3IjGQnKxoFi_7RdgofzhCI5clOjTaM2oSFoxmR7yt-g_OvLG8W82D34BUYs1WAth_yVhgQIeG1LNsjgnpwtE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfLw6RZPcUNeEHUsBQciqhrbrZCwsd59gZeGU0pOA6qAPPzZGLsbrHYtWBnoJIPl5UcW84NxUif6-ZDcWAUps2fUAGiNghM5AA1t_OAML5kQlLek8di4H519DGNMtyvuvBwiBiXyz1DEmTk=s4800-w800-h600'
    ]
  },
  {
    id: 202,
    name: 'WorkHome',
    badge: 'Popular',
    rating: 4.9,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc6oyAfusTgtFCn8NjUIq9J0Q_Y0FRqcuEG5GBHLeOmUO3wjRCOGuHBgnSRet6OVIhwAq2dtUoIADSioogeLamWxTGSUBaYOVMJ_w_bKsvzTzxIntNpHJBnGWh_XL0rb_2TRw5vWA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcd9uFpVkq1x-KdQg9xjJ8ntGS5bb6WG4MaTll8JgaDTdIfOae6RfkM20Xvi61XU3hYQC98LzLxrx0qHDW2eCNXJAB27XgKq1yAh6A8kvC5jPYq6GXqhNFOGbP7favzL0b8SWG4=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcC4ME0Ql8xaomSFJX6xiHOPVd_wFAZrFgoeZzONAalnoyYjl726UhoBjElQCWqkQ14jWZpKKo5ZFBoXzkLmqvgeD21mtVvavn_YatGDQjw29PmHC-Yj-JMk7RVawV9Vz5AjgAJwQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf999GEmeplsUF9BrBJHgE8IEGfqXouWF2gaZuJxbmPVlvwEb8Nf2hu-zjYvOr7A-gAHnDbY1ekZyHaAyEdPg4m5uMUSlWLBUht6jEA8UcZm410XspMKCnnwNo05f4c7aZhIkg3W1YMamG_=s4800-w800-h600"
    ]
  },
  {
    id: 203,
    name: 'Hustlehub H204',
    badge: 'Popular',
    rating: 4.3,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfoQ9lAzgY2IkIPNtBp-eKz-Eb8wbiS3d-JySGAGMXssn1zzENDfAD7vax2ee_ILGGUtI2IN1BJU_WQSPBTEubBIRKd7FJrqW7MXodzMMplViLqkJm1a0juJE6i1lALC5glvExQOA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcPEbLC7GcEJJMhFRtoapAvsOkYjhg4i37TYTcCMJ6oe6OTkJTuWjm-RqYZfs0h57uFN_lYhlQ30ZzJpTrftuMSBl1rEZ5fwSLjfA_6jwIADMiQ3DTVOk1DpxNv8MJs6_MDF4dk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfPmIjJGec91D3msyHXTePedP0jL8ZVpL3pjr-0SLIqfzhfo3T3VGFtphR3Nsn5_BaRoCnDJwuErr_VDyJKyoZ6lvkMZy_GC5YjkV_MFqxfGtChfwL7BbPDZndFh_nVjp2axTs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLezvNURCiPyudGH7YHZxpXk7RTbOCYQ4IyBeDcU3Tm_KCOaQetTnAUs-IyL2HBMI0_5JrZZbgJxQTan77vrg0MMaxq7d0NH89GXJAbbWaZZFDai4eNLqkA2ryEdM3j-yiFAc3gueA=s4800-w800-h600'
    ]
  },
  {
    id: 204,
    name: 'Preppy Cowork',
    badge: null,
    rating: 3.8,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹4,499',
    period: '/ Month',
    priceFormatted: '₹4,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfKBBEnqqfFxmr1neHnAnKu05IISBrxekZLT8iOyiGNgZs1BcgDekT3T4Tb14nUGf1scZjbg3thXbAy8qC0r2k8fcZKolNABONg6_Z_RWK68uE4pFvSv7cp9oZwqT9pCR93XeY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLexkxHTfJtLFrAQFeSvhnTW-6bKT-zR9B85FU7e5O_juv7TGsS2Y8_d6VmL4uJ5fQiUEujKV1ZP1v1W58i56HpkLbBFnLZvpXSA5fk-Xj3qBHOCU_AAA01QyO4h_QFLm7rpwkFd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLejn-Dg_wUZFFW8elktyIk1a0olf9LXmGLcDlHyQ2dcBxB__l6aikC51dtCrPDBpOquXkFx0lGRneC4143CqUydZ6RvZ9PQAbg1nXxqGWzViWgPWBpYrr4ob3dW3EwT54CMJ_iC=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLch2oR6Ezh--8MaRcg_A--YxBnpIZPk5vaxQygIgyIO2Nh8-siMEbTASfslnKx718-UIltzwF82dCrJn8TEJgSZPRXgKT-eE6mOO5qGLOe91OooFHE2Et_bVTbWMLpPvSc6gEkq=s4800-w800-h600'
    ]
  },
  {
    id: 205,
    name: 'Mangalam Business Centre',
    badge: null,
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc3XVzDZomzyfVaSshS4ojq-Fk7tB0BQFkB17jEJvA-PlyxLQuAYiadBEA1hJ9NY7XDeacaVw09qzoqaUx2PcXOxp0KenRU10XQWJePe1Xom4-yg2onoQ-kZ0B1Q2loLkr_wK42=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd1CiK9lW1SYUm3SakLh_pSETdNV8lt5XCXVApnatY3Db27XUrUm-KBreRYxA_nTnfK7bFbhXBsrKhy6cl67HJ8_zkhd-NuSOt2TBOG7jxgjm-Os4HUCxFRJLwa6RtlU63qFFE1=s4800-w768-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcVGnJSHuQOrzIUunrByUX9vSEFOGmQ0O94vuQKT6fq2ykE57Vsf2EpZunkMDmEFWVppDz82haKg0tAqbVRPpQFXiUD-ws-fKrb3nsWobyjsy23G_Zciy3ikeOFMu8Ag4ir5Rek=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeWOKFWz8zviV0hhFX0HhrY6wfpAi_4tvLXfrtLJdfWMOzSIgGY_r14ulKT9jqp2D0hRBkQHhSLIqvCLai8fLPLzc7pSbFZlJCoLiX0TwrgzWjzVqpNgwQqpV9vBD5Q2rIZkcUm=s4800-w800-h600'
    ]
  },
  {
    id: 206,
    name: 'Attic Space - Trishul',
    badge: 'Premium',
    rating: 4.5,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeSy7AwexQEs1IsjKZhTe4Db8PHZMMQCOcSGJGPdQ2OcayQfC8buYu_e5uXw0seBkjKJ1_wX59KpcPThdBEyS0f6Rd2Yzyd8qImXP7Ao3VHBLynovinfL1QUgJhFfCRLhp-6FbM=s4800-w800-h585',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd1URsnkx6tUj9NJFJHOJWQ7v57wWuhhmUXaSp_cGzRzHcCJpmrt67gRFGmtclSPF9-rNm0tEfI0F6ICn5dQn9OCa6cuqAUgJy-fvYc9VQys2igpW0JYI5c_w__XpyQHBpQT-HA4g=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcXM4kV0usi0XpD4Ov67sxUgVcGHIqd-r_vDCCtHRLsiK38bRjIGWysZoxLw_dO-e22dUqaCbQZK9os3-eYBgBkjBjryv2UUvXULKuWnn81c5PhRgDG1u2jXU2jqo4Xfn4OP9NTZw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLetTM8uTMYG8_S0ybd99FVQ6jsvvLPh8UY6l39MESIWL7sMojcgSnuL_ofYfHNq0JNt7Y7tQB83b9A-t2fWMk8NdRks6xcYoQSlnOwJ6vZ8jy7urSLZFK_5Hv74zEdpR3WJatTnkQ=s4800-w800-h600'
    ]
  },
  {
    id: 207,
    name: 'Golden Square',
    badge: 'Popular',
    rating: 4.7,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLczpJV5Jys_6uXqhxQHsROTiBwlhRdLUTM6X-tGdGuSCtqJkDcYQDKHrWGZy8-GZ7386vyaImEEoNMMDRmwqHKtMTKQBW-3kvFnKyxCh3lunXNrQi_jiAJcCEE2_ja3Phq8DnZhOen4uDKQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcd0qOQxHS9SCDNVD6vNhy_vf6JE24goWPs8NXlJjSwBFseBkbK-mnyusgUwpHyXUA6bvst5Q7w4QMP7EKOcwSGz3R-0qkkD29Kz74w958GbJiVylYbpSaePwlbPQTjmM6PRur2p6m_QV1D=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdTQHP1QPcc0chCMrnRDqdcAK60f7-vYxY4ZDiXAyk8KH3qZGWLjNaV1TyELLEPY19UiWPY0Ym0R4y5IjXqu6ul6obKAFweBPnPFDV4eO06QztQvyXBP9UHq-dzV0FTXKgi44tS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8LSVSooPNhsb0Dl9ra4lY8AQECGbpJubt1hUwTZEf2WVYNz5zluM0Ut1hQ7x-L66v7xv-gQkphL9kQxyLLFZAR99HJK7tv_9wl3oMKYH-9GPUZ_Cn9Vx6ysQSCSnZEyBnssM8=s4800-w800-h600'
    ]
  },
  {
    // NOTE: DoerDen not found in Koramangala on Google Maps
    id: 208,
    name: 'DoerDen',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f3aed3b10b9e6dc6adeae2cbfd92f4e0165abcc2.webp',
      'https://img.cofynd.com/images/latest_images_2024/ca18190d8fe0b16e26cb75db90870528a4ec1e02.webp',
      'https://img.cofynd.com/images/latest_images_2024/429d1b084c2d8cf0d7882601cd5db255edfa8add.webp',
      'https://img.cofynd.com/images/latest_images_2024/5daa18bfcee95ffe61db079a4a68c8aa252d0f87.webp'
    ]
  },
  {
    id: 209,
    name: 'Think Tank Offices',
    badge: 'Special Offer',
    rating: 5.0, // Google rating (card showed none)
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcxPSdzUj9NHzZS-mb1kf3tXeigEfe9dYE7BXX93jsOFZ07-jyIChBzJ1kbgeMW5O3r3DSEG8amx5wn11IBV7PX2UQRJoGAyZigVON5YopySDO50zXNV9iyXY7f9XPqNP-whnRo0JPdvOw_=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeqgIE7JCM1_fmilnCStE1f6kmSmXHvkxZ3QhLdECr7xaU-BYETlWjDRs8uVW73SK-uVsF3RTD8gqoBUlP4xdkwaKVCneQXVWN70MAGQ_GkIjGKA0AX-895YXJzYRlKNfxuZbOak30ktPE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLch6HsOXFGZD2HADbt3E_mrCPHY9PwFqFeP9z70OmPe9WypkKadQr1JGXUmM2r4HKTMpu8eCMeuyBa64b8rnzoKBjj4VAlQtCmolYmHYBrPyfVqYWJfwH5CQ5fiUwO2uoUrRubwadQRx5A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeZHfCqWhOwrq4DZVzS8vsWxAikf6Xkg5I1cPDlxUf8C2fNrsBjlbUexS8k70GmeSOv8EIke5Oo7aTBG23OH0OrKg5E87Wv7ucVR7wooFpcMl2lYMI-VOr73DKS2JigdB-SL_oC9vGwnb3a=s4800-w800-h600'
    ]
  },
  {
    id: 210,
    name: 'Ripple HQ - ANR CornerStone',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹12,499',
    period: '/ Month',
    priceFormatted: '₹12,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLce-OOW1tmr-HcR4uY7g9IISmtJToXKj-w0xfIq98U4jLR3AyuiENC5MNif2xQ7s-Okh52jQgP4Du7b4OV9lyhJu2v5ZHm5_glmGTH-wk4pe_bil6eNxQtQRrMg_wRQ71Nz9yPRMvIHmQw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfo9L2LI0lWgmNhwLXpA7z4PNIiE8J_3eLaHui-Dl9JOqag86Jy4jDBpzmGu04y4J2LO6Imtrr2JEfaZl45nzfKY5fKcsl3d0ghbid6mc9KB-GSp6CuwcaQUr33knf64th9gQs8ZHpOQbND=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfgoMo-dF3rA7LgXkkAnp6dpBLigspZK6lifdVE248h15WBoYEWkoQ0RMrSQQ0QwX25iE_QIjWlsQRmTfufBaMD7HnL9f7J5MrmAsloS39WKcL6snexsaNB0tStoCCO5ghEPWXHwX9F0rQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLduIK42qhW7_au23yGIG7QFLrlLnyu4dy0rorXEcxmPB9fk7UYsYoHg-u_N-xaCzuiYxw7FJ-FXV4Zh3XQ1vwI1Ccuq1Q6auH9fjKdI7KKGYdwpC-SKY8LDVGVdQJ7BQjf1yPiWuU_7rgY=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'Bizzhub (Aspire)' at SJR Koramangala, Sony World Signal
    id: 211,
    name: 'BizzHub Workspaces SJR',
    badge: 'Popular',
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLckxvpeGM_d9FDLK0uLOXk8FkWZBFP0AHk80v3fh6BW6RovYmWQiHec5WijxcO1puvtqC2ltaZeJCL8lkS6R39xzsaVLgfFtRsjA-NTX7qnbRANBHuOMF4uSWlUNpNFiXWXDV4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdBU3cH0BpdH0nmayWOFVJO3IStNydy9cmDit8B93mxohEwT4QM9qXB4odqZW5GoC9qNLkAZCqwNAKBJUeI8ELmnNV4D3zWoJcOc_Fg-2VuU1sDK93mp8pq4k_2M5SLYLnFYuHKIw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0TwdULW8fJQxfamzxCgYMQfy5lfpHwXAELGmNdO9iKoss2fHMGhbGJbi3SvwyrXSoTRRRWqvjOZlxFMD-neWayrjj1ZO3pDJxY8x3PVG7TAaE1sqO-TbGPMtADkexQhPQgegR=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcYREJoQiTiM6EMe93MYYbjdeWtztRvMsf17t9YcoN0ehbiSvLm9dJA8TeqynNd8yG8xaHWxfa3tp3fjYqKy2jzbuQ9iyPHON13fB95cY-mQKcV0miCqbVDVJun3MsMaXAYxvd3EA=s4800-w800-h600'
    ]
  },
  {
    id: 212,
    name: 'Techspace Offices',
    badge: 'Popular',
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcE-sWsb55wbg2qn29Q2sLvDF2Oh5iDimgVPDZh0i-wwd_tso2e7LrQdkL9eVOhUdDme7INK1dqHcJI045bZUHq3iN7O3-Z5GuylRfuUWA8ZjVmKytlttogRAtZSCz9yuv4R-_Mm2KuIhM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemJ_DbCAx4FWmb0KasbqUfdy5Fj5R1gc8M7lvs3IdjEoE8pG-n7GGtppBG8TfTbf3ccNzSJiH4e0_nhwaLEy93fk8NTQRcee7n0XDm6VfNSmCY-f8lmhsgeXAvY_2RJL-agL_xJeHl0H2k=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdONfEEuZ14qolvQBi8ZdwdU2LKUbZ2yu4zRMiQIM_fViTiImXR9CdVQYlK_09j05p_lS4ZqaLinP_0JJLRCBN8QZAsjtLV5uox7RDiWzwhUARGrP5D6FI4oPNQwmLEm7NtA9g-GV_4ljn-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgDrY8dqUbztqo2gPsmstZ_lBFkwcGKk2Je_AAeLXLP2cn76218Ym4yYJKtd_l46za5vActG1ep1pBzGkIBGLS6eEa_KU6YRofJulKq2YxX_d_2wVlADVn3IuL4m51W1geBF3uPOyX0elY=s4800-w800-h600'
    ]
  },
  {
    id: 213,
    name: 'Rainmakers Raheja Arcade',
    badge: null,
    rating: 4.3,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfeptPSkyMFx1yYA7mo_oHqSjiFMt980hLHEqCJfGkwKurJwDgSD1Llnzjb5hmVcRdbtutzhe_pvoboGuhR4iztYUZtU70lzBIx1DyFWoMvJuJdlLmHX2YfE9l2WeF5psCgplH0cpJdxL2t=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcfun_gPVg_wHxa7Jt1XyU-0mT2y8FXIG_H8b9OUlRvpcwNj-dGD6IVL8XL4kaWW2CIq6HNPuHR6rkBcTnuMcOyK_NMFwaxq3-ZPkQdA1PddjuiXciH6XPZ6pRGrBczfZYunWSKQklLIlDO=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLedRIFVT6C8s_H51w3i2kQuwSbRAGdmwUMkgqojvdG6ZdFd-MAdeLpulLLfKmHKFltkOfjemU6ZyyD_ft8yt50KpvPFsB5CNuhR8or_qG159kvp5Y36Ebq3TWlCNxHSLzvaYmy4-qAEHBet=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfLCXJiZ2KYYwW04BREIq8CUJ69oJqZhTHJdTJOnSZwMp_N9HQ8ID8bqRmqJ7mf-mZhtPlCfT-cyEclUaB0X6GJXC2dVTcywDI2aHYmx0x-TRcWEPnVCDUnviMzcEMrhp7lBeTImcWGhHAA=s4800-w800-h600'
    ]
  },
  {
    id: 214,
    name: 'Workafella',
    badge: null,
    rating: 4.2,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcbAQYrzRMOG3R9wOLaeQz-mcXXVwdShvL_W9oCNW2OnQmwORe4pXCJF1LW4R2OBLugwag7R8aZZ_cVPIqXd-42xvXOSAKvIWLdy4A9yZU-qqfrvtfnjpYQf9b6umzo5JFDGfEinDUhM6M=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdkKeOgVq7SLMnoqia_iexBuAvpWnM2lgATlvcXtTsXyg7XHlvrEJIWSPWfg0jDK3MWs2ZSMSA-ddxYRzn7u6VhW_zow9oYXraXb_CwjWjn9awJZntr7afnDjfWxfimduJzqe6aDNpp1q40=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeexxgK8pKJG87ivD8mpc_hjtCI2jk0StFoq-01u7YE2DXMtduIfrkNoV5CZ8n-2Fb3zqXAph7wayszq1HpZZSRzP1PRgAU1cTUge3tZhDRcYW4G3W_VS9K58xHoiuWHBb-pN7lnw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe_0FKtfH7giOV0YAARtYYI4aJW65WyEIJWf6oihVgRGTMoQ2BO_T3JhngmfonAqFpgWOD2bwfwoqC0YW6G6wSyu-AuzOmUi9saqJDTnmm6uB_Uw-HJDfA_rGuHLDE0gP3vMpVckZsomhJD=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Photos from Techspace Offices Koramangala 29 (id 212 uses Techspace Offices 08)
    id: 215,
    name: 'Techspaces',
    badge: 'Premium',
    rating: 4.7,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/places/ANXAkqHWWx0W16osaBsHIbOViJO5KIirgVmP5ilvUf4PGYSRTO_mziX_eIm_9CTREYI5PKJ6Fz4kwdv7jdgeJuBdHISxCIWaWzIOPc4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/places/ANXAkqFOFS_pCaHn5RXOKe9udkRhYYPWBNPmtl2bVfFE0YrZknKbM06cpcA5nTQ0qfQAFVe-E8TekWg4_RGpODD1ZUo-PGed7vbI6Yo=s4800-w800-h600',
      'https://lh3.googleusercontent.com/places/ANXAkqFr7Mcx2XSFlEaB9aCCpEm47mLL9XNMnwtK1aqHyuEwhkSYFJvqDmJm-bl5J_RMU23a39_GZmIUBR4MnuYd9jxLaZJ73hTRHV0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeMcf8ac2sI2YZcgCTj5vCKyu2Z-JU19UfQXpq70nTk411t11_u5LLSlT1KQA2bNL6EX22mk5KJQBS9Oyi-lytI0ncbWUlUx-ys9iu-W2e1ZP9ewNw6XJpxQW3HBF9C8pUv2wrdKapA7xQ7=s4800-w800-h600'
    ]
  },
  {
    id: 216,
    name: 'The Circle Work',
    badge: 'Premium',
    rating: 4.7,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹13,999',
    period: '/ Month',
    priceFormatted: '₹13,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdILEqEWIJroORfBlN61DjfyVIcFUn4YHQ_vA0Ry1ixWEWCt78B_djrcZuQFOnAiiGmqQgBKuXE_FBkEu36r9Erl0llKzzNZsZUjxRY9Qad1ulm8W35fOv19qhTiqiUZRo3i5jdsrGNNxg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfO9c4hLedygPdJna9aBtP3uVeTyEwAFMUjIrtZWnnGdPxtZj6JV5ILsLL1jG_C-Ba978gBQ1kRhdA0EfoS-4pF_RiH4gMPmSytblyBi-8VlClfB0y5ITng-UsaHClWQQNouM4LancCSI6E=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfSj-0kE04e7FvRhUIpTWiTxmQRb-gIiYM5qLrwtB0fsQib6Y7NsGPnKgCnHpSfor4IYZR2o3NF4Ur4RvcF5S-cnwOdccTGxkwXBfDoRFDidKi-ZnSm4VuvIHbAqTMbpwf3C3HuMF-Iusk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf-UXhEhgyi-GyIxP-m28xf1vUie_-TBLN0og8DlvlhqfamYa-wD6ZEcAeWmarYsMADc0U8bvw0Z6cWuEA5byOV71yxkCTulSJ5gqpVZ0pXSxyYTBiH369DmdzqdWOE2l69PhZEBIqAXDcT=s4800-w800-h600'
    ]
  },
  {
    id: 217,
    name: 'The Bangalore Local',
    badge: null,
    rating: 4.9, // Google rating (card showed none)
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹12,499',
    period: '/ Month',
    priceFormatted: '₹12,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdAA2QjamPUwJpA-NoTzwcZbZqvknfp59Yb_ZbZCWZc18BrHA73B_UGcBPECmgYPxtZUZlOAMSfQJU9xHqsB0X5yNuZ7y6zPHKNX0Mai8Ah18KXjwfn6A-9d9NFjE5ZjNtBtrM6Cw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf4Kmoe8iPcX19birwek7mqmjiG7Y4vtRoRLtf3_h4h356mE2MnQzNVp3QHxAOEpjpeREw6Rnyr-UFHHTQ2qMMsVH1Sg8bCaMUkfAjSwxWg9XQxpnt9VQgzV3fntgRFslS3W1B97D2S_ypn=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcW27wlp3w-LKtg6mC5dBFB8odbsMMhOyUPrsXJ7ah7Tf7lhyM58RYKfYcKonuE0xMD-9WgnpFP3hKC0FAvHWcIvibAFcM9tgmWbyJvfQiCOzyCpOBYGVO5274DDfVSTYGzZTL4HqLm_A4A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdwKwa3VyUkivxe5y1hObkSR_medRxITBe2HQjFXm4hlfcVS8ZyutqlAtBmwSwCFXx1k38WRiwvgQjbFbUVSuhi-CruD-S1QxxKEDwBUKHaPGkz1YTcgeMlpdQp37seKt5MrxpL=s4800-w800-h600'
    ]
  },

  // ---------- MG Road / Ashok Nagar, Bangalore ----------
  {
    id: 218,
    name: 'kustomWork 45',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcOVpMqObdvkOuFt_L8U1BZ4dnKzeDuQCRKn8HSWxfTaaLL4f8qMKYHMTEnWTk74nGM_dmCvHY65eiqxeFbssP_tKBZcV102qzI1rqnCTnyTB4D0ZF1RthkR8PrluenNwUDu7rPLnTVR1c-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcS5yAhdr582KNNoO8L3zCFdsUbUrk38yp7Vn-IUgjF8dEwbmnhcS1-Ccu5nu446-mtVLvpwGjSJ03rkxHX67_EVe1t5Hbrcl25stKQ7p-WmeVxmwL7hjvjwBSkstz_OswkI14NEN27zAd-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfT_3a2eUTHeZdlcH22ASU-_w0-JNdHL2k6L2W0-CiLZ1vYwvHh3Jjx9kyqO2pImrxlPQsrPEjk1xuMWz-OlyUXAtMf4l4oAXEtrHXSu4MppDgimM_pSIAXNBZoME2xwvSdjAM4X0s3_AJc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcEx9jmgU3lHrzvqTa5OvLumS46aQXeDmIQdcY95KDBB89VXvjpLDxuLktEhcVZpRjQfuZQQ4UQBjqZam-q6VR0uKq4gt_3SFB1ysoB1VGHiTpLTvBqL64qWAbP8b1kgV9pHfh1MNLfAlw=s4800-w800-h600'
    ]
  },
  {
    id: 219,
    name: '91Springboard Gopala Krishna Complex',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdQWeQZFiSIVtfsy_zgp0fkdkgobV1FkOI9On8MqMV9CMxJa_KeQ2CjFj6er36dIoyYcATuCbe4qfJOxAQBzjEm1Zy_2nSbQJxLLqATPJjpKXLt6UbeLg7zf3bv92EQgWRsMEGOXQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcjeFI0D5BVQzsy50sQDqMCIgysysLBpK4oRXfB4H-q3849ZfNlKpmwhyb0dgatjJbFk_gNKA4rrVsT7iC1itVPFmJqWkivKOqQyhNYQkFRUiKqqHkYJ_VeZa4PhwMbzjJhTrrK=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google lists the centre as 'BHIVE Platinum Church Street Campus'; matched to CoFynd's 'BHIVE Premium Church Street' by brand and location
    id: 220,
    name: 'BHIVE Premium Church Street',
    badge: 'Popular',
    rating: 3.9,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfMwfCcpSrvFKsX__FCllFM0e1Sxvav6GtuS192sSec6ODyn2UoaplufrzZJPlTqKz20z_knqa-B9HUXzSbiE7Pj81n_zvD0J5_GfBrh6kbrkMvrqymQ4aT5DAqebkeRL2yS56C9MZhMDq1=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdsAqC7HGFFtuzi_drW08o1yL8RyGf9qRgumdvPGfutx9PfLSA1rJEL02sxS9t6EbgLoopbHNOGoyWqKm80NlzoW3PZ9Y7eV8GWuXS-TY89JHnijGCjNqnu61nJMaJMg-0ERgZN3ja0IWnP=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf_EqTYAp8tOpBa7Ft9wSwJnLLT_rFCXceMBfjqqPvA0GUkzTVudzmv2j7hzx6sz9mRphwkH0_ibks8K9LLzj1U3nn3Mdz7QwWP_VUKU8WjvW48VaS4G6NMVWWirlr8zo1l18B3NQb2iTez=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfck5Gufxom8q1YZww-TLbIaYhZ5V-MrK35sEHQEfskF28U-HgD6GJFYQ6K6RzrP3bjKh50paM53hXdWAumN5hDu1xuDzIvWb0S8Z3kBdoE4D4gE_imujlb2xaFxnK1x0xgS1c=s4800-w800-h600'
    ]
  },
  {
    id: 221,
    name: 'Awfis Mission Road',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcxs1QRtrc2BtcNptig6cVGIPHZSRWn2n56G5Udc-09SXro-Hu1Q309apwFl3WXjGVwNONhWJO93fTdpnhorWXSIp3JDthQ8G8jP6dmcMaE6fEO4Ro6FjZvYavmfoAVE9xetxN0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdObIrzwYEVIDKCFn-339jkSfTy_-1tHEoQe_P2AUyBdMn__veG8agaU7gp4UzJMfiwifi1L6_otVh7V12qTHf8a2OwwsJhdS_5Mb6CaV4gbgEx9DzVyia4XYDy5IsdIfE2WsB0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcrXAw7uJMwYWlxaOMeEyQcsrCbmalFJHvS0-zC90oDti0mpH3mGdDKJ34fU4KBju7K30hTO04qAmsLihrzbeLUNpf_UCaHPu6SyAnoHV9LlXBJPyAJGIw3zDLzcfhwVAdj_9Cb=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf9zBru9g9Fl73rT3PERNQ-KnDGg5HaxRdA64pCKC6Tk2Dkz2N6rEn2o9FqxCvvDffTL2JeaKroMDl9Ib63--lNAgJgA5CH0Pe6NOjDiZtZcN2WJUBEH_21RMMO3Z11HgCDf0m9=s4800-w800-h600"
    ]
  },
  {
    id: 222,
    name: 'Novel Office Central',
    badge: 'Popular',
    rating: 4.7,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLei9i1gZyhFNKNaiWow5PEL1jkY-RfxMJGTowkvtc1tOU8dp-AoQppfE2WDdgDubO3RrE7JV-zB0FZ3oRBa7RxFy0dO2mDFFxJKKTthkepCutdBykNZkEc01Qui_rVaUaJwbgno=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLckjiX1PANm-JtPg2_qtyfPtCjcYDnubz887UdR0DEQMW7cHAVvFFuh8SSGfWuPTvsessXn9pZy-64sGosYFTze-5UZcZRDl-CY6huqlgJ_5r3GwSVgaIf0M6TtXK_PXju9Z-vo=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Awfis at The Estate not found on Google Maps (only Awfis Raheja Towers and Regus The Estate)
    id: 223,
    name: 'Awfis The Estate Building',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/awfis-the-estate-building/ckpwvf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/awfis-the-estate-building/g5kq5k.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/awfis-the-estate-building/5cgcs6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/awfis-the-estate-building/xxxw6h.jpg'
    ]
  },
  {
    // NOTE: the two 'BHIVE Workspace' cards on MG Road are separate CoFynd spaces (bhive-mg-road from ₹11,999 and bhive-workspace-mgroad from ₹15,499)
    id: 224,
    name: 'BHIVE Workspace',
    badge: 'Premium',
    rating: 4.3,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLehyGCb_LtRYk7DlURJIFFcrlLk9Cn0gaFRFifbb-qMCm2wiN8d40wezyWUlfZy9NDxRF-K_UuaPWYsb2E75VBUStUldnRCRUktmlhiqkpfPjq3Ha1u9a4PFjotR-yGQmd9zkX9cA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLchQCarreQQj6UkzViJKn9McExKrkWUhTRKl2Cx5rIN9ksKEMun2RmhQyek-nmODXU58nfYb52dpA-xQvaZ1yAEa95Ej_gaTrBNRulhcAS4iTXuEmJ6mw_2JCMlPbipOrP9wlrZ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdTUzrPmmbFSzQHNIUsyWOAtnSnK3jfd__NgvhGIuIq7fhzRfWjneMaUC6Mw8Xm46CIQZbYJoRfAr8JfTPk_u-9CF76CLzoOS1a-uRmzUgFGcariCBIGYqisKFD3lb4-c07Lnn_=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcO7E28d7BLUM-v5xG96K-72z_xfLoZHF0fYugIFLuSG0Kho1aNuFYwubcbSougvxvBb2QEyx2ojEHx2qwELeQb5s0zbiLJSSnb3P37WpqUUHUdAH-CEZVf5C1GaMCC61Xk7sHmRPrHxaY9=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Photos from 'Honeykomb by BHIVE MG Road' at 25 Primrose Rd, matched to CoFynd's 'BHIVE Prim Rose' by location
    id: 225,
    name: 'BHIVE Prim Rose',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfsjd5hBaI6AJv7jD_KsliOYKa4RWt9TUJTSq2Wf9VN7ARkSse4yJbZXSEp5n3QJnVw2WKmo3CrrCagUVji4OV1Bb3eW2WcUbY6mYze26IJwqcT8DRWpotGeSstueXJCo6AoyTG=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLekNVUZ-Mv3SjIykMKnItx73W58uX3_iAJkOqIC0pNDRN8Tt6qgYRi0ngkWDqdMPPEN9afc_37zdj47quCTKJ1VnbHQ50VdS4O_rQv_5BJ9MGdyyPLAOer5YJ19omMBXialWhxH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfgb2sld5EwMKrIgPMp4kRtIrh59sG3MZoFMertMtfxDwcQFRy837OFr0OQTmtPpjsCYXN7Vo2obMXGg5XmZxhv-hyhnJpTWFleOu0RwE9OLJsrftx_0Xsefk2bqLe5Wbd5yhqouQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdMOL8NruQMLQ_zupvukxwE7173i-MAoRNcRd6PyOwWtU2cxU9LEfZD_Hi17Jdp9XsKKN8SeUZngY3ab3DKGZyXt5aZeXD740KGBxwkOWdMMbjXHgf3LtgKPQtf-nd6IPiLWoakCg=s4800-w800-h600'
    ]
  },
  {
    id: 226,
    name: 'Rainmakers Workspace',
    badge: 'Popular',
    rating: 4.1,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹11,499',
    period: '/ Month',
    priceFormatted: '₹11,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfS0gKIcf5Wey_YZZus25axgKz8FfYYFmt8op-LyysMOXICEt3M15kzMMSYC_R39Y5zeXi5Sr1FpSarqkHLCJEohUioUrt4yLbhZjPjQZJC_-yDOduM0QEfXCDGdXea9Ylkd3qS=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf6pkI8sJSFsb0R6pdBWgPHLQVXTEdgOvj5ZWwqt3HSobgqjQb1OW0i-VAQvq2yAd6BrgxZ60U-BS2cOB9D6qf8YiheQx85yF9PJqqzTWDQ8ZILfMPeg0gUyAgMn1zleUjncrXK=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLec8HhoSe7HeTCJ5UdenOtbaBa8vY-cvC1dzOJNjZyn4gqZrRxOxhd8taKczy_VaVcqA3CUEm0jaJUPrK9LRN9BV7NV1f46F8XraBmf6oD79BeY2vBNL-7UZ6ax0F4pm3pSXKBG=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfMgX-j4XrXMOihnngImjErfatYnImcw4js5VGsPX2HU_D9XA1TGyil2UQvGzeO1yW4BsVeR0SHrmqc-tq2GEtw0216h3ywFDcpbqQLWxeGGt8_zKOudmOlf5HwHN2SoBSoF3Gc0w=s4800-w800-h600"
    ]
  },
  {
    id: 227,
    name: 'Quest Offices Raheja Towers',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe78DwoAPfG7uEC5gX0Vylv1Ba7VMQJB4gYrsetz_sXt-V3uqsfSmwLktRceqYJrZv9AXLGY0LV9SDaqMHoJXtF69Dw_uU-Si2Tn9Uoa67UoqqJSSeGc-ZqzZY0kOB-H1WvC4Y7=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfeBOKW5OyRANdNM9jAqoyj384UMYDX9PpSV-onLgvfjSmDlc-jOmUguOsl7eUI4LGXDVUmLQrPZQQzgQTHQrnM6Ghx9Mb3ycksPspyHsSLyN9Ev7EzxAknnQ1Dvn6xFk74kYaiuA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf0HHf4ZFEzM4Bpg3cumFd176SEHvP57PCBFN_XdM4uc48CxVeSx22aIQYUrFKFS8jQxDDGwSI0Kb37gDM1OgvhyWRcoNNOpkbKtd8Nlrp0JqjJgl6ck-PWOMZVcLCgl5PnCIpuPwXOJzw3=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfZTLIN7zW1dTzAY3QgUtZ0gXL3-9XyRLRBQjtnaDHWYiue9wbgVHqEK0bYtqswOEWsMFEagee74KVCRMNEFKIZvUcjD1cLuF_vcm8JsAU-nDF3kYn82a4ezFhMAT7-C27UP2Yjyv1ylaU=s4800-w800-h600"
    ]
  },
  {
    // NOTE: same name as the Koramangala "Golden Square" card (4.7) — kept as a separate MG Road listing
    id: 228,
    name: 'Golden Square',
    badge: 'Popular',
    rating: 4.3,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf_0Pz9e6f8KtF5NZhAtHOqQuinfb-qx5nOpiUzwQW_99q6dlkPVdJLhsWEZsqwxKButx0-eFNnAwxDP019AX_mir_Itb1B_cCy2cSTD0j4neOQpbgaU9a1wHSFYPd_7VuJSrMcLQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLejVzvi0KUafiLBsiRsV-ksOuZl4j3pdc330suu7ZoE8Pxo2apTvDxjtuZ5TDofuMcoA8wnS3fSQXrFmUAF8yQjvBJ6Er0rbrhq4fwH-sHpPZxm_SMH4C0pJ3lZbkDmJngMb4ipyaTMMpYr=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeZLscxUEzI0FryCgfey66ClFtswjLPygkq-9AMhQmr5Ev8Vhinm3Jz8TV70Bx9-Xti47EgnhyVRtyrakd3fBDxFRMnBiols3nowDh_ZKsZe3vg1FgYdaKF0f9Qfl86-bzEh3Ru=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdCQkS_pgBXB-LfeLqz4z4Q6Gq9ixFBiLG3KIQpsAqQ7qfDbd268o5sHI-Kg9JC8yqd6Xhg8OJrFmAQhOm0lY2Pp1PhcvDqS3RQtyE41cOV2SwX87Sp-zFQ80-RyoOi2nO9rbo_6Q=s4800-w800-h600"
    ]
  },
  {
    id: 229,
    name: 'DeskSpace',
    badge: null,
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4bc2e17a653395f6e76574ef50851bffbddc4683.webp',
      'https://img.cofynd.com/images/latest_images_2024/63881a7143a4efa40dc004ce5c4679cfa42569be.webp',
      'https://img.cofynd.com/images/latest_images_2024/38a99955b32de34be10520e6ca02b1ef3086ab0c.webp',
      'https://img.cofynd.com/images/latest_images_2024/b8703a8c8e0bfbc8a5c101baf5e8318545cb184a.webp'
    ]
  },
  {
    // NOTE: second "BHIVE Workspace" card on MG Road — see note above
    // NOTE: Photos from BHIVE Workspace MG Road (Mahalakshmi Chambers, next to Trinity Metro)
    id: 230,
    name: 'BHIVE Workspace',
    badge: null,
    rating: 4.3,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹15,499',
    period: '/ Month',
    priceFormatted: '₹15,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcW_p9l9xLcxB7cvemiqplviQc66YHx0SnW8tSrlY31VXgFe60ZxF1TksxGB-9yJyg2WjLueXoS0GSfJaYHFs7MtAoh8Yc_9c72LjDiEC61BZdqminIBtQtfG8_uUhUfjSORZr5=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeNxX5-xVHqWOe8NV6NlOoh3Kmu0qnaygV_jz9FIeTQSye75yTvwrIOuDe3MvdmEDrZW_QOOsiA1VGRaPARwd6zdd4aKEJic_xFjzElDWjl8oGLpgs0BKTjZVSDZ9QD53HQDlBs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeyO1555UpVxHvKbGYFjgKNrrwIwzHNocmwh1ewdwWnuIQZuR2ubmazOOXj5sRysQcYQ5OtfZns6NWodlAanjEtwmnSXnhYhPfiF30dyvsVuviwh4YnZ07Lkvoc0hTAl09FFumjFQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcWP1Jl6iF0ApL0oesoDuWVcVC6NQGPrdIlxpNWhpMWQz63OmDJtrASed01UPQnNHaGTu_s0pq3cQB1oE1_ldMYpGnblj3cGCEyerdk7n2W_xs7wzOuZNVPQDlRBzUKxEnKJ_v4=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Only one photo, from the 'Trend workspace' listing in The Estate building, Dickenson Rd
    id: 231,
    name: 'Trend Works Estate',
    badge: 'Popular',
    rating: 4.9,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfaMNfqkqtYH9n-45N2zdoSUlMV0i-TPaz9irRiOzM2A36VtHfxCe3Xw6WGX7N46pfm-p6N23J5eFS1vI9KwaX9ShSJMVQAXfM5Dlf0FUkRlkw5TlF--Hbt--neczU71NwxcgZGrw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists Aurbis Concord at 10 Richmond Rd, Richmond Town
    id: 232,
    name: 'Aurbis Concord',
    badge: null,
    rating: 4.5,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd6tz-6pz4d1qPgJxzzcnGzkiF1bM2iXe0y3VtRkrIKE8ehquMoKuBWaK75fZZqw-nxyic1V6XciqylAEm3vrnktwa8v8XZkIv6eb3ZPKMG6bC0Rsq-x3ti_IOgRinNNN0rBByoyg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLelLfwrI3U4R45LLHBKc_HSpDNWuRY4IZO7NPa8PRwxbSzMu-3ChvwKyu5Zvasx_h3qdWIyBb-Uoq7R1rbtXmbHQ_jKNPv-xKXtUN0U-seG68uz2Kog-Mn1_UnlI70lyFkkJWjBmA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdfr-CsoFZGIUGeuHt5HMigps6y93RpF7eZ-lTU9t1B4rdw5gLic7LcWVFjzwZ3jyahij4YdiNcxSAhA9Lkw7KotxP9lW3blutUTZmKv1_xrmIVvwn0tVlrHUPZAmszVZNimSt8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcVbKvcvhbZDSn_Lr4fQ3SkEyIBpOc84O6TwmZ5QObVWDMR8Dz1lMJ4ExU3kwpxhK053JoguqnXd95N07XN0xAuEaruAgSgsJfLH8Moay1uGhFs8Q4pQyu76efaHPujF9Y41q-uYQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: same name as the HSR Layout "CRE Spacez" card — kept as a separate MG Road listing
    id: 233,
    name: 'CRE Spacez',
    badge: null,
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeeVL_ZRtL4qKzs5FY_6ikCD8DjN5wzd5f3-NMNoz6_O_UNFuF0f3uZAyb0dbAnanavAzhLpku7paWxItuwEIWHs_9KMpkcTtz2Hi2wuLeKg7IMyyYke4WD4_DgWBJUZGWBVdRiF5bkzsyj=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgqwcVxq4flvkRow0hIltIB5F8-hFUsj3DSA_xRK7qGoT66mxuqI7wwXi3RkCW8Q6NwOao9dYNH9yH8Jqp6_PF_OQ7KQAbD2cRiB-OrN3JUMXHGsQ1EYKYw5kb1J-Nv04ZM5x0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfQ9qrXrHM18VqXSv_7F88FqlYj5UZ0fjLaXZeVTbmpYb8ye54CknNtweQkJjRSW1rV7kXRL2ITnCvVSKM7KqTRddEGGKL8sGLGcVq6ZAqFg4Q9d2HE6Wu5doLWvPxTaOomAgMrqw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd3YFu8DJi_zpYZbIZ0ryCc7Fevnp-XE1p1qKJtKMyTpldUZn3VEyymRx7K3HHXmDZcRTTuoLwHOahYHbhamnaC12o9jl98cwSroBdn0YPjpijM5eBTHiHJ77t1BiN2MbxiaufuUg=s4800-w800-h600'
    ]
  },
  {
    id: 234,
    name: 'BuzzWorks Brigade Towers',
    badge: 'Popular',
    rating: 4.1,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹16,499',
    period: '/ Month',
    priceFormatted: '₹16,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcPefAY84z0nJBOq_vOBCwBiBWS-SJJbl_CGoJ2gD6ACgQwykal4FuO6dH0v8tvc6nTgA0ca69c2MZ-QGwCSetZdQdHqfUt4_ZlFGV5-dDDsYhZOlpZe1Tfkw-6jgjk-J7JpBTv6blzdGI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfeeFyUbmEIFXVn_Zf1jQDIFrZUCrcHzmROkaGnIQvXZ7B3G2IIhPXjYXbZkewQO3E04ZiKRqpUYgtm6dKAz7XMtRf3o18HO_K1GdrNiA45qDWKrd_FK-LKY4ZOfk19A-4-G0RNfSU0MiYV=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccFvwBWJ49hMO1nMlDkF5xIb2e2RF4Xk6fVsBq2ua_rgYrYjU01UBTiH-3Q7paCDnzzWqPwuAzPAjWGsmSw1rmD0-2dMvFTKTYMVITnUf3PV9lmIlKWhN1IjRgofu-rv_jeIxJ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLegPVQ0Ez1iKOFvdI8GFAdUql1MWKBA1W8ITaKQ3IAJD8Q3vP4CV_TvYepyB7q-L6GXofmJbvGOW4PxwiPlVJe6ajJeqt7tKuoyGL-vcXJzCjT8noucvG-4CyUbf85X8QFjVW4UeYhwRT9Q=s4800-w800-h600'
    ]
  },
  {
    id: 235,
    name: 'Flex Coworks',
    badge: null,
    rating: 5.0, // Google rating (card showed none)
    area: 'MG Road',
    location: 'MG Road, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemLCxLrzF1e4zYgwMdShFYRM75CZ9-K5dDsKlwadWhLd1vw5X4T78-NqVNuJ7cGslOH4Z36t6zi-YkED8LJebASyvea8xdxdjox2mPv8fdiONOPhvpxqbcDLfpCdYNL5MuxihBAij8IUbK=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLceE29eEe7GZFZLKm0VxJhZJ99Am6n_VqkxC2bd3fx8f-CKuR-DVP8IJSvJeuzaLUszceq8gYPhsJGFETd_3MTuVBG1B4kYB4iVgC9prl2s1-_GWKR7zKSafYY2iqewW6OmVTnBEm3w3ns-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcfUNCWUgpYJKs0Szrm5OB95OnthgfM2Ett1zph3_tUgB48ijIrOOLfO8it2HullJT1RhlfKYNh4Llt1M1zbYxcG1uSq6rIfOJ8xvDgdfMZJr3c5TaaM2U5nzqWgLo9jnzk0cJWPdqNMx90=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcZUkpp31jSdZAgvVqGsSXJssrv8ltSawO-8AL6eCkgineV-SYksGVw8JMlFvVwQQ0BIhFPZYlj2FbvS7o2JANtWSYslwnbb6cTeC77k8rGwUygye7OayO19n0Lsg0ti41UJal4KrtP65I=s4800-w800-h600'
    ]
  },
  {
    id: 236,
    name: 'IndiQube Crystal',
    badge: 'Popular',
    rating: 4.3,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcTU1iTwqFzfv86TF9pWbDa1SVRc9yhLgsk25rP8iieMtVUC19ALRaXRDpi4XaS8FojXdQYu8YiswHklJbnN1Z-jTEm1EIqMemqxua6jUmACz2pS1fkJZIQpy2ZcdD-XA_RhwUKlregAFZm=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd4xmRKsnVxui1RgQFBfda3iLpk7cCMuQi01jdz7Vjra2KW3WHX67xau87VM0f6BmClzZRn438TVvLFaLEEktvw5zExE3AUdkTrw2qTgjLUIcbmSHb3KTUWqbeRVP5YPT_oRHuPjifyDV14=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe66VdYLcqa5brAcA8Im3oQA0N0-D_0wcw2NdBtquskqT1O_Ayu3w8Z_KBS77D6MfNtXX567mJRFIbHwphX_eYHtn2WbrsgAlVgvSdIAxAHBOZP1jrCqYDdECCP2U945XjUUGogi9YrCtk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeRufHvnGEF_X1CSHptEY9Y2_eyT7lpA_Fbkmor0ylSpiKhDSidAiv0JgLLA8U5GSqM_CpLDaPGYfHtYWY3OJYZjENafy2u3akHJllqFqhfaXpZ1G2qBE9u9MjMpUrh4mjudjvVqJLBxmvA=s4800-w800-h600'
    ]
  },

  // ---------- Indiranagar, Bangalore ----------
  {
    // NOTE: Photo is Google's 'Unitus Webservices Private Limited' (Indiranagar) - confirmed, CoFynd's description names this company; only 1 photo. Rating is Google's
    id: 237,
    name: 'UNITUS',
    badge: 'Premium',
    rating: 4.3, // Google rating (card showed none)
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLePOmEGm3T-pSZUt7gu_ZwxEJzHJxY3hMvkI8GlOUgd67T6nayLtBGZugK-M59G9aLuHYmMrsBEXFr81kcn6qexu59J7qjvmk-aDcp8V_fzb805xva6tAzx3UZkskacLCh7HoywzA=s4800-w800-h600"
    ]
  },
  {
    id: 238,
    name: '91springboard George Thangaiah Complex',
    badge: 'Popular',
    rating: 4.3,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/91springboard-george-thangaiah-complex/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/91springboard-george-thangaiah-complex/exterior/k4j7rp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/91springboard-george-thangaiah-complex/exterior/z4btdd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_1080/f_auto/workspaces/91springboard-george-thangaiah-complex/dedicated/ubtt3r.jpg'
    ]
  },
  {
    id: 239,
    name: 'IndiQube Opal',
    badge: 'Popular',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLca7886abRVmhTp_9wCskgg0BeSVhYibAyAIM7jlWyJZpb7t_kjZter8Z51xpaBPrHt_rmhaOxef0Q4hBWZml1BNxB6O12X0D1_Lb3qMDk1oXZpE3VhQZR0aPKGAkw1QyfN4WB4DA9hUUj-=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfWdKjRig7hmDcYQIUEW6D02_R_hKP6CcwadYzMDaUtJpjw2WmXRl4WJ4KaWIIWLEEmSAcs8wDz1kEq7Zo6UM16aueqGpgLmJj7Q2JbV_gkh3_qqpC8XxjTiGtKzTcr5XUpm6eWzhBLq0Xo=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeDndCWmc9Cd3WGNTU-oCRdwbRG5cq_RoCOYs9yimnRDRI49VoFgRX2GjpyyCd4ulJIpJN3lkGjV8434pawsgg3J5iDyMfdOttntzLl-ZKDPT0uqWDFkThaSxi3ZOzWq-1TjLnPf3VJI2AK=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcR6poYlIfHEfnLRhNNyGETSxwPIL1HgV8lj49fLred0JM_jjV7fGcm6az79bY8vRoGcoMV83smx_2UWcc72FHkivoVLbb2g0BQUrb7MV25qEu2_8LwfFYn53kPJiHz9Rm7Z_LWvDzWOP4=s4800-w800-h600"
    ]
  },
  {
    id: 240,
    name: 'BHIVE Platinum Indiranagar',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeeJFBhhu9ZpO_4AVIbM928lwRnpdjip_7aQFNjVY6pvjNaHhhjiDcnax4g21wb6gabBpI0l0aL1rMwZ0QOvN8cMOQZk-wf3fjrBSI212b5QnocnRIfbV383cZjlyAUhVaKCaz8=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeiI0vOTTh63i6jz1pi-qyWwiyUj7qMPzh49BJ6VqB-F0uuN_ajODuuAJRPbUl58u_qn2wfVEz-gLkKqsx_6Wk6GqX5kjy5XxXOzxv9W7cy0tIRMbKDHPAQmwBEztayFntnB_6amw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeKPrkPkDHHvHyiM3w4hOlonrTZRzANMzFbff1-F4H6ga75tymcn8PXdDl85xQf92NQ7T2B_eL_36W809e-rb8IVvYz6p-3HmWaiDIJktRIMQpNMiX8Jv1jUqzWKH6IqMwI21tGsWg8r5ju=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdPpvGmuAgecPgnjAyh5mlpzaMdryLzZnKdI2A0lbqm2BYnqNG0ceBSNh5sEDKO_5YXxqTh5ymiB2wZeIA2ved2igVg6qYUYu6I1Qazj5Fz73IxvF5LO-wsJ_B1ym3CuwGIy0oP=s4800-w800-h600"
    ]
  },
  {
    id: 241,
    name: 'BHIVE Premium Indiranagar',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdFKU3qgbigzRlcRr8vOxSksAmLOUMvCsx06Mk4q8vWczsnWZohJQNNvBUZ1Dk-z6P8unE_-aeqLL_Ocp3Ztb_kvg9jv9u-Fuetmb1Q_dLD3UQty4ovnp8HRp1UvZbp9-CYwHjE8a5eemt9=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdfqzJruhVSbuB4xFApzxZR8voXzu7hoxln9eALFUSkoPhsONxJatstnMIDct_9RXFe5mmB5cdy5i5joQESSH_suTrErUUXt7qfTNosFzjmbqxdfuA6N5hq85DjMMPNcGLUfFjA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgzAqtxO_IlgGWHQN156VKQHZLPZNfI_-VbQ7o-9u_QK3ikxQKOqwtjxWmk03SeOnDHXkNcbPB-2T9WoxqzCEDx2y5OQMunyaxj2N1RwJFZa1aBQwFS1tZ0RhOmZXNUBWR5C9L=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdjZx887fk-d-S-cO-H26D3ng4qtnkUsqISJiV_ArdXffC1l3k6g-NVDS67SR4FU9HbecvuZcAdzJcxaSMYskif5Q7LQmNQDKToZaLdtPnz-etAs8HyeDvanbpJEXxE5cJt46ouWQR7H4g=s4800-w800-h600'
    ]
  },
  {
    // NOTE: IndiQube Embassy Prime not found in Indiranagar (Google lists it in C V Raman Nagar)
    id: 242,
    name: 'IndiQube Embassy Prime',
    badge: 'Popular',
    rating: 4.0,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfFnK31RSiJ_2uWM3hwACYfOb9gVePU26G-5jBz4D84WJA8uiVQ7uxhDddVEOp5Qz4OL4hJfXYTvCh_ENR2RkIXPxonfb3k0lLIehlErE_Pqoyi0SbOC7a6cB7QHiCnenhHaeI=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfF5FbVo4XeBdx1YIZYaKpfUCU-7XDqbbv99EJutYwzvh_Vg_M-w_jjHvRubuvbg52loKWRBhsT5P3QpIZsDl9AW1oywFDo3Oe2PW7AGEEDfYvW22PM-p6eEan0cIrBxhQEPxZ87kapA3g=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdXQ8HCBDffFBITAwyPZUoz1OLMZ_lU_WvovNPl4DPeTUlVsUCvR-LMpqoaTxibJ8qbdA9zqtTgN9j9IJ4-smbL4nIQcPCx3i4dDK2BtFp910bZjAmFrurgIvx1CXV6lB86wPmYIw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLer7m-OlbsgSoTJC0Ln2UKVyjCp1zX0j8gTw25l0APbTPUsNMgnSBI1ffYH7cExYkq4zCy4ZLdiobIFucccjbQ1xT_hHWt4LJbP8K03FflTSLOjuhQvywMjSdzPt0VJM-0gB7c=s4800-w800-h600"
    ]
  },
  {
    id: 243,
    name: 'IndiQube TownHub',
    badge: 'Popular',
    rating: 4.1,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfXv4wjdjgIi_eyd6epSVEniTGunxpeLw_GlukOyEanVl54G2b6xblnaS2UZweLBHqLqYbj9IbXXFcMfhYR2E7L1BvZ1bg6iZI7A6EI6VRx-RM_7gzrwPH7RmKGfW5mDMse9XwDu22qrB4=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfobEn7_geF_d8Ul1VRp7jzgcRWUFa9FYrIITH5YAjiBDnehMxbfMq1aDUOPPjgfwPY81UaHG2ncasW8i07iNFnIaHV94Ny0HWMDg-xHKb-yJXcMRs0pk5SX-36LUpTvAcf8tZ6k-lgvD7L=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcz41yyDDfe9CKJFzUw5teVjDzei2DEOebkY0CM7FIxAGV2p2PwEVksSwh2BubcBft6tnY9BoybZ5GWVvu5EA9b9jIS1qfWyMUDqg90D_sMWS__KwyPbzU2jqHTzMyvaYIW_4LG77hRvHI=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfjbRBWHGsnIbaZlTAfJQVSK8wcBD81e_QInZruYU4TBPR2IDDjhczHT7KnlB6T7FBAGkjgJddrxfrjcug4oEc-f-KfUnBlXV8WDvajAYhivWnNxBN3fJBIh7GolwJBB_cWlv1dUZwOTb4a=s4800-w800-h600"
    ]
  },
  {
    // NOTE: similar name to HSR Layout "Honeykomb By BHIVE" — separate Indiranagar listing
    id: 244,
    name: 'Honeykomb by BHIVE',
    badge: 'Premium',
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfJQhH8EF6K-VUCKpKUYUbWTse4QR-8HitjBp7XFLPpZcdYAyLZ6N0x-F--SDzsXNFC7PywHS8-G3Gt_wWgXVC4-rUXmWVohIGq-KwHe14yTmpS7UHeLi-9Tmyxl2vWsH_kibFJ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdt6-8m3V01uN9Krv9PwHXKvtgKPIV3VnZzXGsrJDGVwqLsnMnHYZO-4sg08oWQ72__ZU3AkmQGpXnYic_gGaG3k1YpTvzXRbkCl6ulO62aLC6wyvovBfMAvj51AVtmkvyIbg0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfd51p5TZi5tiExYZgE06aEZJFqVk1nrMM8ILkArtTeG8I7T6VohYpQ_lfusgIWxCYsFF7l2_WpiuwIikFPqK4gjpLrUwKDUYBpILbyE0Ey1eocu8Ueb2Yq3XpqEzHc2Ol2oGmpjNQq648=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcO_P3TMvw9GNPnA2eIdJCT_YyQ-oNGfGK8wtr3iJZA5Cmjh4rsw4X6MHGdUy4wODys4b3q-r0vagymYahkST4YNE50kIgDzMlUFSb5n2_TiDCFO75nSoRA2wax7z30J2mfiOtl=s4800-w800-h600"
    ]
  },
  {
    id: 245,
    name: 'Cluster5',
    badge: null,
    rating: 4.9,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdLP960ikDOh-xhX6WRTp5XxqX577uCcFrJlCVisAfM8CbOvdmOrWkzc49TdZ-d7cL30I4saYxt4iy5IagSj-ROmR7DNjAhmNyeySJEnXEThGqTizF2Kip6V0lyJLWY69tMVw74=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcUPSny7vagZStF0poJ3GNaYvSbaA4CRWCfA1VvtVmNsOSqTpfnEua-pmcgFYWarOSB1ta90rwkEvbNVXDNYFUzuoXSLQYd6EAIwEkLaQ6kjpuLpoVh6YyUzaxUj-3V9Q4TwdPk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdakxfn16UaVFzcKOc1S2AJtY5LWLpCrzb_CXg2bzn731cr6N8IKiq_nmPjaoed8537t8j-W98qDfU6tDS1dp1eaP2Q0KGaxGkMfvAA_hjxoLNHoQRXmu_sFiDKr04okXOgi9dP3A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdnhTZLiImuiw5uuTolVUMfot96Jgjd91XlniiiJFenGK2BFk8WgqNfD7YKt-3aacfIg_zTBNhqgdnRcoLiIA4wEMMHkthO-2G-M5QSZ-uo-M_P5QhoarZUldM92VyopoWAn57u5Q=s4800-w800-h600'
    ]
  },
  {
    id: 246,
    name: 'Share Office Solutions',
    badge: null,
    rating: 4.3,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfTyoA6xG46ZhUKHOvC6n953AIh6lwcnT-56oC3UhsnRl7mB30jOpwVJDGfL_qB7oZFxsLx2o7ztx14C2mjT5yNt2PE50CMMATRQcJounbESCfZw6Vj2Or4wJKqydHxtg983hKc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdLa5ARez6qnjYaUjS4Hgn0YKFWNelfQgR6gdO1USJRW0mk1VEHlXpUhn5D9HbxDOoRG2CsnjhUcXYXOhJxPclMKF5_DPgDn7I95jgdjP9e3e6XKI5JUbe58ES640JKCQaO7YpR=s4800-w768-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcBlNfTodyLd1jGs2dpVrqjcp50g_bat2L4G1SfB1mBZw07in2V3kBs3UxxSrdBMUDYlkmo2ur4ic3mi6JQDWdpTjpGFTU53ue_iBgO-Ybs_5IGgKD4_d9vmSZQ3Z1uyGTnkKx9zh7ZB9Ri=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfsYbDaqyj6XpB9Bs--oy32bLwAMxFwBU9JskTshhZ2HZrV6qi1j5_YuJ65w5bThEFPvN5d_YI4bcFkqXIzGiyRX07tASMczV-WDHf6dTHS2LjgcLMCD1-a_gcFg1OOoOrAGmM=s4800-w800-h600'
    ]
  },
  {
    // NOTE: the two 'Proworks' cards in Indiranagar are separate CoFynd spaces (proworks-indiranagar and proworks-2-indiranagar, different plans)
    id: 247,
    name: 'Proworks',
    badge: 'Popular',
    rating: 4.8,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd-ZNh7Fv1MwHpFfkyGZ2MyWleJpyr96TwLn-Gqgs8jEr5UaRkfo0fAdqEW8pMp16G0aaxBANPHZL49MJ-6GjsoSevsLLpEUeWureBZ25sst3S-yFkxNQCcwcKm4goOM_d5zzFyrw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdpxuu-nHsX8AQSWcLojcsOO9N_Dpc4GhdQpoVegC9JW471JU7cPsVv5NDDOwWheutewlRsCnSTHX0WzCmLAZYw5FNivgjG0ui_CAkuc51OaXUD5vWIWIiS9om6QGhEFgZ1EAXQgw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd1Oa9AXZ9eqf3tgyfuHegqt4e3z0xtCqifW4DMW__QuBCrtcI-DHtlSBt1dF1sFxgeEgROy1Wte_IntQddsLMrxumNCAYnRvo_Ef59WRFYWMme1s_QOd8GKNSeJwHTYiSy16k3AQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeG8kNrP951lRpJXX8e0viFfmn9RkDrT2QKihHX-OsR0wve7vnBkUDWLkwbWCgtmiFcpMBaOzNagYcdDzpM3nI6JRbnO_Iu5Ck3Yly3qgng92VVAbjE1B-dE8tWeP_HsCz09yV-=s4800-w800-h600'
    ]
  },
  {
    id: 248,
    name: 'Work365 Spaces',
    badge: 'Popular',
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfRpWD-QwpK79Uhzx7MseGXlc2ZJEljniTMitO3tIQ_nvk7PP4BZZl5-u7j6wLJm8pVrn7iz9eV8XvepE7qdsJnb-NyvY7tIOiULosmCFMed_FLKhYqAeVsayce4hhVdehD7_uMDg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfoK6bjoaXJuNaJb8C33wgaTLfXTHOQKaW0njjtxKXqwYe0Rb68bVykWOsTgL4MD_uHS-i7ruN1l4njI8EsvZ_c6fREPuxF2ri7qYLJdXPjKOrtkmWeNVmCFcfkobb7ZjBl9JEZ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcNqlfCP9B_kXjKyzMVcXtZnqgVEFOSEaD1sfM-J5IATtcEWB37r54nYYe6fbRHoitHkJCW3dYK49KmuZ1F92BDTUE-olr9ujVEHXGjAFgBaL9wvEPLzR1eUYMcEASwwr7v9_xL=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdXDYpQTER4RGBicNxVC-aPbZVUfBp9oLgHOs6SXfWI6HFdwn3mx9PuOJT6XfiqUvukwWK9NI7yB9M2Q50zQyV7tWRgw5fUfOqt2X0PZNcQlR7ZBJ6OqOzwRZfvlfD_ckx3E2M=s4800-w800-h600"
    ]
  },
  {
    // NOTE: generic 'Beginest' card is its own CoFynd space (beginest-indiranagar, ₹7,999), separate from Beginest Harbor 1-4 (ids 256-259)
    id: 249,
    name: 'Beginest',
    badge: null,
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdjvoUHDxpko38AH6ZiZtCO8hyM7rlMdSNWepRY0pnKwWMmtMtfeTO5Jad3EMhHJSpFtFnqQHM7F78iAL4Wje5XbpWisamtyxf2E6cfBan5X44BOQyQZLjXd9dFus2c1wQhHESOUuNKmlA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd7MAqkpbnNJPax_sdwo9SY4-cGYrAFDkcDGO0uy2NQY_FIuQy_O15AtIeziOtWaPe8PvvpXQioksfltTtHf3SZtAGpY1_j2u4_t6ClJ0vnTiJirzn7c3XXygkGTogmFCdxql6i=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe1_8ljXkVwScp5t6-2StqVG7SZEiyJz4gry14T7bMz5YigYTjKlfGKjIa05Z4wkPkrd5kOIjzNYZ4YPtdJldIBpCdfm3T5OGx_piemp-zJDpaGs6i3n8pQlQkxCcZqckRr2j_9dO4ppJIs=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdlZ9HPvglRKpfNJioV8McdLD8Cvx_7t1folnMU8RwWok_r5fNw5Ne7eFbRsdyPcVuwZA0Hyj0fZFNQjiujl8iBsVr0NC90ia7bBR5J7BJXqU5p5eQsDNu7yxEtilhqqqjfJPJS8Y1iPuEI=s4800-w800-h600"
    ]
  },
  {
    id: 250,
    name: 'Kaypee Space',
    badge: 'Special Offer',
    rating: 4.0,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹13,499',
    period: '/ Month',
    priceFormatted: '₹13,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe09SIRpfkfGYFdNFT5KtQ5ldLpqzt3p9D3QzCkSJgIoruUgZZfB3LARvp8RroqmTs3FSqLuICKA-Fza0p8gyxx9L-4hfFtQisowyoWIVI28Nl007DytAr8gvVb75CeM79GCMKv=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLew2Joq-PsxVzPSw9Se45BXM6h_6Z9slOvH8S6Izq2bRAsmAhE6ILhfYLJyVjMj3rU4IInDJjyj7qNxF6PG4JO7lloY9_su9ndR6sL5kke1IFeeLNZnohZK061iGDLdMd5Z_gLRlw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLetQ_kdmUlUOvdZidGYl6M1hI6-EzHhYk88yau59hy0ayy55MnAOB1azoTVNwE8XfdxNbpkHcr-EvpnQcA_9Bw4va05hJXw2dN1gGqigFCUsvpeXg2w5rd6z9sieKt6E-SqU6Qv=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdSJM1aLm-83uu1uMdazK2veuPtkqrZX80j-vWtlGgM1cGmkvAYhS8gNzpWnmOX2UGxXZzmTk_hopmaY5kYk5K-nc0aMU9nYVxK89uDYobs2FjYbP-X4zdRT1-8S03p2oXXqVE=s4800-w800-h600"
    ]
  },
  {
    id: 251,
    name: 'WeHive',
    badge: 'Near Metro',
    rating: 4.3,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe0F_oJtrv62mFa4y2qZjh8CNIoUoSzKcRe3Xpu7cDtoNWLwveaz-tEThQnviH9V37kWazIHkUU0CtKVEisCeSw4KsNZE3cKl0OdIzHHyoyMecGlOAyU9JmjKcHO4GNZZEBTleKRQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLevGv6C1SBIaF7DHfile7avsZL4LfVy9-CZf1OXEDbmgiOMa1MwXlSk_LE0zxc6Wb0Cp8N2SqxoPLZEDpuRuMWwYmcGoLpfMMvw3dJzgr039XP4ZKIsuaFA4YaQ7lhyIlI-Wp11YQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe_AxVd_FlvqbAHLMBLLn2uyXdk3cUl8hv33esxHrFCP-aJDdnyUxbRLG-vXgk1XJGEm0GZVNGt0M-K2tTkQK5MpdbaSr6ESe0I1a_Skl1VpPVlwaSt0lpkHTLGujdFdG_HLIMGEg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdZGZoArh1OAjqahhyxtsK-lcLvrKatXXf8tUej43NwA3jtBfL4NmPbW0DSC1FGcaed089F7fjGI6Kd6laWlM2dhUwS18CwlOi-EGD3P4JVbST5gRlysvjUJTn5pqfuZhJo1VQ=s4800-w800-h600'
    ]
  },
  {
    id: 252,
    name: 'Cosmos PMS Prime',
    badge: 'Popular',
    rating: 5.0,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd6XwfTvxalZVR6gg-n3m4VwNXIU00ZfytkGcdM612HhIlzSKQV3Du1R3YK4M6dLZDDAYpf7SNGEmInm_8pJza5d2lvlJ4KbMNNIqIe6PSNGmo1MwAWbVYe2DJy32IYcGUxokhi=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfsDtVysDjIuwrLBgMquo3Kegsg0t5ojOaULhqyIc1s27sJTTzs0OHJPyDPFhfFQeWWEdPl15LrMDjPvkJdiJqiYb6H9ImaJvEQY6e-SWUtknd4NdjP32BLJsSzYuVsUuovMcwyuQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLepjP3sLAMBQqF4Z0OFKTSbxShszjuuQICj_0WHUim-xUeLXCiC4g9BGna2L9FbmI4ruHVT2QZs9kq6JzCyITFNldJQjSC3ukpuHXKa3ttMxt8UH7e7pdHt_AWpZEqthi0feW4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfgQKqiwmxNZvBROIM8tNo-KN84Z3tSGkErN5ZsOazLxR2B49TORvmlcElGk1bCmHBZA1g5-2oG0i8liHgDs9eo0oMSl8nhmfXJMuJ40--6sU9wxZPirVMPmbKvyFTzhYCUPMvC=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Found on Google Maps (13th Cross Rd, Indiranagar) but the listing has no photos
    id: 253,
    name: 'Focus Factory',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5d94238c563f654f499ec692b02dd61307594f6e.webp',
      'https://img.cofynd.com/images/latest_images_2024/c946604e36dfeac43cfedbcf4eb110ad8113b4c7.webp',
      'https://img.cofynd.com/images/latest_images_2024/f4ed91bd9f8da8c1261abcca959c205c1b7fb5f1.webp',
      'https://img.cofynd.com/images/latest_images_2024/efe480bc67148d4166bd3c9e98d9a10913632be8.webp'
    ]
  },
  {
    id: 254,
    name: 'Workshaala UNO',
    badge: 'Premium',
    rating: 4.6,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd9U-2MUGnIp7qVaGJWe4Y1W7Qi82BvNl-QXDYlVwjpY2ERAvuH1fu_doMOohxFWspUEvcVGTlYFzOn_QoYI9jKiGSnLfP5E2m9HgLziPdU__bwgFW25wlFyPAbMfp55OfB8AoNkg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRJIXDOPoIBO5HgrtvHXixK5y5yFqZhfIgbIs_9zzjCSRFlZP0T1gPabXC6taVSLPfTVLFuk8VwS3Du9UbMmSMiojLvWhOCeWMAQgP8Cc8DwatehWi9v4A2FD6KC_RSKvLanfC=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeNEuZTrnXPj2wQCBGY7MG3heYrYT4oUjZ5ZsYcY-P3o8wqCye2GjSJvxrAq-0TtFk42FQGetNBN4eddEJ_PZIMkLq5yu8ZFO0CKgxdUkGY_O9k36zy1ZmRtfnotCthL2lYsW7o=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeBR-7EWFrde-e7JLo4S0dPfaKWLI9I4U6HiK7YrstfwR2ntJqkJK5GDRrNXv9yqyikfWhkyeBqA_xwqaBjmNJUdttEBAZFN16Xp7M7KodGUo9qN6GKuI6FZ8_IkiZK-9_tXHEN=s4800-w800-h600'
    ]
  },
  {
    id: 255,
    name: 'Workshaala Argus',
    badge: 'Premium',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd-8zR6_s3S_gX11eA0xIXuugnlKAXGgSl6EZf0KSMcRSgAEAALS_u5mpudTM5232-f_HhDiUfI-lUgdlwesUq-4SZX9YyZOOwvM84M4iJFFrcjtWQVAmQD0sOIXch7mraFTWtyeCgX1Ix9=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcmneClYJYk3_UUlOpEtWLZDjQ0bt7BwCMFLDRtgHs74LJVuFvhE1xziR2dKt67o6srvBuWBo6DyMOCHDP1Q_0K-lZasF9RrtU7IDku6Y2ihZoL3mMjb0oLK4fRp_r1LTOe0Or8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfBHJMhtPrtQlEf4eMKSez7RcQ_sRgdiNfKCqExYncfBbMhIRktaaU2_Zbji1tRHEGyBgeSRWTkfQ7Le1L-Asq_wVechm0eN2bGBZrcvOSzJw-XpiSLPF9903QnQoA6D4x8RmKk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdMHg1LxJJiBwp6Ywss40jNuq--BQ6dj-pL0sCCmcCUHYLqSq0w3XJAw00Uuxegp2AEwp0IB86z_sxzlg6XjeH9ZSYXFFKTjdJJWSf45-xsbiK-wVKVWIsv-VrrgQNUKaEbBH0FCQ=s4800-w800-h600'
    ]
  },
  {
    id: 256,
    name: 'Beginest Harbor 1',
    badge: 'Premium',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8Sp5thmtzTELi0Yn2xXKFO9NV5XdtV9WmoCbhqzy1uhSiwMmEyW5xT2OrdSer8OqiMxq_jxZYuFjmYVFuCgJO_bSufTl_9_Rz1rEhQ9Vs0qFwjWTitjz-Yy4wHiJVQ0s3zOM05fF4GLGk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdFxpr9ZPLcVRaZKtaS6NgkWaSfuRio-6Tf5aG1qzKXCPsnjF1M8rcxkhOsz0kwYfb4B7xPdLevS0E8hBsqmUzpnDeUwnB-08888BLLAhVcBkhV3FlMPGN9MNF9FNwrZ6zzZns3Pd4pnfGt=s4800-w720-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe6PT2HMLqAPJPmMM17gSrWJ5g3R7pP2VcME0a5x3skqmFWPizmHlrw_aOOBemS5uUm9KjF-dMZL4_7R8SobIr8oIRcLxrK1Vl2E-yPjD0nEukQa6RbXshMGGVgPdpF6OisfGXuD32EhCfG=s4800-w720-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeXsPqaSpq-xnqMqdE3czv7ak-1VTtbg5O1oz97UdNm6-EQf9lucF_ND6yLteMIvmgA-k1VAbz3wZYaZR3ZmWukoo0c1l7yvIk9bjWE-IpPJYakpqxo2wug2YHdqZORFcf-zVZMXvyOorwf=s4800-w800-h600'
    ]
  },
  {
    id: 257,
    name: 'Beginest Harbor 2',
    badge: 'Premium',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf2JMw2vwmqdofzF-_tqgDZrEQ-fWrXsAoMVtBNZrG5A_Fmo2dk_VRmNkk1aM4EZf39TyTx53eyWJvoY-I5A3LvOZ7YjOUY8-jvZjrvgRYvPyt-GgNHkl3UzI2reUnC-NBC3v6zEQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd5dPjvVISdAq453BQKeG1m4XIz4sa2I0m2s4UW53xU_GC76t8e4PmL4aIcCarfc1y2c7C7p4INvvHzGYOdzj6V9nMNLZ0SIvi6LjUqu8Ci8y09DiICJmrnm28WvGE3acJZkZYwhTQjXElD=s4800-w720-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdy0J_DPWunl8qOu_rRMOBAwIxhcNDt85FFA_8VD8tRqPjkqhhsU2abII_fpa1JEq8Dj7__7Vo3XJAbYD9V9OcMZxrRtmWKpvbokEwIlnI81myDYjqsD7A2BhCtWTyWHge3xc0m=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdTE9pZOmEYrVYgiTzxXWAJZsywZOKakDAdeq9DuU9KOA1VvF3yL1bvqYVmJ2OGW1uEBltSHW4Bs8SQaGqxC0qn9wEzI2kqYdn9fTj2NUHaBgtI3v6p7iHomPbHs8a2gVE46Ctv=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Only one photo - uploaded by a 'Beginest Harbor 3' account; Harbor 3 has no Google listing of its own
    id: 258,
    name: 'Beginest Harbor 3',
    badge: 'Premium',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeqC5uvXsNwVgObPrlbAmM_Hp8da5_huigyFL6RduXm-DRK3qYuozU7GLwDXe2hZy6J8wsvWMX5YCr3Jp1zOuviP1gLZEATzNDe1URWvBxeXTyITwXOO8VYoqVO-Jwei5HeKMcU=s4800-w800-h600'
    ]
  },
  {
    id: 259,
    name: 'Beginest Harbor 4',
    badge: 'Premium',
    rating: 4.5,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfulqb9kppUCLvqam1XVhxVtsb_RBCIvCrz109mjMCR0MBGKVJoxXnff_cGqpjDXYBSpPAblMw4ejB6KjG-vd7MXcoqA8XleKRC-g4xS5PvbTR9X3SZ3_suZgm9kNN5iwCHDyuX=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfRFtvNpRrWMFpZDlZO2cnNDDo-1NGkuyxs0B_1Fmo90xpnL_uXwo8YWOywVkX_xnz1pttN2TiAa35WcYJ5ydaLjl17SnsGi1Qh08MtEtgDziJBde9o0vlt2umsmctpQdRVtoS-Z_Z0N68=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfW8AgyPw4EV1EjcBAZTVMy7Q76Z5W5D2DlMVnatiyBDNHSWiCFdBmwjsYu0YYhQlzZf6LUN3UkJ4LQCVsE_PZjHkFHD3gPyUgk5htE5DxseaRMWxatNsR7ZLoOtjkLdJJ3pQJEdjutuXKN=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdcjbHc95nJiCvjF5RpY-tSTEpse5rqYi-2y70OeqbBJgxRcvdZl3HeylqExLk9ldtcyzAv5G4AGZ_GqFOukDxf74ui2GfP1rJW2ZWvrj50L0SjYk8eIqXCT4oOddVkGae_p5KxXlvpzmwV=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists The Yard at Carlton Towers, HAL Old Airport Rd, HAL 2nd Stage
    id: 260,
    name: 'The Yard Carlton Towers',
    badge: null,
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdtGma9QlyyRZDxlURNYVgXYFC0LXE1UJmX66aOzqhNn5IwSz8mCmk6TAK8uJtnZgAivmR2SzVB98MO98u2_LM5hWGLn2VMfYoj83DzYeC4pv__fPYZbwWiYC55t7H0DeEnXUf7ut3JgHj7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfISwHF41WXen5eaVRHpvl8d9sEDnY-ddEjBl6Gxd7kKHbrXUjGpblKwSSzNi6-uo3aCTxx3mUiem_moANMk3fGWqUqKeJuk_nuhmGzOd1eJkEGHncoShgQHtPx7INho68vXnbSE5FCXZ9w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLddHCOVJDHwxEVa1iRuL2FAk0e5qe1ZLRwsYl1qnn0bBs_ovpVOSCgC5XIbKj3pMsSYc4tOaSt_CdjWsTqBO0_TLnNWKxZfLtwa46GcPbGcR6qkQblcXYzyvS7kogBs3f1R6ECbxxxTG9xh=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcD6qtCLeeeQSXA-RJWYnAHwRrXW-dXqakXPCnjFbvtQAhmB4m5RwLCXE5t7QM_ak7tTejOwaC6RWnnJ_dYPppMKVVDNnOEpcpY_do7r17HPbdEInaPdD0huHyR7UQt_tXZvYg6hPsFHYg=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists Workden centres on 100 Feet Rd, HAL 2nd Stage, Indiranagar, so the area is right; the Domlur centres are id 435
    id: 261,
    name: 'Workden',
    badge: null,
    rating: 4.3,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a71f04ccfa1bf3b2052a6d3afc69837249b74cd3.webp',
      'https://img.cofynd.com/images/latest_images_2024/8a7c2a141ad54d8fadb8ee6f8dc6c28cbecba56d.webp',
      'https://img.cofynd.com/images/latest_images_2024/dd5a7970314bdb85b306fbca8856adb2c70ed71e.webp',
      'https://img.cofynd.com/images/latest_images_2024/ab6b65f2a12a339958e9feea037c7ebffb2bc9fd.webp'
    ]
  },
  {
    // NOTE: Moss Space Diamond District not found on Google Maps
    id: 262,
    name: 'Moss Space Diamond District',
    badge: null,
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹16,999',
    period: '/ Month',
    priceFormatted: '₹16,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/66ed33d9559c224843f36376bf4db5cf928cb6ba.webp',
      'https://img.cofynd.com/images/latest_images_2024/a8518d509701930be5c023f8536b44377913734f.webp',
      'https://img.cofynd.com/images/latest_images_2024/a0dec68aafb51cd5e61eb34210d9c24eff0f5f03.webp',
      'https://img.cofynd.com/images/latest_images_2024/5bf193e141bfaf636cc9d319265151e2192a5bf8.webp'
    ]
  },
  {
    // NOTE: Indiranagar centre — separate from "GoSpaze HSR Layout"
    id: 263,
    name: 'GoSpaze',
    badge: null,
    rating: 4.8,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf8tz9mo2m3goO5lo-Klt4e4GX6Z_J1rKRykKcjwRrOmqQJqM84ToyH6yHKbreFtAlEy-4XxX58KyKix_Fc1r8cHXlJTYtd7AGUciYSjc9ckUxh89fT_tqc2aG7lXCu48NN2ebbA3xAGlU_=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf7H955ul5lWx2kkQdrhJo1G2J_aFtoy2hU_nIC26z3lme9fpk1Dngw2oCSNYHbNM47OSwnAcno5Vkv3YnFKWrLh1UOp_yF64HUHBtRBRv0lAm6Ddt5CWVJlOYTil7FeT6Uovdh=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLev21ZRixiLRXEH2UVtUfURyV1uycObg040a0r7fHACh6iJZc5mEI1enesI1X61TEE8tk1ROZN6GHb-KMehYb4PUpbm8jUDycB7QtIJkwqkaM6HEGX3ZL67WnLj6zdnDaiVhJzv=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdv56TZmOx_4BFjPWO9Lnv9fsYXO2CdPz3IAWZpU8VRyakkbkUvtSmEcSpRPP2WxeRJ_C_LGR0JH5OO85hkLkhsqfqmUfOwUX0jo-2LOLKVEXPXZm1m6uyYc32TH1kIQAZxQkLt=s4800-w800-h600'
    ]
  },
  {
    // NOTE: area kept as Indiranagar (per CoFynd); Google places the centre in Langford Town. Card price ₹59,999 is CoFynd's lowest plan (₹59,999 / ₹61,999) - likely a private-office price
    id: 264,
    name: 'Regus Global Tech Park',
    badge: null,
    rating: 5.0,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcw4ymcF20AHPmzxEmVCus8FoI_K_DaIKlkYWnkdNmC4GxIbH6MG8yFOUi_p-LTBOnO2g9VYFWKfdZI1eaKbwmbX2TyY6YKDq6v2oEAfH4iF0tFOAY0D-2mRiaqkrPgP95kAWbxmPTiczyj=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfuN8oUflMQQkRyQbZq6A4IJrIjQiYVfIGEEOQqN1jfCBooTvEZuWVnmS-vApzVaeL7IrXD8RS61hagTXSvtt_03USm9i0uOg8QYMbdecCh5umXNj9BxNKrI0xcROuv_Or8MMJwf1NuJgnE=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLebkh8ULo9Hkem59s5ZgV8oJ0hZtmUEE5hB5D9UseAUmIuOCWILn7jKXHlB1ejEKc2_S7NMJDS733pDDxyflSL5duexm37KoOyoO8qjAXk6Pi3LlixK2w6m4JgK9xGvT37QIAG7OJZuSCwR=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfz0oVTBwop5U_NqL0shBAa4oY2ofblxJXXUR4hCYBqsgJOJ_N8EuzzeTELvqitfUx6J07tmPYgqTwwKPJaTTqUxQQzB3jsNPPGBvCioKoDbGwb4qV-ocwQ8YLG6dCYvzjMtnkPxGaKl5Y=s4800-w800-h600"
    ]
  },
  {
    // NOTE: same name as the HSR Layout "365 Shared Space" card — separate Indiranagar listing
    id: 265,
    name: '365 Shared Space',
    badge: 'Popular',
    rating: 3.4,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹8,249',
    period: '/ Month',
    priceFormatted: '₹8,249 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfP3brhmkw6rbEcyo6dQ9xKEdgLyhYPAKPdoRRiuvC5gP-3SUMz_pIsCM7-zxhvFwyKqZne7-K7WLwh_y2g3FH0b_gzrZ6PWF6nh_ePAeu6wvK4FXD29fvydaNKDXKXbsXCS1qt=s4800-w468-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe9ecJbmy3yU_4jq8qgg5BWUDgNMncTEDF42d4_DTtGMWD831q6KDzsHw1iTZZdF97BNT72Me1qtjvuItg7P_qMX7UKC36gApiFmL-JPNboLkf-MlkBw7D0h3Z4cKVCRgwk1wfd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfjiYsM3yXRUoNwy5yJsHw27nfOXj25HQ1TMTNrh0wcU7znRfJWpHTxiQI0B41lywdVOQ4Gy9Wv_nmvVR5HddqAMFadZN2VO5bTH2y4gS98TDDDBnCq9KgLSX7oiTLQGYJbld2C=s4800-w800-h600'
    ]
  },
  {
    // NOTE: second "Proworks" card in Indiranagar — see note above
    // NOTE: Only one Proworks centre found in Indiranagar (used for id 247)
    id: 266,
    name: 'Proworks',
    badge: 'Popular',
    rating: 4.2,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfYFRvqLXsqPHk-AhA0TcRVRv-52wo9nN5engse_lcRKPOosjRAF4zA6sQ9Rl_oKSUKyquGkwBngfxRhRGdy3iq4l6oraOgSx4WTMbPo-M6BkomACb5FmKAF6MHtscwzfQ2iyaxkg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdlHKwGT4PwG55WXWG26borqmzpv3JmTUvmwrUMmY5GCW5S7x3O0RlDOjyPI9jtdT6IjKHp2jBE0zwOrPw36QkRqLUk5XctTNVZok38_vv7F8Kgdtuo7qPCxsU1TiQGi0ocXMHAZQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdGMFtPhCgFKYSfmrMpfvLURJHqMDOe7xFspkLPnsXOdtzJILgWX0RD5FcD-NCBQ9-gPGrmKBel5_3dPd24YRleU9zQEkTRimxu_gJHX-N-k58soBMgxtC07pUximWrldIzZfMv3g=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfjgOhcmGeEdRkhvbYQ5WGIIB9l03Gz2wwXrlsV2YuqzMIw1nGvVaRM4TIkFdCwwsTIJwX3_L4ZI8URKot-B-2Ak6bz8vvoLQ2HddHUbNcMy8f1lWx78C60mcrNBPEGHeOnA1Xr=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google's 'Profitjets Private Limited' (MKB Towers) is an accounting firm and could not be tied to this centre, so photos are CoFynd's
    id: 267,
    name: 'Profitjets',
    badge: 'Popular',
    rating: 4.7,
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/153ecf2e58e509f87f41ebe7afac706ecb251307.webp',
      'https://img.cofynd.com/images/latest_images_2024/74cfd3a31a2f0a6830a91d4fe53d9a7360cdcf7a.webp',
      'https://img.cofynd.com/images/latest_images_2024/4d0a27c6cbe4ef9fb075bfcdb18ec62611b347ac.webp',
      'https://img.cofynd.com/images/latest_images_2024/801379984d4480febc720534b14db41f31dc9511.webp'
    ]
  },
  {
    id: 268,
    name: 'Taravi Workspace',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Indiranagar',
    location: 'Indiranagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfWnSdT5ff8Sdaos4dtUctyyi7Jcu4FYAV4_cJGgpvUGmyDI_aKGzEsseAwBNgzSQRr4LVEbJnnLoKF82u8igvk8eBHFOHD_JTve02Au8V4h6DRc-Vyu4P4tvLyhysVDevFosZ2RHOvNEan=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfJD_ZAKncBM2wFYB7Yu-EKbZc0gJl9OFyuj9HER82JflL60oeuTW1RHXjpuqeAdvq4FwI6LDWI0h9AFFa6_13x9xqOK1LI9VGwa6fEwuadfoR40m4ge1yoHE6VordU0vtm6ki9U7-la4oT=s4800-w516-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe_ryk_We73K0MU8y-oSxlI_rx8d312R5O6gDzLZaEdt_p-6Bnxg-R9VCMpa7pD-MjZOk-gs9z8f024o5AWSn4mvkDnhZIfz-a2iAE7gBc3VaCv2OxfzwjaLDoVV5FfRLNnJHru4PS3M9jO=s4800-w756-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeotde-1wxyEPT1NbsLvBOzvfEwaou8Gs1AiWnsHBMeuT9Jw2gv20pD43pB57k8Rwmr7PeaHn7NkvMmQhHd3PFKp3uSOp7X4DkFzBTyrw3NEmD8HYXqKxcdaD9wsK65YBW-FHVvQsbPeLwh=s4800-w600-h600'
    ]
  },

  // ---------- Whitefield, Bangalore ----------
  {
    id: 269,
    name: 'BHIVE JBR Tech Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfl4UocErE_m7g7Ql54m1Q973cMeykUVDGN7aXzvdkErlRb5z5rLU2JdHy15dm2GPWop5nmQwGePe03fm6tXRblHup4alm0CPK4jHpvSwhP7a2BDIpy8J8BrrquGB9tSumQER5g=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfCSL_O26X4fMvLhMs9AHbpPE-nPLj8YuSAujEPYcvdvisWkll80wUqCpwHpjr8kFjllaG2xiDVqEmTI-xXq_PpemxZyim41hMiPKud8cJoboVRgy4Bd3Pq6W2MnzAYraGHd5Y=s4800-w800-h600"
    ]
  },
  {
    id: 270,
    name: 'Awfis Prestige Shantiniketan 3',
    badge: 'Premium',
    rating: 5.0,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLerrlD3RICRwfFYTcSDsxY0NCaFt-W_y1arXhEJhiUHEF14cRhbHxmY4qwWdmXFuz0NdXFPbq1MNJKUDXW0daPWNjTOApZ9XPpoq1O881uvGDcMbHAPLs3-TXTrDT-F8NvBl7uR=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfFHZOKTVlNNOZrzIzM2rCoOeMiaOD6tOxA692HQDWuNmjrFhiRcdOeNYADUpMgU_LQsc5Wt1G6dbNZpD4JUJam_kuuZCWfXUWHMAz6zxpRX5uqIGRGV0AbcjXJASm8JKQ6DOhQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgRelN1MfHIf1lsoUuLh6o4-vHYQ0FmhF9H4SQT_4lUr333RvIzpPOZgLbdIZ_b18DBw_BxmhehXyu0VbsYj-uvUsrAQTH6ATQe_xM57YPkKDEq55d37J-eCwOYtxbJmHYislW=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfKZBdHNRiHria6Un7hq3cTt9CJ-QXBhtk_ftfsOdtJwev1WFEBxBVZaJySQmRlmChkUieALniGItbn8-CKQxBAiBg6ob9Eb2gr6nUUUS1rgfndeX4oQuqsJjimT4XRzKPHa6P8=s4800-w800-h600'
    ]
  },
  {
    id: 271,
    name: 'Regus Crescent Tower 4',
    badge: 'Popular',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹14,499',
    period: '/ Month',
    priceFormatted: '₹14,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/cfcbff3296c817e6f0cbdc2cf578af02a4f7e37c.webp',
      'https://img.cofynd.com/images/latest_images_2024/3a6abb85f1d24951d83fd97f4dfbbb6aa6c1f183.webp',
      'https://img.cofynd.com/images/latest_images_2024/96bcd0a906639a3bf79fcbfac20b1ceb4fb05c29.webp',
      'https://img.cofynd.com/images/latest_images_2024/67cfdbe796371d3ee0db5dc53a3451ac084d4289.webp'
    ]
  },
  {
    // NOTE: iFinStrats on Google Maps is a trading-course institute, not a coworking listing
    id: 272,
    name: 'iFinStrats Coworking',
    badge: 'Popular',
    rating: 5.0,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd8C1R2nXYXp-3aecTcLf2xLtRYj5Q7HHZYP9Xl0EbBea5dwtnmE9LYrshidPr5932y7NslCGpZYVDzfbeYZ_F510hB-pSNhkvtic-9PLs7gBCqmXWNOLIQkK9bMRd-WD8orZzOzQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd28QSAAcEri6W4TtcR9BD41W3arP4_UANo-KCD2ME7fl7z80GTLtPcVwHejf-Cfekcu8yzklTo5LWUToTr7dG8IuH5tWi7i7GU8N0SR5-zFJm89qaCX30OwJVehUr8VAmXFnp0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcUr1FBUJwGs8xLRr9g83MPaBoxi2CStAUhAwh_cBmSVOnxWxc_gYLcqL8vIVNMQhS6z9gmTDHxfwVQSlLU6ygJuMPD2kQYlXmWn_5GZ0n3U774jAgMg_I7k1ZMcgSQjppovocZ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdgzpvZJg4qEidM0vppt2R1TjXY6TR-wmMnxCjnxqwIVI9ArEw3Tnl9pULfl0Y5INJPWMmq5Xw05Wy15HOCV6z3x5MXOd_etvrKdekDsoWhrn0NLxbwrq2HMeOxO9Rz7LfFnpxVFA=s4800-w800-h600"
    ]
  },
  {
    id: 273,
    name: 'Goodworks Cowork Shantiniketan',
    badge: 'Popular',
    rating: 3.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/94d221b5c93fd89d81f28f32dbd26bfc218753bc.jpg',
      'https://img.cofynd.com/images/original/5966559b7462f65b32aa8e8c0c4254d1335fa623.jpg',
      'https://img.cofynd.com/images/original/db9fd74e92cac6efd7adbbb858451f9ab55e74ba.jpg',
      'https://img.cofynd.com/images/original/7bad5473e9e0ec19d74dabb31e665e6da620d34a.jpg'
    ]
  },
  {
    id: 274,
    name: 'WorkX Brigade IRV Centre',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/337254d070e08412afb40d73a608018e42e8df68.webp',
      'https://img.cofynd.com/images/latest_images_2024/bb759d71be0ed0ad22d94d3ef26b00b519c95683.webp',
      'https://img.cofynd.com/images/latest_images_2024/e99a7295777fd89f90c97eed0b95ffbc5738135d.webp',
      'https://img.cofynd.com/images/latest_images_2024/167af24823659ebf9b61a0e87729feac76d1f518.webp'
    ]
  },
  {
    id: 275,
    name: 'Awfis Prestige Shantiniketan',
    badge: 'Premium',
    rating: 4.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeaDFxizgdJ4EftnraV5QnC4cVJuZPk2e0NBcbAhEn6ybqLWfGDWOm-K7e_CQTVYDyYh8mIy1p1BI0rh4NNXYKPuSluy9Faim85eNKzsegrLqVzwCnfaWUuH9Ceo_I7X3xUoNzEnf6GU0Ts=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeASBungu7Tosr2kLlBTk1Lar96roby0lJS0F2zKogodsiS3jVHb4NRX_40zcbgNSKfoyrDGHDbcIro9hc5-3L9S0LxMUEOXLS4_c_Th0kXDbLAWOgiHT-8TuSXobGM6C5gfBOoHC7X0CIg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf0C6a4akj8FMX_Th2P3O5J7vmQMQgh2tDGVv4LaxFiLD29-_JJTlla58LnmbETVnQGK6rcBHX2hwOa583B0201mCUqS_jqAa-iX7t-8htoHEyB15k4-DM_R1uXgt6I7jL484F4cA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeZwgobwQWen1c4m8z9PiXfv1j4do_ewLjub-peh_KtPOZpnoTs3WWPRe5TclkSAYMlSJDiPQUV9CCNrishuvh70cu9qvu7946pk8RI7bqD6UCXIhfgqgrtGp_e5hJqouRVnYH4MQd5LUg=s4800-w800-h600"
    ]
  },
  {
    id: 276,
    name: 'Goodworks Cowork',
    badge: 'Popular',
    rating: 4.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfylIMNYGC_YOO64QgkGSlN6DPmTZ0AbH1BweiihHJYqK1gvpgtZbYQArzQbwkRN9lbXuonwOqVwU3GneURI6VABBhepCuKtC_iyROsgFxD-HhA5OxisBAwC9dGhZa29hK0066A=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfLLCnwxWX_KLq3yz_iMAQk7asSqt-jReSC6IsV52RJNz-WrSzZgdwEognC3jd8rHz3KJrC_FRDXpL4jSI_kxCy04iy3fkTT1zTvbbSeuBfQ2ot6kfLvE7CjdXK81TE1Y0UTCMoMw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe2DF3aoYCAUz2tUN0DKKtG_cTah5XT9QHmWVrMKFUvwp9bOd4GN1hggOB5aZEPSUg_VVerI-AvvwtoyfNfvYu87Rr07z7QCs6A12O4w5rvb5jF1cMl7VwfYLrY-IOwz2OgTvb4Pg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd3wbDkI46QalIm0o60w0MilYnP3WF6lnUAWYF7MRw_KLI9ogSECwLdp0y_TKqVXo5snqQR_Gqp2hStE6TO4rKDjJhZrpt6pmJBmNZOsjcldpkp6y8gjrq60KOUkdF1hdzWabZ5BA=s4800-w800-h600"
    ]
  },
  {
    id: 277,
    name: 'Evoma',
    badge: 'Special Offer',
    rating: 3.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLewoWDtBHxXbuKHnxS4wzC_juamBRNz2WN92IfP-5KvRUV6cFGa0CjzKmz8duO5NuZcvND_9uG_DZrsBe8u_V5YqI04qd11jkx2ta_Z89xz7NGsY9Z3ytje59yXzyVOxWPw65ZL=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc61E75Gp15T5RNzaM1WUK_h5Vti1Y6fMcXYaYF2__SlVw9wh67ITaOAQtr61dX_Hjx5fdejZ9IiQ-AzSbshezowLQYn_OcISB_cSscuHxOG8gSuuMntrmu9h33rCGBbg8PUl59tg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdAC1ARdV4Hiw0LlnEHgRatjpmJiWf-tJNEy_zrJrfFPdvAHnj905uBJ88WgNivfhAtZIQOqDlcGbMYvhHzCYoOEBfVuth9U6RVT4Nl7bzBN-3EVpzM-bqZ9svUMLXji0mINw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfhbiU5GchTZee1sc6yoqVXuTwEnwsslEhNzj1TjUJDbkX85xxWdTCUWmvLh8NWEBfkn3Q7bKpCBG8nzbNRlauwFuJrMyDrZnjsoDDhCYuaM2SLZ_vGGFgOTvFGoj4LY7wX-uGrzg=s4800-w800-h600"
    ]
  },
  {
    id: 278,
    name: 'Enzyme Park',
    badge: 'Popular',
    rating: 5.0,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdkJunG-hO9s8tw-fZLIyv7IrVkzEc2HMuvkMeiy5BUIHmqS-tVsu1LCyrMWFLK5BCsdzrywmSEtkiMIvuKAanCIPGDuyMBlzFYM4MaPS80MtRNkSJFCz1mW6PJIHLa9MYOp7llMeH8JGY=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcSGcOMyfRlUAAaqvbASBWsV90H1n0QFpFgm5z8SGHUKCaboUAoOu4D35U-JXlmOFOfWOuWvEGAt6vRTzoITV5uvcdVF2fI2F8A0zNnb-5jVmEhr8KDoegT2EKAUaFfuhLlYujE-LMuPdR-=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdWmHLY_vvADYpiQkBb8ysFeBDnmZL67zpHYgOIBh4jEy0cWLHEIeR5gvdRqzm_4uBytH4vApjHwdch58POUAt6YBuU3NXeI97j9XpMUURDl9MPlgeUA35IiPGHLirSemRGcaMdwIsSinRG=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdF3y5IKsZA8HZzSMXuj1ITHWFfQfrwXzXj2cbQIFHLmMk5SYja24eS7FJ9Y6xuvOI6c4r8NNAIUXHc15W0eSe9wnQ4QVwbExOImhKdtqV5hlQz4sfPCSA286ZGq4wX1Qh14sVyBnDLuts4=s4800-w800-h600"
    ]
  },
  {
    id: 279,
    name: 'Unispace Business Center',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeH1ksQ0UufsKDQYXjqsz7qZhZlWcM_zAjNzrv9hro99fBaKxtYRjhNleJNOplHAqSZ7GulyvVZvhFKFcGVR2tRVfTxM1_7h_2cOwUWxdKKDuZFBwYvV-ks_J_TzIdgLAaJUYM=s4800-w800-h600"
    ]
  },
  {
    id: 280,
    name: 'Upstart',
    badge: 'Popular',
    rating: 4.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf65ZKGK8iUJEQFRSeD2BmCt2amrZVHeZ5nRNZ0Q4sBhzhgNORpTtJWwnF05Impf7u-8ULr7K2S8Y_qevevEvCx67a1fVtnkkVRonZ7DUZoAbmNL2Tv59NDW_eptA9fW3sCYysr=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeR09vS0CEv-3jnE0lqxAup7eVjcbVADDwf8YZ6xI_JlwH-Ams5-C11Co2Dp4i4d15kZuPN9sTpp4M5gHyVbxU9wGcw8pcO1Uamd2dfUtO47-tEzEVAASCt7pWWmBNkpYpvVnk=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcwuVhAGG6sQp_AqCgTHBIcIXzqoG1wGF6sjL9MM6SuOXlVO9yjixGBB9XqVy8lB3lmeP0x7oGzJ0GT61bQX4uuw4V6rHcXKk0T-Wv3Ttuj4RN5T8CVY507VrF5p4vG4pbBPmbGog=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe6rppymc6l8vONXxBLb02PW9TYwttZBRxReFMOdokbvHZXda2zoiE3fYcs25cAMkDzLKgjYiJkMhzUno10BdBaLceRXTloqSoFPnSCzujlrbTYrN1FTYwp93_b3e9VPFyG-Q=s4800-w800-h600"
    ]
  },
  {
    id: 281,
    name: 'Akasa',
    badge: 'Popular',
    rating: 4.8,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcfd5afPJwfi-kb74NDkSYU6-dKSXgok1TiyQUaZddVDSuPudX-h2JDkZadwXoMAQK9YBE20t_gf8wLfKJThjzPn9S2vBNww_dI3Z4KCUvO-JaDFIJN3hZXuS8T7jnJIU56DvQERw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe0kfyAzjaJa80kWMQvhjyt7xHBuA0FBr063IaJ5eKHP24Q4iVzIh-thn0_GtRo592Nrk1nOqzPwy2kI5WgcbtwYhS1NbgDwz1FVfGJhsPHXj6kAr0jQ7AcfHORc7A_wMi-Yr7SCg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcFxPWyH6Gdow8VijH8HDRk8vx9tovza1cq5XKVOtSF6W7kj2r8h-GCxSuiPyClVqJvxQyamekpjDFn1Hm1XIAFh7uVHPT0t1JM4y6dWOvbgIFR_Ylr9uhliRFafDC8x7K16VU=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcTsEFmqyK9oDAjsypqmVAqUGqcZ2F7etKh5tw_fuqweSTtH3bTpQbWyI5rRWeJ5qLoQ__p2wE8CHw1VtRb2QMcANQcQmqVxpGAs815X5W8LJIfbSSMQGVEZxhfts63VRP5WhsS=s4800-w800-h600"
    ]
  },
  {
    id: 282,
    name: 'Evolve Work Studio',
    badge: 'Popular',
    rating: 4.2,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLejLx7nxHaTkSQx3IRh0wTjKAt6OqC3PZ2TvWkXhOzsoPRZ9N2o4wXEB1vfIhUXy57yLw18fvD3YykMuYrEAK95ividzkBWNBc2UoZB4kxRT6SPz88om1MPlkYLvg2teYgBcj2A=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcHs8UTmT_6jrdalb2rA9Z-s7Cm9F6DD4KABSLZga2LrLPOIaMhrbxmU5EVSg4urN-5uHVu6nqXBFZrevtWIfTFdnl8daaVBwHCYlrrOVu4UDEMGnKb7mBQseP8A1oTclG-YkW0=s4800-w800-h600"
    ]
  },
  {
    id: 283,
    name: 'Woodstock',
    badge: 'Special Offer',
    rating: 4.2,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdv--FdYnHhOYwam8vUuvn6fz8rCyGD5MUno_WVl0H0804BAqcqn1EOwGya05qRFCJcGscoU3NWwr6UEXL49kBrz35YvhI_hzZo1vjSeLeLgjHwhIcMh-wY0MJ8ZRbS1lbPOtdw9Q=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd5oyFeJtXdcFuhHvFmnJA_MKDpPyfLlU6Q7NLIy-Prf5Oi-zz0KeVxQVOzZMozUOWqWZi5mPQwPiTcsUx40ho1cMl9ZkFfBpa_1q6LGVvMyJaxhFfp0S2bz-l5D-n9udxMSZurSg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdIedzTvhK4YtpcubLcDrN7IZWkEcpchLz28UxtL6q1_COq-bnJbJM2vwdIynAuolEJvG6hRwWY_3r2NHHQcXCr2K4Txlk9aJrJ4sheg_N2ff0nhzVUqac-8wnZMjyStX41jKHJ6w=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf8e3ZCk-qAEwMVIpeHf4Qhd-3ccn6rV3PiLCjLIFwOYthceNeNiDnGhbmtTthnD8LnYiItTrqi1No1ChvvaKcbhUjojHRlhIyzMihe-7YP1BExQtp43r5yiCiA-ISNQjd6Z4RN=s4800-w800-h600"
    ]
  },
  {
    id: 284,
    name: 'Collab Cubicles',
    badge: null,
    rating: 4.9,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc2rWsiavBRADpoCErYFYGzEVoi-65zF7RHa2E_dccMfIQynfKibqh4oeJiEd5tYEeOYde8QGS23cC816_qaLTSQ-5UatTTuvdyj-6dDATg45Exqtu1efAiNh5v8rnQ5ZB866-mpQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd9hSuBDng3ynKFd_RpaVFfnlWwzpHFYtXYeEb8iv8-vG8HhPtGz1cwAHlWNkzwIMZakVapVjsy0qNkSa2dbwrFlGXsQpdxIBRjhrRvmenWMjFmPfBqc6JXQaIo3fEfjCuUka8d=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfoe66ZlsszDdPuu2jbwl9McoyfyJNIiy7WjMVCBrrVxo8q9gSrvT0sPcvh8WW16yLXtm3ClYBPylgz7FJsyjgw1sh4gx6zVKRdCmUDeJKD0BcpKGke18tbNgZFpIYuZZRUthTH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcgs1BS_jlrAguh0JSmD3sRJLdn8OhPV5b3PIz4DiSsv0-UDARe8nKyOBaOfL8QYxGTNGf3DLFTeoxvWcrBZNTVMrQcKBc-IuCoW1uG5jmitEVMuDjHVKZC68QOhZfdflu121vv=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Coworking at Gopalan Millennium Tower not found on Google Maps
    id: 285,
    name: 'Gopalan Millennium Tower',
    badge: null,
    rating: 4.1,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd70s37tjWyYQ0N_EMbmi48Pkz1NVs9_9MVsEjrhsZRKh-8gAtCZSzLJUsZV_OZT1qPTx9I634Y8hi6WIzPDXFOT0mw4t-LIP74RKwzRb92TIrQyTlaautAQI7BVa0LXMQMJb-T=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdtuNbtgMVEdYLrDAi8_U-VWmdXEFHyIMlTx47fJNtmlIBQGl1KGH9UZyxsmClx9m-avwGONwIaiXIA7rNGjVVUjaee8G8kpC8GAoGIymazVzVjVTN7N2U_Vae0YdF67vEmNsNf=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLekEXcRy3Ypl9489CwQFFuczjmm_PSrXgJAvotkgnkuJ9066274P2Eaur_zVLP5sq0gY5Zn1fQzD0I0ivG1ad16t1reWYoyZB8WY02JjM17g1-tz12kZLWU5sFVf4J0Xsz-sxs=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdF9Z2MXDP0tWAl2_qcMthOCvCbd6s7szGs4RlYHUQcKab3AO3yp30NHAgNf-sLaQJ9wo2V9cJfhr9vDwpfg8pBUvBfF2miAIwLUQP7G8ftKwuKna5L_xs61mMSWubvIJmbEtBO=s4800-w800-h600"
    ]
  },
  {
    id: 286,
    name: 'Share Space',
    badge: 'Popular',
    rating: 4.9,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcgJd2zJFBuGLMXkpsDMN9Gvq2IAMFhHYoaT5VzYpiID_hgKtbhpzU0Y6mtL3eYlDZeEqXMP38n3aBWUgcWSXd9R7F1p4p8b4JiTWOE0fFTizChnLfz9Tk_abe_foBF1WNYTLFI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe7OpYF3ya1UAAacgkvu8gO3-hHBVscp5bnH8emYriM2aXc7mBr6L71243e715u9xO4n0xPuiZRPIHXb7qnT0eR4BYmGdWAUBD92ZJWAPkEVmmlPFkTL252HL7FjWvkh32AXNpE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd5gUPyzLIkbv9yu5GJCzKK746LLNTHPXUUS2LFnRIQPcxzvZ9IqlUU49fnwyXQ8duu5WE-rv8MJkpliJUUBFqFp3JSuABzW62sDBB7nKzafB-Q4tiLUs7vqw4YaIljFeRfIdHPTA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeVYZxAY55bYKhUg4OWEV1mSO-sB9c4sBNn1tx3SZ5mKHERzvCl506ZmEyk4wAiF6WCn1bYx9cO2E6dKMvdTdSjywd09HFW5pavtt6r_R75PNNX5DzikLLwDRoC53Y2vh6RgFc=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing name is 'Incuspaze Tech Park' (its website link is the Prasad Tech Park page)
    id: 287,
    name: 'Incuspaze Prasad Tech Park',
    badge: null,
    rating: 4.9,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfWh8J3NA67iWX0r98HL6JsxNwEEYQMO0g9VdhHqWKQgBJPX1iIRomuwBqzUCOtfnO8Ib3JaA9nmNQxbuGyE9GU-T8Q-CeVFkOqAFPP5A8u0y0DYS9jqoQDCwgUq01gHLK-CC1jvhbh_5u6=s4800-w800-h371',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwP8-rbMNPM35np23FYfMFGTmDg6Jl6TKZzao5qVuP4m5Z2haH5v4pw4jjHQMqnkVSS8oXyGx7LQ4DiO_gMdWvBNEHJalUy4YwyVhQyfac8ZaGkfJoM0dJ2zN3lLc4sW8Nmn-J2Wkp0y4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfHv5XKJQDVfkcxh6EM-o2MZZf7DwW4CrrF0G8ij3FS6MgpLe_5_RSSMckE_qnSiWZkuKiVzAjyhxk_Ihr7dfndgGdILWOrwPka9MnmO-NpnIyGh11HNkd23WZfsJYCzQv5WespsieYeWWg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfTHckrm-FK6Z4yNtyCKZk5D_pErcrmZfxjNk5zfaFb445kTp2qo8xb4-DTSOouJViI1Ae73m9xe4l6fErBK5ymcxQXaf-aMZWdxn8m4yStT0RKMh1SDYE8npl2paJAtXAsLjGQWz5TJn_g=s4800-w800-h600'
    ]
  },
  {
    id: 288,
    name: 'Featherlite Evoma',
    badge: null,
    rating: 3.6,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹15,499',
    period: '/ Month',
    priceFormatted: '₹15,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0108da72c595878ef4d3a4879d0a635a80986fb5.webp',
      'https://img.cofynd.com/images/latest_images_2024/3456482ea9636820564e6de0cd89a1ee1cd020e0.webp',
      'https://img.cofynd.com/images/latest_images_2024/30d20c0df66762def628f0c1f00caab5854350a0.webp',
      'https://img.cofynd.com/images/latest_images_2024/244d6bfdbbfe2d830d6878616d6f61fbfca6e022.webp'
    ]
  },
  {
    id: 289,
    name: 'Regus Brigade IRV Centre',
    badge: null,
    rating: 4.1,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfcPa1Zku6ma5PbzsjGHO5MdAijDbmH-bYd__msveW4QGfdbG2rXr0GD5q3lCV2eWw9JfVxJ1obPviG_g9WydKwsJUxz-_kZWn5SMvM0YD4qpqYAnrrRKRsqp_3lZ60WCxWydOp9ZbeiJs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcY7q4gXMQPbwg18zhBtUqzUA0tQ8WtmfDod7jDslIgHN3wSlTmT2hUJWYc9Gbw4YM-BRJFwEvyKmveSvViuzGvz34wCLnJg7fMCCpbZSgfkbkdT0q6FCf_I9EsF8jEZVp2AgHpnf6QFDV-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc1Ef-UCtB5B3Fdwm62sWpNAYj9ou1RJDcz6nBTC6U9dUjocNHudkLM2F-2-SzzsFN61j1BQrSwew788fIt1wemgqOZ2WmCWkNzKo4tHT_Fs0yw4CKuFY3UATna_t7r7SBDuIf2AyZRuUj1=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeRob8AyWfuyYdGYLKLpXBSKkgQ8EQQGKAWaW_hkYOtfYR_c2OlLtr3HUW5bZ12SS0UIX2GgDST15hu4GxowWwEtNbmDka-6q604npxuyUhj_auzurD85mTJGkj6t4937YNHFlW=s4800-w800-h600'
    ]
  },
  {
    id: 290,
    name: 'Workhub by Novel Office',
    badge: 'Premium',
    rating: 4.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,900',
    period: '/ Month',
    priceFormatted: '₹8,900 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLffzY6-4Cxhk6OGZTJcPsII-VMiKryykYrOXtH-Hh9Hqg1TUtR5B40wpZKo6vg_QeZyArAL4MbtqgQSU0ZDLpwhcrG_q2rbtd40YE16mtUHWdspSkz5oEb0qHRzHnHV6HyXEkNvlJ734-0E=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcPvLE_r0NH8pGC7K_GhuE1iqH6SZAmNXtqIIipWLCLJMSgQRePY39mI7oT6R6vLVdRzQDvnV1taUTta_zLmPeXG1yB4SK6MKn38JecYtS9NIiI66teBmONqk6X-UhxLzSBgy1N4xBGFdBe=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccIAOIlWQgxJVM0KaWZCKtyIcmKzUWNGY7GzlBktd76npWh8za6ERTii669NZIAkyyA7ho5XbIGkptI8qhFcmXPDrqVIIlrzf44upBIrhg9jV2j9LiTbkF5qWHobK0sYfE091LqlDByL4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdInNShRrNL_bnZ8upALY-PvLr5h3A_lI0mCe3K7CSYY3XHJxp1BjQ_hfbWsBKQKKxXCAdetXDhOvETJCZ6fkSNl0dohtG95XKpI9NgkpX8VcSO77UUt8u97YfCT45VCpi41l-f19zJZug=s4800-w800-h600'
    ]
  },
  {
    // NOTE: TEC Raheja Cignus not found (Google shows TEC The Earth Centre in Whitefield)
    id: 291,
    name: 'The Executive Centre Raheja Cignus',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/35a0bea4caf188f4443183e38fdbd45d46ac3c66.webp',
      'https://img.cofynd.com/images/latest_images_2024/80bb340ded5db1378e41e7b3627f9864139b3d79.webp',
      'https://img.cofynd.com/images/latest_images_2024/f6d4f358bc53d2c896646218f7bdbf93227c1000.webp',
      'https://img.cofynd.com/images/latest_images_2024/ee8c87f1a626b522eb4dd47286518391c8f95723.webp'
    ]
  },
  {
    id: 292,
    name: 'Cowrks NXT Tower 1B',
    badge: 'Premium',
    rating: 4.3,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹11,499',
    period: '/ Month',
    priceFormatted: '₹11,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemBxwMdilrgs1mU6PaJBBxRL2rvGAWeUIwxl8CsRm_FnLKV_fX6DX0tVtfAm_dIwt-7Kx30zBVdDHjt5jEo7ZSE4jiyvpk7b8XFoQAxp-2RRSD-1c2cUH60WtGIE1VyV7ovmM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcXteFlO4sH3D8QH-bpim5kPMGBqgsIqHfZPb88R4XzohIpMGvPqIqZ7VEvhKg2tK2pa45HUU99gsrT0HTHHzDr5M7N3rSW0ESn7X8QhI28SXGcAwBkVNEPabSrJAisI-MVM0n5pA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeGMLBHi18OyaAGZm5SG3sFFpptCfF_saK-tQr6cftC0EtdVCRRpPL6r7isgmWGoxV3RVWGpea7JetEFlT8NP-eOvPAQrvtcEwiwvlQa7aXegiUEELcMR64kBBGN6uoDWuCzTjhaA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdusTwEk-Iayb6lYNmUm73lFdo-9gRy9kfzFHf5G4JqtsYMIoSxEE0WClncLyxaeg1UUiKG21z_0jjC4CFgtTV1uNxpHEkR2acNoazhg3FhVRdmIZI2owxhVrx3_GZPbFZdcAiuYg=s4800-w800-h600'
    ]
  },
  {
    id: 293,
    name: 'iSprout NR Enclave',
    badge: null,
    rating: 4.8,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc5LoiVzXkhN2nipA4frAollS6A5Eeb4VamWIYb2Lvb9f__7x-nsBpTXFHfpqRU7bmSBKkfu0oqnmgR9XzacHWWVjtbRHoG9Rss0NxzSY0-6sn_1cbRtKG-HFr62u56pzdEBbML=s4800-w617-h436',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe5wBTax6p0svd5hQIydddl4ybZzyevd7MoRApJDFta6mJfw0l2HS7TVOnD3MzT2PK7cw7C51A8zxDJNmuQfB6wgbKa0ykE77xHyWc7-9MNCl0BY-rXvX2C-CVHwwMbwZRdvLrY=s4800-w482-h438',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcJu8Ghzfirem1U9hcaAU9KE1N674dAemLcZ5HOJ3GilJHwQ9Zn66aXapE72JR8OisumgtBJ4e4yf3DW1EzXFQYxVF8dpJpp3t9TX34ogm6fNWR92RLiNpIbgPpnjaQrFi1UuFKFw=s4800-w800-h558',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcq2K1-XVcHbHEvpunTar5kiYSZretVKfDQqHall5JJtMujQvAnwtOJupeStU4NTVcq89EWGlnCR92CIW2KB3ZuIByFyCEzMKZa0lyDOU4k92b972Lu_uGRznHC-MOWrThmgJo=s4800-w800-h560'
    ]
  },
  {
    id: 294,
    name: 'Bridge+ Coworks',
    badge: 'Popular',
    rating: 4.7,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹13,999',
    period: '/ Month',
    priceFormatted: '₹13,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcta--zrQBW5PUn00xodlv9U4kfPODWMWzTFDr1jkjFH7mvlB3FTWakIO2Mu9M54P4Gb0lpJXxTn2o-XBxzfdkJSaIJY31iZG5PY1ABFzMp5TEw2AjoUKVbGFTvLEpkLxwCYgNU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc9YchLLkCjSs-Enj6v3w-HhRsPTLdwDnJhxvNpk14ZG-Na4484keNTwn4oRDLVb23hKPc2Wkk7uKpvUf_isuoCCuaRq2N1oMqulFJdVwz2QAlPhleK4N7XPQMIkJi71OK6Qgz3=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdDeccScWQdYo0a1mRD5yZuDNB5W_I4v4yG1_ERis4fc7WlmWuWthZad9HIOauptrj7fOVj0Xns2ItBAU_eKCvHh6ajSEmDX3xfHAzLcn-JD-ImtUqk2IepEorpMH_nRbyUvRa0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccFLrkVfD52myl2SbPLYPc71P3UBjZ-LAzN8kF1aRM4QWrSUHtgiCgh6bEykwXPNS3F4k0kPBnepYj8fi2ptjUXeuM274fzmsBhrxJBF-dJodou8SgPyeBbtmeX2jRBzsAj0yD=s4800-w800-h600'
    ]
  },
  {
    id: 295,
    name: 'Novel Office Brigade Tech Park',
    badge: null,
    rating: 4.8,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfiptKZeUHa2kLqtHwpv3paNNB6ERu5W9iQaLDfEtVyc7gRA2v5ig7lRw8Cj4HI_YsCxmK76PhewI2fAxg-H7UamYbsAeaiVgSllhDABw0ohnXXuwo-WSnethgHBIwD7xia9JDu=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLecj5w2L6tY47-X_yCizfJnMEzk9xjDakS-ozKVEf9CaTeEIUApgQw944hizPQpXRJum2T35R85egDbnMk7kCXZXG47ABFmRGx_FYRuOkyD1czM28K4yVTZqQO3Od49VzCuCGihyQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfE8r60BsVy1EdrzkxtXqfoin7taH8b7tpboWMpjiWVj9YO9ynyPTOYuNw1J9p9XhqBKvBYXylxsyFOwF189vCS0lCkuchyMl8d4arzmwC_2_iFFVhHpvedDsvYKuVC31Y84lm8RQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLefy0TBFXVP-ygccHXPBcqKu3rarW47iBseZJAadDhgviFD3F7b96qRcr6ej3nfZanmsjHds1B9JHicjCbZYjJF6SuHFx-u4fmt8uyjl3LGKEgU2MPHxSVKeFc86MLYbJdibOPQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Whitefield centre — same name as the Indiranagar "GoSpaze" card; separate listing
    id: 296,
    name: 'GoSpaze',
    badge: null,
    rating: 4.9,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgcu1H0vJEc8DZSuiccylYmavWiktabj7pWGIJQk84l7uZddUILdfsRSeOBd22AFtryKdNxYdDo2EweAM7D1k69Y5TIFtXn9IdvRTHUazGG90DoNl14kbMfclnOeva3rmEShg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfwK0RgF_fzBg5kq3WCXFkwhNTUB5GPvXkteZks7Ar2xQ_SsKNZa4eZLogmbXW1eEsmQZyor9MxZdNeGIu-Z1-i8LbsWKlJHVorXKi_BqIME-F95XBJYvzOre6aIiTRHCqHQS0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwKi0dJRB4ZbzA9bm4tp91NOscdi_ptLW3O-diLOn5Hu_rOpt0QLQfpPLM1ZNDAgxd5CpTvHsvxw-lhsWaMP03wCJh1YvH6KrZ5QBilJI-_P_B1jFhaKNBaomUnCNjtU4DsbA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfIVDt_ZAFNuUZvWEG8p3SmDBvVgJqnXOfkyjMNLM7k84hHYNsrsZe9H20fXmM1Kw95SkEdzD4E7pzLwAAg9ofyKOfLdfNKR1zswD1eqnS_FOsLLnmFr7Ri10cSwaz_Hy4Tff7wDw=s4800-w800-h600'
    ]
  },

  // ---------- Sanjay Nagar page (Sanjay Nagar, Marathahalli, Kadubeesanahalli, Brookefield…) ----------
  {
    id: 297,
    name: 'Bootstart Coworking – Rishab Arcade',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sanjay Nagar',
    location: 'Sanjay Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeD33oQgzHoknTLOCYMkZKck0YmrCJSV0dWzq-Q59q-MPeBomHjq5uVG6a1AMJc9hx-9PlK2cME_iyaMAGVXmK0VbdnfqhVwQH9drjU6A6QJHlPzxyawEY2y9tRbC5AfbM877Ft=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLekHSoHA3okyXqyVWj5uFc7MjWuNlq50Bd2NFCWNrJrOXsP1y0Sz8Lqy4s6P2YifPfjfRG4ArNl8IhTYy48UAOyCfreh74AqpvQikex0m1k0gDvABMk18OxdLWJGOq9kH9x_QhF=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdkE_2EfFaQ4EtlKJ5IsuOJ-35eoWEfrMVZ7PIcdIILxQGSEMTiFmMI7JHP0Gom02U0TliRRQ_Hw4DL66qp-2cHDhsdW_5bd5WWmz2HZu4Rnv8k6949OU4noDLX3qhA_luMAf3aGzTg12Lc=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcpaHgkoIBZaKl276z5xgjo_SOea47_YPx5tZFvVrIikSDuNi4ktb2L5fBJcPCxFJhzb0lj2ujr_S76gS433WJVGUpVz93SsxzTWdjuKGCwBsp5jOTeL5Gy-Kd1C-x4_3MbNHN_TpH4efN7=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google lists Spacemakers at SL Complex, New BEL Rd, RMV 2nd Stage
    id: 298,
    name: 'Spacemakers',
    badge: null,
    rating: 4.7,
    area: 'Sanjay Nagar',
    location: 'Sanjay Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfyBdn_ULWyMbKEM_P9UogSV0JDdwCrALLhmkd5tJKYutac_5N0du7jBLw9-Bd5x58qCrDslsfbYBwa4AdD9o_LboeGK8PFAdGosSdT7O9T3sOJOS5UF1sqOej1rCPKB4bT8pzY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcRutPRBtfGezZ5doJOx7unnfgIApDDC-0CG5uFuG2pMZ5nD8HAE-RAegwvQDnCbpBlHGRQCHTai43EOpR7ZMmUwjpTEoMa_OdAQVgEvgu8x5v3UICTxaZGIAmgbISFa2geUyd96A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc53fnsIgivcRAiMHYYYRBXjPSfpAAnmOrC64AaytcqzJOPW19X73uD92qbmsO6MVe3P_7ZlOR-bEn14NJlsms6AtJvpsY0nGM0vSdf4rBKsLHzwjjt416vMWIuT5GAIRgFw7gXMA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcujVGNFEp9bZ71ADRmxuK7MMTxzi4GfgsRecFELyfhUwK8ZlIRLWlyy-GSyTlL5f97puXYqgtAbszm0u6k_pDaGQ81CL52gNLxN_pOUJiFU3g_FaAXy5o5O8_jgbLMTv06PEKJ=s4800-w800-h600'
    ]
  },
  {
    id: 299,
    name: 'Novel Office MSR Building',
    badge: 'Popular',
    rating: 4.8,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcjYfFoomzvG0H-LyXCbUvriVX6iQOWnlXv_C2bBeuOjr3lUg2Y3QN_6TwbG8YB2PE6o-MvROr2VRoB1ndVoH9FYfA0gMNEzSnDKq9qGmWjnk9SwNgSz7FAfOE3kxgz4jsHyaKO=s4800-w800-h600"
    ]
  },
  {
    // NOTE: 'Marenahalli' is the correct spelling of the locality (Google uses it too)
    id: 300,
    name: 'Mioffice',
    badge: null,
    rating: 4.5,
    area: 'Marenahalli',
    location: 'Marenahalli, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/14a9f08c1abaf9e7f63623be718e1665470d813e.webp',
      'https://img.cofynd.com/images/latest_images_2024/b2469831dba9485284037ef67d7df36474556134.webp',
      'https://img.cofynd.com/images/latest_images_2024/275ce8fe1734c595b3877ddd2d5fa1fb21b31940.webp',
      'https://img.cofynd.com/images/latest_images_2024/04b2dd803387754e3db7f8c3a40f7eb7f244be1a.webp'
    ]
  },
  {
    id: 301,
    name: 'Awfis Soul Space Paradigm',
    badge: 'Popular',
    rating: 4.2,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeuCcRqtQecq2NTLCvV323S0Im16U7-wqn8j-eSKExLdAe-wtK5sWi4cv6Hfg1Yq-V5DtilAxNGB6YfixG6-N_yWCQoonlLsTakGtaha-_JL3oipomMnrDRP4HNCt4yM6LTkPl-=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdFHMl0kmF4_aFMuj1ikpYDEWUgidAzhtLzyO_DQw0PJRFnV3__7wy3scMXPsA1nCk3EJUIt6lvg5yjBf4LlA4NRpXHYjPBg_pA0_9Jd-nwYVXM9gGq_VvydnYKIdfUipsEAmEB=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfRLmCUOMJYpQVUTNrJ-3fQ-ZqUeSTzUaB8KmL69tsWgILXmrNlKVAHhMWSbDWNYThXkLsVzX8SH-IAuqGBEokfWn5eYXntBXsHv9OCaV0cWbdvY6SzGnksuFI7RILrDfqxSMGo=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfiZJu4F1doA_-7Kjj5DCou1_3DESVNt_AJl1Lxd5LO0hSjp0tG3zS09XTl8g8TUHzQVKQv-XGEXx0QB3WL9OWlSlxyx92mV6pU5zVP1dIo8KzaFNZcrQ1i3lP_MsfoMA13VFqG=s4800-w800-h600"
    ]
  },
  {
    id: 302,
    name: 'The Hive PTP',
    badge: 'Premium',
    rating: 4.2,
    area: 'Kadubeesanahalli',
    location: 'Kadubeesanahalli, Bangalore',
    price: '₹12,499',
    period: '/ Month',
    priceFormatted: '₹12,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf4bXZsKX3vQdSdmzGuwT_p3QPfJFNcn4cg1vLJevl3BsTlHE8Qu_HnxrAo-jBIL9Agcye7agUpI7TQXWU2oNxwUZ4qpVPimPrT3i1zDoKuwqnR2DHTvLr4iNXw-HtBMHXMabO_qbyNhw0j=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe78MV6iO7XHJeFAB7a-huwbKQE0qKEqUAlCJDigqWJwklOoSba3FiZjVp-9VUJb_q1JOd11dQCwmxyF6g8aSNF9MOhU56mdvWth4FTyAO1O2xxB1x8ZnRirS15XHfmCVQ9mBcLBXLL5O-B=s4800-w800-h600'
    ]
  },
  {
    // NOTE: the two 'Inspire Workplace' cards are separate CoFynd spaces (plans from ₹6,499 and ₹5,999, different photos)
    id: 303,
    name: 'Inspire Workplace',
    badge: 'Popular',
    rating: 4.2,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc0ZzSOtV1eGGGs9RLoDa72hw1cmnYeukp48wd_KbK4N0oyMZMZ8Za9nWtPgDj6OeyIsSoiV9lubQYmwhvP23R0Xe47LPr5RT72U_8t9FzXH8BeIC1tWmOYBfLlHv-dDf7mJN4oL3J7H5A=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdYfsivcORyscW0uEzFvNIq4Uz2U-mTG6t2738WS58tzw55dEwsUA9jklQ6J6SxAOT3lmJtXDLcVpkzP0WE2ogfTp78m9vOGw-GBlKLDqKVuZEh3xd9hdHfmc0BgHvGUI31eGcIjy47P11p=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfG9aEYKEloOf6xT1wNs8ofmY2xIeq-DyYeWdyr47QVTuQ3NwpYnP5f4lzjs8cgqs0TGI8oQ3cvi7mTNz6EpwwcraIj9F7XTbQNSTAqLMjgEFqtK8hD5dqsSL-0AoCOEGld4xZyyMMSxbg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdu5AvZUUuDGXFVzkJrMCJE0VPLq8iHLaQF2s-fZMjy-KoaWZ0lGmrBKz7OpIzZHpYNM13KKBK5UOZvOdfRrH_Yk8NKsn7qEb7DYIy_eFBVM_pdzlfHqMwEYy1BCFsF3MJb1-KcbXejK1lC=s4800-w800-h600"
    ]
  },
  {
    // NOTE: second 'Inspire Workplace' CoFynd space (inspire-workplace-marathahalli-bangalore); Google shows only one centre (id 303), so photos are CoFynd's
    id: 304,
    name: 'Inspire Workplace',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a96710b7ef6fd393c6dce481d7fb2d0a06bad747.webp',
      'https://img.cofynd.com/images/latest_images_2024/57058eab20d2b0e34934efcac2266608a13b296b.webp',
      'https://img.cofynd.com/images/latest_images_2024/56865246e0afcf54cb792b982b579b1bd3745e90.webp',
      'https://img.cofynd.com/images/latest_images_2024/a134ea0067fbd6ec87cb7090cba316c098154c09.webp'
    ]
  },
  {
    id: 305,
    name: 'Innov8 Prestige Tech Platina',
    badge: 'Premium',
    rating: 4.5,
    area: 'Kadubeesanahalli',
    location: 'Kadubeesanahalli, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcodisZVPkmkY7BaPnfxalHgabP-nxHcHbUi1RzSVQvrfkKfUErI50Vf5kcimlr75bmkTfkR1CDQJ9-hKjry2CwVZ6wHeiHiTMP2oMCIfFWOlLHUSyN4gmjLU3u3FyswXLIlyHoo3v28VTg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf5RTDHtWC52EJw3LHL4cEC6aNgsmgojj32ZD_BXYTpR2A56IGU5Cs7DEudqsTNwsl7i3OJVNTvmP01iSjy3AP1jNA9ouIPFeKseb9FyX0ltR9FrEGQ3p4trhtRyqADt3WLewS8iclnTx8t=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd4nfSlH1daPB16CfvDvISc6RpQ83RZoIt-8oJIeiauNpJ6I8UbjZJCTOPNh2OSiuXgjXDtfWeqy9R0-YCXjTGQNcTmoYlDcLhxb5Nkpf3Oe4xZf5DXp5vsSFerzAVEz-Fj0ETI0qfPEFk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLePi1Ik4WsgeNnjiLPmcIuRQOzNKUUt7EAPBlIVEHc2y7vgNrOfUG85XfWWv_gb-KAkTTzeP2gdLo40y-O-J8GHfsY0rrDqJJaHWDbmWBdeAdmQOqhzQ6Uk52MinO_ZHfkh__jjUtwrjLb4=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Marathahalli centre — separate from the other GoSpaze listings
    // NOTE: Photos from GoSpaze Mahadevapura ORR (B Narayanapura, Marathahalli); GoSpaze also has an ORR Kadubeesanahalli centre
    id: 306,
    name: 'GoSpaze',
    badge: 'Premium',
    rating: 4.6,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹8,900',
    period: '/ Month',
    priceFormatted: '₹8,900 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLerWeTTPb7NFJhHkcYvCk5Wv8ePz8Wrg8DCyuMbd3_7Xpemxrzjn6421VOi6z5FhvycSwZ5np8_nOuTtFUSXfEH1KBh-_2-I96O0S96WJlAjJumruwHTSgpCaAYF7crT5e5gOnL_DfsxSXr=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcbTR_bipZlqzuK9XVFO35ON7roF83EVi5PHi5efDZL2x6y2AbqehG2nZgZ4V1P3UBb8fVpcZpVQ-2poSuU8g88f9qxitiJW_MvWlIPaFjgeTQZZkhTIN43KuIzLdE-POkK1DDA0HFbijuF=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLecD9IM_c35ICWTM1JrWF20e9UbNcz437ymIm472pilXX_KMM2uWqqawy2AjiQ8PCdXjJEG3d2_yyauJsxA5ReGuJ2iY6jhuzO_faNPvRXSbhzWK0z4VgeN2SUtGGAS65ofyYNyYaGMjxm6=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeL2s_v9xwc_1hpYnnBzRGDL0jM1v1t0sZ6GhmzPmvVjAYY9vj2N9AUolFBQaYeE-zZEdKdrG6A-yCFiUYEX8ygpg5anp-omaHSf7lUl6cVtUvhTmU7dwPhsUY_LOWUyDL9ySkcGSukERI=s4800-w753-h600'
    ]
  },
  {
    id: 307,
    name: 'IndiQube Treya',
    badge: 'Popular',
    rating: 4.0,
    area: 'Kadubeesanahalli',
    location: 'Kadubeesanahalli, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcdFxkaMt8lMykRHRgNY8BpX0NBQZxM3taoUYY8EPT42FOLGJhnpGzSwkwxoUDQwgQSeRjNpbsRkCW-YBG3SNZs0cngaOZGFR6DSGoUVwLP6qRltAMohsjp_tygvd0JTDcu6SGJMl5etoJj=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdorKj2MFB2sJrjlBDbW_6YM1tvaz9Piezhgxy3Nsg2DiCwrdNjvP3Nt0m0WIOzUq8STTW8bBSt4msse9C0B5mW846VcW5kgGlt7TZGmGY9EvhSzumSi4QNPAQeeeUDxX5wOFJjkolJ7NM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfmCfWTWe8WoevFln0_CCsCID1p6vUJ2qsqo_x-PzpaFM2M9be24cxjyOtGGNbNnnq5_oeWn35d71eGeCe1wCccIxTfG1DP6lSq6P86wfwQMoE8QA8OLT-bLcdW9Z1iUyLgGNWLc4bwOBg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeJV9pdHQTLdOfVMIlJTdKv35mVzSMhdaWxvE8Yg0Y3DRifA4VBLOpALg7V1kZ3dFZFNfAo78uxp-XFDkC6l7th0ayLhiQGZYqCmhPBIadoZvCW_Y1en2mt82pyVEFewc8pu61ak0wGQb8=s4800-w800-h600'
    ]
  },
  {
    // NOTE: 'Mallathahalli' is the standard spelling of the locality
    id: 308,
    name: 'IndiQube Gamma',
    badge: 'Popular',
    rating: 4.1,
    area: 'Mallathahalli',
    location: 'Mallathahalli, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLebcRD77wBhAWggJktd5Aj4WparWg0ZP6YYNYijEiz-wOR_dJUt1N2P6hHEPL8P0QrAqp-tSN9ptBwNWQkzBIaknorLeIm5sEdva2m3243iSRERHd8Cu4XkSYkgWjIsA1b0e3n2O1yNiL2I=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeJJmbkZzlUCyhRksHiK0NLwiii25Jz8RhwKwbtb9euLHI0qe6REZ3cZPEstUNKxFUBhfgnAZtT4OmFb1JTHwu9MAu0supJ1Aah0gTYYtcm81L2dCnCqPTUaBc3hbuT9gtwAOELAQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdv0U1soGSWQ2HUw2zYLw6czHCe00fke7r5FAE6NxcFPB5CDsiXmcCQkbJt0v9eR2sk3V6AWlITBQfqh52AbjXlf49xF4ee4_3o6z2GGyYsXJEVRj_dPNPq9iN2R6fXgujlnnql=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdLgrr3xBx1CaYZ9ZlJXBfMb8aey6NQLzUi2cd1Z2j5_A06fjdZITrtuyg0w9fguADo8lS1bg5n2szb8wrZiph5bWjpZxpNxg2QrZODMP7xbBN-jUwCo5ldhNfr96WZjXic5jDTD9d8xkk=s4800-w800-h600'
    ]
  },
  {
    id: 309,
    name: 'IndiQube Alpha',
    badge: 'Popular',
    rating: 4.0,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLceoC8LFNRmFftRGQdQ0d82jStx2R9biJMnFjoXrdDDV1jN6erKjOB2dgWyrAtn34sVIgxYwBg1fQtrgQo9qIVeQVZtvn_UJ4lly6pyIw2qpISG6Da6umkoyU27JXqDnYeI9Tg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdh3ZZO1fCuZSQtR5TRpb46Oxumem33eZYtduoYh5p1AgZhadTxKrLobDqzqFq058cnDbNZRuQes1ZpSLhEwAbmStdwC6C2InA4oyxTBY0cDK0ezH0v-yvGHKa1e97tiXixxUiObA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcjG4AxXzW-JVYlymLlN2w_4QGe4NVHUwng2xlTtI_CClCC_MDYSstTgjuiZ7WsQ4ltsPGu_qp8LZARD2WopT0qmlbgvzULeOQkfNxzA3nRKIkVO1sWXirGBhrkBdBYvWEx_e7f=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcyJ1ByLUdiOL_Ed3QmkouRs_EL3y_uFej7QR7A46Udcms2_CtURPFDpFfeH4JPr3caEmOra6E1MJ84xisua3XgMAeyocnQs5cVGTWZZ5uDYPHUQzc1XaXOhpmq7bD7P7TTvA6x=s4800-w800-h600"
    ]
  },
  {
    id: 310,
    name: 'Awfis Prestige Technology Park',
    badge: 'Premium',
    rating: 4.6,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeh-rQ-uMK2zWxGI4hV-3CnH5brYBoELjurRgrj0mB6LRDzOHp3ZGxiFk7S0gWWgHEo4Hd6QgvpEWdUn1WR9I0iXYhJizRbxllaqbWO4uvEhpVofYM9aQ_goxIsajr8DgwaTVyTBMAC6jpt=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLewV9SvZYeAxjExbN_irmT0KoYi2pFwvgzaEqx1njStaN4bGCYKFXoiwGl9xEfR1KKwTLIq8smtV-JceE6vSANjR_ORfz3uKkM88jnEYB6ZhytvoWr9bTP0waldUGkeZyRO4L12AWsI6Dd8=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcis8X6z6jbDvUZJIz1ZMuBjXZpXBJSswQ25IYXQOUBXZ_wc3b78JmthDFUqODGbUgqTpBvuymeTZBLra9R7IJqGSI-T1i0bHhyLDyky917WxWdc274br-NJ6TjTinCWyVjreMYQ6-HeJ9i=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdO03L8BoYES7ZXA4G0tjaerkBIeOfKFrRzZN2Dye4aRBMVdDQQuP7sOh4zldw6mcQg5BQwXuQlzbSU8eHyn9SfzFct8iFGDvAnuALUsTh4TFJU3cpHwElSu6eF5R-BzkVZsuzC=s4800-w800-h600"
    ]
  },
  {
    // NOTE: card said 'Kadabeesanahalli'; normalised to 'Kadubeesanahalli' like the other listings
    id: 311,
    name: 'IndiQube Helios',
    badge: 'Popular',
    rating: 3.7,
    area: 'Kadubeesanahalli',
    location: 'Kadubeesanahalli, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf5JdQhCNtO-vBXtv7DIYCR1VRL5Ig9WDaPwwasyD7NVbPM-nTuODA8n--1c4J7T3dKpL7DHk2d4AyPqx8YdzApz4BrHb372Ctz5ohvnb-3DJzDwsBGdCuMf6DC_dFO3NfTOI_GF4NBwzLP=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLegqZ2ogBeQwG-SxHwaHeqJUKBMHsgLSvxgSsYjj1comHIXagHhwnqSwzx4MO2bHji3d4CDpzje3gHWVhSGm3tJn4X0YWnOlqDTdN6mFJTj7XTTBRCJTDE_i4kzusjg77hge9-LUFTsVpd-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdz97KJKm7oDaC4M_pDvDETTP51tdJeVux1uqKzepPgiGr14UJhgiNf2XJR21pg0ygUoQsVNleaXqaVnmXFig75BMdiRAJiqKnvXe2s89whKy2i-SBH5UqScnJhMNlBVz9N8TLlP7eBfkuJ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeQnsbMmy7A0J16qt4lmG0JM3dmZtb-Wh4EOyfO3-kpmhzLchSCTIsPivgcdWinFYUGLh5R2CxynbRlAUb16rU9iN_zZ_HWzEYp8oCZzosM2gJpvXKyxTaDbGDO9dKDDBSat4DoJNdI2mM=s4800-w800-h600'
    ]
  },
  {
    id: 312,
    name: 'Smartworks DSR Techno Cube',
    badge: 'Popular',
    rating: 3.6,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdioeTyT-V9dOAdheEnKGs3DsVxIYuYLc09CBLfUZHgRB8eDG5IZmvA54zLxEO8oc5JHfoFyUGoGNhuaqR0EovDz0sRbF9FZsw0Adq_bPKkEWau4Ovszu8eQYUm6III9al71bK_=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd7ru1uF2tuO8nBTLjK8qtbjZIV9c2fDq6NnN2ZjkzjYx2M9YNh4KPOV8JeNa0XnUzGdEdYGebFkvk7tQHIEG09BDiUm8sH1FSL9hrLhzcDExLQkqORhIwmEBYo_fCIIRpGfxU=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfrMIstHFk2qgPevrrNIsURPdkunBEjs-lzIHWHs5xWI2GdCLiaU5MYw5fYB20IpeOVP_YPMd8vmro3d14Jnm278frlE1-Fd6_7TNaJjhNZlIDMkp5FGKUlKyHSZAlTxcuZSfYs=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeoQrtutv7nPZt4JFYGsHIWpX-Pky6tfbiUQsL6mQoueoUsb91M3MCx6qX1ygsLG7RldRCNmwisK8VoDHouQk-iQMsQOMcOaD2QcoF52_9JxmNmfe-qJYhleckLNiELCZ3-mqza=s4800-w800-h600"
    ]
  },
  {
    id: 313,
    name: 'IndiQube Omega',
    badge: 'Popular',
    rating: 4.0,
    area: 'Brookefield',
    location: 'Brookefield, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcMt-MzAeVSSWrf19JuRMGAleaER8OEzyN-8k1mlrEkQUFWnxXo1TBf5PI6ZBSC6dEyZYCD2b52Io26PhX-o8m8sZ6ktaE28ldacMC6Tu1GXV-VIq5tSUIKGGAtmRJjHI4QPgOBCA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfBb1ICzpGuXQtSWDpq5DW_rQfqiJ90da_VIeebvrnFtF_9wEnexpL3jKCUANC-dzHHp1ZU7CcDOoonXTWWGsTLtkDXybEujDQ-S6mfEniHYHw2nUGIhan4346DI1bsyUH2MNelObvW_JLg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLejX32IhbAWT1BA0yFBaxKQuj4l6Zg1TK_M_go6xFQh6DviyXpvoDurKOvtEz7plcJ2GF8RJg8p9O58gHmqTp4hYFFL2eEb1LrIZ4vyT0sQ3L6vH-UA60Mv_-O0JczXP3CS9ofO=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdwJdbkZPi3TXFWNV-dDgTp73fqD7aOUR_OjkopkrKrUVUQ8D7Nz2XPlw6LUZVlMB4_zmovTT-VsGsZT3VceUUlvxNyG0TrnK3GUEkJWl-Ezs1JIS-VZ3s14qnMfpEBXoWNVr_T9g=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Jorbish Space not found on Google Maps
    id: 314,
    name: 'Jorbish Space',
    badge: null,
    rating: 4.0,
    area: 'Kadubeesanahalli',
    location: 'Kadubeesanahalli, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/79f308e4a6080b08dbfb22514992a8faaf0f73f7.jpg',
      'https://img.cofynd.com/images/latest_images_2024/353007c1fd0744d716c3cbacf81875910a27e8a3.webp',
      'https://img.cofynd.com/images/original/15df92a5f6f90de0864af68cd5f11c925340793e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/8602be2cc25ea6c37e15641aad70632f2736577a.webp'
    ]
  },
  {
    // NOTE: Google lists Workshaala Cosmic at Salarpuria Hallmark, ORR Kadubeesanahalli
    id: 315,
    name: 'Workshaala Cosmic',
    badge: 'Popular',
    rating: 4.9,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLewHAtN2A1shOQN5-goblhxZO6XSm6--FSPHBaxY89mE7_DYJOswKAd8ej6wUB79fwAz_f35T6g65sVk6VJuxQrdH6CxNpkjzsd2KWBuEhl-cUbRg5xVp9JqJjdN-xLQM9P0TVB=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfTgz89QMT3ziD0O6by0GOrfE3jwu4hMgevMTMZkdm8UUVk10wiJj5F-fzhzDS6Z3KKCjF1Ykl8FGprmMyK6UkAgP6LTm7xCAr8uKfi2cFfiwJ1qdZf34xP_wIT1XFlaL7xxg78=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcl9F8Ie3DBH85iVkma7bvrVWbKfRXtZ8ie214m2S4zvabelLhqV9NcFGeqwzUB09OzbxDs4go2RQHVRpNnFkN6spwSyO8aZZCgyfSctTqQckWJ8NMaMoCO-zXV81eUho1uDrSl=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd4kbOe64IoCaK25IuePL4ZfMMyAAbUlwq79Z0dliz37liTx__PDgbLRqTU_D3InN_04VhZfjOx9wbdJvUsrAnVwzOX5Q0ASbOHvS62Ny5cKOfKTfKqrS10Jr7AHf-w_cgo-W0=s4800-w800-h600'
    ]
  },
  {
    // NOTE: card price ₹59,999 is CoFynd's lowest plan (₹59,999 / ₹61,999) - likely a private-office price
    id: 316,
    name: 'The Executive Centre Prestige Technostar',
    badge: 'Premium',
    rating: 4.5,
    area: 'Brookefield',
    location: 'Brookefield, Bangalore',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLczJUSqgOmzu-Zx0NRO6Av-IoMbYM2ezZCRWt8L8gigOaCjeXV2VtCdxNzDJpkQGpGru1x1e-smm61QPRo9oCgwl8G7lfp2GFGAML1ul7ffA86r8BSYQHpiGwJUg4yWG84Yp4ZF=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeIvkoeOaixlnKMiAe544Cmhc1r6-JQzL_ifFqczvU19ZhnKigJWFLgTr6zfEYz_3J1ZPafmjduvyDD0aXax8E-KwY293IIlQC53wNP8ZmhNyl_IupB1tu1_AUc4oHm4bjbeLWAON2_k2E=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfOtYj3E2W21rCsBYvTxliBG1E5BmLKrBKgqznKCGKqjA5CeKQTG7fWvoWcoVw18uk-sB4lRRnMA9casIbtLj0WYJcK35xppVeOp3-qhDYCwWrWe4oWSWjE88HrUjlQikmFWSU4eDvdxn0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfu8a6aqnd2OlmmljoZOo3VE4JRzij87YV59ZybcFBTLjgH81dBh1JmNznBmCCqaZ1HMdFDeqAXhR-6XTJqFUiV5j35_JDBayjc2FbfuOh-6J6u3qYZYuL7P94-zl211fQ_AOb9lCa1lJro=s4800-w800-h600'
    ]
  },

  // ---------- JP Nagar, Bangalore ----------
  {
    id: 317,
    name: 'Kaarya',
    badge: null,
    rating: 5.0, // Google rating (card showed none)
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdzd7CYvFjNGOaCfUu7zLvlXVxGc9lcgxIIlnR8R3FG9UfXgnXwFEByN4rBSdl1P2Lib8wtLoI-ZEN9a69WEXUlmu5E48fMcXt9aiHqIJRWsPk6jAWqnZwTQqctxuYnpMHeTI-LtA9GWOo=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcr4V8TVwvEPs3YFyIAh6bIsqEqh6X_XluuXVynXglwNi71xRqZh9ClczbCzdJLAz6mS_brPNwDIponM0d6W-2mj2zhwYodq6VYC9hIJidz7PatfEQPpdWuhHej7lo8YgYY-aGUXch-hlY=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdOYwwm00zzUfGYckQIFeagWVOdY1FEMQBZrOEvqUxZazMs_OPMOTAaRR7PYQviX5kx-Q7LH7DdiGA0H7PmGorlcDAkTFCKhBM1VNtLLUNWf9vzLUOZN_gmKSVDwg1s0cnRNOgtnn5oQQj2=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf2PuRn5pSUeHuCwExUsoumIfLDcJNGRZveI6_huZwQWnpaUDJSCkPWnKyOn2kAeoWm7AtjWrT8li-hBsBHuZgqVA5OmYAWkbQfvSBSZQ52PWRx_l32xstQSnkyO3asiUVZPHkSUSd30cQ=s4800-w800-h600"
    ]
  },
  {
    id: 318,
    name: '91springboard',
    badge: 'Popular',
    rating: 4.4,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfz2ryhhuTbvfd3UQ6HMjnI11b4JeLMUW1JJnLzvp4vRTbJ26ATDRfJpFlvMv3cQUrUnL2v1w6UGlJhUAty2wbz105kpxtxosunrdiJ9BL7JzfepFgmPDFHnZdCpTpUueDebYNKVg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLduP7K4gqm7PW7cQ85ApbaTIoIYDVOD6BeCCo5WbxySFg0yHVzmS39Z2yVNi6tDPQGrMX-UcghOAl-dZUPsHm0gVjxpNSnrVFARsJTj90GDsUkEIZqgnUBKbWWbNzKXyMkOmtAN=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeGsD_MgNDPJFdJHPYufRGjnprdKoyAVd_DXavW2yAHr8qjE9zzicft1KWppsk-tCLW7Ckiy5NzGk54uxKN6Qu4Bs2uJFgCHsP_OG_25uZbooQZFs9i8TxYkb_xcJWtMIqNjqLh=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLevhGy7a8cHcADLGAbszvE733JOwlFjtISdQwoOHHE6RT_vyY9YfLc9GoMb_YgdGMQock-53d5wzNAt3fafAVEJCqW5DGal5f6-DWqeG03UFMZG63DbzbZ0Rn9ME0rN2qwIt1h6=s4800-w800-h600"
    ]
  },
  {
    id: 319,
    name: 'Kustomwork',
    badge: 'Popular',
    rating: 5.0,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdDYsPKsERl7Ahd37tjsFaD1ETtk04NTeEPqniQmkkQxlO3KXgLj3WXKhUMlbzr5k4-XShsQNgwnZpEcaV_N0kEkOBRv2yL3eoUX-sqGjQBmYhJB2J5UnZH0APZR4fFY0qK1gxtzQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfbXlCioK6uYtue-izE2mWEFOFywzo4fEGqT1d6UlBhBZEDoQC-Zv1_4Ffg9htTAFUHarsIxhlQ-E9uKDTpBTLv9lj7SKaYh-QneZfEnWx-W8uoLI4bA24rPta27IyzFAIH4dz4Zw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeAmtRlV6vBZCl38uiIRcbfoF2kY3cq8CcRGNxDk2YD1VI61qpUrCkGAFwS2X5mWdVrSjnk2F2ZCaST8iXfDvJLhG0djgrO8kip6Ga74iX90T1yRrt5ojPWKbJtVETciXcFQTTRFg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcEV6wdm23S_ffmvcETOhhVOJg4OxkcQNcsvGkT9rR44yXZEVpErsoxNjhqwXexPBM1DCC-yMugfWqoSijy04ZHabEanUN5JNH5XgPnUHlsSQi4nVJ6WUAVzM2ggrBMOOii8MgPyw=s4800-w800-h600"
    ]
  },
  {
    id: 320,
    name: 'Vatika Business Centre DivyaSree Chambers',
    badge: 'Popular',
    rating: 4.6,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/f76ca19d0f3f78a8295b001fe5e10daeb445e45a.jpg',
      'https://img.cofynd.com/images/original/2dd6b3ee85948ecbd11092ae458e81e6132f8179.jpg',
      'https://img.cofynd.com/images/original/84c7f785e58387ae811743c3f32a40f8a676bcbf.jpg',
      'https://img.cofynd.com/images/original/1d78cd22a815baffca7ce89660586d0ab370ce48.jpg'
    ]
  },
  {
    id: 321,
    name: 'IndiQube Miniforest',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLevN5ZEtscXvS6gaRuSlr4sbSlh7RNiRwcCoUWKkot7AOSBtEWpmLWe_mm-Fn47fZrU7uxqnmpb-1gvOc1_93hHVCxCYx6mM2D_FAAghZT2Epl8lQfcxnfFFZA2UR5NqFXx6cqlL6Kz27xq=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf2zbrg0we8YuBwW8--F29ZpX_pK83Qs_I1MUDz5jBCWo2oj97Cb8CBkqDLwouri4wX-VoYrcHgjYuyetIsdAOeubzrI0nf21hgWmcCgv9LqtK6fY1izqYKAefPBd3MLOCKkOLeRSb6cPXO=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcY--8b41qNV91fu2I8Ui5WY9uw5DJCOre2sjK6lLkPCXsKBd5ISbRkpoitRHpOI8TuoxZ_55a-7I5OEi3LXd0VgfXEO2_tHJPv9me8dUAJ7RU5OxVLnl-1Kt1JnH7JFP4GBAee57SJUG4L=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeuOfzR-xoR3dhEvOMuaLGEhyDywSr_s-Q99_Dq3tbsu0DJzxhsbxisW89RDgwiPP9lW9HZTXRv91yqBRt3537UZLJvtdxN0iboNNaX1pIvdoW5aEO0_kjFvFXTbhkPg7ac8tUcp-Rmr1qe=s4800-w800-h600'
    ]
  },
  {
    id: 322,
    name: 'IndiQube South Island',
    badge: 'Popular',
    rating: 4.4,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLehDqsF-xGPferbpp38PcUcZBhsBX5kT5nKxdoAU-p3E5IN_XDLdCsrQEKZ_gG2KDVMbzkF1PBYkdC0L7fJecUE44hjKeWUaxCY00XTWVpfrgyzUZKWJpXwXvKYZxjWptc0wQ6grVHZCwtG=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdxbeoezG7cYMPfFXuvkMsQwbOHGovaWB_WECvdQ_yYbDl2A-pyXA81zYVTc4EL2tkLVakDD3kgbduzS8kTSPvAO-Ujm4DL4yQPKwQL7Netql2252sDgVtUI88zLHVOn0C4lN4vyiBo7jA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdCGmWTTsZrxGOdVGcNUIwu9jrL5QmTXHf249k3p8Gf8F9GJRJhlmBmXYNqZPNG2ygB7wvB7v7uUFaBj1ctjoIZqUPB4rmIXL0aL5Ope07EAwRLY46Ex-vWWFSnkDQ1OtTem4R2KBa2uiLo=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdB9ygn5arnGJqfKEdYuhghfloQzMDQzp-MnfRgchIdEMIfLW2dhgrfAWJaExiit-2LcHKEuQCzhNt4qfUJC0C-_R6DODr1TkDeX3vcq1z7j5jJZRw7A8oh1Tz2pMHL9Or81VpinALVIFox=s4800-w800-h600'
    ]
  },
  {
    id: 323,
    name: 'Clayworks',
    badge: 'Popular',
    rating: 4.6,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeVPdhuvWxt-vT7HiU8QzQ6_dUVYtYnfLezGsQ1xzFJYMCTSAFr7FXqW7kK3W01aQM0qYkl3kQgqqtPhI38gz1n0ynKkJvGtOBfL6Af92wUkjiXwLhg5urLWsDhbHOS-90t2mtbEg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeEW_f5FSyn41dna3YnzLsYgEfsjXitHNMrlMofzvHjvMK_u1PME1MkZwmkKK2JAZfLqF9akS2P-NXWziprthxnW2DGm00Nypjbh8hVzyxLHbc5UYx09zKsmpqxK_bOU4qbvYAd=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcz2-rcuISuNnDfU5wNGFX4P4VvXM9e9Lm606AUgKv80fW3yPIXj75cFstHawglk0OY4K-DxNgtIHh4i51UHyUHFagUduUZCpzIw_87y3aqB2HCJ_RnxA9nYguUbNYIqTjDIUIq=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcmgGCWNjZVI_YneNd0wnIGltaNrdGLGINazYWYaHhpBBReaKvb4kaSY8Oxc6CwfH9PUAN6mYG_pQMhwW5zQf0esj2idyz4DQTapF8O1BW8h0RNtnKNCssGt0pj-Fg08CXdIafnww=s4800-w800-h600"
    ]
  },
  {
    id: 324,
    name: 'Rainmakers',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdPLhfcF1TpGogEiQQKOHERj6idb8QQDfxySMHxuZ7vTR1gyif0QM_xDlOK5ddv-o6_W2N9UzSASiMfk275eWWGue42gl6zCw5kt5PwbTDWho914Ptsl4MZs26Ww7j_CWhDBXJb=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe0rrOHYc1_goU0geudDOPuNhseMklGjr0HvQuLYIi64vPRsVDee_6zWzDpYQc_6jIBxLupFS1hwhBQ-BvwZ9BiRtcuOQo_qLxoh3Cao--FpClUKUvWcSfrMFwECGQQd2AC9pM4=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeOiqYDGa6xQQ_EVpmr19Pn1ymoVun-i69FOBVqxKNlm-GHfuspDdVMJtnVgeXHoZZ9MkFOSFA00gWOgLJJdntb_pYr3ywElbvwTgoUnQwJtEVGS0pdYcoDZuvLD-xvsMK6zmsX=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdEKDVG3Cpo7IRke27NVswse1voOmo3zSs7MTH4-hHRL_UsBFfswd4G5snCrcQaIfo2AO5tYrSvfC_EFHr60dUbJySDf50ntfvGyw8HzH86ZExhLwSvasmCkZnFCg5HjCsMejtO8g=s4800-w800-h600"
    ]
  },
  {
    id: 325,
    name: 'Hubstairs Coworks',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd3fKcBc6DT36zDcZul3V0x5I5KHEDcCjXvZpS-gNzgj1G3IC68TtIZO41HgA4iO2AkZoQ1SXJEaRayKVom4i9t1RWeuEq32tV6m3zm3O47Ijj-XfqE7egiP6GE6Q4iaxbIizoO=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLevunsUatbj6dI9DO_eQ7DlctbLm_xiYQ6Q-efhKS4_XId_0SamVT3877DvMftoZUwUbudiw9DOrCZ7u93h_7cS7ndZICmow4FwwXtrUiHP1SN7YRzZOWwX5R89zjzNEs_2etM_6Q=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcXu93-7E6K-aDe66oZfGrXFZVgd7KbuS6CBGc5Qwu0-5S9ONQGfSg3zaj8_ym5FFgr9BRvMALtrNvDAfkBbs5UaT-RuNIN4o6kYh20qFBOW8HKCiJEMCt3W0Bkg4XvKyztqUWGiA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdDDm57a_XkxP1G1uC15496fZ03UfBhktni2GHzVXo3LR0L8mt91M3uBuHUrUt_wWt4aFbCCu4Wnz_ImBDT9i4mEMaaXlOuFkqfOnqGVmSJuMv4lN142Qy4F6VP9pFhhpsDDKGc=s4800-w800-h600"
    ]
  },
  {
    id: 326,
    name: 'Nextcoworks',
    badge: 'Popular',
    rating: 4.4,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcs0f3r2qUhoMYFbtnNaOvkgC0hHHvRxs1CGlkHyBKvUwUQZ8j1DmZxJWZridFebVlDxRWWXAunCkuO6j2pzbI6xaAgTW4ZmZef1UDBrfXi06GAT16b6ioE6u_0t7XXRmtA2mbj=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeWIqR9dOf8OHy1TWvxSVEVv_DSqH6sU1vb_Uodm-lNF9PGL4DREpuVDHZhjUH41j3bNDsr-IoZUmvXoeyc7ZCAiKrrpFLWSkOvJW9fHcb7TP_bwI3JC58hvnSuNqZNEJshXMwx=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe6sNBfPBx1mr_QsfnaAZpejbRyoEoUDKJ55A20sYadFSdfRXahjDDv3zGUp-e-MWE8lS15Oz4YkWvugiWgCwmJdFkbxfd_gWClafrPUwL4bfkMii7-qLmPP-H_Av7H6f3KJKw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcfHUoVebT6Nf7ORAYexeUWJbskZvmieKvR_NuMkwmGZepHYt0EE9ulnR6hVy9wegFZkOY4NJn23IxD53LHZcbye9fSHGifASdoUk5ck8RsArh8_GpEFYKdZEe9nZMzYHm8qolZoA=s4800-w800-h600"
    ]
  },
  {
    id: 327,
    name: 'Pri Coworking Hub',
    badge: 'Popular',
    rating: 4.7,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdfTbIHqyNS3eag1xYPbEcFH5A_BC5q6isrws0sJv2sxwY_K9c4z85iZnynDGjbdPQu7SqrLBwoZ0yZBrK8xzMaDSYWHMofTfyZ6A7lzs4yrHRpneNbge-ajHMNQ9HfdFBF0kszGA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLffvl-rz6LQiPKqxCSIku7YbS_6_HwYT_nJKUgKtL896l7NmZhFkhUUd2u7DueiCleQfA5vsSLDQ6op9ht7dAGfs28JQUcNOGIutx49h_lNs0Z2g3TGhpLdFcMglTRVYINgcU9Y=s4800-w800-h600"
    ]
  },
  {
    // NOTE: JP Nagar centre — same name as the Koramangala and MG Road "Golden Square" cards; separate listing
    id: 328,
    name: 'Golden Square',
    badge: 'Popular',
    rating: 4.2,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdBur_e-fEFBJWkxn8xzf5COTgvPluSuJ6sofop5M7FnAxK-N2156Il8obtBeDEiFm9E9WKnyX8guqJ4-wtWLvJsEc_WBfrcIFPKlvAuylBOCdKcjk8IePiCew2DoayqO0TRYaT4g=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfjm7-eOqDRnHEQw6rOVXMEHlGQHG0SbuUXyHmtIBo-BaOjA0BUz8Zy8M06MsfQ1sGxta3ciNsL9qZ_VMXoJFe7Z6BOW5_IHlSvMGyb7LbFfScY3_I3iuFZJ1yooEUOQ4KToXfG4wwjm2Fj=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdoe35addJxJW7j5Pr9Xzx73X6ZyNVkFh5PxEuE8jIC41doZsDzcNG7cvQJxy4q0nt8ScQF2Fzc1mGWxvVVRsuT8msN9ZsgEKNF6L8rcHs9Mf4VU8tK_zzRjOCMtBs-A_Zxez7RDA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfsmlxxIRxmA0jVts0mjg4M9UdP_UJbj6RWngcdFTDnanLxV02oMZyNtlHNXjQDuBUzm-SLVaVQ8IwCN2W_syLhPlK0oAHSzAFjkUUAIsz9V5k_OqRdBpDsB1xGHdQ8VUlOH_E9Pg=s4800-w800-h600"
    ]
  },
  {
    id: 329,
    name: 'Somara Coworks',
    badge: 'Popular',
    rating: 4.3,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0EMfddE_XnlBqvyD-UgPk59gHVLHGE0x51z_WaccO0q_25n3d_W8d80xhk0iS-sPnsis-7zFIhQ07pomOGZIAlu_U4HyRMEv0popYDhweUyB2W5VceTL6v4enOtcyNo2ONUGH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcnW84wM-Y-6d9poLFky6xH1lRFcWLXxdHocUFrvPp5wLkqrAnMb68vg031qR1bMH1_s5v7qT_1PB9Ntunm0TTpoy-w0EYLKuznEDto-cPkT-oYvmijZMcOf67SzO76fQSBBidVhg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfRM3BFeWlti01Lj7MhhGCpkA19N2F1Oq_GLHSa0B7YHsrQnXEhTa4ccIzsHzR4ZW8Rkx-rMOIMVxhgHlvcP-JwYVTwB4khDFrkKr3as-AhX4NezqjcYczQNlWw_v-Zs01DpFIz=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcddFx_vOWB81i3vnTT4uM8nkdzFzDUv-CWbMjn5J2Y4GkGYC8a_EW2f4g9Vt9qINAY2PB3jY_i8OWtyasfEhGiHC6pbarjvDBWcOQPe34nXxbcggRcOGtIfh0Q56BK97faTjc=s4800-w800-h600'
    ]
  },
  {
    id: 330,
    name: 'Sun Square Business Hub',
    badge: 'Special Offer',
    rating: 3.6,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf0luv2Qjb7USLN23wo8yA7HET1COAnih1K20-x-kjFkMbynTYDm70AZeVEdmjQQ-bFonS05dUN2NFRzDfjNLFsWPS58bMzDmEVzK7sifhUiQPotgBrt2HjJfgYfuiwdNp7lGf-bA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeALVkn8R_NhSaOOMC5yvvINX_m6wurqhjLsz5acFUNC9GEQLdzAAFKyzHRu9C02EwCdy04QA9xIyeOQZFg-QKUUmTXB1V6QvcFD2dYdmDQf3uzxpbvhSXm6E6gX3BT4E0qrX4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwEIKEhshx1aX0nGRPENuy3dDZJIVcJ4PPyZ69-mdBoSntH1snuU3vENF-tjztQt8tdwA6EMciZJjEsF6AxtxBn0_zvT4b68-1NgB7hHRMhl4nbrjrLF7G1SaaiiPIxXUhzU1D=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdAa9daCeye0unSTDL3L6INwouDjWOFn-laiiBcSyA9MXqoMb5sdi-L2fhevGPAHxQ3yfyfPRN7E6pEfJ-OZ8p01_7EhAgcR3qdBd6GwO9vcy27L_WwLfjpAvHhG9qyA-WkdzN-=s4800-w800-h600'
    ]
  },
  {
    id: 331,
    name: 'Cube 27 Coworks',
    badge: 'Special Offer',
    rating: 4.2,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdvlXq7ke8wuLStHvAekyp2NZ4JKzehWZ_OeMcZSW-E7V95vu8LsNKcH8c1lvYz7vfWJLJm7NO2Gf--IZni_vtJ7mcUiYW-2OTqG3ES9HFjZtebu3qhYF8DQtS8rFTDQYgIm1ZFlg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcPr96Cgwn2ta0Zntg8ep3PpWKwpOmkxhy_xxhratEV7jch5zuAQlOQfwNcS3np5kzysQhwB33_HprSCTg2iAtHIvOkzNx9Zpzeffd8lwL4gApM2D4UKjLZQpELg20f7ZGMxEvY=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeq8HTjRXSEb4GWT2azECQP0iER6kFpGDiF8UfSlQJ3rzHuAFD4qzJ_Im-HvLcDv09f-yFvl7pvbpA9x6yJMHxMrT6cqe2LE8E2v4sQDZcN-Vc6GQn_SVGn3YSgC8h2jA1_SwAe=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfv15or58lFu07vzSTjNsAuMtGbsx8be5617K1gs6DvwHySvrCeGP0FSztqzNGiH9dufB10eyfdeGLmlMT5kN8POcwkZ5-Wx4ZNX0RYrVolDa_94YCmeXORGNbKMObuJ52CGDY=s4800-w800-h600"
    ]
  },
  {
    id: 332,
    name: 'Office Republic',
    badge: null,
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfA7NFvZKplslQO00oy6uZTzvaG4xczTiLKqocHyB0HiO_gwyw3Q2zkvFHYUqTompDVeKZ-o33g8AGazwvGNFJuE58EYDKPERdhKSQMBlgumTWd_n41h3iGu8p_K8w601ss-LOk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcRnO-5cR3FszsvABK2Q36p6nqnQHT_YnOZAoNAch0Qr8K10fZiU_ORWn_yGpGEGga4BvdFEdCzmH0__NLNMeM1w3-qTLNKDEkCVuCvlNLhFGHQSmzHjU-4QtJwzqGoLEg1324hPw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdeydSTp3RlT0Ry1pGzr5AqVGf-VpmeIQqPCJP4S4lRno0muUqH1JMIxxgVr38QlbjCF8FJdy9-7wvghzQ4Ejs6Z2-TlUGR-nINIyfIRtpnInl-niIq30AoQUOUK2vDSL8VnVI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdkjrko49J65UbhV2Rv9Y0UKj2erqUypfeooPq_OwPU5ilDvlJAv0tB4PT-vkd5q7wrkDT8DUm6h6efAt0wrfhQAbXiq066i-Bb7Ayl1VFEef4xaU9BMX4o1utYv8GtZoRz=s4800-w800-h600'
    ]
  },
  {
    id: 333,
    name: 'Incubinet Aditya Complex',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeD2zQqXcdRKck9aam-1gFJ75mWiUELY6XfUsngtzHfHPadjD79tZrId67LVKo0Xj_lRi6Bzbfw63zyqLsTBUqV8Aq77MrACShkTgQDJezw9IPEQhghfxdHoFHoSeOUzR0UbhrXggkeZimz=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLffXuUlxXPRFjpAz_QKymY0YmwKQbrkpgXqgj30D5r-JlLyRnNyRxAPaxPdFel4UGjBX49nzOQiJjL_RWFDbf1VYnvPM8L2D161WWGTc4g8w8FIfMhMhW5sTgnnNMYjMmko3zfVwocRqWzS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeA0i_L3aIXmPagEncGvlxDq3yFP4nTp2RZcjaoS9CM9AABbiAS4HFF3xrBDuqQOr0mSWw4XU9FxTtWhoRUftmz6UuZ9GvaS7lc6lHh-Z5U31X7ZTviCQ2veZXrr1-qeoVyM4SsUvVkRaI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeJSucA6y4lkNQpIB-eGlxg_M3STrH_WcvsD1YARbzDQAbJm06dXx8rxlCEcB0aHlHeSRZiRmPuebW47n_X_fwvVvmMucdpzyHBnKMVlEDfjifuCpL-7ZwhPYtPguvbhLuAKz8Ms0f_SmbZ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: JP Nagar centre — same name as the MG Road "Flex Coworks" card; separate listing
    id: 334,
    name: 'Flex Coworks',
    badge: 'Popular',
    rating: 5.0,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeWQ8kYN5z-62NxxdnTosB_v0LZYRKZcXxqIOkIwpWsGnqlahyqwUvlk0gnlToxTo5XUabIqXI_m8OJkA3KBoYcBly8m0HSIS__NMERljPHD_cP9FIn798k8mJN9PTBXBH5rOVpRjjr3H8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfZ5tB_TE357-b-UTYx-OZ5IU84R-dVh8rWTPVkuO-8afmGMmbThWZDfB8S6jlgvKwNOWuFx-Efu5iLPLOpB_QbnPdtW_z1mkWs8SoKPCDX4DPiOJGlG0lmQVSLlU45xH9j6qHznosQTGbp=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe2trG6ZzPoED-MOg0C38qYjF_JM1rlIn7MKmPGa9rLfqcWO6BXNYVY8LXr7NKNjcvxKhBnIY_S2nFN_l39aMY1IL95OlyE9kv2YGT7-WMHlibrRkC9Vy6fFVx2zZJIJGvq2H8MkJmobVU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdOcx88kJYybWykJuKtXHvMD1gpBmPvtpATIqsZy024hPC3UH1w1-sWag9ByOphr6yehPIhtCvNKcNN4cDGg9QThcuR6j5UbWNJQ0erBK0surc_RvV9ztFSwRN_1I2ud9cKBUF6y5E3RNM=s4800-w800-h600'
    ]
  },
  {
    id: 335,
    name: 'kustomWork 451',
    badge: 'Premium',
    rating: 4.8,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd1Uw0bxdCyfEIKrj2i_U3QGqBxniND9UvBSnWD49osI5SFmOIfDq3rfvBd9rm6zmuhSW2Lge-hUNMqng6rSCa0cvFlR_E2c6uOvnt5kQX6aerrOivZZBr65MdviDSk3WzvXyCYGjXqJRk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcA2FRlKt8MOK_JM0XbmAVYbzwYU4aaFFahxhhUrDwqJIyPP4FCgPFjFtgnTW7VrSWJQoZhdDghil5As2Su-1EUE398fC8W4VCwZ6rfrQhDdg34yZJU36aS0GbPyKiEhGSOPtjFEnUgjCA3=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdUhrKMl1YE3e_9C6AW6ly-sEmYEiWu87Bf9Dw9zLiQpvPI6q9qBnLqJJbl1xN_MO5XiAdYr9kQ-lvyiLKwP17asxou8JkEE8eQBajJF23NCOXJndaM78iA-rX-rM8qrydgexHv1i_aWNdm=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcKRyk7QMeSqCFZIhs0nmd_jWDCvHKjP4m3liPL3xhNRSA22YNg4TrzTxuoAWi74DgjTTulA-QvEVeEVz7xj6zjha79NiOJ0_36vGUjX2x6pzV9-QASM9FqLo5f5Wa_jT9Lc2nYpf4uu1Jz=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Found on Google Maps (9th Cross Rd, JP Nagar 3rd Phase) but the listing has no photos
    id: 336,
    name: 'Bridge Bizzhub',
    badge: null,
    rating: 4.0,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/87c10d3ebe0a0c30da60fca53548704003979c5a.webp',
      'https://img.cofynd.com/images/latest_images_2024/ccc07c60568d3462a95ccf573da810a1780d9ee1.webp',
      'https://img.cofynd.com/images/latest_images_2024/20c865da0d414aec8e52d462e96155c976c01484.webp',
      'https://img.cofynd.com/images/latest_images_2024/a654e1f978cde3f522701dd126a9f627da58a1f8.webp'
    ]
  },
  {
    id: 337,
    name: 'Spatium Southpark',
    badge: null,
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdwJcywVdjW3bqi8dJMq0WSLpaB8XcAP87QTt4S_dFqqc-5JO1NPjOCRo3_2mkCaiEbdCmPlJu4jU0TWI-wpXzP16ii-f0FRvdeDQnWBqQM9PyzYxcPkODY1tkaViShVkVstNyH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf9fktulVCOg0lg4X25JTxjqbhX5cMx2xEHs39vV-rtjUWmLu70S5Zi9_IWd0ujWXrJzcqzrF8cPbWsGgZqArpcW8Uc13aA4CjRnRrUzwWqHWR7xDR68LJRQ3PjmHohwgcJARGD=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLenSatahWRHqaqxuU7mU_Iyhdiy2TWy8r-yOhpK4qqVBmFDuZ4J2cxLayfzo1oWt4_SjuXDNlzTaviJIXTk4bK41_XmA5_fpDB__j82LnJb2fQjaf4EOLIxRc0FsNPLIm6H8csp=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcItbzeqnek12K9ZkHfsHPuWa20aE05GMKAxciesOevs5MQvIHn9JRR7j85Ms7MrehA9TpjBy1kW_T2CzPk_yRfIzCltk9lGqVCHAZoFvfw83ACGBnP39vbd7ruykqGLw3a50XcBQ=s4800-w800-h600'
    ]
  },
  {
    id: 338,
    name: 'Spatium Iconic',
    badge: null,
    rating: 4.7,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfBHpTwr5G33eYL9FnTG9U8Ru-KYU3FnOmveERzCQvyUxNbPy0pHtRswgQALDBJYsHdMRbydwETKtoJCGYPHIc32HwmRbYKiH4ydiUP7RprjtpSnbQ9VNezYe4NnO0R9aQyQOCs9w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdVHIEOpWPsM_Kkr9jsbyhpZbHn3_-EExMQUkpQAxjYBNxK_DMyegXNj0RZ9FOVn1t0Y70KdgKcLP3eNHP-JWstZ4AVjoV_CgjtMMmSh_lVutwrKxVzUImDdssfyBXYdLOOnx8_1w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd-msV2bGfWWuLYaJ1wdDgyxJAGUsolJnt45rBgs_8QTVSt-5kNZ5WYasGQJAyoZh2GqTv2Wnkhi5cr0mIZ82jgh2x4xO0EacYcqPMLyO7okRR1yNpFccXFbH04fg84CyqDZb-8rg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfUZUWJU_7QKpvkXtYUSAdvnAaexBwq7-RsD_ttSTmO3kKwfqLBiNjsMcXyu5EoY_wszb2kSjJD7hepQGU2aooC_FUrrBJ7gl_MDd7M-cifO_zF6qQ_VsaBtf6yKXY9hdnAs3F1=s4800-w800-h600'
    ]
  },
  {
    id: 339,
    name: 'Hubnxtdoor',
    badge: 'Popular',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹3,999',
    period: '/ Month',
    priceFormatted: '₹3,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdYtuR1xglUgyxvm_IT7IpQ6JzJ8DWWpQ9GYsl_NT6irofgayRX36euzEqDuagEmhINcs4lYxicIDNJBNzk3gH6trvRRLnnjS0TN6Mw8iy0NaAlyavkbRsOZCGyKNejcTG9xAqM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf6cOm4X1GXEkMYFNjvBcOmCqCkfQK1bkpLrwma4Cvu3MhnAodxMzychUaB62gE22F2eC5lbQ-4_r15slod68MZ-eGEW5IBvxJp_EFp8u8S21M0yV5lZfdK6rSIBKlLVlNEYwCa=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeo6ojJVrTIUUHL9YAsSAxCqizpQ18Pe_KGSOn-yK8ezmOkgeLUvZzwFhkaZcNzbQhiaJCXtDiakkj7uBqsR2Q6-tu8Tqotf9QT5fyQ-eMc3ZsvCEREnEV-MgzHv50akqjIZ6F9YA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeYTOr-PNZb40PtNZjzW_1KGjX_JFMRMFfhljm3wnlvEqAzW0X8axpqbvsZy41hKKulC4cAKoXBpvviWpxxwE-QQWLcEaLUblyrk_rZfctLTaQb1W18CIX-iQ22xyOU41bGNN5L4w=s4800-w800-h600'
    ]
  },
  {
    // NOTE: a second "91080 WORKSPACE" card (no rating, ₹7,499) shows the same photo — treated as a duplicate and not added
    id: 340,
    name: '91080 Workspace',
    badge: null,
    rating: 4.1,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc8GnYZuAsSgksx08Mb7nyTb9oYjiwZBIlaXug26wFJQmDd_DGmnQ1M3bEQ7J2l1l-TlvHr2n1iqFVIoXEyeosFUn0RcrRvAVzDqFfSHeoEtdSQy3PfvaZJXeerbKYcVWAmVarfL7E3kX-w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe5awzV6KTTqBAq-9iv1BPShU6L-IPoqWoNQgK0rQ1FMA4mAAZZPsgiw_drN2JGNm3mbNOAA8N6FM8-sLyX2in77uXYwY9fhHgH3bgbdDOkUEAWsek1--H2vO3YngGhgTiCWNISGm4D9aRj=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdjZH0itlBrt_CUss_PdwlYOV_ZTvkdPZ70HIwDOHzSE6YTPeuiGW7DSN7ce_96BZGlSqUXz21xMDWw05kmatFFl8lowpnLQfsByL5TmkLFRBCepakxlRMI6HQ5DfWZuUmwums0bYeRrbSO=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcJNNBj1VIE7KRo7MIJJiYU7JDoB8Xsg_pooC33vkUGsULhygGYmz1xzEf0uCw2H_S5KKQd0Y_Ax5QfCXdKUaerLRURIXZEweFq8m3puwFxiE3yvAPExekucFuOQaNGX9iS-1pyIExDeBWJ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Found on Google Maps (548, 9th Cross Rd, JP Nagar) but the listing has no photos
    id: 341,
    name: 'BizzHub Pristine',
    badge: null,
    rating: 5.0,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bc9d0525e7e533445cbf1cc547796dd07257d5b2.webp',
      'https://img.cofynd.com/images/latest_images_2024/de4347d8f41620559d66af614c610c22ae2d0d76.webp',
      'https://img.cofynd.com/images/latest_images_2024/ab10b5128efdf148142f87434d6a63bf7753bd5b.webp',
      'https://img.cofynd.com/images/latest_images_2024/bf07db2acac4ccc8ff15159ea4f11e1d1863b5d2.webp'
    ]
  },
  {
    id: 342,
    name: 'Metro Startup Studios',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfQcLnoVn5RrlXSQUB_un8YvWsSs2fGmS3Q0g-xLcZwsu2oWUPqWmaxgKUSTJct8YnK83u4HsiSan1Ki4bRgq2LvijmA9Uv_SYhNBKQ2s4odhbFEE6VZsMG59QOlosUvWJ1_D9t5FqQElkw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeot86OycB8eF5yDlCGhD8g68_72MbNq-uCs2f_KuvfFc157acAmLpE_tKfX81SOiMBm9-4Rnz1bavQuppHOp2Jvs-trC3GOc6EiNp99fUkZ7aroiHM_vQ_hJHFamEKwds0SfHKwUumvkAF=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdrkTm8hfQiBjCggdiTOYtf_4TB1SRLOcM68wWn_kqA2OnJvU2S_AbHtJAGiAwR-lpHUAAiGbtrJARBUlGzKyTjpztgh6Nc48eoXsxVQHxywvwPeTnnqH4CDm8vrwz7juL4Xb1knvomOBg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcmik4xOPy9nSz1mQNZ4eJfgdPS2LCigJpbS9rQugjgMh1iX_1Qh-NptEJQsydsTxlzFnh03n1kV3Uylm6oVSH3Nl7rxSC9nVDzxgMZgzvQSeJZMg2XE6McaIZ6lVjwtjqzINRjpG9ZXQd6=s4800-w800-h600'
    ]
  },

  // ---------- Jayanagar, Bangalore ----------
  {
    id: 343,
    name: 'InstaSquares',
    badge: 'Special Offer',
    rating: 3.8,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfvHyNrqCYhkDYxBNOnQOUX_wuwn3W3ejNnrD8gaoLYsDfCKnW09u8Mbt4qgYGzWmsI3egdH-OTTwn9F2yE0HGYD_GjC_-x23sBx1OHkSl744IvlkUnBHZHi2LhVixxDxnIV9IV=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd-Qmj87IARn76tZNilN0DAi51whbZIVUqKQC8o93CtFgkzMjENvP9G91dWnOX8PQnJhJAk_U-9VRP3NCfpYE5V_wmJHiRQLfYeSKWGwv5B42DQy2ZgMhLpwpAET8LroSQO-7vk=s4800-w800-h600"
    ]
  },
  {
    id: 344,
    name: 'IndiQube South Mile',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcMTmDP_NjF0BUwMPg9h1OFo0dJ4H4ok20J694ZyOsT8B8wjp19mAN8gorzQpsbId8_FHla_ac1N88fEBzY_qTK8WT58wW3o4chjER4CWxD6WH_UAZtW01x6YfTCtY1_LhlAo2q=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcTfZNxFOWI15CB6pAUEzqdDkZdkMq6L9XNpm14OGf8roq4xoCuyp66yThKPaNsH57hq6IylG4ZWDFaDvVMQ_cNCeLVUiUlogX9UKSljO0P5EU5g_DSH00hG3zFLRUJ_pxFb08=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLekn1kiKG4CCv0EsfD_nr0IQ7PjzJPpAuMZbmOO1tGIDHrX80d-4Wkrm53TXJH2HFKi6lFsO4QGjmGtdnfPiB-iCzOEpkQfSIWzJluICrEUvKpUh_BkICPE8g-K1VdUpdpJzAUN=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeVr3XXQ-Gj74gKSwbX1Hz6W8snNs0hbMH8zGIyUgyrSWOSyXNxOjKxOxRlpYnsAepN5u53MO39_wj_PCHp2emCOXQE3FVJLo7Eh_tyJT_JTAnKs-bNXz4O-GUMkwtuL0A5R7BToNZ1Gvyh=s4800-w800-h600"
    ]
  },
  {
    id: 345,
    name: 'IndiQube South Summit',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc59XrRD8_JADuWOLowWJG3HAETGOzCXfk3CgDWjvnCSvEdlyTTY69Wp29yDLPhDLHo63o0F_TtaA8WysH72R6jrEoYrrNufOmgSgGrSv39aYr0isfU5Cjl0Oc3Y6rxZS5WePB2TWU1SVg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdBPxLvQYhSUtYkwrKZ2hU7NklQoY_YCQ8V3WAxb_WDJkoI1IRT2hW4kQSSv2rjElmahY53qh_7vvrV0wdzANt9sMznXPmQ79m4oc_RtZ-qgMN9QATm8cI4dq0XWUVEQJ4E5Nrk17vhkVSw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcFcV6ul_NPQ2U3Vr6DFQ6y0KCeO2M345L0wtMlBWbuQlp_ydfGnCxmZ9xa7Y2_Rq1jqwoQkrBAHhGBfG858ESygQCJLzTMw73B1ayVImjof-PdUcadqbnCkXIB5k26GtOWV5WR=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdSd8mAMFHdp1K6zybVUt64T5unT45lfRT7Z9W74lyKl6UokQAEn7oPYNJzLXiKCKk1Dso5yfkwd32Ofp3oITGC76Hwse3mn_dIEM0ror3J6GHy3kg0rkzZdQaz7AG4lRgzbhzhdGIePYMp=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Jayanagar centre — same name as the HSR Layout "BHIVE Premium" card; separate listing
    id: 346,
    name: 'BHIVE Premium',
    badge: 'Popular',
    rating: 4.0,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcNIhE6PdnOsNPdp1L3mhCras1j-QeP3VDT9D-z8EuFfwZzM8KHWVHgBantfWP6czJ6iUDwwg6MXpXaCv35-h7HyydiltMZp8Mj5uYSm1VPXgujATPpuzX5BDbbltDYU1_vNBzzAj70QvrX=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe-x6UHCLZf_A6Lusr4ToctD7s69khG1qlQdFHxBk4x3OzhcY9J9EOhhXn0r-qUSQZe1TCoRga-muhQRRsDLSyxy57k_i6hqU0UCnATr_AAXHtGiptxos8iCTGAerdHYvMJ7f7nrNoew1wh=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf76lF3miRhL7bZc3tCE0M5ab6KE1plE8DTDBCCIdiNz3K4UyCOGTNWgEgDfLyLS-ySHKh20qkKd52MBwtUeEM2YTjaqwOX5uJnXQN_pjem_h4bckBLhbvrneb3ziaSVA7Dh_7WWlen1dDH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdToGGlzvjXpvB99_MayrDq6zv9tONYUUibszUmf9LXTp1ntoOket1CfblpFM926XAsCtrztkl3Sa3tzEM4XDFzG32G8RR_UwVpXWpVEh84tZ9520kUUCcsvF2jtE5VR2bym3YdOKi816i-=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'Synerge Co-Working Space Jayanagar'
    id: 347,
    name: 'Synergy Workspace',
    badge: 'Popular',
    rating: 4.8,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLceXkLyq_nfnqM3dImNxJp0LPRB3e9JmwCakrdvC4ZNU2y0ZGPgHdIwwKAsBtlyIReoqSGwN6qcVXPXHf1ofIzwv009UczKumSua6RtHvo_8c19zDAPBGa3kF4YLrwM4N9AWU8Nxg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfbJxyyCQpNlp-jirRSHBd7QV1-O-Dkk8yhVJ2vA0umH_vqfsvWojLen_t-1jlJyPXl56jvyjCuGjjDSf_0qZApeZDFSZGp5S6uD4nVYqAZ8V-9d3KNleY-1QUiNs4QJvS2JFNO=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcPHeh8F7Sia49olW4HNnawpeG2FlvA64NA2Wu75Dj2CoBVlwbqnhXzXakp4RzGqUR17X0p8RyQWd-x_UqurKpCHCeyROMqvam3ZyHsvAPjyAoScivx66LfmvG1CegKHWpcxNk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcuxnmbzb_6tzzCJDfjX4kamUufY_CcR0X44H0REyt8sW8adZanpM2uKdVjo5QjHE2msSVpZ-0VHLjhqp-Cen9-E7PNfkFSmEZQfe62opHD8n9qT_XPRCxxbuYsXJxNluY2TwKC=s4800-w800-h600'
    ]
  },
  {
    id: 348,
    name: 'Kolab',
    badge: 'Popular',
    rating: 4.6,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdUiw-O1SSOBCpZOl1AHMLjDGu0u9IuT-_EPFN5gs36m4u_cU2BkGoUNkWLJQLTuYChZ2DiVaTGe1GyGzB56fOE57BBRTvmVQpGBoQU4Diq6q0prYiKg17sjXD-jgHRIdDS9gicCQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd0pn-aonkq83Qo7-3Qtp3joWFWyWk681r3NEZpRZ_iixKrDxmcrb46ucFp25ky-DuTmQ3odPc9jlAhxfXft0fiEcEjBvOn7nHT0hKsOBV4ti_ims6UORebFeDFs78UIq4TMi-j8A=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLedZ2Kj4WbMu5txiv-Fav3rQHFPQwJlPW4clQ-YAPGdmYs98XowERioqjqCSCsl5s9zbtLbGul59fYMT58vhVNFFvnx31CJuq2pHIj4usU4rUKpb9sOZsNce7U9uklXeeOWLafgMg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcF7spV0BPdsK15uicYR4zu5iiUBFdaacOpHI10FsoJNtxsnE0jdYNQYJlMk-hDqg0_Hflak-TE5QSW530N0ThmUy0VWmhd1EZ4SpudloHVhBIaR-AVq-mN34gUjwv84zEvztK3Nw=s4800-w800-h600"
    ]
  },
  {
    // NOTE: card price ₹23,999 is CoFynd's lowest plan (₹23,999 / ₹25,999) - likely a private-office price
    id: 349,
    name: 'Specico Office',
    badge: 'Special Offer',
    rating: 3.4,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹23,999',
    period: '/ Month',
    priceFormatted: '₹23,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeAKMEfL0Yz-RDgQ7K78c-tjnmRPpTNiqiEv3-DntQWJFBHyVkXOC4adji-PkKRntuy_KvHnS0hpYfQvAm3ThNbz1uUc1agaKQqWO52Nc0HmfD3llDDr9UlSyJKUjwRGt4IASM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeyLU5EZx3qpflfrAnPxs2plP3vJGXK5-d-5cu9BATsyNsI4vWKE044h41CneAg9I6GlobBgqCD5Ahwem6Z__QD_MS5h830OgPxpY54plF-3cyiRiHwX1QaYMWX39kgqRGo_6w3dQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeQVRNibxMVNIF3A3z8gaHkM7JkptnfqDR7wsbEGO65pA-bRQYozcUh5f6O0TYWAvh9-vxSEfPuX0wjlXDVIRcXhPox8aiZ8NpilNao48VsWzG5o_DhWBxhWrwrKjnnKLlrGfJY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe-leBX4ReesDAp4pxNGo8up-SHGCfHdVQFuHHoOx5sJplGlSZJ-bDfmr3K8iqctua6MTO2Uj66ukCuafQmTTFSFOXuwAiriHrQSq7XboSGrpvxSSJ_w4Qh47VeuFq4qrKfeZ0=s4800-w800-h600'
    ]
  },
  {
    id: 350,
    name: 'Hubstairs',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc97mVKltox0KAEfbDz2j0Pt5ueHkBriezem3kukcxlaG9Bn0roUMMHOtjqEyHxpdY7sZeTyL6fdjq-Yf_ESQTi8I8tBQXMSh1YIYn40BYR-13x0T0J-JV0kkRygGsEPcGGhqiUKA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcqzu9RLIpDCxjWy9xiy9BMXZ9vD6gj6uTaSBrqD3lN1kVdrpOsd_sH5MHGIzkgS1SZl-v8jxDRIjwyquYDGwSHaLUoQBBjLI6iHj7DnQa2Jw_MOMyReatLDZuEGc2tifmyVE27=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf-bOXYcU8OT3MV10UuIFZ7CSFz-FtTw9QMQpvOXMb_XVbSeH-EsMj9MEIJ9J7RlanvsFTXPZFvmuDrz0Rbkf36xJ2ylYTF0EOBfhX4c3z66aqxggigJYe55Y6a9ugaRCDmWMMrxlcex2Qd=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcPhoG61ojvWNd0rdHk1upMaD83ZUfg-wQR1F5-SSU1cO5ovlQSbDuqkAbc8TwfqtVA-EK-4wrYp2ahocEveOUB4FNOpuG3YWp9V1RT696Ezq6Fo3fxX47mcOlRufQ88kc1k0g=s4800-w800-h600"
    ]
  },
  {
    // NOTE: The SharePlus not found in Jayanagar on Google Maps
    id: 351,
    name: 'The SharePlus',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/23307c0098514acc4ba2e373ac0ee033e49cfe08.webp',
      'https://img.cofynd.com/images/latest_images_2024/6b142a53bce5ff405073226a1680e5f6f250cd38.webp',
      'https://img.cofynd.com/images/latest_images_2024/2dfe9f576570d14729ff65d6b042ae30abd8f2d7.webp',
      'https://img.cofynd.com/images/latest_images_2024/19782e5087387faecb2e310e257cd0e6d9f7b992.webp'
    ]
  },
  {
    id: 352,
    name: 'Co Space Connect',
    badge: null,
    rating: 3.8,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLduvUmKhnZRkuIWC6u-W7DMQp9Bfw2fG0aYSt-gFTeNGpFli7mzdTsXthssi9W-b9UiqLYksvSufnxfBeKnGrI-5eqXyoSvvzLwomVy36NCWAQsQQUooYptYyIuivRf41Tn6Sfg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe3Y8j47XuWymBahBripUWRlE-IlOjeZdtzSfxZn4VdhXv0GNn1819x-IQgTBtHqfATp6f6Yv6RMiXid6KVEVSqAIofV7JNEHDILzzKFNynIMwEuVabq73DAfjWgi9O3IknNBc2=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfkJZVNYMkV9FK8U50BKpuugrAFx-6qfWyaVyon66E5jFLCDPMHIAjYf4WvmsYpcsrl858jNZ6tpAySoysX6KztpBurDSsLC0uwm0Q2jWhQGAyA5s3AvAtwEzc0C7NrlgCK1Z_k=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdyp5hE6vFVfoYMMZlf4V1wOdB0xCalo_3CxiE8rMy33KbxO3F5kG2AoDIU-qCR0rlBfzefTAZfQKkIVXMdpMA44MjhWuF6blj_v9wFCS4EkCvCKJpAOXn5dKNb-TTOX2iny48M=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Jayanagar centre — same name as the JP Nagar "Office Republic" card; separate listing
    // NOTE: Google still shows this centre as open (3.9, 22 reviews, 27th Cross, Geetha Colony) with no closed flag; one recent review says it may have shut - unverified
    id: 353,
    name: 'Office Republic',
    badge: null,
    rating: 4.0,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeI3TAjSuZHuAP1-hYAWuJ1elzl4a1lVIWx8Zd2p3r3e0JMXbEjDYUrDj_cuPKc4g_lOYQu1JHVfnqz86MlFJdVrL-Oajtr5cCE5so9MehcsdB6kqzL5n5KrrgSbyGlIAzWiyQL3w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdXrzesTYGPcEKYlhvyV8swl0QuMfo74tGV6qkArcU76Hai6BZ_amw2T8Qs3-pReTI3sc1yJ-Uv4uUl7gitFm_hTvcF-7l8XGmEJLX7e7f3IjG9kimdNMKNOXDfOD-ZP6BlSO9CmA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcufjILcUAyXTKq2JyMKGDQVMilHdpeC8zWD5yY1qr0c4WYqlZ3Hnl24TAyiB_mWGD6XpBxvmYyh0f5eYyp5vVo7lnfjurhSRf1-EKca55PXtwaPmathTAPiXPdVNvX8ImwojCrRQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8z6xnrHELHWCoQRB1LtBn3t5z2VlwfjP7f08CG3SApZAkrB3r1EzXhWfDByjNPJzH8lNYa-C4JMzt_mr-sviYDhIqTvzaCghF-rM9NW49KxUMks1ZfeAEEln8qkHh_YXpRIZk=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Creasma at Vakil Square not found (Vakil Square is on Bannerghatta Rd, BTM 1st Stage)
    id: 354,
    name: 'Creasma Vakil Square',
    badge: 'Special Offer',
    rating: 4.0,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b31ef2d365531dd0da2ac23d03e2a45a8c8052c7.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ab97f718cce4a87b70b2e5a0932ce5c39464d99.webp',
      'https://img.cofynd.com/images/latest_images_2024/324fd2a158f5ea0d71bdc5dd179564273d905506.webp',
      'https://img.cofynd.com/images/latest_images_2024/17df90a30c01301e1dae4fc4e257c61ab0a1bb25.webp'
    ]
  },
  {
    // NOTE: Jayanagar centre — same name as the Whitefield "Evolve Work Studio" card; separate listing
    id: 355,
    name: 'Evolve Work Studio',
    badge: 'Premium',
    rating: 4.5,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfBqM5i-6nCSegFMcodxv3KDnhjwKwgg8qnvGDbeLUBqz0-_z4Q9gY8PfaoUolzJMYGsT-AN5GqUQhSOOPo79nt-D8fANmxFPiWq_lm3_unH81wD4ICcgDMiq3ogalf7i0YWML4=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdDXJVxOrsjFyilCuHdD8kZrJ8bWDI7RcPExWjNdzBblddT_klDJ8M_RZGL9VLzSwcz0Xfgjqpl_AOYxrH_fYt4yAM20R05yUq5pxOugyrO-sAar3LHW4vLNXc9ixe3FmdhqwICVQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdxGB73XCtFVzUeZPMwqRFhVVD2qIMEU03rh9NdbK_Yg3q_0cwgQOFxvPCwj4qFcMnebR5b7paQpfiBv2F7bJWQHQtX9CKfZ73Z5krNLLalp18PEp5fT3tGjb_dyf-rwLkR_te9IA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdzY7n2Xa4jp-cTAO0L7hpBoMN1eicx1spA6Dml3uhRzhBhH0xsQWH7FTIp9hStcqOC6DvcjUwpSt0ADUl5cAYWQbeKWb4WRaNGgj49arcY_BaswK2oa3HExS-tmbzcrYI6-iXp=s4800-w800-h600"
    ]
  },
  {
    id: 356,
    name: 'Indiqube Opus',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc7QamRvzlzLjAzXXB6TydvwYNC7dY7YPGWSot5OZpiM3IhGWipvR8uDcsZUlBKiTQOezBzOHn8Lrby-w4eZ4qkljbU0gZMY8bYdsdAYLLYmt1rd_bLtE_OVRC_dZg0Jh98LqC4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfWRw5iPN77NkcC64nt9_1C5hvThfCWFqvtcQjwE35MkNpEDXXGL_CimBzQyh0Y8NxPnECI-L_Nq51zxYNZBhKvrW7Z82YyPts2sAmEzk4ufrwN41o6ZC4KJfaGYB7U8kgwo9VF=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeVtdCmg-aOwhsEwxjNKzD-L_xbh4SOFnQiVfO1_7eni7k_lIbC7E18YV9kn-eDX-2P1qfZyGQ1NWTW4yvODRoRgMF5e5GPyI8Hi427_5qpW75YPDzQIlLD-QRJnyyHPHTPzHM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeYVly2MtBIIt2Sha7_BVFSLZeyXpuyX4tEDd1r754Z4Nxo0oguyOlySE_C2nFYPxoj5G4RWNwBcGc4JgNhNbRwl1VxYK4UJ7I-Nn_MXzzOEISlSQyBhFcdoslLRzH1rlKcn73nUbsz86I0=s4800-w800-h600'
    ]
  },
  {
    id: 357,
    name: 'Enzyme Citrine',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLee2cggzrVxOuU8-Fpdk9DRGKPIrq92abK3JReswC-sJurM_TV8BqjTzxR874qhut2LR0QM4g_ZYOht9zpP-XJnBahqX3xiFlBlS_m_aL8vFswyZK3xxyBRO6MsYNuOalY4bp9g=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc9h7Uqwvt3fWuAenvwzbGnJxPklB9yxcFGY2j8yHF8Y7gIWNy3WgLC6HaAEQIs76GMOne7DJty2R2IeBvXhI02Z4w1j6m0OJNjnL_B8_2annmmCeky8KFPjLdPwl4_nwpGgjwKGj3DtNjv=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdVZJUbZ21U3UJgxSGNJN0HBUBiBaw2cTU9Qydv2zhsH3Ha2cmW3L4dPhQKgWYCG7PSxqAQPfJpWeYiXso_XWGwtuf6fZ5UR25pWRzOvXaRn1HRGGpcwFt-zV_hbr-AvWo4sQTkE2sOMIo7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLepohIFyyPTVVxMAQ1yuCZ2Ot9x17PAn-4zBmkF1nhjUfYisRMfBzkNFsyJYq3Bnuqf_rix3lN_mM0t57wF031LYztRfnYOUTWafr9Isvg49qLRxrWHdzrr5HazWvACuQeZd-VyrS-DgLU=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google has only a building listing ('IndiQube Marriott The Courtyard 2', Nagavara) with no photos
    id: 358,
    name: 'IndiQube Marriott The Courtyard',
    badge: 'Popular',
    rating: 4.6,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLepIvsaSmTP0HHXwNupCS4PB5-Qg9CXHNnxG3m9Tpy8JC8GwzbIBELmmHeJryQBjMYBLNHLONusHa9xxY_y9loKzJW6xRJqZGrUVMREBR1zIum_D58x9Nufanhcs8AnhZO0EmM0OLARLdM0=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeHWxiDOpnkpAdzbHF7pRS8gXzVXIeJvZeK81SE4XcYCWE8i1HzXkLkhOsD0EuS0OZu8djVXY7pcCWBcaeiGJTPELMjgLfoJT3vmhUSxPD3hgtl59Ju2cVIZ54BPsvO2WrikOA5LFXZCNBq=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeIpTchAB6H-rljlBp7tF1A1rl7Sl6yrXCbB7KuTcjIJDow-bhwVgorjJV76kwYwyaQXlun8_q44wFp6XgSXLKuHHmZ-mPnslRuvMeoQXPzYlQjDYMaRSgU0ZrMhOrtFHliOOKfiTljch4=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd53qvvYpiDh6Mwx_NylrTNqgE9R7aOjYigDge1cUQIv-omkXBshkFZR53iFbuLkqmBDvOpH1hi_ek9Bh1H66yEVlhrKSj5vRGutrVHJnPAkzwrRd-yzgpmuclo1HlyKSocTW1R=s4800-w800-h600"
    ]
  },
  {
    id: 359,
    name: 'Enzyme Triumph',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwusz1aw14rbLLpqwcYme62WgxBLJ02qKszftsmfQ_u40PA8O078luqPomV_AjnaXY__KG6ojlYiWqxv1lXEOtLL7-7LXBAphtF_UeD20ljqZAQ0g4EwdHh7avFonuRmbuGYr2=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeMkUMr96U_iVLmyLJtJcG20S0ZMIOmCGOtXHu1-QgkO5QDEymWBaDPcSovsODHvZzPu4yAR7SGXGk3uHn6BTnmwzlihbG4fwWeDLeKEmtR4buMD4Ej6DJmd1B1A0fl0CyOeu_REv7pfosR=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeajJ4qAxIrJCnGSv5b0KLnxS-fdET6iyUm2_H4PxQzB0G-AJOu3jOgZBrqfk7T-YeWMO4RPHgCPOc-vyml0XkAmX3t7azT7YClQ5er2-dzciUW1RMxVr9IgajgOHtkNzJlQsJtnKfwZJ_O=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcoRWKofDZqCuKuun44agj_Dgna4m8yxwuuzxlyHqlBNAho2YAoQUYwR1TU1GemYWBpf_YyVKJpQt5p5FaoS6nbwYZu66j7liboCvVD3dsE4z5D4LF-k725iqT0rc9gJ1g1msI=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it in Manyata Tech Park, Nagavara (Hebbal Outer Ring Rd) - same centre as the card
    id: 360,
    name: 'Regus Manyata Embassy Business Park',
    badge: 'Premium',
    rating: 4.1,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹12,099',
    period: '/ Month',
    priceFormatted: '₹12,099 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeJKWByJ7XjlpWZd2VM9Cp-eU8mn9jySBmwx2cm5mE0c9C-69gszi9V4XPOK1aC8JpGV6onzaugULwQpVKwb6Qjg-5OWb_f4xxbIOrsRErOw0RF_P6H__aDl-Eew6gQX24vfVSfo9ZwxgJb=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfQbhGyDkHxcOhFNymrd0P-QXrGZM_JHw_e7hrwH5q0gerMkZoT5Kpvrm6aDbOfcQ3j-ySPevVlgvho11zWbPSDvYLd2RfFz8JaasQPwKwMNK6nhmCX64nDd7t7kD4mUYDQQ08DqBAPzqtd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfRFwFFTA-1cPsikv6YuEX_0oh53crobhTLDITVzJQa21qqq_GcFzSvdznqXvGy_krP35ru8w6osLKJjaMrmdBASwBhNCyi_xEoZ_nuGXRWWfn5cpZTBl3cAAW1g_k2UUIRq_xNG--grOGj=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeqS0H3QuHFUoSe2JAgYKqoa52wAUdSLAlt56kYLbMQ7ZfG3_el6e49W_99msn5s7h89jmOIW3AHrASd_CkPA-F8ManbE-j_M2piN4gl06Rjd15eHKWMGwytFnrsUxhNbksqwnwwwYoH2pJ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it as Smartworks The Cube - Karle Town Centre, near Manyata Tech Park, Nagavara
    id: 361,
    name: 'Smartworks The Cube',
    badge: 'Premium',
    rating: 4.4,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd4EMArR9PbabVPKE0d7RCMornnMkNW_0qc0-gRE9unQT-3Y8eBTy9h_tXTkP6rgjrG0ukZ74QVSKlvmWIk-D6xVfd_goHwqegaJYA7x-3-V3iCvkZ2QKnb9afusobRKkgZH4WT=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdQedXvSvU9vNpP0H6oIo36tfCGpNukb8AfFz9tYXjKqFri6A3BMAn3-GPESEHHbV3N0s6FPGacO_CkO3dbMgaszEhK-qJ_oIUtZHmubaX6aNuYnH4EIYoASaezD-l5TI6ytyIdxQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfKCqwEZtrmSYAX3KLoC0sWrR0Fy8URed_lo2OXK8-vNlSa6e9mCMnJPszogIMuCBDgOCDBn-sqYE4L-h2pkIw5PHIUT2UVIFZDVQgnL84tDQc0mSOpd2p8JBZL2Ew06Vvg3JnXTQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfJuU-TFCHBZQGlpgpRy_rPNn_Bg6bcB2ZHvdfFUXt4DtPShBszkkcPa5WJTvKhT2sfJPoT4Qc6F3zJrhR_y1NzBLOvKklOPVOOowSiTxO1Hi5ErCYKpJKsn83zK1xO1lFSA_TZUw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Crescent Workspace on Google Maps is in HRBR Layout, Banaswadi - not Hebbal
    id: 362,
    name: 'Crescent Workspace',
    badge: null,
    rating: 4.9,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLckoudeGleiBgDlXJBHkXYgUrZ3Kk6FnVYi4JbtZ0Y1bpNrS6FJ7H4bL--lUZ68cLz5JvyXgSUQDSoqA5v9_xC1eQsSHS8g_TwhKCpWzQ-IlJju92R_curPhClCThoFUHvNLK6MlIPf1D_h=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdsBWo-BP6vZhu8g0oc_dE8i0HI8mtdYnb0NL_ByvCSO3XD0MSvekI-XuRsPtxHSghmpoVP36VWd_YVWf_vU6TADT7u1GjcFeATEndjJ_CqOydya2XoPonyW7SS5BGco8yxa8uH=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLffQtIMyTyIJjnm1PHR41kJ96XKrPiHroNyosDobkSURaDQfsd57jyGyYSGqrLSkcYv4KdgeXat0fKIy2qSWeuSDQxzlOQNRa_FK9OReCTc9PdM_TPMlhJWLWT2VE2RxQKUwjm1=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdDOe1s_oCcSSTBTyMiFNXj8ecm-ZbkDkSCq_spseL0qRi1Hz0mfbEOu-mfcaN6RL2NElQa8VKvayx75-LOueR-Lceh1G2V-q9Gy-zRq4zCZzmU40Y56-XjH6iOXM5XrsOQD6o-=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Photos are Google's 'Concolor Interiors & Concepts' (MCECHS Layout, near Jakkur/Hebbal) - matches CoFynd's description of the centre. Rating is Google's
    id: 363,
    name: 'Concolor',
    badge: null,
    rating: 4.9, // Google rating (card showed none)
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLewJ70UYXJyicJAohiBJ6LQZB0rBulyIW9untnAbIkGkL3Ph2Epo0dZP-8_fZr8kRELRA5Pz8b-hdhvpbXP0ojRjfx2FGjdpnWw9Pdeldl2-nFL-zd4_KLITLrHowkYnwyi82Cx=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcqn-v-62kdEUSDZCrGSZTR61B7csnnPlUAOwksIm5sNFRaF0LrU_uXjeaDe3VzER7QvKiPDH0MGahZFarmXLGNXd0d1CrwNy3JDl_c0Xq_TVki1VtnVNHcLN0qmUzIlPoSQ5zTNA=s4800-w800-h600"
    ]
  },
  {
    id: 364,
    name: 'Anthill IQ',
    badge: null,
    rating: 4.8,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdUxZ69KEqlFRwN7FEDY-EJAfbqp60hPDr6ZJ_SYEV_VLBLMQYWRrZ8nQD9Ru5-qaSLYycA7nJMqxr1XrvifFmAEXQSg-z5t9Za7OoV5WKL3d-yAi3-_OHhHaeB7Jxn5Ae1FLKzeXZn5v9V=s4800-w800-h468',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc8acO4kxHlLqRhSt5e_13Mgto_V55nhlDYdFLIzeM9yByhAWsbP5xrBuVIdf7i9dPaR0upkSK3ZOmkqaQKWgehEhNx0fAcc2dPVE6Xi8MDetPznZje44QTiY4-V3e9rXSVnlPJ7MMSi74=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLezRjk1syT7LMwgA6JcCpLtJaPqjPwpPsqvOAfXIc7RJuhoBG-Mv0eDlFo7wn4z_QWNg_-USThIB651IESVQ4SY6eD0XNneHv-CrL0YhMnYGY4jaRCzwUbZ4rl6vhmHrwqPA2TJb3JsBy_w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLce75CeGrolt5rPfDPtNf6BfTrYt6D20YJs0rWRCEUVc_7-yGozW0e2d58DdFlKBujMuikcUddU3g45-3aG1r8tHFbr6L8MRdSDLDn3XS97fejxMDelajLk_0kCP0fkrJ-i4dxs9B8wsY4A=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'BizzHub Workspaces (Elanz)', MSR North Tower, Manyata Tech Park
    id: 365,
    name: 'BizzHub Workspaces MSR North Tower',
    badge: null,
    rating: 4.7,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgLiIbtm05lBE9Nb0Vo7eNMhd2WuIlYFLwlqL0BUh_rmdGaPOZJ0IKlLzswtfBOmAzFjcz8tqGmWRpGHT04BmUPcQFsxLJpbxeGw5zMT--eBokY_AfEWEboLVG3GXEsHqz0_fd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRZzP728CKXH9lVgQnBTGYHmsacUoh8M0IiW5TqaXkcl4NvLaNAc_5LRfVCC4ESPptJn_dDLkIxcc7N0I1gjbWH1wzE2eqLXXKxN0nypebbh-4tLFzTZbLfPH6oXXTtqOxtyM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdzbO1hrYd4U4nJ8XKOFAYkYIJpQaktJzHEVIDkkvfivZ2v5hEXhRtST1F0oS20XIE4u_z35tGspI6_ZdwCfiBM0RJkFugPBSqYBi027dSpr6cEsAkum0K44TEX2GsG68qCrfFY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcKh7riE7p3OUl9nMEgmKut3jFGhoQe9M2Uc-jgSZCAvcEgBHt8npFStTW-QJVLknq_O6AsLGkjAjg1qlrmYpSWbvxRGFVRNGxz0K2dTMJCYK3Aiyi7kV7Jm76h0mNff8vPq5xq=s4800-w800-h600'
    ]
  },
  {
    id: 366,
    name: 'Awfis Kirloskar Tech Park',
    badge: null,
    rating: 4.4,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcxaNux-EEKIzFtKMZhL04ecX8FnNqjettGqpo1JJ5u1COqlR43kaFzQjLv6loB5xJu_4yfGYMEZrnlZHuJDvnmVi9rtHmalqlHc5LKS-ENqIwtegrshHlNBPtlfgV2mtFjPSI2=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLftXe3whOle9YrgCScWs8l6aN9YQbh-TFOiG5XnlPdZ6yoTQz8e03DcpBCBFXnRsD6x28Fh6JeeJjtYggKCG7exkIBozE1RFZiL-r6eRk1Ff1SwjB2yOCLB8ythjEltJZXCWsI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd8df3lkd_NzLB9omEFE0QgnpXzzRXOTPyl9F9UNODdvShcTYm4kcr0_18N9hcXrbCZxqmjZknJ7Cwa--Cc3jMgB9mOEnvcoY0HSKPfRWksUpyfES_7vOCgOsQznx-6jlGIHNbGQw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcSy_RnS4HFvT4hdeKIyPtDF0FGG6bQVYR1gKP7ZMe2YmG27vseOvren357oxgsiui-DN72hic9oDGzUD1csd-rtmC5bCdkSFM4hX1ihdaqhPf2Ay1LBe528afSqOxJLEvsAVsm6A=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is TEC Mfar Greenheart, Manyata Tech Park, Hebbal. Card price ₹59,999 is likely a private-office price
    id: 367,
    name: 'The Executive Centre Manyata Tech Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeNupq26WNs3RuikBiTGULxYWLytyA-ejFC7wGJBgDGB_RLcWc3ULx3Ccwt0DjYt_H1dlf8Lhyvn-hF6Nun3v9gHu8IFgieFP3yLLoKW_MqTbqYxnqRUqcoFrM1qrDH7lTKrV0h=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfP9YjRbgJw7RGkGkkaWBchpgR9bqFOy2fum1zUl7mcdcDXfmKz7N1kzRClfkAJ02iE8dp7O7GiF2dB9QfWGour4DR1j3jVsDtQmcnnFl_DmZiVJAGIPj3s2nFjd5kWHgPHrjorCA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd8GGWxiCVao-YzcwAw11zrQ7kcr_4PZXOOHfyXCHK8kdUNghn994KGiRVWotYkojyZXkIKK3L6gKpEMEL2CiHsOGmICNmIUx6nyDxo0hKOynOOROztdPinEc6ulpAhBscmisV0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfPFwt1evkBKmBPi4rRXugES5O2IjhRxkkxwSlaxr6zXYVs2d676smBow1tLJcwQ4xEmA7Iq-37UAfwEmpYJFK9D67mNhSVzcVdgvbdkz65Lc-R8QE7IAL-_TGbV08dw4zUeI4e=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'Hustle Space Origin', Kempapura, Hebbal
    id: 368,
    name: 'Hustle Space',
    badge: null,
    rating: 4.9,
    area: 'Hebbal',
    location: 'Hebbal, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfCXGTvv3NQwwoVuAfk04tAFxVldaQ_QM_dochj_BkhttnYn4uTPA8dNhnEr87r3lrQVLrog87zPKH6yxP2NxcXGYTQFLpEF5ZMcCgfajqU8dkVTQmkUvAqGaPrE6f_xx-UNiuz4Q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfz6_e2Y_XRqpYXtW6sLV79wNTC_bxe3EKIXks_9QXVs0t3qbx00lZYch0ZZTXMPRL-tU5QqjrieN3_7VTJhO-ACTrIPoMd8B7cINZ16A0ADDF6QkXU6xkrxwpZzRiF-6OQb4C-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfzsnnIP_xTflSX-9gsoVI9tFWU8qMJZkr8Q0DfzoMlf4_0d49lfPl98NNGRELVQMr7c0OyrMRonVXqa0u8KYu8X0FOKeQ7O_Xo1NJ83jeODH1UNmE1cCXSPSOPBfiKxhVwggeU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeER9lpfRhtDhvPPdJ6CMNqLeRJ1T80eW9SGmsT1DHXq00DxlzSYUJ_arft7bwThNVHkaRmL7uIP5tObdhMhLbpE7z24YRQ_wb6KvyFRvQ9hq0_vDISftnTXiWE02hvsAFxZ_M=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Co-start hub on Google Maps is in AECS Layout, RMV 2nd Stage - not Rajajinagar
    id: 369,
    name: 'Co-start hub',
    badge: null,
    rating: 4.3,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d51a04b4a5e990898cb53a9ba8d3718c345be62e.webp',
      'https://img.cofynd.com/images/latest_images_2024/4dc28de141f21325d28d7424e6eb245938bd078d.webp',
      'https://img.cofynd.com/images/latest_images_2024/1eaef3904673c3764c8e9b2ee5aeafcc4331064d.webp',
      'https://img.cofynd.com/images/latest_images_2024/e83b90e255972293edbbaecbaa704233a6ca63a9.webp'
    ]
  },
   {
    // NOTE: Google listing is 'Workpodz@3788', 13th Cross, Banashankari 2nd Stage
    id: 370,
    name: 'WorkPodz',
    badge: 'Special Offer',
    rating: 5.0,
    area: 'Banashankari',
    location: 'Banashankari, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcgDnLVJdhczEAuF59WCNcvhbY-62fIH4zKgeXb93u1R5JrSFY741tSPINJyXA-ovUcM6jGwyM3T6D-AARFX0C-Sxp44CSoEkRWsY-23sIGDM2cqA8BaA7kzrigw7ONB277xNfCbH-vT0sB=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdWxIWDR93tBcEWJxtNWCGXTVwLbOAQtzLvVGaVh_7f-1kpd5fst-7-PFD_CSocvQhMIEBcbnyfzqNXtOGsFg8cuhcUEmwwRsBcRoOy5L_nPzmmB5HKYiBvYXSfRgBYMouQgr8GbTvL3ehV=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf1iKAjKRHKA2AJwA6_Rly-20O8vyHjP_WQgvsC4YE4ysM7-wotFgsd9HJEWv7lOeKR3YDRWIU63OTRHd07Lwwi6bk5_9ZS_5Iv8uzgvjF8n4GNtPcKVtmZaFt_hKsjhg5MPnxTB2nLpho=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdNVrcu777MQgbGIL2EfFQIb_EYETaXOjld6PYl_Ecd3yClPTXER-m7rPY6VQlG4GPuTYTMDB0RjGFdJlhHV_uVwlzwQuUNRwqim-VEt2Ru34pCIwSSX8EuqtMdCinhPrSm-sCXaMuiYYau=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Sree Devi Complex, NAT Rd, Gandhi Bazaar, Basavanagudi
    id: 371,
    name: 'Spacio Workspace Sree Devi Complex',
    badge: null,
    rating: 4.9,
    area: 'Basavanagudi',
    location: 'Basavanagudi, Bangalore',
    price: '₹3,999',
    period: '/ Month',
    priceFormatted: '₹3,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdN8phsqGLcVbgMX_kmSTOMWVOyM-DXKC7I_fauXy2s2XnUvxTREQOCvWwUdenKyOAMlfeNVU4QA1RppTa_uMYuZHgZfBHr_CT5LQ-_OzKPUcEYI9bRppPh9oSKT6eLmE2uBS1Byf7IzZBK=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf5AF9h9Znp-S-ViVLSBgWViyvjEy7k1lKYVNkFHmY0YPpSnnMEt9mNVvI46JE-b_9ararXB4TgwSrH1xxeqe9aR0tXAuMTIOACTEVx7Niv_Q75jw99axPzJmQTl66AOTYcWIca2g=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfWpLTOeXCBIfXS5-SUZpMhTLH9HC9VI6WuH4srsdijkh3T7LxWar1jFwXZTv-6XR83mR2JVM7Kin_jlVCNEcXidzfOCd6LTGd92YHajyngeV5lIMDFCtyiiD_EnAgW1YG-CChg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLct0gymWSdrBixH2Ok_FbhL9k1_kYKeRIcQhw0nbq43ayRpwU1wQ-HGvk0wINiZBxlYmMARsYa3jwLG8MXel2BIRgEDUJRjqS7a48Z4Xhl5tLfle1Xmvowynm1PJjDY85dU3M0cfA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Regus - Bangalore, Supreme', KR Rd, Jayanagar 7th Block. Recent Google reviews complain about refunds, sudden rent hikes and staff - check before listing
    id: 372,
    name: 'Regus Supreme Overseas Exports Building',
    badge: 'Popular',
    rating: 3.6,
    area: 'Jayanagar',
    location: 'Jayanagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdF5WWYGnYlQZtS5fjw6uf4t3eWg4wiIPQJrFV_4p2T9FfSxPgI41BHjfgMKgXQKBYT_3BZcRTKAszHB3wrsSmpZpTQDsduumyTa0nEZFp_cR_tyj23Cej2oJY7xGgjsDijCntD1aFq18A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeHPEbfmQTRl3w65mtizUeCCnh9-clJvI92KEXlLH1ynWshc_pQejuenatPtqKzuKu8a85iP7O1z5qLeHGacgn2YoKC1VIdqS0gJa7queEb05luCTk-fbqxeD6VNgWmoRjYRQ56Q2kqO0hW=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc18Rbjh_IV994GfTeh2PnDOGr6M6HwC7yJaBTuHEeFigLe6UBunDfYOJu7w-KAdoGNKv4VodLizaeejy-o_dWqHT9bMPAel9bLHqzZHE4mkAcmIJ31yr_XWQjic71TrONRqOnYF9U-h4QY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeAaQ7nCtmFEOmsXSQ8GcV5vO06bIf1bRj3S8FQzI_k8vbFEkwympZaDi4rYBpD8zoq97AMUVohAO1fs987NbL_qX1jk41ZdXqRbZ0UF0ap8NFoQ91e-s-GFtYya74pwt5TB4uPFA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'Lamora Coworking', RV Rd, Basavanagudi (near Lalbagh metro)
    id: 373,
    name: 'Lamora',
    badge: null,
    rating: 5.0,
    area: 'Basavanagudi',
    location: 'Basavanagudi, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeIjwuO1YUXqkLsb4MUb8XYWUEpzgem6awAy_YPW_dhZtOLf2VprL7L544mKaK2B877C_yWNfVmuVD9rKg0cEATGYA-tMb1hdDdI95X_bALBivte_h8-PBr7duGJq7go6xcMt6V5bLLC26X=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfCZuxwudPYycoTWeAaDyXsJnppoEVJoJnk_7Ta0pBfM61mchUYXxoODz91_hXT6AxuWoGVqfxbK72eiYi8RGOz6coPvd3crOJpGHHEfbcc7DnIeJsAmtRfDWWDuLgWOv2jdKT5=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd5AkQH3NGZJATNRa2Vm7dYUgMHMGGf63TK2J_GcSvceHX849RoD5tdRPFxJN6DYvBS1LKhUp5rRTCtIhEEnXfcI5Y1W5yIjQTtU9XTyheZxl4B-GNrfWmhRRwIkTcFVZKpC15M=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemj0ph8d7DZ_fTQTmAZq3U-qUMUYoFLb_VPTXaWhPgTqCtGqVFd4cFzfBJO1Wd2GS37Eh8ycPgo4UUEx1lIrofWusHmX1iQ1dd68ecVJsZPeo-f1PPDKj3fIk1NBHECu-xq2Rui6hEuSS8=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at ETA Mall, Binny Pete, Cottonpete
    id: 374,
    name: 'CIIC Coworking Space',
    badge: null,
    rating: 5.0,
    area: 'Cottonpete',
    location: 'Cottonpete, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeNPAFhmykUqXaoFpvHfd8jbzM2MDgD9_FZEEvXVvgJXvh63IUep2vRN2aD7Jm03B4b-Si3mWXu-SbeFG-vQgaZRdIWELZkwXaPp1wv5HIpytW33GPdUgQrn6TTzycY4fjzdnS727xSS_X9=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdHx8uOXJj-yYCexyn8wDT_bJkpqrpWn1ZEdmyHooEOB0-3FeLSkLNiuN-0abE4vkjnxg_fwsWKq9dtkOWoLRglSYHfioE39zeV535rtF1FSqinK-Pd7RsKrEXtWtmbRWCJj9gP3NWcVWi5=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLexreAdBkkGA4iMCstrz6XCBb6lv3hsSipm-0vlKTTu-onZ2T2Pdo-PasUGtZTXl0SjBtaEQuLj7Aukfkc9XsjrghFd-NIat_P97pZzCcLW7QoG2bufoZKm03IWsp-TF_hEOvB_IR19w2e4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLckGFMmVqzGLmjDDS8x06wkrAa89za6MqXpxMwUQsTSy28J3jbT_fFQG3rOJo0xM3nX0PdIRh5vW9lCKOAYZmzMT2CwcfGlF8JZuoRH3TA0b_0pIEoWn7pTgiGRMWDT4Mky9dkb=s4800-w800-h600'
    ]
  },
  {
    // NOTE: card area was just '3rd Phase'; Google lists it at ITI HBCS Layout Phase 3, Rajarajeshwari Nagar (Mysore Rd), so the area is now 'Rajarajeshwari Nagar'
    id: 375,
    name: 'RR Coworking',
    badge: null,
    rating: 5.0,
    area: 'Rajarajeshwari Nagar',
    location: 'Rajarajeshwari Nagar, Bangalore',
    price: '₹3,999',
    period: '/ Month',
    priceFormatted: '₹3,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeAX7dDBJIQowFy1j830V5IG1sZ9SSGlwiQdCY1VJaB0CVVCcpkTa5weBlVhfRs-c9l2q3tcAZY-GdUUwDvc8efbLw2jKo3gvdLyhGik00A1HlNPzOEUUDB3bCZfYDLFZS30bGCVGFjjtdU=s4800-w780-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe3e02HL9IfkOJ6ZQZd0lX8hNwIhIEqxusajDYL5cAFAGTi4KzQU074EGaUFgzStyEsU1lwl4ztwp9s6NYsqqT2g93gVQuXZZxI1YQE_E0mQhhOpl3yWsUFc_jYRJv25-x9T6L5jhukF8f3=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfS93-ZWABLWUMhZlK6IPmI-CpqJk4ti3QhtNJmFS1TEhT-idpyYVxanL3asF5lBsaI2dBgA_4Ru9-sm2XC79GM74RVlZFlfvvzxB_kqJFN9gSr9n6b5PooiBUITTgrBRodeVuWeQoumBK7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLewyvV21BTu5db1aexq5IfCFqlglJV-GqjnnWrJwagUBp5HhwPz9GoNiZFTaLPRufbCaEyRLBUi0j8dISFXKooydjOBwMGSF5ZO_y0mc1KZfwoK1HNe1ODBhxvVSOOtqs8z8SV9NHP-Tat_=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'iKeva (an Incuspaze Company) @ Umiya Business Bay', Cessna Business Park, ORR Kadubeesanahalli, Marathahalli. Several Google reviews complain about deposit refunds - check before listing
    id: 376,
    name: 'iKeva Cessna Business Park',
    badge: 'Popular',
    rating: 3.7,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeYRzNAP4Tt_cxP16KiCqOqNf5568praaKF76mpZlmL5VEUA63y_CPTwZnUMUymqFP3WrJJ1xfbZBIOUheUl-j7OngupQtKAJoqSiLXIh0U5UZE6PJOqgTQM8RoEwMsTgmVKo42=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcmPejy-Cz4IpeB7hO9yr-om8ewm9K1n79Uhrfviyt3jPG_XKWK06p8CKe48mZT38vp4DjvXrfHjj7K8slqkfbRJO6o79eNdn1r0F0gK0iUn4c1iCDXTmyVO4BrxEKPQkG_1Dg9ew=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdYTn1QWTne9nCRolYssmfORGrQZaYjBhIPeGqP8GOpebuHqEX6kBseqYaO_nwjj__iugB_bOCGL0tGztRlhi5vm5OP6H-zREsA7JgIByyZc6bkLtd6ngfqi6_jRnWqZsfKWRwU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd5wV9GsfnbnHuN6-d6zJ7hyeW4XcdGE-ZzJzj3L6uJxfdbFX6lczA-s-P1yfetMI0gxYk5sHJ62Jjiuvab6Ii3ftjaSo-e0XiNVjXlkNHPNcWR3otoYhvP8yN0p6Ql89c0gHyl=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google only has 'WorkFlo in Ranka Junction, KR Puram' (Dooravani Nagar) - not Marathahalli
    id: 377,
    name: 'Oyo Workflo KR Puram',
    badge: 'Popular',
    rating: 4.0,
    area: 'Marathahalli',
    location: 'Marathahalli, Bangalore',
    price: '₹4,499',
    period: '/ Month',
    priceFormatted: '₹4,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf2yA9jNbv-q-2buGrLuQDDO_7V6fQABeBt8ZE9ylSF2mAVXHt2RoIzLfre8oMFDbwEnFwd2rnWC35a2HhmHWEFw8scIi8wWntlwbFHmo-kLA0I3SjDPZAM0G4d_wUCLW5k4CXkPEv5uO0O=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLek4_GRZfLEI9T-hdOzSKRFQhpMmx1-yBYMIt3-dr8UD-S77f2ZzQni4KS80FtR2ovzu7wOGJWPKg0G37h8vg-1ZD6AcBDyvfE7eViLkwtv7nI3vy3QezJWxWjMn0iDAZOZowhKlEggwtsh=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfx9jR_KZmnOWDRRnlxXumWLAb93xIt8Ti0pOqIrSB9T6FUcq_fId46Lnlb4-MDEFE2TzuOTFn4zZQ29ES3cyZ2CO6UghyiulwkKPEImixST7urhCWpXWAHLY6IzLTszgH1L0tqPaM68Iy9=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfsIku-YjM9GINxwN8erVS6JSpE-iGX0YZEwl3Sc9Uhcv4ScCUX1baL6kq-15P4sy3Crjli5daGVdC8Ef95NcvWO0T6bCjZtCxdLjR8R7YGjldtRTEZjcswfdk9QINSCH2_5dkMLXVq682i=s4800-w800-h600"
    ]
  },
    {
    id: 379,
    name: 'Regus Tejas Arcade 527',
    badge: 'Premium',
    rating: 4.2,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdcPDTctudp9wMd8ONEpTrY4025zFSAW3Qo07eO8e037zHPCYq32ruq-BEGV62wFKxX05WRMMHEasp9nEDeKGNZ9EgQlxZtDR7mF3KCZhBtYZOQfIaMOETInuVXcefIGjlx8fPGGvCpXYU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd0VhuVv2aLnpZ9ZHLIWlrzXvs3672Jyxwj8n3HaCWoYAq_f3XritXnNeIOdlkFPnHSSI9lgb2JIzaOcnhvRlFceIIfOg47ABr1VAG9Nn4xmgQg1Cnrx4PreerCR2FsMabj904d3w4-KFo=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLepi1V9seErD1Z1djoEqIS8u0viY5tDmQ7NNzx08m0Ixsz2GIgsTKA4Mj00TOwgL0-32jY1W_mBTauCVYPYR2H6XXTs6xrB4MDj3Xvvhqavo1WwsMy_H-a-QFSAxECkNLMZQShFEBEGbuoy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRmzkzfFs8ROZzbH0AHZRaCgKyf2tcTWdsjOcEUY8Cumn66ngh5HbzfMS4UUV8blXPPgQ-U2PUTcVTpCXkK7UEjB67qzPCzvCnqiXSjk2jU2iRt4KaeufwMxD-uQtcRt1Mio175nDjFgWE=s4800-w800-h600'
    ]
  },
  {
    id: 380,
    name: 'Space-55',
    badge: null,
    rating: 4.9,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹6,399',
    period: '/ Month',
    priceFormatted: '₹6,399 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe77QXiSb3pp5-Jue7WQq_5ZdbqmXkA6z8uP98REQ0bcDBi1NpjsNslK5EvHje4MNYGsR8L9b0D2JfoYKuWTQ9xj8rpA6bDcHALg6CosbZkY8-qvMrRq2a0xiZXeEsgx_fkMXUfAQ=s4800-w668-h446',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc6C3M4EGf2pf9E7S-VTqQWtSxZ0MsK1w4PnpRpaupnW9GIGlQOhRbbau3l9CaLJFY2Fvbz1S8spW2f3Sm-ON6TzFFLTQQ6DzJtc18EBswVYgYUze-Qqb5HVxPhSxl8Tginfl1W=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcySwZ-0uRDWRUWGM_Chn9f9tpB294xaDj7PocIFlOI3AtLhFVCgj_CsxiiI6Y8HSpRLWUHY3pa0Qy0ZhcdoZ2cRbvqQUgx8qlO0kfOdVFnG26GfgslzogKlxmfsYDIP6_gZgYqZA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcpIePlfJJa9E-nh5mBKsymCh5LymOTO9iH23O9wOZXxIPoyUH9UEjm1PCNLDyszSOXskmkjx3vj73fblOKf4AbO4nTrAOwoIIOA6gPfqx8nFBuGncBmPXazWSd5Wq-1eGiYLqB=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists 'Deskhub Bangalore' in Mahalakshmi Layout (1st Main Rd), not Rajajinagar
    id: 381,
    name: 'DeskHub',
    badge: null,
    rating: 4.7,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfM3trIT6xP5EYxtQS7tn2avpE4sX15t_n__Amsrb3AG_wXYrMXTheZLDf0NfKHHM_v0zsfAGS94KxTIz2iGtMw716u5BbHfY2gFwYQ2YgOugEQ2bWRaeZdWXvUSzJS9er6QFnP=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLc8vLjO0wg5WkYOA-Cv9IhLiZzDMQnbAR1b3V7EN7xoYnwlI8bOZezLvosJ4u_R_cqNu3SjNXv0cO7uNFZlAAEoJZLOT0jpqNPU8U48bdRmftJVb8IpTG_d_eLcxt31sddUo-p8C_ywsP19=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd5-Sbu8dtpiYMcqi8zSk9awSo3WNkZXrvIe63XP_FglYCVMGA44Dp34nfEXSIqL3rO_aOuWCw_jOO51JnrYk_PQhlLI9zfu3vsv-cBUU4ft3_WDSvdHlm18VriCtposUfL3qnlOw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeemj3hBT2b36NaBE5BSB-nm3w-HHTHiMuOIoyx5NAUMM_2TWPgH5r7YkwedRfO2Kpq3MvTdKE8qI-J1RHzsaTk9quGIa3iYoiAASdXFAI-km4xxn_D0XqVyXETQZlC-XIe0SU=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google listing 'Opus Desk - Metro Mingle', next to Rajajinagar Metro (West of Chord Rd 2nd Stage). Several Google reviews describe a job scam asking candidates to pay ₹6,000 - check before listing
    id: 382,
    name: 'Opus Desk',
    badge: null,
    rating: 3.6,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdNxaGJoHYdStDukDd27mULD0wY792Muznve2DbLi99cV393GXPkMeBWxiLZKAOP4olL2a5hjKS9W6k3xrDX4mrgi1MFy5mhsCgdSuoihkEvB3jlEfA1A7Jsjol57xZadjvjDetiw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfIBl-hmFAXvo1CWeZi4Qull81zXI4qLfqgzK_aZMrvdQJieOAKSRDD2aDcFt8QIDG_sJutcRiiN3Qy1CeCtz9i8KUNuk_f-5N4IVTuPMW9Ew3mm0dajhqjouNFc9fQg8W7Fznlbg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf-15yhXR9RxmTa75UOsrP8HHnHOjy9iib1pP0M2qWPze1g4GIKv3c6X7PFmk--qYde701zK11XeLvBOBWDspBtWPoqMl1e51CaOi42vaukFQ0RoRHtpvB2p2NBNNU8LRCvI_YP=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdtmMkqQzafMyK3KNRyNbugN2UW0ui1FWmpDEYBYegV_UwPtf8ax50eFh1_uoWnbAVD6X2kZ-TziHDLp-lYcHwgjF2YUvV5jA3isVwuEVxhFbSGnT5KeKb-3q_8n8Yd015xRpG1lw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at WTC Annexe, Dr Rajkumar Rd, Malleswaram/Rajajinagar
    id: 383,
    name: 'BuzzWorks WTC Annexe',
    badge: 'Popular',
    rating: 5.0,
    area: 'Rajajinagar',
    location: 'Rajajinagar, Bangalore',
    price: '₹18,999',
    period: '/ Month',
    priceFormatted: '₹18,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfynyh9wL7NvpeSrRr7zYxXOvJ25e1WFAe1ePRLx_JuCjDcggiLhM7lbnnH4lSspTax9lQYrEI5tsU-s24sYECV9Vz9nFdjR5pz5tqncvRTY-E9i-XiHcJk7paPgaJ2BhIoz-l5gg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf9HaL4nykXJPxKrxf-f6The9t-XvNsg3Mlg0Y6nlwmojh91ncjlQayAYr9OELgJc8_36M5QP14uJNqWRvRwk7pVNq3Z_VIDdretAYh_AcTqVUxNKE4zwAC-4Bkk3KCy6tQC3sjCuFgJ_c=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfm7nJkF2ch6_LLl2wX4ujSpZ8kiQYlR9T4fudh9pk5O-afdVQ5CsOEL0strEhDMlFsnyZyYvaDw1buY31ZAjZ4S5hVXvntayqXHVWFm_6CYgQa6V_ngvrZkC14gLFffkFLJC-2T-lfQSOt=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcdEW5uXSwXOEqbbIJHaEpyXgwA6PLvfDlh2rIo-iXxT_OZ-HFRKbAhzDae9gBNQAJg0jWp5gOPcNu9ISelAt_D6sBzQ1ddkqS8brZbs6_mLISD6zpZ4s1hNBXSFPTBglF01mxaSA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is 'Regus - Bangalore World Trade Centre', 22nd floor, Dr Rajkumar Rd, Malleshwaram
    id: 384,
    name: 'Regus World Trade Tower',
    badge: 'Popular',
    rating: 4.3,
    area: 'Malleshwaram',
    location: 'Malleshwaram, Bangalore',
    price: '₹25,999',
    period: '/ Month',
    priceFormatted: '₹25,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfxWdjnueGZW2e-7o_usjWhU_DCTehtK9dXaHTJ6ZwX1mIo2kGHnCzXvK3Y5F0lzh5YW7zGEME113QSrJx9ITiZNPm-X28phu0XrhAUxiqujivnjn8vz7yd1YkQQs3nsA47EbXQ_W7M-Ecw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeSITb8o2lwmXBOwOywCgn94J6Emz1cLpWdNODXp5x1l1YOOjrcX89LFroskUSIeZASadJmervdmpoFJfBt74trmUdq3KtztOMw_AsVIBaQfGwTV-XMW77T3sMt-D43j9vHB2cuxr9G0LAS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfdDQcfBkXjOuJX5g8Tnhedt73BQF925bDEIZluuvHnGW4aCZPQyd4Ih8ln0yNpjkv_marM9tchDnrvJQzKmXSG3O5OTPL6t-uJysz1hDdmc9PjmORxCA9EtHIPkURh_kbenQrSkK87xl-h=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcgxNjAAsvmAsBdHLq9Eq68OP62w_1xkFzImvgMeywwQFct8INY4fgVgKxeqFwC8LINaWi4088Myp6y4MVBS5yu8qrdpjkKI2xkZXdpUG4Nn4LyktfPj9sbxXoEttudoz55tAvW4IDcCvlt=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google's 'Medilenz Innovations Pvt Ltd' (Saraswathipuram) is a medical-summarisation company and could not be tied to this centre, so photos are CoFynd's
    id: 385,
    name: 'Medilenz Training Center',
    badge: 'Premium',
    rating: 4.8,
    area: 'Mahalakshmi Layout',
    location: 'Mahalakshmi Layout, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/eff5f5f83599f667ba3cbbd96ac2186a406ef02f.webp',
      'https://img.cofynd.com/images/latest_images_2024/134162968647badd3c0fc0e7027b25618af08d65.webp',
      'https://img.cofynd.com/images/latest_images_2024/7b9154764bcadd8dad1da508add51ec835170fc3.webp',
      'https://img.cofynd.com/images/latest_images_2024/bfcbd2260f982194b2177dddfb2fc80f51e9db0d.webp'
    ]
  },
  {
    // NOTE: Google lists 'Share Studio' at 11th Cross, RMV Extension, Sadashiva Nagar, Malleshwaram
    id: 386,
    name: 'Share Studio RMV Extension',
    badge: null,
    rating: 4.7,
    area: 'Malleshwaram',
    location: 'Malleshwaram, Bangalore',
    price: '₹4,499',
    period: '/ Month',
    priceFormatted: '₹4,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLet3GHqokx7qiUJasphgDM2VZ5tB4pTNSvGr11z7lZwfffn749QWkHrvScVWIyY48QC1QY_E4A5wRJXLifyz06VJwklVVVxMP8_4J2Cjl27gpA57nY91ULJOMe1Zv39rCXChxgJ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeW7zJ5KSB5JwAMhBn0ytmWmxuGv1aiENo5p-XSuoU-YrvL_CzB8-MSeE-4uJ4cc7ZwQBABvF0NnPDJ9sX7B0BLWx8NYMFwsjVSHvyKl4Vp468A2QU4bYZXyTmLNq5EFAnrSx7r=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd31M4cD36eVGNIqy039IzCvXifqZw7cBeq3RhaRNN-fDu79nhRtavGFXp-rXJfCgddjgqBfWJQk7UyAcy-JfciNLa1I_yGasKmZweJS225r91kkAGmrJuWBT8ekXp7iBHXZa_vcw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc3Zo8RLDfdmC-qu4zvxTcoGHXXQhSZaIyZanHW_N3-iOc3b0tzZubO25ldyoYqDqhQuVJXklec5BQfg8uoyEZrCUkN6YXWaH-tArn24l2498Nn9gekYg-39SZEuwv_nQxSpQ67EQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Level 11, Prestige Trade Tower, Palace Rd. Card price ₹59,999 is likely a private-office price
    id: 387,
    name: 'The Executive Centre Prestige Trade Tower',
    badge: 'Popular',
    rating: 3.9,
    area: 'Palace Road',
    location: 'Palace Road, Bangalore',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLelOOlAr5WqMIGne73w1ObbusvfNeS31Z7y1iNx2an3H2wApDCezQ-9AMXBQ9x_-QF87YHAWPfsiQ275yRZOc1-hL_WSPK9trBBtbPWkDpB5o3m8pFKMLiZTiEW0a3uRRr2Czx0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLflkHOEM3FgYOC6-UPl8DNhmUtTY0qFLxUPwA43U7bXpzPh0HoZQlHRRiZ69wL_NUJOk366WkFyCWGQtWI-yjQlmz5paPKwFC05BIwKzs7CME5JxbQxCF6kZ-bsSRQGjQghKSY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfMTVX9GnLCKik7j_S6ykgIS-4XlLf2t9g23Hb3XFeMbGwAk3N4RnC_0Y8Bu4K4lsa_Ccj4rSW2c3PcToeN6Rx39GH3vZeSW3nZPkTcoRqD7b3N-vLovBYGUNqgbY_UDBSa_plu=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdABnOfW1zN47AdGxDKqfFHvmJnit0lWxA6m7JC9qHIDzL91qRDj-llupVLlpzHFVMWzUgnAk1RoZA4bLHvoQXaj4xZKw53FZn32DyWeniaWsAQNu4LZIxMkniTQO2V6WOLeKt7IQ=s4800-w800-h600'
    ]
  },
  {
    id: 388,
    name: 'LiftX Co-Works Renault Palace Orchards',
    badge: null,
    rating: 4.1,
    area: 'Sadashiva Nagar',
    location: 'Sadashiva Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe1vFCFLSKH8XjocZbHdJV5ixesTdU0NOk6ZtXN9dwWgyEsH0DIi1vIvszL6GWYSehDzy9MC6lG1a4Erum2e3e5PJ55pSRQpH0mRcwL2VRDD4YWubbDtpamJA8XNWdtDMyhZFI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdDPjxL0UpMc81opJVDvJG0DS92cNnwZgaKA4FkQJs0DAgFRNpl3lVRsSsZeStFBKB0CrLNgqXsp24L6Af4MNeDUCdV1H575NqW5Um9p27UhdYDYvjKcUCwv_oCw5txhUCVFsc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeXtdkt5GzTg5P6mamTbLVC5WCapuO1gnkoNsSNRCaZCQjmcOR_x7CbH1svsSwq83HscPKXYKoIrpHESgUjx4vwlTNoPtX65LckAWeS1FKf0wGAd_qyBML57X7Gcul-zzImdBX1=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemNFIAkiDsVi6bDK5rCQrdx_YbGuBU-xrlw_DBGYPsd1qBtR7ihlIZtoi68d7bSF6czk6zCSIBXaMdDNJfEpz3yg8RQl7r4iM3GXW3t-UeH0yhAbm3HW5lbKZ55swQQE5ReeUU=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Level 3, Prestige Trade Tower, Palace Rd, High Grounds. Card price ₹44,999 is likely a private-office price
    id: 389,
    name: 'Corporatedge Prestige Trade Tower',
    badge: 'Popular',
    rating: 4.7,
    area: 'CBD Bangalore',
    location: 'CBD Bangalore, Bangalore',
    price: '₹44,999',
    period: '/ Month',
    priceFormatted: '₹44,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdvcXBbFFzW5AXPZPtw3x5zt2-7FdpLjCQClaU9dWn58QMAKBUPDPWXPp5GxGulhVx-1Rzg5PeeLxkHKUnXfRRLy7-sSTTUHPl_3sku0v97EmuX_sTaRMjn-21CtCN8ATXM9NDaKE1U3Xqx=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd4vePKeIuqZABVsVGPQtKbFIagfBCNKNPZFSCdv3l33MztJVhYBuh3g-Z72qYwjf_8ffxAJaiMJzRP71XL8db-xp1ogIblVTDWrDbSSX9HtIgv71W2frsmqdg7dAH99sitn9FcRCGKmPRy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfe_C3Cz_H6ByiI0F5VqXGMV7XC6RP5tpGHJ5H3fpj4v2_LirSWnO0gRsHQtrMd8Xps2Y4nrGNgdfw5e6sJVbni9nvpMYS-_lKklGq771eYl5b7zOnnwFqSPQVsQon5H_rNC1pBpxZPBbQc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfAVsh7tIr6E7pbPIJR7QOYtxpE--tCebjVCQwnQmO4GdRHIkFe7BmCe4HZv0WBbqb953TK3x977QW8dST5vVYAg1ZrMUaVUA3iXzeUd_LGHhZZUIudqeLxSM8l5DKxf6_HkWGNlCTrYSnc=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google has only a building listing for WolfPack Workspaces (39, 8th Main Rd, Vasanth Nagar) with no photos
    id: 390,
    name: 'Wolfpack Workspaces',
    badge: null,
    rating: 4.2,
    area: 'Vasanth Nagar',
    location: 'Vasanth Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/31a07424adc49d0eff1827795e30c03328039132.webp',
      'https://img.cofynd.com/images/latest_images_2024/ec4f981519915adbf3b224c2bbaf1e3b365b9625.webp',
      'https://img.cofynd.com/images/latest_images_2024/4a0360c7312f14ba3edd3a90473a8f1280f5952b.webp',
      'https://img.cofynd.com/images/latest_images_2024/b6e0df55ae4e06bef3879a632464298b28810fdb.webp'
    ]
  },
   {
    // NOTE: Google listing 'Garuda BHIVE Workspace BTM Layout Campus', BMTC Complex, Old Madiwala, BTM 2nd Stage. One review mentions job-scam activity on the day-pass floor
    id: 391,
    name: 'BHIVE Garuda Campus',
    badge: 'Premium',
    rating: 4.3,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLecZQBnHWjMzMA3DFIVR_x-D-_L7UhYZiG3LCi78xhqjYBCttoJrgwqq_aizk2R62enNZ8tyzMkrN37VxmXXHSvgEBj8DlnEQWPH_KEFJU9hvVPANrTOYZDa4qKfGako6N1JUptODWra1JY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcpkAgdHknk6mjqYzDVav04RlLXjVaLIqagcUwU5qofYGUV-hpcmjNXHpNH86xa_gha86KuV5VkodmPbOug42ny6A8a5rrk7uuXjc7vaRUJitlHTyu03ZfcP-Bb5piKfsc7uuAHaEecABZf=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcEQe2awOAME6ubR5JCPPW-YyM9kcJW_nqzoYkTVpdKT9SO7X30msF3ES9j4_Y24i5_EZxAfDCJ7pxseYEQ4y1ItWAGLq_XFkSQ6kFNu4-3DJwQnZuawdDPSyJqjk4OE89Vs4IQGA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcXnAUYRtxxMD_TA-xZsDOBpN07JP1CmVurPeBUR3HObkAT8XjjEdranhu9sgoC4-y6NrDOIXPiKFL4vn6hx1qgmf1R5tZqycdDYGukeV2IjCuzm_7z1lINX8r9rnhp3QFn2OFy2OkQz3s=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Subramanya Arcade Tower-A, Bannerghatta Rd, BTM 1st Stage
    id: 392,
    name: 'IndiQube Arcade',
    badge: 'Popular',
    rating: 4.4,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcz01hhzIR07wYt86qQ549viASX6KvswzKXaT3qQwxvcIMb6ydf2yRdR6NciVr5P8i3elJ1r2vJEsYHys2O6HKfFUzfnDTDdYm7MKoU4QDLxXFNGb4hUttAgigEJq7mbZk52BKazPWth9xK=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfwuZI4NajwpIfJgbLuOWspWMi3MKJdYnt0lcs6Q8j9__E-UygMgagQ6dUpI6jyHuBp-sJxAsfNf7jmYUFuZNuVoSwzdQttKeXJZjVn_tFs-DY2FkpOjS37f_CrFFdJXXpFAtGn=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLerqVJNV0HYdVVr_ESPDFq-NCYWZqr_jTkwnLhqC7ENaXsKy9H27QkxoLNhYsVbvsU8TsvdKZohC__yzqDoH0U-WyAahxW1CITPr0CyfKcVbW62Sfz5xlHQ8_T3yfWg6TYSiacS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcYQq1avKhg9zVLUfsOCga57B8dIP_BOwm333Kdw78EJ_yjbYM5X3tOaM9dmyx6fXNmaNAbFaEcpc6-3yS_04EH8dZ1cNt3eqck8Ans1Wxfb9YT2_lCIEYlcvWHjDKfnrT1MuXeXg=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 1A Cross Rd, Dollar Scheme Colony, BTM 1st Stage (Google rating 4.8)
    id: 393,
    name: 'Elite Co-Works',
    badge: 'Premium',
    rating: 5.0,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdCbbJkO4mwmFniiWkkRiRab2KrUErVdo-B6ZIidpi5KQ10TwAENluxUMnOgOgEC8qRT-7dqe9tDFwmvKmO4Y8pRa5BdmJfuz6a8sodI2k-gSVlr35mKA3CwGmAeGs0_w_jQCVPgzzbSZc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLceeJ1s8gLoTVYHkqVQiXgGO2SjrAL8RUhqSMUVjDG_1I3LUv-EbzSOTvd4dPQN5BFUg_XVPcToXFoZrNbWOhv6pi103hrNz4PzGzIpIYyb3QbZoAnQjAwAtLm5NzsKHDE5fp8sgt95YdFK=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd91-f-VSvWD2f-Stv90ikmADqLqlK9eQ0KcsZ50bbHebBcH61K3xUj7TeTp0Z_EGAyCgRUBCRS2XXaUUYk8Lq2_bqFAR4pnxIOUHUT6ijMn4LrWKYbDjD-8tr7U4koaBQfLorQ6EeAoCMA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc-Sq_2lg45BbWaAJGIPYNrAYfemSdR2Vl4DsFV9A7ZHOWW0xAYNRYlfrc7ej026c6jbspD0NfvYKr-ZnBOwZhwMux2KS6IE4IESjP9HKFbvjKEw_vgngiZrsWHZ7QmIYrOXWhdq_XH3pwx=s4800-w800-h600'
    ]
  },
  {
    id: 394,
    name: 'WorkRubiX',
    badge: null,
    rating: 5.0,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc7hnP9IEhaf3Z456qRNCV4Xh9D1yHfbqp1RkxU7CXhfn8Mqvgn_iCwnwAi_x1ElW2i3FJ4gYxEnqUtpRi2o9VIwRl6BuHurRKSgqIHh-ohNS7Z02HRUatc_YHSLPqTMPO3sCrT=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe7tC8nlHMDrzo3tSw_z42EgG8WykozyHntEQn0_LDLMM8C6Bq4Rl7zrEPK_C-dQl65svygr9fCAJyAp9yae7fPsRDodpPgVEdOXeRgNcm4bJaGhJINzs5TLYEOLPiDH_SrWm03=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf67Txb9lLGth5pFblOMnsfxkA7YDAYM09PkQL6dBj9GVBk_923JwvmGy-4Iuj5hnP4nBy1QXx-gFoeyuDw11wvMRMOS45GJQSxV-WtfJr_TBI8_tKT8QEOEo7Vf2Ya6PiP6UnAVQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdnRp2jQXPvrJNrmHpYcUL8uByhBQtZ4u5vFqmBjKTxTGCvnjvezFxpTzkXJyqvnhCIEdWpSjrL_iVbncjtmKNw9_UPmQ-uJ5F84c-9ziMAFH8te6rcUAOnAurEYjXseWMLMlTWbg=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing is just 'Starttopia', 6 Outer Ring Rd, Old Madiwala, BTM 1st Stage - building name Vinir Tower not shown on Google
    id: 395,
    name: 'Starttopia Vinir Tower',
    badge: 'Special Offer',
    rating: 4.1,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹5,799',
    period: '/ Month',
    priceFormatted: '₹5,799 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfuaovqxXFUnSd646pSJR5Fndm6KnJk1bQT1tZnS77joLvgKmk43htbEwCKDT0GPjtaqxFsmAdbMPyiB6AUzd6b31R9roWb2zxlYH8YW9IdffchcYSFUXBeWz4WapsR0v2wzf7S=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeolm18GeilZvOvDbzNkx9oF1j2J9FaR5xRvm8SkwN80DkDycFRwzMJDmpFGZwfelZYRYAZ8WUmCKFsOPFZGiSEJR0irTJnaanGWMo9LyuHwitYzZ6sTAvFNhJpSWidBqPrZeLS3g=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdK-cAMzwjNyBgXcb7rGxGKeP_ke3i9KP5NKfwsL7mHgGVSSNQRkwwuPKXL9VCX4sQsJBqox9KKKu2Q5XWYf0ctK9GexePnMTtYl9u8b_EFGzkWwR0HZXn3uA8fU58kmh4sj-cU=s4800-w592-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcv0VE4eWp5lYBUa48C9AoxQkd-d5v21QQg2GOjqSCs4wlkUffVYATfjmBf051Okfk6U-Tj6oZt29PGiMPcc2erunqt_78K8aTh5UdxyrnQHeeGrEWqeZK4fY8_UoGGfbI8VZRA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Separate centre from the JP Nagar (325) and Jayanagar (350) Hubstairs listings. Google lists it at 27th Main, 100 Feet Ring Rd, above TATA Motors, BTM 1st Stage (Google rating 4.3)
    id: 396,
    name: 'Hubstairs Coworks BTM Layout',
    badge: null,
    rating: 4.8,
    area: 'BTM Layout',
    location: 'BTM Layout, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeZPc4kxkpPiKvbbRY2gsseSXrD8qreoOBLcdiJrpNTrbikf7r0AnN03M-jBXvjwhpgszz1GnUf23rU7GcJtCuw3DKggKEdXOqKEgxu7Nyzkk-vasbo7KxcIAvkE0C0bss-A1SG=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcEHqOyl42IHvrKloy2E2QUfdxAt2YSiIxbdWIAstdinkKJz7e0lDUbTzMn2x9Pm_HpyhAkYn6PALWa3B-hawD8M811of4oisE_rHCi9Tx-mO-eZX1YAfFzUuCNDSkm7ko1uTXf=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLec2Z3cJ25VIS0Zaww1tmvV42sx5F_MQGwnWB44kqcop_Z1ZYQ-7PszXrzVq2Tj6iuwuXfE6i-aH-NBUbB0cEJaqztFXzL9uzY7m7A7TT0DIjB8Jj7ciSAUPdHSWSuHgL1gqGjaSA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLewfOy2ozVXu-7rbxUAAaE9zR_AgMl_nM29pVS5VXc7l1Nzol374_CkP9_hR10GVRfs8ruKUdsp1jvlycdR1vQ91JNqfU2kVYLrJwnkNk60IcnFWCJzxlO_lfgPX08W-EZSiOmF=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Monami hospitality / myroomie / mykhana', 7th Main Rd, BTM 2nd Stage - a PG/co-living company office; its photos show an office lounge and desks. Google rating is 3.0 with deposit-refund complaints
    id: 397,
    name: 'Monami Hospitality (Myroomie)',
    badge: 'Premium',
    rating: 4.2,
    area: 'BTM 2nd Stage',
    location: 'BTM 2nd Stage, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcA2JxdNEnNYTPZlLCQTpbJjQsIBnDPWj9nva1mIgk_rSfSZaMjioU36LalEXSdY8ZuAbPcltTVmjqHKjRlCFOlZfGRmD6EnKmt3Tmmt3WppqFrw-XxscJEl0f9E9N5cqX1K5DtHw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeM7H-eXXIXx37hNv46qZ5g7l6zOCwO6wbCxph26A27jGz35llJ8lE8pA2qoCW4b9muT3KD8dkdDUVVrz1KA8QhqfeANg45b200w-eEzmGATV2P-Oxr6HQgLb0zX8bWYkgGXndgQQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfV5agiy-sOVF6Y0whjN4gULPq4_VWl-naS3ReeBfhDXsTN408uMTVkNGgCKEUc3KODFodsQLZvQRw_BM23Hyoek7zsEUCGIVMKhp-Y9d2HSkRY3ffzpUMmsV60XenaPWN9P-sUvg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLevPTCbXTdeu_hoadxV5Wb1GWud5vbv2wH548UiDFCh4RuHTuGexnfjM0gfLCWeYoc5EqN4WUJq4FBt0hWWBrQ0R1Owicxk3wL1U9XExwttk1vaAfDJiStXSk7mOqLtZKg4nejk=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Gopalan Coworks (Innovation)', 5th Floor, Gopalan Innovation Mall, Bannerghatta Rd, JP Nagar 3rd Phase. Different centre from Gopalan Millennium Tower (285, Whitefield)
    id: 398,
    name: 'Gopalan Coworks',
    badge: 'Special Offer',
    rating: 4.5,
    area: 'JP Nagar',
    location: 'JP Nagar, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeJ05rejmqzzGRmEa0rQmxgw0O__1v_OjV6nnwvD3jo25l4iz4GtQcNnzv2epf0ElqQ3PIFvOoe8_lLKBjxCwBJXy9eEE-1U5oXuoIjXEcnguZBVlu1URRO1uxjsOQTRGJL0ag=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfyd__VA84q5Ye-HFQkNCK313eJx3RgjwkoWTxo7NetG2_JlQFAmimL63zDt_1tB_7Mh8s3ocdf8N92m5SWnAidHZXZEs4zt53geZvJ9SNayUXSp4IAkSXCpCL11yGvduGBXa0c=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdtbOxdOvUCzsxIWhqJebIZQ3AHkPw5_IWzRGvrzCH6O7ELIsA3NH7XO1LNjFFiQtyUb6qFH_zHyD2W5I6j8WhXyDU_a-I92ivGrburd4Zdzh9qKy_v7C8HT_I5Rb6l7ZKA9b9LUg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf7mmJrTcIeiNBxBbuIyyzmydp48Mr3_wSozFW_yytHqZ_jh4bPeTI3H-I9rzcl2uPPI3FK-jFdOQJo9ia8Qwj5einCLiCZ-VQDDjj0sA49PqE6pMYqJnVUABYT1tQf7qox5xIO=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Market Square Mall (BBMP Commercial Plaza), Hosur Rd, Madiwala. Google rating is 4.0 and one review complains about a rude manager
    id: 399,
    name: 'Awfis Davanam Plaza',
    badge: 'Popular',
    rating: 4.6,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeG5MG12UGcLvH06eT4BC9MZ22BLtg4X1ybfZY9B6C5REGFKTEzdiZdyozsBSKm6gyXCkd6RUsL745j-HwJ7DAoIfPrOVxUegYE6_PMx6MbQKbEXeMFFbdsqzFXu1lE_Ui1HAE=s4800-w555-h500',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdFpWiIiHea_UgtMhFoPNKF6ta-u1W0xXKb5clrQQCjxKsNvwWL26g0JQz_Q8nTLcaSuGtWCDKb2GA9AqxfGOYUf-krnJGd1VxTfgwf6nYlS9rCAPyPhkibacECGCWqhgFqS9ardg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdbokrY4U_lPcuqyHiSWGZaGTx6Dpk5DIyfREN3uXs259ATAvE6jc3LD2wkdfgxQiwqrETc4S1FSuiYfkb90bB-Q63R4UqV97PBAf0Y_2q2p29vU4bmkjeFeAD7-EmZWnzw5JlW9g=s4800-w555-h500',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeOWqzBwp8NbMa1IKQp0ahcZdI1jG7-X8qZMOvnZJDwyJ4f2jEhzGDvuqOMErc5jK511iVo-y5YXjcZKsEwLnMdDijR8Y1-DctnNDgGEqdzra5h8cPCeSnvYdi7N7B9SL1oCyuq0g=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Photo is Google's 'BL COMMERCE' building (Bilekahalli) - only 1 photo; Google has no Regus listing here
    id: 401,
    name: 'Regus BL Commerce',
    badge: 'Popular',
    rating: 4.0,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹8,099',
    period: '/ Month',
    priceFormatted: '₹8,099 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeUmJX4tGP-k0qkko--n3fK6FO8IeNEIW7VnQhogpR3HrCKxMva9ICcz52tmYhrgIY_po21MtU1y1dcECqLh2_709aQIq3sAc0KIavDKJ6XoYYp4ABZsbl5bcXkAJJzXEOUPvtywEbnCPM=s4800-w800-h600"
    ]
  },
   {
    // NOTE: Google lists it at 3rd Floor, Saket Callipolis, Sarjapur - Marathahalli Rd, Doddakannelli. Separate centre from Instaoffice SPD Plaza (184, Koramangala)
    id: 402,
    name: 'InstaOffice',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sarjapur Road',
    location: 'Sarjapur Road, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd_sAZwdz6cuntgHljnHms6SjTtu8-K-Txvpvjz0M3qAQTv98QBGZyndUGEgaTO8EqBo__S9A1yMjtgxJVgfliQKyQuhuYOxDtz5yGMdTbFxSwSsROW69lV4T8mPgNiIbvDnOj4vWwiVUPQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdDyspNXY609r3yn_OcN9hSyzZSW45GsUoK2j2NYUKNJemxt5-rJV6BhVd8ahl1pTMAuDs5SXU0ZSN45h4syi0tsv4r2wLDqgW1qtxd8VXNqJx3NZllrsjI6YNgvsaZJm1meX_7Xw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfCF_q5kNWJA4HmA_XY1BluW_NMuoyebIMVGRfUfL8IDiEYHvyxB7ckIAM_Q9FsRknxBZdwIJM7AFIm-lKp6OuVEDyEgNK8MJtp_rHNm8t125Q6W3YyBhp7fyEocoG-3LwjaOhv8A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdFeAYZ6CspRxatBGRMyaeyIcPipmmli4mTo-IRfiQWl_L3HhJ3tdKp9EAmiSFeA2jLjf3O5bslncz6PuAV6dccOqF0B9vOvaVFlHpTpuwUHrA_c3WffqhRGpEvg9mv-ObC4o45eQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'The Circuit - Flexi Workspace In Sarjapur', Carmelaram, off Sarjapur Road
    id: 403,
    name: 'The Circuit Workspace',
    badge: 'Premium',
    rating: 4.7,
    area: 'Sarjapur Road',
    location: 'Sarjapur Road, Bangalore',
    price: '₹12,500',
    period: '/ Month',
    priceFormatted: '₹12,500 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLecCunPTfVclGuUwesVxnjA1u-amAwjP4lQa_44PuuxdzU_YShB3HGQqKputVz2d5inq9xtc_QZH0d3V8_BRSkievCwXhSCTDEbN6u33c8dTXsIym8z9Kc3nkZiqyxTj2ezY-hFCjTYAJg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcj2OSSdRke5pfuSLezQDoHfL1my0m0mo1EYLtZymapnMqcOPcUIpU5YP4AoB2EOKxhMbj1mhzn2ZrGeca3o4AFY2xhCFOzmL8ZlaY1Ug1a7S0VXDN0FQcNikqjbc7g2BTknTR1mTD9_DoP=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdxh7AypzGWFn9-g1Fu4HOfwNIPo0xHwz_BTONezEVZedRJ6dCQkUqfspbi5cDjGxGCVHEoPwAYLvD9AwdoBEmyrhN4UiMNxjHtrOYZB3QI7KDTgi0p5TyjjTI1tbG4Fcw-2zw0ymjW66hC=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLekqfJxmH-q3TKcy6OzcO8G2Tm_rVlyTVzVXzBO6qIvzDsJgJsXMLo9nurozLwdc5InltfSU-Rdwdjpd49KOlEMToTE-p2jRQofDdmBkOYaWZAE2ZDsvq_Y02vZ2q9TDm60bVWfRr1OcBgi=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Enzyme The Hub', The Hub Unit 1, Sarjapur - Marathahalli Rd, Bellandur
    id: 404,
    name: 'Enzyme Office The Hub',
    badge: 'Popular',
    rating: 4.5,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeR5G3fevOXn6Q5AMQLd6VxIo4yef-atV_5KpYhDbVYFQYaVRXTHm5iH8V0DsAB_WxwIsTUNxKI6b4DpEI9J4zecR3n8pOW59C7pWVf9bUq_viuQNuq4P3PK-VNskX0u7nqSA-PKTRZAK_k=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcYJ3cnGsnsYPhFQAu5YbxQ0_LJLvO75cgwkfddlCIlydo6HRWzk7-oM4VidXcPv6ySx3Hc3rs2zXVEX8TD_FAye3XIfG7UAwyjzblMYQ0qwQZcZgK5tmTfF5s6IgG9dc8Xum0vkzKnFe9U=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfCf9ImhS4bLPrFTy9p1xB4kXrQB94ipcbhi3y-mMhuJaTcACyL-cVhYVcQtwKBMU1T0P_vutw-IxPzbF66REki8siehi4gEIXyMmvOpTATyQpzNSrMLFDvE2orXRFh5GemrIjf2IB8BFgJ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfibbPyHF_DcakoHHq4tewg67u7nGNdCWZRwJmNil2i1_y1UqE2IMxfj9CwEyUsNfqW1IG72HTenW1zeduPRww50sGmNjBqsDJbWVWNvc77MQvfT4mInTonbVu3XiuUA_y3EKeMGvaIy9s=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Outer Ring Rd, beside Microsoft Office, Ambalipura, Bellandur
    id: 405,
    name: 'IndiQube Edge',
    badge: 'Popular',
    rating: 4.3,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdleCLadpXVzwJtS0As_Q2lvHfLA5nY_Kaf_JeSA3mTIDvSWG2J1kMRjt-7UGDpbNmOC4RV6_BTYRAPVjvt4oveE4r4wblAzkVFzYRjysS5sYiqa-QBuKUMpzTqzxm_AcMSLO673Zjy7pSE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf4bUe8ht9GI6S6X80CoOdk1n3G65AN4lPLHlsownoWMo-RV_aKOiz9wQHEHQJ5HHu8GMWmsDr_Q5zjhcwNkMSmagWyJj029281vZFWZUawVAgZpD7CB47xijMQBq9yZPRQWF6F=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcx3nBVF10fC8OqtUYFxIrZtkP4okScLZ0VQe18-dZLDfuHsK_OzfbNtBG3Y9SU576FbWw6V2_xNAv3kCZ8HMgaq-c0YMiyvobepgZn8NwsSOZ9TQvTogYqSBTZGlh7GsG6scrJKRU5kNg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfNsCWUTQ2gQalWOOuPZUnKq_Cp786zNg0UXaKcjnElDc-gKF88v5UUSBbKk9OxHZddJYEd0x9pc4RoChil8-wU9ZpdR1RPCc6mGttAmIUf9HZ8F7YgMXmPt6R7hXGi4ezZwRlv6cr9r4FG=s4800-w800-h600'
    ]
  },
   {
    // NOTE: Google lists it at Create Campus, 11 KM Arakere Bannerghatta Rd, Arekere. Separate centre from 'Clayworks' (323, JP Nagar)
    id: 406,
    name: 'ClayWorks Create',
    badge: 'Popular',
    rating: 4.6,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc4lO0E9XiM8PsISk66cqwd9cipGWEtMzjzaoyS5u3-60ZcjkwIKwfAwLdLarRxM1zdmjxr3RejzkhGOcHU7X4bt4iBcLX90TveXjqZTjVaXMpD0ap-2V38sIKB7JlYzQUcWN59Ew=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfVtRXLJCZZHdU1stsYqUHxgwdq8cfm07zr7el5FuIDj8_wWyxe-ag2UsiL5e85YYM5unGvJUwJEsobZtmodnI4fz7SZPlvPWk2l6q3dOdQkPiwdKwMDBdvsUXTCnoO83seDp_bUBNYPyHy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcUXlE2bSb5r-BzD1lKZinzAIa5FqrOkUGu9Kmrc--bUdsFdqfaUELGMUovTCprDSqDyPzuvSXtqAGox7rHip7znZH9r3M1yKxAnVpUTwM-3AeGjiTknDYeVvg_xFvZ5LyB-Bmj=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcW9RS4U-HpgsXELrimxTOQAnbO4e-3sqAwthY7OU42AYK4zy3l9uBqXITWTwVkGb0U9LO2nXxVfYXOsxFxzsZuEnVwmuPA7jW0DjCji6XTzqksIcJM8HO08LyqjZOg8gJgP-_f=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Anthill IQ Workspace | Arekere', 224 Bannerghatta Rd, near Arekere Gate (Google rating 4.5). Separate centre from Anthill IQ Hebbal (364)
    id: 407,
    name: 'Anthill IQ',
    badge: 'Popular',
    rating: 4.6,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLey7pWSBk3paIRrdZMofMt_ZpyZUkD2uLA_zWgTk87AsDwVF2xvz-02yDHbFZlqv1db3w2xfoTy6QYIbPR4GQHt2uwgRMgCtLr2I-kTi7aWygyFQgXPQUMJgrJMmzxt9lGijdvrlw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf8h-0zfcjXpOT2ENRnqzPWVcHQrYeYbowe2abGeg8V-lEHQfShOLuZEE9claiIVWXrgjHbSHCZmY1p6EmKO0McmSDkMhcjonSZwm_7q6T_c-wiEKp__-mR82KXX2qOW-kPClU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc87L7SdtS2iC0qlqMMTMH7O0sWOTFLSsYkk-z9XL0wWKT73CN72DxQyP71GixK3tuEXgFGWF6p51y1JdqpuOiuvs7LGRTlpgv1oAm_vDIRqWhVs7M7DR85ytDNht53rzYGAQyD7g=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcZSSbEa5AMTCAs0TvxF8fC_l3dMMgVbhWbRkxtbKu_whTCboGVur3LY2FK3PQHfq-ed1zKV8xwhauq1B5MWOVbkrr1jgniT0gEBUXXjsJJ3ZW8vr4uEmkcqLkm-3tBKGrkIU0bzA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google only has Evolve Work Studio on Begur - Koppa Rd, Yelenahalli, Begur - not Bannerghatta Road. Your file already has Evolve Work Studio in Whitefield (282) and Jayanagar (355)
    id: 408,
    name: 'Evolve Work Studio',
    badge: 'Popular',
    rating: 5.0,
    area: 'Bannerghatta Road',
    location: 'Bannerghatta Road, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd1eRr7mBxKSqbfDfoH_PldNFZL90xGgh4MLXZ1O3wd3esT5ZrjIFe8xKH96Sd7gicRmDH8bW6vhCldhmlVFY9gYqKSTq4xswqs5ZquCvatCQxF8fm7qM-Y9mxQde0otarKmdLN=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfzp8pPdXxW_TLNpEr6txQJ-VnVzci7UA6PxDNtGdJxHh7kuQfUlKlbTEnm7OoTOHNMz1rEQnqqSifRSRI2rhdU-XlDhCaDmsxTSnEkdXBwvf3VbZBkxAjzcc4dgVnTEPXwJ0UK=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeyjmopJSTZvvPRo5GOxz9ZjLBxMSHomKiBg8HmPejOMJMblfIkI--ipAW7M8B8HCrNDSC1YvZLR536w8qej3xuiVbLcc-czbxwzqe6qX_NKC5IpTflEWCe4B2B1eV8HfZxPa87=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfw47Ex1fDezD3cblFr9X8i1tvoIcZdYoBhDBNnq8wWNhRHFoK6qBIKXPJZQPS4pV4dFzNuZ9TNqR2TyVfG9JiPcwPTnL4LyipD5ffkiplVrfozNYc5q-SSfpDJb5Y2_pXIeViu=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Photo is Google's 'The Fairway Business Park' building on Embassy Golf Links Rd, Challaghatta (not Bellandur). Card price ₹25,999 is likely a private-office price
    id: 409,
    name: 'Regus Fairway Business Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹25,999',
    period: '/ Month',
    priceFormatted: '₹25,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLckdlXqHpLvNCVatUzjwNZAHZnLaClAZVxIbr3BHuGeCgjZ9WSsUY5A5yKz8Dv_8dyAyVhlVC4LX93xBBooXG2CJjbAUNKvJCSIclZvjv7v7b4i0EIxLYdXrvZS6yvwUii27SDBig=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google listing is just 'BizzHub', A/7 KHB Colony, 5th Block, Koramangala - Google reviews call it BizzHub Inspire
    id: 410,
    name: 'BizzHub Inspire',
    badge: null,
    rating: 4.0,
    area: 'Koramangala',
    location: 'Koramangala, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeUOT7OeI89SOAs8gjXLATEtvFgcGJFxkUxsDpTOFT6AyqaRZ5Alhg0IfVXP8URk9Lwa2b-Kg0GmBS5S3dDI3l0qHpj7hp3jAqlkaTkxu1n6Lcv_5ubJH6TY4nGc_huObv6OhXf=s4800-w708-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf5-GRGsvk9i08IDycktlOT0Ajab9Rx4G0hYTH5KbnGPEP8y7Qz9Bcf5SMJkvVsemHmjjJ7aSJRB3JAmtbdoWnXZZwRvMwpiDV3loguc4mYbLohoGgPKItXFernXNTwis5-umCfZg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcjT9VdtiUsui8bJHelT1DJDTy1nXNVEXGOm84uJR9awNO2tJ3CtYyKYRQFfBSBxkTVT5hCuQakN5b2h7dNLIE_NJPNnu1TLITpzJQ1rx-9kQxkiQ-O_5aWUzUUkGZ0jwFcgUCQTg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeRUdx3H4n8Tcm1FK8BO-CkqU0CWepdFJfAOOnG3P2KIi0HTY_KPVReo1OMQcXMARaEX8DCEhcKIovEL6ttOM992jJ65GJbnTexxmBIMqtqF4MtxnuRiFrcfi0mr8qQsixN6ewPUA=s4800-w800-h600'
    ]
  },
   {
    // NOTE: Google lists it at Vajram Esteva, Marathahalli-Sarjapur ORR, Devarabisanahalli, Bellandur (Google rating 4.2)
    id: 411,
    name: 'Awfis Vajram Esteva',
    badge: 'Popular',
    rating: 4.3,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcD0bKLsGU1AwpmpBMt94Ptbhvd3SYMgxnveFYZsXeh7lqsCjhBCpikXCo4p9iDq8NcDiz6MJLeBzhPqlNTm63y7Hw6cpSHpr1kCuiiPjqS9q9pIBAI4zNkOoEsgKXzu5p9pIu0Hw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdKLM6afCBjUlOcqVGgAOMG-wNiiM17_xFpKBz7-u9HZuidm_wpaDyZ5bsd9e2zHNkuzHfNCwzyGe1wwsszrN5K-hRiKYrzk3LDZ07cT9BwO625BEwBBEG_gn1_HUib04M1K7E=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe6MhCxQMjQNPNY4eUrbOP-cwoi3XLmgWHIOV593eCiAzV_BvcDX42PfVUB5AuI-SfMHUm5U9qKn_AsiOk3vGYFNryfdrH3_Q9KqNYZQoFa7DA97O5g66puYoBlL3ayjZYWUwkq=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeWo6qw2TarIF8Opp5GgUoXgLruKoH-TFYmP7TygLsqhS3ULkWLtX290sCYD2dIOKllV72Q0EJmlG_53NSjxHPFHbIBbL6AGDf_SNvQz6szn_SfDn5pXE0yzkeR49MzFl_lLycb=s4800-w800-h600'
    ]
  },
  {
    // NOTE: CoFynd put this in Nagavara; Google lists Smartworks Vaishnavi Tech Park at Bellandur Gate, Sarjapur Main Rd, so the area is now Bellandur. Rating is Google's (3.8, 216 reviews)
    id: 412,
    name: 'Smartworks Vaishnavi Tech Park',
    badge: 'Popular',
    rating: 3.8, // Google rating (card showed none)
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf40ybPxRfKBZz8ABqCDpHdNStt5p3Y1RJNkUFgR6uepagjl2v3hI4JV8kXy1hcz3ATdFnMUJgkVeKR6RZgn-ZXjXEIwU4JFfiFIVWeZ3XZ8BmhVwPe0ilfvNumkaHltmrYf7nqJw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLckAudbPclcPgLW4wp-vCQlhaLIh6-qKQVGRmUr-MXOIwRVc6kParHXOlydXt2y_ANGU7f24HuVRbgQPEDT-4cFXxxDj8fORGr0nPmoEW6H-LkM_uYNI69L3WwklRqoy4eOswGd=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdegIqUB_-OIspr1fNIsEkL2VJlycLnEpf-5fExB4O4kaRzMtLS-Fi-VtAVQdVXicpbZmAQ1ZuEEeG-7FLjEAVLP8Ug5QiqHgebjG2y0hoDjNlf6FNSYNneDWrf7h2uWK8yFPRM=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcNLMraWb1yWX5fWHgyaB87xikhfgrh1XLk5a9CT37Uplav3bwsRSZU0phQ3wjgf1kIawIB4C10lcFb022P7OEMNfQXzRYWas_NQS-a_Nosv99TSlPjBDlxnEeQTlldFEyOkfDMtw=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google listing 'Innov8 Coworking Space Mantri Bellandur Outer Ring Road', 5th floor, Devarabisanahalli (Google rating 4.7)
    id: 413,
    name: 'Innov8 Mantri',
    badge: 'Popular',
    rating: 5.0,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfzdycqsqTSTC83wdiVoCo65IGR8gNUd4jznyuOyeyuNRvYzb2JQOdZvLJ8EEORoEnkIPeEP1OQUqSRvPMg-pNNI7edlVS1eVUipTokW0NSQVGqAVXgKhPzQT9u1gwFqc3r2W-zqknd2LT3=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd8n4NsrIFFdX2zGHuBDgVYv1CSASY1eYaG7JSib97SyKawK2VxtZUygZBNfnALD2_1RBY-oktBn_0oU-gcp6hFAK7F3D8JZwFcCZ2ZtTJ3w9LCQYNA6QRw8RqHYcanHWdav_c3TtFknX4m=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLct7QLHENfMIuT4wuNL23m50k8SBL7-L3i_1-nIhbVIhnl_cDStAUJ5wU6q0e0qwQ1OxrbWr7xi4Sa1ZaZw6Dq_pBH9FaNJ7LzvAtiTHh9kfdQokxKx2k8NeezgIefT9fi4Nofd5BYJ69qZ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdi9AsiQtABJRXFh7WcJZXcnpcppdV-cE-0K-PLizHsq-YQzqkkdOJSLB316oMpWT3uDUaLTgnKP2m4UFe8-ZZWW40hRJUxCZyMGM0kiLEx_TG3cuL6Pk-rQ_1LUjPdRFeLXAFrYwF-lhai=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Towers C & D, Global Technology Park, Outer Ring Rd, Bellandur. Some Google reviews complain about management and parking
    id: 414,
    name: 'Smartworks Global Technology Park',
    badge: 'Premium',
    rating: 4.3,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcLAGxznwAqpv0cst5bZUZxVg0g0iUJFbQ_AVXv2WrmPe2HdU4-VDUs4EqmFoFB9vcaArtuqXD5OIyChkk3BAZZxNh4elQphUrwK_664PYgKKU0LqZmdb_dOJng9vhrYSIxFN4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdjcPga_z7xnaFglRKiGfKf9avB84N-tUTCvLxtKlXXNH7__4IMywWHGMs7qEL5bRIxh08Dx8QaSalxUQEdKXseXNkHRoJ8BdgtLcRd1IjDs8m85DTN5e6bmg7N6shtB2HDRNJaSw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd1ZaK3BkDlX92sHjgwwxyaSkWCRWvhraiGdwo5zAh7hhKpN3BwtTLCD9ej0YYAoXW0HmBIuxSJ_OwGFdjKxrWEZAz3kXq5IZcvn6nl7ipmviUU6GtkGdMv6UBODKfNdD7VPEt0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcUjWkVa38dCmPJF2MD2TZxOGq5jU4TFzmk6MDwf1T8ywMC3HvwDHGJZz1EOY14SINpJlDp_DR7my1c2rplyVauVFhum6sp1n6oJIv703taOcKRdmVD-qdPtKNA1SmfazpEr_5P=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing '2gethr @ORR', Tower-B Mantri Commercio, Outer Ring Rd, near Sakra World Hospital
    id: 415,
    name: '2gethr',
    badge: 'Popular',
    rating: 4.5,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdK0nH5ScC6emke6PmtCVLSY7D5CrQGtI3wWfVTXulQ3tN2NfJD_n9vjV04XxpIZ-Nl5OtaCFw1k4A6ncJwq8b8Mz9KrLnMU7YBlU0fDeeyw7bXNRLJYV9MTChjU-3AHDEL1YRnqjW01krm=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdeeMcWG4a_mS3gVgl2xsDs2eeZ4fBz3NU8wyW4eliN316WuBbv7QFqaA9sgrRWDgHHX4CYIyhT3Bhn26AJG34PDzv2XxlvOVMreo8PIFpiWYqPJyjt6aI3mBLgQNo9jSXUO5VO=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcSPce0AXqxIkU1PxTdslYWtpGclr5yeunF_SsrRyZQq6KKxffEsGDzwcZk166jcHp5yuJ5HHCBeXX4vAiNXeFYFeET6viP3nKdmO5Et5jjBdAQFuvCUcqwPuPttG533mLjKXCKrOXHSWXM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0ma_3VWHUeI73bBta5XV1YFC8oSk4q3RDNfN5FN4KC5gi0AngRrgCYlSBqt1QLl60zhgmLxvHKwaJDNh6u1svUwqI45VQJfrfwkfolrc0BhPNSYE2dESSQZcsRUW-NBxNEoXx=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists 'lad workspaces' at Site No 12, Outer Ring Rd, Bellandur; most Google reviews are about office furniture they sell, but the photos were checked and show a real workspace (desks, glass cabins)
    id: 416,
    name: 'Lad Workspaces',
    badge: null,
    rating: 4.2,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc43ExoMK5caMp4i5zuYSXLGga0dHWVSaJ6jVlhXiCkVlpGiAl0Vt1nUWwD5ja6ZArQa0I4hrL6trSM2bn_e6I6ipb5I5zooqk_oGo7CDeb0rs608s9sjUPcbm8jzHOFtzMGl4e=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdtDmxmiYX-E-wdv1AwyJUYQTgLvGChwzuSsfcp1rNOVKy1hJdZn_7SFZogna-s6OjEFGnxYcMJKTaq3TKcca6b_9WFESjWB9iCvhsyP5k3A-1jGrN7XobNn2HOQRVZHI6_E_NQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLekEdZ00LufkigW_KiEE5BxtKhlGw1Exr_Ws78uOYMMgz6rXK2jKU0ARzpxzyGAl6SObdf5ixRXsAfKtJVhK6YqmhxwTVsOWGci4AqH4mdNDWOIWGeqiDjBeU7ImlUmGqy-j4tQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeSaxdV002RjJxuI63EeS29QW_keLNbr2jfc4S8ZJ1tCw1D2FXIaPmag_RifWifSK5kChicni5E94s4EjAMbeK_AXSLJbB76wejvyedOm4Psz19u-Y85q6b-SA7hu9XJZjFIn6coIYE0EGS=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Survey No 133/2, Outer Ring Rd, behind Embassy Tech Village, Bhoganhalli (Bellandur PIN 560103). Google rating is 4.4; one review complains about lifts and small washrooms
    id: 417,
    name: 'Incuspaze Qube',
    badge: null,
    rating: 5.0,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹9,899',
    period: '/ Month',
    priceFormatted: '₹9,899 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcCl3fYQqJIBRSyXZVnw2Kj3mDeImDa0WJd42Pqsx6MDzX2xVztIzlZ4xdNC8-3E5_kD0FfbOKSabF0xFJV6WNnwa3Oln1ImXwLUhz1aZCdMKy7e2KNyyih6bceqJnYYgGEtZI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdFeCMSrAp2Ei4EBq6-5lBFSXJFO7ywFrTK4nMTG68XCYsIXzojxCd6WqRbGFAwhcr0rFhpJuH3lc2so1goXyNXdGLnnnFzmGc7L00TgF17XsHxEDlUS19pPnxuLmIV9QOTUpQWsuxjPUZg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcdc3tqms-HFUrWSKytuBHAERcFvMjjYPp3_-bT5v-xvNJDvTZAvk8cY6a1_VdO7p6Zbjm6LIoxf68Ug_Q2xZO5H_O5Mv08HhgcvV5w6yCm529P2eLaSScfmhXol6qMB55OuGfdspClL9-_=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLca9zgCbtJzwii1vz20LJuICvUhnntM7FMZ0ImDeoeymTQF17jNE2a-9xged7fOhrRmDyJj2hY_CQjBtbYTg4jb-15T0n0K4NFWOy4b6g01GMRFsJqAJCjGyfWtwFV1LCrSIRLKVu7lf6Q=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'COWRKS Bellandur, Ecoworld 6A' (brand is spelt COWRKS), Ground Floor, Ecoworld Bay Area, Outer Ring Rd
    id: 418,
    name: 'Coworks Ecoworld 6A',
    badge: 'Premium',
    rating: 4.4,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹20,799',
    period: '/ Month',
    priceFormatted: '₹20,799 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLca7RXgbzml95pFykKCGSL3vISGy64_lOvYwP3YZ4lTuoMAWmWhb4JQC6DKbGhXLvjfDNULWEHD-OrwFvo6bvcy_f7AefH1sCvIyYh5HMk6jD8F-tIHFrJzWbIcB93NGF7yhNVr=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfmnS5t0hDufwZc6sDip3AZo3SMxkCX6-chW7W1JTpSoSUg79v9p0Wv4yPCDXK5mifOquSykojbzXWwsoyc7FtWvtQqBPxZbkRDtpzaD9QetLJ99YwNSwMLdbe2Rt23WgsBWhZpADFbFPXf=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeWCimKGrAed-2K3l7zA9tzJqZAE-mX5p_jCGEgya_XfkgG_uH58ev2bHFnz1XvSQtG4ghZRJ49OZ1q67cohu9PpniI1B_zGTW59exBtmOjzqpxA1y6FKd8K0hRr8xI6L4Qo8GW=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8g58KOndB2mmmwWuS6h7CR9KiNgk4LSVOBxUVXEQKtjzuSsM9roBZD_7L0dVS7YlTvfX-h4kWptqsGmue1x8kuIAhLpx_9NWixmQYff5ul4T_lZwZWj6G8EuzteqmuUmP_OLQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Spatium Commercio', Mantri Commercio Tower-A, Outer Ring Rd, Bellandur
    id: 419,
    name: 'Spatium Commercio Mantri Commercio',
    badge: null,
    rating: 5.0,
    area: 'Bellandur',
    location: 'Bellandur, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfZBEZR-gBVcYhOtHl8QddyBVOiau3c5ebPyzYQ_DdRygwW064YbpMXFFd0BmM97DZF8zG_KkSj75gaP1psjlsXg8QcuVzU07oqPUISFUwxhkqjsaQYcRx54u6X58Uj6GBkvZ9e=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd-CajQxs_ffaoLFemO5IzhVhNpUkMvhSfJQDL5-nI1ppnIm05rxZm_gzmhhnmHghiouDDC9QYWKEt-dIDcT2wswiagx76STo4vKsNgfre0NqIIywBY2Lm4tU79gOzw4Wx8iXdO=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd2t7nSniX4yyTHXxr8gcBWf4OKgEzYJ_anDVrHPa5P0NUDwt5NKJ3YRAJQSWmCj3jKN5WW_RA8t1oh_nv9l2nU3_d2mSIeB00IFCANaXHvqwJEWeNDvK5XUk2sgD0dHUrdiVKf=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc4Sgyh1J-n8SpQzGtnKVXU21116kM-zFz0VCFmX8AbjL4ylxobjpA8KvDGN2YubyteyjAnqWAUabr14sHjGuR9g1FyLWWCNMoSWgWPm5S6c2yCcLcB6g_EUox6OdXbjBH5VZTt=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Aurbis business parks', 58/7 Outer Ring Rd, Devarabisanahalli. Separate centre from Aurbis Concord (232, MG Road)
    id: 420,
    name: 'Aurbis ORR',
    badge: null,
    rating: 4.0,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfG04sb9MXernqQFmOZOA7xxI2BHIHa4LneRjzfMuXPWuO5CaSc02YRtgUCzH2JavPyopJM9ZWwpoV0Xx0ebdOqJZ78qkRmJZGBhS5Nv3RZSoW7t-Sk7ChDPf5DRHpF2vmR6SFg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcw_z1IwYkgygmpqo3cFLfUxMKx2J2lDxWE60Y8iK3mN8rTfTmNsizXrHIdU5CGGiWb4H4Uom-VC3hJ21tb6XlMdwkuHNahlLwSlQGY09oSFvu1j1TaK2tStWguG3q5aOL1F_5E=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdUoDvlT41JYB-DnQ3acM128WRYmqunr5eK-f9wnKR2Qp1kT5zl8lSkSEnfrpzRfECyunZuRzYQ5Jrp-utbFIubDreqNLHBEEuT_88bYwLDx09mtg2dwaU3fe-6zJonGNAIFXKT4A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfE3dSjoTL1rEymDWj_gsP_sEVQrWFLav_BunQ3uyu9u8-3MBnkgAJ-cJNJYKBYyZiaAoTsUe_lmnQEAAowbkQHdFn058VOvM5A2s1P0Ho8rYZdcSVME3zeBo9-I8eFqc0dL4Psag=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Helios Business Park, 150 Outer Ring Rd, Kadubeesanahalli. Card price ₹59,999 is likely a private-office price
    id: 421,
    name: 'The Executive Centre Helios Business Park',
    badge: null,
    rating: 4.5,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeuUz2Sj30Zq2PeLu_mwIM_l1Wdum4JmvGwqu4-JVtbAe1ZGIfm-a9RHq8VHY02BK869rvhH_SGPI7vtzYwlYx6d4HF27blGIkR49HDg1zetcGV3c3qqAtzZXtAh2-Y5B2GReySzg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdpwAdkmed7SWbkzskv-IitAFVhT8B7UwMF4YZHzOMLTGSkOnGEzMjwpuUfdPIBEkPS4RYH6AefkZAiSHQAeII95wU2_tqAKCi0WQfyubh7RciYhlq0LhjHWgw0nq9JHsGhSHE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemNOZcneKOKS53Rr9jVmrj9aSHdb9429Hdjvjovyxu-5eHlqVlwQc3sfFCJtsPBKcdJkJUVZl-QEunK6MJr7k-WOy2JgITc4g5a2OXgwzoxoqqoFvOUwrbvKfi9isIlZoRhN0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeiRsj0aiz0eij5F8RITrLh8vauY1N_E4lDGbNZzRSAwDEwlMd0IYhLJsLu9qH5kPAK9KjeJ7fUirOIBKMyC-Qhohq1PU3HiHe_vIVRRTpj5Dbhc0kbyHYNDLuKqvBxztAfkEqL=s4800-w800-h600'
    ]
  },
   {
    // NOTE: Google lists 'Bubblespace Coworking' at 824 HRBR Layout 1st Block, Kalyan Nagar
    id: 422,
    name: 'Bubblespace',
    badge: 'Popular',
    rating: 4.7,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwakLlgS-UEpItw1AAnlNyuipmvvExHDiceCPz_MtX4BfuqtaH1eeb6gLS88gSm83_kU22IMJ_xGUr2stgxsg6TPnf-ULyGRqM9rCzkxHBo-yXlxsEXNZABM1CHyvgv66QDWIBcw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdvpk5Xl934qYxPdwWUxce8UaIZo8a63rp6ZiZxow-uG6dhW6cMzZOfXdFt2kLR20LuCxnXnn0gkYmOvB7D9P01zZ5fMkCzEDMJt4YYiRcNpDRLPdtVROIltURxT_JuG5Z9U38=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdI1TrHwBgVhDi2WthPm85hiDUUn6kQjpl34HyQj9XE1arrDWtRtyWtNCFhqYHHb3GL84Mvgtyy5JzMRwrL72O2DVYKEbz7jWahT3QTtawSZEkgAHtaFvTCR5gDJT1tIuTv_f0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc2uzGk8aAMZulbkZWgjn9agVzGn19WYAbydUBOr7MLgbmgbhXJyXLAPZQKUKIkcyKt9g4nIA1r79_IjOMr70L_h7cE5nHLZGrPPnk6duSEuElpNkpvszpI2bG_uRcw_6mD9ng-GE96FU5E=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google has no WorkMatterz listing in Kalyan Nagar (or anywhere in Bengaluru)
    id: 423,
    name: 'WorkMatterz',
    badge: null,
    rating: 3.9,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLeu-4oxltv20hOdvf6aXeHQ1ji8Vzb7TmnCwaM3Yq1dfh9x3sRQtq53JOEvUDCSymIfOqpksSnARErvCzMHeq_9WFIVFuwmL4nbLhACIgVksryICrnlwUAodQS2gZw9TUF7bDLZYw=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcik1frMLk4ULLtHPtwn6pHUveqWBY40yRZQ4NiDPNutcLygzZT54-whjPwGsFWCHkuUVsf93Cl60Cga-zTjD7J8ACNC-1eDPmqZb1LmN31SCdDgXp74LNgU14wvBh6WG5tBg5w=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcURJYvd8VeeimGYKxeRhVXr9kc5gAFqKXrOc9E4d0rwgzA1uHNuuP5GwVSNmM4nawyTbyKX5W74S5hiy91VKHG-IaZYtpZFRLbDTdS9qlIExzjNLBqxsPcBUKbgAGHPqRlcQTg=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfS56PHe9f3aiG6FM4j0wpRpMTEf6M_8v1KlqMdqhVryekeoB9EoATFtDmOroEF8I6byMGAbVtnn0YtK5yDnaOLe8o29-ZZTVeKNuKuZiaAo2fk8wUYK14zP3wJc2Wje26QGLg=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google only has 'Cubix BPO Services private limited' (Babusapalya, Kalyan Nagar) - a BPO company, not a coworking listing, rating 3.7 and its only photo is unrelated
    id: 424,
    name: 'Cubix Coworking',
    badge: null,
    rating: 5.0,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c02eafe2d607fc17b3c2d0894980ecf57811e790.webp',
      'https://img.cofynd.com/images/latest_images_2024/c62f3d7d07b22667411edf539294b047cefcf356.webp',
      'https://img.cofynd.com/images/latest_images_2024/caf936d6a252315537362279321855d93f11ca72.webp',
      'https://img.cofynd.com/images/latest_images_2024/5f3a8cd83857ae60a70dbec45cdf73c684bc122b.webp'
    ]
  },
  {
    // NOTE: Google lists it at 5AC-614, 2nd Cross Rd, HRBR Layout 2nd Block (Google rating 4.9)
    id: 425,
    name: 'Kaizen Workspace',
    badge: null,
    rating: 4.9, // Google rating (card showed none)
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf0vUhFZmcM-RdzcTkMEDAQD955WSsjx1lzyRwZHzvwucCAYI4npw0UdOMyHxxKc-A0qyACxMHOkgw2uReaTjlid37TiaJDU9yjMsiE7ez2i4em_orSjgy32UYT8qnAkUPlGc8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfXbaPlsGhokPPcJWow3DeJX0pEaSa7lhZZS7y-RUqTidDbzXd1h1bRolcLVLW6womSdQLyMNSVlwYY7_Rx6ScheFEleNOZl1zRE-93O-I2fjs3zB47x62SObCOUBthaAq2aSBdLY7BZEiL=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc_CAtUEOxidBpDKIVsvsG0inuJ40UzdmdTsihJVGgD_HzSicczcdVNopRFsFOPyOE-LBWngxLcihWZobV3KKICG1_2MdyWnbfx3roaBFHJo7BlHT1c3m0CGR_JnYRMR721WxEd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8-F3Ls0ScTcc2xsIN5QC2jaXNfPaDp-aiHYHSnZs_gk1e0xV7kogeo8EfjokCXJvLcCWLMoMR2H92DVILNWre668pGmn6QM0HLWMCUaieMjK9em56MNxc1UrJb7YagwWu6yUO=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Venus Communitii', Venus Hebron, 4th G Main Rd, HRBR Layout 2nd Block; photos show a branded lounge/common area. Google rating is 3.5 and most reviews are co-living/accommodation complaints (broken facilities, rude staff)
    id: 426,
    name: 'Venus communiti',
    badge: 'Premium',
    rating: 4.5,
    area: 'Kalyan Nagar',
    location: 'Kalyan Nagar, Bangalore',
    price: '₹15,999',
    period: '/ Month',
    priceFormatted: '₹15,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLda06qKO24joYgh97VQ_7kUG9s9Xi5NZQZdIyO8lcj-MM7fk3xYM5ZvWKmxL53Fqmd_Snl1gQfF3oLTQOcqi9aU_zD6OQINQAT4x-MWwV_9Si2H-78Siy4Nmxd4Qc0qVBNyOCJr=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd8pt5OQ3qdhQ-x1wP0KMPrpHCYga3t7a5dFwNIiuTsFfGcD_7mPzk4neyRtB6Ec2rw2XpwQOk9fu34WNhStZVbtq42u9x5Mq2xgtEp3j76IG9dsbXkaJbQMw-0Mn5mGOfAcj9f=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLctSbEMv_YotYWZuQzSyTabHgjBUo0pHzJydlhK-9Yx0VspHNnvFjPIu-X3oILawpJAjOpcmWcXlZHgvkOnoUs6C5f4eWnenRO-MUDvTbZWd89w_KE83r3CfheGLfBBBuSLQmTEVg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcCFXpkFJc2SantFsSOS4iVwyBVkOcgEnwUvZToRStKwmagQYKH7F7C2gaFbZuaqnytYaXXSY8YPMp6Urs0_ahlH9d20AKI8VSep_NfdLBh6EAFUmccRNtgOQ9sZoVqnSH8dnNn=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google has no 'IndiQube Iniche' listing on Outer Ring Road
    id: 427,
    name: 'IndiQube Iniche',
    badge: 'Popular',
    rating: 4.3,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7ef76dfd9be840ea548299927d3289c6cf5ec09d.webp',
      'https://img.cofynd.com/images/latest_images_2024/5da9db73f504c0157d72f1af7b6c348f44ff9631.webp',
      'https://img.cofynd.com/images/latest_images_2024/ed007bbcc1421e46430a3221f1115f866c581971.webp',
      'https://img.cofynd.com/images/latest_images_2024/b5a036aacf9d52a419616c42ef48cf853d9ffa76.webp'
    ]
  },
  {
    // NOTE: Google lists it at 1383, 3rd Floor, HBR Layout 5th Block, above Axis Bank, ORR service road
    id: 428,
    name: 'Dex Co Work',
    badge: 'Popular',
    rating: 4.8,
    area: 'HBR Layout',
    location: 'HBR Layout, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeAjjwfHxGzLRXOU2Xn4K6En2bynLiCW9Q5DBe8cZCPwwENxI82I7MuMPmI29YHHb1b-Br9V8PT4QEuaJh5SxOH7Cb3CEaXH1Dlgp1PtpLwdmcd_OjWs-TIirOY6KC2AKzxHrB--lQdpd4=s4800-w382-h510',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcD6tHMDAbcEiXAvi3aI1K6G5Pd5d6k9Vpj6RPhSb5FGe5kCfwELwTPp7NPUHLo68nGcgJcygeZqva5yEuzQXJRnuLxDaBhjaYlIANT9c_KDQMBbac4eH0MapYTd9G0c0QQfPrx=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfDT0flKFPZhnRLpXOJOnj4SM0Mn60aBw-VkYQgh1FnN07HekKt8qvnPk1HRkhu157TMhQLq7KvdO_CDPiKmbZx2UY9zNpI47zo5QE1TtYCICyw97ZeeNwiuGLGgwrCFg2aUGkE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdVaQz0_XzMDLj4N6pPb3Ybbq8ufo48qxV5__SH6GBkLlL_K1_MVxyOkwjk5reen7ojxugBNCtUZBhLVFdKTU-eFakNwvUbBDhK83pgjPhvK15sYKjIFwBUe37UVP_PvhAPDW3uzwY7qVI=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google has only the 'ITC Green Centre' tech park (Dodda Banaswadi Main Rd, Maruthi Sevanagar) - no Corporatedge listing. Card price ₹35,999 is likely a private-office price
    id: 429,
    name: 'Corporatedge ITC Green Centre',
    badge: 'Popular',
    rating: 4.0,
    area: 'Maruthi Sevanagar',
    location: 'Maruthi Sevanagar, Bangalore',
    price: '₹35,999',
    period: '/ Month',
    priceFormatted: '₹35,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfTOsuP6njgDbV2yxxS1pFo5ssZgte3Ko14kxDfQOo7ERxC2M9IsNgGKvdc4DVDFFeuBPMgHR4vBtJhxVL1_0BvrEkQAMywaaJ2zVRujsaC-N1P5aHOs8E2q3JeSyJ1EQ26M11K=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdfhGrN2-LPz62BERsEOsTjdPCPpFUETDprrQqYoJFqNHykdYveeFgAXwaH1ybWKvvXO-jXgjtCucKDb58h3S8sgujhQmB163i7DMheeRUP0hveVApIhnlPRgqaFFzxr2rbCh3w9mWCLoF-=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdQ6s3bCPF2WJCN8wDX6jdEuyOksxkjU0amWcP7tvyljCEEGdNbfbpSQQ4xOqQrqujtrHRAsy_aX-vAVG9VJa3a6VK7NTrAetUKtwC_NbbBk64q7JGkyf-25RuKUKs1XC0AXWpM=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLevbzHcYViyCGpw9ExVcFh3FUWGxuFbyU31KqexqLAKOXgZSiidZDVs_i4r7Ovgb-2DpydLgVBo-ggBHkdIi50RpGiL_xY94Dfr_NccLoy-vG4hKcTlatUPSENIj3Chr4JPcvzV=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google lists it at 2nd Main Rd, East of NGEF Layout, Kasturi Nagar (Google rating 4.8). Colive is mainly a co-living brand, but the photos were checked and show desks and meeting areas, not rooms
    id: 430,
    name: 'Colive Premerio Towers',
    badge: 'Popular',
    rating: 4.9,
    area: 'Kasturi Nagar',
    location: 'Kasturi Nagar, Bangalore',
    price: '₹3,999',
    period: '/ Month',
    priceFormatted: '₹3,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeQhRRiViwM3OKuitR6KF5pNWR7V3UAHBwiZ_EQFHXLA6yV8zX0Sz48SjHGXWsIDwCMZS8O93TX3WwqV-ZZE-cyPh7IN6yiHxZrL85_lX_uKLh0EBltwHWweuwZJYK00EL6KJBpcg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfQV7pkY-zJeg0XRsXeH-c4-aMki0wgVS1aSX8U8nIt9ZrNLV8WcdTpQlkIKSH7uGAQGWs4ifWPAD88Lw-Ji0gH2vm6U3zBtcY-wdNOuqmScXU5VER8h6IhT22cpZp2N9bJDySfnA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcaDF0fOPVg-lqBZxk_J5tDce_lwCSonFgu6107v_fhCSc6_E0dQz4gcYhEC33Lgv7Z_COFBLGat3aDWodoX_sfMIchzCgMFVCHn9w3OuezSXzKo-f2CFlgy9ENKxeLXu_qmJg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcS5R1PdO-_d3jwING5LdOCsbx18riHDKCOCMn3B4wvLx_vRNdLHr9wwzjC9CHx73aa23w0ZpcI5BRvf5BB-uFXUhBCCFcgumbv_dAVxGWxElWDhP6UcqYd10EcswBDijArMe_1=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google has two Work2Gather centres in Kasturi Nagar; photos are from the Ambika Corner, 3rd Cross Rd one (rating 4.9, matches the card). The other is at MS Plaza, 5th Main Rd
    id: 431,
    name: 'Work2Gather',
    badge: null,
    rating: 4.9,
    area: 'Kasturi Nagar',
    location: 'Kasturi Nagar, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcgJ4MUSqz1OPcpoPDv7kbG0RYqFlIsrUv8Bh7njA0xiqSF_08UwfWQgpa9VJ-8rdRUD0mab2sDtD13PrjpLVCmV-viXrwH_QN3nyhA7KCjgc6dwhsyjKONsp9pBF2OEzuuGFfw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdP08f55yZiURfKbm4UNmIv98SWbcKFG8yCXRNTS_vNr7-XKal6cyIKeDF0vzIE5xyfznfT6OGeGA8jJANbfvu_Sbni6EwWWAECNFsVx4gYjY-vpR87Jlt_8W0T1ujcTvkrFxMn=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcmo2OviNNzuFIcPNs47H2i5-O0_9RWJ1cQgVhj-Kar4FoNmD1dgBsxJmvUEz5w55llQxPzZb4gkJSypH6iwjPT0ocUPe3FnEgOtO_M7P0-FKS-gSZwrQ14pQKZUMMvVaUfio5dDA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfoS4ybwdg_YLgKpsIHpHJO--H3h4Vi1SuqpdHPxfvbh0aKOqt_QRnqOlq9NiJS8mlNtoyqtBYMBp4XcmtfW7VytwEs4RYuCj4GPh1XLMYr1MFEEr8jQi3kGal1t6oUdE1nhvJ3=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Elite by Awfis - Manyata Tech Park', 4th floor, MFAR Manyata Tech Park, Nagavara (Google rating 4.9)
    id: 432,
    name: 'Awfis Manyata Tech Park',
    badge: 'Premium',
    rating: 5.0,
    area: 'Nagavara',
    location: 'Nagavara, Bangalore',
    price: '₹15,999',
    period: '/ Month',
    priceFormatted: '₹15,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLconwB9f0zCnT3VFxV3EZuXSD6MRYc4Ku3V8Ao0ImdZNz00sYK1QL8H5acRQiwCDIlKu3BnIejinrdDZB0hEPj2euKkadEEId77hOS_oDehyVgFdEWSCAI9iStb2ZOvz3t4BQXA1UFxXpla=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfIoDuli4R6-OULhUkfEhqzgXt9cjjD8GNRMMXaY5UZlQhzP9hkxzfTNQJXqlMqoeXQINTdo6wnnsa_gK0KlCBEJX1lCEZqRSyPEW7NzgFR8ukn_bQ4sNLvj0w6oBabDvYaWkry4jV1Jj0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf43hVa2agL1lAHIo0Rn0Q_cXZO8bEQapDExse8NggfWZ6RcFtyhdB1kCKhl_xXkafNAiksvsLpx4zjvfpkfv2ht-3NymI_dLTjS7vo1QdzjsE_GjO2wgwB3wwaVzRDs9RHpOxyGfZPz6Am=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf9h1Zr5wXBAQgcruZ1CuhxKEWdyCCxofttzqh1iQpmdIXBy4mI6H8PboVB7p53j44IscjrhGoXEDxGvqyUBhMwfRrtuCxwAZQZMw_6c7hr1Gs2V-jCmQtadnWTOZLSAGKDGZR9RhGW1PAA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing '315Work Avenue - GKC Complex, Domlur', 257 8th Main Rd, Amarjyoti Layout, Domlur
    id: 433,
    name: '315Work Avenue',
    badge: 'Popular',
    rating: 4.6,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLclYKnMMpE9A1neCSVvNimBTQOmj8Oy8G_cWhXje5wirqXPxQlc9mEhe6Pn3H66FkKNfylDezA3Vu-kfCN9xjg7nUUUE0hYo_iYfi5NIX7EQE9ly_IxvABxYKHlwjAIa5XlcCpvfE8W-X0c=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdiXS52oHm015pi5ZHChXN9BNDr7f5TXN9zkfV99rMtP2VGCkuizvN1UKcew0NtWL9fQ_R_ExPNsBr1cigFlZnnrhRBZDaEpm0ZBIijqV5eEb_BazAB3Elp98PbkgTBV_9hmnXy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfKWQEOzepIr4N6Mxsb_J5Ce6qRGQhQ_gkbJiN5Lpozvs9R5TStD8jule0nZKyFg5W17Rm--C9mjD03pciOFSA5uQYu1qZtx8IMWZCnMmgUjX9f0vGxn9S0RoVPuZhrEiIDpRxtDA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcisTwRIRtO4m4vUPuLbc7tRPq9ooaZzU_VZ8yYZrLIzec9YSZTd-Wbk5I1z9_y4-Ecw41oSePLBTJLWrFTYdkMhGzDrIsLSxzOwokf3Hwd62XeC4gZoiwYiuYTUIPRb4NryXPAD__O_ME=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 100 Feet Rd, Amar Jyothi HBCS Layout, Domlur I Stage (Google rating 4.2)
    id: 434,
    name: 'IndiQube Epsilon',
    badge: 'Popular',
    rating: 4.1,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe4nef05W0C9_3cgiqvmyEYRRuq-8xQsqMTnBKX4SyD-PvB77GA-fAf8VVNRYrLmEoGcYAf47mMRhAlkvuLUrWHQRjRq5reHR1WydbpgJsCHOVUxMtTKC2BPQt09bPqZgIx0dyYQGXlF2mx=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfAUaXyzs410SZ5HYzpmzknDSjIp_jCGyQ065pThyyYbtD66qokw-OP6hBjofuZmWGPMgpkCV_Si9fanmS64zj2X71NaPB5dRQI7cZv9qyIQIPatMrrMRqHvXHvcx_39jzUlRkdLQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0IsNja6_00pnNAp5OkXIrpIvbTfbZ42SPsR7wDHLbgtVmINLxN7zvSA4xDyRBSoa3uAZ2vSOpZZbOwBSkfm1PdT-BLDSqNJ5akkuTz5cRa4Wgyo9mkbgCd76UG-2NYbN5zblz=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeIMAh0xRSXrMpNdZV5FkDXMRvdyxJ8-yDgZCKSZkV-DAECiHfINfujzQ6Ve3YnSSR7155H4uTMFWfEmo192hWBh38pSg6M1kUILpYnCykDN5vvQ8ZqpM17mseYmQW4ZQ_p5csK=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists Workden at 313 Patel Ram Reddy Rd, K.R. Colony, Domlur (rating 4.1, 137 reviews, matches the card). Confirmed a different centre from the Indiranagar 'Workden' (id 261, 100 Feet Rd)
    id: 435,
    name: 'Workden',
    badge: 'Popular',
    rating: 4.1,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLer92ysDYs5PjzHQrXydErbtr5rOi5oOak4TxYDstuwzeMz2yZ3ptHrslE6jEHlezIj1owBxfHhqxqNUSUsV0udlNxP_CMxE7p5MQHi2DsoQ-F-uK6ISG5av85QjGo_2HiUYqw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLddgsPQu7ex_-rFbXQyVIYOtbFXb_youYZ8JIdsTbFZ6Eql1_CuVfhY_B2akLHaV-qJ6vYbFxamBmvOTp8Lv2E9yAiTuly_qNwTJHBfy4zibQAj_EGwM2FKSYQdTJXhhiaZCqA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfWcMWcqTeKwxSeRRlwp0KyR3MpEtkZSmRNaSKg-YgqxAausz8AEqUHPuOgvNWxwJYF_jrp-w7FQuJzYqorrYBB4cw-prgNsfsyE-Xi2JCa9hvexmChW2F4GXScRTjLiUjy7fhE=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLficbcnaYncrXSCzaZzXkB4q6gkG8EMogbIO_C1c1msS8a9xDR31FH5Gq-cZ2GtancyYoOK8zIzR5SUfJKKnVeEDHDeDpe1e2NrvZDpJYa6bsqT6T3awWyXdGzRbQodLoYA_1Yn=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'TRINITY coworking space', 26/A Patel Ram Reddy Rd, K.R. Colony, Domlur
    id: 436,
    name: 'TRINITY',
    badge: null,
    rating: 4.5,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹4,199',
    period: '/ Month',
    priceFormatted: '₹4,199 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc_1beR399kJRcyW7I5YtWSTepIJ9Fm1cY34tqzhgRL3IsQQkVAkkNZDnlhjO4fQ1_qz3QUNH2LNu6zxpJLbPQ1gOoXOZWa808QrfNPtICHLddspWome9YXWqPT9eE5H89lz5U_=s4800-w800-h540',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfhpb8RUfskyZmhEz4CQChsvOShzuY2guvLHX-fc8-nyeUNA-t1PchfXM5Ex5l8pSVQomijghD1ojm2syshBOAEVnFL2gQsgDRelfb16jRw3In3IHROWNz1uOvBe2W6NipeWMPm=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfPu2XCjbGIf87p2gpIh9s5svIcyZ2PJ-X_lzfbR3ET3E18FlMHhzC9jH4duRgyCKOMnieywBFXSIgKHwEznBUL3zkIrrP6--Rzwht2htflmNvQb_QDiYJDI79cjl22gcGI5N_7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd8tE0YLMBXRK3oxcENOwWW_N5GqOsblrB0_1dNXO2VKCDLRWovZ1gssX0F2x4XNsjJ-l8en-_54LSM-jB_4s8qnU04HNMaVK7lZYG2vjco_g7ZGptR_5JvaHsT2aicVBuwGI5G=s4800-w720-h600'
    ]
  },
  {
    // NOTE: Google listing 'Enzyme Offices - CF', 4 Kempegowda Service Rd, HAL Old Airport Rd, Domlur I Stage. Google rating is 4.1 and one review accuses it of pushing EMI course sign-ups on students - check before listing
    id: 437,
    name: 'Enzyme Offices',
    badge: 'Popular',
    rating: 4.4,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc9mn-qPXQvOufDQ2zAffzhRtbtKwWzh_dPtwlJAFpVbLNJE3YoN-XYV_6H-baBQR7RmhIM-Q-yThQptH1aRYOfG4VmiEFm__8nMUoimgediWAzp7dp0e13V-RqDh8U7k0hX45qVWwDJhEX=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcJPknAAu8WnTUGCcTOxts1nKt8WTN-IqHJo6wWt4u4f6GiAwovOSq3bMjQ4i8T8kulO9lXm1awPIrr_yjl7d9vaUcFTdrK9pSbezNTACeTs_N7AFbOn3BHtH0b4skx0t16i2BFRCntvGI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLclCtnxlcT8MDZj7kJvLzDqhM2HcnBWeKlrCKtAHhu5lCCDezq5QlFTBkZLTw_zWfYfkAqqd7U1i2q6zGwHSeHUKT0xGP8pczPWbT6DjLvb-Byrg9FJ_e8g6xEp8d7fxu_GkXHpbOhUNuZa=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLegfKUKqklG7UT1JOSCphGM2htdF0-intCAtMixj1HdCdf2c_0KPw5tOM0edv6GBIChZlgOWODYymLQqvVgTITUo_odQvfYvzjrrIxCa4CQ8w2G7iaezPQEGa8SCdPpot8PWBdRMPFTU3s=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'BizzHub (Esquire)', 1st Floor, Tower B, Diamond District, HAL Old Airport Rd - Google tags the address as Kodihalli (Domlur border, PIN 560008)
    id: 438,
    name: 'BizzHub Esquire',
    badge: null,
    rating: 5.0,
    area: 'Domlur',
    location: 'Domlur, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc6IkDNS5QqFH9aCPNZZRRv4gHGNbzaU8mmB0cj-FKJ-zFENpJcJZuxhz4GN_-UwVrBcp_RPTnKWP1Ldw-WBNz8Uu23GfxTQQijdpIKGQ22SqVBDEdW87owY31tU4JamfV3GhQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLea9l4zBPKKIhYWvZNH8sGc9DthF6eRWu03vQN-b58zU1Ys_02vu9kPRA-rpeebLUYST-Gq1NyQh5bGGxZ7S_TC3oIWakJreYPzsU5UPPKXeil8InOVx3b8qbpHqKVZThnf1AtXlg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdY9cOf2H3RH2J69EvmT4Z8uksP94nc9UEFRaLlyA0ySgkrOZ28GeI69y3qNKHXHHI2L2d2GLb6Suyj9YtNwYyE6z6LkIs8GspDRClVbxIxy59YPzQxZ8VuERI2s2hq4o4sZui32w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeMWe-g53-Nda0cK8i6o9JyE63hZY_mVJDf4PKyVssW3-8zf54wIQr8MjPqQbO6JYwZYlk-Bbr4kY6IItsXcKadxmnSaFKyrrhv8mhIaydHzm8sPMhPjPYd4wC019RGtiqkF1ehbA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 23 HAL Old Airport Rd, HAL 2nd Stage, Kodihalli
    id: 439,
    name: 'IndiQube The Leela',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kodihalli',
    location: 'Kodihalli, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd_l5_8d303xUuKSEpNDYx1-VW4K34xD3jlQd0tbd1BAI-en2JftDLQMeAMiZId-DJUTrNFfbOSs8FUl3c8gaaDnpATzMTVZTTPVyrqEtHfh7PRW9Cx4pKCZXbKvx0xvRpFSCGw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd5CwfJinTv8S2jVoeW4oXep52rLSYioxpDYZTiZbHgt0kpqBFxtCkNQ75uHYHJUCi1xQS6dOabV6B-nGw9Bie3iiXmvHBXwxUveou8d3io1243oAgTYZP-fVuCCX-PXcrZeNXibdn44JyQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfPIO6tWzlFPX9Ao0ad8T8oEKld57jdKWIyMIuWWqqmqWXTuOP17NpzueJxRGtS-MAiEEH7zRSXsQYUDPAh-yfssVnxHY-Md0SD96m6v95xo83ttwUDclKAa46-2F6HVqOxOvaW=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcVHQonLnPr8JGLgEPI7Rzib1ybTL8sPaC6YyT-MNByCLjJ7mNkd7-grpdkTD1fshfU43jq8vS6a76cJsGPbwcdLJqtEIbXMEQu-vQbutbyl0-5RDA5njh4YRPSuPp-9UHIXV7JJYZhdyHf=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists IndiQube Amber at Maruthi Infotech Center, 100 Feet Rd, Domlur - not Old Airport Road
    id: 440,
    name: 'IndiQube Amber',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Old Airport Road',
    location: 'Old Airport Road, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLd1_1uluid9BqJFti4kN9hcyagS9GcKZcpRmisIVlI3kcQoMyBn6s_yH75QivtOi64Tqe-0Pi-l1ul3WvlYKcbCBftoYwKFYPTZLmk0wQLhRT7KDucZr-ghmIYqGISUhUA66D1UEJGms1cq=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcJ9FBXcqXGoXJ5XwsOZv9iIqkG_1u_srdVdoh20v_pi4qe_Js7uMlw8Ns4WRtgyKVu9jrGrUC_diAk3fdieSUzWP6mQQLNZAmNrd0ewTBSiqe9cq_L6UegpZKJUG4W_wD304HcAj4VOwSL=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcwpTlbX2xLw0z0gig7MJNMPHWSokcUyUwmAy1uHe2p9ZL6lz1Knc7XnZtRVnWDWZlezgmAvkU-Evw4u6W5IA_Jbc4p-37EiOFo_a3x8Z7eSWQhF4m9kN6ujyNKSzmD2eTQ8lsNDa0rlFI=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcjLKf-yU_iINh2PirJp9GyMK1F55e2ylPnDAfmvRjLUi7bWshcJGhV3fecnxndUZvWb_U5i675C-2uYTmSMXjpnTsdt1oB0nNmMvaxdEwfpmxlUufs5B9xPwP0IJU_HsxSmtnAREndfxi0=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Photos are Google's 'Bowvan pvt limited' (Krishnananda Nagar, Nagarbhavi), matched to CoFynd's 'myntworks Krishnananda Nagar' by locality and the same 3.9 rating
    id: 441,
    name: 'myntworks',
    badge: 'Special Offer',
    rating: 3.9,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹3,299',
    period: '/ Month',
    priceFormatted: '₹3,299 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLejnpnAoTB6uDkj8xkaYu5J5Ltk6BDoBCkru2P-OEdDbw1_SGo-FqmSlGDSJy0Kv0ftnsE-EtBdvQpz-Eo6FwZTbvCJ_40cQ4rzMUUlyRKuLjXkX_eGElsS-owWJfxg69qX-48=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdQXTB1DoPuc1ZhzbHKGRoCl84SY-fI8-MH5hv2Dx77ErUx5EBH8oLy_3e0pLSdDWdmrB4KgbmGQnZ8bZ9fqjULYWwJSca9GgnP2KHc1cUE2Nzn38I0NlzH99F4fUptOvhRVQQV3g=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google listing 'Work365 Spaces | Coworking Spaces in Kengeri', Prema Enclave, Outer Ring Rd, Kengeri Satellite Town (Google rating 5.0). Separate centre from Work365 Spaces Indiranagar (248)
    id: 442,
    name: 'Work365 Spaces',
    badge: 'Popular',
    rating: 4.9,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd4xzcpdT-T_WmAhgFfMipWCYmbf9ZskHcc0xH5xr_4WKkRnWyDtWHvcvJWrd4Jp7K8Hf52r6knOWyUuRy_yXXJBoIyxKK1RCQcaOeWW2xNfYWJKpPipsJY_QaJr78z5wsuhxolnQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLea3tQ8itw1uBc7ia5H6R5aY1NumF0SVNYGU1IGKH88BxmYg6dnH6V-ugfaorZ5VW5ZdBHmkEPokvBKxEh-gGfcR8k5MsCKXBUJ6tStsBXRltCiPcUORDmeg0ecccUDtyxmqPIoHg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLft4vm2Qtkn1koCpKVErGc2ZiYqxF2A6IB0GbdijV3YkZ5yiTIoo31iD637MlD--X0cdWqeq3bn8iwfES2TrCfwhjmbDNAvp2TTE7IJDgXbFvjVh-2q7jwGAbXXTGm_AIncKHZX0A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRxVYAF7Dh7nVmksmjHQBg80wDNF8T-9RiNzh676lvyWEa_LuvMVrLwJMoL48ieDFx92hhTh-a-pbDSGkb2RSQm9Z6yz-wnZKsgwhdIQdaAb3UH97NXG50ntmSn5fiacgiBkzV=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Magaji Inspire, Outer Ring Rd, BDA Layout 2nd Stage, Nagarbhavi (west Bengaluru ORR)
    id: 443,
    name: 'Work Theater',
    badge: null,
    rating: 4.9,
    area: 'Outer Ring Road',
    location: 'Outer Ring Road, Bangalore',
    price: '₹6,299',
    period: '/ Month',
    priceFormatted: '₹6,299 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcA7hRl_OYkDOn-s7rU_T4VikHgaR2cIUO9fgGFAUfEgCKi6qvyIhNiB3oBoVZ6W6d_K16aehZFWC4fJZNaESAwQfpBlxsQbyOP_pxqWrol2c0zcPyhWHa637LXmpa-c4fk3Kg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdumwpkr9nrAdgtrzFaVOvybH1_BlUWp3ys_SJvQjrNO7RUXatrsnIJ13_nQXOTJh4U0VHon3EPNwRhchIyJo2CuvZi7tSB_fmlFAx2W64IwCLFAoHvFVNED_mYkcTew4Qu9HhF7Q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdZsEdoEH-dmNokEUDva8r1zxqSOi7QQzP_LpXYfAG7qWbeWONjnl62I8N1gQ4Z59yNYvt-S1FQ_FvQKDcqbCAppHbFTGWiwo0TvQOliYe24IuxiVsk5bL7Wad6dp6Pj-gy0f8v8Q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc7xOQicetcGPDwbU0S5EmjOmYQE_U_ozAWfjFCPXtLVtSE50Km5hrVO8KzWzjJ0s44wPpaNhqCrhatDKII3LSfusi_AdGT205sChL0t3Ysa7f_AejifzxUA69xX-MvHgSw-jjHpw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'COWRKS Residency Road, Purva Premier', 135/1 Residency Rd (brand is spelt COWRKS; Google rating 4.6). Card price ₹25,999 is likely a private-office price
    id: 444,
    name: 'Cowrks Purva Premier',
    badge: 'Premium',
    rating: 4.5,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹25,999',
    period: '/ Month',
    priceFormatted: '₹25,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdemSQxqowt6HgQtrBEMXt0Y328ucUicS_4wZzmXghqYZmlLfeK0gRXogMkzPLDO4jaTeDwJ07Tb3P5ACUlwyspNzbo2Js0Dm6HcGdhm6TnNsSfhRr-9f52dIp0IuihKgNGjWSL=s4800-w604-h413',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfNSDsnC2CucrQUdVL8pK0EQoMttwBDXESlUBmSnijXsptHF5Ptlw-eI6nbji4bRUxWr0O8UuF7OxBAPXic1TVuj6kAaLWR0_YJVwowUEj8Ks-W7qNZTh_ue6JBDTCszOc6YnMV=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf787ZVdRRvdofNXuhLCu8z2AkdwsJfjcCNJUwgcoBr3BNdfJl7DbHKkXfQmc7P5lfrVU6J43QSxpgB79IpSru3nx7AN3wJbcEpYtjr-PE6QxNw_mm1qCzpvq79BwT5gq1KbOS6=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeZg2Y6T7gsNabZc3Tdc3jJsNCUv78EQtc-pUp-DW7Aaj0cEE5MFH7WGn3LfgdcQDN3uBCdS5TZiIeuXvLKzw8YqGI-pyo6J4BwTaVF5SgzunNvHExwhrVOxY__B2GfUp7VJGD1=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Sabari Complex, National Plaza, 24 Field Marshal Cariappa Rd (Residency Rd), Ashok Nagar
    id: 445,
    name: 'Awfis Residency Road',
    badge: 'Popular',
    rating: 4.5,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfalIY8shnaOeNr3mwqwCIjQjBRTHvZnandKXGVCRAO79Xg-UMj88E7VsrlHbNx37BkOcqEjVKxbI8tPptSCtGth6MtREs8xG8B9rdri1UncCQQ2SEGrHVutTNWuOwr6xTQ4Ag=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeaUFre4UxeN7yxfpLPX8uiU922_vP6fpX-zJWEC0nloFTkl-C7MfKkHr3mB4Yr93RbQtIBevDK6UvZP4gE3SUiI8XuvdDKH5LpAan7EJg1xan7PJ5x2wpiT076i2ccVkO1t1SxiQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLduvdgH_c4VQzh3k5y4PZx-SmLWgjOA9X3e2bxxSg4_98M2si-WsVFTZkq02MEyCJvKhAv2P9gMEUjIvbbziMybLjnrnz3YS0IEUREeIz5f2Cl_36e4NytQAia_83X1-SqG0OQN=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8EZ6uFLGRzplva7BHsJKbxo9BvSfSeJRqEvQ5YDPLi9RGS03ZbSM-AyKlPK9UbgDQtEnfPalKAjmqM6CC2GnQgFRbFcDfkBgK-4Jy9NmzsYfAfCFa9--FOQ2MTDlMUw2vv4RPhg=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 6 Richmond Rd, Shanthala Nagar (Richmond Circle end of Residency Rd); Google rating 4.6
    id: 446,
    name: 'Awfis Residency Square',
    badge: 'Popular',
    rating: 4.3,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLekwfbIyYsWVqWmK0xOMga6Girpa2h6XVgBVYjKlQsFu_1oCpcEc9R7wHP7_DPp4Gv8GxO6pIOo7elcPxF_i-E7yZo6CkswjgdRtaCvk3mqjBrHO8afZcWsBQ5eQUPtDYzc3q5R1g=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfNzX0jLRl0Fjohla4aPuM22Vag3lyiAmPi-JqmzJH1ilNrrzKelvGEyMCcBZu8oXkhUWASFL07iDC8b9ar3gPCEbuExdLWfUKs9Ai-bS-ShMS4CIHtj_sAN6dQKz607U7Iffpn=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfutpqLadyJK143sGQZFt1oqa8XgWlfgf7oPtH2arZ9bLF6JapHVXiUFcfXYzClI1nRmWSzUFpmEVhguU4pLHDy2PPGCSuhp6C31aoKjmrDt4K4yvECk2pGScLerZubM79xXtxx=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeFPS8kEbmATU2t__UPmV9twtBn-OSFpki9HFcbvHKi_XToqrOsSDxbI69vR8DpFgVSVQiPJa5FrY3IIOGmzRSsMhRQCn2JPiSYwX-YfUnSA9HGEcRUzwKZ_ehWoCEV4P-xGF5B=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Energen Works LLP', 11th Floor, HMG Ambassador, 137 Residency Rd. Google lists it as a corporate office with only 1 review (1.0) - photos are from the owner's account
    id: 447,
    name: 'Energen Works',
    badge: 'Popular',
    rating: 5.0,
    area: 'Residency Road',
    location: 'Residency Road, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe_yhkiC_uVtOSg-vmjExCRD5jHxLhT_s_SjrDW8UOplpzjmn7FTh5IwujzxprFgTndCoIEHcUeURjuj4IBTP_LtC5p4hQplZcnx5k4TKf6bDTBVLoFZ_A_i1LmXiNd7gyg5et0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLctwsMJdWLJflG05_wKifYtgXY8hamQrTw3GJ5Cuj6DMYN33IVOJ3fR2t_9GVBKy-UW9KVCWjawwzpOO3K6vF4nwedli57f8s-DS8Dr8yK4pGHHY_gfXft5wrJlKniHFMY5hJNt1A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcVpDoR-VT3OWYUKs4_okti4XTEpgq65iNkdjdWGnYPtqEO2e4fPtPW6G-fGqMO2g89JAWOB0sRZmz7QSkaKmk8dP9HPxh-kzWnWlOZrBdMIsckgk1IJmuBXmbz7Ze2Sgcgtt8ijg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfAmw3JBJujqUiSV_Ejz6ODJ5OTXniTS2YQClHuJfWuRxfulLqbLYsLyU8f_ELTcdU1VU1t5kW4D2-KdS4Lx0LFvt8jv6IDjkLYWRKJ50ccGQQ0LIJGtqQLh-iduUMQz4Yuu3YTIw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google only has the 'Janardhana Towers' building (Field Marshal Cariappa Rd, Ashok Nagar) - no Business Hut listing or photos
    id: 448,
    name: 'Business Hut Janardhan Towers',
    badge: null,
    rating: 4.0,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/878a7454f12e377e7249bc77f51f5cc2bd35f681.webp',
      'https://img.cofynd.com/images/latest_images_2024/02ef34c638da41fde594f137ea867bd023e1dacd.webp',
      'https://img.cofynd.com/images/latest_images_2024/55a33f99af8c8f1211a29df5c85b3179262ceb53.webp',
      'https://img.cofynd.com/images/latest_images_2024/2dcdcb1a2d7f49276839986d308e8201712f7e94.webp'
    ]
  },
  {
    // NOTE: Google lists it at 16/2 Residency Rd, Shanthala Nagar, Ashok Nagar (Google rating 4.5)
    id: 449,
    name: 'Awfis Prestige DotCom',
    badge: 'Premium',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdNz3Uq1zKLDszwS3BmJWDQJrmV5yRAKyA1Kb1qRBu8KaCU-kT3n-2AAzpT3QIWhTDPq4OBO-46bjGrqqM6h2Odp-Z4laDncI1iFTXR3ad1neWIfRr5A0TK8HJt36mTsy8jCIGYGA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfb-FfqzugBPItPtlrOVJqUM_CNDKquioSHN4RNs7HZYHOVnGS4H2FXcn8__vUw14EwxNNZq_KphW-hi4D7c4EYuAREF29Xr0e8u2zQ0HqKth7O6iZ7fk6OTU1D_fA8KeQXLr0=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd-4mupzR8AO2i8noipH0R_z9swGOVs4IQtzIn_RPOA82H7bpYUpD0vvWown1Sxa0MNoEoXKNFC1Lsx9H7IjHNN_tLinIGM0k7vQBuk-H5nfAs6dHlacmcbDEMJB9HLZ_0ikruo=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdTRGeLvylPrRoioQm5yzbFVVW6x_k6rCDyax1kedGls90nyTKwvI4ciFs22pEmRXM_asyC1hY6KnnrQbZc6FjQhXuU0no8lmUxIh-bgWYhmOPNIxtTfEOvOO1dqIUPSUUkebKUyA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it on St Mark's Rd, Shanthala Nagar, Ashok Nagar (Google rating 4.1). Reviews mention limited parking
    id: 450,
    name: 'IndiQube Sapphire',
    badge: 'Popular',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcD_0DgNtQb3uxHcBwT1UrkYrRGra4B-f3czpcaFvSpTBnZhhvN5VA392tCGdQiMfDfJdUMxUu8zq3yx7jHgGuo-WbCUkFnYGae0sknOXIYGTNM3_qRLd-RHbWXGrZZTeTcKJ-C=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfqZKsvWYHmDAs66jSuATfhSnc2ImSZ4IoUlA7QO43uhM0Rq4N5TR0we32yRIkByj-oEAhfefJPxH_eymP9CZvXViy1sAMwaDRauyQ7i259fgjcFlzV3lPsTPKZQh50sJPoB2yP=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe2FaqmsWaG0TUYbdZ5_Ranw0OBjvAd78dFYKQ1dqxGfJg1S3x3KlbCBIACyJlbv5o11wCeSKZQVyWnBkDehvbliu4NpEjIHEH2aM-9NOdzEFyux2dAXYE5rYcg_9n-Mx1_OFe07A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcijexyGLfnbV7b4LBCn-Gi6V2Fv6Rw39ZCC7Mo1zPU6czdJEt3po_WoV_Du3zjjtCzlQiNINLVdse_EVDQYaJ5ZM92st2gulp8iGgxyV6KguwI8uE9BhdYqW8G4TANBzNRH1kw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it on Raja Ram Mohan Roy Rd, Ashok Nagar. Rated 3.4 on Google with several complaints about AC not working and poor maintenance - check before listing
    id: 452,
    name: 'Smartworks Prestige Zeenath',
    badge: 'Popular',
    rating: 3.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf1cH1YMCStZb4mOHBdjL8KsZ1FEgAtnKMsB3VZa9cECmTtZefL4JUBfmrc9C1NQdA6rOS3ajRJPnQETQvVW-G354XcxurLXadHAlLAFMeY8Ds-gTdqqqEzVNOBXak1W3YVUEdd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeok27c026hV6IkwJ14Q6ozDorQ89AvVyNvEwRloy4i6zjC6E01hB0VH5uyf1MHQgPTEiOyHCLRNbV0nHdGyyuae5dTJjMtIOxq5FYJOTgqdOdSNdLF1aan66eliLwrbyxo_Ug0ew=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdisUu1kDdhknQ_xP6EHWNd3m9HYYYSfaoxyMB62CTSxrsfG4qdToIjjca7uY0p8tpcZAHQq-AOsA2OeFnJCAPmdo-ba1_5Xl-lrJnhgIRUCdDDFPysGN3XC9y-TuGz2Kz-0gM_Fg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcj2EEGiusetDBZKFprmjovPInfsXFaeEleCa_8DucHAnJWkgESedyhLPOF6ZLBBGyWZv6jeC_Mez9X371bTtD8x5p7Cpt4ENUmTpbIyWBs8l4_zJtu2NBcGTb60As6swIHHFSCRw=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Capsule Workspace', 3rd Floor, Shubharam Complex, next to Trinity Metro, Craig Park Layout, Ashok Nagar (Google rating 4.8)
    id: 453,
    name: 'Capsule Works Shubharam Complex',
    badge: 'Popular',
    rating: 5.0,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfR--fvpLVf5tBNlPzxNt7SeCxnWigX56Z7dSESHtjK00ymcbR6VVLtNGJVAGHkQ2qyUsv4BF2XmYmA7nZlaEY6KqI_p1hEj8gt4JPwuoenJpn5FkF0Dbod4PUXko1khbpxSPai=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdRPL1ASJE38kzjy8n4DzBilIGit0XGpMoJGgLPbz8jNxVA8PTqLj6m6-XE3xY46Q0oROBanLVc4PBeDW7hyLIQOy8ORlkzyiMARRvr7Dg_GY9azG5tJPBUXKWXXuKH9CnDwkLy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLemEUUSJRPp2IzhDx1bWNqa7cQAcoEOTPrLONr9KqFUFazcW2uOwGXD3_SHot3mrGU_JpI5jhOgcZvUNJN11ygrh9U4WR1nZLdubNy21AGIYwjlxEN_r4M3TsoktGqComX8w2DQTA=s4800-w800-h548',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLejFN-jdorZcBZRyMfTMpspC89o-59kgGBtuxyNODf0b2wvXhXazLs-BV8g2VUtWGsC08hDNN20enchscxJ825iYfarsGuICabKSoxoB3i7EP8b1GAeLogh0ou0a_CBKATpS8E=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 32 Richmond Rd, Shanthala Nagar, Richmond Town
    id: 454,
    name: 'IndiQube Penta',
    badge: 'Popular',
    rating: 4.1,
    area: 'Richmond Town',
    location: 'Richmond Town, Bangalore',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc1R1ucmU7h6d9VAeKIYVHY2vzrnlUXxjQYcitWeXA-Vxxsc18l1SWEBTfh3HEDKMtN7KxkukedFAlcTjbh7LedHMKkvTolVem8uYym084TeTYKTf9Iw4yHMwhYelFdkZEEqSVR3IjOXo9L=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeefBlO965zSRrFzGtqZVGkuqvHDF7vdGeUe4gZQY1a9vE-TisTmUWVliIMniEZPS41XbBkzv_Csn58Ql2NtC1ODHP8AFlh5OYCdbBfvteAeLVp4aPy-k_CyJ86lTrh_Z4-sT5U0Q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe248TaS9jINw8L5KtVSQku8g6yoNEyC-m4TMK2GD3OLy3NyBSE1OWbWfAxMA9Pa8mMLUS92WE99QtWibzUgN3JHAiWRkAMvV-Der7nbwTztbgjz2iwiUjiGvUFfyiJU86pEx8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8RgTS2KpHnxPR_fe1lDpZ1qF-3AgxVM-xg2yMKYXpmQS9rssLo-saRl9Q--fbCBT1oeV-QVhA_Obet3mSrSm2jJacZFa60A_OY_Seo_42SfufLMsNDekIozNY1Xdu5d_2mTb1=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 14 Walton Rd, Shanthala Nagar, Ashok Nagar
    id: 455,
    name: 'IndiQube Grandeur',
    badge: 'Premium',
    rating: 4.6,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcEodurWFICXpBU72pizA5C1DGuPUSz7EabYS1LABLyalA-Q-ha_CMTPjwjpADsCh2zAaptTsYImUjhk9q5kPvTdclCFGapgMC8yH8BphDfojV_Veyeyed9GlnHbXbu6kOE17B10xHCnZT7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfI1EnYyoligNdCllOnnzUACN6EdqnLpx9Y4oOR8moig_GBoYpe7VenBYJXMA3MPqjxcdSDZvcDP7dE7AdPGL0Mffo6evWsaL6oIZXamWyV-Obs1NZjfZVOsJbsh-Mu_mY1-cVFZPCtNe5e=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcMR3eyFsSb1TsFSyFr1nEN-fsH0MnolARceigWrArphGXBkD8W1I_c6JV9tciqqRTFWx5aw3wfAJW7oG2SQYY61kdpndSzN63UrffisWDNcO_duWxf8G6HJyVVoGaPQtcvRdf0hvZkajk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcUwTrLZgn_Y0JRR9tvMe-J45WvSCn9Ni5FGl34FasKo8UsPHIRDz4i9WvMqtdEsrlto20rjBX49V4g3ZRkBLPVb-McHpy0OADlmiP48UJL80ta2-ICwIacJqXkyWbTo8J0C94GJ-3eM8_9=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Photos are Google's 'The Executive Centre' (Level 11, Canberra, UB City, Ashok Nagar). Card price ₹59,999 is likely a private-office price
    id: 456,
    name: 'The Executive Centre UB City',
    badge: null,
    rating: 4.3,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLdeI3qp9QQ8nGBBq39n9lTrU-w7g-AP7GnaKD6glGBuWWGFa6oGSqpywSo87ebkBjZIS0kgSYrxFq_vbnK3wfDK7_rqEx8HXUjQ2MSjCkf4i2Cw5DrzrljsjKMsKKiIS1gt5-zxVQ=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLckbEeSbhRT9L9avRe8nNMkp2_dGh1fiU1c8oYjf3ZsI20VYUuIk-4IE-z5rLf9Is3zE_skAIbsTwItc2kMfJQze8twZ4Yn9f05hNlk4gPmD1oKw4lEjX-6IMzdSpqaQI1eqYgmrA=s4800-w800-h600"
    ]
  },

  {
    // NOTE: Photos are Google's 'Regus - Bangalore CBD' (Level 9, Raheja Towers). Your file also has 'Quest Offices Raheja Towers' (227, MG Road) in the same building
    id: 457,
    name: 'Regus Raheja Towers',
    badge: 'Popular',
    rating: 3.5,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcv-_sJ2HfoEUp9SO-Vrz3D_JbYdXgPxjqWZv5QhRdZXEcmVqeTi4Iek_3sr6JYRh6F1Axlw7YHxgCwBgmHPTrb0sb_S5MeqJel2CoZ8oLUfTOKJtGnTmxOJEIgIG5y2EOseIs=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLexMcZfPCvNCRxxf967Ecjc40_e1uLp5CENOcVrb869Aa9xaFMIyEhDQ0G2bckEDedx8tBwIoP0RyNFjIU3-6Zs6VVg3TRUzcIDKGZFklW75F33BsIc1p3LT1ZmsQkrxaGwha44=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google listing 'Regus - Bangalore UB City', Level 15, UB City Concorde Towers, Vittal Mallya Rd, Ashok Nagar. Card price ₹25,199 is likely a private-office price
    id: 458,
    name: 'Regus Concorde Towers',
    badge: 'Premium',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹25,199',
    period: '/ Month',
    priceFormatted: '₹25,199 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc-7M7Vp5WEV_vCl7fIHE6yFais44YmiYhkF29XmucaD9ZLGMeviTpUHBk_-5kLxBBvxdUrMvWen8bWCbLKDeGlHVZYKsQQR0W8bBOg2hEyKeZ29-RW0_6j0nAlHBbDPiMvZ6B1z922H40B=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfZl9AJjsqpp8AtFOughdt9gKduUIb2GApzQzD91Ur3a1j5HCne60_Hbfd7U7ycsNmN6k5img5ILFyodWVdGs_5SJQdIe_ZCN-s5PEy6ekbyu040GRW1GVYa-UUMGE9ESUsBYlEqhEGORc8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdcOaNeNZYuZFKnNEPng_UVwm8-WjFc3T4ouLBucJ2w3myhRaWkXcH7RX1KFVe71HIupcXefGSdRFFDs5kNDs6-XN-o-oyc-UfimOiYMhfkTUaJQrYWdhh9B48-AJjN-Rx_LxbS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfsbjD0r5JX26Mqm7DttKm7DLsLwj7Eespnx2vKEkCe-Q7oI_ajEcszp1g8d3bc9uWyM3yyIFch_dsvudbjLkRUZH_urSqzca3zh02Ye9TERMZWU1jlp6kKH7UgBF_kW0E6JNVGew=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 15 Commissariat Rd, Ashok Nagar (Google rating 4.4)
    id: 459,
    name: 'IndiQube Platina',
    badge: 'Popular',
    rating: 5.0,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcdrQruiipkYq4cI8aijWztCmVyA2sRGYLE1Tj9Zy6OK6QfDHgZr4uG-9U6JBwhSAm6xZlE3ONjR9lwrNRvlDGARwUkXltltVL11BieuE_56Qwnpresh548FXffBsFq_pUSdUYrT00V-wgD=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLduPl3qbnll8UPKyi4HoJHL5iDyDpGAlnnHxtIiKySLf2iC4azB1g7S8ucWtU-U17jMpRpKsl6RpyYeNBwtaJgyFyllqo5RxmVxKAPPwr7OAqmP3PZvB3oWd2OnwtECiIGDTX5EKO_Vmzh-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfXDtbG31ueXMivQG7Hx0aNEsT27IcdFgIM_1qYDZEW5it8zyAFoUOEDBV1ly-8QWyYJw16ZBzHwZbQqa-284rx67N2KCJVz5EIEqiBcE-eLJouedp0GsJd7QQRY6iIWhD_mGGCiGa6mWZN=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLehxgQrqMZ1tndFoS5_qVhVBpEwDmWOqxTrinfI8b3evCZL69h12ZFL5eWVCxmSo3LLJeDZR--HwVEeR2Y8qNjbvQCKtcZFpXBAOi6CTXLYIGVleTHWWzDdcpkHoOFHazKqDoJBVMyo1ghY=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Awfis MG Road Raheja Towers', 7th floor, Raheja Towers, 26/27 MG Rd, Ashok Nagar (Google rating 4.5)
    id: 460,
    name: 'Awfis Raheja Towers',
    badge: 'Popular',
    rating: 4.1,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcppvtdBg_CZVXVXcjtwUh43El-A88w0lKhHghvq5Dq7k3psy7cIepwnqpBJUJBIpBJCX5BOAw7wK8pxodQfgwbgZCIj_aqIJCd92PKE-4vvYM5BIDplKi2thx0Vg7N0QevLTPV=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeIVldRqmNIrfolAJKZfXMAqUka8FeRgmax34xgAvuW0rlLaXr86p4JcElw86HYsykNzpLiY2ze0TM4hwmZSncGSSrgPj_1y41tH8PD260HC8X_i0gLNMIzd0VnjsYtGlG9lwpP=s4800-w720-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcWHWoxMRwwlfSheZv-tp6S_68Vn5KYK8I8jka2aUtQoZK2sfLHR-Ne17QR6cBorIBTpSm5MuHOesyeJHPUUQNJOtNXQRa9UzbVg69ExXBrLfbbEW32bDQwM2bJPQXhPlgQIaNnBg=s4800-w720-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcJN_sSH8lUARKT8Y0mCiaVqT-oC1swtq96i63cpp-HvEn3gDs1-F6xMCHIxkvYzGv_oQMVEZi4gBfVtsG1T4CAIc9qLA9TA2CrV-CTa3Lzm86jAyjze9aPZ7RbzH-0TMemxz18=s4800-w720-h600'
    ]
  },
  {
    // NOTE: Google lists it at Level 10, Concorde, UB City, Vittal Mallya Rd, Ashok Nagar. Card price ₹44,999 is likely a private-office price
    id: 461,
    name: 'Corporatedge UB City',
    badge: 'Popular',
    rating: 5.0,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹44,999',
    period: '/ Month',
    priceFormatted: '₹44,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcZ4qvEBlCXAjIWA8JHgbtHBZfemDuJDAhv4rqmBs1V6FutT47liAlsLVT2w4gWhIC_zSEjiipdHgEI0YghDMglpPP2srwAs3yCxkKm_S03s_o15HSjUvT723Xuz6DubCe2MxYkFaQRwgf6=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc8OEKACI1tX7Fkv05Tor57ha6xaqFWCrbAsdlgjc_im353A8unv0EgQ4wMITBEQZQZe1dyn700LAI1XsQA9gVypHMpQUmr31l8s_5g3ACHB0EPT-vYg953U-NSi4mWY9HlPW1JY9wOuAyw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe2FQPmiQbFwC4-mSiy00z5stdm7pQeB4J3r__WoSH3UEZzEiNo4UTICYYj1PYKojQnnnI4ysQHi3vQ3fzG--SETRzolzdBdsAQcBSs8QTgCVrhtIVIN4buHUJzBFaptc8l3CKyYWQtVBx7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdwp14P4NF_VmKG06k2NSHTg0I3BQBqR_n6yuCpY0a7YHHvkduBnWwfJDqyvHtXM1SqGA2tdfqIBxxP7Hq-WbPcsWhExMh3IHSJX4JAWFRqe_RQ625MSjpyzUgY-GPGDzaHgQboAAhofjw2=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 93 Field Marshal Cariappa Rd, Shanthala Nagar, Ashok Nagar
    id: 462,
    name: 'Smartworks Sargod Imperial',
    badge: 'Popular',
    rating: 4.1,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcTu7c5sSykVqQ2vz6nFcqIQJfuS9evc1kzXymIgNYUSy4M5wrozJHjbJw6sMWas5q3rqzeHtRwuAB8mAn8tRinWg0YZLPPeA9GdLaluH7KEtHDNvpl8eNc6oDGRWebA0PgYK5Y=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwDDDTpLtiDyEye1bzzkvq4SEcKokkDcHAD1MO51Sz-s502zGipOhZiO0atTGWRkNqn5tnatJoCRueJDb_7bro1BUb7_7OdJP2Bxgp09Tx3QT-Jho7gEXPTNfNKr4I_SKcips=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcUdLwL5y8R3iUputQ4Q4oOKMbYTt8Qy9fiPJWZUW7PE_4STrrzUfHs8Q5f_9-gWkFeT7Vwllg2QkpOyu7qS7eRNvignATHjU_gmyRzIcC-1XcMDYYDNMlPZOZB5n7EqYEgX921=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgyGgJnZTDU9UXGQ54-96omySmf25BapS664o5jfggBoU_z_nvWQ6_eUjmAZfvNQzR9yZQ68t7wSTGN8HI9Y2CvZOqVyjtv8VkFNaxboDrPa3PQ5FyNWomDo0x00sxYxSWdkmd=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Card has no branch number. Photos are from 'Beginest Harbor 5', 72 3rd Cross, Residency Rd, Ashok Nagar (rating 4.4, matches the card). Beginest also has Harbor 8 on Castle St, Ashok Nagar
    id: 463,
    name: 'Beginest Harbor',
    badge: 'Popular',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcRlCoh_bu-8tjjvacpu-CV0noZt8d01pBT8HI_HW9c8v87T9_qvcNVtf6Z0lbhO3MugxYJN1shQ4YPTB24hwGZ7ptJmkDzeDmS_wV2nEzLxUrM0oY4IWnJuID7nRrC7mAN_2mlvKGCLI4Q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdfggKzzpLNwmhuWA8UOfvHWG8_-60ljYFEiOn-3hBUDylB5eWxqTF_Sgdl40ornmBiGTdj1EMYsLMxQUKq1-3McD-BQuV0bM1LQbQgIekfZ6goh9DJkv8R5nw4P3X1rK718oPVPIqbZxkJ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdR-sjb9OMjQeebUm0As-8ZSJkIYqS7Yp5k8ZS3x6UJWHG_O3EHlfpwy7W_6kV-6Dgb9IqfOSvfD4HZGAntnFlqqnmhmkbD_ffstHlS_QACwRTKsOEedVgZ_ZShMe_cDfq8L8w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcB0EQ4w3N7_gbMMCnQC_bV77exJzT02ysudY5hw-lauLjnk98YOYdWUwDTsXCpvrrk_xbK4Tq1rkE-T45IMKmFgcrPUBxyUUwsxtGGS6TAFJXb8Pb38eUoifeA3_qCkqDCSVGHWDWdX8ZX=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 206 MG Rd, Craig Park Layout, Ashok Nagar (Google rating 4.3)
    id: 464,
    name: 'IndiQube Logos',
    badge: 'Popular',
    rating: 4.5,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdpaoGTf0lUb43vXYwcTmDp58QsjFRFG1CFd7QI9HX52v4RAwB_oFfzKrfuj5VIv6zidJhBLcjYpaE69q5pGVnFJaPZQqaFbOmB7iBFhojOtdJs1HuHQ4YWX1JPLD5qskcc2Ug=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc_IfyvOY4fvOSr0td-rIX_LlPxwgWcjT-TYapSGloXT-6_eZzk6jyHiM8meSCu1XkDny3_DPYPVtC50uet16qm6OGqTro4_LUSMtU3bXiWuRqwmRKYstlbF39v0751jwG_IJPMqjbjsyUK=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLffyF-NTHl3gq2NtfsfMLVbhkrujRUo9QHSm67AUyzSly_57LauMibJpc0kyKI6Luw8x_C7McoSJwDrvTqayBJXh2UYmg4kiwwW8G900kaQC3Ej9cuvmkXIs5_wiCUNvl4y_Hi4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0fQj4FICYZO-PQBklYM_eiLin48CZwG8XgQmsFgooMLpMjwMfR2XhCadAuB3bwXqwFZEnfFgty88hQmHScvRu4rmizgtzC4m4aOgsBhX326aGwEzMaieSQffCKuCvXucDot6nFA=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 8th floor, Raheja Towers, 26 MG Rd, Ashok Nagar. Separate centre from 'Trend Works Estate' (231, MG Road)
    id: 465,
    name: 'Trend Works Raheja Tower',
    badge: 'Popular',
    rating: 4.9,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹17,999',
    period: '/ Month',
    priceFormatted: '₹17,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfiVTk9yD0g2gevUiGBgIqUVjW-Xo4_NMnpdf018GV1sBG_m5rQz6tMMHj2AAQhdELttincINoSKzXB4VUVhZ4PDKZI3RYJOHof8wnSvOBh0Xs_XUUIeDaCZtstlrgsRJ7iVqhRww=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeF5INdOKaKrDyIr9nd1Az8vjs8bfwwFEd7aQnKhnjV7TAl4ULKbACvkHfAWLu1cCDcSSrCRoSoZlzcZU_feIJdYNwAmchws063ZWfuKVVXQUO7NAGokAeG6NfES42w404QY2FUwQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeLmBNlZbKP7EHBh58YGxQ9hq64bwdBXyTAkUjD8VcQ9zQDsLTl0A4kOOxgszaVfeKdwfK8XDhNGbNKjrpmYRLiBN5Imd3h0dvVWhzl5Jx9K7sqQsIroStXTEkmaDaK2PGGYQDSsA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc4UWWUC1Ur4IkOWUUYWRNkgaPDy7sIiqHEj4olk9YX2Mh1J4R3ZHFnFivwAOH6VJok-qnVeeMTV32oEEVNIBpXBFgV8E5-yta87Njvwr1sYizKUf-mKKBB_auYZKmPvTxJfHvU=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Awfis Saint Marks Road Samrah Plaza', 1st Floor, Samrah Plaza, St Mark's Rd, Ashok Nagar (Google rating 4.5)
    id: 466,
    name: 'Awfis Samrah Plaza',
    badge: 'Popular',
    rating: 4.2,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLflCFXHYtRnRgW_uInj7Mr0v0OJCsSYnJoKb-LUS_41iJecqUBaU-hKqGD44giDYdXVZ998IfxXOBFFj0b4jI7F9RuoNSzabWDT2naarPcSH9VFybOkVWpZUBYdNeMECZ2HiEtn=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc8pjsT6eU2L8vSsGGEjrGC9gRLdoEF2Nn4KItuvklTk54gNcZWM4q2AQtLI4ATpYkS_82vBuQ8HAu6dOhLfS3dW3Or5t9iuLZvogfCOM6XwfilBWK_riV832p0EfZE9B0ED-FdSw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLepWHEwANb_HUHB8Lc0XKkgVSWA10cTW1LRNA1Cnbw2HUbKEVSWWVg5GFfeHQZJS34AU99pnsqDhT6CNC5UG0g8tBo_u3tLqPvXAQJ6i3YfmmsZRydJgsull7OXXCLvLCtZNg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdaOjzDHWeBNh2TKZUpJLqsYB0Q7T1dOGF283AnFk3T6gCXrjZnRRVS_w-3_3U7Uhgmc0YbQfjd4R0ULzFK5R8HmZ7N0U2UetS_SFrbHT0LmccmQkvt6ofG0xeFnpbklvlLM4C7fQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'ClayWorks', 2nd Floor, Sobha Alexander Plaza, Commissariat Rd, Ashok Nagar
    id: 467,
    name: 'Clayworks Sobha Alexander Plaza',
    badge: 'Popular',
    rating: 4.3,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf25o0JBZ87NwZuTxiH9KZSAuoK7yGYEblaaeYEoHoj8wUsJnD_g6O57WuSlXjOz4myRznSW1lk5PjHnSOcSjX2O2f3ROt8ly2sOuT25VhjPnYDwwJMc7xbe90p5GSxossaaXjPSA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeR8cX-Yy4TFAvCNjlZciyZQH_YtxshwECJBYReoMy_twsLW-wF-ez6mBeDm4rkD9CxLNBumESjxrH2vuLFLdfpGLz3brZf9ILKB5j-hw6tVnA2OQotkxgLn-NFDdHf4wBekSOw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfJylkqeY0ib6fr1kMvwp_olzdOz3svJiQO4Y2fo2TpHZvX5HXr97FGu4dAz_7akR2QZcQ7pJCOzMbk9ePBn0Pah_U1RrQsucKP6qavzx3MclOb-AKIHzn2i_HBOhsPW10ARo9v=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfsi_LQbpKMqex1T89spXuLbfZxlq6fo1h1rTZUP18fqaTtyDdHXLV9ZSd4RSFUu143zMhSXoSZQs5yCUk3fEqRdgfXPdgUh3PNi5VciIj-abIsIE1z1u8YO3FBTmRFbLDymw=s4800-w400-h533'
    ]
  },
  {
    // NOTE: Google lists it at Skav 909 Building, Lavelle Road, Ashok Nagar
    id: 468,
    name: 'Awfis Lavelle Road',
    badge: 'Premium',
    rating: 4.4,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹12,499',
    period: '/ Month',
    priceFormatted: '₹12,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeh2a-TMP9tRr4IFkOMVddHCWzyYufLqljpLes_6M6F53Fp7ftvYtNkos2L0R8JSCpCr7qfe8camJQZkCRZqbnBwfPt1QJk-gLEtE2UyHfp6baKgLL2fl3rWNbc92fTnjNuZ_qXk29HKQXB=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfZYZG4gAHiJKHtUj8eK5hROjmDLblqhZgfrvH96B016pmRBGeVhgua6et-W23UMZ5k26-urcUg0kCfme8aUw9-pixJsiWuBz7l5qZONT0hzpTmeDkDdD3qub9G7BCfkkTT2g_yS_RgoYw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfm7-1BGMiSf8GOpg9PaKh0cN8wo25sI1G-Gt4JeLbJg6H573ES1TCNeRKB7p5qSG1hir4tS-4X-zxLS1nDZKH8RL3iPxQtZE9hYk5m9AgARE_of7Rth0WYh5bGCCKhwduiXur83w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcgQYHmgxqUL-84VBCRnreDr7DnduqcyqR8uRreSOLmQTrSfKhU69fOjCT4T_t1xYNCzUyn2koR8Ya5oYSfgq3yctxdsQ7bVI9VrXXKZoX-yEr9LvXLY7yLBps0Q9SdLHLpCRHzyA35oz20=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 4th & 5th floor, Prestige Towers, UB City, Vittal Mallya Rd, Ashok Nagar (Google rating 4.7)
    id: 469,
    name: 'Awfis Prestige UB City',
    badge: 'Popular',
    rating: 4.0,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹15,999',
    period: '/ Month',
    priceFormatted: '₹15,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfKIKYLmc4faSEVCeYCBv62BEO8kJDV7WtXu2UJTh9py4YQo8VLTm9pXHxGcgUquGJcZC3je7QPeGkoXIzqGXut6tIGpe1pOc4V0DVEA3WZjuHl-LhWrHMWBrE0T__pooYlY-ER=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLezDp3hTaaFU8aycMnGgYHfb_XIZvPJsyutwbbCGPxu-vAWVA1mfxdYgJVGmUdKk_PP6G_R2SAQ8GLJN4GAe3wnay_7M1JG3GJ0qVrAJnWNG-WfKy3GA71R70Na-qHJvquEJDDk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdoZM-N3njcjrLzpP3sbEAT_HLrMxTks4_ftS8-QDfEDnsDPFpwQOZ8yVG8kv4-GzG5TvWJ8TREjRPMlMhhX_Z8GZw-TISMngLbsz8sMauZmZEYUIpeTD5aah32K7MjzWz3lxM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeu6jm-Kk6GqqmpgfVuTwCm8Qq0B6HidqSRlXSCdmjIbea1LEpyW-XZj9yCtZzqVy-n45PYDx9ntzbjqSajNq5mdtJ7ri3jnH236pD4883PfWdZZZOn1nB0TdPTaLp37jVOTMJi=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Cove Offices Richmond Road', 3rd Floor, Raheja Plaza, Richmond Rd, Ashok Nagar (Google rating 4.6)
    id: 470,
    name: 'Cove Offices Raheja Plaza',
    badge: null,
    rating: 4.8,
    area: 'Ashok Nagar',
    location: 'Ashok Nagar, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfqtDHVxdsii7tcHkNxIntjA8CdBGm3CPD_jYIfIBvobgPzqvVNfKQM-POQXOE2FJ6uNidkFXgXp2IUxTGpSAF5_Zm9Awi2ZL14--VRjGBDBHiGdG6gKvN-PBpa5whPLDsv4O4q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdQrmIsH2724AZEakqh90qZP9tVoOyGzoVXyowgl41bYOVci9QiSuQT51H1jlChsmfUK9GNfdt_gawbAebFMoqf_YpS00wnIfv5N1bWcKimllX5EsQqq6SsLcloL6QJm34dRWZoPTc0k2c=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeDcdo55b7_yBMWcEGh9HAaG7K1ZZtP1AFLvmlYTPFP_VdZfl0kyymtX9OkaYoq_7JicICTbpkz55eCvGbi2zaaFKAOJYkahJgYyhoa0upaI8BKlwUMDNpLUxfHX_cvnYzId7Gr=s4800-w538-h305',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcNaFYDrA4CLB4_r2NLwr-lT-2BOOaQFIRzBWOtaD5-xVGDxe1n0k2ZPxjDXGr0n1HK8G9sdXw270W9kmI2eehA_9lvK9rosPxYLXhUZdtOfBzwxUAgVFnVTrLYNaPVQ44SnIRC=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing '91Springboard ITPL Main Road, Mahadevapura', 5th floor, Trifecta Adatto, Garudachar Palya
    id: 471,
    name: '91Springboard ITPL',
    badge: 'Popular',
    rating: 4.4,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcP9veXEhQFWFWhDhknjCniAEIpMuxwiUUVlGY23sE-VFsGxq3mRPZHelxxJrmniDINQ7sGp86OMl6_tLGQaxjrm29Gqk1BNjYbIv6S8ddbF1tojqpg_rlWLTaMq39o7zFY6UGI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdzJPyav0nYnHvwsb7m3zc744AdsB0_fqDXi52Xa1oxI33FFYYh997ag9ZAfevy3a8h85Tmka14qrvqFkVqHoip9--hIfDhfj7Dpe5JzL8K63gImHMCic7NLL1ku1PJ0DCZwW7R=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdVp-rIoAEnfReirRS4bEovOX2Uha2Sg3J4oPxMMYVc0g4d_4CBu-DRipsIWwVPetLDUFkQo2hD4WIW85ZaxOc2rpKxkO-66axRKSO8cT2ExlmKb_p2Pduk4mjANztyK8CV801zGw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc0Sh8BGZ8IVja-OluJ5cSv_8YEREI03_noKt0Md9u6MLAZqIF4waigihx5QoNKxNLL_jY4HVxycsyta3g5iPcMp30_qe2WpNpC1lUWiQicqjpJ9Z9gkSWGd5ZbXTvVHQB0X5Y6UQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Summit-B, 11th-12th Floor, Brigade Metropolis, ITPL Main Rd, Garudachar Palya, Mahadevapura (Google rating 4.8)
    id: 472,
    name: 'Awfis Brigade Metropolis',
    badge: 'Premium',
    rating: 5.0,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdXXA8Qgg05POdHPls5OSsWpGT9XEUJOvzfT8C4DBl39qMaAKCIbNo8iu9I1D_M2fkciXbEkg1vnjC92-uWGfsoqTqsWxcskHEoGi4xIJW3qrPSP_Z9JYe13FK2oTrBX-vk_doF29meFM2T=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcNn9D9pIspUhehL-XiISoCIhoH_-C61UiljbDh4FomI44leNCDYlDTYueQigqadSDLU779RXtPYhuvOB9fWaeWtaWVq_FxHRbMquemRE-QMY04yvn9hjT8OZgeC3fTKcx36vIvIvsZ3_ny=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfcBo6ABvvn54zv3KnHrSZWxY_0cXbRolfqTWksZaV7Nysydoa8ZklQ54nYdco4vP9P5rI4WK0JFlU0WLw3RTWw1PIBQH0gCx0D-7tnW2sDA0P3RP_1lvyCp0OzlKnexkkP2ti2AgCtTeQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLchO8EC5Rhg3Mff0h8oeEgAFreOb7xIw45VU8es6lRgUWkTIK3ZN3gUJf6VkT395D6B7pHK8mCe2ZHRV9X7790uQOC6Uj88zIqEilbH_8lrH1UpSEtF4eF0xc-7nJitN86Fl_Viw-f84W4=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Summit A & B, Brigade Metropolis, Garudachar Palya, Mahadevapura (Google rating 4.2). Some recent reviews mention poor washroom maintenance
    id: 473,
    name: 'BHIVE Premium Brigade Metropolis',
    badge: 'Premium',
    rating: 4.4,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfkL9gcikVyYdXwRvaXlWfW221kc4fSWiXg7MelQuE_4388eXQIfl5m7eJonipaFdWgOgYxadjoTfrtZIvNHnmWCWWcLyMCaGuzlWB5lUIgyF4Rm6BYBD65AapGUQ4ZM0Kevng2QQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcyR-fyr73bIY8PCCae0XBmrUk9vD66A7MrQ1Y7IDq2orSwFv_xYWzbpqCf4bZUpnLg7G2eETbpovi1G9SURxpE-zyyGHYKFQ9PKScsJf6iHf1IDtBUz6QCVHci1c6opoWlstTIFP0UDBEB=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfvNY_mVSHFIOflszKJCzE7ZWk4yg2lITnK1DBZ9hA-vC_JTRusKK1MBxcXZCoKi2EW3zC7xEbqiOQhuKfkWi4SRu2tcoNLK0hYn8MbtYVkYYMWPjJI2CaTkFUmXCFs_p9AOhrl=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe9eOzuCJHHDu00NUXSHZGdEZH3g2ZmfNJvbHzww4IJzHiWS4cWEwYDz-0YafKD0leUkxLurkd-5Fr8Ls6A-hZKZfVngZh7WXSRRCUQoW0-zGKBRsks_W2wXHRg90OdHK1W1R9-=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 3rd Floor, Geetha Towers, Outer Ring Rd, B Narayanapura, Mahadevapura. Google has only 2 photos (user-uploaded) and no rating for this listing
    id: 474,
    name: 'Collab Desks',
    badge: null,
    rating: null, // rating not shown on card (no usable Google rating)
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹8,259',
    period: '/ Month',
    priceFormatted: '₹8,259 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeQDOCJVhNG8P0hix7SX0ng-xz5pJ8IOi73ug-6qGoGVPXB9iyZDFzOhNv0AtHZcQqNek0r-m7JNqWZ1hZWk5ebskqaZcPVdefMj4WlyA4EZ3DIwn2mRDNxbR9EUBqU9St8p7ARjbuGdzua=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcF6Sk7NFANKmtIP-R3jqH41I0gFAEjooC7foA-f-UB4bjWCF40JetSWyXa7cAWeK8B8nYOBJOGxlYdc6GKK7jd8-dYyBLVuE7s2Bhkt64Uxy3NQlN77svIqHk0eg1mUQ9YiZPiSfn8nRQ=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'GoSpaze - Coworking Centre in Mahadevapura ORR', B Narayanapura (Google rating 4.8). Separate centre from your other GoSpaze listings (157, 263, 296, 306)
    id: 475,
    name: 'GoSpaze',
    badge: 'Premium',
    rating: 4.5,
    area: 'Mahadevapura',
    location: 'Mahadevapura, Bangalore',
    price: '₹8,900',
    period: '/ Month',
    priceFormatted: '₹8,900 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLfyzA1Wu_NsltqTxWNqIKD7GFs1PJf_3On1LGyeFWis1DMiLlK-UCY9SdAHjdBvCiSBIVkgrdh0xvjLXUSULNx1N5HB821U5q_IbTVgPxJvwpH-F-pinfTjegLuMYJ0wq-uHpOLkUzCLtfR=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcJHR2HGHagKSvCW9sOFpnm0U3FqbgNJSXIO5bCfNOWVueMN82p6lL6drqdzPGi3f35liIgK7HIkQJ5LLHf2RX6TNagvKIjUTiMErFxkUAUwoHr3Ti3kLKCVVcxMT5fUpB0LaL8W-5qe6i1=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLe4saRqAzIc0MdxyMQv1GKOjjrW2Hjg-zpjgQPCLxJ_1QwsWA4acLx_hhJZGmtdRPLiAJ2KVRfSJpzbzUmRl6bzzlznkUf_du2mXJb_vdEL99Dc2hNf7ZNx09_I0KbojnD9SO1m45Du-JiF=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLf18DGcpnw0Gl_34UdsqOyx1EjRTF1pFyBJCF0IDdib8My0RFsKLnNpnMfVJ1Rq0u0UzB81fX81ml-eTkRD-HO41gG1ZvuijC9FiBxImPFbAF_1l4p-QmPcRYhdIOVXuxodOfDnwig2bzof=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google lists it at 12th Floor, Crescent 3, ITPL Main Rd, Whitefield, but the listing has no photos
    id: 477,
    name: 'Awfis Prestige Shantiniketan 2',
    badge: 'Popular',
    rating: 4.5,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b8d1f668809a7dbd139d5d24e216bfd185aba800.webp',
      'https://img.cofynd.com/images/latest_images_2024/43e7d8d1ee3633070e7b17fdcaa29eae28312ffa.webp',
      'https://img.cofynd.com/images/latest_images_2024/9f81f31f8c3df5304da3f402f2ae5681bacb72d7.webp',
      'https://img.cofynd.com/images/latest_images_2024/04f818d3da9123292e9d24d84ee973caedca230e.webp'
    ]
  },
  {
    // NOTE: Google lists it on Seetharampalya - Hoodi Rd, Hoodi
    id: 478,
    name: 'Enzyme Legacy',
    badge: 'Popular',
    rating: 4.8,
    area: 'Hoodi',
    location: 'Hoodi, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLchpihR2MN4E2N1EN8OY70y_aBcAYiIA9C3R0p8OKf7wTWoLdOI6z5VE6aY1H89IhFrXmBO5xEDhHW4K91edrLBHRMJp8kLzZRe-eVPQUwXvFT6OerhTHhjDh_gxFi1Sydy0YUz=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLek6a29Y-mSw3q1-Kt7LnDCtNwKIxSel6gPfx86o-RrfthEPRFfu79WKvjbrohR7XbutDa5kMWeSXcx-hBmg4CSkMf0vK4pCmmVA5hxtpCaD18y0I_8pUZHR6asAsn5k_gQJ7wrgT1G3hI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf226oV7B20fGJlj9sHF94MJKzUC5SFpzthDG1gW3VygLRF5biQIY0NWPZwCKhHjKFjLhj6Az5fXLmwkNJwWWU0AVS78aCc3SFULl0m7p7rSNg4JtnbFkvAfgwgeq-hR8ysq8FYmTD21CEh=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcKf9_sqe3iWWEcRGa8WUuSJKsXcJQl4VU_f5wp1up0SdVWe8mUD1iuTGo5H9AxZfP4yRTKmFxkwFv4zxLiqQjzIyEJpRwAgSfFuDtcRH_lkRda6w19k0UALFtR3Pt-QViM6CZcuV3j6lsh=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at 2nd floor, Crescent Tower 4, Prestige Shantiniketan, Thigalarapalya (Whitefield); the card's area 'Uttarahalli Hobli' was a CoFynd error, now Whitefield. Some reviews complain about maintenance and slow responses
    id: 479,
    name: 'Spaces Shantiniketan',
    badge: 'Popular',
    rating: 4.4,
    area: 'Whitefield',
    location: 'Whitefield, Bangalore',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcWBZlOohSdejP9kDOQb5mJNIOzpj2CCRpRjc0x4Z4ajJkZu2STPRcEEXBvI2_SIdBqsI0HGswTQOCPds7kGiUiWHnkIMNRiQ-WUQHmlUbBv813p8ofG2xzEs4pBsGVmk8ULQ-KM4DAK2R7=s4800-w480-h270',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcMX-4pGnoAG29BOv6e5FcN2uh_ZVvSTSQQVoduBXgwXqlYXRSCESxKzpNMS9iIbWKFD_wtBLrDOajNrkoTnDgnnoXcvZVkPM62Gk9Qzai0uRHk_8goi06KWSmW5a2vk5-cZsEjahxxoS5W=s4800-w480-h480',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdD5K2CQrnbPBM37jv_Bjwr1Zc4q2bMewfx4r3kag3rE7HF7cytwohcB95Pi3SdQWKhO8jaQuoi-vgb-wHzX5TOKNN2iSFaIFZ6R0U6DNDqa_hin0U9sDffStx8HFTeFQRmEBFD=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdGSYAy752q4UEueQnQQrdMIXpOCj1d5mZElZGGVwYHFvuqnsZcF4OIPpXezjiFeChTaHtDBurvbL66-y8kGKMf-Ir11w70LdReRwHBGKNcAR9kW6fDchxQFDDlE1Y6HSe2Gfmo=s4800-w800-h600'
    ]
  },
  {
    // NOTE: card has no centre name. Photos are Google's 'Awfis' at Dayananda Sagar University, Kudlu Gate (Hosur Road), matching CoFynd's 'Awfis' (awfis-hosur-road); separate from Davanam Plaza (id 399)
    id: 480,
    name: 'Awfis',
    badge: 'Popular',
    rating: 4.2,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹9,499',
    period: '/ Month',
    priceFormatted: '₹9,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://lh3.googleusercontent.com/grass-cs/AABkmLerMDoPuyJOIV4L9Iz6rtZOFaOeajw04XaIO5Is4NW_TFYnf08eXmiVGs7Dc0iV7FxWQ4pL8eBEBchybSPq3XtVIBqJyz1boBDPN7vrT79RHFW0fD2KMQNd5DmiDYzUvfZonjKFyA=s4800-w800-h600",
      "https://lh3.googleusercontent.com/grass-cs/AABkmLcJ3zJfO1emT9CSLrCYkA3QG6Iu8yow7w19_M923CDQ0QE5xpacKZedzn-hUcWAG9dr3ypWvqzoY-bnXv8wlJDLOMmEeG0fAPIDXZkffbuLXkmqfrDZsODYp9MSQbqz_uzKZOx_vg=s4800-w800-h600"
    ]
  },
  {
    // NOTE: Google lists it at 1st & 2nd Floor, Ibis Hotel, 26/1 Hosur Rd, near Silk Board Junction, Bommanahalli (Google rating 4.7)
    id: 481,
    name: 'IndiQube Aura',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf4V0S_LQg0MWSqaMLynLOjYA9Sgg9e3snIOGvWMxkVayi8TZDDaOO4cBytMLmMLbYluQlaSTAOusdG3e7Jggd5wCaXO-oLjTMAbSrJe7-LueCntnSud0cDhYINyXr0wQSz1a7o=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcc_X95vgCiO8eKDeSpbpk9zhmgzdA42udqIAtDNnXEK0HPDhSNp5fGT4gIvA-_MpsGlzLWzDrHLZFzPP86CXPGLGYYdyXTmdfGtQUfWY_gR_k6J5tSUFRvZM5Wwql-rAToh4ZYbrnrGGuY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdKp8beuUsVlBYJkZ-o_0KOnJKzmnSqIrva5mAM4sMZaJEJDbdM4UZ8nAXhPt53zg1IUSqt38f2LK7-x90NjXsG7PGU_SqOKbmsYXOTGJXQ6j0noBMs7tCQNHqC_NGmLWB7LL5K7Ut4vE8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcfzQNWKrmG_hUvgibazkHYtSmP3VqFcw2d7SXrRM8oEaOhRLJdpzR9mNtFtxg4sFQDwBiaE6Cwa6azJT-SPKjXYWRpv9MccFO44ge9MyYWIlvY-P1M1oaMGt_rwCkgK-ljc_L0E91GSXGe=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Enzyme NPR', NPR Complex, 614 Vajpayee Nagar, Hosur Rd, Hongasandra (Google rating 4.5)
    id: 482,
    name: 'Enzyme NPR Coworking',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdlw7t_a6mU_izdWjlxVZuZe7hlpRXOIMYyjoaFFo667Ul8qAHPJMa4hYOI3xKpmZO35jGHemqfzCeYIXNar_UMiTu3ChpNjaySh_6oa60lWVIbNkfJ27K0o8GZNr2NaZ2t4Zswp909Vj43=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfmEejNB7SXRTf3PMkMV8uCG2-qyOpFyHcDN2LbDs0N5__gGhH1sLj5fTik_MpNG_SDSdmf2X-f7FVKZss9tRYbNL-LebN0I9N8ifKGALJQ4RTZRbSR3XaWWYm5qGNK5ND9yxhPGQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcsuGLFmjiMKtCTJB8D2-NUQnypXmVm2-6ffNaYqs2jvzlSLzH3qD8rBKeAigZ18zcSgn3sFmPtWlOOhBwQ2p3mD5q9o4ER8eSyQ43ihjOHmP-tvsqolCDfvSPOgRDquDKoYwfNHjE5iT44=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLch7LKxOHe-elW1m8yKXKjHTSL3_CCFLD-OuSWl4H_2VxRfiDNHHkHOfEaqw6RrTrAYUO9hQd93R6K3YguJCapJU2PpXXCLIhr9z581gPMydLs3s3oGrRHYoysrQgjOCsV9Bd25xIWycbOp=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google lists it at Hosur Rd, Kudlu Gate. Large tech park (1,396 reviews) - recent reviews complain about power cuts, lift waits and waterlogging; check before listing
    id: 483,
    name: 'Novel Tech Park',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfj9kerkBaTdFayHFsruyH3ebzKUii7gZT1OvJLSGmNrTBG5HAJKUOWH20AVOftLkUSAv-Vnytoak0X9LppJ6n4C3YBvcjNqwD3_j1tKlOh-Dy6gaJpyJErvOqrMfg9wRLg6VXRfg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd1Urx0qz-rHkRNRn95I0sxDf6qv_kqzXndsp1fIRkAw0NuS-CT3Qo_JslGaP6OuI3yFmij19HeZHepP5cqGwEIUMjk6LM7xeP88mgXArG2p1EDKvgDsZZ2vUaULT-HhnW7HR3M7A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfaIYIePObS3ei_0vLsKojNYSQSdFamFUTvI1v1mcFvSl_iRlEiyXhV9IIeY911OgkOi9MYW4ecFtECF9p5dGr6Lv6UAAAgoUdg_f0Q7zJvpW8ViKIK3YIOlG0VARsSPWkVrBM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfFfyne9XdwRHdfbnuJHAtwX-XqoKw19-AJdwEfLll_5U-BoWW_0ZVlRbev-Ml_bWvNIshTCk3I0DPweEYopOSLZJZ5krTIgXekcNyvNUhocP3696XCBwKX5pUW5ekHASB8nmLN=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Unispace - Coworking and Business Center', Uma Sree Dream World, Hosur Rd, Kudlu Gate. Separate centre from 'Unispace Business Center' (279, Whitefield)
    id: 484,
    name: 'Unispace Coworking',
    badge: 'Popular',
    rating: 4.8,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe8gCAzdpdK_UydXkarlg7odxxs3X2ye1uJvHTU_J_1Nc5GFKbG2IflBS44yRGwtUxErRcwp-5DfX4fuOEAHKg-l4shRTveJ53xICXb9ZS7DFpQ0OVXmb814Si-tCNXtzy0sD4Ckg=s4800-w560-h315',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLer9VcAzHIQ3my7hAssVWdtk9ljf0PfQkit3iJobglous5tBBmIVw5RwZJ7cY-rMqV3wKZECyC5lIsd5x35y3LcIkPKBUo0qtLM2xXMzhsKtqrEI3j8eMNZWA9Cor1Gl_vvobmI=s4800-w560-h315',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLctUG3bS5BatQ3Ak6SlXYmG6daARWJkdnNOHnHH0zyoBcjJI6k95eDsT0N8Pn8UTn85IJftZ2gbD-wzhsxXlWNy_IxiyOenZiF046u2r1IX7s1vBo5qB3zO86RkEhjVPltlQ_dH=s4800-w560-h315',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdgZstU6YmO08U3ivY3gsh1uRp1dtF0qn8jTKhKIdxEpI4O0C0UYub--SjbGNUwAzCn6BiDQ5em03D4i6GYqNUyC24FI9UG7WGWJ9oUh-xdvgRtuTAxgjjixTDWBSvJtPjCkCA2=s4800-w560-h315'
    ]
  },
  {
    // NOTE: Google lists it at 17/9B Hosur Rd, Roopena Agrahara (BTM 2nd Stage side); Google rating 3.8
    id: 485,
    name: 'Enzyme Vista',
    badge: 'Special Offer',
    rating: 3.0,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcB3U9fOqMJIZ2lzjLuSSrj3YbvuHR9BtRFmVfwBbYrlLfKRgfFNaOIkOFWzjKXWxhw5ZTX8zVsiw06rsOVU6LbqYgOqgyv9H1MFViiq9x3m_VmRpkmp9Ubp0qc6WzZc5XWkTziDg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf7F5be4AX8MCdmjgLyFNC1K8PhjwhBnoJ7z0GNpuRbO08WwILlbCHe7tR1LAb1ITJSBLPygFj9QDwh8ybP4JImNI_HlK30HpB2f6KE6ZR6xLk4aF3Z-2dzis0t1oygYFmZJ25zRVBa9DwI=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf0CdKTUtEFrZVGTGAWQfNCEIWewcW1m9yY1EwkyARehQC1BAVrqKzXSnYYHB7SYXgAzWVmo0A49Rw2L2G7tu3LefKhDnc3hrYh-Bn_meCh76Km3nqXjmi2VFOZyvnak55Jhh9y7Mv_i5MS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe86CQBb6aOWICygyqjNdpgraL5tsrzQfctIvI34cTVYYf28cFjIkHmJOttn8HMt6O_Ktp3kkirYhWD8xnW3-KS4KKne_WzqpfZt2lRXokV5Zng0yCeLbjtuALrXlSbvvp7mXJegsT3KXg=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'SmartHive Workspace', 1st Floor, Shrinidhi Ascend, 30/31 Hosur Rd, Bandepalya (Google rating 4.3, only 4 reviews)
    id: 486,
    name: 'SmartHive',
    badge: null,
    rating: 5.0,
    area: 'Hosur Road',
    location: 'Hosur Road, Bangalore',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc8dRc8h2xoUK-hr4Ws-V-isfYxFsO3eZf2RiCaPNEVYpkniJcMKgFcGHlVJgkYnFJV4Dl1u6Gth2r1a7TUvWaLlwnUaODxWPw75zP5NuiGM2kmvsNu4UUhODjbKQCyUMDbyk8Cppm6MTAm=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcTExqUMAe2Nt9HhOPa_oz9KBC2O4c1QUNynmAFacneQBKCYWisXwEbU-V3glAKFF2QbfNtNSdyIVgAdEL98NBrxrBbaumX2t7TskQ13XEYjS_rMJqBdG3XC7ZvE9swzIITGOKaoWNtfGs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc6hD11uVVNk3ITLKLE0IpFdgEmjEEste6fUhtW2C93dxclFaPefHGfvUR0KFP_X3WOXQ6PmyzbOlj1mvAxp_kjMkCpReMVKowI_qQR92s-pyefnmM5AR0q_ISfNdJQ7fwBDOP0-exXmi9j=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLejsB-wYNzZaJlimFDftWlxsH40tokVyeMwr5zVM9j6IGOcWTACJEAAWohlsROBZlesfdb86JLyQFOaQmw1SJRPPi_F4wG3lmJkmiGrr-tYMYVpfvOUe6KFP4Q0mAWOOosJxQ6Sm2Z8VBlj=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'Simpliwork Offices Private Limited', 2nd Floor, Vaswani Centropolis, Langford Rd, Shanti Nagar (Google rating 3.4)
    id: 487,
    name: 'Simpliwork',
    badge: null,
    rating: 3.2,
    area: 'Shanthi Nagar',
    location: 'Shanthi Nagar, Bangalore',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfRtyApJAIQLJV2RcBhAFdxWYukdxvy0gnWm_pbchpoRIV5jPTA8-xXOTAXlGgwvFI-lApsTFbsCPN0mVWWErLsQhchA_kabg6DDRyLYKr5xUdbipW-s5bNtxvgyz0uGxnGcvuJMwukYerq=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeD8bhha-vNYk07Qf6zkSMiRkaQs_OnoOAtp7uEGvaZ3eJNTxSRM-fNmlzhjLZLhB4R38mqejO2CfcYDXDHhYiYKvC0iPEH7Pdbwge8NpK55mLS960YtExCBmoec14w7fqEOyoJdYqUMas=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeHOJZJfCJbqmK46r6hJMUBoBN4weId6ArTomYYn9CfYBRn1O7dwxRsHT1_Jjlyrz9yrRylwt7eKpdlFcFojGHo2TX0RvsnXngbihU5oOkLp9DPgOXLuBULGoI05oJYIc7EJ2t63wNhQQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe_K1Hb5gfqon9EfrSak3jeVntxSP0_aodW297tPGxeON9h61am_yrtbWHyTqGPwZ6zMoUwhCfHde89kIetGMN4JzoFU3UeyipSmvZsvCrInTt520eqKz5fG1UC6kLYFxlJ6etM41-hl7Nn=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'COWRKS New Indiranagar, Infinity Tower B', RMZ Infinity, Old Madras Rd, Benniganahalli, Sadanandanagar (brand is spelt COWRKS; Google rating 4.6). Card price ₹20,799 is likely a private-office/premium price
    id: 488,
    name: 'Cowrks RMZ Infinity',
    badge: 'Premium',
    rating: 4.6,
    area: 'Sadanandanagar',
    location: 'Sadanandanagar, Bangalore',
    price: '₹20,799',
    period: '/ Month',
    priceFormatted: '₹20,799 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdeTQrSL7FTC52NBXBLnVzql0rmyk1_QPupeAsw543XxfUoeJfC43Y6TZscbJCIKeuM_bbQl8DpHzw-Y5sBv_ObcHINvurFU9aDY96idAFotNwY_xCzO7wUH0qRLo7qHyWZzAgLNQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcoK6XHmoOp2HmyM3c86Y4jGzaX_eqsAv9YFUcS0MWXYKElnoncc0nfDVdl_joF_XNZ7CNinD-9pGtPCOYW2_MzJKgS2Q9s01S-58msbKkIu6cYHVsztgJqYdzmOAU1gFK6slEy=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf8QaGx2odIaDJRNFdIHifmu2bLJRiFq59EFJVRpjax7tSjVi1wq6d6ANwcPr7s96jIwAplN6obOxxFHcbY0Iosho2g0EPu1p4LdqRKYNBYZGKqhJV5R4Ew3HxoDpdAxm0D19BM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdS7MdbI0obNqfKUufTf1ILcULOZ4DUGqdeI04wWpRcOC0Ch8fF6WFmwbPNtA3FaIBCd4Z3yc61CHx9m6Xj3_2XTCWaa4JqdO2Omp1kRSzSC3yF80rJE42gBJ_r2cFO3ki5Z0-6=s4800-w800-h600'
    ]
  },
  {
    // NOTE: Google listing 'BuzzWorks at Brigade Tech Gardens', 1st Floor, Butterfly Block, Brigade Tech Gardens, ITPL Main Rd, Brookefield (Google rating 3.2, only 5 ratings)
    id: 489,
    name: 'BuzzWorks Brigade Tech Gardens',
    badge: 'Popular',
    rating: 3.2,
    area: 'Brookefield',
    location: 'Brookefield, Bangalore',
    price: '₹15,999',
    period: '/ Month',
    priceFormatted: '₹15,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeRYyUoFIje5LfSjd-nMyZWYjJGGH3Bi2zvBabjiPwXJN1W2c0ytbosXVBqAwN7JsFglk5LeUsX9lP5le8Ab0Lbq_bSblhA48tE5t1uH4PQKnCJiojsdMSqhfQoEqUDhGjJMZvzC9yvm1A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdLdkacT28JczcVl456olNBIxacmfaoC41afx5u5dvjJlm35SeuW3oOa5JnMwTi2Y_6k49ly_CBF7fpbl5eEA0FqG9JiVaBoL7kjLrRPVmZyB9etu_O9P6JubGTkS2mZ2t57mZdISxZ2Phs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcOeKQ_xQ9yA83RD5VaprgBX9osPCkTWOmegqFBrIsM2TNsQUAW5Y1oa2APYZqZ5RwqaIxICmWB3yCpuH10bvhWx2fEm-X0ElgQphU2OE-vcYdU0q2XKIp4xOABwm53YLAhF__SdaCi-q4=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeFKcTJuH7ep-LBK0ZkU9CEYcstUuBu1m3quehlWo7m3LkzDpaYUGXjv1x_-55WFFyDZ31mfw62XakhE99PQQPD_BLEVLdQO4FTknZ1b4JpKL__AeZ8rzHKXhbj1pMBM2VsUG1HGZMNSNU=s4800-w800-h600'
    ]
  },
  

];

export const SPACES_PER_PAGE = 16;

export const paginationData = {
  totalPages: Math.ceil(bangaloreSpaces.length / SPACES_PER_PAGE),
  initialPage: 1
};

export const allBangaloreOfficeCards = bangaloreSpaces;

export const getBangaloreOfficeCardById = (id) => findOfficeBySlug(allBangaloreOfficeCards, id, "bangalore");
export const getBangaloreOfficeSlug = (space) => officePath(allBangaloreOfficeCards, space, "bangalore");

// Aliases for compatibility
export const bangaloreAreas = bangaloreNeighborhoods;
export const areas = bangaloreNeighborhoods;
export const spaces = bangaloreSpaces;
export default { areas: bangaloreNeighborhoods, spaces: bangaloreSpaces };
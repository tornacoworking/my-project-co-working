import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Hyderabad Coworking Spaces Data & Neighborhood Filters
 * The listings live in `hyderabadSpaces` (below). The page paginates and
 * filters that single list.
 */

export const hyderabadNeighborhoods = [
  'Hitec City',
  'Gachibowli',
  'Madhapur',
  'Kondapur',
  'Banjara Hills',
  'Jubilee Hills',
  'Begumpet',
  'Kukatpally',
  'Financial District',
  'Uppal',
  'Secunderabad',
  'Punjagutta',
  'Ameerpet',
  'Manikonda',
  'Nagole',
  'Shaikpet',
  'Champapet'
];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across Hyderabad',
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

// Placeholder tiles (shared CoFynd stock images) - swap for Hyderabad-specific photos when available.
const sampleLocationImages = {
  'Hitec City': 'https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp',
  'Gachibowli': 'https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp',
  'Madhapur': 'https://img.cofynd.com/images/latest_images_2024/8a42a52f0d08b1fe8fbc67d8a16ee3a22553597b.webp',
  'Kondapur': 'https://img.cofynd.com/images/latest_images_2024/323979251e5458d1485f20d1ff9fcc33b230dfb8.webp',
  'Banjara Hills': 'https://img.cofynd.com/images/latest_images_2024/d72385e6df621c44142ed89e03ee20dd32220d9d.webp',
  'Jubilee Hills': 'https://img.cofynd.com/images/latest_images_2024/1288e19a7b909ea9ebbe71a2fa95c50736afc7c7.webp',
  'Begumpet': 'https://img.cofynd.com/images/latest_images_2024/ad7fa46d9bdb766ddb3da837e007525c9d1a0a11.webp',
  'Kukatpally': 'https://img.cofynd.com/images/latest_images_2024/d0477af6807946ce717972841b30b7b5613cdfb9.webp',
  'Financial District': 'https://img.cofynd.com/images/latest_images_2024/a65d621179742f9abdf246d47ca5ed37d4afc550.webp'
};

export const topHyderabadCoworkingLocations = Object.entries(sampleLocationImages).map(([name, image]) => ({
  id: `loc-${name.toLowerCase().replace(/\s+/g, '-')}`,
  name,
  title: `Coworking Space in ${name}`,
  image,
  ctaText: 'Explore Spaces'
}));

export const hyderabadSpaces = [
 
  {
    id: 1,
    name: 'The Headquarters Pride',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: 'Plot No. 4/1, Survey No. 64, Huda Techno Enclave, Madhapur, HITEC City, Hyderabad, Telangana 500081',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6524660098372834091',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_PKQGQLAyV0MqUG5I80rPAhTS_PeiVT4EC7Ur8KLJybk3cuTeLvja3pg_6J83i2IFD_qgmOKq46Pz76PbCZV8ObUP_kTxlT9ycvllfHdqYEpSzQXKnANP1-DRkHfdGvlyLL8ByRirpmzA=w203-h361-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RuCRTivSyw4fv9DsDHlgX8IFJTI-2H--QExbeMLvyrFyKa5nhAXKD7UGoc1TXQ_IjyL7HpLKujZHRrR_8WXDfz6DFcrRfBowelCJFLteG3hCY52eVxlJy2iHOHmnZusZR4JgDn=w203-h253-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qwp9oXSEDmakorKiC_eOa6rcHXhPf_21oOqAIJPRWVP9UT0XULg4EcSkJGmeQj9QL4p3Cn26HF663GF9ri9_g8cOGZD5xj3a0GT90tH42ZSixrPcQSZt5JZ5JY-ohPYuqF5LfK=w203-h441-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RLnG21ZyvCjM1KRgAbv9ZF58HV31OA5N7eUTGH6ucNo_Y9EfV7a5DWdF9ZfkVZWWnw73H1RKXmjPZ0XcqH1lsZwhFcBuqQZKo3ZT4q5hE7YeZlGKdzBIYRapTM8JaqHf-swnp8DsrmbdwN=w203-h135-k-no'
    ]
  },
  {
    id: 2,
    name: 'FunWork',
    badge: 'Premium',
    rating: 4.8,
    area: 'Kondapur',
    location: '4th Floor, Pranava Business Square, Unit 2 and 3, opposite AMB Mall, Kondapur, Kothaguda, Hyderabad, Telangana 500084',
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3560220882924040293',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TndWFOBkFtkLLd5OPAkgdbF4QYETtXC7jqyr-wyrqgYl7qZFE17nvdClSekdAkgPCL78hbeVLhKDgvn5_UDzo31iuvH_1e9t4lrvLFAf306kEokGl7w9xZ1AoDW0AKmlB6XiuPUq9TFz77=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QWNwRxBgeonA_JJHxNyF62sgF63cL30jYJre8uoQPHj1GBgbkLC3lMgERGDWykg4pAnvJ3lTsKQnCGVD3_nwSpwgE6XT_hp-PGO0MrRhX_Mk_Um908a0FANdHqtVbKnDP8O4rBMJ6OtzA=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLKIG7GxyVHlXcnDtnh4JeuSqgFwYbFzN6y5MOxJDjt5ChhBbzDDe9sDGqfYAHs6-JPe3nq_dbGTgG8vvi0iDD1ofrW5KqaisrdLpY_A9zRa4kY8TwGgctsu7TPOQYZj_L1IUG0KF7N3pQ=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ROf94V4SgvC1B8kndZvM_pylhrjeWVW6Okr40WhJL3RR7beOL_Aqw69b7lWcsQ_gOsnr5po7XouKxHWjT9_peZm3h_sqG2-a75rT4Xf6mFHrE479wUUilRA3ZebEMvWCooTep8G8X4VyPW=w203-h152-k-no'
    ]
  },
  {
    id: 3,
    name: 'The Headquarters Orbit',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hitec City',
    location: '6th, 10th & 19th Floors, Plot No 30/C, Knowledge City Rd, Silpa Gram Craft Village, Serilingampally, Hyderabad, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17067560690901518063',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QavA-QokkOR7qakzYG1hJQc5pl70MmFPapkP3sOhFbXTl_UvpW8H3VI41qF7mFPTbGLWliTOsB8KmO5KZF579nx2tz17PAWjbI8SG8Kn7jx-3kJTT34ENUjXYlJFpedPfk-aMPdICJIR7X=w203-h248-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RRqqPgogu1Rrykplf-E4fBzTa9d9e1Ghf9SHrHF1CeRpMShQq5FEnme7hE1pHRpszc4noZMf2PhJZhTJl8B5EGzqPvz_kII07estwVbgzsG7YfAySKvj1kXTPUkyTwv85AKRW_Vw=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SD5jkohDf_hZ_CblneJ23ZRMuxxjOQv0PSGq4laVcWInlRE7IWDgOK3b0cXmVfbWWM3HeJ1fzpd_BQWHnGUMzlZMUUbjppOZfJNQQc8XUVZbOs1EdjtyntmwPgW80QhSW1U39S8ivdTfGG=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QsNF4IUVBFmou0yNAiKhLr_lyb2eWlO_lGWKJwLDdCvKc2P0ngk4MubQ8b6rkhfgGpABjhLoAXxkp297XzUPyeVXWECPbuVJFhFc7kU3GrtXkU78VRbPmC-eXMtX63_tEPNMve8sNTpcXN=w203-h152-k-no'
    ]
  },
  {
    id: 4,
    name: 'CWS One',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: 'Plot No: 40, 41 & 42, Survey No: 54 Kondapur, Hanuman Nagar, Serilingampalle (M), Hyderabad, Telangana 500084',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16243398428054456803',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QfaCMuIwOJtNOVB_azTVTVOIFkNvWge2kvu-01b2KCP0B78hpu4sfiaCtWgNhPaBFX4UGdm9e3pj96Zk2Bzs8FsLwsLIKnS2fNkw-RQqf27DWeYBLz6QJ8lZMPTbl7GeUrIm38zJD8QusS=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SEdqGhCb39_A6GzAB1MpiKpM2sEHp7iQ0FF9iil8gMwxEFqs6c_b4Q33Qz1fQBl52-o1sQZXNt8pqFdQ0J_z8ZNaYbKikN7961dHsfx7uc9HWRWdfe11mRzrFo0htu0NHeBB2PfPJ-Nhg=w203-h269-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TG4FrrYssb73wKa5z--wXRb8FZriSJIQBNil5zBSZCMSo3-L1Dm7mzdg0pqSbAOX3JCPyWgbP8fSDySf4dD_EV32586z0GRMXCM_Fuig41GxP3uIBwPzhceKpvaRkPtHpos8OUPZRCNWQb=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SpGt1qqbAGbWai7eEzLOI1sd6P3qY413zxbN5j0-4nQxw3z8RXSSqlQzirbE2HHiEc6yTwN_2QuU2c79B_ctV5AwWvgGVDh2U-XOWOkvqZ2PkH4OBnShjbW9yuJ373C2-7XGa8PQ=w203-h360-k-no'
    ]
  },
  {
    id: 5,
    name: 'Pinakin Spaces',
    badge: 'Premium',
    rating: 4.9,
    area: 'Hitec City',
    location: 'Plot No.18/2, opposite IKEA, Sector-III, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10897804861633670574',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SaczQy31NBHTAYP4fVABy5hS-DyobqMQQOsmriIdCNnGRD_3HmD28U9DC3oOS6xI1YB4XGGB7rQcTZa8oZqYVh3RpMHLPYRj61DXkklCaIN9WZ9dIB1E1oAk0tvW-iHhurBNnQxYRoShYI=w400-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TJ51zhbzf57zCbfSg5j_9blj__D6wUnOLy4pPu4t3lembRbE2GbG3L6BXpDI_oJTCL-oIouxVIourh4W7vIz71i3Kmd7NHQGHxEyD6Ozmzi6C60zViuEibxZ0ZjV81qckDJU55=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QHM_8PRNLVLrmhAHVz0HXsxPimNJpQvIvXTaPHgGQ6O3lgdKAbxmTJE4V_br__yyWYBZbxi5TVRKsvuPNdnGrcFC2NpD-ywZEHdUnzC1vFaG0evS5qSMKKIjW37_QSqYOJmBKv=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SpUq80ZBvBljrM1ASEHYZNwPEarEPpXcgMBL7ulG-6y5viUf7pp8zoOVpevZcC9TZgstWD5oVIzV-UVhUrdJ-TLZ7FM-oSNdsxYwTL_iXx_72Opp91F1dGH1qVuZJlmWsfszWB7g=w203-h152-k-no'
    ]
  },
  // CHECK: same name & area, but Maps listing reviews mostly describe a software firm
  {
    id: 6,
    name: 'Business Labs',
    badge: 'Premium',
    rating: 4.8,
    area: 'Begumpet',
    location: '507, Sardar Patel Rd, near Cream Stone, Sindhi Colony, Begumpet, Secunderabad, Hyderabad, Telangana 500003',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7040501682459097879',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RNHWcF9ebVYKczMk1x_DUksWhgLXvLTiQp3iRbTUrX57iAEjaKPxkM9bVBDCqIKLeV4UJZqXwNsJjiqp1qejnvBxQZwH3y82nQZOYiyaUjK1BqxfA_68ekrr1x7WWOvpNzad3BaA=w203-h113-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QDCdRTfyVlTQFohGKdJviZYwYDYJCd6-AEk25Yh6ZSHfIQiEutDY7kX72JCwWVpjnNI5ZumD2Hd4DlJClP_PpW54l4OjkQFJFt5Zc12H2XJkz6PFF5JUYgujNVRlv50FlmlZ4=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RPhfxEEh7dzJauCdZf6ogHcGNSSGxxYeKh8hryM1spLJ1AMuCyBRDKly5ng46YOcdVRYli3-DnLH69mi4j5XrosllTlpOUBBD9okH67HEsblmRHI9OCqjS-5WcjFfP2JmWnKon=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SuQCrcCHTVCz81K9hi8vQApBtCvj3Pk2guttlQh1eOfOKUVYnwLOvAXCGxH8wrWk674KxVZ5RapQF4xd2tOXbqf53qY0kYBejy-jF30J08vbufAlACTyLFZBW2K9GUQGVBe2ox=w203-h270-k-no'
    ]
  },
  {
    id: 7,
    name: 'Smartworks Raheja Mindspace',
    badge: 'Popular',
    rating: 4.2,
    area: 'Hitec City',
    location: 'Building 3A and 3B, Raheja Mindspace, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3204034845381624601',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QxNinjn3GMYixgwQKAZMyg4rWW3rsLX11yL3zh1EDcMpbh-iGdr9ZpupEWALqDnl9m4Eq0zo5RWxTFR81u0msnrbQv_UmvRz1jgc5ceUf5M9IJzcQRRpknvewrqemsGMVku64=w203-h113-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QdYSyR8Mxu_pJR3I35ewqiKSMDICOYPAIHPf8_2p3p8cufh20TkY5WzZi_iSRc6UENsFABeNnaUzz58dEoQ_Ks33wcSwsbsPXG1zL0YYqXHXH_zNidThLN5eIja43maGhtFOl1mEzxxE3H=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TPl4mcMTKONRSoRdYEB9ZM5UFfABxnu9h5PCq2s73GpBvH62Gmm5Kf6GThmi6c1_ATqL9KoYJE53YD5JmarvLybCBqUAmt7G1knb15nDYEKXxg9htuNeQH81t7hT99yN8_qGN6pCDcD8VY=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rqy9zyUjHpFpibn0cs1BaxsKVeb8JuMy50tlzugDPKh-omTem0A22kDEtcgt2E0boxrcazfD7i9QAu2WgHxBgknPsByxlmpC673IUzJGihem9lOV4_cmD5d1YyjzQsDlReOBZnNA=w203-h113-k-no'
    ]
  },
  {
    id: 8,
    name: '91Springboard',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: '71, Hitech Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8091726731184710925',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SRqOpicmCYCSYD9g8YGiu-6SU4DJrKgRGgH8oj-_sYb78Qw1Thb4Xw35dIRtiI3qRhClrJbunI2eCmUJUalR-rIZfzpyPt-FktIosVuZsiIRITF_kObuc1jdFnf1it3l939XDE1g=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0wb0umM03CJ66UypyRvQjy0h1GHSQ2RD81nrhOehcyaKh9k8eBRPAbNfKJXCqfDa67qaw7iyXNY-XDyooV_1CU27ZOTiyhelNY7fSswMEfF9H5LR73XKS5WthmZoGbuBt4CRj=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFJ9pPFk8jNCTqviNJzYoxnJSBLJ71uX8C95tQl8kMPWA36FQWDcNXDMvjJBwvvwtwBZ-CfvCx_Y0lQmhwdc6adwPhIH6mdUpfWv-ya1tCvGiG45y7dvtczGnOr84fFWUZwqLI8w=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SlgoGTIl5-_6W7TttkpodnBfmy4LTpSBROUwl5iqUFRIQFO0njxr-Qa5AJm7IMwrRr_aZa-_GqmxL9Zow3MOt_ZPvRaO8fRO30Upldvxrc5DX583VRz8pNYqo5rMYEDni1bbe_lw=w203-h152-k-no'
    ]
  },
  {
    id: 9,
    name: 'Awfis Lorven Tiara',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: '1st - 4th Floor, Survey No 34, Kondapur, Laxmi Cyber City, Kothaguda, Hyderabad, Telangana 500084',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1847815800394451921',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RuTskFbPmXduabuI0NryM-WUyOcKp2ieb7CpyIfbuzoHrc_XwlNV6CxryO-XDj2M6Tf_dW-EnUXEC_6LkdmSuzdJZUIXLSomX5RSJdh7RsuQ-0EXc2lEahbCK7BW3k-CIo69A1=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SfkA_W9aECsGBgcpaBGYLYQd7p0uxam-JmeO6S-kgdfXQI_8h0ndPrEnyA6H3cxqf1eu3aTawBbgxME4LfOJZXhs6rlyd9esL9NCDQ9LaZiPi6_HGWXccD7o_AS7tESzI1MMee0eclr8hm=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRXs0q_SJkQX_Ly3ddXUco2DzUImyqo59EPWTAfziuEfTFOxOd8i42l5N3c5wemqEUxySK9WoR1PSCZHDWp6NqqkOYL97cb59DS2mVRpqVjsdeCDWXZ9x3v8b3tJQmWu-9izwq=w203-h124-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0sWW-Rvn68aBi8xzBjT1VwJMxa0SViPJotKTYmBqMZygDNyAgAMODNP5Ua-85aOM2StcamAAlGQmqlAsYs4ZO0qwDxvnIoURrw2B3y7SCALZe9oAmO3yHlB8tS0Htha22EufQ0jjIzkrg=w203-h152-k-no'
    ]
  },
  {
    id: 10,
    name: 'iKeva My Home Hub',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Block 1, Level 5, MyHome Hub, Madhapur, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13137013546260006116',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R-dhKTDGppKWSvT7eiEzAmBoaDGAilzhGpvMkl9o-qghm0EUMttnzddCUJwH447THviaHAZdm2UqZaDLCxDkYsrqmUbyJ9SjWAPKRMi7gvRA3zb0I7oZQhQwZhqKBJ1shp0x-W=w203-h107-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TvrvRDA_TWO9AShkBBOk_B1xbN0P7c-aPc-tvtcgGzTw-6EtSKDgUr0VAz7gA-pDTDVbYpum0QHCw_HkwBE9zNcB1jvt9n0SKsSGLW8WdxOgZih3F_QxPXy54g8UiqzjN7cxl-=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QxRL_H30__YCeqVP_03e9dMEttZ4T1X_jR-8u6rIsF_bKyX21q2-XqJ7SDYKcrXcLKZHt255yymH5VCwcphfC4IGZsTNXcNx0IF5iTrofyV5Gk-860m1j0tHWhz7T1Lj8dVzQx=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TBo-SZ64TzFTk4VnrPOfNkSFfmfTPNHvvYMjTTMkEIsXFC5A_X0QwyT0RgBfvgQPN1e-a2ifcm9-tdkBXkchQYduk7iZY7G7hkD5u-TeHegAJ3paWEIcsv7Nm84QPgHuFLos8R=w203-h152-k-no'
    ]
  },
  {
    id: 11,
    name: '91Springboard',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: 'Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500084',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13884769855746688618',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QC3BiTkeq9GlnjaHxP-MD3s_WGkSHSVx5co1wfITBTGqOXRjIW91A8zD-PZdTGMYwknW_cHpju6mzMiEgy-EP83CWsKtFhqFZsWQ4YWIdJ8J3aNHVECbU-iLyXXtrez_-TsqaQ=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9STutXRfg3icSMW5GCZo9GEykJT4X5-cE9DQnPQoniE81i-ZJs0n7iNT874ecn9Vnzo8gfjCRCMxt9kOaHPTNofMTyDPl9nQna1ty0tD6-Zb1SQ6pX51rZ9Z84Kg1iRCSSouvzRxg=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THrQN62o4-3IjdpJwouLKWZpDgLFCOf7HkgXt3DK4d0faQ6RuWPsoJorX1PoFXupvJqdnxt8iE9e-QjXMvupIeD_6IInLHP80JQAsGC4Cm94pGeZ3sGjqhEcUONedLPNPKpPrRpg=w203-h123-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SrA9qhd_2nO6GRiinDlC7fq2el5klV0zYjveMT9SO6JUkr2QYw96A_QeSn9ufblRy2IfQh_IosI40EbsuAlK17DyduK6UkGuwq7ubmENgj6W7EEEHIYGrKNCyeatZfK31jmlc=w203-h270-k-no'
    ]
  },
  // NOT_VERIFIED: no iSprout listing found at Ramky Selenium; only the building itself
  {
    id: 12,
    name: 'iSprout Ramky Selenium',
    badge: 'Popular',
    rating: 4.5,
    area: 'Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 13,
    name: 'iKeva NSL Centrum',
    badge: 'Popular',
    rating: 4.0,
    area: 'Kukatpally',
    location: 'Level 3, NSL Centrum Mall, Road No. 1, opp. Nexus Mall, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500085',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6480587416277050426',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QYTkDkvMPK0W5vk5v2zQ1uLOow5bm8nwU1GrU5zL7SoAWNOuAMGa_hIkU9Arc0GuOKeBH-CSktWmC4PTjRcEh5ty3qQVGRZ87mctUxPTnGq4hQPBBGinqTvzLuxN-vv6qRpySQbX6bK3DM=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q_iz5xS7_yC43sZ2Dg1BnnvXNyP4ahcoy2UlFjHBCVjNuTIlGqHLNFXKytB6SaPPMN-UGp0rACAoXIr7Qjq4YmAgMlTzshq-NG0gKl6H53xILVODm5_dcoOzGA-UB7tcZZIHlobIVhIFZ4=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QZDMpmo70C94F4Tq2gBm7xxTmTtu_pbWDz1VlesOQCIHCA-Egd5B3NKILJ_Ie0t0hXFAu2ckqjOyYqzQ9onn2vu7PPi1LB80Bat7JnE376ei_c4FieJlmBo0j1GU7D9QrCdW4=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZS1xF_oEmZ3GyqYE1y6noSnA3FZCoctMMIUFT_Vzo3Uw5vic11hAkX1EUuQEoJdo78Rn-1CtEQG3iuqaJ5CQcN7mP5F9Jw9oyJKWMcV_b4p3BSF9mwlezRuzhnG79zDCYt4t0=w203-h152-k-no'
    ]
  },
  {
    id: 14,
    name: 'Cowrks The Skyview 10',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hitec City',
    location: 'The Skyview 10, Sy No 83/1, Hitech City Main Rd, Rai Durg, Hyderabad, Telangana 500032',
    price: '₹19,999',
    period: '/ month',
    priceFormatted: '₹19,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10603024995945904054',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sy8Y0aUoIex2cdBfrohHxL0Fv2OMbIHBmOy8bAF_IrfiBLyWgfAi_pxDb7a8hWmp-R6jcLXC9sIb9hmKhCe2tHJLMtuolrf3kpV9MGoPs5YazFJmn9w5Navni8K7twalTp2_yf=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qj7yjlmOpZXrVxaMncCp-anJVKNNlujL6t0S16kWh5vzCWETUD6Kv2OloGLmeDdDDawUwXFieV6bIXbuH_jVaa62AMogLiBYox3Qk8F28A4k8rwO-5I1NaJmiOxqL51rXUl9uc=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TjHnwTycHXdFyIAPr_M5_RGhmQzyM6owZO-nR6q5vKalSAR6WerecEkfec4QYfemEBtXH7pBoH_9OM64EiBCAC_XR2P2SXPI6_Y5o6wtOhXoo1Eswmi7AOZEs1NeiyaKsbFbc6=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SU6C7KlaDjHuRoTGMUtOozRUVBOVc1NpHpNJBN3P9WP9gy3ah5h9pKHPfPi3WrqoDXsloNv6vo2-LnWK8rOmQ1e7Y7LFihOZd8AmupORN-H3SFPIqU6fQjE9eLTvooV8nhmO3Ahw=w203-h152-k-no'
    ]
  },
  {
    id: 15,
    name: 'iSprout Sreshtha Marvel',
    badge: 'Popular',
    rating: 4.4,
    area: 'Gachibowli',
    location: '2nd floor, Sreshta Marvel, Sy.No.136, Kondapur Main Road, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5491669055629151393',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R6iXg2Q5EZIH3ieKWeRVP1o_hgYmdYe-w-AI09q77dAzcdXcsgJBou9AypRbTpQmbbdbXKs-14v6EZYkQv35Up26gN4eOnu4_nRDaDFuZEmvzmT5i6sfMXUs6uralFLADz0zd2=w203-h190-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QE5xnoZm4eJT0s-3yJH9AWEpNKBy4K9QFBwW6l5SbVOMYmuk7i8aD3kLdXbyflYQBOmMY82YVB0sISMapsi8s8nIHj4uIXsA6PhJk3aI5haEUusuOOubqYZHtbgEQ3uY8n9pfRFg=w203-h152-k-no'
    ]
  },
  {
    id: 16,
    name: 'iKeva Lotus Heights',
    badge: 'Popular',
    rating: 4.1,
    area: 'Madhapur',
    location: '3, Lotus Heights, Kavuri Hills Phase 2 Rd, beside D-Mart, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=891657279914766333',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RAmkcPafmb-yMoWctN-gpyTOZm45-kutW-Snjl958h0W3PckQ7rohb1bfhzktFusiXPZXVHAXS0w-4jd3Wd446PIIZbGAypYNoxfQV9DYlVAD_7E_mBYu_V4qk4K-rbTOfANj05XVWZAKt=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SxRZcqfO7ZMAy4ubc4pFskQuyFRL5KVj1uswsHqfHWlQysPpfk7PhxlSMpmxhPMHfXixmZyVIaibsbiF42JCPob2DuRQ5hLMSqVUVBoxsaI9Bn41pucaRM5Zcv3zDOlTE5nDBOehye9GSE=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SevNPyxBniviVkIAuzFyVkJ4OapeduoAdefWNPU7dhVEAgwTUGABRkU72PvGlN1g_ICW3kxt5gM-M6MMvjksizzJ0sy73sp4KtAdzM9nVIBd5S-_OeCjjxjtbFRT9DcZArT6vK=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7-Wh1EX-h26v5pr-FWKi_ahgpDwlPyPgFn19-9YML_Yo9C7FOqgnGLXoJP6uJJkli5EKK8QRzAgvX90S8jTyK70P-HKG4LypMO_MxUbDURib7SZE6lCj10oEHffVQYBtU68VHMw=w203-h152-k-no'
    ]
  },
  // NOT_VERIFIED: only Maps listing found is in Gachibowli (Fantasy Square) with no reviews; doesn't match HITEC City
  {
    id: 17,
    name: 'InDesk',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'HITEC City, Hyderabad',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 18,
    name: 'CoKarma Mahaveer Radiance',
    badge: 'Popular',
    rating: 4.8,
    area: 'Jubilee Hills',
    location: '1st floor, Mahaveer Radiance, opp. Metro Pillar 1708, Road No. 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12169802285139536396',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SneKqLtzGoYb5jI1Sbke8kn4dtqdWaou_LufeT3e8ouyZe_bkV3o7CgD_Q5zEgntrCR3JQQrLr6iMLFjcuuY54Q3ZdYPpQrj7ZbLIkWcrBkydlI3rKpMiu0qycMugjDiYkgnGz=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6jGKDYGLDYwgKCPauSO7UeX89bzOkB3AXhtqEgyynx5l_eMmZ31OqP8xC1N7_9LKAedhyB_GNWA1Nghx2SSCh5elNhY4L2d_Vr0b7gr9l8gIXOBJadxstqD3FHEuJjbSj_jxMiw=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SbUMVVS7M3903HkWk3vLu-1etMU2nDrY5UioTI1sW0l1KKfHFv5SsB-O1et7HBBHQjgNiWXZW9wUQLQo9EnYZb9E4mx4lYcCTHsE4aWoRldjfL9NPnhHKb1ReE2_y9DXmv49HZfA=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TkbF4FhBarN5vIohCD8uPg-TwCKxl2EUUfEWrecAf48jw2fD2E4GsrO2hnRiUXxYJBHnzfMyDZ5DvzDDgoQpyVlkwqYpPvmeEYLPIOFo8HEPxt5Ke0jpMwOgYKFyZF6njTDu7M-g=w203-h270-k-no'
    ]
  },
  {
    id: 19,
    name: 'iKeva Rajapushpa Summit',
    badge: 'Popular',
    rating: 5.0,
    area: 'Gachibowli',
    location: 'Level G, Rajapushpa Summit, ISB Rd, Financial District, Gachibowli, Nanakramguda, Telangana 500032',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8195305218894582956',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R2-EBPZZGKH4wFvfr_2dvpGB2RJgPkOQ8whw_eoUmTqLGDDMMUAOMPYMwS2zTGVzYMg1pua1QYd6SLFvBjWjLu67gdU1E7pgNq6X35aeOpNBgVblHX8ZCsyN3mdODT_V5Qd0Vd=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sy6U4t8HcJCatRLr0cZ6HB7g5nv8PRWoAmjAjf0JxE8ivtmCn-Y0Kj9YfEa2UUb4SE-jap2ly-v3-E6MyUKXutf0QktTECClpws0kWun-yQYzeuLZiUrilS10Do7azZKlzeyjS=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QQ4D3pgZMbE3wb8YOKZG2VEsCQccQtH31PqVmPAORg1QuWGwAJsPU5rGKpuMlbFFe49rdlo9HWunHtnLWqMF-LV8ubNTRmei_-DFry732ATjtnvhoQrVS53k-7Ck2ytrZq-K1Z=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZvoKZkQwWJymbkEI062d-E9cjAAYk4Gq-ZxhXKZI76fPQZkpSyhh1tgCSkuuGgdMLq8RTrNM6mt4663yCRuRY7QJ0xS4txB3uu9NQuACUocLbRETXA-JtLwZwFP4K3pp4QLheRA=w203-h152-k-no'
    ]
  },
  {
    id: 20,
    name: 'iSprout Divyasree Trinity',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: 'Plot No 25, Divyasree Trinity, Hitech City Main Rd, near Hexagon Capability Center, Phase 2, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8066643642140792476',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tsr0p0NULrScqtsNUMisaGHOPYelcQbB6jYBjTIP6aCipLug9IwmnNZUwVZChEUCiwX14q-WSX7DomNyJhxPZAuusV_U3oDqIjH9QeX4-Y54hjcGIvlDEbAS7yZkXqIXqdTuNAkg=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tk0mszzI3mBScZTHWgTGpnrnj7IvmsLPDsG4EVBxsITy55d_vZyyy0Ncp09irBq8qo9CrqV3aIS7itToOgDqHSfTpQy502Js6tOkHfPuyeoyGWHewJg7PZNADQ0TQUJlTXVw1g=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RPlMjHkEemae3R3MGOwkbI_fABwGlFKtvna7p78rpuA8hp5YY6Ut72dd942_5E5zKJF418E7R1fG6pkHQpQqtX4kkhLZ2ICfUVUqEI6KD_XaxLdflOY_lh7SQUpeWiWoCvQuk=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ql0kDMS2TMRhJwMZRvBkhfmIr8ompoQ12XlMP36gjtZ9svG_pnYcFT8yR1ThnFGQ08d8J7bQVwgMWV02Td2WwO--IQBGxsQvnSu2VGeDpDvDdyb6AM0838F243iUQTBg-he74=w203-h152-k-no'
    ]
  },
  {
    id: 21,
    name: 'CoKarma Durga Towers',
    badge: 'Popular',
    rating: 4.8,
    area: 'Begumpet',
    location: '4th Floor, Durga Towers, Begumpet Road, Metro Pillar No C1315, Patigadda, Begumpet, Hyderabad, Telangana 500003',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10904377907859921405',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TLYLlQXaQqKHqr95qYL4CIwgaRkoKgVk05wjjWsgrxznZ5xIAyCmQZX1aPcVOmNlm7OYuci4Cy833xNYKhRDntHLPef68Ya5hmh2-YtUhcOesuJ5zc1UdD1Y7cDNn0KoygR70M=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QdXfkB5YvEPdb0VOFJQu9vBKsciQLD8riZ03fAMhHnrM7E4R8J4Ovndbh1KF6Y98G2yQX2W3PT3laZhaM3Qi7ZASQtMX5PF_DSZb67QRZjPSYNwnqV_8pHKU_coJdS6J_4Q3eJ=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SEvdjhOwytEhjVUwiXBM6BPm6zT7wz998zoStMBhuZlOJdhDKMAQVPbaqa222TDK9sDMBKaqe4Aox7pQuNSFZKzOBdLD7jhju1CCoFY_nWc2T64us5dSfXwTi6zJh__Q=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RmTg5UZZfsJm5tSfbBu43BB95gKRoVU2Y5DYqw_1_NglM4HyUBiJATtTcIkgfe6WSYKneOiDRpw04UaB2fJkn_H6yaFVz83Bq-_k-LLihIsWb0ahMKCiedaWo4Abtlirjx3yqF=w203-h114-k-no'
    ]
  },
  {
    id: 22,
    name: 'iKeva iLabs Centre',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Level 5, Block A, iLabs Centre, Inorbit Mall Rd, Software Units Layout, HITEC City, Hyderabad, Telangana 500081',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1688978926522240211',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Te8VO-Mc1CzsrwD_4V2yCFH69R4KfBJmuRoDVBETG226sBRxYkR5IQE6m9oXjKcAROYd1sxXgV-0KRZutD3dF1hFOfPoeIs7j6R5QSxqpabiAlSp5aaFmg1Yx3SM0iTaiDm4RE=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RdnonY7W6RD2p4J1AyU37Cd6SJ_1-DT-9Y12kiSdSrt12tNdqeQNRGm9xUa0gCP2l-zK2y7MupZNRzW3VQeUVQQA4kDQWs6in-7CLFeuB3PqF3nBRzBBTfxnuwu-Kx885i6tFmIw=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZkgQ2HZOJAoaFf7BNQMS0CWfkPx1ziPhMEaTGZolJP2yiAXoOL5nKRe8KPC_9sgagwOshzcV3JZ7WZBqRxf7rJA00ZGmynq3agR6NaN4HgVVK1PqJuxN_BZIKxmZOoYD_PEyY=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SV0rBiSBv7080T5lLRJxGAyKLUr4H4nooobpkoK7DbWZiAZAUCDbOl_58kLFaFOhTesIAEJsTbiNuuVK7Z5fY542Pmu6xz1NWTtERAFKlHrwpYfrzV6M4RkSdV0o28KdYI3Mfe=w203-h135-k-no'
    ]
  },
  // NOT_VERIFIED: two RedBrick Offices listings nearby (Salarpuria Knowledge City / NTR Pride, Jubilee Enclave); can't tell which
  {
    id: 23,
    name: 'Redbricks',
    badge: 'Popular',
    rating: 4.7,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  // NOT_VERIFIED: three Unispace branches in Madhapur/Patrika Nagar; can't tell which
  {
    id: 24,
    name: 'Unispace',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 25,
    name: 'MBDesk',
    badge: 'Popular',
    rating: 4.0,
    area: 'Secunderabad',
    location: 'Plot No 12, above Haldirams & Kamal Watch Company, Janakapuri, HACP Colony, Karkhana, Secunderabad, Telangana 500009',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2620974429198856318',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRXq3LiNA___-t3LMyLnwErPu3qPNhgECG-IagAhXAK6A937TsgIhhqOf-leFuas_gMTO8JriqRIjQV9OFNklUroiIcdE1nfm0QuQOkfnD5CUv2TQYXNmacP4D-iVJrBigCUfS=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SQE-JfJGC8mRHOpAAyL3EKn11x_rcUe3hl-aF3Spbkp65z40EWBAM8NwZcidskGIHvE5trfMJaVvtV0hdqFy_NzKFENh0TZ5hIPZ981hS7naNhiCXDcyJM4Hh59z8zIUiaYVL4=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RmLAnVbbVGUpugq7PGydwXxCph3XGFhgivfK9hLUcwaUHny9Z4DiH5a9PoqEGTku2k9vvZ1Tv0MH5hDlOZI9ck0e_yr1ZpWFuFAAqDK6bGou78SC67FhKgpgKn5r7LuzmL931n=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_C84O-qoE0xbe6aTP7MgQAvOiuraYa3pJCiQ4BdVhFPFpGKzqX-wXT3GY1Eh1cSodK364Le2NGe24sQHeLHEXRjX9v7p1NcnLFI7WCEDYg4PF5oKL4i1apWqNZ5JPvSHic5J1=w203-h152-k-no'
    ]
  },
  {
    id: 26,
    name: 'Indiqube Pearl',
    badge: 'Popular',
    rating: 4.4,
    area: 'Gachibowli',
    location: 'IndiQube Pearl, Mindspace Rd, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2577773943575560579',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TJlwoRNBx_-vGES2rsQnORAw6cWxb1BGiz0P-rykSIJDUtt-lmgFbtANiPi_8VCPuUVgFrbG8scPs7BQZRXU62l2Q_xw2LXFL_WMrnBSNoLfbQZmGAM6HAoX2clpm9O-gtukzkvAeeoMs=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RYMnXpYr8-rDnK4nIXcAkDDoF4uKeTU8jNc4tX5iQQIXhoKrlZ25xpMUuL6nw4qMA1HkgEBmbee52Rm2sMt7RBS9SYkgCEJOEkgNwyZAgb1m7B3RLbh-n9n-zT3FiQ0okuoGcbjQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QThMH_X7lOlG5vJ7NG7-IUHezYwTfdQ4_JnSKrK0FpkgisnFNsC73x_JfdJKLu73k1JtKW81nxFGMSXCrIkxw4wKm2DME63sVkTH-7g6OjYsw_7rCDR0dKltKfEfn2KwMXRrR5bQ=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RACGVhzZCiHzypDEZPUPVWKp4AZqW73bfREo9F6KLTahsj71_ZhtfMhCMixlg0PMQYaOMJOBK51LucYSZ-jTojMeCLbV-UkOQFfVV2EHtwUitxtX7usQHCK0n4vW4L2oxkh62-=w203-h152-k-no'
    ]
  },
  {
    id: 27,
    name: 'Smartworks Aurobindo Galaxy',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: 'Floor 8 & 9, Sy No 83/1, Hyderabad Knowledge City, Raidurg, Serilingampalle (M), Hyderabad, Telangana 500032',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16010978273108568740',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ry-HOSuj0SqZOLifrzWZ1mP6gnJ1Tg1UTd8o1AwSEFVAWz_rb9QTINJJHjkZ1ILHONjj3RWtQ_5ewAqZQVH58qA0KEqZF7fHO-Nx5usqNj-kdBR4dGvLLiFlYJwRcdMK-UmynLAQ=w203-h113-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TuOaz0Yw2WgITi2yEVL2s1JFR6SqVMU5PY_op4qVBqoQYymAZ30Xm9gr5-aonl9Ii545JAWuzRdCPTs367wcKgMoCcljoLfm8Fq_5RLG1MCdmY5pupZFMNHMN6L9cjoksE_RM=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SkS4zvpd7BfOu3Uud_-XtAYBRsixn-jTogNaHfO6MQeDmLiJLV2gD3E96ByYtIn-wEThBuwBFDHGcSM-VMIaqUV_oFQXHAjeS4pMLv9Mzlzg9fXsHRBBBw7Np8cZWT17RRCMDyCQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R4hNCHcjvbp5MP_L3bVW1Byiy-abkX8PYPSdw-DIovj7Qug7yo5_iFcFSJTGuXLg9zhFmWUOZL8xjBgTCVoPPoWjjRcANtbLTCxS0vy-CXPc2fnOhsHhcS-1SxgmSPYwozPV9f=w203-h270-k-no'
    ]
  },
  {
    id: 28,
    name: 'Smartworks Purva Summit',
    badge: 'Popular',
    rating: 4.2,
    area: 'Hitec City',
    location: '5th Floor, Purva Summit, Whitefield Rd, opposite Tech Mahindra, Kondapur, HITEC City, Hyderabad, Telangana 500084',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4340618276901827592',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TsDwCGDP9Je5Jd-QvjGczCYPhqoj7turpgqEcdnAAALwW4yAAIUVtrWHNwlYVP3dsQegp4qR46qLNsAikXqpb_i9aLtNvleZiz2cXJh_SU0o99GkvsdOermtVgshqd0qVYftgz=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QVXNfHj887pO_JJR3UK6zN07aPgsmsWve8jWL-dUZtF0rsQnmoWZgGFZK86yWVUOe5unjKKfNGwbDespyhPI8xRWgy2dYmFgtzwcpsLYRv8Fm9i52CvKVGfswVoLjdEGTsOJTulA=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rk2faEEpE7BQzmMYD7Qf_6GOQL-bTICPoeG1WbVzjkjmSJuXyIFgKxnUIwhFIE7KP3ASIt6LczTwtQSfA29T_oZjWBp-AnK4ccHj4s5_syK_eGxeWhFB2LAkGaxVURT8fyr8gbVQ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QckcF584n-8T1yZinA9Q5HeSOjdAmlhU_IaNV5WPgf14VXKHzmElZLvn1E2rp3GaRiKzfF0u8RNjSQahFpEJNt6ySrjrnYffbLhkTntDJ7b6kKyDfZgusZdYA511hdeXgCoaRgMw=w203-h135-k-no'
    ]
  },
  {
    id: 29,
    name: 'Innovivi Centre of Excellence',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jubilee Hills',
    location: 'Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2941588062087893190',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REth_jNElRSLrxSSzJzp-s8Z9HWxPBCWwiyYPGantclBQWaSMQelQD2LBdX-YZkuyD0UpfOc3Bx079tlzFp-muaf5s7hgHiokZvGoCeMiVKAZ-x1DJoFSjl3udrIIjdRY393O1WQ=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qhbd0-zN0wsw3zf2fdnqtVtYCcCw7XwjoQpg6axTYZ-WVV9b6cNByPJblqWg0TVWAVqaJPE3Wj-IWIxe86NmKQVwjarkkrYWSOHNV9GrcKnqWgSzoPS2l70EZ2eNYIH26s6oKWJg=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SN6-94kxD0g73ZlqvMqesahvWehhfaV4uDV1AdEB9QejpDJEb9gzm1LaHyOABLjsWVulKtD-qaRH8AuxL2u8HBE8KIpD4Fls3oz-cnHbTklhgrJHXWI_4usr_y7mgZV1Nv7rLX_A=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QxCWbqI-1EWv5uMhUmsb0I3pRofYhUXlirhGUFbNo7fn0hvfphMF9D-ASkmO2G-wbAPIJuHldrT8bifWb08QCN6H8MbRMRzWI7KKAWLaWNGHNc3GpBv598EVvBRynxe1vQ_X82=w203-h270-k-no'
    ]
  },
  // NOT_VERIFIED: two Rent A Desk branches in Madhapur (RAM SVR Huda Techno Enclave / Serenity Square); can't tell which
  {
    id: 30,
    name: 'Rent A desk',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 31,
    name: 'iSprout Purva Summit',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: '2nd Floor, Purva Summit, Whitefield Rd, Kondapur, HITEC City, Hyderabad, Telangana 500084',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5595206102535678352',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9svm_1dc4lD7PDoP1SU5dlZYUgMrGmfLkqCs86NExkKpqBllGwfAZJ9sAHkueCZKDUKhjLCl37DX94EntKX6_39YqYZJ5GZQFsq0OIVi2VnQ_h7Hc6d39rGQ0xsP-7JB-Kwdo=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QC7rXqaERwTlfa5HVRP3T8CUG7YY-v0NLbLaYFGll0l12ga43BIXp-wxX1bUOUmNcw2S9mQDHEZ9RU7g7OeIQic23YisnfVcvPeeR19jXo268v7hwWlLYNTvelKmGozv6Uxb5M=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QnXyN5S4fd6RpGUObKf2iuFRDX8_J9XeUkMP0ouowHG6pKDuyKIQv3RnK-tiABNuCAJVZrnxsFR21St6kNI0OSZcuhCmPbrxlP8zVjSl4c6Fl3rChZIlmgwjshQ6Skbqxfk3SD=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9bSv00j46R0F5ry3PVKTVmIouSwFNyaXnuv7ovBEVacHOAlGak8WEnxIM4zPAkI5NF0qEpQcPLsbSp56iBSeb5CkhWsC0yVV-s9ZxgeUfFREzzDuI4VT3czlS3fH89vrB-RrMng=w224-h298-n-k-no-pi-10-ya259-ro0-fo100'
    ]
  },
  // rating cut off in screenshot (4.x) — fill in manually
  {
    id: 32,
    name: 'CLOwork Newmark House',
    badge: 'Popular',
    rating: null,
    area: 'Hitec City',
    location: 'First Floor & 403, New Mark House, 103, Hitech City Rd, opposite Medicover Hospital, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8951285958445979023',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q2mHFFdIQusbybTMDT8UJYWDcQ6p3hWn4WVLGKbEv16q-Cj02VhEJrWYx5p17zh11IrQ64ku4tM9-FOFUIllX-40mwE0PG_duiA0P4of0qfLvZcR5n-Ex3k89WSnoBaK6rLkXT=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QkHK0C55v7Qsg_-IFXzrdi2_TCbpKMZSFpLli9mqXO-adk9h6_MooeUkqiAD-5B514b1YNFlydqUEgOl1OdSZ2iO0sRPXeOuceZd7_pbDNdEQQL1_uNn27i255FeHg58Wyqjqx=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SDoITkWAoUJvGGtIDnYtBDSlVXFZUpHIvk-0Ne9f9zH0oAqnaZYpoJ177X-J9EYiEwbT9MQGTSblyRTWHkvhDSTQQ3hxgbN3Xf3XjBvnQTa1QJd0OhsZw-8JWx4yCiwznxXxpS=w203-h134-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QzUriyWIyXiXlgCoUHhv6Tm3q2iRqnTHbMGl3pjoa0e2JR3JaHZihthI4_nB49zIZhIBXE82zwkEQxy2-SKhM7V-Jrvcjbi3U4fM637Nf-3FefHddA4HYc7Kl54euEHzZ42yeB=w203-h134-k-no'
    ]
  },
  // CHECK: only Incuspaze centre in Begumpet on Maps (name, area and 4.9 rating match), but the listing doesn't name Gumidelli Towers
  {
    id: 33,
    name: 'Incuspaze Gumidelli Towers',
    badge: 'Popular',
    rating: 4.9,
    area: 'Begumpet',
    location: 'Level 4(b), Old Airport Rd, Old Patigadda, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2897866041066132776',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9znzuttWaBNDE5sC09g8iPXuNqoBQGvVBF7UmyEkOTDCYKg-YZt3RgBmISLw56RdvMeO5wAVmSrnA0h31DmJsq5UsaUwL8tVuieuf_IemZ4fUzdeyo3iXTOM8BZQqkkQ41YWB=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQcFLNfCu-vdk2MBQViWV_gRUJyOBNPrcKzynGDs7qhryaBYVMbqh42pQZ9boS6p3ioJRpqH4zYMpKaL4lT0D1DaEACSl-09b5PASQQamW0tm33l_OqBwbMxHvm9SCf2aDYa4=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RKqr4m98njPhI-eCx_zAbrnE22c0zmO67v3V36XRD5TZJSOY-rO1EkjVgWvmzLLlPljtYcmqL_5ENI6rVuv8UUVG3bMr0BmR2P-UfT0vbnUYp_2NHu2T_pkpOREng048wsU9tw=w203-h205-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZjtV3gY-o2hyuIdTJuZhUtgXwKf9921UvDpt868Hq0m85YmV7fluZ5yLLni4s6-8xgMDuAkjHEd9TFfPG0X86mm3mwsa6Y9zUN5Pb_41kI6saqkKMpUH1VsbU8vFTUQjVlvcS=w203-h135-k-no'
    ]
  },
  {
    id: 34,
    name: 'iKeva Vaishnavi\'s Cynosure',
    badge: 'Popular',
    rating: 4.7,
    area: 'Gachibowli',
    location: 'Level 3, Vaishnavi\'s Cynosure, opp. RTTC, Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16932425769699324359',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qk7yQGm7avW4ijsIOQa2dt-hTaw_yzdLWXfue8ZB-P6gn0257gq-tnl5Xhs8XP1cFVFnAYS6NxcXdO3C-eliReZlT-53NFIYoaC-unirnXjjXIh09YF2LVJ57g9XavmXyIoUQvFw=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RyvkLFCQUsLXG1hhgCuf2NNgF6bWII_1c9E60_mfSX24e_UziuEKUanvS99_czHHCOa8le_d7OnoUPBrK6CkstdCD1iYEJZT0lzau7Oqtu34zgFk3gJV797nsa-NmUG16SQZPgOg=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RaRzgVw19FO7mdihvh5Vd51ZMTyom9rak95IIFx3kLo1hsIcSgL7MMjYCQpE4OSadzcW_oOiH6oCBxLBv0pTB8a41RTUHGlpAdmD-vpN-5ckXGnFsBUsADl0flxourLk0b8tcUew=w203-h151-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbqWPN_QQx0cEO3X5j4G2qiNSFaal_DKj5nxmU4gM3khN7-LbMyyh4sFen54vhtbda4oHiOx9JzNy5yO4q06X5rRNqcF_VYjoEz0MzHgX5YNEsmBabgaOz4i9nmKeyfpCk0quh=w203-h152-k-no'
    ]
  },
  // NOT_VERIFIED: two Hatch Station listings in Begumpet (Prakash Nagar / PG Road, Sindhi Colony); can't tell which
  {
    id: 35,
    name: 'Hatch Station',
    badge: 'Special Offer',
    rating: 4.2,
    area: 'Begumpet',
    location: 'Begumpet, Hyderabad',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 36,
    name: 'Trinity Work Hub',
    badge: 'Popular',
    rating: 5.0,
    area: 'Kukatpally',
    location: 'Unit No. 114, Manjeera Trinity Corporate, Hitech Road, beside LuLu Mall, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9829743946648312453',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QTqTdcv9q63yQGLVKlBEWHsNVk8uQ5Qdzj2xbOhZWl42WYjNMRo3XnKTeKppGLJHv1S4X9Oeqm02Cf85QlnEl8C4oqGtg7velFmOEjvXVMkANf54kUylAwpskFJX5DdjDlbRJ2Dw=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbwZ1vSlEWGRmAbCcSmA9g1k9GepobOuE9VOjXBqR6Owx9_3J7DPD7J98yAHyQ7XSJpXS7sZOLx7J4OQz_8u2TgDIsn31X0KlcdxIp_8ES6xQ410Wb2vfi_fgkHOOD5VLshjWk=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRqjglwhx4tFc1cS1PQOWf_NvihWy5UdDXc6ljSKz_sL1EvfBkUY8uyJcuUebmLtkSEndYAveek0KW9Ia9xUi12nL-ayrHfOwjVjFv_Hqwr9fYQIePr5YzUwoOMV2344gCAV8-Sw=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RUVkJ8k8rdsU9h61p3nKNQuzpl97USUScBnnvSJGaPKymBvBqxEX-6czFv3CgXQxkMQGbKZKpVVsVFhfxAnUID_tXycQlEBBVwY356qxqN_AwhEYkIqh7NScsV_owQH4h4ijc7VQ=w203-h152-k-no'
    ]
  },
  {
    id: 37,
    name: 'Sand Hill Hub',
    badge: 'Popular',
    rating: 4.5,
    area: 'Banjara Hills',
    location: 'B/1, 8-2-248, Journalist Colony, behind Maayas Furniture Store, VST Colony, Banjara Hills, Hyderabad, Telangana 500082',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=826437737810807225',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SaXDCq_nQV1LbUG7ETHRBeoYKMjGneRAqnFch5jxoS71_sYdvITo6x-SleMjmioKQyO7Y0Hhr2psmR-boCRmCCDyjyMT1M0DGgknFISDDF99o5hgaafepehejDoTOavoMOBAUpXg=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QOJlZLLeUNtVbyFjx63iTfy04lV7U7bCebsCaMZRcbPMz8go8FewhjIXoucrAmy8ymG2uF4FMFPrTv5nJqd7DATLo5yeURmE2wf3RdkVI8TTyfT2XVlEkWG1zhhgWXEvKTd8zW=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QhyWrwJ5X1omjlHPA6bklOwMM5K3b1FQ14Sten3YDBZLTq2GBNXdN1jqhdPFPikvptUEOWw8fd9UZ1IOSiUqvJ6T1Ys46ngTwFPabFLba5woM79hbjScyzuz38NGNrFE7OT6XR=w203-h300-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rd6DpVR8jf-XUDZVkrMWwbcWAzPbFBaaCF0IvNcXDnAEHYFTvUuYeE3E7QE29O0oi1PMQWbdVfvu4xAuud4Fl87GZy63PusqQIwfmTrjuzpVAV55T4k5q-1D9H0u6Ppj-azIQ=w203-h152-k-no'
    ]
  },
  {
    id: 38,
    name: 'iKeva Sanali Info Park',
    badge: 'Popular',
    rating: 4.5,
    area: 'Banjara Hills',
    location: 'Level 1, Sanali Info Park, 8-2-120/113, Road No. 2, Park View Enclave, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3257261116652942845',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SO_1SpEzPljuBdJ_etZ9Ix7daQt8qSaBHTdbyI7-1CUk7v_nxkobaWOgnTrDJ1BfOted660alFm5ivz8brabHlVIQjA0NLHQYcp9v4lOqPHWcWiZjwVv_Or_gfYnMngvessE99aAiTaQg=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFgAdNcBaV2nkVwVna3BiSgKRo8ft7jrW5AzHBHdJ68KxHi0HoeSUqrjtYfu_C7FrrCwppKmRZ6Ae9QypRSSkd74VTkxJ8vlNCerwRXQpVdJQsMhIra6pqxIBPUsbGLcLexbCdyym7KngF=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9STfjEQ_7pD7SO8HLDoS7ejxIYZjBGaGk1Nx8W4xw1uXTsseUHdov_6Cf3hChkUzhPpf3qujg2aGPCKT0uTMgWMcU6XKRfnr9injVqhnMW91CtrdhbXUNCzkxPsVdJ87HzFI7tmXZRIRPs=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8kLdkj3RGkmTYp6uwmMUD4qSOypRk4GvsY-irwzb2kJ956FJqmaG7h2zBz9ekD1rLeUecPJ8CpllnnzgS3pg9wfwa-x1IyQU2QarbCXwLAyJIxyMB7RffwARtAwshqvIDU9udYZ-mVJr2=w203-h135-k-no'
    ]
  },
  {
    id: 39,
    name: 'UrbanWrk Private Limited',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hitec City',
    location: 'Bldg 10, Raheja Mindspace, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12860972132937656305',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ro1kT_YuJzHy3CyYTQh8J4GKcf481L28CSRK4KDxx0i_ZyfBwEW69BU_OWnOyajRLufFgSZDO9FPzMaEhcu2MqCRjHm-7NsqcvdGqsczpv27GvVk__qW3mgC9UbYkBaGIvo0kEAA=w446-h298-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9IOEW6Tc3QM4kEXbo68WLeA2Z5OwIa0qdi2OkMr46fG6HWb7GPV-OOoiKmkhaPfXLuPIxqseSNbagn0U9ZFZ1vzVDOAZsfMFMyTATnFI_uSel-6lCzqlABzsqP955D6zksNRJox7_GL25=w224-h298-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QK34z9VKhYNiIPqa8P69uR0LqTCnW565NnwSetQBhdzDP2wUF5yPmLGisWE8G1HiNh5YLAliL6V-IismQywnphLbg-6W3AytzvUOSwKlwaeQ_DN0PMACsyDI3Xix7F-jyNzyx1=w529-h298-k-no'
    ]
  },
    {
    id: 40,
    name: 'YashShree Space Studio',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hitec City',
    location: 'Plot No. 11, Sector 3, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14276957513799516631',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S3fmjqXmjUlcYxIPTqXAwnBju4t5YjynlOgb-tFQU5ct_y-dNGiX03-LTx5CZJ-V6XFNhRKnWkpnXtCxHXv-38cUS0J519_qPyJdeD-kE2ViwH09oukJY3U5mpZ_Nih1aVALVX47BT4s5q=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S3ZsZCSHvhb1dk2M9iXUdIEkc3br6Ws7knUV_Y6_NlS2DRXWHEBUrQGXWDTUPnbggtjR9I1wVKU3oqv7DFHVdrhfFJuy-s2IFhZffrdWwlw9fFv927FAwcxv_UEhZG-7kCS9j9n8Koz3n5=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Szlu-yY9JE09X93pEjeM2LaoaNtoLYLLbbjh-HCe-pOUYQ-c6HkSOoGD3RLfM7JpGPSAL9NvwHkP4sM2MWjGM-3Pqw_tF0TeFEBP9TcDV4ElKueA7KTa-SGUa4YDZKy-pD5i-7mo6zeAnS=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QRMITUr3-2bR6HKtfM0YpvUdLHwLR5Vu1XOVklMpDOMi3xm2EQjc-nMHQSk9CwJAqo7SgRgC2PjyxuRWtaDwOcBeNL728FZS5IHfOO6s2cchOHbUelm0VsczUtbZk37NfFwN0MgKqR59uT=w203-h270-k-no'
    ]
  },
  // NOT_VERIFIED: no CoKarma listing at Liberty Plaza / Banjara Hills on Maps
  {
    id: 41,
    name: 'CoKarma Liberty Plaza',
    badge: 'Popular',
    rating: 4.2,
    area: 'Banjara Hills',
    location: 'Banjara Hills, Hyderabad',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 42,
    name: 'Rajapushpa Business Centre',
    badge: 'Popular',
    rating: 4.2,
    area: 'Kondapur',
    location: '4th Floor, Stoneridge Center, Survey No. 12p & 13p, opp. Google, Kondapur, Gachibowli, Hyderabad, Telangana 500084',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17947100296554234844',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QgOOdTS8L6TNJ5W3N2RZ0lIHQsjpvfGJwi1DwPq_fyySpNI33eV_-VCvxRt_3G4v7qgfL5Zf5MnOGeCHeoOyuh4ML5zHetE88jeTjk6ghKsEUTOsJJmF729X1N8v99ajW3ZsE6yA=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S8Vb_yvw5MvKrcfKiEqqaCA0n-ZpN5K4grHQogf7mtOxjnAQumyMPzulik1VK_3y8HQvWKYiCkwvIf2tBOwLfpFf0zcAo9EGaLv_0NUw3HOL-LcdHLXdHaNryykp_ITp0HrmER=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TOlwsUNkUA3sPny7yPZW_qOVI16U41ViRHz5cXTllDfNtR0ULGiCX98JfKkiiqrNFZofESZ0vqB0tMmniapdwHWRmspnyP7V0IK30owbl9PA6MHKg31VXFIT_zdkjNvZO5RpeC=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QMNAur10dJa8BacOzM-yRa87bgv3e2nI1GRzMd4aXLYWVl21u0V7EntCIxyzH3UKwJT9G9xJSUBDo1py6jy1a7D-pqnmRa2_9oQCZcZA2-F0tlk3Jh-E1C4Hs9F7uVLSXd7yG9=w224-h298-n-k-no'
    ]
  },
  {
    id: 43,
    name: 'P & S Kickstart',
    badge: 'Special Offer',
    rating: 4.9,
    area: 'Gachibowli',
    location: '5th Floor, Shanta Sriram Building, Sy No 126, PSR Prime Towers Rd, beside DLF Building, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8971148982396539264',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QtR-fFo9thMYxZ7jbux1qAjr0nZ0vthWQ7hEZ2TcFe_Mdf1FDhG_bQelHBo4qcM7N4akWrf_g_OgxHg8WibEZUHTEAD4btfNQ9bTHvgNxlS6dvEKAWmSIqXtrcoiuye1gx8ntNUw=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RDcjX98XsLzd1Ir1cFrCG1Mi06x072dMOElbcGJaz6xMxzy5fRYchsAisiTKCDi2c27q-QCG6wERtJJXLcOmIbGxmTYewXZASgrIEScMN896yunJieYGET0Bzbu_1S5a-W2BTQ=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qrrzn9JFUwksqWZLBcmOcq9aLHTB3N-uurFaxdFO4VLS1Hqhd-MrsveoYC0b3Dm4Q-mRt5oT3W7IoSKQrR2Rv8hACob24OOZ088cIg7PdOTB13g1M0S0sDDvcmXqYKTOo8CxL0=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qe2Ue23MaTu8dRnk_YPtE_W6PvIr1iUd0tPin6lFamv7TwvAgYCyk_Rn2l70LSrrUB8mKRlKc26woXyc3oPfiYGxEkqg7JGSpTo0GAAsaCysxupEE_M9q4MeKwXTEHGdHMCtoa=w203-h114-k-no'
    ]
  },
  {
    id: 44,
    name: 'Qhub',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Road No. 36 & 37, beside Madhapur Metro Station, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8672985955626634728',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGJ1Gjtd8UOTIoT4Hgub2ooTOMlwSzvWB8_4_ZgU9ZDXutfGnQsBwd8VeTufeSEZY3b-Zosf_9B12Ln4u-xCpj8GW534n4ldaKtaGyhVYdchXAxuzGc-IAYbH39rT_QwVy1ND0=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QamaFxubWMiaWZ6qh76RFbDroSi7Wsxkw91I4UpAl9bTnuT2bvHPasTd7ykcZoVtB7FHUy1wf1fo_lDwG-GIOwrg6sbr-TekouEugwYbq8gzvJ24Wvq5Sy2qx42XAukffa5ewAag=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QrIjrqFA4aPNdXcn5PMdxBmMIXaBGw52eaewiqsKWAPAuvLz84MltD8924SrOtxtXzFFhFUTd5O5DUNgXgSO0qDkhjouDwfZaYvpA7GOFQenbjUu8j4RJj6zaUA5jEwGuFeUZKFQ=w203-h136-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q3ed7Vm5DgHiETpJ7ZqgtGaWIpRT0ohQh2uBw4zKoJfl2RwuW-v1jybN3pWF-kbE3pRiObM-5e2hf95fvpltUcnfXU-3Gl5x23BarFwaBpW_0lnTgDht-tXlOrSpfmzM5V_P7FVqsGH4hs=w203-h152-k-no'
    ]
  },
  {
    id: 45,
    name: 'Coworking 24',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jubilee Hills',
    location: 'Plot No. 1097, Road No. 36, near Peddamma Temple, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1643233057903159594',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ssz3U3tsT5Yc88k1U2ZCTkMljBrPxyCsTHFQBYr8Xl--4TXFEsjciAee6Pi7d2CIJj4circC96WIt4yua6GN9sZcQb0mdrTM6jVc61aFK-IHqx_ccgoZwsvU8bfUP5jZ7X4J2V=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQVvQtuSBQFzKtXzSLhMgg4npucd6017Dw7_k5sPqkeHRTcFLCau2mfsFyPcl_KJz_1qJ4Qeb6pGV4HKjMwaxUtO-Zx6QDLRJ0Illh2NnJ7HAzzf-THHXLe6u60TXUh1EyG8k3=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RtjwxKqkJopGjSELza0lkp2PTyfmytBKOJDETw88qrCRTlPuitya0k2j8_vCS_2vsoelTrrynrNOXc_F4O3yzsIzWz79vCKcV_ze64a53cmBLLk5cGjwVlWaEwnr0QnQcvlWSo=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJMqiyvPUDErwKIK4FMyUJZiMMD84GQkBDTtW8sOndnX2ycO9XFwFhbd3UPxKu9HoHnV3o-4R5O6VIM30VMM4IW7JP_T-jUVWvOxON3IiCKGCQNz8uWibZctsUA2WW78I7W0oX=w203-h360-k-no'
    ]
  },
  {
    id: 46,
    name: 'Rent A Desk',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'RAM SVR, Plot No 4/2, Sector 1, HUDA Techno Enclave, Hi-Tec City, Madhapur, Hyderabad, Telangana 500081',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6326855249078680311',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RLHdFGnIDR6uYDI5-RCJOo2kkuVBXWQ8qogHt-iHZDa7JIcimbfnmR5uhaDW1_dBs8lAXfaWygkATLh2hUDonHcmmHBJygqFrtTl6moy-egzfxwPx9bMGEaXjuKZwu2Xb4IdFl=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RCTIu85vTBzZDn8e13anPkf5tzXHaqQmA-JBJb0v2ODBh7nxaHlAFiZ352QLPrpfwFRO-fZyWubF8x5hDjnxO7nMXGSQzVea73f3HfxXrNNa5H9pydLtoR6TuCkvhmANhLyAim=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RqsI5Y9ELNpp3vhfoX7-lXp3W4b9QXnfpnmJUKA2ClBsDTSJVEfFdKpm6ZJne72tTS979iTBLzhcGpdAQVguCIvrpCpAJeojf8HJGDOR4yN2xhtg-_sp_M18zFfsjydBa2yKgY=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QFBcfJCqZIedwT-JZ4tXQdt9vIOUYCCSv_NufhH0kbddiUln7yy-aAhLwGsl5t24Acf6YDX_R3Et_evx5ml56PxxayNJPLVSIViRNC1qCsjvyDiZeH9p33wkdX139CEm9mSQ=w203-h152-k-no'
    ]
  },
  {
    id: 47,
    name: 'Rent A Desk Mindspace',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Plot No. 37 & 38, Serenity Square, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9438919512733630701',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SrMNOXThC9JBHBYJGjT_FgdOB6RMLVcFfucYOqoApj6-yIV0pLzVGWCGdc_5fIA0Fd9i2-3IkjSUzKA4AjBNPLHT-1Ow2Mo5LpDG--Q4SdubvDHDIlSnQ4Y8Hu-orBIdPDWSWARw=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q0crQAVPodd_ago7jdFinToy4i5xMH93_d4_3VX5zF2hEvy5ZL3281aOZUocoY7RQklkPdab1R6flxjSRg5ss_n3CfC9AuQ3-xAcFatlVYdJnVUt9h2ijpHg-E4BQx1045VluL=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RkU2QMTdi0m4qPS6nI_5yErEMJ37uc-VH3vUu7i2C27sZRqRoszb9XKUEWlUh3f4lRYqnLnRAf28XjqzQq8snykb1qwra39D7NbsQ8cfvZuUWSqzYT_YVUjJiS5WzeglXfBHET=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SCqDIPZd9D7frSZUAfvWDcLB2TEXrB9kipYm-QAH9W-x41ojkoqXZIH76vedyAlSBnc9vfV28F7I4M1aq3ZJGoLzqzL2ulv5YPCmBYqYYPH7CXMAULNByXKCJ-Ri85Zi4HGhzK=w203-h360-k-no'
    ]
  },
  {
    id: 48,
    name: 'Euro Space',
    badge: 'Popular',
    rating: 4.9,
    area: 'Gachibowli',
    location: 'Jyothi Imperial, Janardana Hills, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4119728592405867802',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QgZmw_dniaS2rR3zDlFfSx3LaD1Sd52aEFqo1JeX1-mkUaCnsdK4y5diVQCs8g5-y-4bCWKgtzUFiIT85DGtAToU7E42_gG9In_p-pF0ZMfiqL1xt0O9kqKUvQjG18rNgqin-Ryw=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJBM0fIEcB6DSptlChwROVpHc6S3tnsO0PPAMZ_dD2qkPx1v-nKAzKd57wYTZwgqSsc83cbqB6A2MKT2NFp5S0zvRpGJUngr7eQGk-yHY3j9USNOsQHN7UjXxXRo8xlrueeWI=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SqKO9Xo6n15MbVcA06f_rRxahIKNsGuMR7esTHCC5P4tWfhJePSkCCOa9xhGqBUbOZo7X22aB82CQeHOkCZpKMcYiJN0u-3QOsSd5aLuCL1wxy3EmE1OQQU_BWOH5RVlyQugI=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0Sy7SEj7-r_6gdWXkljbXo_tRl0u4PgpV7ax0Jj4J1UEnscBtUJ9MwmtLDtXe7BlpeVm2kYjtJ0vqnqtz5PKhbeX7KEZpgfmbP3LWsEPiLkONUO8Qo6tHsI-vS0B-dU-0vxLf=w203-h152-k-no'
    ]
  },
  {
    id: 49,
    name: 'Rent A Desk',
    badge: 'Popular',
    rating: 4.4,
    area: 'Jubilee Hills',
    location: '5th Floor, Babukhan Rasheed Plaza, Plot No. 682, Road No. 36, Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16816495750301267716',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QFTDd3zti4d8-MTQrrSbkFPVTBB6ScUiywlyvx4UnFpL33ddEGnTpokQtoYk47ozCauCWRKKkcKSJW-JMR_P5wRxhNLPdr64qZssJneSBaZHKkua4VmsdK4Y8y1MXWeYiuLmQ=w397-h298-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QUjcHIjYJawud-mstMQVIlFlY8ffUJRiQTUi3mwyz5tcmukjqrfZE9ZszXU7HCh1lUB-JzcrLpSxN1YEBFANbDfZd8HGM2LZgQYBhhKBpCd8TNliudwP2CcTkz0eBcnqi90d4jUZ8pfhSr=w224-h298-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Two6lbC92OHer048eMCujep-87zEB6UhaSn_BhEuN6dI1TQ_rMWJ9Me2iY86OB3WQB4Pvx5Y-YfDEhJSBK0jOVJWLdfo4MfY9sIRfvQkXTHdrxOTJ4O-rugoAhuvhRxLPt4boG6g=w458-h298-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SwwF-go4-_lkHdgjAbfnFBFII0lWm2K7GiEW_8l2605ui0_88OpsDLVksQHtU1TFZF_n5SpRSHkr7roE3hPj2YXMKNyIAWVd9i5Xnfkk4eNpv87qjY7vhgG_-VTUX2bp5CLsZe=w224-h298-k-no-pi-0-ya143.21848-ro0-fo100'
    ]
  },
  {
    id: 50,
    name: 'Alien Work Hub',
    badge: 'Popular',
    rating: 4.9,
    area: 'Kukatpally',
    location: 'Unit 406, 4th Floor, Manjeera Trinity Corporate, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9896923479013034457',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QsLmDj6Kf9tpdTiZEK7gHvFrEjkqkJ6L-B9xBJri0VQOmowvEtlP067PC3W_lR8cbnPDaORutknKMFx8m45AR2YRRJNUN4fvTKimjoEYPW2NkSkingUY2UvHahHNY63bUjDEyb1g=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9So4Jxn-XhMGrM3pFSlWEJrWdJ5W6zogY7AO8f0KiSRNx818eIWiVu9R01ycZ5mKReASB_v2h10sdzwBAMw5cP5jweKWlNVBmkhZwC6yycuUExOeNKG5UQJppQSty4MhrnqaDIk=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QT2w5JijffVZ4RYE92z2ca8l4fmYY1LUbfBHk_0A2gQ18HHqyH6iVtnHg-5CtyCyXeLXmvpBtGQ44cXSFQhrVGLp4qqrGNrPo2pXD5JYm4XMx7m8iIgNY7mN7hOtG6u7vPTchN=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QQ2LYWfirXoQERsa2VCmh1uDugiGi2Kzql3-3TSd1SkvM_eH0e1G2oWw9JiU4N-MrizafKxtTrUpndCoOVAHa1YIlRx9lUDU45kjqDXcak53QWqeeF1WQ2oG13GvRtOr7dluo=w203-h152-k-no'
    ]
  },
  {
    id: 51,
    name: 'One Day Coworking Labs',
    badge: 'Special Offer',
    rating: 4.9,
    area: 'Gachibowli',
    location: '5th Floor, DLF Cyber City, APHB Colony, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4383142836699921608',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWMh3OiygHEUr5S61qRWR4WMzVtqW_cUWFk5HVDuT9VA-CMe6SnVkVlmge6OoYRJNohpBkw_XFJNSFs1VqPmrAoVkrrHT7dDLFXLFIF7JR532tEQ7zbbitfZ_1JrUlck-5hpCG=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TIKPMy88TGxJ7IjE3Ds3oUHGmlUENVRO-4vTXLS1c9tGnIeVFJgDQE-qnovK56B_MvQrGNCDBd3yWZpeY8Bd98EIc52sUJyNInb8H1ycGDuioXW2ATqjije3sSf7hSiXl4fU-Fsg=w203-h360-k-no'
    ]
  },
  {
    id: 52,
    name: 'Inkube',
    badge: 'Popular',
    rating: 4.2,
    area: 'Gachibowli',
    location: '5th Floor, Oak Plaza, 1-61/SO/502 & 504, Khajaguda - Nanakramguda Rd, Chaitanya Enclave, Gachibowli, Hyderabad, Telangana 500104',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15420223676637693458',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QhUBXpKfPdxSxcpgHkGyh0vDe9hHkKIUcaJZT-Z_GpkUAl1kIjKU-5JtDC4ENnlSgqENXwfMt5Q37A19hf4i0CSD2jIa09iiPayZyQYtVx0gjiY3qbO1LiIxADZtq1fBrYRsQ=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R7HktEh6NiVxKvB4q3aLk-A2hgjp1AO0JAlaXNN1Fp1vEV3tTIusGHGybJiS_mTTpzN3KzSdeksdZ2fhKAFLYwoEDooRMmfAX-I3wExKBUPqVM_rKbCNyeb5-oJ9ECw-Uk9aov=w224-h298-n-k-no'
    ]
  },
  {
    id: 53,
    name: 'DevX',
    badge: 'Popular',
    rating: 4.8,
    area: 'Hitec City',
    location: '4th Floor, Purva Summit, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500081',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15272950277111080949',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SQTsXb5Ts36RkpFw0xbvZn4VVBpe8wS1E3FFEoDgBQb7F5Us9VDmVgusJY4gHckkj6G-gBgF0D1wDroKd0cMGFD35kzDSmZxD38ajm2p_Kvmz9ga0t3VEDc84qitF78mWpDqK1=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QKQgCsW3TQcSNgsJ9uYrfv6LsYdBthKiassmqlklOhatqngeHD9W-YXsgVPRS0h7Fe_PVXC9EM2z-f0CIPF9XhfZ--qPUdVHARtvqkN9I_uHmRYiCHkS42wZRxgffng7Wg86oIRg=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R5xpUjqDDWEMZ7JjBlvuOSSRJeFXrTvTivs4TLeoigshepfSkcw8EnyuaQEtenIw2Z8vFSFEXrzXxGqXQBemkOd1i1hjTvf12bs6WcSJWMDYyzuTnvbO5nUTP6Z_0gKcmds-0SaeB3j4uE=w224-h298-n-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SjZlikbf7TC0cgvBayVv9cfszy88NgHgLtVH-G_iA7eJokvHxIjieDMGrtDPao9mqDrkie-N6sUi4kPQHPmz1CjrCYC7pyFlF1ZzQnGuVUsXH7qGwmpIqeyHJd-SmUwR65CzdLnsxBot93=w203-h360-k-no'
    ]
  },
  // NOT_VERIFIED: only Maps match is 'Autonetic®' in DLF Cyber City, Gachibowli (not a coworking listing, 1 review); doesn't match Hitec City
  {
    id: 54,
    name: 'Autonetic Space',
    badge: 'Special Offer',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Hitec City, Hyderabad',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 55,
    name: 'WellWork MPM Corporate House',
    badge: 'Popular',
    rating: 4.8,
    area: 'Gachibowli',
    location: '5th Floor, MPM Corporate House, Plot No. 44, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13292803086606433889',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QBZWnZfGWWhGByCE8ZPj0mKLLZLpuSYS3Czp0NiCuEn_uTJjwdIDRhLUp7f-BSh8rozP9nyuXlXlFiOEUHvTzBenMjVnCpSTjP1HFb7IGWn8SRi8FF0WCUL7gEMSj5EOdLbbiZ9UJuVCc=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TWZ2yHPhzgcnXrfpH-mDN7QxemaH80GNDFjbpmwASzIxKtJ1ABH8VwxgW0x8VYjIS7wGphXJBz-csa6AYwpx2Mv3v0sM6nhN3XHOlkmcq7wdJ9NGWc3xoUxaPl6VnewXiQxYz_Kw2BRhAl=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RRaUMe-QRwFG28HvL4UtfIoeDc_TmH_uUshHreAKPPhd71MkMuMPJDc64PCB5vPpc5Y0EOTtDzujbFhb_BeS9FuMGMRu-sVQ0TMdydZQCAkL10PqwBCMbx5pMDkLJzKiwHnGqL9l7Ema1c=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QI_vZyO2pmgPqNhSZhqW1JrEmsNXHaHtrqTziWdViHjeU9nj8Wg8rdhhKrChUzCpCpnqqSR1Lc318YCQcE-j77UvPnCF0Q5if_P6LSHtChkgKM6GaeH7ESjAIf9hVGlSOeM4OyqniOnDY=w203-h304-k-no'
    ]
  },
  // NOT_VERIFIED: two Unispace branches list Gachibowli (Old Mumbai Hwy / Modern Profound Tech Park, Kondapur); can't tell which
  {
    id: 56,
    name: 'Unispace',
    badge: 'Special Offer',
    rating: 4.2,
    area: 'Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 57,
    name: 'Work Wild',
    badge: 'Popular',
    rating: 5.0,
    area: 'Gachibowli',
    location: '6th Floor, Navayuga Vizva, Survey No. 4,5,6, 1/E, Rajiv Gandhi Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5107968291087983663',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RAH-DltptVzlPciwoOiqMRcvK9K8igKfnOyANRsWBiD3miiZeagq3HmggEq3DP6tBr66lzo87BNNfKML1fcflH1_IuGVY-AA0806KnyKeb5hV4kSaloKIgU9S-KYFLr106Jgg=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZANwQOtwTumIAV1W-NjhLU6viWJ5Ox2lQ0OP_1R1EJKEyYN14Wx7WjZs41UqXmNF2WqLK20tZYIWIBg5tUBm3k7QxCGHkhrjjGbCyxSrXiZifFOioX-dQUcbSvdEu2qGgXcvm=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S8jO9upYnG6T1yRHPRu6T-7XtpGNuzBHWdzzs8k4DvLHn5dOoEFc5vMUpEMdjmXXoKm9gqSJFdOsvcsmRmRitRo80Mv_ywJhlyfuyHQSXoSw7Kch7NCcAqVFz3M7PK1obDKlEt5w=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RKVOjD_G4yMNlQCpfIbVb4sneJHuzMhNjZNbtpzK659j0_jj_wxiYydqRFWvrNO7DmItJRsL181_BM3uOH2W4-PA978aVVjnYjQV3IFLWs_OF1kYFrwaYqcmVcb32gOEAXwBfnfQ=w203-h152-k-no'
    ]
  },
  {
    id: 58,
    name: 'TEC Salarpuria Knowledge City',
    badge: 'Premium',
    rating: 4.6,
    area: 'Hitec City',
    location: 'Level 7-8, Octave Block, Salarpuria Sattva Knowledge City, Hitech City Rd, Rai Durg, Hyderabad, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11726088352723803338',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RWe4P0fpps6Gn5pXgqwdf2URIGpdeTtRToylHBRrqo6UnH63YQG0gV4NxrI6Zwsdj_AXvca1TkemNrxWUcOoXSOO5bVCzKVMy9f8bHnvzlbLSbuSz8JxYgeK8sLl_-jD0F2IE5=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QNgGmppjuo2TLwDeisdl3fGlrdADZMAys7zXlSN3eHVef5nhzsTGVEvTLCTSd4fddOfejh9e90LFczgNfkaq3CGiPo3NU1ECMr29OgWoWVKXh9IB97mJ1yc7ehYckWWVDZAkCkRQ=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJRbRVsJ4coXGjY9dwHf4hIgxNFL0XSW_oHOU3H-KfLwDD4lGnLRwbztG4ZarsMoQB-5Kyt_-GHI5uPLLpCu-YdiG0_Si7RW7BrAN64yRvNz-_XXrJQl59surV96A-_2xLv6Q=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QQYhSXquskSK8GiyqmXuFg6k7fAVdljVfVeLLKn6CJVExMyBKhzIDfgoqcVhYasVb11zxuZKawwgVFJiTiTnhPo89DyslXC2otx3rmeTWMTtoa0sbyHTQGJBidryh7A4uUpsBc=w203-h135-k-no'
    ]
  },
  // CHECK: Maps listing is an IT company office, not tagged as coworking; no badge/rating on your card
  {
    id: 59,
    name: 'Enlume Technologies Pvt.Ltd',
    badge: null,
    rating: null,
    area: 'Nagole',
    location: 'Plot No. 19 & 20, Road No. 1, Shivani Nagar Colony, Vijaya Gardens, Nagole, Hyderabad, Telangana 500068',
    price: '₹10,000',
    period: '/ year',
    priceFormatted: '₹10,000 / year',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4370628572697052554',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TwqrYd2vjV_BQbuK-smorOpGiYIUYI92m5tbe7cYeprHGS25khBRUaXLNUm0PXWXkZyMsJGV0a6ldoEWnLavpVT5WyWOn2ydOnZViEJT0bMuFC6ShYhX-TDrmnvFinn6kF6k5M9A=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SvDFjEO3y9osSy8RRe-7ic0Ja5hCSPjMwIFutCXdNP8uowXzuNx10861E3pErzWIIgyPabnvgvx_VtaV2e_Q-fOSoxI6tHL_imCpLQtqN1acpMzQjJm_zyHFXQ2VjLP9ptyPw=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TlK8iSKUNhUSrTJyyWIiQdOG5U1j1wZ0hDzIPVv3xsQQYd-DJyyV4W9mKVnTsizldsf-m4MrOoLYZUOpSBio-4V88bGpSq1sRYXChhXAyZl9VF-0vXaC7in6Ko7X7vHl0XDMQ=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q7MoVYTbDOMxb8Y_AcXPpm4t_KBKSXzbUGqrpa0E41GG3yU0u5LEe24IRm3L_5uerYlSNwEb9gNSpb4M60WAYspFlXTsZzfOUPqtMp0HKykPBmo3r6dEGNOyRIspZ8UY8JeVh9=w203-h152-k-no'
    ]
  },
  {
    id: 60,
    name: 'Lorven Smart spaces',
    badge: 'Popular',
    rating: 4.9,
    area: 'Gachibowli',
    location: '2nd Floor, Vaishnavi\'s Cynosure, Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10682465508281460252',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SFWt73lErYMfTm2XF7KoRRwG1ZPZEE32epWaZGeYOYY2TfvagixxZR5FF_dorYgdpEbB2c9tkuahKgTA3TiEkHwTyirazMoI4YOGBPfwLEZGx3CyvLSPwA4q9qzo6rYQ5NnW917g=w222-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QUV_htB6e75Ojahjito_j4GoPv9w1OZKO3Mx9q7jGGMJRt9zLsnS4cYBDz7uX0q5ZQ2MaJornANKItuj9pIVxFO6N6gKHlocYOiIyY6mftgh6sEhyBw2N7Qvg25QAU2bbEyC57ja7LaMA=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S3HNHLW4B-BvlCurp_Ery93G61Ho60CKTR97p71GTYwN2OgNOoxD4iGlnqvXQ8yfECvwlQSkTaUQOsaQctENoAMpVlTZeUd3xhcGmh4vzJgZTW9RJJ32OEDSFx_4WakX632ETJ=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QHVSltW0nJTyIGVWJMm-5b06LawWyWMpRkbPPH8RKhNUCZ3g-Colj1I6ZBKBTud9tp0PL5M4OdUiK7vudylhch_c8aeiefoD6D4SmlhmhZT5fENHpsyVFVx2C9t_tvtdlb19DLd-ZuFagz=w222-h100-k-no'
    ]
  },
  {
    id: 61,
    name: 'The Hive',
    badge: 'Popular',
    rating: 4.2,
    area: 'Gachibowli',
    location: 'Corporate Capital, next to Sheraton Hyderabad Hotel, Financial District, Nanakramguda, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14195552941024254275',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7plr1d2mqcUqLzSb5aCswcUw1bmL8lpnkKJ3BptYryUx8Lxxa-BPB1rgk1N-YMgLQbD-Lw9WHWQOry-Hu9k2VEkOefqBHEzdAc8jvOz9o2yrHnIUga2EHYanOYJ-heJM6i52cDf6RB_q8=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TR1k_bXc8wVXWmPNwn5ZwTCbDXUCzXdXmRrKmj82fUYSlQ2EycyhHLnNlrSXI47SlRg_LqdUV-Bth7lSHTZVyopk4PiXlyXai_dH1p5EIcv5ciQ9vDF5EuAAtRlmChLOtp3E4ayk-XjoXj=w203-h255-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RG2J_GUMvbaNX3N_3ESORMf9biwRh905s6IjDp50b9nNcrYHf25mq-u7tbaOAC_Qc8hZw4CzKyoC2L-ommTeeHtkHcMpgsOBWro8QtE6MuBXgA6cfVQgCv569byLqOpPxjomRrTTJvqchh=w203-h304-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0RuhwiiyTAYJLaoAn5R9QRiOMRrC5z2urIDqmr5WGHIO6JBchZ3mrLZZXbRTbRS1bZJcDL1P82Dcbdi-eEK33ZzJAWADYCAJefDc2VSrekEem1Xuxu5XIwsBkgbi0Fuerqs7Itg=w203-h270-k-no'
    ]
  },
  {
    id: 62,
    name: 'CoHive Workspace',
    badge: 'Popular',
    rating: 4.9,
    area: 'Shaikpet',
    location: '2nd Floor, E/10, Aparna Astute, 8-1-293, Old Mumbai Hwy, Shaikpet, Hyderabad, Telangana 500096',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16991332781816669071',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQrZVfGf6BOj02xfMMH-FQv0N8OispkD0kL9PbVY5GoNkuq8H8CA1hasszucpvjPozcvVK9wZrNZD-xw1f7Ql-AUq3Ymqg3PgTtuCNDmxuxO2hwi9DjjsjYeCLEUUJPGVCnnfL=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TC4Z1GDN77nWX1M1n5G6-gkZ7jMUnaGkVl8HgXcIhENZd4TPqGXDrsXR9I9qE_t8ZWlJo7WS9jSOMuAJku0Stzv-Uaf2p8DELPkifVSbzW72jcWYVqWo-hw_CCOXbLul_Lw2lK=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFQg_6W8HNlonWtPMkB4yofWz46_T1oof94yntM4jaUnCcnvQ04lwlHeuDuA5xPqKYpihHd-oRvCZ0te0iVKLSd6wUiM97izPXmJ9LSriRzt707vE7A_ImfRxsKadXWnAFPEYZAg=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S0nJS34y6C3OtH2h-S9jH_Mnnuhtwlx-hONnkjvOG9qjvi_4fYhpXjSoaowh9flYvNl4ML_lDHX6ceE144qX95-EZnRQidewp30g-BZERSgJR6y8vitFw8udZ1qfnk5ZJ3-Pju=w203-h135-k-no'
    ]
  },
  {
    id: 63,
    name: 'Matrix IT Hub',
    badge: 'Popular',
    rating: 4.4,
    area: 'Kukatpally',
    location: 'Shanthi Nilayam, MIG 648, near Temple Bus Stop, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12344402414767440633',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5aXAgE1qjIlDiajtxgLBhU_6UJ3Wc64aiQu2idavScCI-9mXzrvsomoeeKk9zdfjhu6zMPHStzAr3oCUOt3AihRKUWzOS6OtD__WB42km5umScKJDzRFRxikRw_rBeQGCcZAa=w203-h134-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SF5PlJYJqNAzWOv-4Gucn_75O6g91rLdQwMRN2hpSiYux1co0edzwlvzyLOH4u6vVJivBTBlt9dT1hLlJZiMuyhVL3Zcv2yHXWGWkMtKE-SPNi47yX1BLoWJtgZsVSCJ_VlFA=w203-h358-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QTttj0O8FI0AHwO84hu_rgfwfW1WRN28o4k8lNw8a-Fv_Znw28lJZtdvUZ_o_wDHR8u_lwZB5Gi7HaeskGc_63G1ml23TOjjyh285cP2UKnd0ovyq75vDHgbe5k6V0faMUDhjY=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SUukCNLEUA6LIZYk-8VC0GWFDv3A8RcuoaTBImoDh3nDENzDBexfmiekvx5rpBZo2_V-fLbDYDm2nmBc8S0yf1bN3tbAOnU2Yr78AWqf5XIqdeXVN2SxGwSsClZO-OwRowCNk=w203-h134-k-no'
    ]
  },
  {
    id: 64,
    name: 'Awfis Sarvotham',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'Sarvotham, Plot No. 12, Deloitte Dr, Phase 2, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3873141257933285359',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RGfMhb5cNz-6Uw7xospIaGi9BgYADAcuVqp_ZPCmV_SiWewajm0sfJRbEeMuSLU4yv0-ZP2BWhCl2ilS8C04EcIso92pDRX8gZ1U_4HMuo7aw5Z3SUqCvvamcODsPXUGnwwOFly40QPXfo=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QQR6oVFwkqbm5YGg7AllSrv9vZKS2nbBYYb0LSGW3g6M8o7t_On5Hqsny6puZJeAWfP7yUyqRgKTG7gpVeQQO0XHxfNbP27FIh8iZqVWPmwubqbwQTvLeJH8iJ4SLrs1vV58ETR5pUMTMJ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SXQmi5OJC4eE-GD-dzaOKp9NcXgQW_1siHEQscWvUJCjIsM-_ZhD9i7wUkPDpIhnJE-RqYIawpEngYpp3EUl8MTW28Ghst5WIzEAGCmmzd3H7nVBOD8_j5hTaeZVbxNzvRP9s=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ToirIWlzK-L06JdDS76wAoSufAIuZZECj8a3tF8pfcusebY6g9qr30hg7hv01y2RNTjuY_wetpSAoLHSWqumbmwnCDL5BvkKMnnWt_vSBVmE1v0mIybVIzrEj3fYYSNRG-iCGCZw=w203-h152-k-no'
    ]
  },
  {
    id: 65,
    name: 'Nallas Spark',
    badge: 'Popular',
    rating: 4.8,
    area: 'Banjara Hills',
    location: '8-2-350/3 C/2, Devarkonda Basti Road, Road No. 3, Green Valley, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1644007677573665895',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RorjQP__JGhvVyEJOYe1ZkJsucop8taSmcjniI-H-gqn79FGyd-39w51O0EwAYYXqYUBMZfVU5SZQb_l3iIOmkOykUpTrfq84SmMi8r1jdWOa_8b9yuCagE3z5OrqwdZ62QNWT2g=w203-h100-k-no-pi-0-ya32.999996-ro-0-fo100',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXAuLvKe8pt8vkUHLIphao6XmeCqXIJEG-0Rmyyvi9idGtZbPQ1VnF-sGlkrTuPs1HY80WbbrUR0__xBT_Y9CADM_j0_Ty5rizVBj9EVLsPLCq0fR5fC_lUBlPDg7YmOcETjwrgA=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SkSGXu2dbXMZJ2YQVHCCktY-OwXcQJXEhjaiqfZ6JlmreWyPZdbFVAmO-sh25x7bkq1dkEV1WKo1Sswz11LZIz9i9Qa3TKBK8FsX6UpvvVMNaRvCkoQA9cPY71Y0p24C0ocfbH=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLer4iGMaoKWK36Am8JnRmzFwp0SJSiOQcAo2AB8TDWjmZ3BkoGsQ-xWYGL6uHitaRWnTUc5ZJhlTEl8PLstZp0hkGVQ4O9CP4TgSvFXxqZxtJZcO1AkrzRDz33A-gIpvkQqo-=w203-h114-k-no'
    ]
  },
  {
    id: 66,
    name: 'iSprout Sohini Tech Park',
    badge: 'Popular',
    rating: 4.6,
    area: 'Gachibowli',
    location: '8th & 9th Floor, Sohini Tech Park, Survey No. 142, Nanakramguda, Financial District, Hyderabad, Telangana 500032',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=446747466504548351',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9REp7vwRwbSmSKa3I360_Dsz6qMYflosPvLiY-Fwt8_z-7U21x4iRvPQGo_OgO2DdVPH7IgnhCFldamFOgIPUuQ2aIeVwS557rP6bT6YKw1fF9RLNoR7_cWzzvynBXtvlxr0JNYqw=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T6tZH7BjxMsxYrqzZVE7GbdyL9CELQ3XMR19p650aHJjCtj1DwHXeHtYs588lJJuHg1UXjuSev2ec44b-lEAK3Hdcx6NlTYQ8ZSzoa9vUIm0oK-sCUSdHtIwG9jNW-g9oNu4c=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TqhtO7H7vNvHGzzPo_H7Hi0mxiRCvSzIMx3TRgfyM8AfmcPjhyMvT9V_YVX6nfc8kyXhnO_8BpkzYpZCVybrZoYZujTe6QdXQ17TxozD9QMR7hMbLg3vwLDY2LES7YBJC9rqUi=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QokbOd1AQYq_u-D2xa3OkGvcSWIV1cICB8O9bj6zYCQrwZ5RxWsY8vUOoXBgBsxPEc7vy3rv2HB6GxkPU4IdLbFh5ZIiDvhd5_pCWIppeoVCZSnXwt_4-R-zN0sDFz9vR56lyKVg=w203-h203-k-no'
    ]
  },
  {
    id: 67,
    name: 'Awfis Prestige Skytech',
    badge: 'Popular',
    rating: 4.8,
    area: 'Financial District',
    location: '16th Floor, Prestige Skytech, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3403082449006230353',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RP7lsn-QI9t6O9Ibwri0ethqfiMgww86NVmp68Q7zV2R_62yreVwcJHjYSBzSDOyGHIqQbn98pMWBl7yFBSodUb07HODfX9cNhL_T88A1zfRXox5Yf3ebtaGd0jBSGsOlYVEXK4M7uQnId=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QR8ixJCrGMsUzGvRZBectefsZZiQ6bSp28wusw0JjQJFqxClH4kBsI1qIiVm4dQdvX4eX4ltGzZAbd4sZJKAdSSXn4F75rgm4xAM2bgrTcm37WzzTmCkmcaNi9txNxdBlE50pF_NXJ1v3_=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SV1wYZqcVxHXmBwtMFgBjhhPJxO8BX5leIe816jRk6UIb-Y8OgQ6MUIPzdZvECJ0Vw2LNDnjKC5FAhnWDNChEKo8vT6WxWAr-fR3Sid8juvjekV9qLUgYhy6rvmxaa2lhUq8bNMxWaXwlM=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZ-cEpbGb0yqjJQ63LfPXFkrLW3tVEnamyktnOrCgQVnLVNVrZ2dFHx-jWi7Pbst66uHo4gQTJns6Nq44EEma9ugXHO9RpEyyAcjOjeYTrAqcVJdFU0dOOJqLA3b8f5eLWnh0oLXPiqlg=w203-h135-k-no'
    ]
  },
  {
    id: 68,
    name: 'Awfis Laxmi Cyber City',
    badge: 'Premium',
    rating: 4.8,
    area: 'Hitec City',
    location: '7th & 8th Floor, Block C, Laxmi Cyber City, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500084',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8101034979992877860',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SNBeshM6XJbYkQY7zLIxFyTiTY3DIZzhkrujQtCDIoPi36E47PCbHqEjBIo5dII6IZmuEubj8dGGAZXtcCQujCWLy52u5ECsrz42cnzrnYPkul7izOmGbDC5fJinp3cCLod5YuPGSsoupc=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SmXR6F5VE1uzRUgeBejf2nlxWEt3-G4jUKWpWvGG8gfOhSFasVYtC31w9fLDFjJHO8NiUceLKHi6h30hzcjUaJyjs59jY9G0l450HULy3-fPddKE3QGP6Ke4qif078Hxt7fS82Ja8MB7lo=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ry72sQtCx1Gyvh5uOASXvEqVd-Cz15iNjVUIIaSnTHKmGspSZduI-LnuDksiSMiBGMyrAXz_UqaNRr-ouo5imS947_d3ynH_KziPVC1uWZBxTpKaRHxSU0QotRlbATq037pVuA=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QcTrZh1ZEYD7yasTA-bCbloQGdZw7uB14KEN-in801yPmy-igNcrH7-d8C-h3aMxR7-XZJKB3bHWzRVOiCmyauhWkAWp26yOXdUkxebY8Qo9gM8SBNpCchq6N87fxFKPOM1ExROA=w203-h360-k-no'
    ]
  },
  {
    id: 69,
    name: 'Awfis NSL ICON',
    badge: 'Popular',
    rating: 4.4,
    area: 'Banjara Hills',
    location: 'NSL Icon, Road No. 12, Anand Banjara Colony, Banjara Hills, Hyderabad, Telangana 500028',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18191068146545397652',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RiYPRwMZ7V6-HE1AMNTqEmor_U3PuYYultXJp42X8Mg2QaivavXhCLx0cjOjLKBDzheW03iuSMTnI5HRzfBugy1su3-2ckJWOt1uiFEmARDxJIwyWJFnhT9xO7_fSrhLV8jGOiXgq9NlF3=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R__HJGPbu6sMH_X6eNMjTsOvgLGaW_VtlOexQv1-dZrPhU8F3_GR80nezT2n3fC5RYjcySsqF0oWFsCxtFmsbL2PRly7PmwjnwVpF4rTtC30CS8VHMTsKVy73b2RT7hoZkQYfMag=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TPSQ1wMpYlOs3SWcN3xX0BEXFW3q74_QYDGl_FtPa-1N9zI3pEQokMnhO1nt25vp9HBBzv-kvqZR7LEY0U-QOQTt36pO4a8_vc3daBObsRDq4hRUWDOAvJ5bs6ILCyqo4v2CdZ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QM6XmYiZxEHvFGMoy7H_Byf9113PZDk7eBshhTKgdlAunOl1xH4Z65vRYr6nuVXEd8vXa53pziYPJjM8zdUHSJU4ehDsEoUSD3uy5Q9LUWinE03d9_1chfbacU3JKq_6IbiQsEEr1QTOJA=w203-h135-k-no'
    ]
  },
  {
    id: 70,
    name: 'Awfis DSL Abacus IT Park',
    badge: 'Premium',
    rating: 4.9,
    area: 'Uppal',
    location: '7th Floor, DSL Abacus IT Park, Survey Colony, IDA Uppal, Hyderabad, Telangana 500039',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17726194110001474505',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TrbOm-Nsrdq7rfi3fplx6F0fxxVccDHwPBiI5Ax1lWdfOHVrRahNyzaJfa2x8oI0kEZqL7SdTFKsMU9GfdvU-9FFZex-bQOv4JYOteuKoOnU0k893qpw5y5R1SdRzajdkMoBmxNBLretM=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPaLfA43hdwT96dItR4jWM0hHfHbfUvx_5AvHggO96y7MOIt-OIsP03fQqC2RYgn49GADoga2q5QHeG8uC1ecq311UdTpLTOPbyaUthMwCDYBuluoBE5JyOeZcTHn7SwnpsvP4Zy0TaKE7=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RgmqUR9HlBTS1GguHKyUXlc5Hrd3L5-nWMeAbrrSkerk63UA5mAcDj2tyMmUtG5JNMvTQ1V-rQIeIoOJVMaDlfER2zemlgtGSKF2BSTvRb6ShtgmC2WDaPGULThVKRi4JD1TSFHcP2l6DO=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TMxn0R0DYYbRXW9DOdpcq0QTkC-g2X8_OW3od7G1BmQW9CG7oz0dd9dOjI54BI6fIVWpOVABNmOhsRIUel4nkDm0AkO-DaR7G-6NZr3jVXlgmK-2nTf7HVizaPEHZkkYA5BAe9ZE2Xd6ab=w203-h360-k-no'
    ]
  },
  {
    id: 71,
    name: 'Awfis Rajapushpa Summit',
    badge: 'Popular',
    rating: 4.7,
    area: 'Gachibowli',
    location: '5th Floor, Rajapushpa Summit, ISB Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10774990012639854890',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tf94_xrF5_oSIdPYx_AgOrgNVziJvkhL0oCD2Dd_MM-FSJQ3QBbNpSCnnfqQj_f_TJnY9ppkyrVJal867bAwvBFYi85T7UMHnz-e-2R3Zdk5tas603drNZ7JcXn9l2sBKc_wdu=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QnheTvA0O5NlLcQUdtUGiuJi1p-mxErvNG_hmkKExeB2UToEws6RNLXx_tvbo2Y-fUKj30ZN-bUctusxiI6_EbRHypr-WEl5VfNakjUraLVkNRz2qamSTJuLuzXu3rsK6N6zyg=w203-h151-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S5pWHQiBK3N-bzmQsvWaUKAQttl-Uzu4M1YrIAO3ybmR3taf7HevUZSEzlwzFk0nh8cHy80V-mLJyWAA3ntrPARj9NdTTF4-U1BdAH0S2YtcLos_lZWXmhpdjJSvlkixbrBRpcRg=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T57pE1IttZ7IBRr9pNYZ0cN-rhBdykENNB0VRE3hZfh6O4Bavue7IEvY1-yNaUyPFJpq97kbRmoYd7RInIVqEvQeRYV1pZLowr_-qwqNCrjfytLszlFO_rKW9yRO0wE9mPNiH7vwlT46I6=w203-h135-k-no'
    ]
  },
  {
    id: 72,
    name: 'VCollab Spaces',
    badge: 'Popular',
    rating: 4.9,
    area: 'Madhapur',
    location: '502B, Jain Sadguru Images Capital Park, Capital Park Rd, VIP Hills, Madhapur, Hyderabad, Telangana 500081',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9603387333758165177',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TSVlCWYejTCVQzn0wQvqisZSymudfrrXbN-A5dUwtQligiWXTZ9KwwcvzZWL7oloTeC4eqjOEPT-VM0uPzv-3BrsXSY6uvFI-D_oq-EVHei8T3CcGT2hgqzJYeWLoWXuiQFr_g=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SLIf-JineI3Qd_3rr-1Lr6MTF5MjAfc3dB90sXjzO60czvNKqghs2xHX7UA9d5KZARTOGLL0qMeVNnlauPP_cxMeSI2fH0Qvbpxxh5G1xZXnNE7dTEdEXN5SPOPhE5ZlC8D8fp=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qd4DFHk1YLUs3BZc3lgYbburyxEhdI5VtovJkPUlXhk230rJaVq05Fmz1BHKS8tZpl5-fo71X71tQ-Q9h2WLlXniNpxsyIJCFmPx53Hx5LhEaZZfhFuJP2KJcxJutfTOkbt6zg=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QO4DEqKl4TsGY6sY7Deqjf2b21S7H12isbcRQyGFsb2c3hnNsLCvmlZISG8k9dvQRfy4Xrwe3e19YHos3oivmZzvWIovUUNgphlp3JTv_GzucJJFoznhg7wHMtu2PzB4tvTthgPA=w203-h152-k-no'
    ]
  },
  {
    id: 73,
    name: 'V Quartet',
    badge: 'Popular',
    rating: 5.0,
    area: 'Kukatpally',
    location: '703, 7th Floor, Manjeera Trinity Corporate, eSeva Ln, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15077627226700183205',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJp0XBFQBMkxq39HzW0r0WlPGxZA7wjjnh91jMmU_1VXEsoMHuGHXi3SdA_heIlqHWa2gxTlfHieU_irxwm2wUwLiO842Cd_iOL9OWfXAMeiTPApCQFl72pWovWkq3T2YR4QG2=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RRQJBdqCr7Vy9u2ougPHMzTs-osa3JZ3QeqJdkdaYXH6Nwq3CJQXHjxwbXbpR45MlGrCXv3hrRv1bgGSjdmUqsFZ7T4DpK-BOfk9LMPHneoY9MWsS8lRalIpsVV03zoLZO21Wd=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QUfafP0EiRYnc2J_GL7IETyOgo76Y9wd81XHm2oh2jg2nk5_IOuwhKATiDKeYJnkPVjN9LQy_TzBuJ4JlOP486fmPmziJGCeqFz9uGBa61A4TChDStn4HuJALsfoQoyd_MtpMI=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QHq8B0tLFfKAd_ziPH4CMtj6xiMfcl5udE8-JHK_P4XzFp5ioDgCzNKInWeXU_0EcfOoY02bKRDUq5pYVwSSJXKqqtFFmv6ZZ1NN4Dg9QI_b8GN8Uy2qk2bZnBIQr15bZk8Ei2hA=w203-h151-k-no'
    ]
  },
  {
    id: 74,
    name: 'Wellwork Space',
    badge: 'Popular',
    rating: 4.5,
    area: 'Ameerpet',
    location: 'WellWork, Plot No. 8-3-323, X Roads, Ameerpet, Yella Reddy Guda, Hyderabad, Telangana 500073',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12056890681026454876',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tw_ZSkJ89QDCilsGfxwuNEtuohY9Zj8WsWbsq3ucpKYOsnUHw0sR_qvUasBEk7vKfQcoOqJY6DsIRCkG57DtX3hLhkdZZv25YLXQua2sMupoEyN3EAW0m50AnpCpmVWOkqVrHbexuI65Yu=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TbEnjAIkv-8OglPhH5yXdztxwrZSxLs2sCgrTiOKT7fNDMhn3GS6j-nkkmhUsdjUQq0df-kqewersE3x5kIukChkv4i2FuA_onHDrJPWt9MedqrvH2YpP1Kf44rrdlHUd8djO1W_ILqKEp=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T2ipRPUcxOPCatDX7RU4id1Mxjj4iBhRMCWsobJf3LFhoK0iTliZW8XOXWdTsWpoQVJNi5UtRtYcxj_ugVhKqp4ifzYQRIckG4JhKi-k0F0k44RY7SvYBb-Gxl1siyWcB-K37Ob03rNSTC=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RrfCQfHs_Tz6Pkuj1g29Va1eOU5aCAJBu1fKt4WT-zFClRXUvO9F9_VDiW6VqN8nC9lhegZv0hU3mJAk8_UBX2HxJlKE8RGBkWp8LKIeV-nt8I22XcVQhV7kVZv2aJ-9uYtVzM1TXvTt5-=w203-h135-k-no'
    ]
  },
  {
    id: 75,
    name: 'Awfis N Heights',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'Level 1, 4 and 6, N-Heights, Plot No. 38, Phase 2, HITEC City, Hyderabad, Telangana 500081',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15113381347321784602',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QjG_mFVVY-PpHsl5Wyi8l_1GwhAJqhkh6FBiSn3VfViQ3uaW-BN0QoanIxJ696XgXiFd1W10momn8CQhQbJcrdoOufpp7O54YwMUN4o63tSN0cMuSJuWqEZQ5vyidIdVV7gHMv=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ruy6WNStbHtndPNzlu_819YwsnQDl7Awo4eVKb9Z65Pl8W4tVYQOS1hqg6Dc8P7rV1Aq-4OCtxtPZs1sHHklcAtSEsQYjbPcNncZryE3nRPM6UWEdoyYjC6jrz0ROmDdm1gFdn=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q5KwO2SjCtgXRcJtDewFmvpG4di6nyJVJOyy5lShXcsu_0tnI4SG0YUTV6OBmY8-FF1IZnfAVKZdsy1uHFO2W3tSb1ggPOrZHzlbtDd7A-PpRQX4FLVr555w1FKy5YUL3VkN1eOA=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Td-_nUpMYu-g2Ms6m3R3hG1tPXdf9LQIAuuGbrAo6fMqYKgPE6az_5Wx2PxkT9fHZiuaaE9fmAgRLXpsu-HJ2yTjXuv2o29-9C7ggWGJh3DQgb5k1NlUXKWwxbgE5zInZSa3Qb=w203-h270-k-no'
    ]
  },
  {
    id: 76,
    name: 'Workwild Innovative',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: '2nd Floor, Jyothi Pinnacle, Hitech City Rd, Kondapur, Laxmi Cyber City, Whitefields, Hyderabad, Telangana 500084',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5716707303385059509',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QCHkZdYQH1_QCpRgFURWm3lxwdDFvuSQPMHRQZqhEBttk5BjaVRmBUg7xryeihQ_0TvzYJAnVx5UW1NDzdVZUMMEAAb-Igg-wcr_x9oGQRKtsRyQ0cJ4QgD-n7MUcLDWZ2a1o=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJH4MpcE6rTHCXxjo5mRbM6iXmAQIsvyrMbrlE0MRNUeoulUrdOCiO2sixqeFzyImfd2KM4QYgyXeFJTiKVpQK4kZIvsYlrzHMIEBKDRjSpSfx2LJidjP2HZ0K8u269I-CUcjW=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TzGNS_XJ4z7gR5Xpt8vnpJcEq9fwV0qXF11MWPIFnXAsjMwscjNBn7kYmu1DyYxlxz13TvX68BimRNUbfgZsgVxQb9ArhvCD5McH5_auBguLj-iAPBYFZ2krEoLT4nqBvJa0w=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RcMglKYxUBUqvaJD5cgswPnRmI__APuBsvz6tNMWNhDYjbVcX_W3s6bdq33gVmQIrKvKBDh9Yg7Na0TRK1sRv1KqOAurn5ZAjGhZyjGxz_f4wJvC_YwIRKxQ3Q9qi7aTZIVPcN1QI04lc=w203-h152-k-no'
    ]
  },
  {
    id: 77,
    name: 'GROWORK Coworking',
    badge: 'Popular',
    rating: 4.3,
    area: 'Financial District',
    location: '4th Floor, ISB Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3747347229323647779',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SIXKt4w1Vi82N9QYwzxBBERdYG2Su16yRVXisr2nnHft_nk1ln7Y928LLYTg8pPZLVCp5zgxc8Dg4GeldGpilxtyITh_uH2R3CSHLrnoE6YNYlB3-w5Eidaus4kqCFEcPMbgaMEg=w203-h134-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sg0IrAGAireYONZHfwSaxBJa4yNYveD4cF-t4-fpGipDMJH-HNOHu-ZUtNRZtSzxipGhzxONiMKaRAqqoKmxKBZxiylPK4xfYUO_MmCcy-JLugfOUqdcbFOQ_U6_ZF35I8fc1W=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TD5v5FBIzDi8WDBz-mvinm9aqYh0RF-gq1aPg8uozXJGBv5zWq0dj1PAxvU-DdPkOdMunT9dPwQFzLBsI_rNWch_USe88PJBpjTg6j87Fm-PsvnegeVpQwRFyaSMmpmFOPl7yb=w203-h134-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q7N6_CGN51PzZeh0P7SfzPte9X3foYXVWYYvEKdT8-qzFHRoNJ2I-pcUmNOPX50KJ_9kCHc01lIv3LmBDOxa_9X1j414IguXiXwEuW0RTJHXI8cmwXZbwvv-1-L0-BAOuWZ5sl=w203-h152-k-no'
    ]
  },
  {
    id: 78,
    name: 'Geek Space Business Centre',
    badge: 'Popular',
    rating: 4.0,
    area: 'Kukatpally',
    location: '12th Floor, Manjeera Trinity Corporate, eSeva Ln, JNTU - Hitech City Rd, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13316634591917907032',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_ipFCtnrGMQsuS7sAf4KQBEpVGYni9HulGdq4pw4VlVw6RXX6Y47UCJBa1XqyircTzueuvK0oX1p2LuaM0sz6OEOFTa7izTfiz6Me09ajz_fDPWeEUFmYFZFcw0eUDGlJMWx2=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RVDSz40_X4TUzCPGzhPnUaEdBnlvVmd_FPf5Yo-xHfsylrrtpF27aHIPyjrqRiuC2Q8Yhmwf8wg3tup0VCf46855c9BJrpwLMLJ-Tv5YSphmFospbHb4LeYXl11W-Vs9tuBNfC8Q=w203-h158-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLJKAG88-7YDJcJAsOGE_z3y3mASxstRxiUe8K8xrCJnwcdSWzn1T6P6n8VasSqGCZd_5m1pNcr74hq4ONAWUYx9Q_Y2h4vYIDJMxWYq9cfiTqBVGJF1zAGBwlnV_o_VF3tArv=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S8xv1xOlXIrpo-MpHMnHz3HlgtlBnA-JETK3kzzlOR7YEPnxKrVy9SYXSi-9T5w7W4-C9UCxfVSPSZrgut1ceV4IeqKIV7Ll3L3w97bOc32JWKQkpNfa2LelmbSMxQeTaPfD4Y=w203-h152-k-no'
    ]
  },
  // CHECK: matched the main Hive Space listing (name + 4.7 rating match), but Maps places it in Kondapur, not Hitec City
  {
    id: 79,
    name: 'Hive Space Business Centre',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hitec City',
    location: 'G-Floor, Modern Profound Tech Park, Whitefield Rd, Kondapur, Whitefields, Hyderabad, Telangana 500084',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4971099867963894381',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ts5v2ilNdurh2E_D67pMcYySYuCb6zlxutsm7dzsnt5NhiUYirvL0ap3cGmbDZmQluftI7kq2UHKUAf4n51Ag_zYRbug6KZAZPGkOWkDUQrk0b_jahbMjFtDdpeedKONQHGaFO=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RpSvlHANqf6N6hkdxT3fDbM6-N0DO2wcOtERwRotqbgY7N8E8oHvvgfdZfJeSTnEUOfecf7vzCgOB32NbGYgqmFHibbGnydzaxD3cwyG67rlrSrhFHezk22n53cVcS-AkBolTjPg=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SpiuDZ0YKb_ISDc9SYdsYUxBqrieN5HQ-RoTXosc8Q56Xcl47ghI83wLC2VY7mbc2bGjmMC7FadooAbPZzD9CMuzJluZY8WW4QM8ih-CU8n793TRWjVnFX9CK_39N15BiQBJsI=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SpahW0CH4li5J1pJRiahiEIq4bQaMwHrrUY47vxqPPRxgg3RF6cayivdrN7Df6IsBOFfHU8KT7x3QU2Q6mPIRRtDVA02At9vg7UDFKVF3icKNQsR-6BLefaXoUjOq9yWtWCby59w=w203-h135-k-no'
    ]
  },
  {
    id: 80,
    name: 'EFC Offices Jayabheri Silicon Towers',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: '5th Floor, DHFL VC, Jayabheri Silicon Towers, Hitech City Rd, Kondapur, Kothaguda, Hyderabad, Telangana 500084',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17528677072460908812',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QspXDK-NzEvt-rIv762OYMLgv9W9BNLAb_8E2Yz0M5n4MM5XC3e7ZT4s_iAk7VV-GtJoMn6gHxWAH16bzem1b7i8U3yJ600TdA_wMiGr2V3wDRBhgXgz9V9lvuVo3aoLGD55M0=w203-h101-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SJqOu3HsibI9KgkgGFrk5EDt-JT7LCFKLNtycCz_E5idWinRMP9Ql6ss-L5w2fDFVdWkrsBxeSOP3BVzoM4NVYd5mxeBhw_o80MKc-tXtyiLZ9sAHRIKDGp0YavAEJqGLxkwmEsA=w203-h101-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T0M7ebr11jJeQwE2chnxgpK53y5sl2kKqJxybcqjFBZVf3QbeDn3kUzwHGneuP7wtSs3XCklM8FLlxlJI6muatqUDrf8gVDMztGwLti3WUEUjZJti5jXqCVvDYcOFNeGkQ22SH=w203-h406-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RPhGqrewHC7dp_2IIwEbOpe3jRfeCOPCCuQQ3wTc_WHeI0X0AULIjUzoxS0G6qC6VDh7LIRaHUzpc6nOdAbGV94wpsJyXExJlDVeqiC1AWYNQUXWno4rBFbNYvzcOLxPmsLdzG=w203-h101-k-no'
    ]
  },
  // NOT_VERIFIED: no Maps listing for a Trendz coworking at Durgam Cheruvu; nearest is 'Trendz Workspace' (Trendz Sapphire, Madhapur, no rating)
  {
    id: 81,
    name: 'Trendz Durgam Cheruvu',
    badge: 'Popular',
    rating: 4.5,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 82,
    name: 'Elite Work Hub',
    badge: 'Popular',
    rating: 5.0,
    area: 'Banjara Hills',
    location: 'Level 1, am@10, MB Towers, Road No. 10, Avenue 4, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=440019104161154706',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RiEL9JelyLt6b28b1l6n7Azu2HyJuFdiGiDjLRhUwKu2Osybvgm1weaotep9Jgkg7yhba4W4CW0-7T7YaXTOU5l15wrNkCnwH8hvwu__b7wZYdUyBs5_VtHRQ_wM8BXOMtY1wBFw=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Ts7gCg3xry1d06J0fR3crC7XBnB5XG8dRgnigFImXTOIMEUAHpNA-5FTyRQgTjJkkonlNOKwquw1S-DzLlgyyvdBEuSCrkOgqgvWwlGrGvTf2mqPlFnYBuQRhViDHbCkyKHriC=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tpow02BktE5EmJqUZFDE0d528QV9tTPhDaQQridCsb33msQuPxoT55XSusHwlSaSpcy0RtN_aucSvvSp5mhSLw6US-sRGhqRW5P7V_UJTenfFDM-vZQwv2ofQzM6CDcUgn67r-=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sr001GBLoqkW-wU02J0fCW43Iu3cC-azrRjWJuESHfpzjKNtcwM9S7EA8FFhk0SE6Ng7gX3KoS5mwnB3tvoPgPFzqBPuqv-NZcKo2E5gYTE4Z3sDLDzOVlXgjKcWqbQq7AwsQS=w203-h114-k-no'
    ]
  },
  {
    id: 83,
    name: 'Redbrick Offices',
    badge: 'Popular',
    rating: 4.1,
    area: 'Financial District',
    location: 'ICAI Centre of Excellence, 10 & 11, Road No. 2, Financial District, Nanakramguda, Telangana 500032',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11857473561098162302',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QNZw5zGt4MwHN2cS5SXp5LiHtSqIn5g6mKVqHLd77cQ14xvV7eb0pVss25FVllVv_aoiuv-MrbYjoLu2q-2TKTbpvVTT-QNaoFPI0TF8sPlyz4SK5Jn1QWpkp3eIFVp7-X0hdmdg=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QuE8gq311HkgvRm5huYmhkovJ-XwMIZpj9cL5l6fiippS7eBmyT4UZhiq6nGy7N1t5mpGPp9d6B48vV66S4DzLgjTOkaj-VvjhHAxjRVnPLAgX9s9EQ8L4WSpf1CLhGnSkpdnA=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qk1Bf7RLYx7EqtfZNVYSiEQt8FDJd-yZ4IrV9DHh29LZbh8R-tFVXRmJuZT6h5uEW4KwhqIvJXpqT3_tlWGt_qHrZ9KXMHJ6j7zjtWJmpEh7mHpfhTvAjJzVPHfqLyUA-SlwG9=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TwAXxOWXxg1BjwZUalNWZ0m5dPkN5NcjHRCzLT8EU3Pc6J6IKY9-CMIuwgQJbIRd7z5EeEiY9HLecuwevYACYugHsQaoLh_dmm4XXSWPTgXH0H9zK-_betajL8eJa6cSYus6zf=w203-h120-k-no'
    ]
  },
  {
    id: 84,
    name: 'Hive Space 2.0',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Ramalayam Rd, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500084',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7439448667164796219',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRsJKIwVE1LOzI5Le6Ny6QriSbAMyvmn-Rd1Z58rROAWkcNOcsL20E8A2O7KpiOYCPIPBQz6FyfqGC6I5uma01aHjg8ApYwP3CoUzBoY9vfytV8LRYKsvoT_RWTMsZ3LIgxprTe3m4KQQ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QwwITEBcucNDGH6fVsJ5pI1gAp5C5NaepcqdsejXGCuUmZLZ2vbgQ1nz9Kokb4nUquxXLtIZmDpu5Wi3GG5wJ6bIjD73Z5KALQxHn4chZnYo-gA1FVl8ZzFj9xDNJkldCUgLuVMWAEGDRY=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RNw7zaNZfb1lS5mUQIp3Y2fPsImfiVU-JKoWk9zeOYRrnv90Ewf_9aliZ1VdCtb-pMCKldHrZgG7teuMeOL1yxDBGEuF5H_XrAW7b_4jJRp6BtmapuvLvtRohgorqwqH5icGzT3_uQpLgO=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q8KWowvacdcS-6vak5UY5T13U_LAMwimXdfEciGOy4Uc6z6JNhIrrrM566YlIvd_TVFv7uRzYA8pZzurgWgy8NMlvwbOAcmFUhx0JDkjWqABfZxHBAM08NmOZ_LeP9zYlRY123m0fFZfQ=w203-h134-k-no'
    ]
  },
  {
    id: 85,
    name: 'Regus Phoenix Tech Tower',
    badge: 'Popular',
    rating: 4.0,
    area: 'Uppal',
    location: '3rd Floor, Phoenix Towers, Genpact Rd, Uppal, Hyderabad, Telangana 500039',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12524914044068216428',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RG8Um4JKACtKScJiilrqV37Q_t7KAyzelo-NzK7lE--dqKs4Akfa3FFpQTzHe7fSz0ym536iZpXSmcm60tf2QwxdFgeXT1LyU0blYaTXIVam2isc6w0CVu8-7_eVfFqZ5onrZAvIWbIEhs=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RkR1XMEjftRt1pm0Nij20AlS4hTotRfiLjfb5qXdbMAe9JlTcw3ssMnVYVxMF6xM9za7aYarSCOGoacl8r5gYsOQoK5ZqPWFfi3Za4PHU1vUyTlMhVxlOL5ys0TKtE6mrV8yM2XPqqDrg0=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THRHbEz1dQaUfd9tmIVuv-ZnCGbST19VD0gMEY2epg6RTUWCEDgbmsgtYBuJd2-_JD6HKamo2R-QagDl4OnJLyS1iGBr9eLVRi2_8Ues2fL7FcjrQnDw3f3vRZ4m4fA2o6_4TUOUiwi0dM=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RlawnmP88VTFHSCQ21EM3zhd7SU1_2qbfHcEP76hWZYXC_PRwzAxAzs4fvqRjvDtt8L61yT3INCyWcVVdF6ELWyKGaoYHPmTaakhIwHP75177aqNj6sh0OYVaJlL8cwoLpVbgahQ=w203-h152-k-no'
    ]
  },
  {
    id: 86,
    name: 'Regus Manjeera Trinity',
    badge: 'Popular',
    rating: 3.9,
    area: 'Kukatpally',
    location: 'Unit No. 810-811, Manjeera Trinity Corporate, Survey No. 1050, JNTU Rd, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹11,499',
    period: '/ month',
    priceFormatted: '₹11,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3354306477961076309',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RE5y3LtAVzuLhuIScnmJek9ftSm4UIY3NNVYUmcqoRExoOMqIussUvfKPGhXhaGKl8SDxSh47PU696CdLZ-EcCc-lennZHreONQEFTqP4ZrB_cm0GUYHqfCKYvMEhpwROTlWN1kurSk14f=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9redKX0InmPret4RcObR9iATgdd5fxh89WYsGmfXdy4KTFlz0xTgA7HcfKgTdZhSysXNTaTMOAhGfaO0Ec6T3C_-Nzv5H05aob6jg0VbsDKFtqpAk_5cKVU5iPQhJnf8f9GKs2jugXxmE=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T7gvRnmyXAN398NuEo21ZW9FInDi1itOfMzwWeKYuvb_apGX9PDGiJMFE5tyR4UqivgQT9O8sIkqpWTNJtuC20eYcAwoakOvXQOogRg-b8uLGfgz0ZBINliWdrEiFj6gD6UGEjPegiO4yR=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QKJZEZzvOwvMPZVdGLT-O-ac-Szs1NG29SrqzcLrL3cOnJLX19-maDJd5jn3vabtFOLjbkRtP_KJyOUyu9IsaRiQj73pnGeIY8aYXVYhy8t-2KK98RTYwRwtoxvLqBwfSuJ2YGPtQiXOvz=w203-h135-k-no'
    ]
  },
  {
    id: 87,
    name: 'Redbrick Offices Salarpuria',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hitec City',
    location: 'Level 1, Parcel 4, Octave Block, Salarpuria Sattva Knowledge City, Rai Durg, Hyderabad, Telangana 500032',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1076700495648742977',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rcq19G5LnCctsvs5KDn-H2E-rvqFtxsQ-Zu6FTKomHkOlJbeuuSegRKn3eMZL6nDSMzhb2wmWaXOVoXgCOPg1RPyzCoLJxBx3_J4EaOfYdzVMOSMB9bLK0U6sWI5broBKwd2jw=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qkcb-2GC-PfEx6t5bmux3bQS7H7Kp3GfpOH5L8kqXcXyhUoSbxpOb0cPZSeSD_0N1R-2-4NTBVBI7OcFezM_PhdtXrXlEXvX7ViW9OW_pnuaR0ZAEoF60Un83UEk7xMd8wnxFM=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TtrIv8F74anVhlHbID9O15EhqxbDCnUdss_VAHTXOfGAMJCN1wJmfc_g6mPQ8Pm1QQwXUPRKIuthJL37RY7DiVRGAWd2juamKyvJgGKXujuUGDPTriTaXt4CwgY23A5c_mVdxRHKTn1Ig=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RSxk0FKROq8Q9LHSbXmgsPgKpLjCmdoTGceekZL2yYE8JZvgUMXxLehd0riX3VZdQzlVOEMPkoyBd2M4o5OWaTTUktr1gEzTRPCqGphq5hGbyzPH1ifVxKmStGnhwL5K5ZBDgx=w203-h360-k-no'
    ]
  },
  {
    id: 88,
    name: 'Regus MyScape Weave',
    badge: 'Popular',
    rating: 3.7,
    area: 'Financial District',
    location: 'Road No. 1, behind Continental Hospitals, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14221952262106500160',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9uPIju1iAorO7qCkT94wMpcrXcQcmElL-ql3kbo9wHxXN_iKgfVMgTfUGb7Kr5A9H6tMte6eUAqH9xD_zLyW_glQcLISXxIgCgHTnkpEhByj3CmqBwhE_UfOG1FpDNhsVGx-07JfhsoZu=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TKTYQ7VLxRDBKWYqTlOXFBnsaSWxhb1o63z6tp3Gt5H21eFAXDgT3dC4ql8LnJC41ndtg9rJRBMi1WrDBtXokFz3dIQqDY-LGSplQv_OB0vYsV3Y0v8y2Q3ERNR0mKW8CAJ8Q5UzaK6qU=w203-h253-k-no'
    ]
  },
  {
    id: 89,
    name: 'Regus Gumidelli Towers',
    badge: 'Popular',
    rating: 3.9,
    area: 'Begumpet',
    location: 'Level 4, Gumidelli Towers 1, Old Airport Rd, Old Patigadda, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016',
    price: '₹16,499',
    period: '/ month',
    priceFormatted: '₹16,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16472219549808720826',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJMI1nhuP_cFnA4N7zqHCi7RtCGlgp1A1RbBljgMongB8b3HnjLBpsGOWos4YtekSdcHfwesZ4zIFC12-wEp3EgAFCV029X13c1PFUTfLrKW25q156kjRM9bpJrpZ7GDgGirRhYqFINfA=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9UdROJ2_Orn_CCmpfT_RRL08n3R0cgX_auVqAhvjbiXCgt4iW_G3DZ7QXkkpEfqN0xn8iPT82BRAHaOJFZ3GcfnQs1Bqm3aps3kb1HLXwDakv-TeAvwLx7LkcoNtN619R3S0QlRRYPAI6=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RkGrivTuwniqW1i1GB9uux-GkFYkv2yIbO-3PzdTFZ-iYVM0wehE8RpiX02F0Lg3xoVsaTWyFCqKAHo46k1MtwiYFk30AkmJaLPdGNtW93yhWqk6glVliXMdvuMa9WwILqp9zAr-AnmZo=w203-h304-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qco5dkhoak6wNtkpdPM3amXpIoDZGYl4PC9dinnj2SU22KLzRn3MK3xtM_BsEA8ilOMWa1GDXjd-Sx_-i_pGGt71ytJkI9ca4FzXh-6cpKDT7QaCRcOoN8Kx9JVcX0g-aWGqRoaa0wC8Y=w203-h135-k-no'
    ]
  },
  // NOT_VERIFIED: no Regus listing named Acendia Arc; Jubilee Hills has two Regus listings (SL Jubilee / Road No. 36 #787) and neither matches
  {
    id: 90,
    name: 'Regus Acendia Arc',
    badge: 'Premium',
    rating: 4.0,
    area: 'Jubilee Hills',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  // NOT_VERIFIED: card has no building name and none of the Madhapur Regus listings matches the 3.5 rating
  {
    id: 91,
    name: 'Regus',
    badge: 'Special Offer',
    rating: 3.5,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 92,
    name: 'Spacion Business Centre',
    badge: 'Popular',
    rating: 4.1,
    area: 'Hitec City',
    location: 'Level 1, Spacion Towers, next to The Westin Hotel Road, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10015576475245174027',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TcexiACmgDiI49seF5DunuT2KXWZz-ApGrxOJsII5NPBK-HkwVhn6ZzYpoDzvxi4FJMJnIeYK6GVcfCTL-ixVMujRHXiMPWjrOKq636zO40RZo2oe5P-ANq16A8A7pcgQWGas01DEcmt_W=w203-h240-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SXdBvB9H3NosOCgCsAdH-OvYtMX-aail9DZF7H-4cVJyDIp_TmLPYmU-FzcnYyqbzmfTNIZh4q8l9GsvQEh4d7GRMpVEzJHlT8QEL0evEM67Aaq1nwWB0OnFTLVtO-tZ-nqVGuXSfM4Rs=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QG8uSOvIUJO27V8REl0M94-1e_UC-mjX-85yl6-qJ1XgUVlhKv2UbKccDcKehOIsxOfkgJbS-6H0MAsMxjFAJPJuJDXp-Y9ju-a1sBAzXKEvRc_0ZrcQYNFd7dA0xNSqGQgPnv8HiIyDM=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QyOIuVFWs6kiyT6MLk5a7xsMmxFg9ed5X5yeJQJHGAR2DbABlxUbgJxpOeWIWYmyFc2DBq8ZyPtqikcnzxqK4jb14h9c6iPyM-tOsIQZgsREUG4ncoqaB0a6o7Mm_dU2IgV8m76livAZGS=w203-h152-k-no'
    ]
  },
  {
    id: 93,
    name: 'Mahaveer Gateway',
    badge: null,
    rating: null,
    area: 'Financial District',
    location: '12th Floor, Mahaveer Gateway, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4041326348622145142',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q-pDpsO9qQmrAdG9JfSDm5twI3JG5_AICBABqdoi3hqDWpFwWJbsf-FGlauhuh3FRCaQ7SzF9RvcAQxlfGq4y6yBU8xjpNeYjux7gVgnYVuvizjaH9dtIhPn0bJ1oaaVjTXHygfbtWhkMu=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tmt7LVrDD-x-gPCEYrY3xgVtC-d4vpdjaM0r5mqyVcBhGOya7Y1BTx-61qpD3DPrUx1NIS6VJs-8PQtSDP5Nd00pKKyVwq0C88w3uQxgUChNYuRKHwfnelJUvn3gBudDBrDqgb50vO0JXz=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9x7GVfZaXP20Bs4TCHDEzYaQzfHSjETY6mmAU3fj1tBXlWe1QyAC7yBOoxLsRX5Q60OOt0u-3I1L0UpLHJHCF0F1fLybOPzcX4eYzGWOUUqVi3BdgwwlzLqRO3s8F-VaVGVwPem79QDHb=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9PKzYP_rpA9eX-M537B5tcf0B8vpz-ovsvgbMCsUPKKVA13E6aZdJ98bXzIHSHFycfVUSSiblyoorKbpEuT62DFWF0fljAHQ5FGcsvfmyjgIKoIbG172Q1VToYBiRK21qvTecOLQ9pags=w203-h135-k-no'
    ]
  },
  // CHECK: matched via the Vijaya Krishna Towers building in your card photo; Maps calls it the Nanakramguda branch (a separate Gachibowli branch at SNP Towers also exists)
  {
    id: 94,
    name: 'NANOSPACE',
    badge: null,
    rating: null,
    area: 'Gachibowli',
    location: 'Vijaya Krishna Towers, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16653314141068326098',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TW3VsUrkQhVh-AAhn0Mwo3NaxRzZexOTQZ94UPo6NTp67OPu_h2jrI9cdzl1SYRR9Bzs_RO8TtyMN9CRaA0Z1DeZaOmE9GB31iTeFRWp1Gy0-8HgTxbXDvRpAihnV9yoXbfPK0OiQKwdo=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFi24XfhQ4a_05dN0pKHAe1h5Xm7rv1PKijbcnWLX_hMF-ICR3UD_82DHgYXH8ie2wYMa0QR6hzMVuvDzitqS8FK6RdiIP2Lzi4pGL3Tiwoi6WJWDYuYbaedt5cEdsjli9H7s0Nvq8U235=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TpEa9ojGxhwthcZhtybUs1TBYYnqWvLHqV6StMH3_VEIDorxpz8NrGvb5zyVkloA1W-GbxomBMtiu3O1SgGqR5HzL2yS1X_rUkBF0Cepa9BESpXOk8fKbyKPIkHUfQ8Tk19ey1gDOkVIBi=w203-h270-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sj1MiF-UH_SGRLmbVMNkZ_nnM4E5mWNz-9AN4GoLzBNyVgzgQM6burbWRrhbJIlpAjIsWMR5pUWrH2hLAcIbU9eXFGuaBwleXaaO2dQOBm0kw5tI7romXaQ7JKNpZnBXgI_gOga37vVTgw=w203-h270-k-no'
    ]
  },
  // NOT_VERIFIED: no Mozaik coworking listing in Hyderabad on Maps
  {
    id: 95,
    name: 'Mozaik',
    badge: 'Premium',
    rating: 4.8,
    area: 'Banjara Hills',
    location: 'Banjara Hills, Hyderabad',
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  // NOT_VERIFIED: only Maps match is 'FARTECH SOLUTIONS' in Khairtabad — not a coworking listing and has no rating (card shows 4.8)
  {
    id: 96,
    name: 'Fartech Solutions',
    badge: 'Special Offer',
    rating: 4.8,
    area: 'Punjagutta',
    location: 'Punjagutta, Hyderabad',
    price: '₹3,999',
    period: '/ Month',
    priceFormatted: '₹3,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  {
    id: 97,
    name: 'KOCOwork',
    badge: 'Popular',
    rating: 4.9,
    area: 'Champapet',
    location: 'Vaishali Nagar Rd, Vaishali Nagar, Champapet, Hyderabad, Telangana 500079',
    price: '₹499',
    period: '/ day',
    priceFormatted: '₹499 / day',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3504656728705330378',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RFW_kkFRPOtGFBP7JNy38mSK11XjCAI3db7AyREJ1PxbRGSJAVRRbsxYBhQRFrzE3u32WyMXuyKkFBpSGpT6tCqM6z0_yxlXcFL-s7QbS8UvPiW5J7BlNrtrC5okrTmfM4DDEtjJWY1K-_=w203-h142-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R4_d_acS3vWnJHnLNSXIgvYv9QSJkqYXBUtdUrGA00BhS0XDVliTdbbrVPvqlz4gIRHO7bkZgS4dddUWuefHkhBGMKMIK6Hxng0FhG-aOVojkci0ecck7ibYyQXaLaxlA4OUDndGTbPZQ=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QLEqK8vm6ScauCAJlm0o7ujBPoZOBuigEOdi31ial6sHH9FQ-SXTSHyp8b7t47_56WeCpVh6A2Os3qLlNeAkj2FJ0L_1wk15nFwmQYim6vpj8Xxrtj1eDidefp3orVhzWCzXnVkmYxiJE=w203-h269-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TAW27BDBWpR5yyIwXKY_gTAX4nbq-3QIAQdc7zlVEnLXDqqRklKQbw9oWq_Yy_EK4XXShaNql-VTqXnXpll4elWiw6AyDtptMtW_pkpZ8b7MYYgfIWcacviZQ0CcyLdtSpjV0n8u7ouX6J=w203-h270-k-no'
    ]
  },
  {
    id: 98,
    name: 'D\'Desks Coworking Space',
    badge: 'Popular',
    rating: 4.9,
    area: 'Banjara Hills',
    location: '2nd Floor, Hiline Complex, 205, Road No. 12, Sai Enclave, Banjara Hills, Hyderabad, Telangana 500028',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5070646769085642220',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TlnpOBMiT7PBnMLyxfbOdm1dNWXZa9P-TH4PxiWV1BDTBKz1LUhW42Fr9KolYPbFfo0rXmHF0K15wrgctV-czYP930Zv21hHNMqIG6ux6c-PghuWyM1endKuAwbj4ehvxCV6sM=w270-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RakgwBbxv52rxzMoWSZny3IR4kA0WDBFFUiIM4Q6r6EQc30r0ysbqfiF7UYlllhwMq-Y87AdHcJJj4tXgEQQRl5Oljiexf6Q-7PU8KKnVgNFJ9F02sXaTIfJB8-2wZzoXsM7M=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SSGzj_0h9rxkamHl2HycEnEbZOn2bNjvVKD_LkJ8d6upTmDh89RwixW3gnkpUVp4s2-RLEvnIFV1cnp7FTdqxrinCwdJdBAaiRBzH90dEbKcr9e5L0_K2JKXToZy6fat0_xp1eKw=w218-h100-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S1uERtN03qAbPZkl04X3zP4Ful3F8e7aDNsts3P5wAdJWCsZC-hnZt4RLrIc4frOLB6UvdB4S8-_aBGmg3uzZ7Ql-pwDBBBqIB3t8RprrqeHrQQVrjvuzoysPrdWKs7K74X65Y=w203-h304-k-no'
    ]
  },
  {
    id: 99,
    name: 'Cabins 24/7 Coworking Space',
    badge: 'Special Offer',
    rating: 5.0,
    area: 'Kondapur',
    location: 'H. No. 5/497, near Hitec City, Kondapur, Izzathnagar, Hyderabad, Telangana 500084',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18052466833206104584',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qync-a_6XpoBsmD2eZVtbh_2SFbOvjuGFL5tFp5GBUWpmcffo_xYmkGCuShO6WZXeVS_DkhiqdUelKaYdz_X7v0aWnf5rlkB8Zr_yNZ0yneS2HJjK55w-E9XinbRXAuUxUdm3Z=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qa2FMOgjr6kt3-LuJRL4KQUca_R2zyiKLKPIe7ZuvEpJA-W3nWwoLN6jjMfIrGWkiB1LfxPY5B3jqLrbtLDnzWOHKvxVqhzitpzSb8wlY9RjKJgK2oT9sZQ0G2yyZull12ZkuH=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RhTm4WQPDyERcB5DkYF22W9hidI_dK2O6F4FJeCdsD3iAzcExrA-HnqmrkZJo26CtLQN3LUqIPr3wC774cqObxoLL4DtZ1wh_d7m1k81zj2pZJek9A3OBZR7TNLlU6A3GBM5vfJw=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RkpLrfJNOD1rXHyojiXnikQ3j-xJjDLYGp5Y9Fda52_l7uAUSs_U865y0hS4IFMWRj2AQHMdhRP4rIjg6qRjm5oxGOLyr8DowVFuxdXQ4eVnkG4Nx6p5ED660I3HQ5_Id0wIQM=w203-h135-k-no'
    ]
  },
  {
    id: 100,
    name: 'Deskins',
    badge: 'Popular',
    rating: 4.2,
    area: 'Manikonda',
    location: 'Unit No. 201, MS Bright Plaza, Plot No. 22, Manikonda, Shirdi Sai Nagar, Hyderabad, Telangana 500089',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=135231438643396605',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0plvtAa0eLhH-cC9moQXXTmpDXweXwGBrleWiGBDu8E71Wl47-lOFNM386yqPT9jyaGKmThG8Io0yfsh8PSnsO4aaTXCM4hLZqyc53G116ghrbO1DomGKWBs680Hv_MYob2jMKBQo2eto=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QYwQjjyCKZwDPTrZEN2SXhydDPI0L1m_FlFp4Qul02sxdqvWTyPJuh_wfEUqZbaVLm0W9LYBTiBValwU9GdjUmG0xDMV1rqZQkNHQRbidUi5a1WtGgc69FQJUisHCrAn_KKU_CQCNfw3w=w203-h358-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9THohGrSkt7ETQqtRFJDwEBVjWel7HrchRQ9eTXdRMSZ5rKKWyC0DqV1vnL0yZIifLyUql7d6QeZqK8bAAoWyPX_iOgC_INoqZZXN3V2SaOToLkl41s93zvWgIq5zYgRNaFu8z6W8Ys-_Dr=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S5hzBBTlc9gOLzapIAXMsS_9eTrgm0EQz0KL9yrcBKIexktAoL9mXzzm-05zSVkJkSV2vWODudD7xWOxeBDjJ7hAky2HzhuD2TsqAPir92Y9DvPWiRREnglt_K_UmFruG1MMC1aWITH-w=w203-h135-k-no'
    ]
  },
  {
    id: 101,
    name: 'AltF Coworking',
    badge: 'Premium',
    rating: null,
    area: 'Begumpet',
    location: '1-10-176, Begumpet Rd, opp. Hyderabad Public School, Mayur Marg, Begumpet, Hyderabad, Telangana 500016',
    price: '₹11,499',
    period: '/ month',
    priceFormatted: '₹11,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12972904773020985214',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SWOPGlNt7swXoI9ugAY3PQvf9d9IWpea5nLLvsKo-Oj4I-tLgxpODanrJHh_OezGXcopdLjMmBnHel2BTNOJsrD-eUyeCzVRsgB41LUHAoqun_7GEPi6Lj4qEmZe9xPhVChbZLWaDUadzT=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TfdFLslLJPUl_4UNC7fVF39SJIxaLBDLmw3u1AN1AQGva87E_In0wC1zUxsv1G1OWbmTs5df528OG-nPdUxdcOVUZSxMXwxcRwVjeRa0zjkowJ47Xy3aaykHHO4WiK0i_PXBZaXYYQG_7x=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qc99PXPV5wBzGLarFcdYXL6fI4RpvEwP01FYTOfwIMzICn1md4TXanNbYiiZwUHBCVeZpyW5sZEw-H-6NFvht1KhQ-1emXze30uukvzHWiwJrhSwoTIYJHD0iv6eV_7TGbcarK6BKOBalB=w203-h203-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SAhDJGR2FQ8gHR6jfleVkRmpNe24AfQH4wWACJRA7oW1Cbyd01a5Y5n-CeSAMn_9moqA-euNOsEf0M-PmWGGdhNc3QCv8sGqdPoJ-_9t_K6eV1lbFBXxMJV8qZ6IbEGF8ruMG5ilIHYs29=w203-h360-k-no'
    ]
  },
  {
    id: 102,
    name: 'Cokarma',
    badge: 'Premium',
    rating: 4.7,
    area: 'Jubilee Hills',
    location: '3rd Floor, Alcazar Mall, Plot No. 498, Road No. 36, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9399848080319697880',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rgmya6pHlJuQc_Yficq_Sz4CJ-VuOcBq9BPXjyLI8MadoclKS4pYAdAsyBlu8D3zvHDBFzHX95nXZKwbikgh1SRHI5GB2E6jcFYfZ1jBTGOL1vaVOkumBdP03srEXWpFwyA3RJQHL_y8p5=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SGW6OLHQ3YZbonWc4N_ukesxzRuidRaE-zyXu9o12NGnptw325j9gaq-Wylwm7n0vkj4fjLK7bhnJac1Wa59mB24CWYvtQlftb7og1MHo2TVT8aLjBOO-Sgam5Lrwr2hPDzYesNvE65cCo=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R0iO6eAtT__nxVeUjLVYM2KJwZk666WxUh4kk1d3hMTFhu8E11OCwGYOc0NZ7dmh8lh1j-pxaqwTlHBGF10XznbKrXLuV7bEyeNzAgBJO8TtKFTruB3SfRjdjH6fjZTlrN2hkWYHRxiUzi=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tmfej57MRY7lRt9N4TBiXrLeOJq3M-vwdKjzasWL3DIQpXhzs6KeBvZfCfwF86e-aJxf0fNrOzMe1GKxKDgZeILnH60saXJfvBkckj3s1TuF-1NKxrT6tSH5g5mF-TJS56IrWYACr5hlss=w203-h114-k-no'
    ]
  },
  {
    id: 103,
    name: 'Padhukas',
    badge: 'Popular',
    rating: 4.6,
    area: 'Banjara Hills',
    location: '2nd Floor, Reliance Humsafar Building, Road No. 11, Mithila Nagar, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14916063250537021204',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SIBHCvYtRWCExNPKA0cJ3Qoq0yesBrK7hoh115B7ftlwz00ZM1yY1n5kog754s1lLnb008UcyTwvYzUgltQ4AGGQWJ3CyYiH_59J4v67VoY1QuGYGEQVF4_MLxKOwrJj6Nmg7LYs279Bo7=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T3D9GsnObx0T4oVnD4RgPaJBu2CIrtp02F1GCQzAsdZhsA5fBhzoqBAuqS_B33qYrFt2saoqGmBSdYo2-P4ihpc4Du3YPI_LBaqmtmcTs4vXynGwwLuBuGaSEMWhf0RedFh1WQ=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QApg-CHSqyNBlVW1CyBszlJTvV-Bgj_J_rtV0yQ8SjtdRzRqKA9nHIPjal0VzeMICzeEX7qcUKj2cYSH6NkWrN_vSZ_4Gwp8oAXYJ8PGIYeGCvKle3V3ivMpuj3tkF3KaM17Be=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SMpX-9EsPPcvgcPL_WTSkKBZIqahHTga6WEHchOr1GfTtir3fNxBcv8Sh7QokrQHkpytX4kii5UOcYFy65Drxsr-juZ3271NR9-AOia2devkg-Oc1UVsVMIkft2PX0OtSrCT_ysA=w203-h182-k-no'
    ]
  },
  // NOT_VERIFIED: only Maps match is 'TRILAX CONSULTANTS' in Izzathnagar — not a coworking listing, not Madhapur
  {
    id: 104,
    name: 'Trilax',
    badge: 'Special Offer',
    rating: 4.6,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  // NOT_VERIFIED: no Maps listing found for Partime Co-Work
  {
    id: 105,
    name: 'PARTIME CO-WORK',
    badge: 'Special Offer',
    rating: null,
    area: 'Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: []
  },
  // listing has no photos on Maps (only Street View), so images is empty
  {
    id: 106,
    name: 'Innov8 Sri Harsha Icon',
    badge: null,
    rating: null,
    area: 'Financial District',
    location: 'Sri Harsha Icon, Service Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17458006881639416080',
    images: []
  },
  // listing has only 1 photo on Maps
  {
    id: 107,
    name: 'InfySpaces',
    badge: null,
    rating: null,
    area: 'Kukatpally',
    location: '501, 5th Floor, Manjeera Trinity Corporate, beside Lulu Mall, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹599',
    period: '/ hour',
    priceFormatted: '₹599 / hour',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14002340093520977404',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q0GZhzdpJsoUrXaobkFG9y4PCFXNCTCQOe2PHUUSVaqRb20TLQKNytagc64qfHgNvzQkSjIlIIsIGXS8tOKmRTkVMnNgFIMAuHUAYFvYnaiUR7XR-9D8Dlc31WyrfSXDgEt-ugLIUBCCQZ=w203-h270-k-no'
    ]
  },
  // Kondapur branch — separate listing from the Gachibowli branch (id 51)
  {
    id: 108,
    name: 'One Day Coworking Labs',
    badge: 'Premium',
    rating: 4.7,
    area: 'Kondapur',
    location: '3rd Floor, Pranava Business Park, beside Harsha Toyota, Kothaguda, Kondapur, Hyderabad, Telangana 500084',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18143796176827652229',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SbQNLlnu0iBqwBgD2wjWFI4uJitEzPjyNARt2pgoV6up-4LqRkCpgom7tRn6SLmbaw7p09Sp3zzqEH_cEqqVBCNIBpecDYMIM74eMYDoVeUCIRIXUg-BN55RkuUkF9uzI5ffP-_eOp_-cy=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TUrIK3UOfM9GId4G77-sjv_SU1G2r5IdR67Ie1xqq9tMmW01is0zkTXC1XVOMzbCw9z7um7oYNvtBlsTRU5M0Y-imXkilIYDhg0NNRm0umuxidUDUkTE2u_IHAwkvxuRhn38YYHtY1On0=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rsh9DrDlfd64FwycdWcxZ0pVWFH9DECSX7n8TbHNAaaERNTH93jgBcnFPGJKZ8E3b6h14r91CIx78IDKW03LJa4jEWKglF2CTC74vdtPR8dKSJXsbZDRU3jpkVO1MeslCD-3VfcuNONhvF=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6dI8vtK7HAijCXLbjZ6z5T1lH0gfIry0mck8x4qTD1gBFnEMJHq4LxBcF-ao3V79Su0Agqqby0zsEX25URSXqCTZQCnAy178Thw4MWOG9y9-PEPGs7w8n-R9eTLo3t51W-8eQrnaeEtE=w203-h360-k-no'
    ]
  },
  {
    id: 109,
    name: 'Offix',
    badge: 'Popular',
    rating: 5.0,
    area: 'Madhapur',
    location: '12th Floor, H-Tower, Commerzone Rd, Rai Durg, Madhapur, Hyderabad, Telangana 500032',
    price: '₹18,999',
    period: '/ month',
    priceFormatted: '₹18,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11177242034783620874',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RlPCuh49gycNNqf8ETLwSTQdiM1Pk5W9-1uqSQasTlgWD0FZ1MtgABOMcw9O1kolYvrqmoowPdAwDJBMI2nJQiCotYDsgrq5iA4Go11N2FfOl3OHp2_bofPaG710km7ln3zq0hYP_xOzv3=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TzxFk_J_CFx-aBBnGc_W4dTcysffbt9CcbPKlrOTs3H21uKinaVtjU2-YFuAjvqedE-59SJx0ogRPO6nHvwMeutoXol6FscRCxarP6vSF2s7IG3klTILicii4uYcVqOQ2XmVJKZJ1uUyY=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S1larC_cPYluixreEvS3n-oQZ57INFIcr1XXIu-7EwM6CprtBtlksE6pYj_oSx2i4a09fKrtZt-WWnjwdVHZbMYojm0U_koHtr9D8ST1I9vJttqnlBGnzevvqdesJQHz32-dmFTKBDZrQ=w203-h139-k-no'
    ]
  },
  // NOT_VERIFIED: three Quickstart branches in Gachibowli (Eclipse 4.9 / Orion 4.8 / Nebula 4.8); none shows 4.7 — can't tell which
   {
    id: 110,
    name: 'Quickstart Co-Working Space',
    badge: 'Premium',
    rating: 4.7,
    area: 'Gachibowli',
    location: '8th Floor, Vaishnavi\'s Cynosure, 2-48/5/6, Gachibowli Rd, opp. RTTC, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹8,899',
    period: '/ month',
    priceFormatted: '₹8,899 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13253402970017859293',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QpARSQMNnsTZTRRUsZ6FXQhxe3LmhHqcN94e74Kn4S7OxDzhQZv-4aRdmr-OxXt2vcUWOFHZR8QckyZSM68IbQEyYhaR8pxBSuuodAuu7ARi50VwcxeekpMNy8sQ2Xo-3qOpwA=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SVDNsQ8qKSv-TddDP4vU8ErVZQ3uKyJot4CTeqNmAbQBJWjECsC4DXut2TIPRuaY0ZW8j5WxGpPSfhsmbOL6eAhqZ3G8fS8AhZYRc0B-ovxyGP61K7GSB1hdUf18dLBZzv=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TISX1BskgOwWdRaGKkPEs4oC_u6FDy4qfcaSIfR7VfR6vaDLh4mpnbth2_3nFML0j9hSikz8dTgEBb4vXXaS6bV8ZF9CpLTYhaiA5i1cuMfl-ntoFcrqVslPVUuNi7xG4fY4gG=w203-h135-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QsR7bT2Y44q4XjxeX9_uc_stP7gg3a2c7SvuruI29SHaJcZU-I08XleEYy7s2n_HPHp5E4x3Cxq1ksZPJ6zhL2WfSn2For4lBxL9Y9Es309D00rag-3-DsTSyjXw3iKqN7zTsO=w203-h437-k-no'
    ]
  },
  {
    id: 111,
    name: 'AltF',
    badge: 'Premium',
    rating: 4.8,
    area: 'Financial District',
    location: '9th Floor, Kapil Kavuri Hub, Survey 37, Financial District, Nanakramguda, Telangana 500032',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14575195168724923341',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TIPdItYU_32ZO0WcDZTUFxWR55MQKN139FswRyasa4lcySPX2LYtHY7Bkcn3QqVNJYeGFt8c3gdtPIX4mYGQ9fDJNGnnLKTPm-7X4jZkMJaj34P5Wa5-uEqdZ20jtw0eckL1MA9dI2U2lg=w203-h114-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9StpdrzFkKkrhAoh5CzSdSz4yzWYYtql4_dcfJlveEqjqyiwBqPMtubAYq52BqSf3ETK_elwFOGshvdKKyYlCOIE8_8XiF8MwpPENLyqyNYzJIOQh-odgDFfbUR8_vDEjcwrzjgMYcnj1DI=w203-h360-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RPRuWQgXwkGMoAZxMNRpAMMmnfyqxArZyfMBzgOWYrP9IE1Spi4jVWIumMaDpDooocaXa-Y8EbTNRF7Y91UVN41suR_21d9ijCIEoAA-mtlr66PUnSGxCxXuD42-8vUHjWUB7cAgZKTV8T=w203-h152-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_Ga6ofJU4TF5WGHuI0QsCpInK6Tvq5gd_lpsptsYBemKmXTrBDIDhavFUeY2FIA_i-JInHCIdBxKGFIIPnwzzzPljgMZ3G12YXnQaNgdLNX2R2G-BKnAchIw8fv5J3hPCqmIgnL3YHEhN=w203-h152-k-no'
    ]
  }
];


export const SPACES_PER_PAGE = 32;

export const paginationData = {
  totalPages: Math.ceil(hyderabadSpaces.length / SPACES_PER_PAGE),
  initialPage: 1
};

export const allHyderabadOfficeCards = hyderabadSpaces;

export const getHyderabadOfficeCardById = (id) => findOfficeBySlug(allHyderabadOfficeCards, id, "hyderabad");
export const getHyderabadOfficeSlug = (space) => officePath(allHyderabadOfficeCards, space, "hyderabad");

export const hyderabadAreas = hyderabadNeighborhoods;
export const areas = hyderabadNeighborhoods;
export const spaces = hyderabadSpaces;
export default { areas: hyderabadNeighborhoods, spaces: hyderabadSpaces };

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#about-us", label: "Hakkımızda" },
  { href: "#products", label: "Ürünler" },
  { href: "#contact-us", label: "Bize Ulaşın" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Marka" },
  { value: "500+", label: "Mağaza" },
  { value: "250k+", label: "Müşteri" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "5000₺",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "8000₺",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "7000₺",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "7500₺",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Ücretsiz Gönderim",
    subtext: "Ücretsiz kargo hizmetimizle sorunsuz alışverişin tadını çıkarın",
  },
  {
    imgURL: shieldTick,
    label: "Güvenli Ödeme",
    subtext:
      "Güvenli ödeme seçeneklerimizle endişesiz işlemlerin keyfini yaşayın",
  },
  {
    imgURL: support,
    label: "Destek Hattı",
    subtext: "Özverili ekibimiz, her adımda size yardımcı olmak için burada",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Bora Tahsin",
    rating: 4.5,
    feedback:
      "Detaylara verilen özen ve ürünün kalitesi, beklentilerimi aştı. Kesinlikle tavsiye ederim!",
  },
  {
    imgURL: customer2,
    customerName: "Aylin Doğulu",
    rating: 4.7,
    feedback:
      "Ürün, sadece beklentilerimi karşılamakla kalmadı, aynı zamanda onları aştı. Kesinlikle tekrar müşteri olacağım!",
  },
];

export const footerLinks = [
  {
    title: "Ürünlerimiz",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Yardım",
    links: [
      { name: "Hakkımızda", link: "/" },
      { name: "Sıkça Sorulan Sorular", link: "/" },

      { name: "Gizlilik Şartları", link: "/" },
      { name: "Ödeme Güvencesi", link: "/" },
    ],
  },
  {
    title: "İletişime Geçin",
    links: [
      { name: "kadir-ozyurek@outlook.com", link: "mailto:customer@nike.com" },
      { name: "+905318945577", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];

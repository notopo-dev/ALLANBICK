export const BRAND = {
  name: "Allanbick Locações",
  fullName: "Allanbick Locações e Serviços",
  phone: "77 99861-7512",
  phoneRaw: "5577998617512",
  instagram: "https://www.instagram.com/allanbicklocacoes/",
  instagramHandle: "@allanbicklocacoes",
  region: "Barreiras - BA e região",
  logo: "https://res.cloudinary.com/duxxfpukn/image/upload/v1784674366/ChatGPT_Image_21_de_jul._de_2026_19_14_41_bdudcj.png",
  heroVideo: "https://res.cloudinary.com/duxxfpukn/video/upload/v1782429724/Seu_evento_merece_conforto_em_todos_os_detalhes._Nossos_banheiros_de_luxo_oferecem_qualidade_el_l7vbzk.mp4",
  tagline: "Estrutura profissional para seu evento ou obra",
  pillars: ["Qualidade", "Segurança", "Agilidade"],
  producoesSite: "https://allanbickproducoes.com.br/",
  producoesName: "Allanbick Produções",
};

export const waLink = (msg: string) =>
  `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(msg)}`;

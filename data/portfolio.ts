export type PortfolioCategory = "EDITIN" | "KETIKIN" | "ISENG";

export type PortfolioItem = {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  thumbnail: string;
  detailUrl?: string;
  platform: string;
  tags: string[];
  featured: boolean;
  year: number;
};

export const portfolio: PortfolioItem[] = [
  {
    id: "editin-001",
    title: "DESIGN PPT TEMA FILM/VINTAGE",
    category: "EDITIN",
    description:
      "Desain Slide Presentasi dengan pendekatan visual film vintage.",
    thumbnail: "/ppt-film.jpeg",
    detailUrl: "https://canva.link/t60ysbupb8opz0b",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },
  {
    id: "editin-002",
    title: "Poster Event",
    category: "EDITIN",
    description: "Desain poster event dengan pendekatan visual vintage.",
    thumbnail: "/portfolio-poster.png",
    detailUrl: "https://www.canva.com/",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },
  {
    id: "editin-003",
    title: "Poster Event",
    category: "EDITIN",
    description: "Desain poster event dengan pendekatan visual vintage.",
    thumbnail: "/portfolio-poster.png",
    detailUrl: "https://www.canva.com/",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },
  {
    id: "editin-004",
    title: "Poster Event",
    category: "EDITIN",
    description: "Desain poster event dengan pendekatan visual vintage.",
    thumbnail: "/portfolio-poster.png",
    detailUrl: "https://www.canva.com/",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },
  {
    id: "editin-005",
    title: "Poster Event",
    category: "EDITIN",
    description: "Desain poster event dengan pendekatan visual vintage.",
    thumbnail: "/portfolio-poster.png",
    detailUrl: "https://www.canva.com/",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },
  {
    id: "editin-006",
    title: "Poster Event",
    category: "EDITIN",
    description: "Desain poster event dengan pendekatan visual vintage.",
    thumbnail: "/portfolio-poster.png",
    detailUrl: "https://www.canva.com/",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },
  {
    id: "editin-007",
    title: "Poster Event",
    category: "EDITIN",
    description: "Desain poster event dengan pendekatan visual vintage.",
    thumbnail: "/portfolio-poster.png",
    detailUrl: "https://www.canva.com/",
    platform: "Canva",
    tags: ["Poster", "Design"],
    featured: true,
    year: 2026,
  },

  {
    id: "ketikin-001",
    title: "CV ATS",
    category: "KETIKIN",
    description:
      "Membuat dan merapikan CV ATS agar lebih profesional, rapi, dan mudah terbaca oleh sistem rekrutmen.",
    thumbnail: "/cvatswayfind.png",
    detailUrl: "https://canva.link/51iowqpr0bcj417",
    platform: "Canva/Word/Docs",
    tags: ["Typing", "Document"],
    featured: true,
    year: 2026,
  },
  {
    id: "ketikin-002",
    title: "BIKININ ARTIKEL",
    category: "KETIKIN",
    description:
      "Mengetik dan merapikan artikel agar lebih rapi, nyaman dibaca, dan siap dipublikasikan.",
    thumbnail: "/ARTIKEL.png",
    detailUrl:
      "https://docs.google.com/document/d/1ix1W8U1l1ImWsVwo_7RI1VOrFwsGyEf_HqEt2dB4_50/edit?usp=sharing",
    platform: "Word/Docs",
    tags: ["Typing", "Document"],
    featured: true,
    year: 2026,
  },
  {
    id: "ketikin-003",
    title: "Rapiin Dokumen",
    category: "KETIKIN",
    description: "Ketik ulang dan formatting dokumen supaya lebih enak dibaca.",
    thumbnail: "/portfolio-docs.png",
    detailUrl: "https://drive.google.com/",
    platform: "Google Drive",
    tags: ["Typing", "Document"],
    featured: true,
    year: 2026,
  },
  {
    id: "ketikin-004",
    title: "Rapiin Dokumen",
    category: "KETIKIN",
    description: "Ketik ulang dan formatting dokumen supaya lebih enak dibaca.",
    thumbnail: "/portfolio-docs.png",
    detailUrl: "https://drive.google.com/",
    platform: "Google Drive",
    tags: ["Typing", "Document"],
    featured: true,
    year: 2026,
  },
  {
    id: "ketikin-005",
    title: "Rapiin Dokumen",
    category: "KETIKIN",
    description: "Ketik ulang dan formatting dokumen supaya lebih enak dibaca.",
    thumbnail: "/portfolio-docs.png",
    detailUrl: "https://drive.google.com/",
    platform: "Google Drive",
    tags: ["Typing", "Document"],
    featured: true,
    year: 2026,
  },

  {
    id: "iseng-001",
    title: "Eksperimen Bentuk",
    category: "ISENG",
    description: "Eksperimen visual kecil yang lahir dari rasa penasaran.",
    thumbnail: "/portfolio-experiment.png",
    detailUrl: "https://www.behance.net/",
    platform: "Behance",
    tags: ["Visual", "Eksperimen"],
    featured: false,
    year: 2026,
  },
  {
    id: "iseng-002",
    title: "Eksperimen Bentuk",
    category: "ISENG",
    description: "Eksperimen visual kecil yang lahir dari rasa penasaran.",
    thumbnail: "/portfolio-experiment.png",
    detailUrl: "https://www.behance.net/",
    platform: "Behance",
    tags: ["Visual", "Eksperimen"],
    featured: false,
    year: 2026,
  },
  {
    id: "iseng-003",
    title: "Eksperimen Bentuk",
    category: "ISENG",
    description: "Eksperimen visual kecil yang lahir dari rasa penasaran.",
    thumbnail: "/portfolio-experiment.png",
    detailUrl: "https://www.behance.net/",
    platform: "Behance",
    tags: ["Visual", "Eksperimen"],
    featured: false,
    year: 2026,
  },
  {
    id: "iseng-004",
    title: "Eksperimen Bentuk",
    category: "ISENG",
    description: "Eksperimen visual kecil yang lahir dari rasa penasaran.",
    thumbnail: "/portfolio-experiment.png",
    detailUrl: "https://www.behance.net/",
    platform: "Behance",
    tags: ["Visual", "Eksperimen"],
    featured: false,
    year: 2026,
  },
  {
    id: "iseng-005",
    title: "Eksperimen Bentuk",
    category: "ISENG",
    description: "Eksperimen visual kecil yang lahir dari rasa penasaran.",
    thumbnail: "/portfolio-experiment.png",
    detailUrl: "https://www.behance.net/",
    platform: "Behance",
    tags: ["Visual", "Eksperimen"],
    featured: false,
    year: 2026,
  },
  {
    id: "iseng-006",
    title: "Eksperimen Bentuk",
    category: "ISENG",
    description: "Eksperimen visual kecil yang lahir dari rasa penasaran.",
    thumbnail: "/portfolio-experiment.png",
    detailUrl: "https://www.behance.net/",
    platform: "Behance",
    tags: ["Visual", "Eksperimen"],
    featured: false,
    year: 2026,
  },
];

export const portfolioCategories = [
  "SEMUA",
  "EDITIN",
  "KETIKIN",
  "ISENG",
] as const;

export const services = [
  {
    number: "01",
    title: "KETIKIN",
    description: "Dari PDF berantakan sampai makalah siap kirim.",
    examples: "Ketik ulang · PPT · DOCS · PDF · Artikel",
    price: "Mulai Rp1.500/halaman",
  },
  {
    number: "02",
    title: "EDITIN",
    description: "Bikin file, foto, dan video kamu tampil lebih niat.",
    examples: "Background foto · Video · ID card · Photobooth",
    price: "Mulai Rp2.500",
  },
  {
    number: "03",
    title: "NGE-DESIGN",
    description: "Visual yang terasa kamu banget, bukan template biasa.",
    examples: "Poster · Banner · Feed · Story · PPT",
    price: "Mulai Rp5.000",
  },
  {
    number: "04",
    title: "BIKININ",
    description: "CV, surat lamaran, atau soal yang siap dipakai.",
    examples: "CV ATS · CV kreatif · Soal SD–SMA",
    price: "Mulai Rp1.000/soal",
  },
  {
    number: "05",
    title: "CUSTOM",
    description: "Punya kebutuhan yang belum ada di daftar? Ceritain aja.",
    examples: "Excel · Joki · Commissioned work · Lainnya",
    price: "Diskusi dulu",
  },
];

export const priceGroups = [
  {
    label: "KETIKIN",
    items: [
      ["Ketik ulang", "Rp2.000/halaman"],
      ["Ketik PPT, DOCS, PDF", "Rp1.500/halaman"],
      ["Ketik artikel / makalah", "Rp2.500/halaman"],
      ["Custom jasa ketik", "Harga disesuaikan"],
    ],
  },
  {
    label: "BIKININ CV",
    items: [
      ["CV ATS / Kreatif", "Rp12.000/halaman"],
      ["1 halaman + surat lamaran", "Rp20.000"],
      ["2 halaman + surat lamaran", "Rp22.000"],
    ],
  },
  {
    label: "EDITIN",
    items: [
      ["Edit background foto", "Rp2.500/foto"],
      ["Edit video", "Rp18.000/menit"],
      ["Custom edit video", "Harga disesuaikan"],
    ],
  },
  {
    label: "NGE-DESIGN",
    items: [
      ["Poster", "Rp12.000/design"],
      ["Banner", "Rp15.000/design"],
      ["Instagram Feed / Story", "Rp10.000/design"],
      ["PPT", "Rp5.000/slide"],
      ["Jadwal / Pricelist", "Rp5.000/design"],
    ],
  },
];

export const faqs = [
  [
    "Bisa request di luar daftar layanan?",
    "Bisa banget. Justru ceritain dulu kebutuhanmu, nanti kita cari jalan yang paling pas.",
  ],
  [
    "Cara ordernya gimana?",
    "Kirim brief lewat WhatsApp, sertakan file referensi kalau ada, lalu kita diskusikan harga dan deadline.",
  ],
  [
    "Bisa request urgent?",
    "BisAAAA, selama slotnya masih tersedia. Pilih opsi deadline yang sesuai dengan kebutuhan kamu yaa!",
  ],
  [
    "File dikirim lewat mana?",
    "Bisa lewat WhatsApp, Google Drive, atau G From yang kita berikan nanti yaa.",
  ],
] as const;

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  message: string;
  service: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-001",
    name: "Alya",
    role: "Pelajar",
    message:
      "Awalnya cuma butuh rapihin PPT, ternyata hasilnya jauh lebih niat dari yang gue bayangin. Tinggal kasih brief, langsung dibantu.",
    service: "EDITIN",
  },
  {
    id: "testimonial-002",
    name: "Raka",
    role: "Mahasiswa",
    message:
      "Fast response dan hasilnya rapi. Gue tinggal kirim bahan, nggak perlu jelasin terlalu ribet. Cocok banget buat yang lagi kejar deadline.",
    service: "KETIKIN",
  },
  {
    id: "testimonial-003",
    name: "Naya",
    role: "Pelajar",
    message:
      "Request gue agak custom tapi MinWay masih mau diskusiin sampai ketemu cara yang paling pas. Hasil akhirnya juga sesuai ekspektasi.",
    service: "CUSTOM",
  },
  {
    id: "testimonial-004",
    name: "Dinda",
    role: "Mahasiswa",
    message:
      "Ngebantu banget pas tugas lagi numpuk. Hasilnya rapi, komunikasinya enak, dan prosesnya juga nggak ribet.",
    service: "KETIKIN",
  },
  {
    id: "testimonial-005",
    name: "Fajar",
    role: "Pelajar",
    message:
      "Desain PPT-nya jadi lebih menarik dan enak dilihat. Tinggal kirim materi, terus dibantu sampai tampilannya sesuai yang gue mau.",
    service: "EDITIN",
  },
  {
    id: "testimonial-006",
    name: "Salsa",
    role: "Mahasiswa",
    message:
      "Suka karena bisa diskusi dulu soal kebutuhan dan konsepnya. Hasil akhirnya lebih terarah dan sesuai brief yang gue kasih.",
    service: "CUSTOM",
  },
];

export const whatsappUrl = "https://wa.me/6285111352277";

export const createWhatsappLink = (message: string) =>
  `${whatsappUrl}?text=${encodeURIComponent(message)}`;

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

export const whatsappUrl = "https://wa.me/6285111352277";

export const createWhatsappLink = (message: string) =>
  `${whatsappUrl}?text=${encodeURIComponent(message)}`;

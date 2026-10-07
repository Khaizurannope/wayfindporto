"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import {
  createWhatsappLink,
  faqs,
  portfolio,
  portfolioCategories,
  priceGroups,
  services,
  testimonials,
} from "@/data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Logo() {
  return (
    <a href="#top" className="font-serif text-2xl font-bold tracking-[-0.08em]">
      WAYFINDX<span className="text-coral">+</span>
    </a>
  );
}
function Button({
  children,
  href = "#pesan",
  dark = false,
}: {
  children: React.ReactNode;
  href?: string;
  dark?: boolean;
}) {
  return (
    <a
      href={href}
      style={dark ? { color: "#f4ead8" } : undefined}
      className={`inline-flex items-center justify-center gap-2 border px-5 py-3 text-[11px] font-bold tracking-[0.14em] transition hover:-translate-y-0.5 ${dark ? "border-ink bg-ink hover:bg-coral" : "border-ink/25 bg-transparent hover:bg-coral hover:text-cream hover:border-coral"}`}
    >
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-8 text-[11px] font-bold tracking-[0.16em] lg:flex">
          <a href="#karya">KARYA</a>
          <a href="#layanan">LAYANAN</a>
          <a href="#harga">PRICELIST</a>
          <a href="#pesan">CARA PESAN</a>
          <a href="#testimonial">TESTIMONIAL</a>
        </nav>
        <div className="hidden lg:block">
          <Button href="#pesan" dark>
            ORDER SEKARANG
          </Button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-ink/10 bg-cream px-5 py-6 text-sm font-bold">
          <a href="#karya" onClick={() => setOpen(false)}>
            KARYA
          </a>
          <a href="#layanan" onClick={() => setOpen(false)}>
            LAYANAN
          </a>
          <a href="#harga" onClick={() => setOpen(false)}>
            PRICELIST
          </a>
          <a href="#pesan" onClick={() => setOpen(false)}>
            CARA PESAN
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28">
        <motion.div initial="hidden" animate="show" variants={reveal}>
          <p className="mb-6 text-xs font-bold tracking-[0.24em] text-coral">
            JASA EDITIN DAN KETIKIN ALA GEN Z
          </p>
          <h1 className="max-w-3xl font-serif text-[clamp(3.7rem,8vw,8rem)] font-bold leading-[.84] tracking-[-0.075em]">
            Whatever you&apos;re trying to{" "}
            <em className="font-normal text-coral">get done,</em> we&apos;ll
            help you find a way!
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-ink/65">
            Mulai dari ketik, desain, editing, sampai kebutuhan digital lainnya.
            Tinggal ceritain apa yang kamu butuhkan, kita bantu cari jalannya.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#karya" dark>
              KEPOIN KARYA KITA
            </Button>
            <Button href="#pesan">ORDER SEKARANG</Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[530px]"
        >
          <div className="absolute -right-3 top-4 z-10 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-coral p-4 text-center text-[10px] font-bold leading-3 tracking-wider text-cream">
            BISA
            <br />
            DICARI
            <br />
            JALANNYA
          </div>
          <div className="relative aspect-[.84] overflow-hidden border-[10px] border-ink bg-maroon shadow-[16px_16px_0_#d95d45]">
            <Image
              src="/hero-editorial.png"
              alt="Kolase alat kreatif bergaya vintage"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-4 bg-cream px-5 py-3 font-serif text-lg italic shadow-[5px_5px_0_#261b17]">
            kerjain bareng, yuk.
          </div>
        </motion.div>
      </div>
      <div className="border-y border-ink bg-coral py-3 text-center text-[10px] font-bold tracking-[.3em] text-cream">
        KETIK · EDIT · DESIGN · CV · DOKUMEN · CUSTOM
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="bg-maroon px-5 py-24 text-cream lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-5xl font-serif text-[clamp(3rem,8vw,8rem)] font-bold leading-[.88] tracking-[-.07em]">
          APA PUN YANG MAU <span className="text-coral">DISELESAIKAN,</span>
          <br />
          KITA CARI JALANNYA.
        </h2>
      </div>
    </section>
  );
}

function Portfolio() {
  const [filter, setFilter] =
    useState<(typeof portfolioCategories)[number]>("SEMUA");

  const items =
    filter === "SEMUA"
      ? portfolio
      : portfolio.filter((item) => item.category === filter);

  return (
    <section id="karya" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
      <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.25em] text-coral">
            01 / SELECTED WORKS
          </p>

          <h2 className="font-serif text-6xl font-bold tracking-[-.07em]">
            KEPOIN KARYA
            <br />
            <em className="font-normal">KITA DULU!</em>
          </h2>
        </div>

        <p className="max-w-xs text-sm leading-6 text-ink/60">
          Beberapa hal yang pernah kami bantu kerjakan. Klik untuk lihat
          detailnya.
        </p>
      </div>

      <div className="mb-9 flex flex-wrap gap-2">
        {portfolioCategories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`border px-4 py-2 text-[10px] font-bold tracking-[.18em] transition ${
              filter === category
                ? "border-coral bg-coral text-cream"
                : "border-ink/20 hover:border-coral"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.a
              layout
              key={item.id}
              href={item.detailUrl || undefined}
              target={item.detailUrl ? "_blank" : undefined}
              rel={item.detailUrl ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden border border-ink/15 bg-beige"
            >
              <div className="relative aspect-[1.6]">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-maroon/0 transition group-hover:bg-maroon/60" />

                <div className="absolute inset-x-5 bottom-5 translate-y-3 text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] font-bold tracking-[.2em] text-coral">
                    {item.category} · {item.platform}
                  </p>

                  <h3 className="mt-1 font-serif text-3xl">{item.title}</h3>

                  <span className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold tracking-widest">
                    {item.detailUrl ? "LIHAT KARYA" : "DETAIL SEGERA"}
                    {item.detailUrl && <ArrowUpRight size={13} />}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <span className="font-serif text-lg">{item.title}</span>

                <span className="text-[10px] font-bold tracking-widest text-ink/45">
                  {item.year}
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section id="layanan" className="bg-beige px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-bold tracking-[.25em] text-coral">
          02 / YANG BISA KAMI BANTU
        </p>
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="font-serif text-6xl font-bold tracking-[-.07em]">
            LU BUTUH
            <br />
            <em className="font-normal">APA?</em>
          </h2>
          <p className="max-w-sm text-sm leading-6 text-ink/60">
            Nggak harus sudah tahu namanya apa. Ceritakan saja hasil akhir yang
            kamu mau.
          </p>
        </div>
        <div className="border-t border-ink/20">
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setActive(index)}
              className={`grid w-full grid-cols-[45px_1fr_24px] items-center gap-4 border-b border-ink/20 py-5 text-left transition md:grid-cols-[70px_1fr_1.2fr_100px_24px] ${active === index ? "text-coral" : "hover:text-coral"}`}
            >
              <span className="font-serif text-2xl">{service.number}</span>
              <span className="font-serif text-3xl font-bold tracking-[-.04em]">
                {service.title}
              </span>
              <span className="hidden text-sm leading-6 text-ink/60 md:block">
                {service.description}
                <br />
                <span className="text-xs">{service.examples}</span>
              </span>
              <span className="hidden text-xs font-bold md:block">
                {service.price}
              </span>
              <ChevronDown
                size={18}
                className={`transition ${active === index ? "rotate-180" : ""}`}
              />
              {active === index && (
                <span className="col-span-3 pt-2 text-sm leading-6 text-ink/60 md:hidden">
                  {service.description}
                  <br />
                  <span className="text-xs">
                    {service.examples} · {service.price}
                  </span>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [active, setActive] = useState(0);
  return (
    <section id="harga" className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.25em] text-coral">
            03 / BUKAN RAHASIA
          </p>
          <h2 className="font-serif text-6xl font-bold tracking-[-.07em]">
            PRICE
            <br />
            <em className="font-normal">LIST</em>
          </h2>
          <p className="mt-8 max-w-xs text-sm leading-6 text-ink/60">
            Harga awal untuk membantu kamu punya gambaran. Brief dulu, baru kami
            kasih angka paling pas.
          </p>
          <div className="mt-8 border-l-2 border-coral pl-4 text-xs leading-5 text-ink/60">
            Harga dapat berubah tergantung tingkat kesulitan dan kebutuhan
            pengerjaan. Bisa didiskusikan terlebih dahulu.
          </div>
        </div>
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {priceGroups.map((group, i) => (
              <button
                key={group.label}
                onClick={() => setActive(i)}
                className={`px-3 py-2 text-[10px] font-bold tracking-widest ${active === i ? "bg-ink text-cream" : "border border-ink/20"}`}
              >
                {group.label}
              </button>
            ))}
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-t border-ink"
          >
            {priceGroups[active].items.map(([name, price]) => (
              <div
                key={name}
                className="flex items-baseline justify-between gap-5 border-b border-ink/15 py-5"
              >
                <span className="font-serif text-xl">{name}</span>
                <span className="text-right text-sm font-bold text-coral">
                  {price}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OrderGuide() {
  const [speed, setSpeed] = useState("NORMAL");
  const options = [
    ["NORMAL", "Tidak ada biaya tambahan.", ""],
    ["EXPRESS", "+Rp3.000 dari total.", ""],
    ["URGENT", "+Rp5.000 dari total.", ""],
  ];
  return (
    <section id="pesan" className="bg-ink px-5 py-24 text-cream lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[.25em] text-coral">
              04 / LET&apos;S MAKE IT HAPPEN
            </p>
            <h2 className="font-serif text-6xl font-bold leading-[.9] tracking-[-.07em]">
              MAU
              <br />
              <em className="font-normal text-coral">SECEPAT</em>
              <br />
              APA?
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-6 text-cream/55">
              Untuk kebutuhan super urgent saat antrean urgent ditutup, biaya
              tambahan akan disesuaikan dengan tingkat kesulitan.
            </p>
          </div>
          <div>
            <div className="mb-12 grid gap-3 md:grid-cols-3">
              {options.map(([name, desc]) => (
                <button
                  key={name}
                  onClick={() => setSpeed(name)}
                  className={`border p-5 text-left transition ${speed === name ? "border-coral bg-coral text-cream" : "border-cream/20 hover:border-coral"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl">{name}</span>
                    {speed === name && <Check size={17} />}
                  </div>
                  <p className="mt-7 text-xs text-cream/60">{desc}</p>
                </button>
              ))}
            </div>
            <div className="grid gap-6 border-t border-cream/20 pt-7 md:grid-cols-3">
              <div>
                <span className="font-serif text-4xl text-coral">01</span>
                <p className="mt-3 text-sm font-bold">Ceritain kebutuhan</p>
                <p className="mt-1 text-xs text-cream/50">
                  Kirim brief dan file lewat WhatsApp.
                </p>
              </div>
              <div>
                <span className="font-serif text-4xl text-coral">02</span>
                <p className="mt-3 text-sm font-bold">Dapatkan estimasi</p>
                <p className="mt-1 text-xs text-cream/50">
                  Kita sepakati harga dan deadline.
                </p>
              </div>
              <div>
                <span className="font-serif text-4xl text-coral">03</span>
                <p className="mt-3 text-sm font-bold">Berangkat</p>
                <p className="mt-1 text-xs text-cream/50">
                  Kami kerjakan, kamu tinggal tunggu.
                </p>
              </div>
            </div>
            <div className="mt-9">
              <Button
                href={createWhatsappLink(
                  `Halo MinWayy, saya mau order dengan deadline ${speed}.`,
                )}
                dark
              >
                CHAT VIA WHATSAPP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const sliderTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-beige px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[.25em] text-coral">
              05 / KATA MEREKA
            </p>

            <h2 className="font-serif text-6xl font-bold leading-[.9] tracking-[-.07em]">
              BUKAN CUMA
              <br />
              <em className="font-normal">KATA KITA.</em>
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-ink/60">
            Sedikit cerita dari mereka yang pernah ngerjain sesuatu bareng
            WAYFINDX+.
          </p>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-5"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {sliderTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.id}-${index}`}
                className="flex min-h-[310px] w-[calc(100vw-40px)] shrink-0 flex-col justify-between border border-ink/15 bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-coral sm:w-[340px] lg:w-[380px]"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-serif text-3xl text-coral">“</span>

                    <span className="border border-ink/15 px-3 py-1 text-[9px] font-bold tracking-[.18em]">
                      {testimonial.service}
                    </span>
                  </div>

                  <p className="font-serif text-xl leading-7 tracking-[-.02em]">
                    {testimonial.message}
                  </p>
                </div>

                <div className="mt-10 flex items-end justify-between border-t border-ink/15 pt-4">
                  <div>
                    <p className="text-sm font-bold">{testimonial.name}</p>

                    <p className="mt-1 text-[10px] uppercase tracking-[.15em] text-ink/45">
                      {testimonial.role}
                    </p>
                  </div>

                  <span className="font-serif text-4xl text-coral">”</span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 

function FAQ() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="mb-4 text-xs font-bold tracking-[.25em] text-coral">
            06 / MASIH PENASARAN?
          </p>
          <h2 className="font-serif text-6xl font-bold tracking-[-.07em]">
            FREQUENTLY
            <br />
            <em className="font-normal">ASKED</em>
          </h2>
        </div>
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-t border-ink/20">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left font-serif text-xl"
              >
                {q}
                <ChevronDown
                  size={18}
                  className={`transition ${active === i ? "rotate-180 text-coral" : ""}`}
                />
              </button>
              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pb-5 text-sm leading-6 text-ink/60"
                  >
                    {a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WayfindxSite() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Statement />
      <Portfolio />
      <Services />
      <Pricing />
      <OrderGuide />
      <Testimonials />
      <FAQ />
      <section className="bg-coral px-5 py-24 text-center text-cream lg:px-10">
        <p className="mb-5 text-xs font-bold tracking-[.25em]">
          YOUR NEXT PROJECT STARTS HERE
        </p>
        <h2 className="mx-auto max-w-4xl font-serif text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[.86] tracking-[-.08em]">
          Whatever you&apos;re trying to get done,{" "}
          <em className="font-normal">we&apos;ll find a way.</em>
        </h2>
        <div className="mt-9">
          <Button
            href={createWhatsappLink(
              "Halo MinWay, aku mau diskusi dongg terkait project yang mau aku order.",
            )}
            dark
          >
            NGOBROL SEKARANG
          </Button>
        </div>
      </section>
      <footer className="bg-ink px-5 py-8 text-cream lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row md:items-center">
          <Logo />
          <p className="text-xs text-cream/45">
            © 2026 WAYFINDX+. JASA JOKI ALA GEN Z.
          </p>
          <a
            href={createWhatsappLink(
              "Halo MinWayy! Mau tanya-tanya dulu boleh?",
            )}
            className="text-xs font-bold tracking-widest text-coral"
          >
            WHATSAPP ↗
          </a>
        </div>
      </footer>
    </main>
  );
}

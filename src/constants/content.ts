/**
 * BBA - Belajar Bisnis Apotek
 * File ini berisi semua materi teks yang ada di website.
 * Anda dapat mengedit file ini untuk memperbarui isi website tanpa harus menyentuh kode program.
 */

export const siteContent = {
  branding: {
    name: "BELAJAR BISNIS APOTEK",
    logoAlt: "Logo Belajar Bisnis Apotek",
    // User harus mengunggah file logo dengan nama logo.png di folder public atau src
    logoUrl: "https://i.ibb.co.com/mF5TyRSW/Gemini-Generated-Image-r7rqi4r7rqi4r7rq.png", // Fallback placeholder
  },
  
  home: {
    hero: {
      eyebrow: "Solusi Terintegrasi Dunia Farmasi",
      slides: [
        {
          title: "BBA Berkomitmen Memajukan Indonesia Melalui Apotek Mandiri",
          description: "Melalui berbagai pendampingan, BBA berkontribusi pada pembangunan ekonomi kesehatan masyarakat dengan meningkatkan standar pelayanan apotek profesional yang berkelanjutan.",
          image: "https://images.unsplash.com/photo-1579152276503-34e840a6b107?q=80&w=1920&auto=format&fit=crop"
        },
        {
          title: "Membangun Ekosistem Bisnis Apotek Terintegrasi dari Hulu ke Hilir",
          description: "Dengan visi menjadi pelopor edukasi industri farmasi Indonesia, BBA menghadirkan sistemasi terpadu yang berdampak nyata bagi profitabilitas dan keberlanjutan owner apotek di seluruh pelosok negeri.",
          image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1920&auto=format&fit=crop"
        },
        {
          title: "Belajar Bisnis Apotek (BBA)",
          description: "Kami berkomitmen menghadirkan edukasi bisnis apotek berkualitas tinggi yang aman, efektif, dan terjangkau untuk seluruh owner apotek, sekaligus menjadi katalisator dalam pengembangan sistem operasional apotek modern di Indonesia.",
          image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
        }
      ],
      ctaPrimary: "Konsultasi Gratis",
      ctaSecondary: "Lihat Hasil Audit",
    },
    
    apaItuBBA: {
      title: "APA ITU BELAJAR BISNIS APOTEK?",
      content: "Belajar Bisnis Apotek (BBA) adalah platform edukasi khusus bagi calon pemilik dan pemilik apotek yang ingin membangun bisnis farmasi yang sistematis, sehat, dan menguntungkan. Kami menggabungkan keahlian manajemen retail dengan etika pelayanan farmasi untuk menciptakan apotek yang mampu berjalan secara otomatis (autopilot) namun tetap profesional.",
    },
    
    tentangKami: {
      title: "TENTANG KAMI",
      content: "Kami percaya bahwa kesuksesan bukan hanya soal angka, tapi soal sistem yang kokoh dan integritas yang tak tergoyahkan. BBA hadir untuk memberikan kepastian langkah bagi Anda yang siap berproses. Bisnis apotek adalah pengabdian yang harus dijalankan dengan profesionalisme tinggi. Kami tidak sekadar memberikan teori, tapi kami berbagi kegagalan dan keberhasilan nyata agar Anda bisa melompat lebih tinggi.",
    },
    
    testimonials: [
      {
        name: "Ibu Rahma",
        role: "Owner Apotek di Bandung",
        content: "Sangat bersyukur ketemu BBA. Dulu apotek saya stuck, stok berantakan. Setelah ikut dampingan, omzet naik 40% dalam 3 bulan!",
        avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=150&h=150&auto=format&fit=crop"
      },
      {
        name: "Pak Budi",
        role: "Calon Owner Apotek",
        content: "BBA membimbing saya dari nol. Dari survey lokasi sampai izin keluar semua dibantu. Sangat membantu yang tidak punya background farmasi.",
        avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=150&h=150&auto=format&fit=crop"
      },
      {
        name: "Apoteker Siska",
        role: "Owner Apotek di Jogja",
        content: "Ilmu sistemasi apoteknya luar biasa. Sekarang saya bisa lebih fokus ke pengembangan karena operasional sudah tersistem dengan baik.",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
      }
    ]
  },
  
  layanan: {
    title: "LAYANAN KAMI",
    items: [
      {
        id: "01",
        slug: "pendirian-apotek-baru",
        title: "Pendirian Apotek Baru",
        description: "Panduan legalitas komprehensif, desain layout fungsional, strategi pengadaan stok awal, hingga rekrutmen SDM yang kompeten.",
        fullDescription: "Membangun apotek dari titik nol membutuhkan ketelitian dalam setiap langkah. Kami membantu Anda menavigasi proses perizinan, memilih lokasi yang strategis melalui data trafik, hingga merancang tata letak (layout) apotek yang memenuhi standar APA (Apoteker Pengelola Apotek) dan menarik bagi pelanggan.",
        visualization: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop",
        steps: [
          "Survey Lokasi & Analisis Kompetitor",
          "Pengurusan Izin & Sertifikasi",
          "Grand Design & Instalasi Farmasi",
          "Rekrutmen & Pelatihan Tim"
        ]
      },
      {
        id: "02",
        slug: "audit-optimasi-omzet",
        title: "Audit & Optimasi Omzet",
        description: "Mendiagnosa akar masalah stagnansi bisnis Anda dan menerapkan strategi pertumbuhan penjualan yang terukur serta berkelanjutan.",
        fullDescription: "Banyak apotek yang ramai namun tidak menghasilkan profit yang sehat. Layanan audit kami membedah struktur biaya, margin produk, hingga efisiensi kerja tim. Kami memberikan rekomendasi berbasis data untuk meningkatkan omzet tanpa harus membakar uang pemasaran.",
        visualization: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
        steps: [
          "Audit Keuangan & Margin Produk",
          "Analisis Performa SDM",
          "Strategi Marketing Localized",
          "Evaluasi Harian & Mingguan"
        ]
      },
      {
        id: "03",
        slug: "sistemasi-operasional",
        title: "Sistemasi Operasional",
        description: "Pembuatan SOP profesional, implementasi sistem IT terkini, dan pelatihan manajemen stok untuk efisiensi maksimal.",
        fullDescription: "Apotek yang sukses adalah apotek yang bisa berjalan tanpa harus ada owner di dalamnya 24 jam. Kami membantu menyusun Standar Operasional Prosedur (SOP) yang ketat namun fleksibel, mengintegrasikan sistem Kasir & IT yang handal, serta mengelola stok agar tidak ada modal yang 'mati'.",
        visualization: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200",
        steps: [
          "Penyusunan SOP Pelayanan & Gudang",
          "Integrasi Software Apotek Modern",
          "Manajemen Stok & Expired Date",
          "Digitalisasi Laporan Keuangan"
        ]
      }
    ],
    additionalItems: [
      {
        title: "Bootcamp Buka Bisnis Apotek untuk Pemula",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Jasa Pencatatan Keuangan Bisnis Apotek",
        image: "https://images.unsplash.com/photo-1454165833767-027e69272332?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Jenderal Bisnis Apotek Kelas Purchasing dan Inventory",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Jenderal Bisnis Apotek Kelas HRD",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Jenderal Bisnis Apotek Kelas Keuangan",
        image: "https://images.unsplash.com/photo-1554224155-1d1d52988955?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Jenderal Bisnis Apotek Kelas Marketing",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Jenderal Bisnis Apotek Kelas Apoteker Pengelola Apotek/Leader/Supervisor",
        image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Jenderal Bisnis Apotek Kelas Manager Operasional Apotek",
        image: "https://images.unsplash.com/photo-1454165833767-027e69272332?q=80&w=600&auto=format&fit=crop",
        stats: "118+",
        trusted: true,
        verified: true
      },
      {
        title: "Set Up Bisnis Apotek (Perizinan, Sdm, Inventory, Brand Sampai Grand Opening)",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop",
        stats: "20+",
        trusted: true,
        verified: true
      },
      {
        title: "Webinar Buka Apotek Langsung Laris (Online)",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=600&auto=format&fit=crop",
        stats: "Online",
        trusted: true,
        verified: true
      },
      {
        title: "Pendampingan Jago Jualan (Online)",
        image: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&auto=format&fit=crop",
        stats: "Online",
        trusted: true,
        verified: true
      },
      {
        title: "Setahun Melek Keuangan (SMK) (Online)",
        image: "https://images.unsplash.com/photo-1554224155-8d04cbd22606?q=80&w=600&auto=format&fit=crop",
        stats: "Online",
        trusted: true,
        verified: true
      },
      {
        title: "Software Gampang Apotek",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
        stats: "Software",
        trusted: true,
        verified: true
      },
      {
        title: "Private Coaching",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
        stats: "Verified",
        trusted: true,
        verified: true
      },
      {
        title: "Investor Club Pebisnis Apotek",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=600&auto=format&fit=crop",
        stats: "Trusted",
        trusted: true,
        verified: true
      },
      {
        title: "Sekolah Owner Bisnis Apotek (SOBA)",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
        stats: "SOBA",
        trusted: true,
        verified: true
      },
      {
        title: "Bisnis Audit Apotek",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
        stats: "Audit",
        trusted: true,
        verified: true
      },
      {
        title: "Workshop Autopilot Bisnis Apotek",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
        stats: "Workshop",
        trusted: true,
        verified: true
      },
      {
        title: "Buku Understanding Keuangan Apotek",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
        stats: "Buku",
        trusted: true,
        verified: true
      },
      {
        title: "31 Kegalagalan Pebisnis Apotek Going Corporate",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=600&auto=format&fit=crop",
        stats: "Buku",
        trusted: true,
        verified: true
      },
      {
        title: "Buku Whatsapp Marketing Apotek",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
        stats: "Buku",
        trusted: true,
        verified: true
      },
      {
        title: "Buku Autopilot Bisnis Apotek",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=600&auto=format&fit=crop",
        stats: "Buku",
        trusted: true,
        verified: true
      },
      {
        title: "Buku Kitab HRD",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=600&auto=format&fit=crop",
        stats: "Buku",
        trusted: true,
        verified: true
      }
    ]
  },
  
  artikel: {
    highlights: [
      {
        slug: "analisis-margin-kenapa-apotek-ramai-tapi-rugi",
        title: "Analisis Margin: Kenapa Apotek Ramai Tapi Rugi?",
        excerpt: "Banyak owner terjebak pada angka penjualan, padahal margin yang sehat adalah kunci utama keberlanjutan bisnis.",
        content: `
# Analisis Margin: Kenapa Apotek Ramai Tapi Rugi?

Banyak pemilik apotek merasa bangga ketika melihat antrean pelanggan yang panjang dan laporan penjualan harian yang tinggi. Namun, seringkali di akhir bulan, saat melakukan perhitungan arus kas, mereka mendapati bahwa saldo bank tidak menunjukkan keuntungan yang sebanding dengan kesibukan yang ada. Kenapa ini bisa terjadi?

## 1. Kesalahan Penentuan Margin (Pricing Error)
Seringkali apotek menetapkan harga hanya berdasarkan "harga pasar" tanpa menghitung Break Even Point (BEP). Jika biaya operasional Anda lebih tinggi dari rata-rata pasar, namun Anda menjual dengan harga yang sama, margin kotor Anda tidak akan cukup menutupi biaya tetap.

## 2. Kebocoran Stok (Inventory Leakage)
Stok yang tidak tercatat, barang kedaluwarsa yang tidak terkelola, hingga kehilangan barang adalah "silent killer" bagi keuntungan. Meskipun penjualan ramai, jika HPP (Harga Pokok Penjualan) Anda membengkak karena stok yang hilang, profit Anda akan tergerus.

## 3. Mix Produk yang Buruk
Jika apotek Anda hanya ramai menjual produk-produk bermargin tipis (seperti susu atau produk promo) sementara produk bermargin tinggi jarang terjual, maka volume kerja tim akan tinggi namun profitabilitas akan tetap rendah.

## Kesimpulan
Ramai bukan berarti untung. Manajemen harus mulai beralih dari sekadar mengejar 'Omzet' menjadi mengejar 'Gross Profit' dan 'Net Profit' yang sehat. Di BBA, kami membantu Anda membedah struktur keuangan ini agar setiap tetes keringat tim berbuah profit yang nyata.
        `,
        date: "15 April 2026",
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200"
      }
    ]
  },
  
  kontak: {
    address: "Jl. Bisnis Apotek No. 123, Yogyakarta, Indonesia",
    phone: "+62 878-2674-9023",
    email: "bisnis@indahmedikaindonesia.co.id",
    whatsapp: "6287826749023",
    consultationLink: "https://wa.me/6287826749023"
  },

  ekosistem: {
    hero: {
      eyebrow: "Holistic Learning Journey",
      title: "Lebih dari Sekadar Kelas, Sebuah Sistem Belajar Terpadu.",
      description: "Belajar Bisnis Apotek (BBA) bukan dibangun sebagai kursus singkat yang selesai dalam semalam. Kami menciptakan ekosistem di mana pertumbuhan bisnis Anda didampingi secara bertahap, berulang, dan saling terhubung dengan realitas lapangan.",
    },
    why: {
      title: "MENGAPA HARUS EKOSISTEM?",
      content: "Masalah bisnis apotek tidak pernah datang sendirian, dan tidak akan selesai hanya dengan sekali belajar. Seiring bisnis tumbuh, tantangannya pun berevolusi. Apotek yang baru beroperasi membutuhkan alat ukur yang berbeda dengan apotek yang sedang melakukan ekspansi. Itulah mengapa BBA hadir sebagai satu kerangka berpikir yang utuh bagi setiap fase perjalanan Anda.",
    },
    layers: [
      {
        title: "SEKOLAH & KELAS INTI",
        subtitle: "Fondasi & Mindset Strategis",
        description: "Dirancang untuk membangun logika bisnis yang benar. Di sini Anda belajar membangun mindset owner, memahami anatomi profit, dan menyusun urutan strategi yang presisi agar pondasi bisnis Anda tidak goyah.",
        examples: ["Sekolah Owner Bisnis Apotek", "Kelas Buka Apotek dari Nol", "Kelas Keuangan Owner"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "PENDAMPINGAN BISNIS",
        subtitle: "Eksekusi & Transformasi Nyata",
        description: "Kami mendampingi Anda langsung di garis depan. Mulai dari membenahi apotek yang stagnan, mengawal proses pembukaan cabang baru, hingga menjadi mitra diskusi dalam pengambilan keputusan krusial. Anda tidak lagi berjalan sendirian.",
        examples: ["Konsultasi Privat", "Dampingan Operasional", "Audit Lapangan"],
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "PRAKTIK & KEGIATAN LAPANGAN",
        subtitle: "Pembuktian Teori di Lapangan",
        description: "Bisnis adalah soal aksi, bukan sekadar narasi. Melalui Bootcamp, Mastermind, hingga Investor Forum, kami membawa Anda melihat langsung bagaimana sistem BBA diimplementasikan pada apotek-apotek percontohan kami.",
        examples: ["BBA Bootcamp", "Mastermind Financial", "Setup & Grand Opening", "Investor Forum"],
        image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "KOMUNITAS OWNER APOTEK",
        subtitle: "Support System & Networking",
        description: "Bisnis akan terasa sangat melelahkan jika dijalani secara terisolasi. Bergabunglah dengan ribuan owner apotek lainnya untuk saling berbagi pengalaman, belajar dari kesalahan orang lain, dan membangun kolaborasi strategis.",
        examples: ["Wadah Diskusi Owner", "Resource Sharing", "Exclusive Gathering"],
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    disclaimer: {
      title: "EKOSISTEM INI BUKAN UNTUK SEMUA ORANG",
      content: "BBA bukan tempat mencari jalan pintas atau 'trik cepat' yang instan. Ekosistem ini dikhususkan bagi owner yang memiliki integritas, siap berproses secara serius, dan memiliki keberanian untuk membenahi sistem bisnis secara fundamental. Jika Anda mencari hasil tanpa proses atau alergi terhadap keteraturan sistem, tempat ini mungkin bukan untuk Anda. Ini adalah soal kesiapan mental untuk naik kelas.",
    }
  }
};


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
      headline: "Ubah Potensi Apotek Jadi Profit Nyata.",
      description: "BBA membantu Anda membangun apotek dari nol hingga optimalisasi omzet bagi apotek yang stagnan. Kami hadir sebagai ahli di persimpangan Bisnis & Kesehatan.",
      ctaPrimary: "Konsultasi Gratis",
      ctaSecondary: "Lihat Hasil Audit",
    },
    
    apaItuBBA: {
      title: "APA ITU BELAJAR BISNIS APOTEK?",
      content: "Belajar Bisnis Apotek (BBA) adalah platform edukasi khusus bagi calon pemilik dan pemilik apotek yang ingin membangun bisnis farmasi yang sistematis, sehat, dan menguntungkan. Kami menggabungkan keahlian manajemen retail dengan etika pelayanan farmasi untuk menciptakan apotek yang mampu berjalan secara otomatis (autopilot) namun tetap profesional.",
    },
    
    tentangKami: {
      title: "TENTANG KAMI",
      content: "Kami adalah tim profesional yang berdedikasi untuk memajukan industri farmasi di Indonesia melalui edukasi manajemen bisnis yang tepat. BBA lahir dari keresahan akan banyaknya apotek yang memiliki pelayanan teknis yang baik namun lemah secara manajemen bisnis, sehingga sulit berkembang. Dengan metodologi yang telah teruji pada ratusan klien, kami berkomitmen menjadi pendamping setia bagi perjalanan sukses bisnis apotek Anda.",
    },
    
    testimonials: [
      {
        name: "Ibu Rahma",
        role: "Owner Apotek di Bandung",
        content: "Sangat bersyukur ketemu BBA. Dulu apotek saya stuck, stok berantakan. Setelah ikut dampingan, omzet naik 40% dalam 3 bulan!",
        avatar: "https://i.pravatar.cc/150?u=rahma"
      },
      {
        name: "Pak Budi",
        role: "Calon Owner Apotek",
        content: "BBA membimbing saya dari nol. Dari survey lokasi sampai izin keluar semua dibantu. Sangat membantu yang tidak punya background farmasi.",
        avatar: "https://i.pravatar.cc/150?u=budi"
      },
      {
        name: "Apoteker Siska",
        role: "Owner Apotek di Jogja",
        content: "Ilmu sistemasi apoteknya luar biasa. Sekarang saya bisa lebih fokus ke pengembangan karena operasional sudah tersistem dengan baik.",
        avatar: "https://i.pravatar.cc/150?u=siska"
      }
    ]
  },
  
  layanan: {
    title: "LAYANAN KAMI",
    items: [
      {
        id: "01",
        title: "Pendirian Apotek Baru",
        description: "Panduan legalitas komprehensif, desain layout fungsional, strategi pengadaan stok awal, hingga rekrutmen SDM yang kompeten."
      },
      {
        id: "02",
        title: "Audit & Optimasi Omzet",
        description: "Mendiagnosa akar masalah stagnansi bisnis Anda dan menerapkan strategi pertumbuhan penjualan yang terukur serta berkelanjutan."
      },
      {
        id: "03",
        title: "Sistemasi Operasional",
        description: "Pembuatan SOP profesional, implementasi sistem IT terkini, dan pelatihan manajemen stok untuk efisiensi maksimal."
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
        img: "https://picsum.photos/seed/analysis/800/500"
      }
    ]
  },
  
  kontak: {
    address: "Jl. Bisnis Apotek No. 123, Yogyakarta, Indonesia",
    phone: "+62 812-XXXX-XXXX",
    email: "info@bisnis-apotek.com",
    consultationLink: "https://wa.me/62812XXXXXXXX"
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
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "PENDAMPINGAN BISNIS",
        subtitle: "Eksekusi & Transformasi Nyata",
        description: "Kami mendampingi Anda langsung di garis depan. Mulai dari membenahi apotek yang stagnan, mengawal proses pembukaan cabang baru, hingga menjadi mitra diskusi dalam pengambilan keputusan krusial. Anda tidak lagi berjalan sendirian.",
        examples: ["Konsultasi Privat", "Dampingan Operasional", "Audit Lapangan"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "PRAKTIK & KEGIATAN LAPANGAN",
        subtitle: "Pembuktian Teori di Lapangan",
        description: "Bisnis adalah soal aksi, bukan sekadar narasi. Melalui Bootcamp, Mastermind, hingga Investor Forum, kami membawa Anda melihat langsung bagaimana sistem BBA diimplementasikan pada apotek-apotek percontohan kami.",
        examples: ["BBA Bootcamp", "Mastermind Financial", "Setup & Grand Opening", "Investor Forum"],
        image: "https://images.unsplash.com/photo-1587810633474-06c641611005?q=80&w=1200&auto=format&fit=crop"
      },
      {
        title: "KOMUNITAS OWNER APOTEK",
        subtitle: "Support System & Networking",
        description: "Bisnis akan terasa sangat melelahkan jika dijalani secara terisolasi. Bergabunglah dengan ribuan owner apotek lainnya untuk saling berbagi pengalaman, belajar dari kesalahan orang lain, dan membangun kolaborasi strategis.",
        examples: ["Wadah Diskusi Owner", "Resource Sharing", "Exclusive Gathering"],
        image: "https://images.unsplash.com/photo-1528605248644-14dd04cb21c7?q=80&w=1200&auto=format&fit=crop"
      }
    ],
    disclaimer: {
      title: "EKOSISTEM INI BUKAN UNTUK SEMUA ORANG",
      content: "BBA bukan tempat mencari jalan pintas atau 'trik cepat' yang instan. Ekosistem ini dikhususkan bagi owner yang memiliki integritas, siap berproses secara serius, dan memiliki keberanian untuk membenahi sistem bisnis secara fundamental. Jika Anda mencari hasil tanpa proses atau alergi terhadap keteraturan sistem, tempat ini mungkin bukan untuk Anda. Ini adalah soal kesiapan mental untuk naik kelas.",
    }
  }
};


const WHATSAPP_NUMBER = "6283870786588"; 

const menuDataNested = {
  // KATEGORI 1: HIDANGAN UTAMA
  "Hidangan Utama": [
    {
      id: "tongseng_nasi",
      nama: "Tongseng + Nasi",
      harga: "Rp 35.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Tongseng + Nasi akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: ["img/menu/tongseng.jpg", "img/menu/tongsen2.jpg"], 
      wa_message: "Halo, saya mau pesan Tongseng + Nasi."
    },
    {
      id: "tengkleng_nasi",
      nama: "Tengkleng + Nasi",
      harga: "Rp 35.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Tengkleng + Nasi akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: ["img/menu/tengkleng.jpg", "img/menu/tengkleng2.jpg"],
      wa_message: "Halo, saya mau pesan Tengkleng + Nasi."
    },
    {
      id: "ayam_cabe_hijau_nasi",
      nama: "Ayam Cabe Hijau + Nasi",
      harga: "Rp 25.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Ayam Cabe Hijau + Nasi akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Ayam Cabe Hijau + Nasi."
    },
    {
      id: "ayam_cabe_merah_nasi",
      nama: "Ayam Cabe Merah + Nasi",
      harga: "Rp 25.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Ayam Cabe Merah + Nasi akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Ayam Cabe Merah + Nasi."
    },
    {
      id: "ikan_bakar_goreng_nasi",
      nama: "Ikan Bakar / Goreng + Nasi",
      harga: "Rp 25.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Ikan Bakar / Goreng + Nasi akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Ikan Bakar / Goreng + Nasi."
    }
  ],
  
  // KATEGORI 2: NASI & MIE SPESIAL
  "Nasi & Mie Spesial": [
    {
      id: "nasgor_hijau",
      nama: "Nasi Goreng Hijau",
      harga: "Rp 20.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Nasi Goreng Hijau akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Nasi Goreng Hijau."
    },
    {
      id: "nasgor_pedas",
      nama: "Nasi Goreng Pedas",
      harga: "Rp 20.000",
      stok: "kosong",
      deskripsi: "Deskripsi untuk Nasi Goreng Pedas akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Nasi Goreng Pedas."
    },
    {
      id: "nasgor_spesial",
      nama: "Nasi Goreng Spesial",
      harga: "Rp 25.000",
      stok: "kosong",
      deskripsi: "Deskripsi untuk Nasi Goreng Spesial akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Nasi Goreng Spesial."
    },
    {
      id: "nasgor_seafood",
      nama: "Nasi Goreng Seafood",
      harga: "Rp 25.000",
      stok: "kosong",
      deskripsi: "Deskripsi untuk Nasi Goreng Seafood akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Nasi Goreng Seafood."
    },
    {
      id: "nasgor_merah",
      nama: "Nasi Goreng Merah",
      harga: "Rp 20.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Nasi Goreng Merah akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Nasi Goreng Merah."
    },
    {
      id: "mie_goreng",
      nama: "Mie Goreng",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Mie Goreng akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Mie Goreng."
    },
    {
      id: "pop_mie",
      nama: "Pop Mie",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Pop Mie akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Pop Mie."
    },
    {
      id: "mie_soto",
      nama: "Mie Soto",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Mie Soto akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Mie Soto."
    },
    {
      id: "mie_goreng_telor",
      nama: "Mie Goreng + Telor",
      harga: "Rp 15.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Mie Goreng + Telor akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Mie Goreng + Telor."
    }
  ],
  
  // KATEGORI 3: CAMILAN & SNACK
  "Camilan & Snack": [
    {
      id: "tahu_cadar_pedas",
      nama: "Tahu Cadar Pedas",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Tahu Cadar Pedas akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Tahu Cadar Pedas."
    },
    {
      id: "cireng_rujak",
      nama: "Cireng Rujak",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Cireng Rujak akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Cireng Rujak."
    },
    {
      id: "cireng_pedas",
      nama: "Cireng Pedas",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Cireng Pedas akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Cireng Pedas."
    },
    {
      id: "otak_otak_pedas",
      nama: "Otak-Otak Pedas",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Otak-Otak Pedas akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Otak-Otak Pedas."
    },
    {
      id: "kentang_goreng",
      nama: "Kentang Goreng (Friend Fres)",
      harga: "Rp 10.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Kentang Goreng akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Kentang Goreng (Friend Fres)."
    },
    {
      id: "sosis_kentang",
      nama: "Sosis Kentang",
      harga: "Rp 20.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Sosis Kentang akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: ["images/sostang.jpg"],
      wa_message: "Halo, saya mau pesan Sosis Kentang."
    },
    {
      id: "sosis_goreng",
      nama: "Sosis Goreng",
      harga: "Rp 15.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Sosis Goreng akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Sosis Goreng."
    },
    {
      id: "sosis_bakar",
      nama: "Sosis Bakar",
      harga: "Rp 15.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Sosis Bakar akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Sosis Bakar."
    },
    {
      id: "telor_ceplok",
      nama: "Telor Ceplok",
      harga: "Rp 7.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Telor Ceplok akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Telor Ceplok."
    },
    {
      id: "telor_dadar",
      nama: "Telor Dadar",
      harga: "Rp 7.000",
      stok: "kosong",
      deskripsi: "Deskripsi untuk Telor Dadar akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Telor Dadar."
    },
    {
      id: "Daun-sampe",
      nama: "Daun Shampe",
      harga: "Rp 1.999.000",
      stok: "kosong",
      deskripsi: "sayur yang langsung di petik dari kebun pak wahyu",
      foto: ["img/menu/sayur.png"],
      wa_message: "Halo, saya mau pesan Telor Dadar."
    }
    ],
  
  // KATEGORI 4: MINUMAN
  "Minuman": [
    {
      id: "aqua",
      nama: "Aqua",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Aqua akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Aqua."
    },
    {
      id: "kopi_susu",
      nama: "Kopi Susu",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Kopi Susu akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: ["img/menu-minuman/kopi.png"],
      wa_message: "Halo, saya mau pesan Kopi Susu."
    },
    {
      id: "kopi_hitam",
      nama: "Kopi Hitam",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Kopi Hitam akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Kopi Hitam."
    },
    {
      id: "teh_tawar",
      nama: "Teh Tawar",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Teh Tawar akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Teh Tawar."
    },
    {
      id: "teh_manis_dingin",
      nama: "Teh Manis Dingin",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Teh Manis Dingin akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Teh Manis Dingin."
    },
    {
      id: "teh_manis_panas",
      nama: "Teh Manis Panas",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Teh Manis Panas akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Teh Manis Panas."
    },
    {
      id: "jus_strawberry",
      nama: "Jus Strawberry",
      harga: "Rp 12.000",
      stok: "kosong",
      deskripsi: "Deskripsi untuk Jus Strawberry akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Jus Strawberry."
    },
    {
      id: "jus_mangga",
      nama: "Jus Mangga",
      harga: "Rp 12.000",
      stok: "kosong",
      deskripsi: "Deskripsi untuk Jus Mangga akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Jus Mangga."
    },
    {
      id: "dancow",
      nama: "Dancow",
      harga: "Rp 8.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Dancow akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Dancow."
    },
    {
      id: "indomilk",
      nama: "Indomilk",
      harga: "Rp 6.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Indomilk akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Indomilk."
    },
    {
      id: "susu_jahe",
      nama: "Susu Jahe",
      harga: "Rp 8.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Susu Jahe akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Susu Jahe."
    },
    {
      id: "bandrek",
      nama: "Bandrek",
      harga: "Rp 8.000",
      stok: "tersedia",
      deskripsi: "Deskripsi untuk Bandrek akan segera hadir. Silakan tanyakan pada kami untuk info lebih lanjut.",
      foto: [],
      wa_message: "Halo, saya mau pesan Bandrek."
    }
  ]
};
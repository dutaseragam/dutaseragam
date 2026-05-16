<template>
    <div>
        <!-- ===== PAGE HERO ===== -->
        <Pagehero title="Souvenir Power Bank Custom"
            description="Power bank custom cetak logo untuk souvenir promosi, event, dan hadiah korporat. Tersedia pilihan metal, plastik, dan card dengan berbagai teknik cetak berkualitas tinggi."
            badge-text="Layanan Kami" badge-icon="bi-battery-charging" breadcrumb-current="Power Bank" />

        <!-- ===== INTRO SECTION ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                            Tentang Power Bank Custom
                        </span>
                        <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                            Solusi Pengisi Daya Sekaligus Media Promosi
                        </h2>
                        <p class="text-secondary lh-lg mb-4">
                            Souvenir power bank berfungsi sebagai pengisi daya gadget saat berada di luar dan jauh dari
                            sumber listrik. Power bank dapat dianalogikan sebagai baterai cadangan — cukup colokkan
                            kabel seperti charger biasa, tanpa perlu mencopot baterai handphone.
                        </p>
                        <p class="text-secondary lh-lg mb-4">
                            Lama penggunaan bergantung pada kapasitas power bank. Sebagai contoh, power bank 6.000 mAh
                            dapat mengisi baterai 1.500 mAh hingga empat kali charge — menjadikannya souvenir yang
                            benar-benar bermanfaat dan selalu diingat penerimanya.
                        </p>
                        <a href="https://wa.me/6281234567890" target="_blank"
                            class="btn btn-primary fw-bold px-4 mt-2 d-inline-flex align-items-center gap-2">
                            <i class="bi bi-whatsapp"></i>Konsultasi Gratis
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div v-for="unggulan in keunggulanSingkat" :key="unggulan.label" class="col-6">
                                <div class="rounded-4 border p-3 h-100 d-flex align-items-start gap-3 keunggulan-card">
                                    <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary flex-shrink-0"
                                        style="width:42px;height:42px;font-size:1.1rem;">
                                        <i :class="'bi ' + unggulan.icon"></i>
                                    </div>
                                    <div>
                                        <div class="fw-semibold" style="color:#1f2937; font-size:0.9rem;">
                                            {{ unggulan.label }}
                                        </div>
                                        <div class="text-secondary" style="font-size:0.8rem;">{{ unggulan.desc }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== JENIS POWER BANK ===== -->
        <section class="py-5" style="background:#f8f9fa;">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Pilihan Produk
                    </span>
                    <h2 class="fw-bold" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Macam-Macam Power Bank Custom
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:540px;">
                        Tersedia tiga jenis power bank custom yang bisa disesuaikan dengan kebutuhan dan kesan yang
                        ingin ditampilkan.
                    </p>
                </div>
                <div class="row g-4 justify-content-center">
                    <div v-for="(item, i) in jenisPowerBank" :key="item.nama" class="col-md-6 col-lg-4">
                        <div class="bg-white rounded-4 p-4 h-100 shadow-sm border border-1 product-card">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary flex-shrink-0"
                                    style="width:48px;height:48px;font-size:1.3rem;">
                                    <i :class="'bi ' + item.icon"></i>
                                </div>
                                <div>
                                    <span class="text-secondary fw-semibold"
                                        style="font-size:0.72rem; letter-spacing:0.05em; text-transform:uppercase;">Tipe
                                        {{ i + 1 }}</span>
                                    <h5 class="fw-bold mb-0" style="color:#0f1729;">{{ item.nama }}</h5>
                                </div>
                            </div>
                            <p class="text-secondary lh-lg mb-3" style="font-size:0.92rem;">{{ item.deskripsi }}</p>
                            <div class="mb-3">
                                <div class="text-uppercase fw-semibold text-secondary mb-2"
                                    style="font-size:0.72rem; letter-spacing:0.05em;">Kapasitas Tersedia</div>
                                <div class="d-flex flex-wrap gap-2">
                                    <span v-for="kap in item.kapasitas" :key="kap"
                                        class="badge rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-1"
                                        style="font-size:0.75rem;">
                                        {{ kap }}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div class="text-uppercase fw-semibold text-secondary mb-2"
                                    style="font-size:0.72rem; letter-spacing:0.05em;">Teknik Cetak</div>
                                <div class="d-flex flex-wrap gap-2">
                                    <span v-for="tek in item.teknik" :key="tek"
                                        class="badge rounded-pill fw-semibold px-3 py-1"
                                        style="font-size:0.75rem; background:rgba(245,158,11,0.12); color:#d97706;">
                                        {{ tek }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== BRAND & KATALOG ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Pilihan Brand
                    </span>
                    <h2 class="fw-bold" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Produk Branded & Non Branded
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:540px;">
                        Tersedia pilihan power bank non branded maupun branded dari merek ternama yang sudah terjamin
                        kualitasnya.
                    </p>
                </div>
                <div class="row g-4">
                    <div v-for="brand in brandList" :key="brand.nama" class="col-md-6 col-lg-3">
                        <div class="rounded-4 p-4 h-100 text-center brand-card border"
                            style="background:#f8f9fa;">
                            <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                :style="{ background: brand.color + '18', color: brand.color, width: '60px', height: '60px', fontSize: '1.5rem' }">
                                <i :class="'bi ' + brand.icon"></i>
                            </div>
                            <h5 class="fw-bold mb-2" style="color:#0f1729;">{{ brand.nama }}</h5>
                            <p class="text-secondary mb-3" style="font-size:0.85rem;">{{ brand.desc }}</p>
                            <div class="d-flex flex-column gap-1">
                                <span v-for="produk in brand.produk" :key="produk"
                                    class="text-secondary d-flex align-items-center gap-2"
                                    style="font-size:0.85rem;">
                                    <i class="bi bi-check-circle-fill text-success" style="font-size:0.75rem;"></i>
                                    {{ produk }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== TEKNIK PRINTING ===== -->
        <section class="py-5" style="background:#f8f9fa;">
            <div class="container py-4">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                            Teknik Cetak
                        </span>
                        <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                            Macam-Macam Teknik Printing Power Bank Custom
                        </h2>
                        <p class="text-secondary lh-lg">
                            Pilihan teknik cetak yang tepat akan menentukan kualitas dan kesan logo perusahaan Anda pada
                            power bank. Setiap teknik memiliki keunggulan tersendiri sesuai jenis bahan dan kebutuhan
                            desain.
                        </p>
                    </div>
                    <div class="col-lg-7">
                        <div class="d-flex flex-column gap-3">
                            <div v-for="teknik in teknikPrinting" :key="teknik.nama"
                                class="d-flex align-items-start gap-3 p-4 rounded-4 border teknik-card bg-white">
                                <div class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                    style="width:46px;height:46px;font-size:1.2rem;background:rgba(245,158,11,0.1);color:#d97706;">
                                    <i :class="'bi ' + teknik.icon"></i>
                                </div>
                                <div>
                                    <div class="d-flex align-items-center gap-2 mb-1">
                                        <h6 class="fw-bold mb-0" style="color:#0f1729;">{{ teknik.nama }}</h6>
                                        <span class="badge rounded-pill fw-semibold px-2 py-1"
                                            style="font-size:0.7rem; background:#e0f2fe; color:#0369a1;">
                                            {{ teknik.media }}
                                        </span>
                                    </div>
                                    <p class="text-secondary mb-0" style="font-size:0.9rem;">{{ teknik.deskripsi }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== KELEBIHAN ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Keunggulan
                    </span>
                    <h2 class="fw-bold" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Kelebihan Bikin Power Bank Custom di Kami
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:540px;">
                        Kami berkomitmen memberikan produk dan layanan terbaik untuk setiap pesanan power bank custom
                        Anda.
                    </p>
                </div>
                <div class="row g-4">
                    <div v-for="item in kelebihanKami" :key="item.judul" class="col-md-6 col-lg-4">
                        <div class="rounded-4 p-4 h-100 shadow-sm border kelebihan-card bg-white">
                            <div class="d-flex align-items-center gap-3 mb-3">
                                <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary flex-shrink-0"
                                    style="width:44px;height:44px;font-size:1.1rem;">
                                    <i :class="'bi ' + item.icon"></i>
                                </div>
                                <h6 class="fw-bold mb-0" style="color:#0f1729;">{{ item.judul }}</h6>
                            </div>
                            <p class="text-secondary mb-0" style="font-size:0.9rem; line-height:1.7;">
                                {{ item.deskripsi }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== KONTAK MARKETING ===== -->
        <section class="py-5" style="background:#f8f9fa;">
            <div class="container py-4">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                            Hubungi Kami
                        </span>
                        <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                            Pemesanan Power Bank Custom
                        </h2>
                        <p class="text-secondary lh-lg mb-4">
                            Berminat memesan power bank custom untuk kebutuhan promosi atau souvenir Anda? Langsung
                            hubungi tim marketing kami untuk mendapatkan penawaran harga terbaik dan konsultasi desain
                            gratis.
                        </p>
                        <div class="d-flex flex-column gap-3">
                            <div v-for="info in kontakInfo" :key="info.label"
                                class="d-flex align-items-start gap-3">
                                <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary flex-shrink-0"
                                    style="width:44px;height:44px;font-size:1.1rem;">
                                    <i :class="'bi ' + info.icon"></i>
                                </div>
                                <div>
                                    <div class="text-uppercase fw-semibold text-secondary"
                                        style="font-size:0.72rem; letter-spacing:0.05em;">{{ info.label }}</div>
                                    <div class="fw-semibold" style="color:#1f2937; font-size:0.95rem;">{{ info.value }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://wa.me/6281234567890" target="_blank"
                            class="btn btn-primary fw-bold px-4 mt-4 d-inline-flex align-items-center gap-2">
                            <i class="bi bi-whatsapp"></i>Hubungi Kami Sekarang
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <div class="bg-white rounded-4 p-4 shadow-sm border">
                            <h6 class="fw-bold mb-4" style="color:#0f1729;">Garansi Produk</h6>
                            <div class="d-flex flex-column gap-3">
                                <div v-for="garansi in garansiList" :key="garansi.brand"
                                    class="d-flex align-items-center justify-content-between p-3 rounded-3"
                                    style="background:#f8f9fa;">
                                    <div class="d-flex align-items-center gap-2">
                                        <i class="bi bi-shield-fill-check text-success"></i>
                                        <span class="fw-semibold" style="color:#1f2937; font-size:0.9rem;">{{
                                            garansi.brand }}</span>
                                    </div>
                                    <span class="badge rounded-pill fw-semibold px-3 py-1"
                                        style="background:rgba(22,163,74,0.12); color:#16a34a; font-size:0.78rem;">
                                        {{ garansi.durasi }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const keunggulanSingkat = [
    { icon: 'bi-battery-full',     label: 'Real Capacity',      desc: 'Kapasitas baterai sebenarnya' },
    { icon: 'bi-palette-fill',     label: 'Cetak Logo',         desc: 'Full color, resolusi tinggi' },
    { icon: 'bi-lightning-charge', label: 'Produksi Cepat',     desc: '1–7 hari pengerjaan' },
    { icon: 'bi-shield-check',     label: 'Bergaransi',         desc: 'Garansi hingga 2 tahun' },
]

const jenisPowerBank = [
    {
        nama: 'Power Bank Metal',
        icon: 'bi-hexagon-fill',
        deskripsi: 'Terbuat dari high grade aluminum sehingga terlihat high class dan elegan. Cocok untuk souvenir korporat premium yang berkesan.',
        kapasitas: ['5.000 mAh', '8.000 mAh', '10.000 mAh'],
        teknik: ['Laser Engraving', 'Digital Printing', 'Sablon'],
    },
    {
        nama: 'Power Bank Plastik',
        icon: 'bi-square-fill',
        deskripsi: 'Terbuat dari bahan plastik ABS yang kokoh. Proses digital printing menghasilkan warna yang tajam dan sempurna untuk logo penuh warna.',
        kapasitas: ['5.000 mAh', '8.000 mAh', '10.000 mAh'],
        teknik: ['Digital Printing', 'Sablon'],
    },
    {
        nama: 'Power Bank Card',
        icon: 'bi-credit-card-fill',
        deskripsi: 'Desain kompak seukuran kartu kredit dari bahan plastik ABS. Dapat dicetak dua sisi (depan & belakang) dengan hasil full color yang elegan.',
        kapasitas: ['2.000 mAh', '5.000 mAh'],
        teknik: ['Digital Printing 2 Sisi'],
    },
]

const brandList = [
    {
        nama: 'Non Branded',
        icon: 'bi-box-seam',
        color: '#6366f1',
        desc: 'Pilihan ekonomis dengan berbagai tipe dan kapasitas.',
        produk: ['P42PL16', 'P50AL06', 'P60LT02', 'P80AL13', 'P100PL22', '+ lebih banyak'],
    },
    {
        nama: 'Xiaomi',
        icon: 'bi-phone-fill',
        color: '#ef4444',
        desc: 'Brand global terpercaya dengan kualitas premium.',
        produk: ['5.000 mAh', '10.000 mAh', '20.000 mAh'],
    },
    {
        nama: 'VIVAN',
        icon: 'bi-battery-charging',
        color: '#0ea5e9',
        desc: 'Pilihan brand lokal berkualitas dengan garansi resmi.',
        produk: ['M8 – 8.000 mAh', 'B5 – 5.200 mAh', 'C5 – 5.000 mAh', 'M10 – 10.200 mAh'],
    },
    {
        nama: 'DeLCELL',
        icon: 'bi-lightning-fill',
        color: '#f59e0b',
        desc: 'Garansi terlama hingga 24 bulan untuk ketenangan pikiran.',
        produk: ['MARS 10.000 mAh', 'PLUTO', 'ECO 10.000 mAh'],
    },
]

const teknikPrinting = [
    {
        nama: 'Digital Printing – Plastik',
        icon: 'bi-printer-fill',
        media: 'Plastik',
        deskripsi: 'Cetak logo ke power bank plastik menggunakan mesin digital. Pengerjaan cepat, warna lebih tajam dibanding sablon, dan mampu mencetak warna gradasi tanpa batas.',
    },
    {
        nama: 'Digital Printing – Metal',
        icon: 'bi-printer',
        media: 'Metal',
        deskripsi: 'Metode digital printing pada power bank metal menghasilkan ketajaman warna yang sama dengan plastik. Sedikit lebih lama prosesnya namun hasil tetap luar biasa.',
    },
    {
        nama: 'Laser Engraving – Metal',
        icon: 'bi-stars',
        media: 'Metal',
        deskripsi: 'Menembakkan laser intensitas tinggi ke permukaan metal. Hasilnya rapi, detail, tidak mudah hilang, dan sangat cocok untuk kesan simple dan elegan.',
    },
    {
        nama: 'Laser Engraving – Non Metal',
        icon: 'bi-lightbulb-fill',
        media: 'Non Metal',
        deskripsi: 'Laser engraving pada produk non metal menghasilkan efek unik — logo muncul dengan LED yang menyala saat power bank digunakan.',
    },
    {
        nama: 'Silk Screen (Sablon)',
        icon: 'bi-brush-fill',
        media: 'Semua Bahan',
        deskripsi: 'Teknik paling populer dengan biaya terjangkau dan pengerjaan cepat. Sangat cocok untuk logo dengan warna terbatas (3–4 warna) yang sederhana dan tegas.',
    },
]

const kelebihanKami = [
    {
        icon: 'bi-battery-full',
        judul: 'Real Capacity',
        deskripsi: 'Kami hanya menggunakan power bank dengan cell baterai berkualitas tinggi yang memiliki kapasitas sesuai spesifikasi yang tertera — tidak ada pengurangan.',
    },
    {
        icon: 'bi-image-fill',
        judul: 'Kualitas Cetak Terbaik',
        deskripsi: 'Kualitas cetak beresolusi tinggi, gambar awet dan tahan lama. Dijamin tidak luntur meski digunakan setiap hari.',
    },
    {
        icon: 'bi-speedometer2',
        judul: 'Kapasitas Produksi Besar',
        deskripsi: 'Kapasitas produksi puluhan ribu unit per bulan. Waktu produksi 1–7 hari, menyesuaikan antrian dan kebutuhan Anda.',
    },
    {
        icon: 'bi-shield-fill-check',
        judul: 'Garansi Hingga 2 Tahun',
        deskripsi: 'Semua produk bergaransi resmi: Xiaomi 6 bulan, Arden 12 bulan, VIVAN 12 bulan, ACMIC 18 bulan, dan DeLCELL hingga 24 bulan.',
    },
    {
        icon: 'bi-tag-fill',
        judul: 'Garansi Harga Terbaik',
        deskripsi: 'Kami memberikan garansi harga terbaik. Diskusikan kebutuhan Anda dengan Project Manager kami untuk mendapatkan penawaran yang paling kompetitif.',
    },
    {
        icon: 'bi-vector-pen',
        judul: 'Gratis Jasa Desain',
        deskripsi: 'Belum punya desain? Tim desainer kami siap membantu membuat desain terbaik sesuai identitas brand dan keinginan Anda tanpa biaya tambahan.',
    },
    {
        icon: 'bi-chat-dots-fill',
        judul: 'Proses Order Mudah & Cepat',
        deskripsi: 'Proses pemesanan mudah dan fast response. Langsung hubungi Project Manager kami melalui Telepon, WhatsApp, atau Email.',
    },
]

const kontakInfo = [
    { icon: 'bi-person-fill',     label: 'Customer Service', value: 'CS SITI' },
    { icon: 'bi-telephone-fill',  label: 'Nomor WhatsApp',   value: '0811-2332-778' },
    { icon: 'bi-clock-fill',      label: 'Jam Operasional',  value: 'Senin – Sabtu, 08.00 – 17.00 WIB' },
]

const garansiList = [
    { brand: 'Xiaomi',  durasi: '6 Bulan' },
    { brand: 'Arden',   durasi: '12 Bulan' },
    { brand: 'VIVAN',   durasi: '12 Bulan' },
    { brand: 'ACMIC',   durasi: '18 Bulan' },
    { brand: 'DeLCELL', durasi: '24 Bulan' },
]
</script>

<style scoped>
.product-card,
.kelebihan-card,
.brand-card {
    transition: transform .25s ease, box-shadow .25s ease;
}

.product-card:hover,
.kelebihan-card:hover,
.brand-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, .10) !important;
}

.keunggulan-card {
    transition: border-color .2s ease;
}

.keunggulan-card:hover {
    border-color: #f59e0b !important;
}

.teknik-card {
    transition: transform .2s ease, box-shadow .2s ease;
}

.teknik-card:hover {
    transform: translateX(6px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, .07);
}
</style>
<template>
    <div>
        <!-- ===== PAGE HERO ===== -->
        <Pagehero title="Souvenir Goodie Bag Custom"
            description="Goodie bag cetak logo untuk promosi, event, pernikahan, dan ulang tahun. Tersedia berbagai pilihan bahan dengan desain sablon berkualitas terbaik."
            badge-text="Layanan Kami" badge-icon="bi-bag-fill" breadcrumb-current="Goodie Bag" />

        <!-- ===== INTRO SECTION ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="row align-items-center g-5">
                    <div class="col-lg-6">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                            Tentang Goodie Bag
                        </span>
                        <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                            Metode Promosi Murah & Efektif
                        </h2>
                        <p class="text-secondary lh-lg mb-4">
                            Souvenir goodie bag merupakan metode promosi yang murah dan efektif. Selain itu, goodie bag
                            sangat cocok dijadikan cinderamata saat acara spesial seperti pernikahan dan ulang tahun.
                        </p>
                        <p class="text-secondary lh-lg mb-4">
                            Duta Seragam berdiri sejak 2015 dan sangat serius memproduksi kaos, jaket, celana, kaos
                            polo,
                            goodie bag, serta souvenir promosi lainnya. Kami hadir untuk memenuhi kebutuhan fashion dan
                            promosi Anda dengan kualitas terjamin.
                        </p>
                        <a href="https://wa.me/6281234567890" target="_blank"
                            class="btn btn-primary fw-bold px-4 mt-2 d-inline-flex align-items-center gap-2">
                            <i class="bi bi-whatsapp"></i>Konsultasi Gratis
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div v-for="keunggulan in keunggulanSingkat" :key="keunggulan.label" class="col-6">
                                <div class="rounded-4 border p-3 h-100 d-flex align-items-start gap-3 keunggulan-card">
                                    <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary flex-shrink-0"
                                        style="width:42px;height:42px;font-size:1.1rem;">
                                        <i :class="'bi ' + keunggulan.icon"></i>
                                    </div>
                                    <div>
                                        <div class="fw-semibold" style="color:#1f2937; font-size:0.9rem;">
                                            {{ keunggulan.label }}
                                        </div>
                                        <div class="text-secondary" style="font-size:0.8rem;">{{ keunggulan.desc }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== JENIS GOODIE BAG ===== -->
        <section class="py-5" style="background:#f8f9fa;">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Produk Unggulan
                    </span>
                    <h2 class="fw-bold" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        5 Jenis Goodie Bag Terpopuler
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:540px;">
                        Pilih bahan yang sesuai dengan kebutuhan dan anggaran Anda. Semua tersedia dalam ukuran custom
                        dengan sablon logo berkualitas tinggi.
                    </p>
                </div>
                <div class="row g-4">
                    <div v-for="(item, i) in jenisGoodieBag" :key="item.nama" class="col-md-6 col-lg-4">
                        <div class="bg-white rounded-4 p-4 h-100 shadow-sm border border-1 product-card">
                            <div class="mb-3">
                                <img :src="item.img" :alt="item.nama" class="w-100 rounded-4 product-image" />

                                <div class="mt-3 d-flex align-items-center gap-3">
                                    <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary"
                                        style="width:48px;height:48px;">
                                        <i class="bi bi-usb-symbol"></i>
                                    </div>

                                    <div>
                                        <span class="text-secondary fw-semibold"
                                            style="font-size:.72rem;letter-spacing:.05em;text-transform:uppercase;">
                                            Pilihan {{ i + 1 }}
                                        </span>

                                        <h5 class="fw-bold mb-0">
                                            {{ item.nama }}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <p class="text-secondary lh-lg mb-3" style="font-size:0.92rem;">{{ item.deskripsi }}</p>
                            <div class="d-flex flex-wrap gap-2">
                                <span v-for="tag in item.tags" :key="tag"
                                    class="badge rounded-pill bg-primary bg-opacity-10 text-primary fw-semibold px-3 py-1"
                                    style="font-size:0.75rem;">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== FUNGSI GOODIE BAG ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-5">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                            Kegunaan
                        </span>
                        <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                            Fungsi Souvenir Goodie Bag Cetak Logo
                        </h2>
                        <p class="text-secondary lh-lg">
                            Goodie bag adalah salah satu pernik yang kerap wajib hadir dalam suatu kegiatan. Bukan
                            sekadar tas, goodie bag menjadi media komunikasi yang efektif untuk berbagai keperluan.
                        </p>
                    </div>
                    <div class="col-lg-7">
                        <div class="d-flex flex-column gap-3">
                            <div v-for="fungsi in fungsiGoodieBag" :key="fungsi.judul"
                                class="d-flex align-items-start gap-3 p-4 rounded-4 border fungsi-card">
                                <div class="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                                    style="width:46px;height:46px;font-size:1.2rem;background:rgba(245,158,11,0.1);color:#d97706;">
                                    <i :class="'bi ' + fungsi.icon"></i>
                                </div>
                                <div>
                                    <h6 class="fw-bold mb-1" style="color:#0f1729;">{{ fungsi.judul }}</h6>
                                    <p class="text-secondary mb-0" style="font-size:0.9rem;">{{ fungsi.deskripsi }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== KELEBIHAN ===== -->
        <section class="py-5" style="background:#f8f9fa;">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Keunggulan
                    </span>
                    <h2 class="fw-bold" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Kelebihan Goodie Bag Custom Sebagai Souvenir
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:540px;">
                        Goodie bag memiliki banyak kelebihan yang menjadikannya pilihan media promosi dan souvenir
                        terbaik.
                    </p>
                </div>
                <div class="row g-4">
                    <div v-for="(item, i) in kelebihanGoodieBag" :key="item.judul" class="col-md-6 col-lg-4">
                        <div class="bg-white rounded-4 p-4 h-100 shadow-sm kelebihan-card">
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white flex-shrink-0"
                                    style="width:32px;height:32px;font-size:0.85rem;background:#f59e0b;">
                                    {{ String.fromCharCode(65 + i) }}
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

        <!-- ===== PILIHAN BAHAN ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Material
                    </span>
                    <h2 class="fw-bold" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Pilihan Bahan Souvenir Goodie Bag Terbaik
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:540px;">
                        Pilih bahan yang tepat agar souvenir goodie bag Anda semakin berkesan dan bermanfaat lebih lama.
                    </p>
                </div>
                <div class="row g-4 justify-content-center">
                    <div v-for="bahan in pilihaBahan" :key="bahan.nama" class="col-md-4">
                        <div class="rounded-4 p-4 h-100 text-center bahan-card border" style="background:#f8f9fa;">
                            <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3 bg-primary bg-opacity-10 text-primary"
                                style="width:64px;height:64px;font-size:1.6rem;">
                                <i :class="'bi ' + bahan.icon"></i>
                            </div>
                            <h5 class="fw-bold mb-2" style="color:#0f1729;">{{ bahan.nama }}</h5>
                            <div class="mb-3">
                                <span class="badge rounded-pill fw-semibold px-3 py-1"
                                    :style="{ background: bahan.hargaColor + '20', color: bahan.hargaColor, fontSize: '0.78rem' }">
                                    {{ bahan.harga }}
                                </span>
                            </div>
                            <p class="text-secondary mb-0" style="font-size:0.9rem; line-height:1.7;">
                                {{ bahan.deskripsi }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const keunggulanSingkat = [
    { icon: 'bi-palette-fill', label: 'Desain Custom', desc: 'Cetak logo & nama event' },
    { icon: 'bi-rulers', label: 'Ukuran Bebas', desc: 'Sesuai kebutuhan Anda' },
    { icon: 'bi-award-fill', label: 'Kualitas Terjamin', desc: 'Sablon berkualitas tinggi' },
    { icon: 'bi-currency-dollar', label: 'Harga Terjangkau', desc: 'Cocok untuk semua budget' },
]

const jenisGoodieBag = [
    {
        nama: 'Goodie Bag Spunbond',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778928026/1_rbx3jq.png',
        deskripsi: 'Ramah lingkungan dengan tekstur sedikit kaku namun cukup halus karena serat bahannya cenderung rapat. Pilihan populer untuk event dan kampanye.',
        tags: ['Ramah Lingkungan', 'Ekonomis', 'Ringan'],
    },
    {
        nama: 'Goodie Bag Blacu',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778928026/2_xpq3cp.png',
        deskripsi: 'Kain mori yang tidak melalui proses pemutihan sehingga berwarna putih gading. Lebih kuat dan halus dibanding spunbond dengan harga yang masih terjangkau.',
        tags: ['Kuat', 'Halus', 'Terjangkau'],
    },
    {
        nama: 'Goodie Bag Kanvas',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778928027/3_y0gzuc.png',
        deskripsi: 'Melalui proses pemutihan sehingga warnanya lebih bersih dan halus. Sifat kain kanvas yang kuat, tahan robek, dengan serat tebal menjadikannya pilihan premium.',
        tags: ['Premium', 'Tahan Robek', 'Bersih'],
    },
    {
        nama: 'Goodie Bag Drill',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778928025/4_ax9ab9.png',
        deskripsi: 'Serat membentuk garis-garis miring dengan campuran bahan katun dan polyester. Tampak elegan karena tampilan depan dan belakang berbeda.',
        tags: ['Elegan', 'Katun-Polyester', 'Stylish'],
    },
    {
        nama: 'Goodie Bag Denim',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778928026/5_thuujh.png',
        deskripsi: 'Mudah dipadukan dengan pakaian kasual sehingga menciptakan kesan menarik dan modis. Tersedia dalam berbagai warna dan corak modern.',
        tags: ['Modis', 'Kasual', 'Beragam Warna'],
    },
]

const fungsiGoodieBag = [
    {
        icon: 'bi-megaphone-fill',
        judul: 'Goodie Bag Promosi',
        deskripsi: 'Digunakan sebagai media pendukung aktivitas promosi suatu produk atau usaha. Sangat efisien untuk memperkenalkan produk saat launching maupun sebagai souvenir brand.',
    },
    {
        icon: 'bi-calendar-event-fill',
        judul: 'Goodie Bag Event',
        deskripsi: 'Digunakan pada event tertentu seperti seminar, rapat, pernikahan, dan ulang tahun sebagai souvenir kenang-kenangan bagi para peserta.',
    },
    {
        icon: 'bi-flag-fill',
        judul: 'Goodie Bag Kampanye',
        deskripsi: 'Digunakan untuk menyebarluaskan inspirasi atau slogan. Semakin banyak yang menggunakan, semakin luas pengaruh pesan yang ingin disampaikan.',
    },
    {
        icon: 'bi-bag-heart-fill',
        judul: 'Goodie Bag Custom',
        deskripsi: 'Fleksibel untuk membawa kebutuhan sehari-hari. Ukurannya beragam sesuai jumlah dan jenis barang yang ingin dibawa.',
    },
    {
        icon: 'bi-cart-fill',
        judul: 'Goodie Bag Shopping',
        deskripsi: 'Digunakan untuk membawa belanjaan. Membawa tas dari rumah dapat menghemat pengeluaran sekaligus mengurangi penggunaan kantong plastik.',
    },
]

const kelebihanGoodieBag = [
    {
        judul: 'Bahan Beragam & Banyak Pilihan',
        deskripsi: 'Tersedia bahan kanvas, drill, spunbond, dan lainnya. Konsumen bisa menyesuaikan selera dan budget dengan pilihan bahan yang beragam.',
    },
    {
        judul: 'Ukuran Bisa Disesuaikan',
        deskripsi: 'Konsumen dapat memilih ukuran goodie bag sesuai keinginan, dari ukuran kecil hingga besar, menyesuaikan kebutuhan penggunaan.',
    },
    {
        judul: 'Desain Sablon Berkualitas',
        deskripsi: 'Dapat dicetak/sablon logo brand atau nama event yang diselenggarakan. Untuk souvenir pernikahan bisa dicetak nama pengantin agar selalu diingat.',
    },
    {
        judul: 'Mudah Dibawa & Disimpan',
        deskripsi: 'Sangat ringan meskipun berukuran besar, goodie bag mudah dibawa maupun disimpan sehingga tidak menyulitkan penerima.',
    },
    {
        judul: 'Awet & Bermanfaat',
        deskripsi: 'Berumur lama meski digunakan setiap hari. Dapat dipakai sebagai tas belanja, pelindung laptop, tempat buku, dan keperluan sehari-hari lainnya.',
    },
    {
        judul: 'Harga Relatif Terjangkau',
        deskripsi: 'Solusi media promosi low budget bagi pebisnis pemula. Goodie bag yang bervariasi tidak terlalu mahal namun tetap efektif menjangkau banyak konsumen.',
    },
    {
        judul: 'Media Promosi Tidak Ketinggalan Zaman',
        deskripsi: 'Goodie bag dapat didesain sesuai model terbaru sehingga selalu relevan sebagai media promosi jangka panjang di era digital sekalipun.',
    },
]

const pilihaBahan = [
    {
        nama: 'Bahan Kanvas',
        icon: 'bi-gem',
        harga: 'Harga Premium',
        hargaColor: '#0f1729',
        deskripsi: 'Awalnya digunakan sebagai media melukis. Kini berkembang menjadi bahan goodie bag premium yang kuat, bersih, dan halus. Lebih mahal namun kualitas terbaik.',
    },
    {
        nama: 'Bahan Drill',
        icon: 'bi-layers-fill',
        harga: 'Harga Menengah',
        hargaColor: '#2563eb',
        deskripsi: 'Lebih terjangkau, sering digunakan untuk topi dan goodie bag. Tekstur sedikit lebih kasar namun tetap menghasilkan tampilan yang rapi dan elegan.',
    },
    {
        nama: 'Bahan Spunbond',
        icon: 'bi-star-fill',
        harga: 'Harga Ekonomis',
        hargaColor: '#16a34a',
        deskripsi: 'Bahan paling ekonomis dengan kualitas cukup baik dan tahan lama. Tampilannya hampir mirip plastik namun tetap ramah lingkungan dan ringan.',
    },
]
</script>

<style scoped>
.product-image{
    aspect-ratio: 4 / 5;
    width: 100%;
    object-fit: cover;
    transition: .4s ease;
    border-radius: 16px;
}

.product-card{
    overflow: hidden;
}

.product-card:hover .product-image{
    transform: scale(1.05);
}
.kelebihan-card,
.bahan-card {
    transition: transform .25s ease, box-shadow .25s ease;
}

.kelebihan-card:hover,
.bahan-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, .10) !important;
}

.keunggulan-card {
    transition: border-color .2s ease;
}

.keunggulan-card:hover {
    border-color: #f59e0b !important;
}

.fungsi-card {
    transition: transform .2s ease, box-shadow .2s ease;
    background: #fff;
}

.fungsi-card:hover {
    transform: translateX(6px);
    box-shadow: 0 6px 24px rgba(0, 0, 0, .07);
}
</style>
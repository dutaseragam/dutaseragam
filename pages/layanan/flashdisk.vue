<template>
    <div>
        <!-- ===== PAGE HERO ===== -->
        <Pagehero title="Flashdisk Custom & Souvenir USB"
            description="Flashdisk custom untuk media promosi, seminar, merchandise perusahaan, dan souvenir eksklusif. Duta Seragam menyediakan berbagai model flashdisk premium dengan desain custom."
            badge-text="Layanan Kami" badge-icon="bi-usb-symbol" breadcrumb-current="Flashdisk" />

        <!-- ===== INTRO SECTION ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="row align-items-center g-5">

                    <div class="col-lg-6">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                            Tentang Flashdisk Custom
                        </span>

                        <h2 class="fw-bold mb-3" style="color:#0f1729;font-size:clamp(1.5rem,3vw,2.2rem)">
                            Media Promosi Modern & Berkesan
                        </h2>

                        <p class="text-secondary lh-lg mb-4">
                            Flashdisk kartu adalah salah satu produk unggulan untuk media promosi,
                            merchandise perusahaan, seminar, event, hingga souvenir pernikahan premium.
                            Bentuknya unik seperti kartu ATM sehingga praktis dibawa ke mana saja.
                        </p>

                        <p class="text-secondary lh-lg mb-4">
                            Duta Seragam melayani pembuatan flashdisk custom berbagai model:
                            kartu, metal, kayu, kulit, plastik hingga model eksklusif
                            dengan desain logo perusahaan berkualitas tinggi.
                        </p>

                        <a href="https://wa.me/6281112332778" class="btn btn-primary px-4 fw-bold">
                            <i class="bi bi-whatsapp me-2"></i>
                            Konsultasi Gratis
                        </a>
                    </div>

                    <div class="col-lg-6">

                        <img src="https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926828/ChatGPT_Image_May_16_2026_05_20_15_PM_vm6xyi.png"
                            class="img-fluid rounded-4 shadow">

                        <div class="row g-3 mt-2">

                            <div v-for="item in keunggulanFlashdisk" :key="item.label" class="col-6">

                                <div class="border rounded-4 p-3 keunggulan-card h-100">

                                    <div class="d-flex gap-3">

                                        <div class="bg-primary bg-opacity-10 text-primary rounded-3 d-flex justify-content-center align-items-center"
                                            style="width:42px;height:42px">

                                            <i :class="'bi ' + item.icon"></i>

                                        </div>

                                        <div>

                                            <div class="fw-bold">
                                                {{ item.label }}
                                            </div>

                                            <small class="text-secondary">
                                                {{ item.desc }}
                                            </small>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>

        <!-- ===== MODEL FLASHDISK ===== -->

        <section class="py-5" style="background:#f8f9fa">

            <div class="container">

                <div class="text-center mb-5">

                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 px-3 py-2 mb-3">
                        Produk Unggulan
                    </span>

                    <h2 class="fw-bold">
                        Jenis Flashdisk Custom Populer
                    </h2>

                    <p class="text-secondary">
                        Berbagai model flashdisk custom sesuai kebutuhan promosi dan perusahaan Anda.
                    </p>

                </div>

                <div class="row g-4">

                    <div v-for="(item, i) in jenisFlashdisk" :key="item.nama" class="col-md-6 col-lg-4">

                        <div class="bg-white rounded-4 p-4 h-100 shadow-sm product-card">

                            <img :src="item.img" class="img-fluid rounded-3 mb-3"
                                style="height:220px;width:100%;object-fit:cover">

                            <span class="small text-secondary">
                                Pilihan {{ i + 1 }}
                            </span>

                            <h5 class="fw-bold">
                                {{ item.nama }}
                            </h5>

                            <p class="text-secondary">
                                {{ item.deskripsi }}
                            </p>

                            <div class="d-flex flex-wrap gap-2">

                                <span v-for="tag in item.tags" class="badge bg-primary bg-opacity-10 text-primary">

                                    {{ tag }}

                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- KELEBIHAN -->

        <section class="py-5 bg-white">

            <div class="container">

                <div class="text-center mb-5">

                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 px-3 py-2 mb-3">
                        Keunggulan
                    </span>

                    <h2 class="fw-bold">
                        Kenapa Memilih Flashdisk Custom Duta Seragam?
                    </h2>

                </div>

                <div class="row g-4">

                    <div v-for="(item, i) in kelebihanFlashdisk" :key="item.judul" class="col-lg-4 col-md-6">

                        <div class="bg-light rounded-4 p-4 h-100 kelebihan-card">

                            <div class="d-flex gap-3 mb-3">

                                <div class="bg-warning rounded-circle text-white d-flex align-items-center justify-content-center"
                                    style="width:35px;height:35px">

                                    {{ i + 1 }}

                                </div>

                                <h6 class="fw-bold">
                                    {{ item.judul }}
                                </h6>

                            </div>

                            <p class="text-secondary mb-0">

                                {{ item.deskripsi }}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- MATERIAL -->

        <section class="py-5">

            <div class="container">

                <div class="text-center mb-5">

                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 px-3 py-2 mb-3">
                        Material
                    </span>

                    <h2 class="fw-bold">

                        Material Flashdisk Tersedia

                    </h2>

                </div>

                <div class="row g-4">

                    <div v-for="item in bahanFlashdisk" :key="item.nama" class="col-md-4">

                        <div class="rounded-4 border p-4 text-center bahan-card">

                            <i :class="'bi ' + item.icon" style="font-size:50px">

                            </i>

                            <h5 class="mt-3 fw-bold">
                                {{ item.nama }}
                            </h5>

                            <p class="text-secondary">
                                {{ item.deskripsi }}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    </div>
</template>

<script setup>

const keunggulanFlashdisk = [

    {
        icon: 'bi-palette-fill',
        label: 'Desain Custom',
        desc: 'Logo & branding perusahaan'
    },

    {
        icon: 'bi-lightning-fill',
        label: 'Produksi Cepat',
        desc: 'Estimasi tepat waktu'
    },

    {
        icon: 'bi-award-fill',
        label: 'Premium Quality',
        desc: 'Material terbaik'
    },

    {
        icon: 'bi-currency-dollar',
        label: 'Harga Bersahabat',
        desc: 'Mulai skala kecil'
    }

]


const jenisFlashdisk = [

    {
        nama: 'Flashdisk Kartu',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926377/1_bguvfk.png',
        deskripsi: 'Model tipis seukuran kartu ATM cocok untuk seminar, event dan souvenir.',
        tags: ['PVC', 'Custom Print', 'Populer']
    },

    {
        nama: 'Flashdisk Metal',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926377/2_f7ubbv.png',
        deskripsi: 'Flashdisk elegan berbahan stainless dengan tampilan premium.',
        tags: ['Premium', 'Metal', 'Eksklusif']
    },

    {
        nama: 'Flashdisk Kulit',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926377/3_vig8pf.png',
        deskripsi: 'Model mewah dengan bahan kulit untuk kebutuhan branding perusahaan.',
        tags: ['Lux', 'Kulit', 'Corporate']
    },

    {
        nama: 'Flashdisk Kayu',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926377/4_tyjrrn.png',
        deskripsi: 'Material kayu unik dan ramah lingkungan.',
        tags: ['Kayu', 'Unik', 'Eco']
    },

    {
        nama: 'Flashdisk Plastik',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926377/5_r6xspq.png',
        deskripsi: 'Model ekonomis untuk promosi massal.',
        tags: ['Murah', 'Promosi', 'Simple']
    },

    {
        nama: 'Flashdisk Kristal',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778926377/6_tflai1.png',
        deskripsi: 'Tampilan elegan dengan LED eksklusif.',
        tags: ['LED', 'Kristal', 'Premium']
    }

]


const kelebihanFlashdisk = [

    {
        judul: 'Desain Bebas',
        deskripsi: 'Cetak logo perusahaan atau desain sendiri.'
    },

    {
        judul: 'Bentuk Unik',
        deskripsi: 'Tersedia banyak model menarik.'
    },

    {
        judul: 'Media Promosi Efektif',
        deskripsi: 'Logo perusahaan akan selalu terlihat.'
    },

    {
        judul: 'Praktis Dibawa',
        deskripsi: 'Masuk dompet, tas dan saku.'
    },

    {
        judul: 'Produksi Cepat',
        deskripsi: 'Pengerjaan profesional dan tepat waktu.'
    },

    {
        judul: 'Harga Terjangkau',
        deskripsi: 'Cocok untuk semua skala bisnis.'
    }

]


const bahanFlashdisk = [

    {
        nama: 'Metal',
        icon: 'bi-gem',
        deskripsi: 'Bahan stainless premium elegan'
    },

    {
        nama: 'Kulit',
        icon: 'bi-handbag-fill',
        deskripsi: 'Tampilan mewah dan eksklusif'
    },

    {
        nama: 'Kayu',
        icon: 'bi-tree-fill',
        deskripsi: 'Natural dan unik'
    }

]

</script>


<style scoped>
.product-card,
.kelebihan-card,
.bahan-card {
    transition: .3s;
}

.product-card:hover,
.kelebihan-card:hover,
.bahan-card:hover {

    transform: translateY(-6px);

    box-shadow: 0 15px 40px rgba(0, 0, 0, .1);

}

.keunggulan-card {
    transition: .3s;
}

.keunggulan-card:hover {
    border-color: #f59e0b;
}
</style>
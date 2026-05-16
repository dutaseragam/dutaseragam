<template>
    <div>
        <!-- ===== PAGE HERO ===== -->
        <Pagehero title="Seragam Satpam Desain Baru"
            description="Duta Seragam melayani pembuatan seragam satpam terbaru sesuai standar terbaru Polri dengan kualitas terbaik, bahan premium, dan harga terjangkau."
            badge-text="Seragam Profesional" badge-icon="bi-shield-fill-check" breadcrumb-current="Seragam Satpam" />
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="row align-items-center g-5">

                    <div class="col-lg-6">
                        <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 px-3 py-2 mb-3">
                            Tentang Seragam Satpam
                        </span>

                        <h2 class="fw-bold mb-3" style="color:#0f1729">
                            Seragam Profesional Untuk Keamanan Terbaik
                        </h2>

                        <p class="text-secondary lh-lg">
                            Duta Seragam menyediakan seragam satpam berkualitas tinggi dengan bahan nyaman,
                            desain profesional, dan dapat dikustom sesuai kebutuhan perusahaan.
                        </p>

                        <a href="https://wa.me/6281234567890" class="btn btn-primary fw-bold px-4 mt-3">
                            <i class="bi bi-whatsapp"></i>
                            Konsultasi Gratis
                        </a>
                    </div>

                    <div class="col-lg-6">
                        <div class="row g-3">

                            <div class="col-6">
                                <img src="https://i.pinimg.com/736x/e3/60/e1/e360e1a18e8ec3848769ca0f77b4253e.jpg"
                                    class="img-fluid rounded-4 shadow-sm">
                            </div>

                            <div class="col-6">
                                <img src="https://i.pinimg.com/736x/f8/f6/31/f8f63135fd79a00bb85e5e834982e722.jpg"
                                    class="img-fluid rounded-4 shadow-sm">
                            </div>

                            <div class="col-12">
                                <img src="https://i.pinimg.com/1200x/c3/ca/03/c3ca0338396ecbfec2869a031767a186.jpg"
                                    class="img-fluid rounded-4 shadow-sm"
                                    style="height:220px;width:100%;object-fit:cover">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <!-- ===== KEUNGGULAN ===== -->
        <section class="py-5" style="background:#f8f9fa">
            <div class="container">

                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Keunggulan
                    </span>

                    <h2 class="fw-bold">
                        Mengapa Memilih Duta Seragam
                    </h2>
                </div>

                <div class="row g-4">

                    <div v-for="item in keunggulanSatpam" :key="item.judul" class="col-md-6 col-lg-4">

                        <div class="bg-white rounded-4 p-4 h-100 shadow-sm kelebihan-card">

                            <div class="rounded-circle bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center mb-3"
                                style="width:55px;height:55px">

                                <i :class="'bi ' + item.icon"></i>

                            </div>

                            <h5 class="fw-bold">
                                {{ item.judul }}
                            </h5>

                            <p class="text-secondary">
                                {{ item.deskripsi }}
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>



        <!-- ===== JENIS PAKAIAN ===== -->
        <section class="py-5 bg-white">
            <div class="container">

                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Jenis Seragam
                    </span>

                    <h2 class="fw-bold">
                        Jenis Pakaian Dinas Satpam
                    </h2>

                    <p class="text-secondary">
                        Berdasarkan regulasi terbaru terdapat beberapa jenis pakaian dinas satpam
                    </p>

                </div>


                <div class="row g-4">

                    <div v-for="jenis in jenisSeragamSatpam" :key="jenis.nama" class="col-md-6 col-lg-4">

                        <div class="product-card bg-white border rounded-4 p-4 h-100">

                            <div class="rounded-3 bg-warning bg-opacity-10 text-warning d-inline-flex align-items-center justify-content-center mb-3"
                                style="width:55px;height:55px">

                                <i :class="'bi ' + jenis.icon"></i>

                            </div>

                            <h5 class="fw-bold">
                                {{ jenis.nama }}
                            </h5>

                            <p class="text-secondary">
                                {{ jenis.deskripsi }}
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>



        <!-- ===== BAHAN ===== -->

        <section class="py-5" style="background:#f8f9fa">

            <div class="container">

                <div class="text-center mb-5">

                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Material
                    </span>

                    <h2 class="fw-bold">
                        Rekomendasi Bahan Seragam Satpam
                    </h2>

                </div>

                <div class="row g-4">

                    <div v-for="bahan in bahanSeragamSatpam" :key="bahan.nama" class="col-md-6 col-lg-4">

                        <div class="bahan-card bg-white rounded-4 p-4 h-100">

                            <h5 class="fw-bold mb-3">
                                {{ bahan.nama }}
                            </h5>

                            <p class="text-secondary">
                                {{ bahan.deskripsi }}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>



        <!-- CTA -->

        <section class="py-5" style="background:linear-gradient(135deg,#f59e0b,#d97706)">

            <div class="container text-center">

                <h2 class="fw-bold text-white mb-3">
                    Pesan Seragam Satpam Sekarang
                </h2>

                <p class="text-white opacity-75 mx-auto" style="max-width:700px">

                    Duta Seragam siap membantu kebutuhan seragam satpam terbaru
                    dengan kualitas terbaik, pengerjaan cepat, dan harga terjangkau.
                </p>

                <a href="https://wa.me/6281234567890" class="btn btn-success fw-bold px-4 py-3">

                    <i class="bi bi-whatsapp me-2"></i>
                    Chat WhatsApp

                </a>

            </div>

        </section>

    </div>
</template>

<script setup>

const keunggulanSatpam = [
    {
        judul: 'Kualitas Terjamin',
        icon: 'bi-award-fill',
        deskripsi: 'Dikerjakan tenaga ahli dan berpengalaman.'
    },

    {
        judul: 'Produksi Tepat Waktu',
        icon: 'bi-clock-fill',
        deskripsi: 'Proses cepat dengan hasil maksimal.'
    },

    {
        judul: 'Harga Terjangkau',
        icon: 'bi-currency-dollar',
        deskripsi: 'Harga kompetitif untuk semua kebutuhan.'
    },

    {
        judul: 'Bordir Lengkap',
        icon: 'bi-patch-check-fill',
        deskripsi: 'Nama anggota, emblem, dan pangkat.'
    },

    {
        judul: 'Bahan Premium',
        icon: 'bi-stars',
        deskripsi: 'Menggunakan material berkualitas.'
    },

    {
        judul: 'Custom Desain',
        icon: 'bi-palette-fill',
        deskripsi: 'Bisa menyesuaikan kebutuhan perusahaan.'
    }
]


const jenisSeragamSatpam = [

    {
        nama: 'PDH',
        icon: 'bi-person-badge-fill',
        deskripsi: 'Pakaian Dinas Harian.'
    },

    {
        nama: 'PDLSus',
        icon: 'bi-shield-fill',
        deskripsi: 'Pakaian Dinas Lapangan Khusus.'
    },

    {
        nama: 'PDL Satu',
        icon: 'bi-person-workspace',
        deskripsi: 'Pakaian Dinas Lapangan.'
    },

    {
        nama: 'PSH',
        icon: 'bi-person-lines-fill',
        deskripsi: 'Pakaian Sipil Harian.'
    },

    {
        nama: 'PSL',
        icon: 'bi-suit-club-fill',
        deskripsi: 'Pakaian Sipil Lengkap.'
    }

]



const bahanSeragamSatpam = [

    {
        nama: 'Maryland Fine Twill',
        deskripsi: 'Awet, dingin, nyaman dipakai dan tahan lama.'
    },

    {
        nama: 'Unione Drill USA',
        deskripsi: 'Tekstur halus dengan harga ekonomis.'
    },

    {
        nama: 'American Drill',
        deskripsi: 'Serat lembut dan cocok untuk PDH maupun PDL.'
    },

    {
        nama: 'Castillo Drill',
        deskripsi: 'Lebih lembut dan tahan kusut.'
    },

    {
        nama: 'Nagata Drill',
        deskripsi: 'Adem dipakai dan cocok iklim tropis.'
    },

    {
        nama: 'Taipan Tropical',
        deskripsi: 'Premium, eksklusif, dan sangat nyaman.'
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

    box-shadow: 0 15px 35px rgba(0, 0, 0, .08)
}
</style>

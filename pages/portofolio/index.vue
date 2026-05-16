<template>
    <div>
        <Pagehero title="Portofolio Duta Seragam"
            description="Lihat hasil produksi terbaik Duta Seragam mulai dari kaos, polo shirt, kemeja, wearpack hingga jaket custom berkualitas."
            badge-text="Portofolio" badge-icon="bi-grid-fill" breadcrumb-current="Portofolio" />

        <section class="py-5 bg-light">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 px-3 py-2 mb-3">
                        Produk Kami
                    </span>

                    <h2 class="fw-bold mb-3" style="color:#0f1729;font-size:clamp(1.7rem,3vw,2.5rem)">
                        Pilih Portofolio Produk
                    </h2>

                    <p class="text-secondary mx-auto" style="max-width:650px">
                        Duta Seragam melayani berbagai kebutuhan seragam dan apparel custom dengan kualitas terbaik,
                        desain modern dan bahan premium.
                    </p>
                </div>

                <div class="row g-4">
                    <div v-for="item in portfolioMenu" :key="item.title" class="col-md-6 col-lg-4">
                        <NuxtLink :to="item.link" class="text-decoration-none">
                            <div class="card border-0 shadow-sm rounded-4 h-100 portfolio-card">
                                <div class="card-body p-4">
                                    <div class="rounded-circle bg-primary bg-opacity-10 text-primary d-inline-flex align-items-center justify-content-center mb-3"
                                        style="width:55px;height:55px">
                                        <i :class="'bi ' + item.icon" style="font-size:24px"></i>
                                    </div>

                                    <h5 class="fw-bold" style="color:#0f1729">
                                        {{ item.title }}
                                    </h5>

                                    <p class="text-secondary">
                                        {{ item.description }}
                                    </p>

                                    <div class="fw-semibold text-primary d-flex align-items-center gap-2">
                                        Lihat Portofolio
                                        <i class="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <section class="py-5 bg-white">
            <div class="container">
                <div class="rounded-5 p-5 text-center shadow-sm"
                    style="background:linear-gradient(135deg,#0d6efd,#2563eb)">
                    <h2 class="fw-bold text-white mb-3">
                        Butuh Seragam Custom?
                    </h2>

                    <p class="text-white opacity-75 mx-auto" style="max-width:700px">
                        Konsultasikan kebutuhan seragam perusahaan, komunitas atau event Anda bersama tim Duta Seragam.
                    </p>

                    <a href="https://wa.me/628123456789" target="_blank"
                        class="btn btn-warning fw-bold px-4 py-3 rounded-pill">
                        <i class="bi bi-whatsapp me-2"></i>
                        Konsultasi Gratis
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const portfolioMenu = [
    {
        title: 'Portofolio Kaos',
        description: 'Koleksi hasil produksi kaos custom Duta Seragam untuk komunitas, perusahaan dan event.',
        link: '/portofolio/kaos',
        icon: 'bi-shirt'
    },
    {
        title: 'Portofolio Polo Shirt',
        description: 'Portofolio polo shirt custom dengan bahan premium dan bordir berkualitas.',
        link: '/portofolio/polo-shirt',
        icon: 'bi-award-fill'
    },
    {
        title: 'Portofolio Kemeja',
        description: 'Hasil produksi kemeja kerja, PDH dan seragam kantor custom.',
        link: '/portofolio/kemeja',
        icon: 'bi-person-workspace'
    },
    {
        title: 'Portofolio Wearpack',
        description: 'Wearpack industri berkualitas dengan desain modern dan safety.',
        link: '/portofolio/wearpack',
        icon: 'bi-shield-check'
    },
    {
        title: 'Portofolio Jaket',
        description: 'Jaket custom varsity, bomber, hoodie dan lainnya.',
        link: '/portofolio/jaket',
        icon: 'bi-cloud-fill'
    }
]
</script>

<style scoped>
.portfolio-card {
    overflow: hidden;
    transition: .35s;
}


.portfolio-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, .12) !important;
}

.portfolio-card:hover img {
    transform: scale(1.06);
}
</style>
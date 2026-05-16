<template>
    <div>
        <Pagehero title="Portofolio Kaos"
            description="Koleksi kaos custom berkualitas tinggi — dari sablon manual hingga DTF printing, kami hadirkan warna tajam dan bahan nyaman untuk berbagai kebutuhan."
            badge-text="Portofolio Produk" badge-icon="bi-grid-fill" breadcrumb-current="Kaos" />

        <!-- ===== FILTER & GRID ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">

                <!-- Section Header -->
                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Katalog Kami
                    </span>
                    <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Hasil Produksi Kaos Terbaik
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:560px;">
                        Setiap kaos diproduksi dengan standar kualitas tinggi, bahan pilihan, dan proses finishing yang
                        rapi. Cocok untuk seragam komunitas, event, hingga corporate.
                    </p>
                </div>

                <!-- Filter Tabs -->
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    <button v-for="cat in categories" :key="cat"
                        class="btn btn-sm fw-semibold px-4 py-2 rounded-pill"
                        :class="activeCategory === cat ? 'btn-primary' : 'btn-outline-secondary'"
                        @click="activeCategory = cat">
                        {{ cat }}
                    </button>
                </div>

                <!-- Gallery Grid -->
                <div class="row g-4">
                    <div v-for="(item, i) in filteredItems" :key="i" class="col-6 col-md-4 col-lg-3">
                        <div class="portfolio-card rounded-4 overflow-hidden shadow-sm border border-light h-100"
                            @click="openModal(item)">
                            <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
                                <img :src="item.img" :alt="item.title" class="w-100 h-100 portfolio-img"
                                    style="object-fit:cover;">
                                <div class="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div class="text-center text-white px-3">
                                        <i class="bi bi-zoom-in fs-2 mb-2 d-block"></i>
                                        <div class="fw-semibold" style="font-size:0.85rem;">Lihat Detail</div>
                                    </div>
                                </div>
                                <span class="badge bg-primary position-absolute top-0 end-0 m-2 rounded-pill">
                                    {{ item.tag }}
                                </span>
                            </div>
                            <div class="p-3">
                                <div class="fw-bold text-dark mb-1" style="font-size:0.9rem;">{{ item.title }}</div>
                                <div class="text-secondary" style="font-size:0.78rem;">{{ item.desc }}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="text-center mt-5 pt-3">
                    <p class="text-secondary mb-3">Tertarik dengan produk kami?</p>
                    <a href="https://wa.me/6281234567890" target="_blank"
                        class="btn btn-primary fw-bold px-5 py-2 d-inline-flex align-items-center gap-2">
                        <i class="bi bi-whatsapp"></i>Pesan Sekarang
                    </a>
                </div>
            </div>
        </section>

        <!-- ===== KEUNGGULAN ===== -->
        <section class="py-5" style="background:#f8fafc;">
            <div class="container py-3">
                <div class="row g-4 justify-content-center">
                    <div v-for="feat in features" :key="feat.title" class="col-6 col-md-3">
                        <div class="text-center p-3">
                            <div class="rounded-3 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary mb-3"
                                style="width:52px;height:52px;font-size:1.3rem;">
                                <i :class="'bi ' + feat.icon"></i>
                            </div>
                            <div class="fw-bold mb-1" style="color:#1f2937; font-size:0.9rem;">{{ feat.title }}</div>
                            <div class="text-secondary" style="font-size:0.78rem;">{{ feat.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== CTA SECTION ===== -->
        <section class="py-5" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
            <div class="container py-3 text-center">
                <h2 class="fw-bold text-white mb-3" style="font-size: clamp(1.75rem, 4vw, 2.5rem);">
                    Siap Order Kaos Custom?
                </h2>
                <p class="mx-auto mb-4" style="color:rgba(255,255,255,.85); max-width:520px;">
                    Konsultasikan desain dan kebutuhan Anda sekarang. Gratis konsultasi, desain mockup, dan estimasi
                    harga.
                </p>
                <div class="d-flex justify-content-center flex-wrap gap-3">
                    <a href="https://wa.me/6281234567890" target="_blank"
                        class="btn fw-bold px-4 py-2 d-inline-flex align-items-center gap-2"
                        style="background:#25d366; color:#fff; border:none;">
                        <i class="bi bi-whatsapp"></i>Chat via WhatsApp
                    </a>
                    <a href="/kontak" class="btn fw-semibold px-4 py-2 d-inline-flex align-items-center gap-2"
                        style="background:rgba(255,255,255,.15); color:#fff; border: 2px solid rgba(255,255,255,.5);">
                        <i class="bi bi-envelope"></i>Kirim Email
                    </a>
                </div>
            </div>
        </section>

        <!-- ===== LIGHTBOX MODAL ===== -->
        <div v-if="modalItem" class="modal-backdrop-custom" @click.self="closeModal">
            <div class="modal-box rounded-4 overflow-hidden shadow-lg">
                <button class="btn-close-custom" @click="closeModal">
                    <i class="bi bi-x-lg"></i>
                </button>
                <img :src="modalItem.img" :alt="modalItem.title"
                    style="width:100%; max-height:70vh; object-fit:contain; background:#0f1729;">
                <div class="p-4">
                    <div class="d-flex align-items-center gap-2 mb-1">
                        <span class="badge bg-primary rounded-pill">{{ modalItem.tag }}</span>
                    </div>
                    <h5 class="fw-bold mb-1">{{ modalItem.title }}</h5>
                    <p class="text-secondary mb-0" style="font-size:0.9rem;">{{ modalItem.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('Semua')
const modalItem = ref(null)

const categories = ['Semua', 'Sablon', 'DTF Printing', 'Bordir', 'Corporate']

const items = [
  {
    title: 'Kaos T-Shirt Perusahaan Event',
    desc: 'Kaos seragam perusahaan untuk event, promosi, dan kegiatan kantor',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920630/3_ppokex.png'
  },
  {
    title: 'Kaos T-Shirt Gathering Perusahaan',
    desc: 'Desain kaos gathering tim dengan bahan nyaman dan tampilan profesional',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/8_cykinm.png'
  },
  {
    title: 'Kaos T-Shirt Branding Perusahaan',
    desc: 'Kaos custom untuk kebutuhan branding perusahaan dengan cetak berkualitas',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/10_wqqxq7.png'
  },
  {
    title: 'Kaos T-Shirt Staff Perusahaan',
    desc: 'Seragam kaos kerja perusahaan dengan desain modern dan elegan',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/9_pz1tef.png'
  },
  {
    title: 'Kaos T-Shirt Corporate Casual',
    desc: 'Kaos seragam kantor untuk aktivitas kerja dan kebutuhan internal',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/6_fc7wzb.png'
  },
  {
    title: 'Kaos T-Shirt Team Building',
    desc: 'Kaos tim perusahaan untuk kegiatan outing dan team building',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/2_c2jc4k.png'
  },
  {
    title: 'Kaos T-Shirt Promosi Brand',
    desc: 'Kaos promosi perusahaan dengan desain custom sesuai identitas brand',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/1_yijonb.png'
  },
  {
    title: 'Kaos T-Shirt Karyawan',
    desc: 'Seragam karyawan perusahaan dengan bahan premium dan nyaman dipakai',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/7_ocwpra.png'
  },
  {
    title: 'Kaos T-Shirt Anniversary Perusahaan',
    desc: 'Kaos custom untuk perayaan ulang tahun perusahaan dan event khusus',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920632/11_yxcmb3.png'
  },
  {
    title: 'Kaos T-Shirt Corporate Premium',
    desc: 'Kaos perusahaan dengan desain eksklusif dan kualitas premium',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/5_uryatp.png'
  },
  {
    title: 'Kaos T-Shirt Seragam Kantor',
    desc: 'Kaos seragam perusahaan dengan tampilan profesional dan modern',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920632/4_lay7sj.png'
  },
  {
    title: 'Kaos T-Shirt Crew Perusahaan',
    desc: 'Kaos identitas crew dan tim perusahaan untuk berbagai kebutuhan acara',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920632/12_scjsqu.png'
  },
]
const filteredItems = computed(() =>
    activeCategory.value === 'Semua' ? items : items.filter(i => i.tag === activeCategory.value)
)

const features = [
    { icon: 'bi-patch-check-fill', title: 'Bahan Premium', desc: 'Cotton combed, drifit, bambu organik pilihan' },
    { icon: 'bi-palette-fill', title: 'Warna Tajam', desc: 'Tinta berkualitas, tidak mudah pudar' },
    { icon: 'bi-truck', title: 'Pengiriman Nasional', desc: 'Kirim ke seluruh Indonesia' },
    { icon: 'bi-headset', title: 'Konsultasi Gratis', desc: 'Tim kami siap membantu 7 hari seminggu' },
]

function openModal(item) { modalItem.value = item }
function closeModal() { modalItem.value = null }
</script>

<style scoped>
.portfolio-card {
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease;
}
.portfolio-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, .12) !important;
}
.portfolio-img {
    transition: transform .4s ease;
}
.portfolio-card:hover .portfolio-img {
    transform: scale(1.07);
}
.portfolio-overlay {
    background: rgba(15, 23, 41, 0.55);
    opacity: 0;
    transition: opacity .3s ease;
}
.portfolio-card:hover .portfolio-overlay {
    opacity: 1;
}
.modal-backdrop-custom {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
.modal-box {
    background: #fff;
    width: 100%;
    max-width: 520px;
    position: relative;
    animation: modalIn .25s ease;
}
@keyframes modalIn {
    from { transform: scale(0.92); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
}
.btn-close-custom {
    position: absolute;
    top: .75rem;
    right: .75rem;
    z-index: 10;
    background: rgba(0,0,0,0.5);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background .2s;
}
.btn-close-custom:hover { background: rgba(0,0,0,0.8); }
</style>
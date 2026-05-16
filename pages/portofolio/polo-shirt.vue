<template>
    <div>
        <Pagehero title="Portofolio Polo Shirt"
            description="Polo shirt premium dengan kualitas jahitan tinggi — ideal untuk seragam perusahaan, komunitas, dan kegiatan formal semi-casual."
            badge-text="Portofolio Produk" badge-icon="bi-grid-fill" breadcrumb-current="Polo Shirt" />

        <section class="py-5 bg-white">
            <div class="container py-4">

                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Katalog Kami
                    </span>
                    <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Koleksi Polo Shirt Terbaik
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:560px;">
                        Polo shirt kami tersedia dalam berbagai pilihan bahan — lacoste, pique cotton, hingga drifit
                        performance. Cocok untuk kebutuhan corporate dan kegiatan outdoor.
                    </p>
                </div>

                <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    <button v-for="cat in categories" :key="cat"
                        class="btn btn-sm fw-semibold px-4 py-2 rounded-pill"
                        :class="activeCategory === cat ? 'btn-primary' : 'btn-outline-secondary'"
                        @click="activeCategory = cat">
                        {{ cat }}
                    </button>
                </div>

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

                <div class="text-center mt-5 pt-3">
                    <p class="text-secondary mb-3">Tertarik dengan produk kami?</p>
                    <a href="https://wa.me/6281234567890" target="_blank"
                        class="btn btn-primary fw-bold px-5 py-2 d-inline-flex align-items-center gap-2">
                        <i class="bi bi-whatsapp"></i>Pesan Sekarang
                    </a>
                </div>
            </div>
        </section>

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

        <section class="py-5" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
            <div class="container py-3 text-center">
                <h2 class="fw-bold text-white mb-3" style="font-size: clamp(1.75rem, 4vw, 2.5rem);">
                    Siap Order Polo Shirt Custom?
                </h2>
                <p class="mx-auto mb-4" style="color:rgba(255,255,255,.85); max-width:520px;">
                    Konsultasikan desain dan kebutuhan Anda sekarang. Gratis konsultasi, desain mockup, dan estimasi harga.
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

        <div v-if="modalItem" class="modal-backdrop-custom" @click.self="closeModal">
            <div class="modal-box rounded-4 overflow-hidden shadow-lg">
                <button class="btn-close-custom" @click="closeModal"><i class="bi bi-x-lg"></i></button>
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

const categories = ['Semua', 'Lacoste', 'Pique Cotton', 'Drifit', 'Corporate']

const items = [
  {
    title: 'Polo Shirt Corporate Event',
    desc: 'Polo shirt perusahaan untuk event kantor dan kegiatan promosi',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921091/8_zqelpe.png'
  },
  {
    title: 'Polo Shirt Staff Perusahaan',
    desc: 'Seragam polo kerja dengan desain profesional dan nyaman dipakai',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921091/6_foy0in.png'
  },
  {
    title: 'Polo Shirt Team Gathering',
    desc: 'Polo shirt custom untuk kegiatan gathering dan outing perusahaan',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921091/7_lkd2oo.png'
  },
  {
    title: 'Polo Shirt Corporate Premium',
    desc: 'Polo shirt eksklusif dengan tampilan elegan untuk identitas perusahaan',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921091/5_nahryj.png'
  },
  {
    title: 'Polo Shirt Seragam Kantor',
    desc: 'Polo shirt perusahaan dengan desain modern untuk aktivitas kerja',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921091/3_aomrth.png'
  },
  {
    title: 'Polo Shirt Branding Team',
    desc: 'Polo shirt custom untuk memperkuat identitas brand perusahaan',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921092/2_lzv5ms.png'
  },
  {
    title: 'Polo Shirt Team Building',
    desc: 'Seragam polo perusahaan untuk kegiatan team building dan outing',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921092/4_l9nduf.png'
  },
  {
    title: 'Polo Shirt Karyawan Premium',
    desc: 'Polo shirt dengan bahan nyaman dan tampilan profesional',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921092/1_id7re5.png'
  },
  {
    title: 'Polo Shirt Corporate Formal',
    desc: 'Desain polo shirt formal untuk seragam perusahaan modern',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921092/12_rvmdqq.png'
  },
  {
    title: 'Polo Shirt Event Perusahaan',
    desc: 'Polo shirt custom untuk kebutuhan event dan promosi perusahaan',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921093/11_cpra6i.png'
  },
  {
    title: 'Polo Shirt Crew Event',
    desc: 'Polo shirt identitas tim dan crew perusahaan saat acara berlangsung',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921094/10_kcmzih.png'
  },
  {
    title: 'Polo Shirt Seragam Tim',
    desc: 'Polo shirt seragam perusahaan dengan desain elegan dan eksklusif',
    tag: 'Corporate',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921094/9_zgwluj.png'
  },
]
const filteredItems = computed(() =>
    activeCategory.value === 'Semua' ? items : items.filter(i => i.tag === activeCategory.value)
)

const features = [
    { icon: 'bi-patch-check-fill', title: 'Jahitan Rapi', desc: 'Mesin jahit industri, overdeck presisi' },
    { icon: 'bi-rulers', title: 'Ukuran Lengkap', desc: 'XS hingga 5XL tersedia' },
    { icon: 'bi-truck', title: 'Pengiriman Cepat', desc: 'Estimasi 7–14 hari kerja' },
    { icon: 'bi-headset', title: 'Konsultasi Gratis', desc: 'Desain mockup gratis' },
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
.portfolio-img { transition: transform .4s ease; }
.portfolio-card:hover .portfolio-img { transform: scale(1.07); }
.portfolio-overlay {
    background: rgba(15, 23, 41, 0.55);
    opacity: 0;
    transition: opacity .3s ease;
}
.portfolio-card:hover .portfolio-overlay { opacity: 1; }
.modal-backdrop-custom {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.75); z-index: 9999;
    display: flex; align-items: center; justify-content: center; padding: 1rem;
}
.modal-box {
    background: #fff; width: 100%; max-width: 520px;
    position: relative; animation: modalIn .25s ease;
}
@keyframes modalIn {
    from { transform: scale(0.92); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
}
.btn-close-custom {
    position: absolute; top: .75rem; right: .75rem; z-index: 10;
    background: rgba(0,0,0,0.5); color: #fff; border: none; border-radius: 50%;
    width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 0.9rem; transition: background .2s;
}
.btn-close-custom:hover { background: rgba(0,0,0,0.8); }
</style>
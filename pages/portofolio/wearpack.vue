<template>
    <div>
        <Pagehero title="Portofolio Wearpack"
            description="Wearpack & pakaian kerja industri dengan standar keamanan tinggi — tahan lama, fungsional, dan dapat dikustomisasi sesuai kebutuhan perusahaan Anda."
            badge-text="Portofolio Produk" badge-icon="bi-grid-fill" breadcrumb-current="Wearpack" />

        <section class="py-5 bg-white">
            <div class="container py-4">

                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Katalog Kami
                    </span>
                    <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Koleksi Wearpack & Pakaian Kerja
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:560px;">
                        Dirancang untuk industri, konstruksi, pertambangan, dan pabrik. Tersedia dalam model coverall,
                        two-piece, dan rompi safety dengan material tahan lama.
                    </p>
                </div>

                <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    <button v-for="cat in categories" :key="cat" class="btn btn-sm fw-semibold px-4 py-2 rounded-pill"
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
                                <div
                                    class="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div class="text-center text-white px-3">
                                        <i class="bi bi-zoom-in fs-2 mb-2 d-block"></i>
                                        <div class="fw-semibold" style="font-size:0.85rem;">Lihat Detail</div>
                                    </div>
                                </div>
                                <span class="badge bg-warning text-dark position-absolute top-0 end-0 m-2 rounded-pill">
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
                    Siap Order Wearpack Custom?
                </h2>
                <p class="mx-auto mb-4" style="color:rgba(255,255,255,.85); max-width:520px;">
                    Kami melayani order dalam jumlah besar dengan harga kompetitif. Konsultasi gratis untuk kebutuhan
                    industri Anda.
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
                    <span class="badge bg-warning text-dark rounded-pill mb-2 d-inline-block">{{ modalItem.tag }}</span>
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

const categories = ['Semua', 'Coverall', 'Two-Piece', 'Safety Vest', 'Anti-Static']

const items = [
    {
        title: 'Wearpack Safety Tambang',
        desc: 'Wearpack safety perusahaan untuk kebutuhan industri tambang dan lapangan',
        tag: 'Tambang',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921835/9_czrwlb.png'
    },
    {
        title: 'Wearpack Teknisi Perusahaan',
        desc: 'Seragam kerja safety untuk teknisi dan tim maintenance perusahaan',
        tag: 'Teknisi',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921835/8_h9wgkk.png'
    },
    {
        title: 'Wearpack Safety Proyek',
        desc: 'Seragam safety proyek dengan desain profesional dan visibilitas tinggi',
        tag: 'Proyek',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921835/7_vojvwh.png'
    },
    {
        title: 'Wearpack Industri Premium',
        desc: 'Wearpack perusahaan untuk kebutuhan operasional industri modern',
        tag: 'Industri',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921836/6_cuyyqm.png'
    },
    {
        title: 'Wearpack Operasional Pabrik',
        desc: 'Seragam safety kerja untuk aktivitas produksi dan operasional pabrik',
        tag: 'Pabrik',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921836/5_t4yy0e.png'
    },
    {
        title: 'Wearpack Safety Perminyakan',
        desc: 'Wearpack kerja lapangan untuk industri minyak dan energi',
        tag: 'Perminyakan',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921836/4_vrba96.png'
    },
    {
        title: 'Wearpack Tim Konstruksi',
        desc: 'Seragam safety perusahaan untuk proyek konstruksi dan lapangan',
        tag: 'Konstruksi',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921837/3_cwnceb.png'
    },
    {
        title: 'Wearpack Clean Room Safety',
        desc: 'Wearpack kerja profesional untuk area industri dan lingkungan khusus',
        tag: 'Industri',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921838/2_rgcjkq.png'
    },
    {
        title: 'Wearpack Tim Welding',
        desc: 'Wearpack safety untuk aktivitas pengelasan dan pekerjaan lapangan',
        tag: 'Welding',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921841/10_fhg8j1.png'
    },
    {
        title: 'Wearpack Bengkel Perusahaan',
        desc: 'Seragam kerja workshop dan bengkel dengan desain profesional',
        tag: 'Workshop',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921840/11_ytnimw.png'
    },
    {
        title: 'Wearpack Safety Konstruksi',
        desc: 'Seragam safety proyek untuk pekerja konstruksi dan lapangan',
        tag: 'Konstruksi',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921836/4_vrba96.png'
    },
    {
        title: 'Wearpack Safety Corporate',
        desc: 'Wearpack perusahaan dengan desain eksklusif dan identitas profesional',
        tag: 'Corporate',
        img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778921839/12_rwz5gu.png'
    }
]

const filteredItems = computed(() =>
    activeCategory.value === 'Semua' ? items : items.filter(i => i.tag === activeCategory.value)
)

const features = [
    { icon: 'bi-shield-fill-check', title: 'Standar K3', desc: 'Memenuhi regulasi keselamatan kerja' },
    { icon: 'bi-tools', title: 'Multi-Pocket', desc: 'Desain fungsional untuk lapangan' },
    { icon: 'bi-truck', title: 'Kirim Cepat', desc: 'Armada logistik terpercaya' },
    { icon: 'bi-headset', title: 'Konsultasi Gratis', desc: 'Tim teknis siap membantu' },
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
    background: rgba(0, 0, 0, 0.75);
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
    from {
        transform: scale(0.92);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.btn-close-custom {
    position: absolute;
    top: .75rem;
    right: .75rem;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
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

.btn-close-custom:hover {
    background: rgba(0, 0, 0, 0.8);
}
</style>
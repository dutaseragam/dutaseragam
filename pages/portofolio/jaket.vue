<template>
    <div>
        <Pagehero title="Portofolio Jaket"
            description="Koleksi jaket custom berkualitas tinggi untuk kebutuhan komunitas, perusahaan, dan fashion brand. Nyaman, stylish, dan dapat disesuaikan sesuai kebutuhan Anda."
            badge-text="Portofolio Produk" badge-icon="bi-grid-fill" breadcrumb-current="Jaket" />

        <section class="py-5 bg-white">
            <div class="container py-4">

                <!-- HEADER -->
                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Katalog Kami
                    </span>
                    <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Koleksi Jaket Custom Premium
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:560px;">
                        Jaket bomber, hoodie, varsity, dan outdoor dengan material berkualitas tinggi serta bisa custom
                        sesuai kebutuhan.
                    </p>
                </div>

                <!-- FILTER -->
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    <button v-for="cat in categories" :key="cat" class="btn btn-sm fw-semibold px-4 py-2 rounded-pill"
                        :class="activeCategory === cat ? 'btn-primary' : 'btn-outline-secondary'"
                        @click="activeCategory = cat">
                        {{ cat }}
                    </button>
                </div>

                <!-- GRID -->
                <div class="row g-3">
                    <div v-for="(item, i) in filteredItems" :key="i" class="col-6 col-md-4 col-lg-3">
                        <div class="portfolio-card rounded-4 overflow-hidden border border-light h-100"
                            @click="openModal(item)">

                            <!-- IMAGE -->
                            <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
                                <img :src="item.img" :alt="item.code" class="w-100 h-100 portfolio-img"
                                    style="object-fit:cover;">

                                <div
                                    class="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div class="text-center text-white px-3">
                                        <i class="bi bi-zoom-in fs-2 mb-2 d-block"></i>
                                        <div class="fw-semibold" style="font-size:0.85rem;">Lihat Detail</div>
                                    </div>
                                </div>
                            </div>

                            <!-- TITLE: kode saja -->
                            <div class="p-2 text-center">
                                <div class="fw-semibold text-dark" style="font-size:0.82rem; letter-spacing:0.04em;">
                                    {{ item.code }}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <div class="text-center mt-5 pt-3">
                    <p class="text-secondary mb-3">Tertarik dengan jaket custom kami?</p>
                    <a href="https://wa.me/6281234567890" target="_blank"
                        class="btn btn-primary fw-bold px-5 py-2 d-inline-flex align-items-center gap-2">
                        <i class="bi bi-whatsapp"></i>Pesan Sekarang
                    </a>
                </div>

            </div>
        </section>

        <!-- FEATURES -->
        <section class="py-5" style="background:#f8fafc;">
            <div class="container py-3">
                <div class="row g-4 justify-content-center">
                    <div v-for="feat in features" :key="feat.title" class="col-6 col-md-3">
                        <div class="text-center p-3">
                            <div class="rounded-3 d-inline-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary mb-3"
                                style="width:52px;height:52px;font-size:1.3rem;">
                                <i :class="'bi ' + feat.icon"></i>
                            </div>
                            <div class="fw-bold mb-1" style="color:#1f2937; font-size:0.9rem;">
                                {{ feat.title }}
                            </div>
                            <div class="text-secondary" style="font-size:0.78rem;">
                                {{ feat.desc }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA SECTION -->
        <section class="py-5" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
            <div class="container py-3 text-center">
                <h2 class="fw-bold text-white mb-3" style="font-size: clamp(1.75rem, 4vw, 2.5rem);">
                    Siap Order Jaket Custom?
                </h2>
                <p class="mx-auto mb-4" style="color:rgba(255,255,255,.85); max-width:520px;">
                    Kami melayani produksi jaket custom dalam jumlah besar dengan kualitas premium dan harga kompetitif.
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

        <!-- MODAL -->
        <div v-if="modalItem" class="modal-backdrop-custom" @click.self="closeModal">
            <div class="modal-box rounded-4 overflow-hidden shadow-lg">
                <button class="btn-close-custom" @click="closeModal">
                    <i class="bi bi-x-lg"></i>
                </button>

                <img :src="modalItem.img" :alt="modalItem.code"
                    style="width:100%; max-height:70vh; object-fit:contain; background:#0f1729;">

                <div class="p-4 text-center">
                    <div class="fw-bold fs-5 text-dark" style="letter-spacing:0.05em;">
                        {{ modalItem.code }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('Semua')
const modalItem = ref(null)

const categories = ['Semua', 'Bomber', 'Hoodie', 'Varsity', 'Outdoor']

const items = [
    { code: 'BOM-001', tag: 'Bomber',  img: 'https://seragam-kantor.com/wp-content/uploads/2018/01/jaket-FA-009.jpg' },
    { code: 'HOD-001', tag: 'Hoodie',  img: 'https://seragam-kantor.com/wp-content/uploads/2015/06/JAKET-KANTOR-TG-056-400x536.jpg' },
    { code: 'OUT-001', tag: 'Outdoor', img: 'https://seragam-kantor.com/wp-content/uploads/2014/03/JAKET-KANTOR-TG-052-400x536.jpg' },
    { code: 'HOD-002', tag: 'Hoodie',  img: 'https://seragam-kantor.com/wp-content/uploads/2014/02/JAKET-KANTOR-TG-047-400x536.jpg' },
    { code: 'VAR-001', tag: 'Varsity', img: 'https://seragam-kantor.com/wp-content/uploads/2016/05/jaket-kantor-TG-042--400x536.jpg' },
    { code: 'OUT-002', tag: 'Outdoor', img: 'https://seragam-kantor.com/wp-content/uploads/2014/01/JAKET-KANTOR-TG-007-400x536.jpg' },
    { code: 'BOM-002', tag: 'Bomber',  img: 'https://seragam-kantor.com/wp-content/uploads/2013/09/JAKET-KANTOR-TG-008-400x536.jpg' },
    { code: 'HOD-003', tag: 'Hoodie',  img: 'https://seragam-kantor.com/wp-content/uploads/2014/01/JAKET-KANTOR-TG-006-400x536.jpg' },
    { code: 'OUT-003', tag: 'Outdoor', img: 'https://seragam-kantor.com/wp-content/uploads/2014/01/JAKET-KANTOR-TG-011-400x536.jpg' },
    { code: 'VAR-002', tag: 'Varsity', img: 'https://seragam-kantor.com/wp-content/uploads/2014/01/jaket-kantor-TG-031-.jpg' },
]

const filteredItems = computed(() =>
    activeCategory.value === 'Semua'
        ? items
        : items.filter(i => i.tag === activeCategory.value)
)

const features = [
    { icon: 'bi-shield-fill-check', title: 'Kualitas Premium', desc: 'Material terbaik untuk jaket tahan lama' },
    { icon: 'bi-palette-fill',      title: 'Custom Design',   desc: 'Bisa sesuai brand atau komunitas' },
    { icon: 'bi-truck',             title: 'Pengiriman Cepat', desc: 'Produksi & distribusi tepat waktu' },
    { icon: 'bi-headset',           title: 'Konsultasi Gratis', desc: 'Bantu dari desain sampai produksi' },
]

function openModal(item) {
    modalItem.value = item
}

function closeModal() {
    modalItem.value = null
}
</script>

<style scoped>
.portfolio-card {
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease;
}

.portfolio-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, .10) !important;
}

.portfolio-img {
    transition: transform .4s ease;
}

.portfolio-card:hover .portfolio-img {
    transform: scale(1.06);
}

.portfolio-overlay {
    background: rgba(15, 23, 41, 0.50);
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
    max-width: 480px;
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
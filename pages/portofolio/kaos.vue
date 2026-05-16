<template>
    <div>
        <Pagehero title="Portofolio Kaos"
            description="Koleksi kaos custom berkualitas tinggi — dari sablon manual hingga DTF printing, kami hadirkan warna tajam dan bahan nyaman untuk berbagai kebutuhan."
            badge-text="Portofolio Produk" badge-icon="bi-grid-fill" breadcrumb-current="Kaos" />

        <section class="py-5 bg-white">
            <div class="container py-4">

                <div class="text-center mb-5">
                    <span class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">
                        Katalog Kami
                    </span>
                    <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                        Hasil Produksi Kaos Terbaik
                    </h2>
                    <p class="text-secondary mx-auto" style="max-width:560px;">
                        Diproduksi dengan standar kualitas tinggi, bahan pilihan, dan proses finishing yang rapi.
                    </p>
                </div>

                <div class="row g-3">
                    <div v-for="(item, i) in items" :key="i" class="col-6 col-md-4 col-lg-3">
                        <div class="catalog-card rounded-3 overflow-hidden" @click="openModal(item)">
                            <div class="position-relative overflow-hidden" style="aspect-ratio:3/4;">
                                <img :src="item.img" :alt="item.title" class="w-100 h-100 catalog-img"
                                    style="object-fit:cover;">
                                <div class="catalog-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                                    <i class="bi bi-zoom-in text-white" style="font-size:1.5rem;"></i>
                                </div>
                            </div>
                            <div class="catalog-title px-2 py-2 text-center">
                                <span class="fw-semibold" style="font-size:0.78rem; color:#0f1729; letter-spacing:0.03em;">{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center mt-5 pt-2">
                    <a href="https://wa.me/6281234567890" target="_blank"
                        class="btn btn-primary fw-bold px-5 py-2 d-inline-flex align-items-center gap-2">
                        <i class="bi bi-whatsapp"></i>Pesan Sekarang
                    </a>
                </div>
            </div>
        </section>

        <section class="py-5" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
            <div class="container py-3 text-center">
                <h2 class="fw-bold text-white mb-3" style="font-size: clamp(1.75rem, 4vw, 2.5rem);">
                    Siap Order Kaos Custom?
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
                    style="width:100%; max-height:75vh; object-fit:contain; background:#0f1729;">
                <div class="p-3 text-center">
                    <span class="fw-semibold" style="font-size:0.85rem; color:#0f1729;">{{ modalItem.title }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const modalItem = ref(null)

const items = [
    {
        title: 'KS-001',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7MXYEMc7W1t7tphcqlKkBsz33DE9jggCKQ&s'
    },
    {
        title: 'KS-002',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHiYGqAI9DWMVnsTnzg4cshLyr9QKrTvIEA&s'
    },
    {
        title: 'KS-003',
        img: 'https://dcassetcdn.com/design_img/3637851/662414/662414_20456721_3637851_eda97d09_image.jpg'
    },
    {
        title: 'KS-004',
        img: 'https://dcassetcdn.com/design_img/3982311/520386/27583320/1vedg2hbdj1z2ayryr48rjwtjb_image.jpg'
    },
    {
        title: 'KS-005',
        img: 'https://dcassetcdn.com/design_img/3954966/15806/26670552/5wr18jamkr4tsczdhdv9j6n53b_image.png'
    },
    {
        title: 'KS-006',
        img: 'https://dcassetcdn.com/design_img/3950336/665024/26552103/y5smxzbyfa50mp1j1mdvwka0hj_image.jpg'
    },
    {
        title: 'KS-007',
        img: 'https://dcassetcdn.com/design_img/3943761/662414/26399418/3xyhxhh5k9swpg4fk65wkqd19b_image.jpg'
    },
]

function openModal(item) { modalItem.value = item }
function closeModal() { modalItem.value = null }
</script>

<style scoped>
.catalog-card {
    cursor: pointer;
    border: 1px solid #e5e7eb;
    transition: transform .2s ease, box-shadow .2s ease;
    background: #fff;
}

.catalog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, .10) !important;
    border-color: #d1d5db;
}

.catalog-img {
    transition: transform .35s ease;
}

.catalog-card:hover .catalog-img {
    transform: scale(1.05);
}

.catalog-overlay {
    background: rgba(15, 23, 41, 0.45);
    opacity: 0;
    transition: opacity .25s ease;
}

.catalog-card:hover .catalog-overlay {
    opacity: 1;
}

.catalog-title {
    border-top: 1px solid #f0f0f0;
    background: #fff;
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
    max-width: 460px;
    position: relative;
    animation: modalIn .2s ease;
}

@keyframes modalIn {
    from { transform: scale(0.94); opacity: 0; }
    to   { transform: scale(1);    opacity: 1; }
}

.btn-close-custom {
    position: absolute;
    top: .6rem;
    right: .6rem;
    z-index: 10;
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background .2s;
}

.btn-close-custom:hover {
    background: rgba(0, 0, 0, 0.75);
}
</style>
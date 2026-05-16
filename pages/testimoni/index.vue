<template>
    <div>
        <Pagehero title="Testimoni Duta Seragam"
            description="Lihat pengalaman dan ulasan pelanggan yang telah mempercayakan kebutuhan seragam, konveksi, dan produk custom kepada Duta Seragam."
            badge-text="Testimoni Pelanggan" badge-icon="bi-chat-quote-fill" breadcrumb-current="Testimoni" />
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Kata
                        Mereka</span>
                    <h2 class="fw-bold" style="color:#0f1729;">Testimoni Klien</h2>
                    <p class="text-secondary mx-auto" style="max-width:480px;">
                        Kepuasan klien adalah prioritas utama kami. Berikut pengalaman mereka bekerja sama dengan Duta
                        Seragam.
                    </p>
                </div>

                <div class="row g-4">
                    <div v-for="testi in testimonials" :key="testi.name" class="col-md-6 col-lg-4">
                        <div class="card border-0 shadow-sm rounded-4 h-100 p-4 client-card">
                            <!-- Bintang -->
                            <div class="d-flex gap-1 mb-3">
                                <i v-for="n in 5" :key="n" class="bi bi-star-fill text-warning"
                                    style="font-size:0.85rem;"></i>
                            </div>
                            <!-- Kutipan -->
                            <p class="text-secondary lh-lg mb-4" style="font-size:0.92rem;">"{{ testi.quote }}"</p>
                            <!-- Avatar -->
                            <div class="d-flex align-items-center gap-3 mt-auto">
                                <div class="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white flex-shrink-0"
                                    :style="{ width: '44px', height: '44px', background: testi.color, fontSize: '1rem' }">
                                    {{ initials(testi.name) }}
                                </div>
                                <div>
                                    <div class="fw-bold small" style="color:#0f1729;">{{ testi.name }}</div>
                                    <div class="text-secondary" style="font-size:0.78rem;">{{ testi.role }}</div>
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
import { ref } from 'vue'

const activeCategory = ref('all')



// ── Testimoni ──────────────────────────────────────────────────────────────
const testimonials = [
    {
        name: 'Budi Santoso',
        role: 'Kepala Sekolah – SMA Plus PGRI',
        quote: 'Kami sangat puas dengan kualitas seragam yang diberikan. Jahitan rapi, bahan nyaman, dan pengiriman tepat waktu sebelum tahun ajaran baru.',
        color: '#0f3460',
    },
    {
        name: 'Ibu Ratna Dewi',
        role: 'HRD Manager – PT Bank BJB',
        quote: 'Sudah 3 tahun bekerja sama dengan Duta Seragam untuk seragam pegawai kami. Konsisten bagus, responsif, dan harganya sangat kompetitif.',
        color: '#16a34a',
    },
    {
        name: 'Andi Firmansyah',
        role: 'Ketua Panitia – Event Nasional 2024',
        quote: 'Order 300 kaos panitia dalam waktu 2 minggu, semua selesai tepat waktu dengan kualitas sablon yang tahan lama. Sangat rekomendasikan!',
        color: '#d97706',
    },
    {
        name: 'Dra. Sulistyowati',
        role: 'Kepala Bidang – Dinas Pendidikan',
        quote: 'Pengadaan seragam PNS kami selalu kami percayakan ke Duta Seragam. Profesional, dokumen lengkap, dan bisa invoice resmi.',
        color: '#0369a1',
    },
    {
        name: 'Rizky Maulana',
        role: 'Owner – CV Maju Bersama',
        quote: 'Awalnya ragu karena order kecil, tapi dilayani dengan sangat baik. Kini tiap ada kebutuhan seragam karyawan, pasti ke sini.',
        color: '#7c3aed',
    },
    {
        name: 'Ns. Hendra, S.Kep',
        role: 'Koordinator – RSUD Cibabat',
        quote: 'Seragam perawat dan tenaga medis kami sudah dari Duta Seragam. Bahan anti-noda dan mudah dicuci — persis yang kami butuhkan.',
        color: '#dc2626',
    },
]



function initials(name) {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}
</script>
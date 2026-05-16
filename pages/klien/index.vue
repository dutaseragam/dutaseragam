<template>
    <div>
        <Pagehero title="Klien Duta Seragam"
            description="Dipercaya oleh berbagai perusahaan, instansi, sekolah, komunitas, dan organisasi di seluruh Indonesia."
            badge-text="Klien Perusahaan" badge-icon="bi-people-fill" breadcrumb-current="Klien" />

        <ProfilPage />
        <!-- ===== LOGO KLIEN ===== -->
        <section class="py-5 bg-light">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Dipercaya
                        Oleh</span>
                    <h2 class="fw-bold" style="color:#0f1729;">Klien yang Mempercayai Kami</h2>
                    <p class="text-secondary mx-auto" style="max-width:520px;">
                        Dari instansi pemerintah, sekolah, hingga perusahaan swasta nasional — kami telah melayani
                        ratusan klien di seluruh Indonesia.
                    </p>
                </div>

                <!-- Filter Kategori -->
                <div class="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    <button v-for="cat in categories" :key="cat.key" class="btn btn-sm fw-semibold px-3"
                        :class="activeCategory === cat.key ? 'btn-primary' : 'btn-outline-secondary'"
                        @click="activeCategory = cat.key">
                        {{ cat.label }}
                    </button>
                </div>

                <!-- Grid Logo -->
                <div class="row g-3">
                    <div v-for="client in filteredClients" :key="client.name" class="col-6 col-md-4 col-lg-3">
                        <div class="card border-0 shadow-sm rounded-4 h-100 client-card text-center p-3">
                            <!-- Placeholder logo dengan inisial -->
                            <div class="mx-auto mb-3 rounded-3 d-flex align-items-center justify-content-center fw-bold text-white"
                                :style="{ width: '72px', height: '72px', background: client.color, fontSize: '1.4rem' }">
                                {{ initials(client.name) }}
                            </div>
                            <div class="fw-semibold small mb-1" style="color:#0f1729; font-size:0.82rem;">{{ client.name
                            }}</div>
                            <span class="badge rounded-pill small" :class="categoryBadge(client.category)">
                                {{ categoryLabel(client.category) }}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- ===== TESTIMONI ===== -->
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

        <!-- ===== JENIS KLIEN ===== -->
        <section class="py-5 bg-light">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Segmen
                        Layanan</span>
                    <h2 class="fw-bold" style="color:#0f1729;">Kami Melayani Berbagai Segmen</h2>
                    <p class="text-secondary mx-auto" style="max-width:520px;">
                        Pengalaman kami mencakup berbagai sektor industri dan institusi dengan kebutuhan seragam yang
                        beragam.
                    </p>
                </div>
                <div class="row g-4">
                    <div v-for="seg in segments" :key="seg.title" class="col-md-6 col-lg-4">
                        <div class="card border-0 shadow-sm rounded-4 h-100 p-4 client-card">
                            <div class="rounded-3 d-flex align-items-center justify-content-center mb-3"
                                :style="{ width: '56px', height: '56px', background: seg.bg, color: seg.color, fontSize: '1.5rem' }">
                                <i :class="'bi ' + seg.icon"></i>
                            </div>
                            <h5 class="fw-bold mb-2" style="color:#0f1729; font-size:1rem;">{{ seg.title }}</h5>
                            <p class="text-secondary small lh-lg mb-3">{{ seg.desc }}</p>
                            <div class="d-flex flex-wrap gap-1">
                                <span v-for="tag in seg.tags" :key="tag"
                                    class="badge rounded-pill bg-light text-secondary border"
                                    style="font-size:0.72rem;">{{ tag }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'



// ── Filter Kategori ────────────────────────────────────────────────────────
const categories = [
    { key: 'all', label: 'Semua' },
    { key: 'pendidikan', label: 'Pendidikan' },
    { key: 'pemerintah', label: 'Pemerintahan' },
    { key: 'swasta', label: 'Perusahaan Swasta' },
    { key: 'komunitas', label: 'Komunitas / Event' },
]

const activeCategory = ref('all')

const filteredClients = computed(() =>
    activeCategory.value === 'all'
        ? clients
        : clients.filter(c => c.category === activeCategory.value)
)

// ── Daftar Klien ───────────────────────────────────────────────────────────
const clients = [
    { name: 'SD Negeri 1 Bandung', category: 'pendidikan', color: '#3b82f6' },
    { name: 'SMP Negeri 5 Bandung', category: 'pendidikan', color: '#6366f1' },
    { name: 'SMA Plus PGRI Cibinong', category: 'pendidikan', color: '#8b5cf6' },
    { name: 'Universitas Pasundan', category: 'pendidikan', color: '#0ea5e9' },
    { name: 'SMK Bina Karya', category: 'pendidikan', color: '#14b8a6' },
    { name: 'Dinas Pendidikan Kota Bandung', category: 'pemerintah', color: '#0f3460' },
    { name: 'BPBD Jawa Barat', category: 'pemerintah', color: '#1e40af' },
    { name: 'Kelurahan Cicendo', category: 'pemerintah', color: '#1d4ed8' },
    { name: 'RSUD Cibabat Cimahi', category: 'pemerintah', color: '#0369a1' },
    { name: 'PT Astra Honda Motor', category: 'swasta', color: '#dc2626' },
    { name: 'PT Telkom Indonesia', category: 'swasta', color: '#d97706' },
    { name: 'PT Bank BJB', category: 'swasta', color: '#16a34a' },
    { name: 'PT Indofood', category: 'swasta', color: '#ea580c' },
    { name: 'CV Maju Bersama', category: 'swasta', color: '#7c3aed' },
    { name: 'Karang Taruna Bandung', category: 'komunitas', color: '#0d9488' },
    { name: 'Event Organizer Kreatif', category: 'komunitas', color: '#db2777' },
]

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

// ── Segmen ─────────────────────────────────────────────────────────────────
const segments = [
    {
        icon: 'bi-mortarboard-fill',
        title: 'Institusi Pendidikan',
        desc: 'Seragam sekolah, baju olahraga, jas almamater, hingga baju batik untuk SD, SMP, SMA, hingga perguruan tinggi.',
        bg: '#eff6ff', color: '#1d4ed8',
        tags: ['Sekolah Negeri', 'Sekolah Swasta', 'Universitas', 'Pesantren'],
    },
    {
        icon: 'bi-building-fill',
        title: 'Instansi Pemerintah',
        desc: 'Pengadaan seragam ASN, dinas, puskesmas, rumah sakit daerah dengan dokumen resmi dan harga pengadaan.',
        bg: '#f0fdf4', color: '#15803d',
        tags: ['ASN / PNS', 'Puskesmas', 'RSUD', 'Dinas Daerah'],
    },
    {
        icon: 'bi-briefcase-fill',
        title: 'Perusahaan Swasta',
        desc: 'Seragam karyawan, rompi, polo shirt berbordir logo perusahaan untuk berbagai skala bisnis.',
        bg: '#fff7ed', color: '#c2410c',
        tags: ['UMKM', 'Manufaktur', 'Perbankan', 'Retail'],
    },
    {
        icon: 'bi-people-fill',
        title: 'Komunitas & Organisasi',
        desc: 'Kaos komunitas, jaket angkatan, seragam karang taruna, dan kebutuhan organisasi non-profit.',
        bg: '#fdf4ff', color: '#7e22ce',
        tags: ['Komunitas', 'Karang Taruna', 'Ormas', 'Alumni'],
    },
    {
        icon: 'bi-calendar-event-fill',
        title: 'Event & Kepanitiaan',
        desc: 'Kaos dan seragam panitia untuk acara seminar, festival, olahraga, dan event korporat skala besar.',
        bg: '#fff1f2', color: '#be123c',
        tags: ['Seminar', 'Festival', 'Olahraga', 'Korporat'],
    },
    {
        icon: 'bi-heart-fill',
        title: 'Yayasan & Sosial',
        desc: 'Melayani yayasan, lembaga sosial, dan organisasi kemanusiaan dengan harga khusus dan proses mudah.',
        bg: '#f0fdfa', color: '#0f766e',
        tags: ['Yayasan', 'LSM', 'Kemanusiaan', 'Masjid / Gereja'],
    },
]


function initials(name) {
    return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
}

function categoryLabel(key) {
    return categories.find(c => c.key === key)?.label ?? key
}

function categoryBadge(key) {
    const map = {
        pendidikan: 'bg-primary bg-opacity-10 text-primary',
        pemerintah: 'bg-success bg-opacity-10 text-success',
        swasta: 'bg-warning bg-opacity-10 text-warning',
        komunitas: 'bg-danger bg-opacity-10 text-danger',
    }
    return map[key] ?? 'bg-secondary bg-opacity-10 text-secondary'
}
</script>

<style scoped>
/* Satu-satunya custom CSS: hover lift — tidak tersedia di Bootstrap */
.client-card {
    transition: transform .25s ease, box-shadow .25s ease;
}

.client-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 36px rgba(0, 0, 0, .11) !important;
}
</style>
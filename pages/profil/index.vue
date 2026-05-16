<template>
    <div>
        <Pagehero
        title="Profil Duta Seragam"
        description="Konveksi seragam modern, profesional..."
        badge-text="Tentang Perusahaan"
        badge-icon="bi-building-fill"
        breadcrumb-current="Profil Perusahaan"
        />
<ProfilPage />
        <section class="py-5">
            <div class="container py-4">
                <div class="row align-items-center g-5">

                    <!-- Gambar -->
                    <div class="col-lg-6">
                        <div class="position-relative pe-4 pb-4">
                            <img src="~assets/img/hero-1.png"
                                alt="Workshop Duta Seragam" class="img-fluid rounded-3 shadow-lg w-100"
                                style="height: 400px; object-fit: cover;">
                            <!-- Gambar kecil overlay -->
                            <img src="https://i.pinimg.com/1200x/12/15/61/1215613ad72028262a6d50e76efa49f6.jpg"
                                alt="Tim Produksi"
                                class="position-absolute bottom-0 end-0 rounded-3 border border-3 border-white shadow d-none d-md-block"
                                style="width: 48%; height: 200px; object-fit: cover;">
                            <!-- Badge -->
                            <div
                                class="position-absolute top-0 end-0 translate-middle-x d-flex align-items-center gap-2 bg-warning text-white rounded-3 p-3 shadow">
                                <i class="bi bi-award-fill fs-4"></i>
                                <div>
                                    <div class="fw-bold fs-5 lh-1">10+</div>
                                    <div class="small opacity-90">Tahun Berpengalaman</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Teks -->
                    <div class="col-lg-6">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Mengapa
                            Kami?</span>
                        <h2 class="fw-bold mb-3" style="font-size: clamp(1.5rem, 3vw, 2.2rem); color: #0f1729;">
                            Duta Seragam – Konveksi Profesional Bandung
                        </h2>
                        <p class="text-secondary lh-lg">
                            Duta Seragam berdiri sejak tahun 2015, dengan bidang usaha manufaktur produk tekstil dan
                            garmen terutama pakaian seragam. Dengan didukung SDM yang kompeten dan berpengalaman, serta
                            sistem produksi yang modern dan terintegrasi dengan teknologi terkini.
                        </p>
                        <p class="text-secondary lh-lg">
                            Posisi kami di jantung Kota Bandung yang merupakan sentra garmen di Jawa Barat, memungkinkan
                            kami memberikan pelayanan terbaik dengan kualitas produk yang prima dan tepat waktu.
                        </p>
                        <ul class="list-unstyled mt-4">
                            <li v-for="item in whyUs" :key="item"
                                class="d-flex align-items-center gap-2 py-1 text-body">
                                <i class="bi bi-check-circle-fill text-success"></i>{{ item }}
                            </li>
                        </ul>
                        <a href="/kontak"
                            class="btn btn-primary fw-bold px-4 mt-4 d-inline-flex align-items-center gap-2">
                            Konsultasi Gratis <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>

                </div>
            </div>
        </section>

        <!-- ===== VISI MISI ===== -->
        <section class="py-5 bg-light">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Arah
                        Perusahaan</span>
                    <h2 class="fw-bold" style="color: #0f1729;">Visi &amp; Misi</h2>
                    <p class="text-secondary mx-auto" style="max-width: 520px;">
                        Landasan nilai dan tujuan besar yang mengarahkan setiap langkah Duta Seragam.
                    </p>
                </div>

                <div class="row g-4 align-items-stretch">

                    <!-- VISI -->
                    <div class="col-lg-5">
                        <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden"
                            style="border-top: 4px solid #0f3460 !important;">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 mb-4">
                                    <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary"
                                        style="width:52px;height:52px;font-size:1.5rem;">
                                        <i class="bi bi-eye-fill"></i>
                                    </div>
                                    <h3 class="fw-bold mb-0 fs-4" style="color:#0f1729;">Visi</h3>
                                </div>
                                <p class="text-secondary lh-lg fst-italic">
                                    Menjadi perusahaan konveksi seragam yang modern, profesional, dan kredibel — menjadi
                                    pilihan utama pelanggan di seluruh Indonesia.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- MISI -->
                    <div class="col-lg-7">
                        <div class="card h-100 shadow-sm border-0 rounded-4 overflow-hidden"
                            style="border-top: 4px solid #f59e0b !important;">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 mb-4">
                                    <div class="rounded-3 d-flex align-items-center justify-content-center bg-warning bg-opacity-10 text-warning"
                                        style="width:52px;height:52px;font-size:1.5rem;">
                                        <i class="bi bi-bullseye"></i>
                                    </div>
                                    <h3 class="fw-bold mb-0 fs-4" style="color:#0f1729;">Misi</h3>
                                </div>
                                <ul class="list-unstyled d-flex flex-column gap-3 mb-0">
                                    <li v-for="(m, i) in misi" :key="i" class="d-flex gap-3 align-items-start">
                                        <span class="badge bg-primary rounded-3 px-2 py-2 fs-xs fw-bold flex-shrink-0"
                                            style="font-size:0.72rem; min-width:32px;">
                                            {{ String(i + 1).padStart(2, '0') }}
                                        </span>
                                        <p class="text-secondary mb-0 lh-lg small">{{ m }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ===== BUDAYA ===== -->
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Budaya
                        Kami</span>
                    <h2 class="fw-bold" style="color:#0f1729;">Budaya Profesional Kami</h2>
                    <p class="text-secondary mx-auto" style="max-width:520px;">
                        Dari desain, pemilihan material, hingga kontrol kualitas — semua dikerjakan dengan standar
                        tinggi.
                    </p>
                </div>
                <div class="row g-4">
                    <div v-for="culture in cultures" :key="culture.title" class="col-md-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm rounded-4 text-center p-4 culture-card">
                            <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary mx-auto mb-3"
                                style="width:64px;height:64px;font-size:1.75rem;">
                                <i :class="'bi ' + culture.icon"></i>
                            </div>
                            <h5 class="fw-bold mb-2" style="color:#0f1729; font-size:1rem;">{{ culture.title }}</h5>
                            <p class="text-secondary small mb-0 lh-lg">{{ culture.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ===== TIM ===== -->
        <section class="py-5 bg-light">
            <div class="container py-4">
                <div class="text-center mb-5">
                    <span
                        class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Sumber
                        Daya Manusia</span>
                    <h2 class="fw-bold" style="color:#0f1729;">Tim Kami</h2>
                    <p class="text-secondary mx-auto" style="max-width:520px;">
                        Didukung oleh profesional berpengalaman di bidang garmen, desain, dan manajemen produksi.
                    </p>
                </div>
                <div class="row g-4 justify-content-center">
                    <div v-for="member in team" :key="member.name" class="col-sm-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm rounded-4 text-center p-4 culture-card">
                            <div class="rounded-4 d-flex align-items-center justify-content-center mx-auto mb-3 text-white"
                                style="width:80px;height:80px;font-size:2rem;background:linear-gradient(135deg,#0f3460,#1a4a80);">
                                <i :class="'bi ' + member.icon"></i>
                            </div>
                            <h5 class="fw-bold mb-1" style="color:#0f1729; font-size:1rem;">{{ member.name }}</h5>
                            <p class="text-warning fw-bold mb-2"
                                style="font-size:0.75rem; letter-spacing:0.06em; text-transform:uppercase;">{{
                                member.role }}</p>
                            <p class="text-secondary small mb-0 lh-lg">{{ member.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
const whyUs = [
    'Dikerjakan oleh SDM ahli dan terampil',
    'Produk sesuai spek dan desain pelanggan',
    'Menggunakan material terbaik',
    'Harga yang terjangkau dan kompetitif',
    'Garansi ketepatan waktu pengiriman',
    'Gratis ongkos kirim (syarat berlaku)',
]

const misi = [
    'Berorientasi kepada pelanggan dengan memberikan solusi terbaik serta pelayanan yang ramah, bersahabat, dan solutif.',
    'Ikut berperan menciptakan lapangan pekerjaan bagi masyarakat sekitar.',
    'Meningkatkan kompetensi dan kesejahteraan karyawan melalui pengembangan sumber daya manusia yang berkelanjutan.',
    'Menerapkan sistem manajemen kerja yang profesional dengan dibantu teknologi informasi terkini demi tercapainya peningkatan kualitas produk dan layanan.',
]

const cultures = [
    { icon: 'bi-pencil-square', title: 'Desain Profesional', desc: 'Tim desainer berpengalaman siap membantu mewujudkan seragam impian Anda.' },
    { icon: 'bi-gem', title: 'Material Terbaik', desc: 'Pemilihan bahan berkualitas tinggi untuk kenyamanan dan ketahanan jangka panjang.' },
    { icon: 'bi-gear-wide-connected', title: 'Produksi Modern', desc: 'Workshop dilengkapi mesin modern dengan kapasitas produksi besar dan efisien.' },
    { icon: 'bi-shield-check', title: 'Kontrol Kualitas', desc: 'Setiap produk melalui QC ketat sebelum dikirimkan kepada klien.' },
]

const team = [
    { name: 'Tim Desain', role: 'Creative & Design', icon: 'bi-palette-fill', desc: 'Merancang visual dan pola seragam sesuai kebutuhan dan identitas klien.' },
    { name: 'Tim Produksi', role: 'Manufacturing', icon: 'bi-scissors', desc: 'Operator mesin berpengalaman memastikan setiap jahitan rapi dan presisi.' },
    { name: 'Tim QC', role: 'Quality Control', icon: 'bi-patch-check-fill', desc: 'Mengecek setiap unit sebelum packing untuk memastikan standar kualitas terpenuhi.' },
    { name: 'Tim Pengiriman', role: 'Logistics', icon: 'bi-truck', desc: 'Memastikan produk tiba tepat waktu ke seluruh penjuru Indonesia.' },
]

const lokasiInfo = [
    { icon: 'bi-geo-alt-fill', label: 'Alamat', value: 'Jl. Konveksi No. 12, Bandung, Jawa Barat' },
    { icon: 'bi-telephone-fill', label: 'Telepon', value: '+62 812-3456-7890' },
    { icon: 'bi-envelope-fill', label: 'Email', value: 'info@dutaseragam.com' },
    { icon: 'bi-clock-fill', label: 'Jam Operasional', value: 'Senin – Sabtu, 08.00 – 17.00 WIB' },
]
</script>

<style scoped>
/* Hanya hover effect yang tidak bisa dilakukan Bootstrap */
.culture-card {
    transition: transform .25s ease, box-shadow .25s ease;
}

.culture-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, .12) !important;
}
</style>
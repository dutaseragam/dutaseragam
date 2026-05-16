<template>
    <div>
        <Pagehero title="Kontak Duta Seragam"
            description="Hubungi kami untuk konsultasi, pemesanan seragam, atau informasi lebih lanjut terkait kebutuhan Anda."
            badge-text="Kontak Perusahaan" badge-icon="bi-telephone-fill" breadcrumb-current="Kontak" />

        <ProfilPage />
        <section class="py-5 bg-white">
            <div class="container py-4">
                <div class="row align-items-center g-5">

                    <div class="col-lg-6">
                        <span
                            class="badge rounded-pill text-warning bg-warning bg-opacity-10 fw-semibold px-3 py-2 mb-3">Hubungi
                            Kami</span>
                        <h2 class="fw-bold mb-3" style="color:#0f1729; font-size: clamp(1.5rem, 3vw, 2.2rem);">
                            Berlokasi di Tamansari Tasikmalaya
                        </h2>
                        <p class="text-secondary lh-lg mb-4">
                            Kami beroperasi di Tasikmalaya — sentra industri garmen terbesar di Jawa Barat. Lokasi
                            strategis ini memungkinkan kami mengakses bahan baku terbaik dan melayani klien dari seluruh
                            Indonesia.
                        </p>
                        <div class="d-flex flex-column gap-3">
                            <div v-for="info in lokasiInfo" :key="info.label" class="d-flex align-items-start gap-3">
                                <div class="rounded-3 d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary flex-shrink-0"
                                    style="width:44px;height:44px;font-size:1.1rem;">
                                    <i :class="'bi ' + info.icon"></i>
                                </div>
                                <div>
                                    <div class="text-uppercase fw-semibold text-secondary"
                                        style="font-size:0.72rem; letter-spacing:0.05em;">{{ info.label }}</div>
                                    <div class="fw-semibold" style="color:#1f2937; font-size:0.95rem;">{{ info.value }}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://wa.me/6281234567890" target="_blank"
                            class="btn btn-primary fw-bold px-4 mt-4 d-inline-flex align-items-center gap-2">
                            <i class="bi bi-whatsapp"></i>Hubungi Kami
                        </a>
                    </div>

                    <div class="col-lg-6">
                        <div class="rounded-4 overflow-hidden shadow-lg border border-3 border-white">
                            <iframe src="https://www.google.com/maps?q=Tamansari%20Tasikmalaya&output=embed"
                                width="100%" height="380" style="border:0; display:block;" allowfullscreen
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ===== CTA ===== -->
        <section class="py-5" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">
            <div class="container py-3 text-center">
                <h2 class="fw-bold text-white mb-3" style="font-size: clamp(1.75rem, 4vw, 2.5rem);">
                    Siap Bekerja Sama dengan Kami?
                </h2>
                <p class="mx-auto mb-4" style="color:rgba(255,255,255,.85); max-width:520px;">
                    Konsultasikan kebutuhan seragam Anda dengan tim kami sekarang. Gratis konsultasi, desain, dan
                    estimasi harga.
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
    </div>

</template>
<script setup>

const lokasiInfo = [
    { icon: 'bi-geo-alt-fill', label: 'Alamat', value: 'Tamansari, Kota Tasikmalaya, Jawa Barat' },
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
<template>
  <div>
    <Pagehero
      title="Cara Pemesanan"
      description="Proses pemesanan di Duta Seragam mudah, cepat, dan transparan. Mulai dari konsultasi desain hingga produk sampai ke tangan Anda."
      badge-text="Panduan"
      badge-icon="bi-cart-check-fill"
      breadcrumb-current="Cara Pesan"
    />

    <section class="py-5 bg-light">
      <div class="container py-4">
        <div class="text-center mb-5">
          <span class="badge rounded-pill bg-warning bg-opacity-10 text-warning px-3 py-2 fw-semibold mb-3">
            Petunjuk Pemesanan
          </span>

          <h2 class="fw-bold mb-3" style="color:#0B2E59;">
            Langkah Mudah Pemesanan Duta Seragam
          </h2>

          <p class="text-secondary mx-auto" style="max-width:700px;">
            Kami membuat proses pemesanan menjadi lebih mudah agar Anda nyaman
            mulai dari konsultasi desain hingga produk selesai diproduksi.
          </p>
        </div>

        <div class="row g-4">
          <div
            v-for="item in langkahPesan"
            :key="item.step"
            class="col-lg-4"
          >
            <div class="card border-0 shadow-sm rounded-4 h-100 step-card">
              <div class="card-body p-4">

                <div class="d-flex align-items-center gap-3 mb-4">
                  <div
                    class="step-number rounded-circle text-white fw-bold d-flex align-items-center justify-content-center">
                    {{ item.step }}
                  </div>

                  <div>
                    <small class="text-warning fw-semibold">
                      STEP {{ item.step }}
                    </small>

                    <h5 class="fw-bold mb-0" style="color:#0B2E59;">
                      {{ item.title }}
                    </h5>
                  </div>
                </div>

                <div
                  class="icon-box mb-4 d-flex align-items-center justify-content-center rounded-4">
                  <i :class="'bi '+item.icon"></i>
                </div>

                <p class="text-secondary mb-0 lh-lg">
                  {{ item.desc }}
                </p>

              </div>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div class="rounded-4 bg-white p-4 shadow-sm border">
            <div class="row align-items-center">

              <div class="col-lg-8">
                <h4 class="fw-bold mb-2" style="color:#0B2E59;">
                  Butuh Bantuan Konsultasi?
                </h4>

                <p class="text-secondary mb-lg-0">
                  Tim Duta Seragam siap membantu kebutuhan seragam, merchandise,
                  dan kebutuhan custom Anda.
                </p>
              </div>

              <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                <a
                  href="https://wa.me/628112332778"
                  target="_blank"
                  class="btn btn-success px-4 py-3 fw-semibold rounded-pill"
                >
                  <i class="bi bi-whatsapp me-2"></i>
                  Hubungi Sekarang
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const langkahPesan=[
{
step:'1',
title:'Konsultasi Desain',
icon:'bi-chat-dots-fill',
desc:'Silahkan konsultasikan desain pakaian yang ingin Anda pesan kepada tim Duta Seragam melalui email atau WhatsApp. Sampaikan informasi detail seperti bahan, bordir/sablon, jumlah pesanan, dan target waktu pengerjaan agar kami dapat menghitung harga serta estimasi produksi.'
},
{
step:'2',
title:'Form Approval',
icon:'bi-file-earmark-check-fill',
desc:'Setelah desain, bahan, aplikasi, harga dan estimasi produksi disetujui, kami akan mengirimkan form approval beserta desain final melalui email atau WhatsApp sebagai bukti persetujuan pemesanan.'
},
{
step:'3',
title:'Proses Produksi',
icon:'bi-gear-fill',
desc:'Produksi dimulai setelah form approval disetujui dan uang muka 60% diterima. Selama proses berjalan, Anda dapat memantau progres produksi secara transparan hingga produk selesai dan dikirim.'
}
]

useSeoMeta({
title:'Cara Pemesanan | Duta Seragam',
description:'Panduan cara pemesanan seragam di Duta Seragam mulai konsultasi desain, approval hingga proses produksi.',
ogTitle:'Cara Pemesanan Duta Seragam',
ogDescription:'Langkah mudah pemesanan Duta Seragam.',
})
</script>

<style scoped>
.step-card{
transition:.35s;
}

.step-card:hover{
transform:translateY(-8px);
box-shadow:0 20px 40px rgba(0,0,0,.08)!important;
}

.step-number{
width:55px;
height:55px;
background:#0B2E59;
font-size:1.2rem;
}

.icon-box{
height:90px;
background:#f8f9fa;
font-size:2rem;
color:#0B2E59;
}

.card{
overflow:hidden;
}
</style>
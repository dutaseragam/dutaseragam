<template>
  <div>

    <!-- ===== HERO SECTION ===== -->
    <section class="hero-section position-relative overflow-hidden">
      <div class="hero-slider">
        <div v-for="(slide, i) in heroSlides" :key="i" class="hero-slide" :class="{ active: currentSlide === i }"
          :style="{ backgroundImage: `url(${slide.bg})` }">
          <div class="hero-overlay"></div>
        </div>
      </div>
      <div class="container position-relative z-2 py-5 text-white">
        <div class="row align-items-center" style="min-height: 520px;">
          <div class="col-lg-7">
            <p class="hero-badge mb-3">
              <i class="bi bi-patch-check-fill me-2"></i>Vendor Seragam Terpercaya di Tasikmalaya
            </p>
            <h1 class="hero-title mb-4">
              Saatnya Seragam Anda <span class="hero-highlight">Diproduksi</span> Oleh Ahlinya
            </h1>
            <p class="hero-desc mb-4">
              Ratusan klien dan ribuan proyek pengadaan seragam telah berhasil kami layani. Kami siap memproduksi kaos,
              polo shirt, kemeja, wearpack, dan jaket seragam berkualitas tinggi untuk perusahaan, institusi, dan
              komunitas Anda.
            </p>
            <div class="d-flex flex-wrap gap-3">
              <a href="/kontak" class="btn btn-hero-primary">
                <i class="bi bi-whatsapp me-2"></i>Konsultasi Gratis
              </a>
              <a href="/portofolio" class="btn btn-hero-outline">
                <i class="bi bi-images me-2"></i>Lihat Portofolio
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- Slider Dots -->
      <div class="hero-dots">
        <button v-for="(_, i) in heroSlides" :key="i" class="hero-dot" :class="{ active: currentSlide === i }"
          @click="currentSlide = i"></button>
      </div>
    </section>

    <!-- ===== STATS BAR ===== -->
    <section class="stats-bar">
      <div class="container">
        <div class="row g-0">
          <div v-for="stat in stats" :key="stat.label" class="col-6 col-md-3">
            <div class="stat-item text-center py-4">
              <div class="stat-number">{{ stat.number }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== TENTANG KAMI ===== -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <div class="about-image-grid">
              <div class="about-img-main">
                <img src="~assets/img/hero-1.png" alt="Workshop Duta Seragam" class="img-fluid rounded-3">
              </div>
              <div class="about-img-secondary">
                <img src="https://i.pinimg.com/1200x/12/15/61/1215613ad72028262a6d50e76efa49f6.jpg" alt="Tim Produksi"
                  class="img-fluid rounded-3">
              </div>
              <div class="about-badge-card">
                <div class="about-badge-icon"><i class="bi bi-award-fill"></i></div>
                <div>
                  <div class="about-badge-num">10+</div>
                  <div class="about-badge-text">Tahun Berpengalaman</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="section-label">Tentang Kami</div>
            <h2 class="section-title">Duta Seragam – Konveksi Profesional Tasikmalaya</h2>
            <p class="section-body">
              Duta Seragam adalah perusahaan konveksi seragam modern dan profesional yang berbasis di Tasikmalaya. Kami
              membantu Anda memproduksi berbagai jenis seragam seperti kemeja, kaos, polo shirt, jaket, dan wearpack
              untuk kebutuhan kantor, branding, promosi, maupun event perusahaan, institusi, organisasi, atau komunitas
              Anda.
            </p>
            <p class="section-body">
              Komitmen kami adalah memberikan pelayanan terbaik dengan mengutamakan kualitas bahan, ketepatan waktu
              produksi, dan kepuasan klien. Kami siap menjadi mitra terpercaya Anda.
            </p>
            <ul class="about-checklist mt-4">
              <li v-for="item in whyUs" :key="item">
                <i class="bi bi-check-circle-fill me-2"></i>{{ item }}
              </li>
            </ul>
            <a href="/profil" class="btn btn-primary-ds mt-4">
              Pelajari Lebih Lanjut <i class="bi bi-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== BUDAYA PROFESIONAL ===== -->
    <section class="section-padding bg-light-ds ">
      <div class="container ">
        <div class="text-center mb-5">
          <div class="section-label">Budaya Kami</div>
          <h2 class="section-title">Budaya Profesional Kami</h2>
          <p class="section-subtitle mx-auto">
            Dari desain, pemilihan material, hingga kontrol kualitas — semua dikerjakan dengan standar tinggi.
          </p>
        </div>
        <div class="row g-4">
          <div v-for="culture in cultures" :key="culture.title" class="col-md-6 col-lg-3">
            <div class="culture-card h-100">
              <div class="culture-icon mb-3">
                <i :class="'bi ' + culture.icon"></i>
              </div>
              <h5 class="culture-title">{{ culture.title }}</h5>
              <p class="culture-desc">{{ culture.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="d-flex flex-column align-items-center gap-3 my-5">
      <div class="section-label ">Our Factory</div>
      <h2 class="section-title text-center">Fasilitas Produksi</h2>
    </div>
    <div class="row g-3 mb-5 px-5">
      <div class="col-md-4">
        <div class="rounded-4 overflow-hidden shadow factory-photo-wrap" style="height:230px;">
          <img src="https://i.pinimg.com/736x/9d/5a/6b/9d5a6ba6b5f277db00fe3c2ead56435d.jpg" alt="Kontrol Kualitas"
            class="w-100 h-100 factory-img" style="object-fit:cover;">
        </div>
      </div>
      <div class="col-md-4 ">
        <div class="rounded-4 overflow-hidden shadow factory-photo-wrap" style="height:230px;">
          <img src="https://i.pinimg.com/736x/e9/38/af/e938af3adba834e2efe387486e25c99f.jpg" alt="Mesin Produksi"
            class="w-100 h-100 factory-img" style="object-fit:cover;">
        </div>
      </div>
      <div class="col-md-4">
        <div class="rounded-4 overflow-hidden shadow factory-photo-wrap" style="height:230px;">
          <img src="https://i.pinimg.com/1200x/29/02/f5/2902f5b4278d704a1af641147509896f.jpg" alt="Gudang & Packing"
            class="w-100 h-100 factory-img" style="object-fit:cover;">
        </div>
      </div>
    </div>

    <!-- ===== LAYANAN ===== -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-label">Layanan Kami</div>
          <h2 class="section-title">Kami Melayani Pembuatan</h2>
          <p class="section-subtitle mx-auto">
            Produk-produk seragam berkualitas tinggi untuk berbagai kebutuhan bisnis dan organisasi Anda.
          </p>
        </div>
        <div class="row g-4">
          <div v-for="service in services" :key="service.title" class="col-sm-6 col-lg-4">
            <div class="service-card h-100">
              <div class="service-img-wrap">
                <img :src="service.img" :alt="service.title" class="service-img">
                <div class="service-overlay">
                  <a :href="service.link" class="btn btn-light btn-sm rounded-pill px-4">
                    Lihat Portofolio <i class="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div class="service-body">
                <div class="service-icon-wrap mb-2">
                  <i :class="'bi ' + service.icon"></i>
                </div>
                <h5 class="service-title">{{ service.title }}</h5>
                <p class="service-desc">{{ service.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== KAPASITAS PRODUKSI ===== -->
    <section class="section-padding kapasitas-section">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-label text-white-50">Kapasitas</div>
          <h2 class="section-title text-white">Kapasitas Produksi Per Bulan</h2>
          <p class="section-subtitle mx-auto text-white-50">
            Workshop lengkap dan modern dengan kapasitas produksi besar dan memadai.
          </p>
        </div>
        <div class="row g-4 justify-content-center">
          <div v-for="kap in kapasitas" :key="kap.label" class="col-6 col-md-3">
            <div class="kap-card text-center">
              <div class="kap-icon"><i :class="'bi ' + kap.icon"></i></div>
              <div class="kap-number">{{ kap.number }}</div>
              <div class="kap-label">{{ kap.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== PORTOFOLIO ===== -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-label">Hasil Karya</div>
          <h2 class="section-title">Portofolio Pakaian Seragam</h2>
          <p class="section-subtitle mx-auto">
            Lihat selengkapnya dengan klik pada gambar
          </p>
        </div>
        <!-- Filter Tabs -->
        <div class="portfolio-tabs d-flex justify-content-center flex-wrap gap-2 mb-4">
          <button v-for="tab in portfolioTabs" :key="tab.key" class="portfolio-tab-btn"
            :class="{ active: activeTab === tab.key }" @click="activeTab = tab.key">
            {{ tab.label }}
          </button>
        </div>
        <!-- Grid -->
        <div class="portfolio-grid">
          <a v-for="item in filteredPortfolio" :key="item.id" :href="item.link" class="portfolio-item">
            <img :src="item.img" :alt="item.title" class="portfolio-img">
            <div class="portfolio-hover">
              <span class="portfolio-cat">{{ item.cat }}</span>
              <span class="portfolio-title-hover">{{ item.title }}</span>
              <i class="bi bi-zoom-in portfolio-zoom"></i>
            </div>
          </a>
        </div>
        <div class="text-center mt-5">
          <a href="/portofolio" class="btn btn-primary-ds">
            Lihat Semua Portofolio <i class="bi bi-arrow-right ms-2"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- ===== KLIEN ===== -->
    <section class="section-padding bg-light-ds">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-label">Kepercayaan Klien</div>
          <h2 class="section-title">Dipercaya Oleh Ratusan Klien</h2>
          <p class="section-subtitle mx-auto">
            Sejak 2015, Duta Seragam telah menyelesaikan ribuan proyek pengadaan seragam dari berbagai perusahaan dan
            institusi.
          </p>
        </div>

        <!-- Row 1 — kiri ke kanan -->
        <div class="klien-marquee-wrap mb-3">
          <div class="klien-marquee">
            <div v-for="(k, i) in [...klienLogos, ...klienLogos]" :key="'r1-' + i" class="klien-logo-item">
              <div class="klien-logo-box">
                <img :src="k.logo" :alt="k.name" class="klien-logo-img">
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2 — kanan ke kiri -->
        <div class="klien-marquee-wrap">
          <div class="klien-marquee klien-marquee-reverse">
            <div v-for="(k, i) in [...klienLogos2, ...klienLogos2]" :key="'r2-' + i" class="klien-logo-item">
              <div class="klien-logo-box">
                <img :src="k.logo" :alt="k.name" class="klien-logo-img">
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ===== TESTIMONI ===== -->
    <section class="section-padding bg-white">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-label">Testimoni</div>
          <h2 class="section-title">Apa Kata Klien Kami</h2>
        </div>
        <div class="row g-4">
          <div v-for="t in testimoni" :key="t.name" class="col-md-4">
            <div class="testi-card h-100">
              <div class="testi-stars mb-3">
                <i v-for="n in 5" :key="n" class="bi bi-star-fill"></i>
              </div>
              <p class="testi-text">"{{ t.text }}"</p>
              <div class="testi-author mt-3">
                <div class="testi-avatar">{{ t.initials }}</div>
                <div>
                  <div class="testi-name">{{ t.name }}</div>
                  <div class="testi-company">{{ t.company }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CTA SECTION ===== -->
    <section class="cta-section">
      <div class="container text-center">
        <h2 class="cta-title text-white mb-3">Siap Memesan Seragam?</h2>
        <p class="cta-desc text-white-75 mb-4">
          Konsultasikan kebutuhan seragam Anda dengan tim kami sekarang. Gratis konsultasi, desain, dan estimasi harga.
        </p>
        <div class="d-flex justify-content-center flex-wrap gap-3">
          <a href="https://wa.me/6281234567890" target="_blank" class="btn btn-cta-wa">
            <i class="bi bi-whatsapp me-2"></i>Chat via WhatsApp
          </a>
          <a href="/kontak" class="btn btn-cta-outline">
            <i class="bi bi-envelope me-2"></i>Kirim Email
          </a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Hero slides
const heroSlides = [
  { bg: 'hero-1.png' },
  { bg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80' },
  { bg: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778927479/P_2_nuadq5.png' },
]
const currentSlide = ref(0)
let sliderTimer = null

onMounted(() => {
  sliderTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroSlides.length
  }, 5000)
})
onUnmounted(() => clearInterval(sliderTimer))

// Stats
const stats = [
  { number: '500+', label: 'Klien Puas' },
  { number: '5000+', label: 'Proyek Selesai' },
  { number: '10+', label: 'Tahun Pengalaman' },
  { number: '100%', label: 'Tepat Waktu' },
]

// Why Us
const whyUs = [
  'Dikerjakan SDM yang ahli di bidang garmen',
  'Kualitas produk berstandar tinggi',
  'Menggunakan material terbaik',
  'Harga yang bersahabat dan kompetitif',
  'Ketepatan waktu produksi terjamin',
]

// Cultures
const cultures = [
  { icon: 'bi-pencil-square', title: 'Desain Profesional', desc: 'Tim desainer berpengalaman siap membantu mewujudkan seragam impian Anda.' },
  { icon: 'bi-gem', title: 'Material Terbaik', desc: 'Pemilihan bahan berkualitas tinggi untuk kenyamanan dan ketahanan jangka panjang.' },
  { icon: 'bi-gear-wide-connected', title: 'Produksi Modern', desc: 'Workshop dilengkapi mesin modern dengan kapasitas produksi besar dan efisien.' },
  { icon: 'bi-shield-check', title: 'Kontrol Kualitas', desc: 'Setiap produk melalui QC ketat sebelum dikirimkan kepada klien.' },
]

// Services
const services = [
  {
    title: 'Kaos / T-Shirt & Raglan',
    desc: 'Untuk seragam kantor, acara, komunitas, dan clothing brand.',
    icon: 'bi-person-fill',
    img: 'https://res.cloudinary.com/dfx9dco9w/image/upload/v1778920631/6_fc7wzb.png',
    link: '/portofolio/kaos',
  },
  {
    title: 'Polo Shirt & Kaos Kerah',
    desc: 'Tampilan casual dan formal yang elegan untuk tim Anda.',
    icon: 'bi-person-workspace',
    img: 'https://www.planetsports.asia/media/catalog/product/cache/5916ecf3714e9284afcad6b81e33eb02/0/1/01-ASTEC-AUAPOASCA-ASCPOM5WF6SK-Blue.jpg',
    link: '/portofolio/polo-shirt',
  },
  {
    title: 'Kemeja & Celana Seragam',
    desc: 'Kemeja PDH, PDL, seragam kantor dan pabrik profesional.',
    icon: 'bi-briefcase-fill',
    img: 'https://i.pinimg.com/1200x/e5/1e/54/e51e54322111dbd615ee4f512a0312b8.jpg',
    link: '/portofolio/kemeja',
  },
  {
    title: 'Wearpack & Coverall',
    desc: 'Seragam lapangan, bengkel, dan pabrik yang kuat dan aman.',
    icon: 'bi-tools',
    img: 'https://i.pinimg.com/736x/85/a5/0b/85a50b0f46a971e26ad525efec06a384.jpg',
    link: '/portofolio/wearpack',
  },
  {
    title: 'Jaket Seragam',
    desc: 'Jaket bomber, jaket varsity, dan jaket korporat custom.',
    icon: 'bi-stars',
    img: 'https://i.pinimg.com/736x/b2/e8/1d/b2e81d4439bca124050cd47c1b5693df.jpg',
    link: '/portofolio/jaket',
  },
  {
    title: 'Seragam Satpam',
    desc: 'Seragam security profesional dengan material durable.',
    icon: 'bi-shield-fill',
    img: 'https://i.pinimg.com/736x/e3/60/e1/e360e1a18e8ec3848769ca0f77b4253e.jpg',
    link: '/portofolio/satpam',
  },
]

// Kapasitas
const kapasitas = [
  { number: '8.000', label: 'Kaos / Bulan', icon: 'bi-person-fill' },
  { number: '5.000', label: 'Polo Shirt / Bulan', icon: 'bi-person-workspace' },
  { number: '2.500', label: 'Kemeja / Bulan', icon: 'bi-briefcase-fill' },
  { number: '800', label: 'Wearpack / Bulan', icon: 'bi-tools' },
]

// Portfolio
const portfolioTabs = [
  { key: 'all', label: 'Semua' },
  { key: 'kaos', label: 'Kaos' },
  { key: 'polo', label: 'Polo Shirt' },
  { key: 'kemeja', label: 'Kemeja' },
  { key: 'wearpack', label: 'Wearpack' },
  { key: 'jaket', label: 'Jaket' },
]
const activeTab = ref('all')
const portfolioItems = [
  { id: 1, cat: 'Kaos', title: 'Kaos Event Perusahaan', img: 'https://i.pinimg.com/736x/fc/bb/1d/fcbb1d56e3d68ac3efaa3b65f8826a29.jpg', link: '/portofolio/kaos', type: 'kaos' },
  { id: 2, cat: 'Polo Shirt', title: 'Polo Shirt Kantor', img: 'https://www.planetsports.asia/media/catalog/product/cache/5916ecf3714e9284afcad6b81e33eb02/0/1/01-ASTEC-AUAPOASCA-ASCPOM5WF6SK-Blue.jpg', link: '/portofolio/polo-shirt', type: 'polo' },
  { id: 3, cat: 'Kemeja', title: 'Kemeja PDH Instansi', img: 'https://i.pinimg.com/1200x/e5/1e/54/e51e54322111dbd615ee4f512a0312b8.jpg', link: '/portofolio/kemeja', type: 'kemeja' },
  { id: 4, cat: 'Wearpack', title: 'Wearpack Lapangan', img: 'https://i.pinimg.com/736x/85/a5/0b/85a50b0f46a971e26ad525efec06a384.jpg', link: '/portofolio/wearpack', type: 'wearpack' },
  { id: 5, cat: 'Jaket', title: 'Jaket Bomber Custom', img: 'https://i.pinimg.com/736x/b2/e8/1d/b2e81d4439bca124050cd47c1b5693df.jpg', link: '/portofolio/jaket', type: 'jaket' },
  { id: 6, cat: 'Kaos', title: 'Kaos Komunitas Custom', img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80', link: '/portofolio/kaos', type: 'kaos' },
  { id: 7, cat: 'Polo Shirt', title: 'Polo Shirt Promosi', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&q=80', link: '/portofolio/polo-shirt', type: 'polo' },
  { id: 8, cat: 'Kemeja', title: 'Kemeja Batik Kantor', img: 'https://i.pinimg.com/1200x/71/a0/34/71a03449765e77c760af3b25a29e4ddc.jpg', link: '/portofolio/kemeja', type: 'kemeja' },
]
const filteredPortfolio = computed(() =>
  activeTab.value === 'all'
    ? portfolioItems
    : portfolioItems.filter(i => i.type === activeTab.value)
)

// ===== KLIEN LOGOS — Row 1 (kiri ke kanan) =====
const klienLogos = [
  {
    name: 'Telkom Indonesia',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ522AFguC6sE1iUMuC9mj6ZE2477PbCpwMjw&s',
  },
  {
    name: 'Bank BRI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/BRI_2025_%28with_full_name%29.svg',
  },
  {
    name: 'Pertamina',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0Z5s90h1Z2FaqSNHVAGBfe6ziA9-G7DTiQ&s',
  },
  {
    name: 'Bank BNI',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj638XHB69GwWDsfsMkYPx73lKRCmaV4itIw&s',
  },
  {
    name: 'PLN',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo_PLN.png/960px-Logo_PLN.png',
  },
  {
    name: 'Bank Mandiri',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CzeiMhDtWUN2nTN-y6qxMlgJ1G0XVosV9A&s',
  },
  {
    name: 'Garuda Indonesia',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW_Kuv3JYhYHmspSEx3EmFa_BJ_to-wooFWQ&s',
  },
  {
    name: 'Indofood',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8U72m1_JGbb0HD1vTXxUfSPMgm0FSVwdhw&s',
  },
  {
    name: 'Gojek',
    logo: 'https://cdn.antaranews.com/cache/1200x800/2020/10/03/Gojek-simbol.jpg',
  },
  {
    name: 'Tokopedia',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQ9siQ7UKIU1ghiqfGdh2ff0mirHuuYqCkA&s',
  },
]

const klienLogos2 = [
  {
    name: 'Astra International',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPKocOg39oXJOUbKVB3bs1y0hM-LsmVH1HJg&s',
  },
  {
    name: 'BPJS Ketenagakerjaan',
    logo: 'https://cdn.antaranews.com/cache/1200x800/2014/09/20140919BPJS_TK_Kalbar.jpg.jpg',
  },
  {
    name: 'Unilever',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTla0eqhglPBwAzSJfZhXeZBnxA4ITk-UOcbw&s',
  },
  {
    name: 'Kimia Farma',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtxbsjfbHP01EmtH0eLJFgJvE3nScFdvu37w&s',
  },
  {
    name: 'XL Axiata',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI88l8STNchlfof1-X7U3xUb13jyihwHwhVw&s',
  },
  {
    name: 'Bank BTN',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXHq7hNdU5V8Dj6paV7SEI8Ddx49QRux5AA&s',
  },
  {
    name: 'Bukalapak',
    logo: 'https://play-lh.googleusercontent.com/t8hxcLR1kfDWvT3m8xlC1jSTOXuyCpNMc-rfj80JGRbtBa6ROqu0eBUtPDGhHKgCpnw',
  },
  {
    name: 'Shopee',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSynuK2QjWNjmxwkZajMY2YYesRu92kqMizQ&s',
  },
  {
    name: 'Grab',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL8foGqTGRJ-l9n-j-Esv3TuHqBhYtkcILfQ&s',
  },
  {
    name: 'Kalbe Farma',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5PTtTmHuDEDwVqZOg90ZA_9mkcBdeNopvMQ&s',
  },
]
// Testimoni
const testimoni = [
  {
    name: 'Budi Santoso',
    initials: 'BS',
    company: 'PT. Maju Bersama',
    text: 'Kualitas seragam yang dihasilkan sangat memuaskan. Tim Duta Seragam responsif dan pengerjaan tepat waktu. Sangat direkomendasikan!',
  },
  {
    name: 'Siti Rahayu',
    initials: 'SR',
    company: 'Yayasan Pendidikan Cendikia',
    text: 'Sudah 3 kali order di Duta Seragam, selalu puas dengan hasilnya. Bahan nyaman, jahitan rapi, dan harga sangat terjangkau.',
  },
  {
    name: 'Ahmad Fauzi',
    initials: 'AF',
    company: 'CV. Teknik Jaya',
    text: 'Wearpack yang kami pesan sangat sesuai dengan kebutuhan lapangan. Bahan kuat dan desain sesuai request. Terima kasih Duta Seragam!',
  },
]
</script>

<style scoped>
/* ===== HERO ===== */
.hero-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.hero-slider {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease;
}

.hero-slide.active {
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(10, 30, 60, 0.82) 0%, rgba(10, 30, 60, 0.5) 60%, transparent 100%);
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-weight: 500;
}

.hero-title {
  font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.2;
}

.hero-highlight {
  color: #f59e0b;
  position: relative;
}

.hero-desc {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 560px;
  line-height: 1.7;
}

.btn-hero-primary {
  background: #f59e0b;
  color: #1a1a1a;
  border: none;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.btn-hero-primary:hover {
  background: #d97706;
  color: #fff;
  transform: translateY(-2px);
}

.btn-hero-outline {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.btn-hero-outline:hover {
  border-color: #fff;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.hero-dots {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  gap: 8px;
}

.hero-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s;
}

.hero-dot.active {
  background: #f59e0b;
  width: 28px;
  border-radius: 5px;
}

/* ===== STATS BAR ===== */
.stats-bar {
  background: #0f3460;
}

.stat-item {
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #f59e0b;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.85rem;
}

/* ===== COMMON SECTION ===== */
.section-padding {
  padding: 80px 0;
}

.bg-light-ds {
  background: #f8f9fb;
}

.section-label {
  display: inline-block;
  background: #fef3c7;
  color: #d97706;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
  margin-bottom: 0.75rem;
}

.section-title {
  font-family: 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #0f1729;
  margin-bottom: 1rem;
  line-height: 1.25;
}

.section-subtitle {
  color: #6b7280;
  font-size: 1rem;
  max-width: 560px;
  line-height: 1.7;
}

.section-body {
  color: #4b5563;
  line-height: 1.8;
}

.btn-primary-ds {
  background: #0f3460;
  color: #fff;
  border: none;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
  text-decoration: none;
}

.btn-primary-ds:hover {
  background: #1a4a80;
  color: #fff;
  transform: translateY(-2px);
}

/* ===== ABOUT ===== */
.about-image-grid {
  position: relative;
  padding-bottom: 3rem;
  padding-right: 3rem;
}

.about-img-main img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.about-img-secondary {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 48%;
}

.about-img-secondary img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.about-badge-card {
  position: absolute;
  top: 2rem;
  right: -1rem;
  background: #f59e0b;
  color: #fff;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4);
}

.about-badge-icon {
  font-size: 1.75rem;
}

.about-badge-num {
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.about-badge-text {
  font-size: 0.75rem;
  opacity: 0.9;
}

.about-checklist {
  list-style: none;
  padding: 0;
}

.about-checklist li {
  color: #374151;
  padding: 0.4rem 0;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
}

.about-checklist .bi-check-circle-fill {
  color: #10b981;
  font-size: 1.1rem;
}

/* ===== CULTURE CARDS ===== */
.culture-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  border: 1px solid #f0f0f0;
}

.culture-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.culture-icon {
  width: 64px;
  height: 64px;
  background: #4193ff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 1.75rem;
  color: #0f3460;
}

.culture-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f1729;
  margin-bottom: 0.5rem;
}

.culture-desc {
  font-size: 0.88rem;
  color: #6b7280;
  line-height: 1.6;
}

/* ===== SERVICE CARDS ===== */
.service-card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.service-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

.service-img-wrap {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.service-card:hover .service-img {
  transform: scale(1.07);
}

.service-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 52, 96, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-body {
  padding: 1.25rem 1.5rem;
}

.service-icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #fef3c7;
  border-radius: 8px;
  color: #d97706;
  font-size: 1.1rem;
}

.service-title {
  font-size: 1rem;
  font-weight: 700;
  color: #0f1729;
  margin: 0.5rem 0 0.4rem;
}

.service-desc {
  font-size: 0.85rem;
  color: #6b7280;
}

/* ===== KAPASITAS ===== */
.kapasitas-section {
  background: linear-gradient(135deg, #0f3460 0%, #1a4a80 100%);
  position: relative;
  overflow: hidden;
}

.kapasitas-section::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.kap-card {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 2rem 1rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s;
}

.kap-card:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-4px);
}

.kap-icon {
  font-size: 2rem;
  color: #f59e0b;
  margin-bottom: 0.75rem;
}

.kap-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 1;
}

.kap-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  margin-top: 0.4rem;
}

/* ===== PORTFOLIO ===== */
.portfolio-tab-btn {
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #4b5563;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.portfolio-tab-btn.active,
.portfolio-tab-btn:hover {
  background: #0f3460;
  color: #fff;
  border-color: #0f3460;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1rem;
}

.portfolio-item {
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3/2;
}

.portfolio-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.portfolio-item:hover .portfolio-img {
  transform: scale(1.07);
}

.portfolio-hover {
  position: absolute;
  inset: 0;
  background: rgba(15, 52, 96, 0.8);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 0.4rem;
}

.portfolio-item:hover .portfolio-hover {
  opacity: 1;
}

.portfolio-cat {
  font-size: 0.75rem;
  background: #f59e0b;
  color: #1a1a1a;
  padding: 0.2rem 0.7rem;
  border-radius: 50px;
  font-weight: 700;
}

.portfolio-title-hover {
  font-size: 0.9rem;
  font-weight: 600;
}

.portfolio-zoom {
  font-size: 1.5rem;
}

/* ===== KLIEN MARQUEE ===== */
.klien-marquee-wrap {
  overflow: hidden;
  position: relative;
}

.klien-marquee-wrap::before,
.klien-marquee-wrap::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  z-index: 2;
  pointer-events: none;
}

.klien-marquee-wrap::before {
  left: 0;
  background: linear-gradient(to right, #f8f9fb, transparent);
}

.klien-marquee-wrap::after {
  right: 0;
  background: linear-gradient(to left, #f8f9fb, transparent);
}

.klien-marquee {
  display: flex;
  gap: 1rem;
  animation: marquee 35s linear infinite;
  width: max-content;
}

.klien-marquee-reverse {
  animation: marquee-reverse 35s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(0);
  }
}

.klien-logo-item {
  flex-shrink: 0;
}

.klien-logo-box {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.85rem 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  min-width: 160px;
  transition: all 0.2s;
}

.klien-logo-box:hover {
  border-color: #0f3460;
  box-shadow: 0 4px 15px rgba(15, 52, 96, 0.1);
}

.klien-logo-img {
  height: 36px;
  width: auto;
  max-width: 130px;
  object-fit: contain;
  filter: grayscale(100%) opacity(0.6);
  transition: filter 0.3s;
}

.klien-logo-box:hover .klien-logo-img {
  filter: grayscale(0%) opacity(1);
}

/* ===== TESTIMONI ===== */
.testi-card {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
}

.testi-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.testi-stars {
  color: #f59e0b;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.testi-text {
  color: #4b5563;
  font-size: 0.95rem;
  line-height: 1.75;
  font-style: italic;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.testi-avatar {
  width: 44px;
  height: 44px;
  background: #0f3460;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.testi-name {
  font-weight: 700;
  color: #0f1729;
  font-size: 0.95rem;
}

.testi-company {
  font-size: 0.8rem;
  color: #9ca3af;
}

/* ===== CTA ===== */
.cta-section {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: -60%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
}

.cta-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
}

.cta-desc {
  color: rgba(255, 255, 255, 0.85);
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
}

.text-white-75 {
  color: rgba(255, 255, 255, 0.75);
}

.btn-cta-wa {
  background: #25d366;
  color: #fff;
  border: none;
  padding: 0.8rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-cta-wa:hover {
  background: #1da851;
  color: #fff;
  transform: translateY(-2px);
}

.btn-cta-outline {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 0.8rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.btn-cta-outline:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: #fff;
  color: #fff;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .section-padding {
    padding: 60px 0;
  }

  .about-img-secondary {
    display: none;
  }

  .about-badge-card {
    right: 0;
  }

  .portfolio-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
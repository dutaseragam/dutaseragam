<template>
  <section class="page-hero position-relative overflow-hidden d-flex align-items-center">

    <div class="position-absolute top-0 start-0 w-100 h-100"
      :style="{ backgroundImage: `url('${bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
    <div class="position-absolute top-0 start-0 w-100 h-100 page-hero-overlay"></div>

    <!-- Content -->
    <div class="container position-relative z-2 py-5 text-white">
      <div class="row align-items-center" style="min-height: 280px;">
        <div class="col-lg-8">
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="mb-3">
            <ol class="breadcrumb mb-0 small">
              <li class="breadcrumb-item">
                <a href="/" class="text-white-50 text-decoration-none">{{ breadcrumbHome }}</a>
              </li>
              <li class="breadcrumb-item active text-white">{{ breadcrumbCurrent }}</li>
            </ol>
          </nav>

          <!-- Badge -->
          <span
            class="badge rounded-pill bg-white bg-opacity-25 border border-white border-opacity-25 text-white fw-normal px-3 py-2 mb-3 d-inline-flex align-items-center gap-2">
            <i :class="'bi ' + badgeIcon"></i>{{ badgeText }}
          </span>

          <!-- Title -->
          <h1 class="fw-bold lh-sm mb-3 page-hero-title">{{ title }}</h1>

          <!-- Desc -->
          <p class="text-white-75 mb-0" style="max-width: 520px; line-height: 1.7;">{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  bgImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80'
  },
  breadcrumbHome: { type: String, default: 'Beranda' },
  breadcrumbCurrent: { type: String, default: 'Halaman' },
  badgeIcon: { type: String, default: 'bi-building-fill' },
  badgeText: { type: String, default: 'Tentang Perusahaan' },
  title: { type: String, default: 'Judul Halaman' },
  description: { type: String, default: '' },
})
</script>

<style scoped>
.page-hero {
  min-height: 340px;
}

.page-hero-overlay {
  background: linear-gradient(135deg, rgba(10, 30, 60, .88) 0%, rgba(10, 30, 60, .55) 60%, transparent 100%);
}

.page-hero-title {
  font-size: clamp(1.75rem, 4vw, 3rem);
}

.text-white-75 {
  color: rgba(255, 255, 255, .75);
}
</style>
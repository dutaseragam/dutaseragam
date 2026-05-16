<template>
  <footer class="footer-ds">
    <div class="container">
      <div class="row g-5">

        <!-- Company Info -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center gap-2 mb-3">
            <div class="footer-brand-icon">
              <img src="~assets/img/logo.png" alt="">
            </div>

            <div>
              <div class="footer-brand-name">Duta Seragam</div>
              <div class="footer-brand-sub">Vendor Terpercaya</div>
            </div>
          </div>

          <p class="footer-desc">
            Perusahaan manufaktur produk garmen &amp; konveksi seragam modern,
            terpercaya dan profesional. Berpusat di Tamansari Tasikmalaya
            
          </p>

          <div class="footer-social">
            <a href="https://www.facebook.com/" target="_blank" title="Facebook">
              <i class="bi bi-facebook"></i>
            </a>

            <a href="https://www.twitter.com/" target="_blank" title="Twitter">
              <i class="bi bi-twitter-x"></i>
            </a>

            <a href="https://www.instagram.com/" target="_blank" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>

            <a href="https://wa.me/6281122334455" target="_blank" title="WhatsApp">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Pintasan -->
        <div class="col-lg-2 col-md-6">
          <h6 class="footer-heading">Pintasan</h6>

          <ul class="footer-links">
            <li>
              <NuxtLink to="/cara-pesan">Cara Pemesanan</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/portofolio">Portofolio Produk</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/testimoni">Testimoni</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/klien">Klien</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/kontak">Kontak Kami</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Layanan -->
        <div class="col-lg-2 col-md-6">
          <h6 class="footer-heading">Layanan</h6>

          <ul class="footer-links">
            <li>
              <NuxtLink to="/seragam-satpam">Seragam Satpam</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/layanan/goodie-bag">Goodie Bag</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/layanan/powerbank">Powerbank Promosi</NuxtLink>
            </li>

            <li>
              <NuxtLink to="/layanan/flashdisk">Flashdisk Kartu</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div class="col-lg-4 col-md-6">
          <h6 class="footer-heading">Kontak Kami</h6>

          <div class="footer-contact-item">
            <div class="footer-contact-icon">
              <i class="bi bi-geo-alt-fill"></i>
            </div>

            <div class="footer-contact-text">
              <strong>Office</strong>
              Tamansari, Tasikmalaya, Jawa Barat
            </div>
          </div>
          <div class="footer-contact-item">
            <div class="footer-contact-icon">
              <i class="bi bi-building"></i>
            </div>
            <div class="footer-contact-text">
              <strong>Workshop</strong>
              Tamansari, Tasikmalaya, Jawa Barat
            </div>
          </div>

          <div class="footer-contact-item">
            <div class="footer-contact-icon">
              <i class="bi bi-telephone-fill"></i>
            </div>

            <div class="footer-contact-text">
              08112332778 / 085759057826
            </div>
          </div>

          <div class="footer-contact-item">
            <div class="footer-contact-icon">
              <i class="bi bi-envelope-fill"></i>
            </div>

            <div class="footer-contact-text">
              project@dutaseragam.co.id
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="footer-bottom mt-0">
      <div class="container">
        <p>
          © 2015–{{ new Date().getFullYear() }}
          <span>Duta Seragam</span>
          — Vendor Seragam Terpercaya di Tamansari Tasikmalaya.
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
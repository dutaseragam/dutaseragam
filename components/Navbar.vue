<template>
    <!-- Brand Header - centered -->
    <div class="container py-2">
        <div class="d-flex justify-content-center">
            <NuxtLink to="/" class="d-inline-flex align-items-center gap-3 text-decoration-none">
                <img src="~assets/img/logo.png" alt="Duta Seragam" style="width:55px;">
                <div>
                    <h3 class="fw-bold mb-0" style="color:#0B2E59;">Duta Seragam</h3>
                    <span class="text-muted small">Vendor Terpercaya</span>
                </div>
            </NuxtLink>
        </div>
    </div>
    <nav class="navbar navbar-expand-lg border-top border-bottom bg-white sticky-top" style="top:0; z-index:1030;">
        <div class="container justify-content-center">
            <button class="navbar-toggler border-0" type="button" @click="toggleNav" aria-label="Toggle navigation">
                <i :class="navOpen ? 'bi bi-x-lg' : 'bi bi-list'" style="font-size:1.4rem;color:#0B2E59;"></i>
            </button>

            <div class="collapse navbar-collapse justify-content-center" :class="{ show: navOpen }">
                <ul class="navbar-nav align-items-lg-center gap-lg-1">
                    <li class="nav-item">
                        <NuxtLink class="nav-link fw-medium text-dark" to="/" @click="closeNav">Beranda</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link fw-medium text-dark" to="/profil" @click="closeNav">Profil</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link fw-medium text-dark" to="/klien" @click="closeNav">Klien</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link fw-medium text-dark" to="/kontak" @click="closeNav">Kontak</NuxtLink>
                    </li>

                    <li class="nav-item dropdown" @mouseenter="openDropdown('portfolio')"
                        @mouseleave="closeDropdown('portfolio')">
                        <a class="nav-link dropdown-toggle fw-medium text-dark" href="#"
                            @click.prevent="toggleDropdown('portfolio')">
                            Portofolio
                        </a>

                        <ul class="dropdown-menu" :class="{ show: dropdowns.portfolio }">
                            <li>
                                <NuxtLink class="dropdown-item" to="/portofolio/kaos" @click="closeAll">Portofolio Kaos
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/portofolio/polo-shirt" @click="closeAll">Portofolio
                                    Polo Shirt</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/portofolio/kemeja" @click="closeAll">Portofolio
                                    Kemeja</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/portofolio/wearpack" @click="closeAll">Portofolio
                                    Wearpack</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/portofolio/jaket" @click="closeAll">Portofolio
                                    Jaket</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <NuxtLink class="nav-link fw-medium text-dark" to="/testimoni" @click="closeNav">Testimoni
                        </NuxtLink>
                    </li>

                    <li class="nav-item dropdown" @mouseenter="openDropdown('layanan')"
                        @mouseleave="closeDropdown('layanan')">
                        <a class="nav-link dropdown-toggle fw-medium text-dark" href="#"
                            @click.prevent="toggleDropdown('layanan')">
                            Layanan Lainnya
                        </a>

                        <ul class="dropdown-menu" :class="{ show: dropdowns.layanan }">
                            <li>
                                <NuxtLink class="dropdown-item" to="/layanan/goodie-bag" @click="closeAll">Goodie Bag
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/layanan/seragam-satpam" @click="closeAll">
                                    Seragam Satpam</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, reactive } from 'vue'

const navOpen = ref(false)
const dropdowns = reactive({ portfolio: false, layanan: false })

const toggleNav = () => { navOpen.value = !navOpen.value }
const closeNav = () => { navOpen.value = false }
const toggleDropdown = (key) => { dropdowns[key] = !dropdowns[key] }
const openDropdown = (key) => { dropdowns[key] = true }
const closeDropdown = (key) => { dropdowns[key] = false }
const closeAll = () => {
    navOpen.value = false
    dropdowns.portfolio = false
    dropdowns.layanan = false
}
</script>
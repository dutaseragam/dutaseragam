// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate:'2025-07-15',
  devtools:{enabled:true},

  modules:[
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css:[
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.css'
  ],

  site:{
    url:'https://dutaseragam.com',
    name:'Duta Seragam'
  },

  app:{
    head:{
      htmlAttrs:{
        lang:'id'
      },
      title:'Duta Seragam | Vendor Seragam Terpercaya Bandung',
      meta:[
        {charset:'utf-8'},
        {name:'viewport',content:'width=device-width, initial-scale=1'},
        {
          name:'description',
          content:'Duta Seragam melayani pembuatan kaos, polo shirt, kemeja, wearpack, jaket, seragam satpam, goodie bag, flashdisk promosi dan kebutuhan merchandise custom.'
        },

        {name:'robots',content:'index,follow,max-image-preview:large'},
        {name:'theme-color',content:'#0B2E59'},

        {property:'og:type',content:'website'},
        {property:'og:site_name',content:'Duta Seragam'},
        {property:'og:title',content:'Duta Seragam | Vendor Seragam Terpercaya'},
        {
          property:'og:description',
          content:'Vendor seragam terpercaya untuk perusahaan, sekolah, komunitas dan instansi.'
        },
        {
          property:'og:url',
          content:'https://dutaseragam.com'
        },
        {
          property:'og:image',
          content:'https://dutaseragam.com/og-image.jpg'
        },

        {name:'twitter:card',content:'summary_large_image'},
        {name:'twitter:title',content:'Duta Seragam'},
        {
          name:'twitter:description',
          content:'Vendor seragam terpercaya Bandung'
        }
      ],

      link:[
        {
          rel:'canonical',
          href:'https://dutaseragam.com'
        },
        {
          rel:'icon',
          type:'image/png',
          href:'/favicon.ico'
        }
      ]
    }
  },

  sitemap:{
    xsl:false,

    urls:[
      '/',
      '/profil',
      '/kontak',
      '/klien',
      '/testimoni',
      '/seragam-satpam',

      '/layanan/goodie-bag',
      '/layanan/powerbank',
      '/layanan/flashdisk',

      '/portofolio',
      '/portofolio/kaos',
      '/portofolio/polo-shirt',
      '/portofolio/kemeja',
      '/portofolio/wearpack',
      '/portofolio/jaket'
    ]
  },

  robots:{
    UserAgent:'*',

    Allow:'/',

    Sitemap:'https://dutaseragam.com/sitemap.xml',

    Disallow:[
      '/admin',
      '/dashboard',
      '/api'
    ]
  }
})
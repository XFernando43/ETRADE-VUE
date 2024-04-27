<template>

  <div class="img-transparent text-white">
    <header class="p-4 flex flex-row items-center sm:justify-between">
      <i></i>
      <h2 class="Slabo font-normal text-2xl md:text-center">ETrade</h2>
      <i class="pi pi-align-justify"></i>
    </header>

    <main class="flex flex-col gap-4 sm:p-5 md:text-center">
      <div class="flex flex-col gap-4 text-start p-4 mx-auto sm:h-auto md:h-96 md:justify-center">
        <h1 class="Slabo sm:text-4xl md:text-6xl font-medium">Descubre Ofertas Exclusivas Ahora</h1>
        <p class="text-lg md:pb-10">Encuentra las mejores promociones en tecnología y más, solo por tiempo limitado.</p>
        <button class="bg-green-500 text-center rounded-md p-2 text-black font-semibold sm:w-full md:max-w-36">Comprar
          Ya</button>
      </div>
    </main>
  </div>

  <!-- clientes -->
  <section class="flex flex-col gap-4 p-8" style="background-color: #12141d">
    <h2 class="text-white font-semibold sm:text-3xl Slabo">Nuestros Clientes</h2>
    <div class="carousel-container">
      <div class="carousel">
        <img v-for="(company, index) in companies" :key="index" :src="company" alt="Company Logo"
          class="carousel-item img sm:max-h-7 md:max-h-14" />
      </div>
    </div>
  </section>

  <!-- Services -->

  <section class="p-5" style="background-color: #1b1d2c">
    <div class="flex flex-col gap-5 p-3 text-white">
      <h3 class="sm:text-3xl Slabo md:text-5xl">Mis Servicios</h3>
      <div class="sm:flex sm:flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row  gap-6">
        
        <div v-for="(serviceItem, index) in service" :key="index" class="relative border-round-2xl overflow-hidden">
          <img preview :src="serviceItem.url" :alt="serviceItem.title" class="" style="object-fit: cover" />

          <div class="absolute bottom-0 left-0 right-0 p-3" style="background-color: rgba(0, 0, 0, 0.9)">
            <h3 class="Slabo sm:text-lg ">
              {{ serviceItem.title }}
            </h3>
            <p class="pt-3 pb-3 sm:text-xs md:text-base">{{ serviceItem.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>



  <!-- Sobre nosotros -->

  <section class="p-8 align-items-center" style="background-color: #1b1d2c">

    <div class="flex sm:flex-col gap-8 align-items-center">
      <h3 class="text-white font-normal Slabo sm:text-3xl">Sobre Nosotros</h3>
      <p class="text-white Robot">
        Somos Kombox, una empresa de ventas ubicada en Perú. Nos
        especializamos en ofrecer soluciones efectivas para impulsar el
        crecimiento de su negocio.
      </p>
      <p class="text-white Robot">
        Nuestro equipo está comprometido en brindar un servicio excepcional y
        resultados sobresalientes para nuestros clientes. Confíe en nosotros
        para llevar su estrategia de ventas al siguiente nivel.
      </p>
      <Image preview
        src="https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1521791136064-7986c2920216%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwyfHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90"
        alt=""></Image>
      <button class="bg-green-500 rounded-md p-2 text-black font-bold text-center">Learn More</button>
    </div>
  </section>

  <!-- Tabla de precios   -->

  <section class="pt-5 pb-8 gap-4" style="background-color: #1b1e2c;">
    <div class="flex flex-col gap-3 p-3 text-white">
      <h3 class="font-medium text-3xl Slabo text-center pb-3">Tabla de Precios</h3>
      <div class="flex flex-col justify-content-center gap-3 Slabo ">
        <div v-for="(priceItem, index) in Prices" :key="index"
          class="border-2 rounded-md flex flex-col gap-2 border-white-alpha-90 p-3 lg:price-img-animation"
          style="background-color: #1b1e2c;">
          <img :src="priceItem.img" :alt="priceItem.name" class="border-round" />

          <Tag v-if="priceItem.popular === true" class="w-auto border-round-xl" severity="info" value="Popular"></Tag>

          <h4 class="Slobe text-4xl font-normal">{{ priceItem.name }}</h4>
          <div class="flex flex-row items-center gap-3" style="line-height: 25px">
            <span class="text-2xl">${{ priceItem.price }}</span>
            <span>Por venta</span>
          </div>
          <button class="bg-green-500 rounded-lg p-2 Roboto">Mas Informacion</button>

          <p class="Roboto text-lg">{{ priceItem.description }}</p>

          <ul class="list-none">
            <li v-for="(descriptionItem, index) in priceItem.functionalities" :key="index"
              class="flex flex-row gap-3 align-items-center">
              <i class="pi pi-check"></i>
              {{ descriptionItem }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->

  <section class="p-8 flex flex-col" style="background-color: #1b1e2c;">
    <Carousel :showIndicators="false" :value="testimonials" :num-visible="1" :num-scroll="1" circular
      :autoplayInterval="4000">
      <template #item="slotProps">

        <div class="flex flex-col gap-12 justify-content-center text-white p-4">
          <img :src="slotProps.data.img" alt="person" class="sm:max-w-32 sm:max-h-40 rounded-2xl">
          <p class="Slabo text-4xl">{{ slotProps.data.texto }}</p>
          <label class="Barlow">- {{ slotProps.data.owner }}</label>
        </div>
      </template>
    </Carousel>

  </section>


  <section class="p-7 flex flex-col justify-content-center align-items-center" style="background-color: #232336;">
    <div class="flex flex-col justify-content-center gap-4 text-white">

      <div class="flex flex-col gap-4 justify-content-center p-4">
        <h3 class="Slabo text-4xl">Ponerse en contacto</h3>
        <p class="Roboto ">Envianos un mensaje y nos comunicaremos contigo tan pronto como sea posible</p>
      </div>

      <form class="flex flex-col gap-3 p-4">

        <head class="flex flex-col gap-2">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <label for="Nombre">Nombre</label>
              <InputText id="Nombre" class=" p-1 text-white bg-transparent	" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <label for="correo">Correo Electronico</label>
              <InputText id="correo" class=" p-1 text-white bg-transparent" />
            </div>
          </div>
        </head>

        <body>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2">
              <label for="mensaje">Mensaje</label>
              <Textarea rows="7" cols="10" class="p-1 text-white bg-transparent	" />
            </div>
          </div>
        </body>

        <div class="flex flex-row justify-content-between gap-2">
          <p class="hidden max-w-20rem text-xs lg:block">Este sitio está protegido por reCAPTCHA y Google política de
            privacidad y
            Términos de servicio aplicar.</p>
          <button class=" bg-green-500 text-center font-semibold p-2 rounded-md w-full">Enviar</button>
        </div>

      </form>

    </div>
  </section>

  <section>
    <div class="relative">
      <iframe :src="location" width="100%" height="400" style="border: 0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="p-4 rounded-md text-white absolute sm:w-10/12 "
        style="background-color: #232336; top: 20%; left: 8%;">
        <h3 class="Slabo text-4xl font-semibold">Ubicación</h3>
        <span class="Roboto text-sm">Perú</span>
      </div>
    </div>
  </section>

  <section class="p-8 text-white align-items-center" style="background-color: #232336;">
    <div class="flex flex-col gap-6 text-center">
      <h1 class="text-4xl Slabo font-semibold">Kombox</h1>
      <p class="Roboto font-normal text-xl">Made it with VueJS</p>
    </div>
  </section>

</template>

<script lang="ts">
export default {
  data() {
    return {
      companies: [
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/609aca115d254d21ea91e8da_Globant.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/606eab41e554977bf2901ec3_oktana.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/606e9f6ed270a03e3814b22b_finvoice.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/629fe3bc563181f1b2745959_Logotipo.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/634ed8afeea2b5729709a33a_nttdata-p-500.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/629fe269366f330426311e9d_img-logos-web-bsale-blanco-footer.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/629fe2696fd3c91e47387fa3_Logos-Draftea-azul-p-500.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/629fe269b7461d8176d617c1_logo-buk-bajada-2021-02-e1640188972198.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/629fe2696fd3c91d5a387fa4_Rappi_logo.svg-p-500.png",
        "https://assets-global.website-files.com/6043ed3109ebdb7c9484f446/609ace96c2b34f5ebc9a44f8_kushki.png",
      ],
      service: [
        {
          url: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600880292203-757bb62b4baf%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxNHx8U2FsZXN8ZW58MHx8fHwxNzExNzM3Nzg1fDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          title: "Asesoramiento personalizado de ventas",
          description:
            "Optimizamos tus estrategias de ventas para maximizar resultados.",
        },
        {
          url: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1556740758-90de374c12ad%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHw1fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          title: "Capacitación en técnicas de venta",
          description:
            "Optimizamos tus estrategias de ventas para maximizar resultados.",
        },
        {
          url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw4fHxTYWxlc3xlbnwwfHx8fDE3MTIyNDIyMjB8MA&ixlib=rb-4.0.3&q=80&w=1080",
          title: "Análisis de mercado y competidores",
          description:
            "Obten información clave para destacarte en el mercado y superar a la competencia..",
        },
      ],
      Prices: [
        {
          img: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1517245386807-bb43f82c33c4%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxNXx8U2FsZXN8ZW58MHx8fHwxNzExNzM3Nzg1fDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          name: "Paquete Basico",
          price: "999",
          description: "Solución de ventas para pequeñas empresas",
          functionalities: ["Soporte", "Informes"],
          popular: false,
        },
        {
          img: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1591696205602-2f950c417cb9%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHw4fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          name: "Paquete Estandar",
          price: "1999",
          description: "Solución de ventas para medianas empresas",
          functionalities: ["Soporte", "Informes", "Capacitación"],
          popular: true,
        },
        {
          img: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1616587224026-668840f26916%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxMHx8U2FsZXN8ZW58MHx8fHwxNzExNzM3Nzg1fDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          name: "Paquete Premiun",
          price: "2999",
          description: "Solución de ventas para grandes empresas",
          functionalities: [
            "Soporte",
            "Informes",
            "Capacitación",
            "Personalización",
          ],
          popular: false,
        },
      ],
      testimonials: [
        {
          img: "https://pymstatic.com/5844/conversions/personas-emocionales-wide_webp.webp",
          texto: "!Kombox es increíble, Su equipo de ventas es muy profesional y eficiente. Quedé completamente impresionada,con su atención al cliente y su calidad de servicio, mis ventas aumentaron increíblemente",
          owner: "María García",
        },
        {
          img: "https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/ffe2063e-e2b0-473b-9637-31bdf07fd762/Hero_Desk_Banco-para-los-jovenes+1.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P864E0Q30449MS3000-ffe2063e-e2b0-473b-9637-31bdf07fd762-ogl8w-c",
          texto: "¡Excelente servicio! Kombox superó todas mis expectativas. Definitivamente los recomendaré a todos mis colegas.",
          owner: "Juan Pérez",
        },
        {
          img: "https://img.freepik.com/foto-gratis/confianza-alegre-joven-empresaria_1262-20881.jpg?w=740",
          texto: "Kombox ha sido fundamental para el crecimiento de mi negocio. Su plataforma es fácil de usar y su equipo de soporte es excepcional.",
          owner: "Laura Martínez",
        },
      ],
      location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124940.89193798818!2d-77.27027893066405!3d-11.877010300034785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d38d50ee87ad%3A0x13cc324c6c5c4fa7!2sCoolbox!5e0!3m2!1ses-419!2spe!4v1712248292269!5m2!1ses-419!2spe"
    };
  },
};
</script>

<style scoped>
.price-img-animation:hover {
  transform: scale(1.15);
  transition: transform 0.5s ease;
}

.img-transparent {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(36, 32, 32, 0.5)),
    url("https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw2fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

}

.title-width {
  max-width: 800px;
  line-height: 100px;
}

.paragraph-width {
  max-width: 700px;
}

.principal-container {
  height: 800px;
}

.container-width {
  width: 1200px;
}

.img {
  opacity: 0.5;
  filter: contrast(0%) brightness(200%);
  height: auto;
  /* max-height: 28px; */
  margin: 16px 24px;
}

.carousel-container {
  overflow: hidden;
}

.carousel {
  display: flex;
  animation: carousel-animation 10s linear infinite;
}

.carousel-item {
  flex: 0 0 auto;
  margin-right: 16px;
}

/* Agrega este estilo para crear el efecto de bucle */
.carousel-item:first-child {
  margin-left: -16px;
  /* Espacio negativo igual al espacio entre las imágenes */
}

.carousel-item:last-child {
  margin-right: 0;
  /* Elimina el espacio entre la última imagen y el contenedor */
}

@keyframes carousel-animation {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

/* Define la animación de entrada */
@keyframes fadeIn {
  from {
    opacity: 0;
    /* Comienza con opacidad 0 */
  }

  to {
    opacity: 1;
    /* Termina con opacidad 1 */
  }
}

/* Aplica la animación de entrada a las imágenes */
.carousel-item {
  flex: 0 0 auto;
  margin-right: 16px;
  /* Espacio entre las imágenes */
  animation: fadeIn 0.5s ease-in-out;
  /* Aplica la animación de entrada */
}

/* Agrega un retraso progresivo a cada imagen */
.carousel-item:nth-child(1) {
  animation-delay: 0.2s;
}

.carousel-item:nth-child(2) {
  animation-delay: 0.4s;
}

.carousel-item:nth-child(3) {
  animation-delay: 0.6s;
}

/* Y así sucesivamente para cada imagen */
</style>

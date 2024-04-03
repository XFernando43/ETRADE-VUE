<template>
  <div class="img-transparent">
    <header class="flex flex-row justify-content-between p-5">
      <p class="font-bold text-white text-4xl"></p>
      <h1 class="font-normal text-white text-4xl Slabo">Etrade</h1>
      <Button class="font-semibold p-2 justify-content-center text-lg w-6rem">Call Us</Button>
    </header>

    <main class="flex flex-column principal-container justify-content-center">
      <div class="pl-8 flex flex-column text-white gap-4 align-items-start container-width">
        <h1 class="font-ligth text-8xl Slabo title-width">
          Descubre Ofertas Exclusivas Ahora
        </h1>
        <p class="Roboto font-normal text-xl paragraph-width">
          Encuentra las mejores promociones en tecnología y más, solo por tiempo
          limitado.
        </p>
        <Button class="p-3 justify-content-center font-bold max-w-8rem">Obtenlo Ya</Button>
      </div>
    </main>
  </div>

  <!-- Clients -->
  <section class="flex flex-column gap-4 p-8" style="background-color: #12141d;">
    <h2 class="text-white font-bold text-6xl Slabo">Nuestros Clientes</h2>

    <div class="carousel-container">
      <div class="carousel">
        <img v-for="(company, index) in companies" :key="index" :src="company" alt="Company Logo"
          class="carousel-item img" />
      </div>
    </div>
  </section>

  <!-- Seccion de servicios -->
  <section class="flex flex-column gap-2 p-8" style="background-color: #1b1d2c;">
    <h3 class="text-white font-bold text-7xl Slabo">Mis Servicios</h3>
    <div class="flex flex-row gap-6">
      <div v-for="(serviceItem, index) in service" :key="index"
        class="relative border-round-2xl overflow-hidden service-img-width">
        <img preview :src="serviceItem.url" :alt="serviceItem.title" class="block w-full h-full"
          style="object-fit: cover;">
        <div class="absolute bottom-0 left-0 p-3 text-white max-w-full h-12rem"
          style="background-color: rgba(0, 0, 0, 0.9);">
          <h3 class="Slabo text-white text-4xl font-normal line-height-2 max-w-21rem">{{ serviceItem.title }}</h3>
          <p class="pt-3 pb-3">{{ serviceItem.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- about us -->
  <section class="p-8" style="background-color: #1b1d2c;">
    <div class="flex flex-row gap-8 align-items-center justify-content-center">
      <Image style="max-width: 800px; height: 700px;" preview class="border-round-xl block w-full h-full"
        src="https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1521791136064-7986c2920216%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwyfHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90"
        alt=""> >
      </Image>

      <div class="flex flex-column gap-4 text-left" style="max-width: 700px;">
        <h3 class="text-white font-semibold Slabo text-7xl">Sobre Nosotros</h3>
        <p class="text-white Robot">
          Somos Kombox, una empresa de ventas ubicada en Perú. Nos especializamos en ofrecer soluciones efectivas para
          impulsar el crecimiento de su negocio.
        </p>
        <p class="text-white Robot">
          Nuestro equipo está comprometido en brindar un servicio excepcional y resultados sobresalientes para nuestros
          clientes. Confíe en nosotros para llevar su estrategia de ventas al siguiente nivel.
        </p>
        <Button class="p-3 max-w-8rem"> Learn More </Button>
      </div>
    </div>
  </section>

  <!-- Precios -->

  <section class="p-8 flex flex-column gap-4" style="background-color: #1b1e2c;">
    <h3 class="text-white font-bold text-7xl Slabo text-center">Tabla de Precios</h3>
    <div class="flex flex-row justify-content-center gap-3 text-white Slabo">

      <!-- Aca es el v-for -->
      <div v-for="(priceItem, index) in Prices" :key="index"
        class="flex flex-column gap-2 border-white-alpha-90 border-1 border-round p-3 max-w-25rem price-img-animation" style=" background-color: #1b1e2c;">
        <img :src="priceItem.img" :alt="priceItem.name" class="border-round">
     
        <Tag v-if="priceItem.popular === true" class="max-w-5rem h-2rem border-round-xl" severity="info" value="Popular"></Tag>  
        
        <h4 class="Slobe text-4xl font-normal">{{ priceItem.name }}</h4>
        <div class="flex flex-column" style="line-height: 25px;">
          <span class="text-2xl">${{ priceItem.price }}</span>
          <span>Por venta</span>
        </div>
        <Button class="justify-content-center p-2 Roboto" severity="info">Mas Informacion</Button>

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
          url: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1556740758-90de374c12ad%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHw1fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
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
          popular: false
        },
        {
          img: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1591696205602-2f950c417cb9%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHw4fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          name: "Paquete Estandar",
          price: "1999",
          description: "Solución de ventas para medianas empresas",
          functionalities: ["Soporte", "Informes","Capacitación"],
          popular: true
        },
        {
          img: "https://kombox.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1616587224026-668840f26916%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxMHx8U2FsZXN8ZW58MHx8fHwxNzExNzM3Nzg1fDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90",
          name: "Paquete Premiun",
          price: "2999",
          description: "Solución de ventas para grandes empresas",
          functionalities: ["Soporte", "Informes","Capacitación","Personalización"],
          popular: false
        }
      ]
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
    height: 53rem;
  }

  .service-img-width {
    width: 490px;
    height: 720px;
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
    max-height: 48px;
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

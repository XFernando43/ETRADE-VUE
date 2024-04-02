<template>
  <div class="img-transparent">
    <header class="flex flex-row justify-content-between p-5">
      <p class="font-bold text-white text-4xl"></p>
      <h1 class="font-normal text-white text-4xl Slabo">Etrade</h1>
      <Button class="font-semibold p-2 justify-content-center text-lg w-6rem"
        >Call Us</Button
      >
    </header>

    <main class="flex flex-column principal-container justify-content-center">
      <div
        class="pl-8 flex flex-column text-white gap-4 align-items-start container-width"
      >
        <h1 class="font-ligth text-8xl Slabo title-width">
          Descubre Ofertas Exclusivas Ahora
        </h1>
        <p class="Roboto font-normal text-xl paragraph-width">
          Encuentra las mejores promociones en tecnología y más, solo por tiempo
          limitado.
        </p>
        <Button class="p-3 justify-content-center font-bold max-w-8rem"
          >Obtenlo Ya</Button
        >
      </div>
    </main>
  </div>

  <!-- Clients -->
  <section class="flex flex-column gap-4 p-8" style="background-color: #12141d">
    <h2 class="text-white font-bold text-5xl Slabo">Nuestros Clientes</h2>

    <div class="carousel-container">
      <div class="carousel">
        <img
          v-for="(company, index) in companies"
          :key="index"
          :src="company"
          alt="Company Logo"
          class="carousel-item img"
        />
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
    };
  },
};
</script>

<style scoped>
.img-transparent {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw2fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 53rem;
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
  margin-left: -16px; /* Espacio negativo igual al espacio entre las imágenes */
}

.carousel-item:last-child {
  margin-right: 0; /* Elimina el espacio entre la última imagen y el contenedor */
}

@keyframes carousel-animation {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

</style>

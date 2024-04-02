<template>
    <div class="img-transparent">
        <head class="flex flex-row justify-content-between p-3">
            <p class="font-bold text-white text-4xl"> </p>
            <h1 class="font-normal text-white text-4xl Roboto">Etrade</h1>
            <Button class="font-semibold p-2">Call Us</Button>
        </head>
        
        <section class="flex flex-column text-white px-8 py-8 gap-3 prueba"> 
            <h1 class="font-normal text-7xl Barlow">Descubre Ofertas Exclusivas Ahora</h1>
            <p class="Roboto font-normal text-3xl"> Encuentra las mejores promociones en tecnología y más, 
                solo por tiempo limitado.
            </p>
            <Button class="p-3 justify-content-center font-bold max-w-8rem">Obtenlo Ya</Button>
        </section>

    </div>
</template>

<script lang="ts">
export default {
    // No es necesario tener la sección "data" vacía si no se usará
}
</script>

<style scoped>
    .img-transparent {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw2fHxTYWxlc3xlbnwwfHx8fDE3MTE3Mzc3ODV8MA&ixlib=rb-4.0.3&q=80&w=1080');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 50rem;
    }


</style>

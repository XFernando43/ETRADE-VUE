<template>
    <Topbar/>
    <HeroProducts/>

</template>


<script lang="ts">
    import Topbar from '../components/commons/Topbar.vue';
    import HeroProducts from '../components/Sell/HeroProducts.vue';
    export default{
        data(){
            return{

            }
        },
        components: {
            Topbar, // Debes registrar el componente aquí
            HeroProducts
        }
    }

</script>
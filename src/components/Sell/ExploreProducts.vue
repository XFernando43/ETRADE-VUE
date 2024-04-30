<template>
    <section>
        <header class="flex flex-col gap-3">
            <div class="flex flex-row gap-3 items-center">
                <i class="pi pi-shopping-bag bg-violet-500 text-white rounded-full text-sm p-2"></i>
                <span class="Roboto text-sm font-semibold text-violet-600">Our Products</span>
            </div>
            <h1 class="Roboto font-semibold text-5xl">Explore Out Products</h1>
        </header>

        <body class="grid grid-cols-4 grid-flow-row gap-4 mb-4">

            <div v-for="(product, index) in products" :key="index" class="flex flex-row">
                <p> {{ product.productDescription }}</p>
            </div>
            

        </body>


    </section>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { useProductStore } from '../../store/product.store';


    export default{
        computed: {
            ...mapState(useProductStore,['products'])
        },
        methods:{
            ...mapActions(useProductStore,['fetchProducts']),
        },
        mounted(){
            this.fetchProducts();
        }

    }

</script>

<style scoped>

</style>
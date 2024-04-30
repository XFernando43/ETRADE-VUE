<template>

    <section class="pt-5 max-w-7xl mx-auto">

        <header class="flex flex-col gap-3">
            <div class="flex flex-row gap-3 items-center">
                <i class="pi pi-shopping-bag bg-violet-500 text-white rounded-full text-sm p-2"></i>
                <span class="Roboto text-sm font-semibold text-violet-600">This Week's</span>
            </div>
            <h1 class="Roboto font-semibold text-5xl">New Arrivals</h1>
        </header>

        <body>
            <Carousel :showNavigators="false" :value="products" :numVisible="5" :numScroll="1" circular
                :autoplayInterval="4000">
                <template #item="slotProps">
                    <div class="border-3 border-blue-50 border-round pr-5 pt-4">
                            <div class="relative mx-auto">
                                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
                                    class=" rounded-md" preview />
                                <Tag value="UnStock" severity="danger" class="absolute left-1 top-1"/>
                            </div>
                        <div class="mb-3 font-bold text-center">{{ slotProps.data.name }}</div>
                        <div class="mb-3 font-medium text-center">{{ slotProps.data.price }} $</div>
                    </div>
                </template>
            </Carousel>
        </body>

    </section>

</template>



<script lang="ts">
export default {
    data() {
        return {
            products: [
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
                {
                    name: "Laptop Gtx540",
                    price: 2300,
                    url: "https://www.muypymes.com/wp-content/uploads/2016/04/hp_spectre.jpg",
                },
            ],
        };
    },
}
</script>
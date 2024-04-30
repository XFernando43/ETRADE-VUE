<template>
    <section class="pt-5 max-w-7xl mx-auto">
        <header class="flex flex-col gap-3">
            <div class="flex flex-row gap-3 items-center">
                <i class="pi pi-shopping-bag bg-red-500 text-white rounded-full text-sm p-2"></i>
                <span class="Roboto text-sm font-semibold text-red-600">This Month</span>
            </div>
            <h1 class="Roboto font-semibold text-3xl">Best Sellers</h1>
        </header>

        <body>
            <Carousel :showIndicators="false" :showNavigators="false" :value="products" :numVisible="5" :numScroll="1"
                circular :autoplayInterval="4000">
                <template #item="slotProps">

                    <div class="m-2 p-3 flex flex-col gap-2 border-3 border-blue-50 border-round surface-200 relative">
                        <Tag severity="success" value="Stock" class="absolute right-4 top-2 select-none"></Tag>
                        <header class="flex flex-col align-items-start">
                            <h3>${{ slotProps.data.name }}</h3>
                            <div class="flex flex-row gap-2 mb-3">
                                <span class="font-bold hover:text-pink-500">${{ slotProps.data.price }}</span>
                                <span class="line-through text-bluegray-500 font-semibold">${{ slotProps.data.price
                                    }}</span>
                            </div>
                        </header>

                        <Button
                            class="absolute border-2 border-blue-50 hover:text-white hover:rounded-3xl hover:bg-blue-500 hover:shadow-6 right-5 bottom-3">
                            <i class="p-2 pi pi-shopping-cart"></i>
                        </Button>

                        <body>
                            <img src="../../assets/images/product/fashion/product-18.png" class="w-full imgAnimation"
                                preview />
                        </body>
                    </div>
                </template>
            </Carousel>
        </body>



    </section>
</template>



<script lang="ts">
// import { ref } from 'vue';
// const value = ref(5);



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
        }
    }
}
</script>

<style scoped>
.imgAnimation {
    transition: all 0.3s ease;
}

.imgAnimation:hover {
    transform: scale(0.80);
}

.prueba {
    color: black;
}

.prueba:hover {
    color: white;
}
</style>
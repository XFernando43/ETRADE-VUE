<template>

    <div class="card shadow-4 flex flex-column">
        
        <header class="p-4">
            <p class="flex gap-2 align-items-center justify-content font-bold text-teal-500">
                <Tag value="Stock" severity="success" />
                This Week
            </p>
            <h1 class="font-bold" >New Arrivals</h1>
        </header>
        
        <body>
            <Carousel :showNavigators="false" :value="products" :numVisible="5" :numScroll="1" circular :autoplayInterval="4000">
                <template #item="slotProps">
                    <div class="border-3 border-blue-50 border-round m-2 p-3">
                        <div class="mb-3">
                            <div class="relative mx-auto">
                                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" class="w-full border-round" preview />
                                <Tag value="UnStock" severity="danger" class="absolute" style="left: 5px; top: 5px" />
                            </div>
                        </div>
                        <div class="mb-3 font-bold text-center">{{ slotProps.data.name }}</div>
                        <div class="mb-3 font-medium text-center">{{ slotProps.data.price }} $</div>
                    </div>
                </template>
            </Carousel>


        </body>
    </div>

</template>


<script lang="ts"> 
    export default{
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
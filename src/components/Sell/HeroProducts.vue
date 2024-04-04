<template>
    <div class="flex flex-row justify-content-center gap-3 ">

        <div class="card max-w-30rem shadow-7">
            <Carousel :value="products" :showNavigators="false" :numVisible="1" :numScroll="1" circular :autoplayInterval="4000">
                <template #item="slotProps">
                    <div class="">
                        <div class="mb-3">
                            <div class="relative mx-auto">
                                <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg"
                                    class="w-full border-round" preview />
                                <Tag value="Stock" severity="success" class="absolute" style="left: 5px; top: 5px" />
                            </div>
                        </div>
                        <div class="mb-3 font-bold">{{ slotProps.data.name }}</div>
                        <div class="mb-3 font-medium">{{ slotProps.data.price }}</div>
                    </div>
                </template>
            </Carousel>
        </div>

        <!-- Recordar cambiarlo con la api debe haber una sección de Ofertas -->
        <div class="flex flex-column justify-content-center text-center border-round-lg shadow-7">
            <Image src="https://milanobagsstore.com/images_product/cartera-tote-bag-ds-3403-color-marron-1-large.png" alt="Image" width="250"/>
            <label>Stylish Leather Bag</label>
            <span>$29.99</span>
        </div>
 


    </div>




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
};
</script>

<style></style>

<!-- <div class="shadow-3 surface-card p-3">
    <Carousel :value="products" :numVisible="1" :numScroll="1" orientation="horizontal" 
        class="flex flex-rows justify-content-center align-content-center " 
        verticalViewPortHeight="330px" contentClass="">
        <template #item="slotProps">
            <div class="">
                <div class="">
                    <div class="">
                        <Image src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" class=""
                        preview />
                        <Tag value="Stock" severity="success" class="" style="left: 5px; top: 5px" />
                    </div>
                </div>
                <div class="">{{ slotProps.data.name }}</div>
                <div class="">
                    <div class="">${{ slotProps.data.price }}</div>
                    <div>
                        <Button icon="pi pi-heart" severity="danger" outlined />
                        <Button icon="pi pi-shopping-cart" class="p-ml-2" />
                    </div>
                </div>
            </div>
        </template>
    </Carousel>
</div> -->

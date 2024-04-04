<template>       
    
    <div class="card">
        <Carousel :value="products" :numVisible="3" :numScroll="1" circular :autoplayInterval="4000">
            
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" class="w-full border-round" preview />
                            <Tag value="Stock" severity="success" class="absolute" style="left: 5px; top: 5px" />
                        </div>
                    </div>
                    <div class="mb-3 font-bold">{{ slotProps.data.name }}</div>
                    <div class="mb-3 font-medium">{{ slotProps.data.price }}</div>
                </div>
            </template>

        </Carousel>
    </div>


    
    <!-- <div class="card">
        <Carousel :value="products" :numVisible="1" :numScroll="1" >
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2 p-3">
                    <div class="mb-3">
                        <div class="relative mx-auto">
                            <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" class="w-full border-round" />
                            <Tag value="Stock" severity="success" class="absolute" style="left: 5px; top: 5px" />
                        </div>
                    </div>
                    <div class="mb-3 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-content-between align-items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel>
    </div> -->







</template>

<script>
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
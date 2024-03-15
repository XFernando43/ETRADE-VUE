<template>
    <div class="card shadow-4 flex flex-column">

        <header class="p-4">
            <p class="flex gap-2 align-items-center justify-content font-bold text-teal-500">
                <Tag value="Stock" severity="success" />
                This Month
            </p>
            <h1 class="font-bold">Best Sellers</h1>
        </header>

        <body>

            <Carousel :showIndicators="false" :showNavigators="false" :value="products" :numVisible="5" :numScroll="1" circular :autoplayInterval="4000">
                <template #item="slotProps">

                    <div class="flex flex-column gap-2 border-3 border-blue-50 border-round m-2 p-3 surface-100 relative">

                        <header class="flex flex-column gap-1 align-items-start">
                            <h1>Full Sleev Tshirt</h1>
                            <div class="flex flex-row gap-2">
                                <span class="font-bold hover:text-pink-500">$299.99</span>    
                                <span class="line-through text-bluegray-500 font-semibold">$299.99</span>    
                            </div>
                        </header>
                        
                        
                        <body>
                            <img src="../../assets/images/product/fashion/product-18.png" 
                                    class="w-full imgAnimation" preview />                            
                        </body>


                        <Tag value="UnStock" severity="danger" class="absolute" style="right: 20px; top: 5px" />
                    </div>

                </template>
            </Carousel>

        </body>


    </div>

</template>


<script>
export default{
    data(){
        return{
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
    .imgAnimation{
        transition: all 0.3s ease; 
    }
    
    .imgAnimation:hover{
        transform: scale(0.80);
    }


</style>
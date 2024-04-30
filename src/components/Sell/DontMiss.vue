<template>
    <secction class="p-32 grid grid-cols-2 max-w-7xl mx-auto bg-slate-100 rounded-lg">
        <div class="flex flex-col">
            <div class="flex flex-row items-center gap-3">
                <i class="pi pi-shopping-bag bg-violet-500 text-white rounded-full text-sm p-2"></i>
                <span class="Roboto text-sm font-semibold text-violet-600">This Week's</span>
            </div>
            
            <div class="max-w-80 mt-7">
                <h4 class="Roboto font-semibold text-5xl"> Let's Shopping Today</h4>
            </div>

            <div class="mt-8 flex flex-row gap-12 items-center text-center">
                <div class="flex flex-col justify-center items-center">
                    <span class="font-semibold text-2xl">0</span>
                    <span>Day</span>    
                </div>
                <div class="flex flex-col justify-center">
                    <span class="font-semibold text-2xl">00</span>
                    <span>Hrs</span>    
                </div>
                <div class="flex flex-col justify-center">
                    <span class="font-semibold text-2xl">00</span>
                    <span>Min</span>    
                </div>
                <div class="flex flex-col justify-center">
                    <span class="font-semibold text-2xl">00</span>
                    <span>Sec</span>    
                </div>
            </div>

            <button class="mt-8 bg-blue-600 text-center p-5 font-semibold text-white max-w-60 rounded-lg">Check it Out!</button>

        </div>

        <div>
            <img src="../../assets/images/product/poster/poster-05.png"></img>
        </div>  
    </secction>


    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
</template>

<script lang="ts">
    export default{
        data(){
            return{

            }
        }
    }

</script>
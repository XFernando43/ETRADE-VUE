<template>
    <!-- <header class="p-2 grid align-items-center">
        <div class="col-4 flex align-items-center justify-content-center"> 
            <button class="flex cursor-pointer border-none bg-transparent align-items-center">
                <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">       
            </button>    
        </div>
        <div class="col-8 flex items-center justify-content-start"> 
            <div class="flex flex-row gap-2">
                <IconField iconPosition="left" class="iconField-width">
                    <InputIcon class="pi pi-search"> </InputIcon>
                    <InputText placeholder="What are you looking for..." class="" style="width:700" />
                </IconField>
                <div class="flex flex-row gap-2">
                    <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language" class="" />
                    <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money" class="" />
                </div>
            </div>
        </div>
    </header> -->





    <header class="flex flex-row justify-content-between align-items-center p-2">
        
        <div class="flex align-items-center"> 
            <button class="flex cursor-pointer border-none bg-transparent align-items-center">
                <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">       
            </button>    
        </div>

        <div class= "flex flex-row align-items-center"> 
            <div class="flex flex-row gap-2">
                <IconField iconPosition="left" class="iconField-width">
                    <InputIcon class="pi pi-search"> </InputIcon>
                    <InputText placeholder="What are you looking for..." class="w-full" />
                </IconField>
                <div class="flex flex-row gap-2">
                    <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language" class="" />
                    <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money" class="" />
                </div>
            </div>
        </div>

    </header>

</template>

<script lang="ts">
    export default {
        data() {
            return {
                searchTerm: '',
                selectedLanguage: 'ESP',
                selectedMoney: 'USD', 
                lenguages:['ESP','ENG','ALE','AUS'],
                denominations:['USD','AUD','EUR'],
            }
        },
        methods: {
            search() {
                window.alert("HOLI");
            } 
        }
    }
</script>

<style>   
</style>

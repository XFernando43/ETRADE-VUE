<template>
    <header class="flex flex-row gap-1 align-items-center justify-content-center gap-3">
        <button class="flex cursor-pointer border-none bg-transparent align-items-center">
            <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">       
        </button>

        <div class="flex flex-row w-30rem gap-2">
            <IconField iconPosition="left" class="iconField-width">
                <InputIcon class="pi pi-search"> </InputIcon>
                <InputText placeholder="What are you looking for..." class="" />
            </IconField>        
            <div class="flex flex-row gap-2">
                <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language" class="" />
                <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money" class="" />
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

<template>
    <header class="flex flex-row gap-1 align-items-center justify-content-center">
        <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">       
        <IconField iconPosition="left" class="iconField-width">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText placeholder="What are you looking for..." class="max-w-29rem" />
        </IconField>        
        <div class="flex flex-row gap-3">
            <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language" class="w-full md:w-14rem" />
            <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money" class="w-full md:w-14rem" />
        </div>
    </header>
</template>

<script lang="ts">
    import { RouterLink } from 'vue-router';
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

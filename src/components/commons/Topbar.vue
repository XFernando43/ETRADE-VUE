<template>
    <header class="header">
        <img class="logo" src="../../assets/images/logo/logo.png" alt="">
        <IconField iconPosition="left" class="iconField-width">
            <InputIcon class="pi pi-search"> </InputIcon>
            <InputText placeholder="What are you looking for..." class="iconField-width" />
        </IconField>        
        <div class="btn-container">
            <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language" class="w-full md:w-14rem" />
            <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money" class="w-full md:w-14rem" />
        </div>
    </header>


    <div class="flex flex-column">
        <RouterLink to="/about">about</RouterLink>

        <RouterLink to="/product">product</RouterLink>

    </div>

</template>

<script lang="ts">

    import { RouterLink } from 'vue-router';

    import { ref } from 'vue';
    const value1 = ref(null);
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

    .iconField-width{
        width: 900px;
    }

    .header {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        max-width: 1440px;
        align-items: center;
        margin-inline: auto;
        padding: 10px;
    }

    .logo{ 
        height: 100%;
        object-fit: cover;
    }

    .btn-container {
        display: flex;
        flex-direction: row;
        padding: 0.4rem;
        gap: 0.4rem;
    }
    
</style>

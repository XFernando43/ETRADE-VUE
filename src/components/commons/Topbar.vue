<template>
    <header class="pr-14 pl-14 pt-3 pb-3 flex flex-row justify-between items-center mx-auto md:max-w-7xl ">
        <div>
            <button class="flex cursor-pointer m-0 border-none bg-transparent align-items-center" @click="search">
                <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">
            </button>
        </div>
        
        <div class="hidden md:flex lg:flex relative ">
            <InputText placeholder="What are you looking for ..." class="p-3 pl-10 input border border-green-300" />
            <i class="pi pi-search absolute left-3 top-3 text-gray-400"></i>
        </div>

        <div class="flex flex-row gap-2">
            <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language"
                class="font-semibold" />
            <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money"
                class="font-semibold" />
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
            lenguages: ['ESP', 'ENG', 'ALE', 'AUS'],
            denominations: ['USD', 'AUD', 'EUR'],
        }
    },
    methods: {
        search() {
            window.alert("HOLI");
        }
    }
}
</script>

<style scoped>

.input{
    width: 900px;
}

@media screen and (min-width: 300px) {
    .input{
        width: 200px;
    }
}

@media screen and (min-width: 1024px) {
    .input{
        min-width: 500px;
    }
}

@media screen and (min-width: 1260px) {
    .input{
        min-width: 800px;
    }
}

</style>

<template>

    <header class="p-2 flex justify-content-center ">

        <div class="flex flex-row ">

            <div>

                <button class="flex cursor-pointer border-none bg-transparent align-items-center" @click="search">
                    <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">
                </button>


            </div>

            <div class="flex flex-row align-items-center gap-2">

                <!-- input de texto -->
                
                <div class="flex gap-2">
                    
                    <IconField iconPosition="left" class="">
                        <InputIcon class="pi pi-search"></InputIcon>
                        <InputText placeholder="Search" />

                    </IconField>
                    
                </div>


                <div class="flex flex-row gap-2">
                    <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language"
                        class="font-bold" />
                    <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money"
                        class="font-bold" />
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
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: 20em;
    padding-inline: 3rem;
    background-color: white;

    /* position: fixed;
		top: 0;
		left: 0;
        z-index: 10; */


}

.input {
    width: 500px;
}
</style>

<template>
    <!-- <header class="p-3 flex justify-content-center "> -->
    <!-- <header class="">
        <div class="flex flex-row gap-3">
            <div>
                <button class="flex cursor-pointer m-0 border-none bg-transparent align-items-center" @click="search">
                    <img class="h-full bg-cover" src="../../assets/images/logo/logo.png" alt="">
                </button>
            </div>
            <div class="flex flex-row align-items-center gap-2">
                <div class="flex gap-2">
                    <IconField iconPosition="left" class="">
                        <InputIcon class="pi pi-search"></InputIcon>
                        <InputText placeholder="what are you looking for ..."  class="w-30rem"/>
                    </IconField>
                </div>
                <div class="flex flex-row gap-2">
                    <Dropdown v-model="selectedLanguage" :options="lenguages" placeholder="Select Language"
                        class="font-semibold" />
                    <Dropdown v-model="selectedMoney" :options="denominations" placeholder="Select Money"
                        class="font-semibold" />
                </div>
            </div>
        </div>
    </header> -->

    <!-- <Button>PIPI</Button> -->
    <Tag>PIPI</Tag>

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

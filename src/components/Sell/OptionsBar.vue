<template>
    <div class="flex flex-row justify-between items-center p-6 mt-2 mx-auto md:max-w-7xl">
        
        <CascadeSelect v-model="selectedCity" :options="countries" optionLabel="cname" optionGroupLabel="name" class="border border-green-400"
                        :optionGroupChildren="['states', 'cities']" style="min-width: 14rem" placeholder="Select a City" />

        <div class="hidden md:flex menu-item" v-for="(item, index) in menuItems" :key="index">
            <span class="Roboto sm:text-xs md:text-sm lg:text-lg">{{ item }}</span>
            <div class="underline"></div>
        </div>

        <div class="flex flex-row gap-4">
            <Button> <i class="pi pi-heart"></i> </Button>
            <Button> <i class="pi pi-shopping-cart"></i> </Button>
            <Button> <i class="pi pi-user"></i> </Button>
        </div>

    </div>
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
            selectedCity: null,
            countries: [
                {
                    name: 'Australia',
                    code: 'AU',
                    states: [
                        {
                            name: 'New South Wales',
                            cities: [
                                { cname: 'Sydney', code: 'A-SY' },
                                { cname: 'Newcastle', code: 'A-NE' },
                                { cname: 'Wollongong', code: 'A-WO' }
                            ]
                        },
                        {
                            name: 'Queensland',
                            cities: [
                                { cname: 'Brisbane', code: 'A-BR' },
                                { cname: 'Townsville', code: 'A-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'Canada',
                    code: 'CA',
                    states: [
                        {
                            name: 'Quebec',
                            cities: [
                                { cname: 'Montreal', code: 'C-MO' },
                                { cname: 'Quebec City', code: 'C-QU' }
                            ]
                        },
                        {
                            name: 'Ontario',
                            cities: [
                                { cname: 'Ottawa', code: 'C-OT' },
                                { cname: 'Toronto', code: 'C-TO' }
                            ]
                        }
                    ]
                },
                {
                    name: 'United States',
                    code: 'US',
                    states: [
                        {
                            name: 'California',
                            cities: [
                                { cname: 'Los Angeles', code: 'US-LA' },
                                { cname: 'San Diego', code: 'US-SD' },
                                { cname: 'San Francisco', code: 'US-SF' }
                            ]
                        },
                        {
                            name: 'Florida',
                            cities: [
                                { cname: 'Jacksonville', code: 'US-JA' },
                                { cname: 'Miami', code: 'US-MI' },
                                { cname: 'Tampa', code: 'US-TA' },
                                { cname: 'Orlando', code: 'US-OR' }
                            ]
                        },
                        {
                            name: 'Texas',
                            cities: [
                                { cname: 'Austin', code: 'US-AU' },
                                { cname: 'Dallas', code: 'US-DA' },
                                { cname: 'Houston', code: 'US-HO' }
                            ]
                        }
                    ]
                }
            ],
            menuItems: ['Home', 'Shop', 'Pages', 'About', 'Blog', 'Contact']
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
   
    .menu-item {
        position: relative;
        cursor: pointer;
        font-weight: bold;
    }
    .menu-item .underline {
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #007bff;
        transition: width 0.3s;
    }
    .menu-item:hover .underline {
        width: 100%;
    }
  
</style>

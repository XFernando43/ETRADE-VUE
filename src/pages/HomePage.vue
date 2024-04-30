<template>
    <Topbar></Topbar>
    <OptionsBar/>
    <HeroProducts/>
    <BestSeller/>
    
    <!-- 
    <PolicesItem/>
    <ThisWeekend/> -->
    <!-- <HeroProducts/> -->

</template>


<script lang="ts">
    import Topbar from '../components/commons/Topbar.vue';
    import OptionsBar from '../components/Sell/OptionsBar.vue';
    import HeroProducts from '../components/Sell/HeroProducts.vue';
    import BestSeller from '../components/Sell/BestSeller.vue';
    // import PolicesItem from '../components/Sell/PolicesItems.vue';
    // import ThisWeekend from '../components/Sell/ThisWeekend.vue';

    export default{
        data(){
            return{

            }
        },
        components: {   
            Topbar,
            OptionsBar,
            HeroProducts,
            BestSeller
        }
    }

</script>
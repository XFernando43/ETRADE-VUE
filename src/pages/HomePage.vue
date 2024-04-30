<template>
    <Topbar></Topbar>
    <OptionsBar/>
    <HeroProducts/>
    <PolicesItems/>
    <BestSeller/>
    <ThisWeekend/> 
    <DontMiss/>

</template>


<script lang="ts">
    import Topbar from '../components/commons/Topbar.vue';
    import OptionsBar from '../components/Sell/OptionsBar.vue';
    import HeroProducts from '../components/Sell/HeroProducts.vue';
    import BestSeller from '../components/Sell/BestSeller.vue';
    import PolicesItems from '../components/Sell/PolicesItems.vue';
    import ThisWeekend from '../components/Sell/ThisWeekend.vue';
    import DontMiss from '../components/Sell/DontMiss.vue';

    export default{
        data(){
            return{

            }
        },
        components: {   
            Topbar,
            OptionsBar,
            HeroProducts,
            BestSeller,
            PolicesItems,
            ThisWeekend,
            DontMiss
        }
    }

</script>
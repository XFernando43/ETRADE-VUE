<template>
    <Topbar></Topbar>
    <OptionsBar></OptionsBar>
    <BestSeller></BestSeller>
    <DontMiss></DontMiss>
    <PolicesItems></PolicesItems>
    <ThisWeekend></ThisWeekend>
    <HeroProducts></HeroProducts>
    <!-- <testing></testing> -->
</template>

<script lang="ts">
import Topbar from '../components/commons/Topbar.vue';
import BestSeller from '../components/Sell/BestSeller.vue';
import OptionsBar from '../components/Sell/OptionsBar.vue';
import DontMiss from '../components/Sell/DontMiss.vue';
import testing from '../components/Sell/testing.vue';
import ThisWeekend from '../components/Sell/ThisWeekend.vue';
import HeroProducts from '../components/Sell/HeroProducts.vue';

import PolicesItems from '../components/Sell/PolicesItems.vue';
    export default{
        data(){
            return{

            }
        },
        components:{
            Topbar,
            BestSeller,
            OptionsBar,
            DontMiss,
            PolicesItems,
            ThisWeekend,
            HeroProducts,
            testing
        }
    }
</script>
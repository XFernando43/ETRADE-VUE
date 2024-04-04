<template>
    <Topbar></Topbar>
    <OptionsBar/>

</template>


<script lang="ts">
    import Topbar from '../components/commons/Topbar.vue';
    import OptionsBar from '../components/Sell/OptionsBar.vue';
    export default{
        data(){
            return{

            }
        },
        components: {   
            Topbar,
            OptionsBar
        }
    }

</script>
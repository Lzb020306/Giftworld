<template>
    <div class="box">
        <top></top>
        <count class="count"></count>
        <bottom class="bottom"></bottom>
    </div>
</template>



<script>
import top from "../components/income-top"
import count from "../components/income-count"
import bottom from "../components/bottom"
export default {
    data() {
        return {
            
        };
    },
    mounted() {
        
    },
    methods: {
        
    },
    components:{
        top,
        count,
        bottom
    }
};
</script>

<style scoped>
.box{
    height: 17.82rem;
    background-color: #F1F3F9;
}
    .bottom{
        position: fixed;
        bottom: 0;
        height: 1.6rem;
    }
    .count{
        margin-left: 18px;
        position: absolute;
        top: 2.62rem;
    }
</style>
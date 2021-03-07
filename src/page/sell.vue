<template>
    <div>
        <count :time="date"></count>
    </div>
</template>

<script>
import count from "../components/sell-count"
export default {
    data() {
        return {
            date:this.$route.query.place
        };
    },
    mounted() {
        console.log(this.$route.query.place)
    },
    methods: {
        
    },
    components:{
        count
    }
};
</script>
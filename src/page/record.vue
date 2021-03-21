<template>
    <div>
        <count></count>
    </div>
</template>

<script>
import count from "../components/record-count"
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
<template>
    <div>
        <count :lise="code"></count>
    </div>
</template>
 
 <script>
import count from "../components/Withdrawal-count";
export default {
  data() {
    return {
      code: 0,
    };
  },
  mounted() {
   let str = this.$route.query.place;
    if(!str) return
    let arr = parseFloat(str);
    this.code = arr;
  },
  methods: {
    
  },
  components: {
    count,
  },
};
</script>
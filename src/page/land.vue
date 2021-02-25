<template>
  <div class="box">
    
    <land :password="code"></land>
    <button @click="add()">222</button>
  </div>
</template>
<script>
import land from "../components/land-count";
export default {
  data() {
    return {
        code:this.$route.query.place
    };
  },
 
  mounted() {},
  methods: {
      add(){
          console.log(this.$route.query.place)
      }
  },
  components: {
    land,
  },
};
</script>

<style  scoped>
.box {
  width: 7.5rem;
  height: 16.24rem;
  background: #f4f6fa;
}
</style>
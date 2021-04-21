<template>
  <div class="box">
    <land :password="code" @content="getcode"></land>
  </div>
</template>
<script>
import land from "../components/land-count";
export default {
  data() {
    return {
      code:[],
    };
  },

  mounted() {
    let str = this.$route.query.place;
    if(!str) return
    let arr = str.split("");
    this.code = arr;
  },
  methods: {
    getcode(e){
      console.log(e)
      this.code=e.split("")
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
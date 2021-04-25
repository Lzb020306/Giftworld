<template>
  <div>
    <my :password="list" :passwort="liste"></my>
    <bottom class="bottom" v-if="but" :list="code"></bottom>
  </div>
</template>

<script>
import my from "../components/my-count";
import bottom from "../components/bottom";
export default {
  data() {
    return {
      but:true,
      code:4,
      list:50.56,
      liste:1000
    };
  },
  mounted() {
    let src = this.$route.query.diamonds;
    if(!src) return
    let aee = parseFloat(src);
    this.liste = aee;
  },
  created(){
    let str = this.$route.query.place;
    if(!str) return
    let arr = parseFloat(str);
    this.list = arr;
  },
  methods: {},
  components: {
    my,
    bottom,
  },
};
</script>

<style  scoped>
.bottom {
  left: 0;
  width: 100%;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px -5px 30px 0px rgba(45, 49, 66, 0.1);
  border-radius: 20px 20px 0px 0px;
  position: fixed;
  bottom: 0;
}
</style>
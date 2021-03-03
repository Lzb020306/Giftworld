<template>
  <div class="box">
    <top class="top"></top>
    <count class="count"></count>
    <bottom class="bottom"></bottom>
  </div>
</template>

<script>
import top from "../components/proportion-top.vue";
import count from "../components/proportion-count.vue";
import bottom from "../components/bottom.vue";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    top,
    count,
    bottom
  },
};
</script>

<style  scoped>
.box {
  width: 7.5rem;
  height: 16.24rem;
  background: #f4f6fa;
}
.top{
    position: fixed;
    top: 0;
    left: 0;
}
.count{
    position: fixed;
    top: 3rem;
    left: 0.56rem;
}
.bottom{
    position: fixed;
    bottom: 0;
    height: 1.6rem;
}
</style>
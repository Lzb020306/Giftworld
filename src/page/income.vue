<template>
  <div class="box">
    <top></top>
    <count class="count"></count>
    <bottom class="bottom"></bottom>
  </div>
</template>



<script>
import top from "../components/income-top";
import count from "../components/income-count";
import bottom from "../components/bottom";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    top,
    count,
    bottom,
  },
};
</script>

<style scoped>
.box {
  height: 17.82rem;
  background-color: #f1f3f9;
}
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
.count {
  margin-left: 18px;
  position: absolute;
  top: 2.62rem;
}
</style>
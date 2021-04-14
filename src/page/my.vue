<template>
  <div>
    <my></my>
    <bottom class="bottom" v-if="but"></bottom>
  </div>
</template>

<script>
import my from "../components/my-count";
import bottom from "../components/bottom";
export default {
  data() {
    return {
      but:false
    };
  },
  mounted() {},
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
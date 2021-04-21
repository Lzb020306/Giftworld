<template>
  <div>
    <count></count>
    <but class="botton" :list="code"></but>
  </div>
</template>

<script>
import but from "../components/bottom.vue";
import Count from "../components/index-count.vue";


export default {
  data() {
    return {
      code:0
    };
  },
  components: {
    but,
    Count
  },
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
  border: 0;
}


.botton {
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

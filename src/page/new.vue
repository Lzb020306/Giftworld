<template>
  <div>
    <div
      @click="changeColor(index)" v-for="(item, index) in list" :key="index" :style="{color:item.active?'red':'black',background:item.active?'gray':'green'}"
    >
      {{ item.txt }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          txt: "第一",
          active: false,
        },
        {
          txt: "第二",
          active: false,
        },
        {
          txt: "第三",
          active: false,
        },
        {
          txt: "第四",
          active: false,
        },
      ],
    };
  },
  methods: {
    changeColor(i) {
      this.list.map((item) => {
        item.active = false;
      });
      this.list[i].active = true;
    },
  },
};
</script>

<style >

</style>

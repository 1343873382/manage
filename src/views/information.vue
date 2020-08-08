<template>
  <main>
    <el-menu
      default-active="User"
      class="menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        index="keywords"
      >关键字回复</el-menu-item>
      <el-menu-item
        index="Sensitive"
      >收到消息回复</el-menu-item>
      <el-menu-item
        index="BarrageLuckyBag"
      >被关注回复</el-menu-item>
     
    </el-menu>
    <component :is="currentComponent" />
  </main>
</template>

<script>
import keywords from '../components/reply/keywords.vue'
import Sensitive from '../components/Sensitive.vue'
import BarrageLuckyBag from '../components/BarrageLuckyBag.vue'


export default {
  components: {
    keywords,
    Sensitive,
    BarrageLuckyBag,
   
  },

  data() {
    return {
      currentComponent: 'keywords',
    }
  },

  methods: {
    handleSelect(index) {
      this.currentComponent = index
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  width: 80vw;
}
</style>
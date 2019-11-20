<template>
  <main>
    <el-menu
      default-active="User"
      class="menu"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        index="User"
      >用户管理</el-menu-item>
      <el-menu-item
        index="Sensitive"
      >弹幕管理</el-menu-item>
      <el-menu-item
        index="BarrageLuckyBag"
      >弹幕红包</el-menu-item>
      <el-menu-item
        index="RandomLuckyBag"
      >随机红包</el-menu-item>
    </el-menu>
    <component :is="currentComponent" />
  </main>
</template>

<script>
import User from '../components/User.vue'
import Sensitive from '../components/Sensitive.vue'
import BarrageLuckyBag from '../components/BarrageLuckyBag.vue'
import RandomLuckyBag from '../components/RandomLuckyBag.vue'

export default {
  components: {
    User,
    Sensitive,
    BarrageLuckyBag,
    RandomLuckyBag,
  },

  data() {
    return {
      currentComponent: 'User',
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

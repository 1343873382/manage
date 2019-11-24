<template>
  <el-main>
    红包个数：
    <div class="wrapper">
      <el-input-number
        v-model="num"
        :min="1"
        :max="8"
      ></el-input-number>
    </div>
    <el-button type="primary" @click="sendRandomLuckyBag">确定</el-button>
  </el-main>
</template>

<script>
import { sendRandomLB } from '@/api'

export default {
  name: 'RandomLuckyBag',

  data() {
    return {
      num: 1,
    }
  },

  methods: {
    async sendRandomLuckyBag() {
      try {
        const data = await sendRandomLB(this.num)

        if (data.status === 200) {
          this.$message('发送成功...')
        } else {
          this.$message.error('发送失败...')
        }
      } catch (e) {
        this.$message.error('网络错误...')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 1vw 0;
}
</style>

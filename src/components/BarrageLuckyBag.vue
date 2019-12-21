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
    红包关键词：
    <el-input class="wrapper" v-model="keyword" placeholder="Redrock 🐂🍺"></el-input>
    持续时间：
    <div class="wrapper">
      <el-time-select
        v-model="time"
        :picker-options="{
          start: '00:05',
          step: '00:01',
          end: '02:00'
        }"
        placeholder="选择时间">
      </el-time-select>
    </div>
    <el-button type="primary" @click="sendBarrageLuckyBag">确定</el-button>
  </el-main>
</template>

<script>
import { sendBarrageLB } from '@/api'
import { Message } from 'element-ui'

export default {
  name: 'BarrageLuckyBag',

  data() {
    return {
      num: 2,
      keyword: '',
      time: '',
    }
  },

  methods: {
    async sendBarrageLuckyBag() {
      try {
        const data = await sendBarrageLB(this.num, this.keyword, this.time)

        if (data.code === '10000') {
          Message('发送成功...')
        } else {
          Message.error('发送失败...')
        }
      } catch (e) {
        Message.error('网络错误...')
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

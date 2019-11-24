<template>
  <el-main>
    <div class="title">添加的敏感词：</div>
    <el-input v-model="addSensitive" placeholder="请输入添加的敏感词"></el-input>
    <el-button type="primary" class="btn" @click="addToBlackList">添加</el-button>
    <div class="title">移除的敏感词：</div>
    <el-input v-model="delSensitive" placeholder="请输入移除的敏感词"></el-input>
    <el-button type="primary" class="btn" @click="delFromBlackList">移除</el-button>
  </el-main>
</template>

<script>
import { addSensitive, delSensitive } from '@/api'

export default {
  name: 'Sensitive',

  data() {
    return {
      addSensitive: '',
      delSensitive: '',
    }
  },

  methods: {
    async addToBlackList() {
      try {
        const data = await addSensitive(this.addSensitive)

        if (data.code === 10000) {
          this.$message('添加成功...')
        } else {
          this.$message.error('添加失败...')
        }
      } catch (e) {
        this.$message.error('网络错误...')
      }
    },

    async delFromBlackList() {
      try {
        const data = await delSensitive(this.delSensitive)

        if (data.code === 10000) {
          this.$message('移除成功...')
        } else {
          this.$message.error('移除失败...')
        }
      } catch (e) {
        this.$message.error('网络错误...')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 1vw;
}
.btn {
  margin: 1vw 0;
}
</style>

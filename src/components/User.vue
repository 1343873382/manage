<template>
  <el-main>
    <div class="title">添加到黑名单的 RedId：</div>
    <el-input v-model="addRedid" placeholder="请输入添加的 RedId"></el-input>
    <el-button type="primary" class="btn" @click="addToBlackList">添加</el-button>
    <div class="title">从黑名单移除的 RedId：</div>
    <el-input v-model="delRedid" placeholder="请输入移除的 RedId"></el-input>
    <el-button type="primary" class="btn" @click="delFromBlackList">移除</el-button>
  </el-main>
</template>

<script>
const API = 'https://wx.redrock.team/234/barrage/admin/blacklist/'

export default {
  name: 'User',

  data() {
    return {
      addRedid: '',
      delRedid: '',
    }
  },

  methods: {
    async addToBlackList() {
      try {
        const { data } = await this.$axios.post(API, {
          word: this.addRedid,
        })

        if (data.code === 10000) {
          this.$message('ban 人成功...')
        } else {
          this.$message.error('ban 人失败...')
        }
      } catch (e) {
        this.$message.error('网络错误...')
      }
    },

    async delFromBlackList() {
      try {
        const { data } = await this.$axios.delete(API, {
          word: this.delRedid,
        })

        if (data.code === 10000) {
          this.$message('恢复成功...')
        } else {
          this.$message.error('恢复失败...')
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

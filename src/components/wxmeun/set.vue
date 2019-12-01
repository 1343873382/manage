<template>
    <div class="set">
        <div v-show="set.type">
        <div class="delete  clearFix">
            <a @click="del()">删除</a>
        </div>
        <div>
            <label>
                类型:{{set.type}}
            </label>
        </div>
        </div>
        <div v-for="(item , name) in detail" :key="item+name">
            <label v-show="name != 'type'">
                <p> {{name}}: </p>
                <el-input    v-model="set[name]" placeholder="请输入内容"></el-input>
            </label>
        </div>
        <div class="done">
            <a @click="done()">修改完成</a>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-alert */
import { Input } from 'element-ui'

export default {
  data() {
    return {
      set: {},
      type: '',
    }
  },
  computed: {
    detail() {
      const { id } = this.$route.query
      const { index } = this.$route.query
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.set = this.copy(this.test.button[id].sub_button.list[index])
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.type = this.set.type
      return this.test.button[id].sub_button.list[index]
    },
  },
  components: {
    'el-input': Input,
  },
  methods: {
    del() {
      const { id } = this.$route.query
      const { index } = this.$route.query
      this.test.button[id].sub_button.list.splice(index, 1)
      alert('删除成功')
      this.$router.push({ path: '/meun' })
    },
    done() {
      const { id } = this.$route.query
      const { index } = this.$route.query
      if (this.check()) {
        this.test.button[id].sub_button.list[index] = this.set
        alert('修改成功')
      } else {
        alert('修改格式不能为空')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.set{
    width: 80%;
    height: 100%;
    margin-top: 50px;
    position: relative;
    padding: 0 50px;
    div{
        margin: 15px 0 ;
   }
    p{
        margin:  0 0;
        padding:  0  0;
    }
    .delete {
        a{
            float: right;
            font-size: 16px;
            color: red;
        }
    }
    .done{
        width: 100%;
        height: 50px;
        position:absolute;
        bottom: 50px;
        a{
            cursor: pointer;
            color: blue;
        }
    }
}
.el-input{
  width: 20rem;
}
</style>

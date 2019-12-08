<template>
    <div class="add">
        <div>
            <label>
            <el-radio v-model="type"    label="1" checked="checked" >跳转页面</el-radio>
              <el-radio  v-model="type"   label="2" >图文信息</el-radio>
            </label>
        </div>
        <div v-if="type === '1'">
            <div  v-for=" (item , name) in view" :key="'view'+name"  v-show="!(name == 'type')">
                <label>
                    <p class="name">{{name}} :</p>
                    <el-input  v-model="view[name]" placeholder="请输入内容"></el-input>
                </label>
            </div>
        </div>
        <div v-if="type === '2'">
            <div  v-for=" (item , name) in click" :key="'click'+name"   v-show="!(name == 'type')">
                <label>
                    <p class="name">{{name}} :</p>
                    <el-input    v-model="click[name]" placeholder="请输入内容"></el-input>
                </label>
            </div>
        </div>
        <div class="addClick">
            <a  @click="addList()">添加</a>
        </div>
    </div>
</template>

<script>
import { radio, Input } from 'element-ui'

export default {
  data() {
    return {
      type: '1',
      view: {
        name: '',
        type: 'view',
        url: '',
      },
      click: {
        key: '',
        name: '',
        type: 'click',
      },
    }
  },
  components: {
    'el-radio': radio,
    'el-input': Input,
  },
  methods: {
    addList() {
      const { id } = this.$route.query
      const add = this.type === '1' ? { name: this.view.name, type: this.view.type, url: this.view.url } : { key: this.click.key, name: this.click.name, type: this.click.type }

      console.log(add)
      if (this.check(add)) {
        this.test.button[id].sub_button.list.push(add)
        alert('添加成功')
        this.$router.push({ path: '/meun' })
      } else {
        alert('请正确填入相关信息')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.addName{
    width: 25em;
     height: 2.4em;
}
.add{
    position: relative;
    margin-top: 50px;
    width: 100%;
    height: 100%;
    padding:  0 25px;
    div{
        margin: 15px 0 ;
    }
    p{
        margin: 0 0 ;
        padding:0 0;
    }
    .addClick{
        position: absolute;
        width: 100%;
        height: 50px;
        bottom: 50px;
        a{
            color: blue;
        }
    }
}
.el-input{
  width: 20rem;
}
</style>

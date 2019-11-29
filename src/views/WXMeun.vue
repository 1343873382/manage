<template>
    <div class="meun">
      <div class="pone">
       <ul>
        <Meun
        v-for="(item , index) in meun"
        :key= index+item
       :sMeun="item['sub_button']  ?   item['sub_button'].list : [] "
       :id= index
        >
        <a class="meunName">{{item.name}}</a>
        </Meun>
      </ul>
    </div>
    <div class="meunSet">
      <router-view></router-view>
            <div class="send">
                 <a @click="sendList()">提交保存</a>
            </div>
    </div>
    </div>
</template>

<script>
import { getList, send } from '../api/index'

export default {
  data() {
    return {
      meun: [],
      data: null,
    }
  },
  components: {
    Meun: () => import('../components/wxmeun/meunBtn.vue'),
  },
  created() {
    const that = this
    getList(that)
  },
  methods: {
    sendList() {
      this.data.selfmenu_info = this.test
      send(this.data)
    },
  },
}
</script>

<style lang="scss" scoped>
$minWight : 350px;
.meun{
    font-size: 20px;
    margin: 0 2.5em 0 2.5em;
    padding-top: 2em;
    height: 100%;
    display: flex;
    margin-right: 0;
    .pone{
        display: flex;
        align-items: flex-end;
        min-width: $minWight;
        height: 25rem;
        box-shadow: 0 1px 5px gray;
        ul{
            display: flex;
        }
    }
    .meunSet{
        width: 30rem;
       height: 25rem;
        box-shadow: 0 1px 5px gray;
        margin-left: 50px;
        position: relative;
        .send{
            position: absolute;
            height: 50px;
            width: 100%;
            bottom: -100px;
            a{
                color: blue;
                text-align: center;
            }
        }
    }
}
</style>

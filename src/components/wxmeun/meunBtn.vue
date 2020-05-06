<template>
  <li ref="li" @click="isShow()">
    <slot></slot>
    <div
    class="btns"
    v-show=" show"
    >
    <router-link
    :to="{name : 'add' , query : {'id' : id}}"
    >+</router-link>
    <router-link
    v-for="(item  , index) in sMeun"
    :key = index+item
    :to="{name:'set' , query:{id : id, index : index}}"
    >
    {{item.name}}
    </router-link>
    </div>
  </li>
</template>


<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  props: ['sMeun', 'id'],
  methods: {
    isShow() {
      this.show = !this.show
      if (this.show) {
        const that = this
        document.body.addEventListener('click', () => {
          that.show = false
        }, true)
        this.$refs.li.addEventListener('click', () => {
          that.show = !that.show
        })
      } else {
        const that = this
        document.body.removeEventListener('click', () => {
          that.show = false
        }, true)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
li{
    font-size: 20px;
    line-height: 3em;
     min-width: 5em;
     padding: 0  .5em;
     cursor: pointer;
     background-color: #c2c2c2;
     border-right: 1px solid #e7e7eb;
     position: relative;
     .meunName{
       text-align: center;
       display: block;
       width: 100%;
       height: 100%;
     }
     .btns{
         font-size: 20px;
         min-width: 150px;
         min-height:50px;
         background-color:  #c2c2c2;
         position: absolute;
         bottom: 3.5em;
         &::after{
             content: ' ';
             width: 0;
             height: 0;
             border-right:7px solid transparent;
             border-left:7px solid transparent;
             border-top:7px solid #c2c2c2;
             position: absolute;
             bottom: -7px;
             left: 20px;
         }
         a{
             font-size: 16px;
             line-height:2.6em;
             margin: 0   .5em;
             display: block;
             text-align: center;
             border-bottom: 1px solid #e7e7eb;
             &:hover{
                 background-color: #cccccc;
             }
         }
     }
 }
</style>

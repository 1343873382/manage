<template>
    <div>
        <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>自动回复</span>
    <el-button style="float: right; padding: 3px 0" type="text"><el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch></el-button>
  </div >
  <div  class="text item first" >
    <input placeholder="请输入关键字" v-model="keyword">
  <input placeholder="请输入回复"  v-model="reply">
  <button @click="add">提交</button>
  </div>
  <!-- 关键字表格 -->
   <div  class="text item">
    <el-table
    :data="tableData"
    style="width:1000px; height:500px; overflow:scroll;">
    <el-table-column
      label="关键词"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.key }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="回复"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>回复: {{ scope.row.replying }}</p>
         
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.replying }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</el-card>
    </div>
 </template>
<script>
  export default {
    data() {
      return {
        value: true,
        input2 :'',
        tableData: [{
          key: ' ',
          replying: ' ',
         
        }, ],
        keyword: '',
        reply: ''
      }
    },
     methods: {
      
     
      handleDelete(index) {
        this.tableData.splice(index, 1);
      },
       add(){
      this.tableData.push({key:this.keyword,replying:this.reply});
      this.keyword='';
      this.reply='';
    }
      
      
    },
   

  };
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
      position: relative;
      top:70px;
      left: 70px;
    width: 1000px;
    height:500px ;
  }
  .search{
      width: 200px;
  }
  .first{
      display: flex;
  }
  .add{
      border: 1px solid skyblue;
      position: absolute;
      right: 50px;
      
  }
</style>
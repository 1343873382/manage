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
    <el-button type="primary" @click="dialogVisible = true">添加</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
 <el-form ref="form" :model="addform" label-width="80px">
  <el-form-item label="关键字">
    <el-input v-model="addform.keyword"></el-input>
  </el-form-item>
   <el-form-item label="回复">
    <el-input v-model="addform.reply"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false;addparams()">确 定</el-button>
  </span>
</el-dialog>
  </div>
  <!-- 关键字表格 -->
   <div  class="text item">
    <el-table
    :data="tableData"
    style="width:1000px; height:300px; overflow:scroll;">
    <el-table-column
      label="关键词"
      width="180"
      :data="tableData">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.keyword }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="回复"
      width="180"
      >
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>回复: {{ scope.row.msg }}</p>
         
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.msg }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
         <el-button
          size="mini"
          @click="editdialogVisible = true">编辑</el-button>
          <el-dialog
  title="提示"
  :visible.sync="editdialogVisible"
  width="30%"
  :before-close="handleClose">
 <el-form ref="form" :model="editform" label-width="80px">
  <el-form-item label="关键字">
    <el-input v-model="editform.keyword"></el-input>
  </el-form-item>
   <el-form-item label="回复">
    <el-input v-model="editform.reply"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="editdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="editdialogVisible = false;editparams( scope.row.id)">确 定</el-button>
  </span>
</el-dialog>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete( scope.row.id)">删除</el-button>
          
      </template>
    </el-table-column>
  </el-table>
  </div>
</el-card>
    </div>
 </template>

<script>
  import axios from 'axios'
  export default {
    inject: ['reload'],
     created() {
       this.getinformation();
      
    },
    mouted(){
      this.getinformation();
    },
    data() {
      return {
        value: true,
        input2 :'',
        tableData: [ ],
        keyword: '',
        reply: '',
          dialogVisible: false,
          editdialogVisible: false,
           addform: {
          keyword: '',
          reply:''
          
        },
        editform: {
          keyword: '',
          reply:''
          
        }
      }
    },
     methods: {
       async getinformation(){

     
      
        const {data:huifu}=await this.$http.get("/reply/")
        console.log(huifu);
        this.tableData=huifu.data;
      
        console.log(this.tableData)
        
      },
     
      async handleDelete(id) {
       const{data: deletes}=await this.$http.delete('/reply/',{data:{id:id}});
       if( deletes.status!==10000){
          return this.$message.error('删除失败')
        };
        this.$message.success('删除成功');
         this.reload();
       console.log(deletes)
      },
       add(){
      this.tableData.push({id:'',type:'',keyword:this.keyword,handler_type:'',msg:this.reply,msg_type:''});
      this.keyword='';
      this.reply='';
    },
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      
     async addparams(){
       const{data:res} = await this.$http.post('/reply/',{
          keyword:this.addform.keyword,
          msg:this.addform.reply
        });
        if( res.status!==10000){
          return this.$message.error('添加失败')
        };
        this.$message.success('添加成功')
         this.reload();
        console.log(res)
      },
      async editparams(id){
        const{data:res} = await this.$http.patch('/reply/',{
          id:id,
          keyword:this.editform.keyword,
          msg:this.editform.reply
        });
        if( res.status!==10000){
          return this.$message.error('修改失败')
        };
        this.$message.success('修改成功');
         this.reload();
        console.log(res)

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
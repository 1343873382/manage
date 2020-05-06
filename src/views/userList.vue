<template>
  <div class="userlist">
    <div class="search">
      <el-input class="input" v-model="search_content" size="mini" placeholder="输入关键字搜索" />
    </div>
    <div class="usertable">
      <el-table
        :data="tableData.filter(data => !search_content || data.nickname.toLowerCase().includes(search_content.toLowerCase()) || data.sex.toLowerCase().includes(search_content.toLowerCase()))"
        stripe
        border
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="头像">
                <el-image style="width: 100px; height: 100px" :src="props.row.headimgurl" fit="fill"></el-image>
              </el-form-item>
              <el-form-item label="语言">
                <span>{{ props.row.language }}</span>
              </el-form-item>
              <el-form-item label="国家">
                <span>{{ props.row.country }}</span>
              </el-form-item>
              <el-form-item label="省份">
                <span>{{ props.row.province }}</span>
              </el-form-item>
              <el-form-item label="城市">
                <span>{{ props.row.city }}</span>
              </el-form-item>
              <el-form-item label="备注">
                <span>{{ props.row.remark }}</span>
              </el-form-item>
              <el-form-item label="标签">
                <div class="tags" v-for="item in props.row.tags" :key="item.index">
                  <el-tag class="tag">{{item}}</el-tag>
                </div>
              </el-form-item>
              <el-form-item label="关注来源">
                <span>{{ props.row.subscribe_scene }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="编号" width="100"></el-table-column>
        <el-table-column prop="openid" label="OpenId" width="230"></el-table-column>
        <el-table-column prop="nickname" label="昵称" width="230"></el-table-column>
        <el-table-column prop="sex" label="性别" width="200"></el-table-column>
        <el-table-column prop="subscribe_time" label="关注时间" width="230"></el-table-column>
      </el-table>
    </div>

    <div class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { getUserList } from '@/api'
export default {
  data() {
    return {
      tableData: [
        {
          num: 1,
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21",
          headimgurl:
            "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          language: "中文",
          country: "中国",
          province: "河北",
          city: "shiijiazhuang",
          remark: "little cute",
          tags: ["nv", "love"],
          subscribe_scene: "erweima"
        },
        {
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21",
          headimgurl:"http://hbimg.b0.upaiyun.com/0add47bc0557dbbaf1312028205e8c40fb370b968a5d-kDobdm_fw658"
        },
        {
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210002",
          nickname: "沉默",
          sex: "女",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210003",
          nickname: "拆掉成长抑郁的墙",
          sex: "男",
          subscribe_time: "2018-8-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        },
        {
          openid: "2018210005",
          nickname: "karry",
          sex: "男",
          subscribe_time: "2018-9-21"
        }
      ],
      search_content: "",
      currentPage: 1,
      pageSize: 10,
      start: 0,
      end: 9
    };
  },
  created() {
    // getUserList.then(res => {
    //   this.tableData = res.data
    //   console.log(res.data)
    // }).catch(err => {
    //   console.log(err)
    // })
    // // console.log(this.tableData)
    // console.log('https://easy-mock.com 用这个mock的接口，这个网址访问不是很稳定,可访问时已测试成功')
  },
  beforeMount() {},
  mounted() {
    let tableDataE = document.getElementsByClassName("el-table__row");
    for (let i = 0; i < tableDataE.length; i++) {
      if (!(this.start <= i && i <= this.end)) {
        tableDataE[i].style.display = "none";
      } else {
        tableDataE[i].style.display = "";
      }
    }
  },
  computed: {},
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      // console.log(`当前页: ${val}`);
      this.start = (this.currentPage - 1) * this.pageSize + 1;
      this.end = this.currentPage * this.pageSize;

      let tableDataE = document.getElementsByClassName("el-table__row");
      for (let i = 0; i < tableDataE.length; i++) {
        if (!(this.start <= i && i <= this.end)) {
          tableDataE[i].style.display = "none";
        } else {
          tableDataE[i].style.display = "";
        }
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.userlist {
  margin: 20px 30px;
  .search {
    display: flex;
    width: 300px;
    margin: auto 0 auto 700px;
    .input {
      width: 200px;
      margin: auto 3px;
    }
  }
  .usertable {
    height: 520px;
    margin: 20px auto;
    overflow-y: scroll;
    .el-table {
      .demo-table-expand {
        font-size: 0;
        label {
          width: 90px;
          color: #99a9bf;
        }
        .el-form-item {
          margin-right: 0;
          margin-bottom: 0;
          width: 50%;
        }
        .tags {
          display: inline-block;
          .tag {
            margin: auto 3px;
          }
        }
      }
    }
  }

  .pagination {
    text-align: center;
  }
}
</style>

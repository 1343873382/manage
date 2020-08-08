<template>
  <el-container class="container">
    <el-header class="header">
      <h1 class="title">重邮小帮手 - 后台管理</h1>
    </el-header>

    <el-container class="main-container">
      <el-aside width="20vw" class="aside">
        <el-menu :default-openeds="[]">

          <!-- 上面2个菜单选择，示例，也可以直接修改 -->
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>小帮手菜单栏管理</template>
            <el-menu-item-group>
              <router-link to="/meun" class="wxHelp">
                   <el-menu-item index="1-1">小帮手菜单栏管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <!-- 用户管理 -->
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>用户管理</template>
            <router-link to="/userlist" class="link">
              <el-menu-item index="4-1">用户列表</el-menu-item>
            </router-link>
            <router-link to="/usertags" class="link">
              <el-menu-item index="4-1">用户标签管理</el-menu-item>
            </router-link>
            <router-link to="/blacklist" class="link">
              <el-menu-item index="4-1">黑名单管理</el-menu-item>
            </router-link>
          </el-submenu>

          <!-- 小帮手菜单栏管理 -->
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-message"></i>小帮手菜单栏管理</template>
            <el-menu-item-group>
              <router-link to="/meun" class="link">
                <el-menu-item index="1-1">小帮手菜单栏管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <!-- 项目管理的侧边栏菜单 -->
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-setting"></i>项目管理</template>
            <router-link to="/barrage" class="link">
              <el-menu-item index="4-1">弹幕管理</el-menu-item>
            </router-link>
          </el-submenu>

        </el-menu>
      </el-aside>

      <!-- 显示内容的地方 -->
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .header {
    background-color: rgb(238, 241, 246);
    color: #333;
    font-size: 12px;
  }

  .main-container {
    overflow-y: auto;

    .aside {
      background-color: rgb(238, 241, 246);

      .link {
        text-decoration: none;
      }
    }
  }
}
</style>

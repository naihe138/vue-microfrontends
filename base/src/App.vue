<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <el-menu-item index="/">home</el-menu-item>
      <el-menu-item index="/vue">vue1</el-menu-item>
      <el-menu-item index="/vue2">vue2</el-menu-item>
    </el-menu>
    <router-view v-show="$route.name"></router-view>
    <div>{{$route.name}}</div>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<style>

</style>

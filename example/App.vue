<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <aj-demo 
      style="margin: 50px"
      imgSrc="https://n.sinaimg.cn/sinacn10116/600/w1920h1080/20190326/2c30-hutwezf6832339.jpg"
      :imgWidth="300"
      :imgHeight="200"
      summary="这是测试"
      :width="400"
    >
      <div>外部传入:简讯</div>
      <template #footer>
        <div>底部</div>
      </template>
    </aj-demo> -->
    <aj-button text="这是组件"></aj-button>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: #f5f5f5; */
}
</style>

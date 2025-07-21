# ajkit-ui

tag1.0.x: 基础组件 
    支持按需引入和全部引入两种方式的组件

    模块化：
        CommonJS: 适用于服务端
            文件作用域【一个文件就是一个单独模块，每个文件都有自己的作用域】
            缓存【第一次加载一次】
            同步加载 【阻塞浏览器执行】
        AMD： Asynchronous Module Definition 适用于浏览器端
            文件作用域
            异步加载
        UMD： Universal Module Definition 前后端跨平台的模块化解决方案
            1.判断是否支持Node.js（export是否存在），存在则使用Node.js模块化格式
            2.判断是否支持AMD（define是否存在），存在则使用AMD模块化格式
            3.前两个都不存在，则将模块公开到全局（window或global）

    使用webpack构建js
    使用gulp构建css
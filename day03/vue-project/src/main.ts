// 导入自定义的CSS样式文件，用于应用全局样式


// 从'vue'库中导入createApp函数，这是Vue3中创建应用的方式
import { createApp } from 'vue'
// 导入Vue组件App，这是应用的根组件
import App from './11-综合案例.vue'

// 创建Vue应用，并将其挂载到页面的指定DOM元素上
// 这是启动Vue应用的典型方式，#app通常是根组件的挂载点
createApp(App).mount('#app')
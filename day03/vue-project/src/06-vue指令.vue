<script setup lang="ts">
import { ref } from 'vue';
import logo from '@/assets/logo.svg'
import logo11 from '@/assets/logo11.svg'

const msg = 'hello world'
const html_msg = '<button>hello world</button>'
const isShow = ref(false)
const show = () => {
    isShow.value = !isShow.value
}
const gender = ref(1) // 0-男 1-女 
const score = ref(88)
const money = ref(100)
const buy = (price: number) => {
    money.value -= price
}
const img_isShow = ref(true)
const chageimg = () => {
    img_isShow.value = !img_isShow.value
}
const foods = ref(['苹果', '香蕉', '橘子', '葡萄'])

const username = ref('')
const password = ref('')

const login = () => {
    console.log(username.value, password.value)
}
const reset = () => {
    username.value = ''
    password.value = ''
}
</script>
<template>
    <!--  显示文本 -->
    <p v-text="msg"></p>
    <p>你说：{{ msg }}</p>
    <!--  解析并显示 html 格式文本 -->
    <p v-html="html_msg"></p>
    <hr>
    <!--  控制显示隐藏 -->
    <div class="box" v-show="isShow">我是v-show控制的盒子</div>
    <div class="box" v-if="isShow">我是v-if控制的盒子</div>
    <button @click="show()">切换显示</button>
    <hr>
    <p v-if="gender === 0">性别：♂ 男</p>
    <p v-else>性别：♀ 女</p>
    <hr>
    <p v-if="score >= 90">成绩评定A:奖励电脑一台</p>
    <p v-else-if="score >= 80">成绩评定B:奖励周末郊游</p>
    <p v-else-if="score >= 60">成绩评定C:奖励零食礼包</p>
    <p v-else>成绩评定D:惩罚一周不能玩手机</p>
    <div class="box1">
        <h3>黑马自动售货机</h3>
        <button @click="buy(3)">可乐3元</button>
        <button @click="buy(5)">牛奶5元</button>
        <button @click="buy(10)">咖啡10元</button>
    </div>
    <p>银行卡余额：{{ money }}元</p>
    <hr>
    <div>
        <img :src="img_isShow ? logo : logo11" @click="chageimg()">
    </div>
    <div>
        <p v-for="(item, index) in foods" :key="item">{{ index + 1 + item }}</p>
    </div>
    <div>
        <!-- 无序列表 -->
        <ul>
            <li v-for="item in foods" :key="item">{{ item }}</li>
        </ul>
        <!-- 有序列表 -->
        <ol>
            <li v-for="item in foods" :key="item">{{ item }}</li>
        </ol>
    </div>

    <ol>
        <li v-for="item in 10">{{ item }}</li>
    </ol>
    <div id="app">
        账户：<input type="text" v-model="username"> <br><br>
        密码：<input type="password" v-model="password"> <br><br>
        <button @click="login()">登录</button>
        <button @click="reset()">重置</button>
        <p>username:{{ username }}</p>
        <p>password:{{ password }}</p>
    </div>
</template>

<style scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin-bottom: 20px;
}

.box1 {
    border: 3px solid #000000;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    width: 200px;
}

h3 {
    margin: 10px 0 20px 0;
}

p {
    margin: 20px;
}
</style>
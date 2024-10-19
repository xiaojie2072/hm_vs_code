<script setup lang="ts">

import { computed, ref, watch } from 'vue';

// 定义水果对象的类型
interface Fruit {
    id: number// id
    icon: string// 图标
    isChecked: boolean// 是否选中
    num: number// 数量
    price: number// 单价
}

// 水果列表
const fruitList = localStorage.getItem('fruitList') !== null ?
    ref(JSON.parse(localStorage.getItem('fruitList') as string) as Fruit[]) :
    ref<Fruit[]>([
        {
            id: 1,
            icon: 'https://hongm-1312445828.cos.ap-nanjing.myqcloud.com/ll.png',
            isChecked: true,
            num: 2,
            price: 6,
        },
        {
            id: 2,
            icon: 'https://hongm-1312445828.cos.ap-nanjing.myqcloud.com/smt.png',
            isChecked: false,
            num: 7,
            price: 20,
        },
        {
            id: 3,
            icon: 'https://hongm-1312445828.cos.ap-nanjing.myqcloud.com/tg.png',
            isChecked: false,
            num: 3,
            price: 40,
        },
        {
            id: 4,
            icon: 'https://hongm-1312445828.cos.ap-nanjing.myqcloud.com/xg.png',
            isChecked: false,
            num: 10,
            price: 3,
        },
        {
            id: 5,
            icon: 'https://hongm-1312445828.cos.ap-nanjing.myqcloud.com/yl.png',
            isChecked: false,
            num: 20,
            price: 34,
        },
    ],)
const add = (id: number) => {
    fruitList.value.find(item => item.id === id)!.num++

}
const sub = (id: number) => {
    if (fruitList.value.find(item => item.id === id)!.num >= 1) {
        fruitList.value.find(item => item.id === id)!.num--
    }

}
const del = (id: number) => {
    fruitList.value = fruitList.value.filter(item => item.id !== id)
}
const isAll = computed({
    get() {
        return fruitList.value.every(item => item.isChecked)
    },
    set(value) {
        fruitList.value.forEach(item => item.isChecked = value)
    }
})
const totalPrice = computed(() => {
    return fruitList.value
        .filter(item => item.isChecked)
        .reduce((sum, item) => sum + item.num * item.price, 0)
})
const totalNum = computed(() => {
    return fruitList.value
        .filter(item => item.isChecked)
        .reduce((sum, item) => sum + item.num, 0)
})

watch(() => fruitList.value, (newValue) => {
    localStorage.setItem('fruitList', JSON.stringify(newValue))
    console.log(JSON.parse(localStorage.getItem('fruitList')!))
}, {
    deep: true
})
</script>

<template>
    <div class="app-container" id="app">
        <!-- 顶部banner -->
        <div class="banner-box"><img src="https://hongm-1312445828.cos.ap-nanjing.myqcloud.com/sg_top.png" alt="" />
        </div>
        <!-- 面包屑 -->
        <div class="breadcrumb">
            <span>🏠</span>
            /
            <span>购物车</span>
        </div>
        <!-- 购物车主体 -->
        <div class="main" v-if="fruitList.length !== 0">
            <div class="table">
                <!-- 头部 -->
                <div class="thead">
                    <div class="tr">
                        <div class="th">选中</div>
                        <div class="th th-pic">图片</div>
                        <div class="th">单价</div>
                        <div class="th num-th">个数</div>
                        <div class="th">小计</div>
                        <div class="th">操作</div>
                    </div>
                </div>
                <!-- 身体 -->
                <div class="tbody">
                    <div class="tr active" v-for="item in fruitList" :key="item.id">
                        <div class="td"><input type="checkbox" v-model="item.isChecked" /></div>
                        <div class="td"><img :src="item.icon" alt="" />
                        </div>
                        <div class="td">{{ item.price }}</div>
                        <div class="td">
                            <div class="my-input-number">
                                <button class="decrease" @click="sub(item.id)"> - </button>
                                <span class="my-input__inner">{{ item.num }}</span>
                                <button class="increase" @click="add(item.id)"> + </button>
                            </div>
                        </div>
                        <div class="td">{{ item.num * item.price }}</div>
                        <div class="td"><button @click="del(item.id)">删除</button></div>
                    </div>
                </div>
            </div>
            <!-- 底部 -->
            <div class="bottom">
                <!-- 全选 -->
                <label class="check-all">
                    <input type="checkbox" v-model="isAll" />
                    全选
                </label>
                <div class="right-box">
                    <!-- 所有商品总价 -->
                    <span class="price-box">总价&nbsp;&nbsp;:&nbsp;&nbsp;¥&nbsp;<span class="price">{{ totalPrice
                            }}</span></span>
                    <!-- 结算按钮 -->
                    <button class="pay">结算({{ totalNum }})</button>
                </div>
            </div>
        </div>
        <!-- 空车 -->
        <div class="empty" v-if="fruitList.length === 0">🛒空空如也</div>
    </div>
</template>

<style scoped>
@import './style/inputnumber.css';
@import './style/index.css';
</style>
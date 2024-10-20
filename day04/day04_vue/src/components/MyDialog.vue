<script setup lang="ts"></script>

<template>
    <div class="dialog">
        <div class="dialog-header">
            <slot name="title">
                <h3>友情提示</h3>
            </slot>
            <span class="close">✖️</span>
        </div>

        <div class="dialog-content">
            <!-- 插槽 -->
            <slot name="content"></slot>
        </div>
        <div class="dialog-footer">
            <button>
                <slot name="left">取消</slot>
            </button>
            <button>
                <slot name="right">确认</slot>
            </button>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.dialog {
    width: 470px;
    height: 230px;
    padding: 0 25px;
    background-color: #ffffff;
    margin: 40px auto;
    border-radius: 5px;
    border: 10px solid #ccc;
}

.dialog-header {
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    border-bottom: 1px solid #ccc;
    position: relative;
}

.dialog-header .close {
    position: absolute;
    right: 0px;
    top: 0px;
    cursor: pointer;
}

.dialog-content {
    height: 80px;
    font-size: 18px;
    padding: 15px 0;
}

.dialog-footer {
    display: flex;
    justify-content: flex-end;
}

.dialog-footer button {
    width: 65px;
    height: 35px;
    background-color: #ffffff;
    border: 1px solid #e1e3e9;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
    border-radius: 3px;
}

.dialog-footer button:last-child {
    background-color: #007acc;
    color: #fff;
}
</style>
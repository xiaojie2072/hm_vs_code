<script setup lang="ts">
interface Props {
    name: string,
    age: number
}

defineProps<Props>()
</script>
<template>
    <div>
        <h1 class="Sh1"> 我是son</h1>
        <div class="box">
            <p>name:{{ name }}</p>
            <p>age:{{ age }}</p>
        </div>
    </div>


</template>

<style scoped>
.Sh1 {
    color: orange;
}

.box {
    background-color: #ccc;
}
</style>
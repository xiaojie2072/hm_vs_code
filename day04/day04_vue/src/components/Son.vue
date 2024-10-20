<script setup lang="ts">
import { inject } from 'vue';

interface Props {
    name: string,
    age: number
}

defineProps<Props>()

// const emits = defineEmits<{
//     (e: 'change', age: number): void
// }>()
const emits = defineEmits<{
    'change': [age: number]
    'getName': [name: string]
}>()

const totalCount = inject<number>('totalCount')
</script>
<template>
    <div>
        <h1 class="Sh1"> 我是son</h1>
        <div class="box">
            <p @click="emits('getName', name)">name:{{ name }}</p>
            <p @click="emits('change', age)">age:{{ age }}</p>
            <p>totalCount:{{ totalCount }}</p>
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
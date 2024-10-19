<script setup lang="ts">
import { onMounted, ref } from 'vue'

const h1Ref = ref<HTMLHeadingElement | null>(null)
console.log('setup', h1Ref.value)

onMounted(() => {
    //const h1Dom = document.querySelector('h1')
    // console.log(h1Dom)
    console.log('onMounted', h1Ref.value)
    h1Ref.value?.append('!!!')
})
</script>


<template>
    <h1 ref="h1Ref">hello world</h1>
</template>

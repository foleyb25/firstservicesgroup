<template>
    <div class="parallax " :style="{ backgroundImage: `url(${imageSrc})`}">
    <div class="flex flex-col items-start w-full h-screen bg-black text-white bg-opacity-50">
      <slot></slot>
    </div>
    </div>
  </template>
  
  <script setup>
 import { ref, onMounted, toRefs } from 'vue'  
  // Props
  const props = defineProps({
    imageSrc: String
  })

  const getNuxtPageScrollPosition = ref(0)

 // convert props to reactive references
  const { imageSrc } = toRefs(props)

  // Image
  const image = ref('')

  onMounted( async () => {
    const imgModule = ""
    image.value = imgModule.default
  })
  
  </script>
  
  <style scoped>
  .parallax {
    height: 100vh;
    border-bottom: 10px solid black;
    background-position: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  </style>
  
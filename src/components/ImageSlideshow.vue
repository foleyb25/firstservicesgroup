<template>
    <div class="relative h-screen w-screen overflow-hidden">
        <!-- Display current image -->
        <transition name="fade">
            <img :key="currentIndex" :src="images[currentIndex]" alt="Slideshow Image" class="w-full h-full object-cover absolute top-0 left-0">
        </transition>
        <div class="absolute bg-black opacity-50 top-0 left-0 w-full h-full">
            
        </div>
    </div>
</template>

  
<script setup>
import { onMounted, onDeactivated, ref, reactive } from 'vue'
import MountainsDesert from "/src/assets/images/mountains_desert.jpeg"
import MountainsSnow from "/src/assets/images/mountains_snow.jpeg"
import OrangeSky from "/src/assets/images/orange_sky.jpeg"
import FlowerMeadow from "/src/assets/images/flower_meadow.jpeg"

const interval = ref(5000);
const currentIndex = ref(0)
const images = reactive([
    MountainsDesert,
    MountainsSnow,
    OrangeSky,
    FlowerMeadow
])

const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
}

onMounted(() => {
    interval.value = setInterval(() => {
        nextImage();
    }, 5000);
    // perform any necessary setup logic here
});
// Automatically transition to the next slide every 5 seconds


onDeactivated(() => {
    // Clear the interval when the component is destroyed to avoid memory leaks
    clearInterval(interval);
})
</script>
  
<style scoped>

</style>
  
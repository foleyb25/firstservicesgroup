<template>
    <Transition name="fade">
    <header :class="[{ 'bg-black': isScrolled }, 'fixed w-full top-0 left-0 z-50 transition duration-500']">
        <!-- Logo -->
        <div :class="{ 'center-style': !isScrolled }" class="relative flex w-full items-center justify-between bg-transparent">
            <!-- Navigation Links -->
            <div v-if=isScrolled class="h-32 aspect-square ml-8">
                <img :src=fsgLogo alt="">
            </div>
            <nav :class="{ 'margin-scrolled-style': !isScrolled, 'margin-not-scrolled-style': isScrolled  }">
                <ul class="flex space-x-12 text-3xl">
                    <li><router-link to="/" class="text-white hover:underline">Home</router-link></li>
                    <li><router-link to="/about" class="text-white hover:underline">About</router-link></li>
                    <li><router-link to="/contact" class="text-white hover:underline">Contact</router-link></li>
                </ul>
            </nav>

        </div>

    </header>
</Transition>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import fsgLogo from '/src/assets/images/fsg_logo_800X800-upscaled.png';

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
  
<style scoped>

.margin-scrolled-style {
    margin-top: 6vh;
    
}

.margin-not-scrolled-style {
    margin-right: 4vh;
}
.center-style {
    justify-content: center;
}
/* Additional styles if needed */
</style>
  
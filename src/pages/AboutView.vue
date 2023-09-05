<template>
        <div id="content-container" class="absolute top-0 left-0 h-full w-full">
            <div v-for="(scene, index) in scenes" :key="index">
                <div 
                    class="parallax" 
                    :style="scene.imageSrc ? `background-image: url(${scene.imageSrc});` : 'background-color: black;'"
                >
                    <div class="z-[5] text-white flex flex-col md:flex-row">
                        <div>
                            <h1>{{ scene.sectionTitle }}</h1>
                        </div>

                        <div>
                            <p>{{ scene.sectionText }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>


<script setup>
import MountainsDesert from "/src/assets/images/mountains_desert.jpeg";
import MountainsSnow from "/src/assets/images/mountains_snow.jpeg";
import { onMounted } from 'vue';


const scenes = [
    {
        imageSrc: MountainsDesert,
        sectionTitle: "This is a title",
        sectionText: "This is text"
    },
    
    {
        imageSrc: "",
        sectionTitle: "This is a title",
        sectionText: "This is text"
    },
    {
        imageSrc: MountainsSnow,
        sectionTitle: "This is a title",
        sectionText: "This is text"
    },
]

onMounted(() => {
    scenes.forEach(scene => {
        if (scene.imageSrc) {
            const img = new Image();
            img.src = scene.imageSrc;
        }
    });
});

</script>

<style  scoped>
.parallax {
    height: 100vh;
    border-bottom: 10px solid black;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;  /* Added for positioning the pseudo-element */
}

.parallax::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);  /* 50% opacity black */
    z-index: 0;  /* Positioned behind the content */
}



</style>
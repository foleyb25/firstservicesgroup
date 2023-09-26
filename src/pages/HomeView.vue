<template>
    <div>
        <ImageSlideshow />
        <div id="content-container" class="absolute top-0 left-0 h-full w-full font-marlboro">
            <div class="w-full h-full flex flex-col md:flex-row justify-center items-center">
                <div class="w-1/2 flex justify-center items-center">
                    <div class="w-3/4 aspect-square">
                        <img :src=fsgLogo alt="" class="h-full aspect-square object-contain">
                    </div>
                </div>

                <div class="w-1/2 flex justify-center items-center">
                    <div class="w-3/4 text-center text-gray-300 text-xl">
                        <p class="text-6xl">Veterans Helping Veterans</p>
                    </div>
                </div>
            </div>
            <div class="parallax"
                :style="scenes[0].imageSrc ? `background-image: url(${scene.imageSrc});` : 'background-color: black;'">
                <div class="z-[5] w-full h-full flex flex-col justify-start items-center text-white">
                    

                    <div class="mt-8 text-center">
                        <p class="text-xl">Welcome To</p>
                        <h1 class="text-6xl">First Services Group</h1>
                        <p class="text-2xl p-24">At First Services Group, our mission transcends just providing technology services; it is about
                            shaping a legacy of excellence and dedication that has been passed down by the veterans of our nation. As a leading government contracting company, we pride ourselves on leveraging
                            the unique insights and unparalleled dedication of our veterans. They not only defended our
                            country but now stand ready to revolutionize how our government operates in the digital age.
                            Through our veteran-driven technology solutions, we aim to empower government workers, ensuring
                            they are equipped with the tools and resources necessary to serve our communities more
                            effectively and efficiently. We're not just in the business of technology; we're in the business
                            of creating a brighter, more secure, and connected future for our nation. Welcome to First
                            Services Group, where honor meets innovation.</p>
                    </div>

                </div>
            </div>
            
            <!-- Add More Parallax containers here... -->
        </div>
    </div>
</template>

<script setup>
import ImageSlideshow from "../components/ImageSlideshow.vue"
import fsgLogo from '/src/assets/images/fsg_logo_800X800-upscaled.png';
import MountainsDesert from "/src/assets/images/mountains_desert.jpeg";
import MountainsSnow from "/src/assets/images/mountains_snow.jpeg";
import Sunset from "/src/assets/images/sunset.jpeg";
import { onMounted, reactive } from 'vue';


const scenes = reactive([
    {
        imageSrc: "",
        sectionTitle: "This is a title",
        sectionText: "This is text"
    },
    {
        imageSrc: MountainsDesert,
        sectionTitle: "This is a title",
        sectionText: "This is text"
    },
    {
        imageSrc: MountainsSnow,
        sectionTitle: "This is a title",
        sectionText: "This is text"
    },
])

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
    position: relative;
    /* Added for positioning the pseudo-element */
}

.parallax::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
}</style>
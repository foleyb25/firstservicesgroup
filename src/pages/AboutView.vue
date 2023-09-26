<template>
    <div id="content-container" class="absolute top-0 left-0 h-screen w-full font-marlboro bg-black text-white">
        

        <div class="parallax"
            :style="FlowerMeadow ? `background-image: url(${FlowerMeadow});` : 'background-color: black;'">
            <div class="z-[5] w-full h-full flex flex-col justify-start items-center text-white">


                <div class="mt-48 text-center">
                    <h1 class="text-6xl">Meet The Team</h1>
                    <div id="single-info" class="flex flex-col md:flex-row justify-center items-center mt-8 ">
                        <div class="w-full md:w-1/2">
                            <div class="w-3/4 aspect-square rounded-full m-auto overflow-hidden">
                                <img :src=FounderImage class="object-cover h-full" alt="">
                            </div>
                            <h2 class="text-4xl mt-8">Keith A. Foley</h2>
                            <h3 class="text-2xl"> President and Founder</h3>
                        </div>
                        <div class="w-full md:w-1/2 text-2xl h-ful">
                            <div class="w-full p-8">
                                <p>
                                    Keith is a fourth-generation
                                    Montanan, born and raised in the Montana City area, where he now continues to
                                    raise his own family. Keith has worked in the technology industry for over 25 years,
                                    working out of the Capital Beltway for the majority of it. He proudly served in the
                                    United States Army including tours in Bosnia and Germany in 1994. Assisting with Veteran
                                    affairs is extremely important and personal to Keith. While he’s not busy working in the
                                    technology field, Keith manages his Montana ranch, recreates with all Montana has to
                                    offer - side by siding, hunting, boating, are amongst his favorites, spending time with
                                    his extended family, and volunteering his time to help others.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import MountainsDesert from "/src/assets/images/mountains_desert.jpeg";
import MountainsSnow from "/src/assets/images/mountains_snow.jpeg";
import FounderImage from "/src/assets/images/fsg_founder.jpg";
import FlowerMeadow from "/src/assets/images/flower_meadow.jpeg";
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
    min-height: 100vh;
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
    /* 50% opacity black */
    z-index: 0;
    /* Positioned behind the content */
}

.parallax-white::before {
    background-color: rgb(255, 255, 255, 0.5);
    /* 50% opacity black */
}
</style>
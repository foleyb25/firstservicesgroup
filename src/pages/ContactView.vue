<template>
    <div id="content-container" class="absolute top-0 left-0 h-screen w-full bg-black p-5 font-marlboro">
        <div class="w-full h-full flex flex-col md:flex-row justify-center items-center mb-5">
            <h1 class="text-white text-3xl mb-4">Contact</h1>
        </div>
        <form v-if="!messageStatus" @submit.prevent="sendEmail()" class="bg-white p-6 rounded-md shadow-md mt-24">
            <div class="mb-4 text-xl">
                <label for="email" class="block text-3xl font-medium text-gray-600">Email</label>
                <input v-model="email" type="email" id="email" placeholder="example@example.com" required
                    class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="mb-4 text-xl">
                <label for="fullName" class="block text-3xl font-medium text-gray-600">Full Name</label>
                <input v-model="fullName" id="fullName" placeholder="John Doe" required
                    class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="mb-4 text-xl">
                <label for="subject" class="block text-3xl font-medium text-gray-600">Subject</label>
                <input v-model="subject" id="subject" placeholder="Your subject..." required
                    class="mt-1 p-2 w-full border rounded-md">
            </div>
            <div class="mb-4 text-xl">
                <label for="message" class="block text-3xl font-medium text-gray-600">Message</label>
                <textarea v-model="message" id="message" rows="4" placeholder="Your message..." required
                    class="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>
            <div class="mb-4 hidden">
                <label for="middle-name" class="block text-3xl font-medium text-gray-600"></label>
                <textarea v-model="middleName" id="message" rows="4" placeholder="Your message..."
                    class="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>
            <button :disabled="processingRequest" type="submit"
                class="bg-black hover:bg-gray-500 hover:text-black  text-3xl text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition duration-300">
                Submit
            </button>
        </form>
        <div v-else class="w-full flex justify-center">
            <div class="bg-green-100 p-6 rounded-md shadow-md w-1/2 m-48">
                <div class="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div>
                        <h2 class="text-6xl font-semibold text-green-700">Success!</h2>
                        <p class="text-2xl text-green-600">Your message has been sent. We'll get back to you soon!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-24 w-full h-8"></div>
    </div>
</template>
 

<script setup>
import { ref } from "vue"
import axios from "axios"

const email = ref("");
const fullName = ref("");
const message = ref("");
const subject = ref("");
const messageStatus = ref(null);
const middleName = ref(null);
const processingRequest = ref(false);


const sendEmail = async () => {
    if (middleName?.value) return
    processingRequest.value = true;
    try {
        const mailStatus = await axios.post('https://allthingsgreat-api-prod-90e76e1469ed.herokuapp.com/api/v2/utility/sendEmail', {
            email: email.value,
            fullName: fullName.value,
            message: message.value,
            subject: subject.value,
        })

        if (mailStatus.status === 200) {
            messageStatus.value = mailStatus
        }

    } catch (e) {
        console.log(e.message)
    } finally {
        processingRequest.value = false
    }
}

</script>

<style lang="scss" scoped></style>
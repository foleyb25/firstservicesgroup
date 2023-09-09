<template>
    <div id="content-container" class="absolute top-0 left-0 h-full w-full bg-gray-800 p-5">
         <div class="w-full h-full flex flex-col md:flex-row justify-center items-center mb-5">
             <h1 class="text-white text-3xl mb-4">Contact</h1>
         </div>
         <form @submit.prevent="sendEmail()" class="bg-white p-6 rounded-md shadow-md">
             <div class="mb-4">
                 <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
                 <input v-model="email" type="email" id="email" placeholder="example@example.com" required class="mt-1 p-2 w-full border rounded-md">
             </div>
             <div class="mb-4">
                 <label for="fullName" class="block text-sm font-medium text-gray-600">Full Name</label>
                 <input v-model="fullName" id="fullName" placeholder="John Doe" required class="mt-1 p-2 w-full border rounded-md">
             </div>
             <div class="mb-4">
                 <label for="subject" class="block text-sm font-medium text-gray-600">Subject</label>
                 <input v-model="subject" id="subject" placeholder="Your subject..." required class="mt-1 p-2 w-full border rounded-md">
             </div>
             <div class="mb-4">
                 <label for="message" class="block text-sm font-medium text-gray-600">Message</label>
                 <textarea v-model="message" id="message" rows="4" placeholder="Your message..." required class="mt-1 p-2 w-full border rounded-md"></textarea>
             </div>
             <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                 Send Email
             </button>
         </form>
     </div>
 </template>
 

<script setup>
import {ref} from "vue"
import axios from "axios"

const email = ref("");
const fullName = ref("");
const message = ref("");
const subject = ref("");
const messageStatus = ref(null);


const sendEmail = async () => {
    try {
        const mailStatus = await axios.post('http://localhost:8080/api/v2/utility/sendEmail', {
            email: email.value,
            fullName: fullName.value,
            message: message.value,
            subject: subject.value,
        })

        if(mailStatus) {
            messageStatus.value = mailStatus
        }

    } catch(e) {
        console.log(e.message)
    }
}

</script>

<style lang="scss" scoped>

</style>
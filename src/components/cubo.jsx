import '../index.css'
import React from 'react'

class Cubo extends React.Component {
    render() {
        return(
            
            <>
            
            <div class="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
    <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">Highlighted Features</h2>
    </div>

    <div class="flex flex-col md:flex-row">
      
        <div class="mr-0 md:mr-8 mb-6 md:mb-0">
            <img class="w-1/2 md:w-full mx-auto" src="https://placeholder.pics/svg/400" alt="can_help_banner"></img>
        </div>
       

        <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Dynamic Personalization:</h3>
                    <p class="text-sm">Our platform leverages user data and behavior to provide a highly personalized experience, with dynamic content and product recommendations that change in real-time.</p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Mobile-Optimized Interface</h3>
                    <p class="text-sm"> Our website is designed with a mobile-first approach, offering a seamless browsing experience across all devices, including smartphones and tablets.</p>
                </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">24/7 Customer Support</h3>
                    <p class="text-sm">ur U.S.-based customer support team is available around the clock to answer any questions, resolve any issues, and provide helpful solutions. Whether it's through email, phone, or live chat, we're always here to support you.</p>
                </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Secure Payment Processing</h3>
                    <p class="text-sm">We use cutting-edge security measures to protect our customers' sensitive information and ensure the safety of all transactions made on our site.</p>
                </div>
            </div>


        </div>
    </div>
</div>
            </>

        )
    }
}

export default Cubo;
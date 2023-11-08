import '../index.css'

import React from 'react'

class Steps extends React.Component {
    render() {
        return(
            
            < >
            
          <div id='steps' className="hero h-auto w-full bg-base-200 rounded-lg">
           <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

<div class="text-center" >
    <p class="font-bold mt-4 text-sm leading-7 font-regular">
        STEPS
    </p>
    <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight font-bold">
        How it <span class="text-[rgb(242,135,13)]">Works?</span>
    </h3>

</div>

<div class="mt-20">
    <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-[rgb(242,135,13)] text-white border-4 border-white text-xl font-semibold">
                        1
                        
                    </div>
                </div>
                
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Answer correctly</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                    After taking your product to the checkout and paying in cash, the seller will ask you if you want your change in bitcoin.
                    </p>

                    <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                      Remember, its optional but any answer other than yes is not correct
                    </p>
                </div>
            </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-[rgb(242,135,13)] text-white border-4 border-white text-xl font-semibold">
                        2
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Get you receipt</h4>

                    <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                    The seller will do the checkout process using the Bit Change tool, and will give you a printed receipt with the details of your purchase, and two QR codes.

                    </p>

                    <p class="mt-2 text-base leading-6 text-gray-500 text-justify">
                      One to redeem yout change and the other will take directly to this page, in case you need more information
                    </p>
                </div>
            </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-[rgb(242,135,13)] text-white border-4 border-white text-xl font-semibold">
                        3
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Use a Wallet to redeem your change</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    It is mandatory to use a bitcoin wallet to get your change in bitcoin.
                    </p>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Use the scan function of your bitcoin wallet to receive your change
                    </p>
                </div>
            </div>
        </li>

    </ul>
</div>





</div>
</div>


            </>

        )
    }
}

export default Steps;
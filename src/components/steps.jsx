import '../index.css'

import React from 'react'

class Steps extends React.Component {
    render() {
        return(
            
            <>
           <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

<div class="text-center">
    <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
        STEPS
    </p>
    <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
        How it <span class="text-indigo-600">Works?</span>
    </h3>

</div>

<div class="mt-20">
    <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        1
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Check your Internet connection</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Ensure that your mobile device has an active internet connection, as this is essential for Bitcoin transactions.
                    </p>
                </div>
            </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        2
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Have a Bitcoin wallet ready</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Make sure you already have a Bitcoin wallet installed on your mobile device. 
                    If you don't have one, the store may provide guidance or recommend a suitable wallet. 
                    You can also download a wallet of your choice from a reputable source like an app store.
                    </p>
                </div>
            </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        3
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Share your wallet addres</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Provide your Bitcoin wallet address. 
                    This address is a unique identifier associated with your wallet and is where the store will 
                    send your change in Bitcoin.
                    </p>
                </div>
            </div>
        </li>

    </ul>
</div>

<div class="mt-20">
    <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        4
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Verify the transaction</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Review the details of the transaction, including the Bitcoin amount and the wallet address. 
                    Ensure that everything is accurate before finalizing the transaction.
                    </p>
                </div>
            </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        5
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Receive the voucher and instructions</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Once the transaction is confirmed, the store will provide you with a voucher or receipt containing 
                    the QR code and possibly a URL with further instructions on how to claim and manage your Bitcoin
                    </p>
                </div>
            </div>
        </li>
        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        6
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Follow isntructions on the voucher</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Follow the instructions on the voucher to learn more about how to access and manage your Bitcoin. 
                    This may include guidance on using your wallet, 
                    securing your funds, and additional resources.
                    </p>
                </div>
            </div>
        </li>

    </ul>
</div>

<div class="mt-20">
    <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

        <li class=" bg-gray-100 p-5 pb-10 text-center">
            <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                    <div
                        class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                        7
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="text-lg leading-6 font-semibold text-gray-900">Enjoy using bitcoin</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                    Once you have successfully received your change in Bitcoin and set up your wallet, 
                    you can explore using Bitcoin for various transactions 
                    </p>
                </div>
            </div>
        </li>
    </ul>
</div>

</div>

            </>

        )
    }
}

export default Steps;
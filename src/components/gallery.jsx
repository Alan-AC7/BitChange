import '../index.css'
import React from 'react'

class Gallery extends React.Component {
    render() {
        return(
            
            <>
            <div className='p-5'>
            <div class="bg-white dark:bg-gray-800 w-auto h-auto py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div class="flex items-center gap-12">
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Where can I spend my Bitcoin?</h2>

              
            </div>

            
        </div>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
           
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto w-auto">
                <img src="https://c.files.bbci.co.uk/8235/production/_119033333_14620e3c-169c-42d1-bfc0-e143b380e444.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Local Businesses</span>
            </a>
           
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://i.insider.com/61d8b178607df100189c3e48?width=1136&format=jpeg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Bitcoin Beach</span>
            </a>
          
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                <img src="https://www.criptonoticias.com/wp-content/uploads/2023/05/berlin-el-salvador-ciudadela-bitcoin.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Berlin, Usulutan</span>
            </a>
         

            
            <a href="#"
                class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                <img src="https://ultimahora.sv/wp-content/uploads/2021/09/pizza-hut.jpeg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>

                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Restaurants</span>
            </a>
          
        </div>
    </div>
</div>
</div>
            </>

        )
    }
}

export default Gallery;
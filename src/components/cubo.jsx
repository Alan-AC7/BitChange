import '../index.css'
import React from 'react'

class Cubo extends React.Component {
    render() {
        return(
            
            <>
            
            <div  id="cubo" class=" max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
    <div class="text-center mb-10">
        <h2 class="text-4xl tracking-tight font-bold text-primary-800">CUBO+ Program</h2>
    </div>

    <div class="flex flex-col md:flex-row" >
       
        <div class="mr-0 md:mr-8 mb-6 md:mb-0 rounded-lg">
            <img class="w-1/2 md:w-full mx-auto rounded-lg" src="https://cuboplus.dev/img/logo%20cubo+.png" alt="can_help_banner"></img>
        </div>
       

        <div class="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">CUBO+</h3>
                    <p class="text-sm">
                    CUBO+ Educational Program is an initiative crafted by and for Salvadorans, 
                    with the goal of training the next generation of Salvadoran programmers. 
                    </p>
                </div>
            </div>
            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Preparatory period</h3>
                    <p class="text-sm"> 
                    The preparatory phase, spanning from mid-April to early June, 
                    encompassed online sessions focused on exploring the role of Bitcoin and its influence on society.

                    </p>
                </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">On-site bootcamp</h3>
                    <p class="text-sm">
                    The on-site bootcamp occurred during the initial two weeks of July, concentrating on a more in-depth exploration of the LNP/BP technology.
                    </p>
                </div>
            </div>

            <div class="w-full sm:w-1/2 mb-4 px-2 ">
                <div class="h-full py-4 px-6 border border-[rgb(242,135,13)] border-t-0 border-l-0 rounded-br-xl">
                    <h3 class="text-2xl font-bold text-md mb-6">Tuscany bootcamp</h3>
                    <p class="text-sm">
                    In the initial weeks of October, distinguished participants from the on-site bootcamp 
                    seized the opportunity to journey to Europe and engage in the Tuscany Lightning Bootcamp.
                    </p>
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
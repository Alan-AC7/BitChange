import '../index.css'
import React from 'react'

class Article extends React.Component {
    render() {
        return(
            
        

<>
<div className='p-5'>
<div className="">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://u.today/sites/default/files/styles/1600x900/public/2023-03/31499.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Ready to start <span class="text-[rgb(242,135,13)]">learning</span> about Bitcoin?</h1>
      <br></br>
      <p className="py-5 text-xl">Increase your knowledge and read more interesting information about Bitcoin </p>
      
      <p className="py-3 text-xl">
            <a href="https://www.bitcoin.kn/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">The Bitcoin Knowledge podcast</a>
      </p>
      <p className="py-3 text-xl">
            <a href="https://podcasts.apple.com/es/podcast/bitcoin-en-espa%C3%B1ol/id1405877457" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Bitcoin Podcast</a>
      </p>
      <p className="py-3 text-xl">
            <a href="https://bitcoinmagazine.com/articles" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Bitcoin Magazine</a>
      </p>
    </div>
  </div>
</div>
</div>


</>

        )
    }
}

export default Article;
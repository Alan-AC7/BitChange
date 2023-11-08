import '../index.css'
import React from 'react'

class Why extends React.Component {
    render() {
        return(
            
            <>
        <div className="hero min-h-screen bg-base-200 mx-5 p-14" id='whyBTC'>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl text-[rgb(242,135,13)] font-bold">Why Bitcoin?</h1>
      <br></br>
      <p className="py-6 px-3 text-xl font-bold text-justify">Bitcoin offers a global and decentralized payment solution that eliminates the need for financial intermediaries, reducing costs and accelerating transactions. Furthermore, by enabling secure and transparent transactions, Bitcoin can help gain customer trust and access new international markets.</p>
      <p className="py-6 px-3 text-xl font-bold text-justify">Bitcoin provides opportunities for entrepreneurs in both daily operations and strategic financial management, enhancing the efficiency and resilience of their businesses.</p>
    </div>
  </div>
</div>
            </>

        )
    }
}

export default Why;
import '../index.css';
import React from 'react';

class Why extends React.Component {
  render() {
    return (
      <>
        <div className="hero min-h-screen bg-base-200 mx-5 p-14" id='whyBTC'>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpdGNvaW58ZW58MHx8MHx8fDA%3D"
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Bitcoin Illustration"
            />
            <div>
              <h1 className="text-5xl text-[rgb(242,135,13)] font-bold mb-4">Why Bitcoin?</h1>
              <h2 className="text-xl text-white-700 mb-6">Transforming the Future</h2>

              <p className="py-2 px-3 text-lg text-justify">
                Bitcoin offers a global and decentralized payment solution that eliminates the need for financial intermediaries, reducing costs and accelerating transactions.
              </p>

              <p className="py-2 px-3 text-lg text-justify">
                By enabling secure and transparent transactions, Bitcoin can help gain customer trust and access new international markets, providing opportunities for entrepreneurs in both daily operations and strategic financial management.
              </p>

              <ul className="list-disc py-6 px-3">
                <li className="text-lg">Decentralized and transparent transactions</li>
                <li className="text-lg">Reduced costs and faster transactions</li>
                <li className="text-lg">Enhanced efficiency and resilience for businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Why;

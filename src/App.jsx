import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Team from './components/team';
import Steps from './components/steps';
import Gallery from './components/gallery';
import Cubo from './components/cubo';
import Wallet from './components/wallets';
import Why from './components/whybtc';
import WebView from './components/webview';

function App() {
  return (
    <div className="App" id='home'>
      <Navbar></Navbar>
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://prod.wordpress.usemultiplier.cloud/wp-content/uploads/2023/03/62398ad198b195119954dee1-1920-x-1082-p-1600.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">BITCHANGE</h1>
      <p className="mb-5"></p>
    
    </div>
  </div>
</div>

<div className='p-5'>

<div className="hero h-auto w-full bg-base-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://image.cnbcfm.com/api/v1/image/102730336-RTX1EWQK.jpg?v=1529451602" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
    <h1 className="text-5xl font-bold">Receive your change in Bitcoin!</h1>
      <p className="py-5 text-xl">Everytime you pay using fiat, BitChange allows customers to receive their change in bitcoin. So, the next time you buy in a store you have some sats to spend!</p>
      <br></br>
     <a href="#steps"><button className="btn btn-neutral bg-[rgb(242,135,13)] text-white">Dont know how? Click Here</button></a> 
    </div>
  </div>
</div>



</div>

<div className='p-5'>
<div className="hero h-auto w-full bg-base-200 rounded-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://cdn.images.express.co.uk/img/dynamic/23/750x445/1136210.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Wanna start using BitChange?</h1>
      <br></br>
      <p className="py-5 text-xl">Boost your business, promote the use of bitcoin and start making the diference today one transaction at a time</p>
      <br></br>
      

    </div>
  </div>
</div>
</div>

<Why></Why>
    


<div className="flex flex-col w-full border-opacity-50 p-10">
 
  <div className="divider text-3xl text-[rgb(242,135,13)] font-bold" id='steps'>REDEEM PROCESS</div>
  <br></br>
  <Steps></Steps>
<Wallet></Wallet>
</div>


<div className="flex flex-col w-full border-opacity-50 p-10">
 
  <div className="divider text-3xl text-[rgb(242,135,13)] font-bold">WHAT CAN YOU DO AFTER REDEEMING?</div>

</div>

<Gallery></Gallery>
<div className='p-10'>


<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-black dark:text-white m-5">You received your change in BTC. Now what?</h1>
      <p className="py-6 text-white m-5  text-black dark:text-white m-5 text-2xl">You can see BTC Map to see which businesses accept Bitcoin! </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="w-auto h-auto  flex items-center ">
<WebView source="https://btcmap.org/map#14/13.70136/-89.19408"  className="border-2 border-red-500"
       />
    </div>
    </div>
  </div>
</div>
</div>


<div className="flex flex-col w-full border-opacity-50 p-10">
 
  <div className="divider text-3xl text-[rgb(242,135,13)] font-bold">ABOUT US</div>

</div>
<Cubo></Cubo>
<Team></Team>



    
  

<br></br>
      <Footer></Footer>
    </div>

    
  );
}

export default App;

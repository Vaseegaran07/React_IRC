import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>VLance.</h1>
                <p className='text-lead'>VLance is a website aimed at connecting clients with freelancers that specialize in fields required by the client.</p>
                <p className='text-lead'>The freelance market is increasingly competitive, so it's important for freelancers to increase their skills and quality of work, if they need to keep up with the market. This is where VLance comes in. We here at VLance strive to make a bridge between clients and freelancers, to together build a better tomorrow </p>
                
            </div>
        </div>
    </header>
  )
}

export default Header
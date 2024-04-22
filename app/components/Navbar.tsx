"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import LoginModal from './Loginmodal';
import RegModal from './Regmodal';
import { getAuth,signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'


export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    setIsLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        console.log('Signed in user:', user);
        alert(`The user ${email} is successfully signed in.`);
        setIsLoggedIn(true);
        // You can add your navigation logic or state updates here

      })
      .catch((error) => {
        // Handle sign-in errors
        console.error('Sign-in error:', error);
        // You can display an error message to the user
      });
  };

  const [isRegModalOpen, setIsRegModalOpen] = useState(false);

 

  const handleRegModalClose = () => {
    setIsRegModalOpen(false);
  };

  const handleReg = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        console.log('Registered user:', user);
        alert(`The user ${email} is registered successfully.`);
        // You can add your navigation logic or state updates here
      })
      .catch((error) => {
        // Handle registration errors
        console.error('Registration error:', error);
        // You can display an error message to the user
      });
  };

  const handleRegClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
    setIsRegModalOpen(true);
  };

  const handleLogoutClick = () => {
    signOut(auth)
      .then(() => {
        // Successfully signed out
        setIsLoggedIn(false); // Update the isLoggedIn state
        // You can add any additional logic after logout here
        alert('You have succesfully logged out.'); 
      })
      .catch((error) => {
        // Handle logout errors
        console.error('Logout error:', error);
        // You can display an error message to the user if needed
      });
  };
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flex justify-between px-10 py-6 bg-black h-[124px] fixed top-0 left-0 right-0 z-10 opacity-80'>
      <div className='cursor-pointer'>
        <Link href="/">
          <Image
            src="/assets/logo.png"
            className=''
            width={60}
            height={60}
            alt="logo"
          />
        </Link>
      </div>
      
      {/* Navigation Links for Tablets and Desktops */}
      <div className='hidden lg:flex text-white text-base xl:text-base md:text-sm font-semibold tracking-widest py-4'>
          <ul className="xl:space-x-10 md:space-x-5 flex">
            <li className=''>
              <Link href="/">Home</Link>
            </li>
            <li className=''>
              <Link href="/">About us</Link>
            </li>
            <li className=''>
              <Link href="/">Projects</Link>
            </li>
            <li className=''>
              <Link href="/">Liveservice</Link>
            </li>
            <li className=''>
              <Link href="/available_nfts">BFC</Link>
            </li>
            <li className=''>
              <Link href="/">WOFBI</Link>
            </li>
            <li className=''>
              <Link href="/">Contact us</Link>
            </li>
          </ul>
      </div>

      <div className='hidden lg:inline xl:space-x-4 space-x-3 flex-end'>
      {isLoggedIn ? (
        <div  onClick={handleLogoutClick} className='text-white text-base md:text-sm xl:text-base font-semibold inline cursor-pointer'>
                Log out
        </div>
      ) : (
        <div onClick={handleLoginClick} className='text-white text-base md:text-sm xl:text-base font-semibold inline cursor-pointer'>
                Login
        </div>
      )}  
       <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} onLogin={handleLogin} />

        <div onClick={handleRegClick} className='text-white text-base xl:text-base md:text-sm font-semibold inline cursor-pointer'>
                Register
        </div>
        <RegModal isOpen={isRegModalOpen} onClose={handleRegModalClose} onReg={handleReg} />
      
        <button className='bg-red-600 text-base font-semibold py-2 px-2 border border-[#262840] rounded-xl text-white'>
                    <Image
                        src="/assets/play-icon.svg"
                        className=' inline mr-2'
                        width={18}
                        height={18}
                        alt="play icon"
                    />
                Live Service
        </button>
      </div>

      {/* Navigation links for  Mobile Screens */}
      <div className='lg:hidden z-10'>
        <div onClick={toggleMenu}>
          <Image
            src="/assets/icon-hamburger.svg"
            className='lg:hidden py-4'
            width={24}
            height={21}
            alt="hamburger icon"
          />
        </div>
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-[70%] bg-black shadow-md overflow-y-auto text-white font-normal text-base">
            <div className='text-right text-xl p-6 cursor-pointer' onClick={toggleMenu}>
              X
            </div>
            <ul className="pl-8 pt-10">
              <li className='mb-5'>
                <Link href="/">Home</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">About Us</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">Projects</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">Liveservice</Link>
              </li>

              <li className='mb-5'>
                <Link href="/">BFC</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">WOFBI</Link>
              </li>
              <li className='mb-5'>
                <Link href="/">Contact us</Link>
              </li>
            </ul>

            <div className='px-8 mt-8'>
               {/*<div className='text-base font-semibold py-4 px-0'>
                    Login
                </div>
                <div className='text-base font-semibold py-4 px-0'>
                    Register
               </div>*/}

                {isLoggedIn ? (
                  <div  onClick={handleLogoutClick} className='text-white text-base font-semibold py-0 py-4 cursor-pointer'>
                          Log out
                  </div>
                ) : (
                  <div onClick={handleLoginClick} className='text-white text-base font-semibold py-0 py-4 cursor-pointer'>
                          Login
                  </div>
                )}  
                <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModalClose} onLogin={handleLogin} />

                  <div onClick={handleRegClick} className='text-white text-base font-semibold py-4 cursor-pointer'>
                          Register
                  </div>
                  <RegModal isOpen={isRegModalOpen} onClose={handleRegModalClose} onReg={handleReg} />
      

                <button className='bg-red-600 text-base font-semibold py-2 px-2 border border-[#262840] mt-2 rounded-xl text-white'>
                    <Image
                        src="/assets/play-icon.svg"
                        className=' inline mr-2'
                        width={18}
                        height={18}
                        alt="play icon"
                    />
                   Live Service
                </button>
            </div>
          </div>     
        )}
      </div>
    </nav>
  );
}

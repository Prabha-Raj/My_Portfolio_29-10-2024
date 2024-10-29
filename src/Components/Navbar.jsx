import { useState } from "react";

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState();
    function handleChange(){
        setOpenMenu(openMenu?false:true)

    }
    return(
        <>
        <div className="navbar-container z-10 flex items-center  justify-between px-20 bg-fixed max-ms:px-1 max-ms:justify-around gap-5 h-20 w-100 bg-yellow-400 sticky top-0 left-0 right-0">
            <div className="nav_left  text-sm font-bold md:text-2xl uppercase">Prabhakar &nbsp;Rajput</div>
            <div className="nav_right flex justify-center items-center gap-2 md:gap-2 content-center">
            <i className="ri-phone-fill fa-spin"></i>
            <p className="max-sm:text-xs max-sm:text-amber-600">+91,8640049758</p>
            <i className={openMenu?" ":"ri-menu-line"}
            onClick={handleChange}
            ></i>
            </div>
        </div>
            {openMenu && (
                <div style={{ backgroundColor:"rgba(0,0,0,.9)"}} className="openMenu text-2xl h-screen w-screen  text-white fixed top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-20">
                    <div className="first absolute top-10 right-20 max-sm:top-5 max-sm:right-10">
                    <i className={openMenu?"ri-close-line":" "}
            onClick={handleChange}
            ></i>
            </div>
            <div className="second grid items-center grid-flow-row gap-4  text-xl font-bold text-center">
                <h1 className="text-yellow-400"><a href="#Home">Home</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#AboutMe">About Me</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#WhatIDo">What I Do</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#MyResume">My Resume</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#Portfolio">Portfolio</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#FAQs">FAQs</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#ClientsReviews">Clients Reviews</a></h1>
                <h1 className="hover:text-yellow-400"><a href="#ContactMe">Contact Me</a></h1>
            </div>
            <div className="social-icons flex gap-4 text-4xl text-gray-200 mt-4">
  <a href="https://x.com/codingworld434?t=-hK2IC1TGFqW--EusfmpYg&s=09" target="_blank" rel="noopener noreferrer">
    <i className="ri-twitter-fill cursor-pointer hover:text-blue-500"></i>
  </a>
  <a href="https://www.facebook.com/profile.php?id=100057055627269&mibextid=JRoKGi" target="_blank" rel="noopener noreferrer">
    <i className="ri-facebook-circle-fill cursor-pointer hover:text-blue-600"></i>
  </a>
  <a href="https://www.instagram.com/coding_lover_boy_2.0/profilecard/?igsh=aDl1M2hqenM5cTFx" target="_blank" rel="noopener noreferrer">
    <i className="ri-instagram-line cursor-pointer hover:text-pink-500"></i>
  </a>
  <a href="https://github.com/Prabha-Raj" target="_blank" rel="noopener noreferrer">
    <i className="ri-github-fill cursor-pointer hover:text-gray-800"></i>
  </a>
  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
    <i className="ri-dribbble-fill cursor-pointer hover:text-pink-400"></i>
  </a>
</div>

                </div>
            )}

            </>
    )
}
import React from 'react'
import Logo from "../assets/Logo.png"

const Header = () => {
    return (
        <div className="pt-6 px-3">
            <div className="flex justify-between items-center bg-blue-700 backdrop-filter backdrop-blur-lg bg-opacity-20 p-2 rounded-xl">
                <a href="#" className="w-12 h-12">
                    <img src={Logo} alt="" />
                </a>

                <ul className="flex gap-12 text-lg justify-center text-[#121212] font-semibold">
                    <li><a href="#" className="hover:bg-blue-600 hover:text-white px-2 hover:rounded-md ease-in-out duration-200">Home</a></li>
                    <li><a href="#" className="hover:bg-blue-600 hover:text-white px-2 hover:rounded-md ease-in-out duration-200">Gallery</a></li>
                    <li><a href="#" className="hover:bg-blue-600 hover:text-white px-2 hover:rounded-md ease-in-out duration-200">Contact</a></li>
                </ul>

                <button className="p-2 bg-blue-600 rounded-md font-bold text-white">Subscribe</button>
            </div>
        </div>
    )
}

export default Header

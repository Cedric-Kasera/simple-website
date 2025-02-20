import React from 'react'
import Logo from "../assets/Logo.png"

const Footer = () => {
    return (
        <div className="py-6 px-3">
            <div className="flex justify-between items-center bg-blue-700 backdrop-filter backdrop-blur-lg bg-opacity-20 p-2 rounded-xl">
                <div className='flex justify-center items-center gap-4'>
                    <img src={Logo} alt="" />
                    <h1 className="font-bold text-6xl">AXIS</h1>
                </div>

                <div className="flex gap-48">
                    <div>
                        <h1 className="font-bold text-xl text-[#0B1215] underline underline-offset-2">Quick Links:</h1>
                        <ul>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">1. Home</a></li>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">2. Gallery</a></li>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">3. Blog</a></li>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">4. Contacts</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl text-[#0B1215] underline underline-offset-2">Follow Us On:</h1>
                        <ul>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">1. Whatsapp</a></li>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">2. Facebook</a></li>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">3. Twitter</a></li>
                            <li className="hover:translate-x-1 ease-in-out duration-200"><a href="#">4. Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import HeroPic from "../assets/Hero.jpg"

const Hero = () => {
    return (
        <div className="flex justify-center">
            <div className="flex p-2 w-10/12 justify-between gap-8">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="font-bold text-4xl text-[#0B1215] mb-5 left-0">Welcome to Axis</h1>
                    <p className="text-[#1B1B1B] font-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis natus pariatur quibusdam reprehenderit saepe magni, iusto eius tenetur quae dolor veniam earum delectus non laudantium quaerat excepturi voluptas explicabo ducimus?
                    </p>
                </div>
                <div className="w-1/2 rounded-md">
                    <img src={HeroPic} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero

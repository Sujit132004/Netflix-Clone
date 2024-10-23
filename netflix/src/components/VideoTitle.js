import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
const VideoTitle = ({title,overview}) => {
    return (
        <div className='absolute w-[vw] aspect-video text-white pt-[18%] pl-[4%]' >
            <h1 className='text-3xl font-bold '>{title}</h1>
            <p className='w-1/3 mt-4'>
                {overview}
            </p>
            <div className=' flex mt-8 '>
                <button className='flex items-center px-6 py-2 bg-white  text-black rounded-md hover:bg-opacity-80  hover:scale-110 transition-all duration-200  '>
                    <CiPlay1 size="24px" />
                    <span className='ml-1'>Play</span>

                </button>
                <button className='flex mx-2 items-center px-6 py-2 bg-gray-500 bg-opacity-60 gap-1 text-black rounded-md hover:scale-110 transition-all duration-200 '>
                    <CiCircleInfo size="24px" />
                    <span className='ml-1'>Watch More</span>
                </button>
            </div>
        </div>
    )
}

export default VideoTitle
import React from 'react'
import video1 from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import aashish from "../../assets/aashish.jpg"
import user_profile from "../../assets/user_profile.jpg"

const PlayVideo = ({videoId}) => {
  return (
    <div className='basis-[69%]'>

        {/* <video src={video1} controls autoPlay muted  className='w-full' ></video> */}
        <iframe className='w-full h-[37vw]' src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3 className='mt-2.5 font-semibold text-2xl'>Best youtube channel fro learn web development</h3>
        <div className="flex items-center justify-between wrap mt-2.5 text-[14px] text-[#5a5a5a]">
            <p>1525 Views &bull; 2 days ago</p>
            <div className='flex'>
                <span className='inline-flex items-center ml-4'><img src={like} alt="" className='w-5 mr-2' />125</span>
                <span className='inline-flex items-center ml-4'><img src={dislike} alt="" className='w-5 mr-2' />5</span>
                <span className='inline-flex items-center ml-4'><img src={share} alt="" className='w-5 mr-2' />Share</span>
                <span className='inline-flex items-center ml-4'><img src={save} alt="" className='w-5 mr-2' />Save</span>
            </div>
        </div>

        <hr className='border-0 h-1 bg-gray-400 my-2.5 mx-0' />
        <div className="flex items-center mt-5">
            <img src={aashish} alt="" className='w-10 h-10 mr-4 rounded-full' />
            <div className="flex-1 leading-[18px]">
                <p className='font-semibold text-[18px] text-black]'>CodeWithAashish</p>
                <span className='text-[13px] text-[#5a5a5a]'>1M Subscribers</span>
            </div>
            <button className='bg-red-500 text-white py-2 px-7 border-0 outline-none rounded cursor-pointer'>Subscribe</button>
        </div>

        <div className='pl-11 my-4 mx-0'>
            <p className='text-[14px] mb-1 text-[#5a5a5a]'>Channel that make learning Easy</p>
            <p className='text-[14px] mb-1 text-[#5a5a5a]'>Subscribe Aashish to Watch More Tutorials on web development</p>
            <hr />
            <h4 className='text-[14px] mt-4 text-[#5a5a5a]'>130 Comments</h4>

        {/* Comments */}
            <div className='flex items-start my-5 mx-0'>
                <img src={user_profile} alt="" className='w-9 rounded-full mr-4' />
                <div className="">
                    <h3 className='text-[14px] mb-0.5'>Aryan Kumar <span className='text-[12px] text-[#5a5a5a] font-medium ml-2'>1 day ago</span></h3>
                    <p>One of the best video on youtube regarding web development</p>
                    <div className='flex items-center my-2 mx-0 text-[14px]'>
                        <img src={like} alt="" className='w-5 border-none mr-1'/>
                        <span className='mr-5 text-[#5a5a5a]'>244</span>
                        <img src={dislike} alt="" className='w-5 border-none mr-1'/>
                    </div>
                </div>
            </div>
            <div className='flex items-start my-5 mx-0'>
                <img src={user_profile} alt="" className='w-9 rounded-full mr-4' />
                <div className="">
                    <h3 className='text-[14px] mb-0.5'>Aryan Kumar <span className='text-[12px] text-[#5a5a5a] font-medium ml-2'>1 day ago</span></h3>
                    <p>One of the best video on youtube regarding web development</p>
                    <div className='flex items-center my-2 mx-0 text-[14px]'>
                        <img src={like} alt="" className='w-5 border-none mr-1'/>
                        <span className='mr-5 text-[#5a5a5a]'>244</span>
                        <img src={dislike} alt="" className='w-5 border-none mr-1'/>
                    </div>
                </div>
            </div>
            <div className='flex items-start my-5 mx-0'>
                <img src={user_profile} alt="" className='w-9 rounded-full mr-4' />
                <div className="">
                    <h3 className='text-[14px] mb-0.5'>Aryan Kumar <span className='text-[12px] text-[#5a5a5a] font-medium ml-2'>1 day ago</span></h3>
                    <p>One of the best video on youtube regarding web development</p>
                    <div className='flex items-center my-2 mx-0 text-[14px]'>
                        <img src={like} alt="" className='w-5 border-none mr-1'/>
                        <span className='mr-5 text-[#5a5a5a]'>244</span>
                        <img src={dislike} alt="" className='w-5 border-none mr-1'/>
                    </div>
                </div>
            </div>
            <div className='flex items-start my-5 mx-0'>
                <img src={user_profile} alt="" className='w-9 rounded-full mr-4' />
                <div className="">
                    <h3 className='text-[14px] mb-0.5'>Aryan Kumar <span className='text-[12px] text-[#5a5a5a] font-medium ml-2'>1 day ago</span></h3>
                    <p>One of the best video on youtube regarding web development</p>
                    <div className='flex items-center my-2 mx-0 text-[14px]'>
                        <img src={like} alt="" className='w-5 border-none mr-1'/>
                        <span className='mr-5 text-[#5a5a5a]'>244</span>
                        <img src={dislike} alt="" className='w-5 border-none mr-1'/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PlayVideo
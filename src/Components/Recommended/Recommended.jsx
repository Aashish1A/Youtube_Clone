import React, { useState } from 'react'
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"

const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([]);

    const fetchedData = async () => {
        const relatedVideoUrl = ``;
    }

  return (
    <div className='basis-[30%]'>
        {/* Side video list */}
        <div className="flex justify-between mb-2">
            <img src={thumbnail1} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>
        
        <div className="flex justify-between mb-2">
            <img src={thumbnail2} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

        <div className="flex justify-between mb-2">
            <img src={thumbnail3} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

        <div className="flex justify-between mb-2">
            <img src={thumbnail4} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

        <div className="flex justify-between mb-2">
            <img src={thumbnail5} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

        <div className="flex justify-between mb-2">
            <img src={thumbnail6} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

        <div className="flex justify-between mb-2">
            <img src={thumbnail7} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

        <div className="flex justify-between mb-2">
            <img src={thumbnail8} alt="" className='basis-[49%] w-1/2' />
            <div className="basis-[49%]">
                <h4 className='text-[13px] mb-1.5'>Best channel that helps you tu be a developer</h4>
                <p>CodeWithAashish</p>
                <p>200k Views</p>
            </div>
        </div>

    </div>
  )
}

export default Recommended
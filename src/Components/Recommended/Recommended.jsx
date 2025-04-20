import React, { useEffect, useState } from 'react'
import { API_KEY, valueConverter } from '../../data'
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

    const [apiData, setApiData] = useState([]);

    const fetchedData = async () => {
        const relatedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
        await fetch(relatedVideoUrl)
        .then(res => res.json())
        .then(data => setApiData(data.items))
    }

    useEffect(()=>{
        fetchedData();
    }, [])

  return (
    <div className='hidden md:block basis-[30%]'>
        {apiData.map((item, index)=> {
           return (
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="flex justify-between mb-2">
                <img src={item.snippet.thumbnails.medium.url} alt="" className='basis-[49%] w-1/2' />
                <div className="basis-[49%]">
                    <h4 className='text-[13px] mb-1.5'>{item.snippet.title}</h4>
                    <p>{item.snippet.channelTitle}</p>
                    <p>{valueConverter(item.statistics.viewCount)} views</p>
                </div>
            </Link>
           )
        })}

    </div>
  )
}

export default Recommended
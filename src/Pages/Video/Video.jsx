import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {

  const {videoId, categoryId} = useParams();

  return (
    <div className='bg-[#f9f9f9] px-[2%] py-5 flex justify-between wrap'>
      <PlayVideo videoId={videoId} />
      <Recommended />
    </div>
  )
}

export default Video
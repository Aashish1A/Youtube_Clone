import React, { useEffect, useState } from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import aashish from "../../assets/aashish.jpg";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment/moment";

const PlayVideo = ({ videoId }) => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchedVideoData = async () => {
    // Fetching Videos Data
    const fetchedVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(fetchedVideo)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // Fetching Channel Data
    const fetchedChannelData = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(fetchedChannelData)
    .then((res)=> res.json())
    .then(data => setChannelData(data.items[0]))
  }

  const fetchedCommentData = async () => {
    // Fetching channelComments
    const fetchedComment = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(fetchedComment)
    .then(res => res.json())
    .then(data => setCommentData(data.items))
  }


  useEffect(() => {
    fetchedVideoData();
  }, []);

  useEffect(()=>{
    fetchOtherData();
  }, [apiData])

  useEffect(()=> {
    fetchedCommentData();
  }, [apiData])
 
  return (
    <div className="basis-[69%]">

      {/* <video src={video1} controls autoPlay muted  className='w-full' ></video> */}

      <iframe
        className="w-full h-[37vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h3 className="mt-2.5 font-semibold text-2xl">
        {apiData ? apiData.snippet.title : "Title Here"}
      </h3>

      <div className="flex items-center justify-between wrap mt-2.5 text-[14px] text-[#5a5a5a]">
        <p>{valueConverter(apiData?apiData.statistics.viewCount: "15k")}views &bull; {moment(apiData?apiData.snippet.publishedAt: "2 days ago").fromNow()}</p>
        <div className="flex">
          <span className="inline-flex items-center ml-4">
            <img src={like} alt="" className="w-5 mr-2" />
            {valueConverter(apiData?apiData.statistics.likeCount: "1k")}
          </span>
          <span className="inline-flex items-center ml-4">
            <img src={dislike} alt="" className="w-5 mr-2" />
            {valueConverter(apiData?apiData.statistics.dislikeCount: "120")}
          </span>
          <span className="inline-flex items-center ml-4">
            <img src={share} alt="" className="w-5 mr-2" />
            Share
          </span>
          <span className="inline-flex items-center ml-4">
            <img src={save} alt="" className="w-5 mr-2" />
            Save
          </span>
        </div>
      </div>

      <hr className="border-0 h-1 bg-gray-400 my-2.5 mx-0" />
      <div className="flex items-center mt-5">
        <img src={channelData?channelData.snippet.thumbnails.default.url : ""} alt="" className="w-10 h-10 mr-4 rounded-full" />
        <div className="flex-1 leading-[18px]">
          <p className="font-semibold text-[18px] text-black]">
            {apiData?apiData.snippet.channelTitle: "CodeWithAashish"}
          </p>
          <span className="text-[13px] text-[#5a5a5a]">{valueConverter(channelData?channelData.statistics.subscriberCount: "120")} Subscribers</span>
        </div>
        <button className="bg-red-500 text-white py-2 px-7 border-0 outline-none rounded cursor-pointer">
          Subscribe
        </button>
      </div>

      <div className="pl-11 my-4 mx-0">
        <p className="text-[14px] mb-1 text-[#5a5a5a]">
          {apiData?apiData.snippet.description.slice(0,250): "Best Video"}
        </p>
        <p className="text-[14px] mb-1 text-[#5a5a5a]">
          Subscribe Aashish to Watch More Tutorials on web development
        </p>
        <hr />
        <h4 className="text-[14px] mt-4 text-[#5a5a5a]">{valueConverter(apiData?apiData.statistics.commentCount: "120")} Comments</h4>

        {/* Comments */}
        {commentData.map((item, index)=>{
            return (
                <div key={index} className="flex items-start my-5 mx-0">
                    <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className="w-9 rounded-full mr-4" />
                    <div className="">
                        <h3 className="text-[14px] mb-0.5">{item.snippet.topLevelComment.snippet.authorDisplayName}<span className="text-[12px] text-[#5a5a5a] font-medium ml-2">{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                        <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="flex items-center my-2 mx-0 text-[14px]">
                            <img src={like} alt="" className="w-5 border-none mr-1" />
                            <span className="mr-5 text-[#5a5a5a]">{valueConverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                            <img src={dislike} alt="" className="w-5 border-none mr-1" />
                        </div>
                    </div>
                </div>
            )
        })}

      </div>
    </div>
  );
};

export default PlayVideo;

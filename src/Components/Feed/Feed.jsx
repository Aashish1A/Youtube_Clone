import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { valueConverter } from "../../data";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_Url)
      .then((res) => res.json())
      .then((data) => setData(data.items))
  };

  useEffect(() => {
    fetchData();
  }, [category]); 

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-4 gap-y-7 mt-4">
      {data.map((item, index) => {
        return (
          <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="">
            <img src={item.snippet.thumbnails.medium.url} alt="" className="w-full rounded" />
            <h2 className="text-base font-semibold text-black my-1 mx-0">
              {item.snippet.title}
            </h2>
            <h3 className="tex-[14px] font-semibold text-[#555] my-1.5 mx-0">
              {item.snippet.channelTitle}
            </h3>
            <p className="text-[14px]">{valueConverter(item.statistics.viewCount)}views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
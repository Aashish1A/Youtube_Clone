import React from "react";
import home from "../../assets/home.png";
import gameIcon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blog from "../../assets/blogs.png";
import news from "../../assets/news.png";
import aashish from "../../assets/aashish.jpg";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar }) => {
  return (
    <div
      className={`bg-white h-screen fixed top-0 pl-[2%] pt-20 transition-all duration-300 ${
        sidebar ? "" : "small-sidebar"
      }`}
    >
      {/* Shortcut Links */}
      <div className="">
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={home} alt="" className="w-5 mr-5" />
          <p>Home</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={gameIcon} alt="" className="w-5 mr-5" />
          <p>Gaming</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={automobiles} alt="" className="w-5 mr-5" />
          <p>Automobiles</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={sports} alt="" className="w-5 mr-5" />
          <p>Sports</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={entertainment} alt="" className="w-5 mr-5" />
          <p>Entertainment</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={tech} alt="" className="w-5 mr-5" />
          <p>Technology</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={music} alt="" className="w-5 mr-5" />
          <p>Music</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={blog} alt="" className="w-5 mr-5" />
          <p>Blogs</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={news} alt="" className="w-5 mr-5" />
          <p>News</p>
        </div>
        <hr className="border-0 h-1 w-[85%] bg-gray-300" />
      </div>
      {/* Subscribed List */}
      <div className="">
        <h3 className="text-[13px] my-5 mx-0 text-[#5a5a5a]">Subscribed</h3>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={aashish} alt="" className="w-6 h-6 rounded-full mr-5" />
          <p>CodeWithAashish</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={simon} alt="" className="w-6 rounded-full mr-5" />
          <p>MrBeast</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={tom} alt="" className="w-6 rounded-full mr-5" />
          <p>PewDiePie</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={megan} alt="" className="w-6 rounded-full mr-5" />
          <p>College Wallah</p>
        </div>
        <div className="flex items-center mb-5 w-fit flex-wrap cursor-pointer">
          <img src={cameron} alt="" className="w-6 rounded-full mr-5" />
          <p>Procoddr</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

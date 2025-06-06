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

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div
      className={`bg-white h-screen fixed top-0 pl-[2%] pt-20 transition-all duration-300 ${
        sidebar ? "" : "small-sidebar"
      }`}
    >
      {/* Shortcut Links */}
      <div className="hidden md:block">
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="" className="w-5 mr-5" />
          <p>Home</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={gameIcon} alt="" className="w-5 mr-5" />
          <p>Gaming</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" className="w-5 mr-5" />
          <p>Automobiles</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" className="w-5 mr-5" />
          <p>Sports</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" className="w-5 mr-5" />
          <p>Entertainment</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" className="w-5 mr-5" />
          <p>Technology</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" className="w-5 mr-5" />
          <p>Music</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blog} alt="" className="w-5 mr-5" />
          <p>Blogs</p>
        </div>
        <div className={`flex items-center mb-5 w-fit flex-wrap cursor-pointer ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" className="w-5 mr-5" />
          <p>News</p>
        </div>
        <hr className="border-0 h-1 w-[85%] bg-gray-300" />
      </div>
      {/* Subscribed List */}
      <div className="hidden md:block">
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

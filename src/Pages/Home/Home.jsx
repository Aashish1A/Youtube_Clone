import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} />

      {/* Feed */}
      <div
        className={`bg-[#f9f9f9] flex-1 transition-all duration-300 pr-[2%] pt-5 pb-5 ${
          sidebar ? "pl-[17%]" : "pl-[7%]"
        }`}
      >
        <Feed />
      </div>
    </div>
  );
};

export default Home;

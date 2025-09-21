import React, { useState } from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {


  const [category, setCategory] = useState(0)

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />

      {/* Feed */}
      <div
        className={`bg-[#f9f9f9] flex-1 transition-all duration-300 pr-[5%] md:pr-[2%] pt-5 pb-5 ${
          sidebar ? "pl-[5%]  md:pl-[17%]" : "md:pl-[7%]"
        }`}
      >
        <Feed category={category} />
      </div>
    </div>
  );
};

export default Home;

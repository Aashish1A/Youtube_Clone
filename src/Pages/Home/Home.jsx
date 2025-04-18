import React from "react";
import Sidebar from "../../Components/SideBar/Sidebar";
import Feed from "../../Components/Feed/Feed";

const Home = ({ sidebar }) => {
  return (
    <>
      <Sidebar sidebar={sidebar} />
      <div
        className={`  ${
          sidebar ? "" : "largeContainer"
        }`}
      >
        <Feed />
      </div>
    </>
  );
};

export default Home;

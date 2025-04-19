import React from 'react'
import menuIcon from "../../assets/menu.png";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search.png";
import uploadIcon from "../../assets/upload.png";
import moreIcon from "../../assets/more.png";
import notificationIcon from "../../assets/notification.png";
import profileIcon from "../../assets/aashish.jpg";
import { Link } from 'react-router-dom';

const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div py-2.5 px-[2%] justify-between shadow-md bg-white sticky top-0 z-10'>
      {/* Nav Left */}
      <div className="flex-div">
        <img src={menuIcon} alt="menuIcon" className='w-5 mr-6' onClick={()=> setSidebar(prev=>prev===false?true:false)} />
        <Link to='/'><img src={logo} alt="logo" className='w-32' /></Link>
      </div>
      {/* Nav Middle */}
      <div className="flex-div">
        <div className="flex-div border border-gray-300 rounded-3xl mr-4 py-2 px-3">
        <input type="text" placeholder='search' className='outline-none w-sm px-2' />
        <img src={searchIcon} alt="" className='w-4' />
        </div>
      </div>
      {/* Nav Right */}
      <div className="flex-div">
        <img src={uploadIcon} alt="upload" className='w-6 mr-6' />
        <img src={moreIcon} alt="more" className='w-6 mr-6' />
        <img src={notificationIcon} alt="notification" className='w-6 mr-6' />
        <img src={profileIcon} alt="profile" className='w-9 h-9 mr-6 rounded-full' />
      </div>
    </nav>
  )
}

export default Navbar
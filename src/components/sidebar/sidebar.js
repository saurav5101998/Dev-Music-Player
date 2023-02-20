import React from 'react'
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import {MdFavorite,MdSpaceDashboard} from "react-icons/md";
import {FaGripfire,FaPlay,FaSignOutAlt} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5"
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img 
        src="https://i.pinimg.com/736x/25/78/61/25786134576ce0344893b33a051160b1.jpg"
        className='profile-img'
        alt="profile"
        />
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favourite" to="/favourite" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to=" " icon={FaSignOutAlt} />
      </div>
  )
}

export default Sidebar
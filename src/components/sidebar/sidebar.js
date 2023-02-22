import React, { useState, useEffect } from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import UserProfile from "../../screens/userProfile/userProfile";
import { Link } from "react-router-dom";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  // const [singOut, setSignOut] = useState(window.localStorage.getItem("token"));
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  // console.log("signout->",singOut);
   
  const userProfileHandler = () =>{
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
      console.log(response);
    });
  }

  return (
    <div className="sidebar-container">
      <Link to="/user">
        <img src={image} className="profile-img" alt="profile" onClick={()=>{userProfileHandler()}} />
      </Link>
      <div>
       <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} /> 
       <SidebarButton title="Browse" to="/browse" icon={<FaGripfire />} /> 
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton
          title="Favorites"
          to="/favorites"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
        
      </div>
     <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}

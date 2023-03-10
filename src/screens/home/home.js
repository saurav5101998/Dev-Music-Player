import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from '../../components/sidebar/sidebar';
import { setClientToken } from '../../spotify';
import Login from '../auth/login';
import Favourite from '../favourite/favourite';
import Feed from '../feed/feed';
import Library from '../library/library';
import Player from '../player/player';
import Trending from '../trending/trending';
import { FaSignOutAlt } from "react-icons/fa";
import SidebarButton from '../../components/sidebar/sidebarButton';
import UserProfile from '../userProfile/userProfile';
import "./home.css";
import BrowseCategory from '../browseCategory/browseCategory';
import NewReleases from '../newReleases/newReleases';
function Home() {
  const [token, setToken] = useState("");
  const [width, setWidth]  = useState(window.innerWidth);
  useEffect(()=>{
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token && hash){
      const _token = hash.split('&')[0].split("=")[1];
      window.localStorage.setItem("token",_token);
      setToken(_token);
      setClientToken(_token)
    } else{
      setToken(token);
      setClientToken(token);
    } 
  },[])

  useEffect(()=>{
    // if(window.innerWidth!=width){
    // }
    setWidth(window.innerWidth);
  },[width]);

  console.log("InnerWidth ", width);
  return (

    (!token ?
      <Login />
      :
    <Router>
      <div className="main-body">
        {/* {window.location.pathname != "/login" ?  <Sidebar /> : ""} */}
        <div className='SideBarMainDiv'>
        <Sidebar />
        </div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Library />} />
            {/* <Route path="/feed" element={<Feed/>} /> */}
            <Route path="/browse" element={<BrowseCategory />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/player" element={<Player />} />
            <Route path="/library" element={<Library />} />
            <Route path="/new-release" element={<NewReleases />} />
        </Routes>
        </div>
        
    </Router>
   

    ) 
  )
}

export default Home;
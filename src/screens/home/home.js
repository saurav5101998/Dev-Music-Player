import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from '../../components/sidebar/sidebar';
import Favourite from '../favourite/favourite';
import Feed from '../feed/feed';
import Library from '../library/library';
import Player from '../player/player';
import Trending from '../trending/trending';
import "./home.css";
function Home() {
  return (
    <Router>
      <div className="main-body">
        <Sidebar />
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/player" element={<Player />} />
            <Route path="/library" element={<Library />} />
        </Routes>
        </div>
    </Router>
  )
}

export default Home;
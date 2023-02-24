import React, {useState, useEffect} from 'react';
import apiClient from '../../spotify';
import "./browseCategory.css";

function BrowseCategory() {
    const [category, setCategory] = useState([]);
    // const [name, setName] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    // const [userId, setUserId] = useState("");

  useEffect(()=>{
    apiClient.get("browse/categories").then(function(response){
        setCategory(response?.data?.categories?.items);
      
    });
  },[])

  // useEffect(()=>{
  //   apiClient.get("browse/categories/"+ category?.id + "/playlists").then(function(response){
  //     console.log("CategoryPlaylist", response);
  //   })
  // })

  console.log("category--------->",category);
  category.map((cat)=>{
    console.log(cat.name)
  }) 
  return (
    <div className='screen-container'>
        {category.map((cat)=>{ 
            return (
                <div className='playlist-card' key={cat.id}>
                <div className='imageInside-browse'>
                    <img src={cat.icons[0].url} className="playlist-image" />
                </div>
                <p className='playlist-title'>{cat.name}</p>
            </div>
            )
        })} 
    </div>
  )
}

export default BrowseCategory
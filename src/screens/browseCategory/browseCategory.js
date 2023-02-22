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
  console.log("category--------->",category);
  category.map((cat)=>{
    console.log(cat.name)
  }) 
  return (
    <div className='screen-container'>
        {category.map((cat)=>{ 
            return (
                <div className='browse-category' key={cat.id}>
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
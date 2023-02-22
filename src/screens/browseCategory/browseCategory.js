import React, {useState, useEffect} from 'react';
import apiClient from '../../spotify';

import "./browseCategory.css";

function BrowseCategory() {
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [userId, setUserId] = useState("");

  useEffect(()=>{
    apiClient.get("browse/categories").then(function(response){
        setCategory(response?.data?.categories?.items);
        // setName(response.data.display_name);
        // setImageUrl(response.data.images[0].url);
        // setUserId(response.data.id);
      console.log(response);
    });
  },[])
  return (
    <div>
        {category?.map((cat)=>{
            <p>{cat.name}</p>
        })}

    </div>
  )
}

export default BrowseCategory
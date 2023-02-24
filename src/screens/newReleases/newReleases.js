import React,{useState, useEffect} from 'react';
import "./newReleases.css";
import apiClient from '../../spotify';

export default function NewReleases() {
    const [newReleases, setNewReleases] = useState([]);

  useEffect(()=>{
    apiClient.get("browse/new-releases").then(function(response){
        setNewReleases(response?.data?.albums?.items);
      
    });
  },[])
  console.log("category--------->",newReleases);
  
  return (
    <div className='screen-container'>
    {newReleases.map((cat)=>{ 
        return (
            <div className='playlist-card' key={cat.id}>
            <div className='imageInside-browse'>
                <img src={cat.images[0].url} className="playlist-image" />
            </div>
            <p className='playlist-title'>{cat.name}</p>
            <p className='release-date'>Release Date - {cat?.release_date}</p>
        </div>
        )
    })} 
</div>
  )
}

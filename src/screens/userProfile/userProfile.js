import React, {useState, useEffect} from 'react';
import apiClient from "../../spotify";
import "./main.css";

function UserProfile() {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [userId, setUserId] = useState("");

  useEffect(()=>{
    apiClient.get("me").then(function(response){
        // setUser(response.data);
        setName(response.data.display_name);
        setImageUrl(response.data.images[0].url);
        setUserId(response.data.id);
    //   console.log(user);
    });
  },[])
  return (
    // <div>
         <div class="profile-card">
      <div class="profile-card__header">
        <div class="profile-card__header__pic">
          <img src={imageUrl} alt="" />
        </div>
        <h2>{name}</h2>
        <p>User Id</p>
        <p style={{fontSize:"10px"}}>{userId}</p>
        <div class="profile-card__header__link-social">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-github"></a>
          <a href="#" class="fab fa-youtube"></a>
        </div>

        <a href="https://www.linkedin.com/in/sauravkumar5101998/" class="btn" >Contact Me</a>
      </div>
    <p style={{padding: "1rem 0 0 0"}}>Most Liked Singer</p>
      <div class="profile-card__footer">
        <div class="profile-card__footer__item">
          <p><span>Talwiinder</span>Dhundhala</p>
        </div>
        <div class="profile-card__footer__item">
          <p><span>Shubh</span>Elevated</p>
        </div>
        <div class="profile-card__footer__item">
          <p><span>Young Stunners</span>Gumaan</p>
        </div>
      </div>
    </div>
    // {/* </div> */}
  );
}

export default UserProfile;
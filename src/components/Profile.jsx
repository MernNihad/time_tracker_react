import React, { useCallback, useState } from "react";
import avatarIcon from "../assets/images/image-jeremy.png"

function Profile({callback}) {

  // const [interval, setInterval] = useState('daily');
  console.log('inside componet');

  const handleOnclick = (event)=>{
    callback(event)
  }
  // const handleOnclick = useCallback((event)=>{
  //   callback(event)
  // }, []);


  return (
    <div className="profile">
      <div className="profile-info">
        <img src={avatarIcon} alt="" />
        <div className="content-box">
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="profile-intervals">
        <ul>
          <li onClick={()=>handleOnclick('daily')}>Daily</li>
          <li onClick={()=>handleOnclick('weekly')}>Weekly</li>
          <li onClick={()=>handleOnclick('monthly')}>Monthly</li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;

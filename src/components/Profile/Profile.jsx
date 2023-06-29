import React from "react";

import MypostsContainer from "./Myposts/MypostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";


const Profile = (props) => {

  if (!props.isAuth) return <Navigate to='/login' />
    return  (
      <div >
        <ProfileInfo profile = {props.profile}/>
        <MypostsContainer />
  
      </div>
    );

}

export default Profile;
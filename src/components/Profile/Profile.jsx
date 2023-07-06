import React from "react";
import MypostsContainer from "./Myposts/MypostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  
    return  (
      <div >
        <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
        <MypostsContainer />
  
      </div>
    );

}

export default Profile;
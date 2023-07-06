import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    
    if (!props.profile ){
        <Preloader />
    }else{
        return (
            <div>
                <div className={s.avatar}>
                    <img src="https://citrontours.ae/wp-content/uploads/2022/09/gallery-img-worlds-of-adventure-1.jpg"></img>
                </div>
                <div className={s.discription}>
                <img src= {props.profile.photos.large}/>
                    
                    
                    
                    <ProfileStatus status = {props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        );

    }
    

}

export default ProfileInfo;
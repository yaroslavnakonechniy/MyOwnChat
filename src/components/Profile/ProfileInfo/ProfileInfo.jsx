import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src="https://citrontours.ae/wp-content/uploads/2022/09/gallery-img-worlds-of-adventure-1.jpg"></img>
            </div>
            <div className={s.discription}>
                img and discription
            </div>
        </div>
    );
}

export default ProfileInfo;
import axios from "axios";
import React from "react";
import s from './User.module.css';
import userPhoto from  "../../assets/images/user.png";


const User = (props) => {
debugger;

let getUsers = () => {
    if (props.users.length === 0) {


        axios.get("https://social-network.samuraijs.com/api/1.0/users").then (response => {
            debugger;
            props.setUsers(response.data.items);
        });

    }
}

    return <div className={s.name}>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto} />
                    </div>
                    <div>
                        { u.follow
                        ? <button onClick={ () => {props.unfollow(u.id)} }> Unfollow</button>
                        : <button onClick={ () => {props.follow(u.id)} }> Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>

                </span>

            </div>)
        }


    </div>
}

export default User ;
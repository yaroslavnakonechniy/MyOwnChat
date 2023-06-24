import React from "react";
import s from './User.module.css';
import userPhoto from  "../../assets/images/user.png";
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { usersAPI } from "../../api/api";

let User = (props) => {

    
        let pageSize = Math.ceil(props.totalUserCount / props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageSize; i++ ){
            pages.push(i);
        }

    return <div className={s.name}>
    <div>
        {
        pages.map(p => {
            return (
                <span className={props.currentPage === p && s.pagesCount}
                onClick ={ () => {props.onPageChange(p) }}>{p}</span>
            )
        })
        
        }
    </div>

{
    props.users.map( u => <div key={u.id}>
        <span>
            <div>
                <NavLink to={'/profile/'+ u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto} />
                </NavLink>
                
            </div>
            <div>
                { u.follow
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                    props.unfollow( u.id);

                    
                    
                
                } }> Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                    props.follow(u.id)
                } }> Follow</button>
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

export default User;
import React from "react";
import s from './User.module.css';
import userPhoto from  "../../assets/images/user.png";

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

export default User;
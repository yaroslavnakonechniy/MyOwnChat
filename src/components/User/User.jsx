import React from "react";
import s from './User.module.css';


const User = (props) => {
debugger;
    if (props.users.length === 0) {
        props.setUsers([
            {id:1,follow: false, PhotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&usqp=CAU",
                name:"Igor", status:"i am a boss", location:{city:"Vinnica", country: "Ukraine"}},
            {id:2,follow: true, PhotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&usqp=CAU",
                name:"Oksana", status:"i am a friends", location:{city:"Vinnica", country: "Ukraine"}},
            {id:3,follow: false, PhotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&usqp=CAU",
                name:"Tolya", status:"i am a girl", location:{city:"Vinnica", country: "Ukraine"}},
            {id:4,follow: true, PhotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-oM39OqBCgUncMTs88Hk7fWuEPiihQaxmw&usqp=CAU",
                name:"Tolya2", status:"i am a tt", location:{city:"Vinnica", country: "Ukraine"}}
        ])
    }
debugger;
    return <div className={s.name}>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.PhotoUrl} className={s.userPhoto} />
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
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }


    </div>
}

export default User ;
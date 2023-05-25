import React from "react";
import s from './Friends.module.css';

const Friends = () =>{
    return(
        <div className={s.friends}>
            <div className={s.capter}>
                Friends 
            </div>
            <div className={s.content}>
                <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s" alt="" />
                    <div>Shasa</div>
                </div>
                <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s" alt="" />
                    <div>Shasa</div>
                </div>
                <div className={s.item}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s" alt="" />
                    <div>Shasa</div>
                </div>
            </div>
        </div>
    )
}

export default Friends;
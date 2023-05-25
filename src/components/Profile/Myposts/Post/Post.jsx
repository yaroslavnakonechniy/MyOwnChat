import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.post}>
        <div className={s.item}>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s" alt="" />
          <div>
            {props.name}
          </div>
          <div>
            {props.massage}
          </div>
          
        </div>

      </div>
    );
}

export default Post;
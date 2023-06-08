import axios from "axios";
import React from "react";
import s from './User.module.css';
import userPhoto from  "../../assets/images/user.png";


class UserC extends React.Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then (response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange (pageNumber){
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then (response => {
            debugger;
            this.props.setUsers(response.data.items);
        });
    }

    render() {
debugger;
        let pageSize = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pageSize; i++ ){
            pages.push(i);
        }


        return <div className={s.name}>
            <div>
                {
                pages.map(p => {
                    return (
                        <span className={this.props.currentPage === p && s.pagesCount}
                        onClick ={ () => {this.onPageChange(p) }}>{p}</span>
                    )
                })
                
                }
            </div>
        
        {
            this.props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto } className={s.userPhoto} />
                    </div>
                    <div>
                        { u.follow
                        ? <button onClick={ () => {this.props.unfollow(u.id)} }> Unfollow</button>
                        : <button onClick={ () => {this.props.follow(u.id)} }> Follow</button>
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
}

export default UserC;
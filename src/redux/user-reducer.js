const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users : [
        {id:1,follow: true, name:"Igor", status:"i am a boss", location:{city:"Vinnica", country: "Ukraine"}},
        {id:2,follow: true, name:"Oksana", status:"i am a friends", location:{city:"Vinnica", country: "Ukraine"}},
        {id:3,follow: true, name:"Tolya", status:"i am a girl", location:{city:"Vinnica", country: "Ukraine"}},
        {id:4,follow: true, name:"Tolya2", status:"i am a tt", location:{city:"Vinnica", country: "Ukraine"}}
    ],
    
};

export const userReducer = (state = initialState, action) => {

    switch(action.type){
        case FOLLOW :{

            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, follow: true}
                    }
                    return u;
                })
                
            };
        }
        case UNFOLLOW :{
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, follow: false}
                    }
                    return u;
                })
                
            };
        }
        case SET_USERS: {
            return {
                ...state, users: [ ...state.users, ...action.users]
            }
        }
        default :
            return state;
        }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ( { type:UNFOLLOW, userId })
export const setUsersAC = (users) => ( { type:SET_USERS, users })

export default userReducer;
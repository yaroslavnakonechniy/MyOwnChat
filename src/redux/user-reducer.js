const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users : [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 4,
    isFetching: true
    
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
                ...state, users: action.users
            }
        }
        case CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case TOTAL_COUNT: {
            return {
                ...state, totalUserCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return{
                ...state, isFetching: action.isFetching
            }
        }
        default :
            return state;
        }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ( { type:UNFOLLOW, userId })
export const setUsersAC = (users) => ( { type:SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type:CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUserCount) => ({ type:TOTAL_COUNT, count:totalUserCount})
export const toggleIsFetchingAC = (isFetching) => ({ type:TOGGLE_IS_FETCHING, isFetching})


export default userReducer;
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

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ( { type:UNFOLLOW, userId })
export const setUsers = (users) => ( { type:SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type:CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUserCount) => ({ type:TOTAL_COUNT, count:totalUserCount})
export const toggleIsFetching = (isFetching) => ({ type:TOGGLE_IS_FETCHING, isFetching})


export default userReducer;
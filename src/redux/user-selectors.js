export const getNewUsers = (state) => {
    return state.UserPage.users;
}

export const getPageSize = (state) => {
    return state.UserPage.pageSize;
}

export const getTotalUserCount = (state) => {
    return state.UserPage.totalUserCount;
}

export const getCurentPage = (state) => {
    return state.UserPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.UserPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.UserPage.followingInProgress;
}
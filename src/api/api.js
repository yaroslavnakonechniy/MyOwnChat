import axios from "axios";

const instanse = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "DSGEDFHGDFHFGHGHDGH"
    }
})

export const usersAPI = {
    getUsers (currentPage , pageSize ) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
        .then  (response => {
            return response.data;
        });
    }
}
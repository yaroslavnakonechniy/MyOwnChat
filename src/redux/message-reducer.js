const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MASSEGE = "SEND-MASSEGE";

let initialState = {
    MessagesData : [
        {id:1, message:"Hi"},
        {id:2, message:"how is your it-kamasutra?"},
        {id:3, message:"Yo Givi"},
        {id:4, message:"Yo NA"}

    ],
    DialogsData : [
        {id:1, name: "Yaroslav", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s"},
        {id:2, name: "Vika", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s"},
        {id:3, name: "Oleg", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s" },
        {id:4, name: "Katya", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMPQlg6jN40Dt1Gs5OaBDdGDCnZv6DL4Tzlw_5_Z_&s"}
    ],
    NewMessagesBody : 'qwerty'
};

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY :{
            return {
                ...state,
                NewMessagesBody: action.body
            };

        }
        case SEND_MASSEGE : {
            let newMessage = state.NewMessagesBody;
            return{
                ...state,
                NewMessagesBody: '',
                MessagesData : [...state.MessagesData, {id:6, message: newMessage}]
            };

        }
        default :
            return state;
    }
}

export const sendMassegeCreator = () => ({ type: SEND_MASSEGE })
export const updateBodyOfCreator = (text_body) => ( { type:UPDATE_NEW_MESSAGE_BODY, body:text_body })
export default messageReducer;
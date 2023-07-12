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
    ]
    
};

export const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SEND_MASSEGE : {
            let newMessage = action.newMessageBody;
            return{
                ...state,
                MessagesData : [...state.MessagesData, {id:6, message: newMessage}]
            };

        }
        default :
            return state;
    }
}

export const sendMassegeCreator = (newMessageBody) => ({ type: SEND_MASSEGE, newMessageBody })
export default messageReducer;
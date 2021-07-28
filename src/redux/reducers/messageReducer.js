const initialMsg = [
    {
        id:0,
        name:"Sathya",
        latestMessageText:"Hii...",
        time:new Date().toLocaleTimeString(),
        image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        imageAlt:"man"
    },
    {
        id:1,
        name:"Sharvin",
        latestMessageText:"Hello...",
        time:new Date().toLocaleTimeString(),
        image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        imageAlt:"man"
    },
    
]

const MessageReducer = (state = initialMsg, action) => {
    switch (action.type){
        case "ADD_MESSAGE":
            state=[...state, action.payload];
            return state;
        default:
            return state;
    }
};

export default MessageReducer;
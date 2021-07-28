const initialState =[
    {
        id:0,
        fname:"Sathya",
        email:"sath@gmail.com",
        phoneNo:9888555200,
        lname:"M",
        Date:new Date().toLocaleTimeString(),
        image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        alt:"man",
        ureadMsg:2
    },
    {
        id:1,
        fname:"Sharvin",
        phoneNo:9888555258,
        email:"sath@gmail.com",
        lname:"S",
        Date:new Date().toLocaleTimeString(),
        image:"https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        alt:"man",
        ureadMsg:3
        
    }
]

const contactReducer = (state = initialState,action) => {
    switch (action.type){
        case "ADD_CONTACT":
            state=[...state, action.payload];
            return state;
        default:
            return state;
    }
};

export default contactReducer;
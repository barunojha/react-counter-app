//Reducer function to change the old state to new state using ACTION
const counterReducer = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + action.payload
        case "DECREMENT":
            return state - action.payload
        default:
            return state
    }
}

export default counterReducer;
//INCREMENT ACTION
export const increment = (() => {
    return{
        type: "INCREMENT",
        payload: 1,
    }
})

//DECREMENT ACTION
export const decrement = (() => {
    return{
        type: "DECREMENT",
        payload: 1,
    }
})

//CAKE BOUGHT
export const cakeCount = ((value) => {
      return{
        type: "BUY_CAKE",
        payload: value.payload,
    }
})
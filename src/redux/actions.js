
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export function increment(payload){
    return {
        type: INCREMENT,
        payload: payload
    }
}
  
export function decrement(payload){
    return {
        type: DECREMENT,
        payload: payload
    }
}
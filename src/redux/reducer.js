import * as Actions from './actions'
const initialState = {
    isAuth: false,
    username: 'ok',
    ct: 0,
    demo: {}
}

export default function counter(state=initialState,action){
  switch(action.type){
      case Actions.INCREMENT:
          if(!state.demo[action.payload]) {
            state.demo[action.payload] = 0;
          }
          state.demo[action.payload] ++
          return Object.assign({},state)
      case Actions.DECREMENT:
            if(!state.demo[action.payload]) {
                state.demo[action.payload] = 0;
              }
              state.demo[action.payload] --
            return Object.assign({},state)
      default :
          return state
  }
}
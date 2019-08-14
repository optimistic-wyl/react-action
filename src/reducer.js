import { Toast } from 'antd-mobile'
const add_Gun = "Add_Gun"
const remove_Gun = "Remove_Gun"

const initialState = {
    isAuth: false,
    username: 'ok',
    ct: 0
}

export default function counter(state=initialState,action){
  switch(action.type){
      case 'Add_Gun':
          state.ct++
          return Object.assign({},state)
      case 'Remove_Gun':
            state.ct--
            return Object.assign({},state)
      default :
          return state
  }
}

export function Add_Gun(){
  return {type:add_Gun}
}

export function Remove_Gun(){
  return {type:remove_Gun}
}

/**
 * 异步加载，并且可以返回一个函数了。
 * thunk中间件的作用：改造store.dispatch，使其可以接受函数作为参数，如下Add_Gun_Async这个action生成函数返回的是一个函数
 * 一般store.dispatch只接受对象，如上Add_Gun\Remove_Gun这两个函数都是返回对象
 *  */ 
export function Add_Gun_Async(){
  Toast.loading('加载中', 0)
  return dispatch=>{
      setTimeout(()=>{
        Toast.hide();
        dispatch(Add_Gun())
      },2000)
  }
}
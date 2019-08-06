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

// 异步加载，并且可以返回一个函数了。
export function Add_Gun_Async(){
  Toast.loading('加载中', 0)
  return dispatch=>{
      setTimeout(()=>{
        Toast.hide();
        dispatch(Add_Gun())
      },2000)
  }
}
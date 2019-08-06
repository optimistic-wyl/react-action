import React from 'react'
import {connect} from 'react-redux'
import {Add_Gun,Remove_Gun,Add_Gun_Async } from './reducer'

import { Route, Link } from 'react-router-dom'

import Login from './container/login'
import Register from './container/register'

@connect(
    // @符合是装饰器babel-plugin-transform-decorators-legacy实现的。
    //第一个参数是，你要state什么属性放到props里面
    state=>{
        console.log('+++state+++:',state)
        return {num:state.ct}
    },
    // 你要什么方法，把它放到props里，自动dispatch
    { Add_Gun,Remove_Gun,Add_Gun_Async }
)
class App extends React.Component {
    render () {
        return (
            <div>
                <h2>现在有{this.props.num}把机关枪</h2>
                <button onClick={this.props.Add_Gun}>++机关枪++</button>
                <button onClick={this.props.Remove_Gun}>--机关枪--</button>
                <button onClick={this.props.Add_Gun_Async}>过2秒还</button>
                <p><Link to="/Register">Register</Link></p>
                <p><Link to="/login">login</Link></p>
                <Route path="/Register" component={Register}></Route>
                <Route path="/login" component={Login}></Route>
            </div>
        )
    }
}

export default App
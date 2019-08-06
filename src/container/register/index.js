import React from 'react'
import Provider from '../../component/common'
import StoreConfig from '../../redux/store'
import ControlPannel from '../../component/controlpannel'

class Register extends React.Component {
    
    render() {
        const store = StoreConfig();
        var content = (<div>
            <h2>注册页</h2>
            <Provider store = {store}>
                <ControlPannel/>
            </Provider>
        </div>)
        return content
    }
}

export default Register
import React from 'react'
import CounterContainer from './counter'
import SummaryContainer from './summary'

export default () => {
    return (
        <div>
            <CounterContainer caption="First"/>
            <CounterContainer caption="Second"/>
            <CounterContainer caption="Three"/>
            <SummaryContainer/>
        </div>
    )
}
/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 11:29:43
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 14:08:40
 */
import React from 'react'
import { ppHOC_state } from './ppHOC_state'
class App extends React.Component {
    render() {
        const props = this.props
        return (
            <>
                <p>ppHOC_state:</p>
                <p>name:{props.name}</p>
                <div>
                    <input type="text" value={props.name} onChange={props.handleChange}></input>
                </div>
            </>
        )
    }
}
export default ppHOC_state(App)
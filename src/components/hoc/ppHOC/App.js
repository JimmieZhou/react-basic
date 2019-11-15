/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 11:29:43
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 14:00:31
 */
import React from 'react'
import { ppHOC_basic } from './ppHOC_basic'
class App extends React.Component {
    render() {
        return (
            <>
                <p>ppHOC_basic：</p>
                <div>
                    <p>{JSON.stringify(this.props)}</p>
                </div>
            </>
        )
    }
}
export default ppHOC_basic(App)
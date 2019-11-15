/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 11:24:52
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 14:00:21
 */
import React from 'react'
export function ppHOC_basic(WrapedComponent) {
    return class PP extends React.Component {
        render() {
            const data = {
                name: 'jimmie',
                age: 18
            }
            const props = Object.assign({}, this.props, data)
            return <WrapedComponent {...props}></WrapedComponent>
        }
    }
}


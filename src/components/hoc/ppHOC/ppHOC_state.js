/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 13:39:25
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 14:06:44
 */
import React from 'react'
export function ppHOC_state(WrapedComponent) {
    return class PP extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: 'jimmie'
            }
        }
        handleChange = (e) => {
            this.setState({
                name: e.target.value
            })
        }
        render() {
            return <WrapedComponent {...this.props} name={this.state.name} handleChange={this.handleChange} />
        }
    }
}
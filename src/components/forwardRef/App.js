/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 10:16:58
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 10:22:59
 */
import React from 'react'
const FancyButton = React.forwardRef((props, ref) => (
    <div>
        <button ref={ref}>
            {
                props.children
            }
        </button>
    </div>
))
const ref = React.createRef()

function ForwordRefButton() {
    return <FancyButton ref={ref}>click me</FancyButton>
}
export default ForwordRefButton
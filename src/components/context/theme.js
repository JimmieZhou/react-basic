/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-14 17:22:32
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-14 17:24:30
 */
import React from 'react'
export const theme = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
}

export const ThemeContext = React.createContext(theme.light) // 默认值
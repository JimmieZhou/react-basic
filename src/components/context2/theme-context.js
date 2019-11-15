/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 09:48:12
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 09:50:58
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
export const ThemeContext = React.createContext({
    theme: theme.dark,
    toggleTheme: () => { }
})
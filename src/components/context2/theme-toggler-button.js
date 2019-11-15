/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: jimmiezhou
 * @Date: 2019-11-15 09:51:10
 * @LastEditors: jimmiezhou
 * @LastEditTime: 2019-11-15 09:54:47
 */
import { ThemeContext } from './theme-context'
function ThemeTogglerButton() {
    return (
        <ThemeContext.Consumer>
            {
                ({ theme, toggleTheme }) => (
                    <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
                        toggle theme
                    </button>
                )
            }
        </ThemeContext.Consumer>
    )
}
export default ThemeTogglerButton
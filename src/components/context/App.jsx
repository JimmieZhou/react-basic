import React from "react";
import { theme, ThemeContext } from "./theme";
import ThemeButton from "./ThemeButton";

function ToolBar(props) {
  return <ThemeButton onClick={props.changeTheme}>change theme</ThemeButton>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: theme.light
    };
  }
  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === theme.light ? theme.dark : theme.light
    }));
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default App;

import React from "react";
import { MyContext, data } from "./context";
import A from "./A";
import B from "./B";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  changeData = () => {
    this.setState(state => {
      return {
        ...state,
        data: {
          ...state.data,
          age: state.data.age + 1
        }
      };
    });
  };

  render() {
    return (
      <MyContext.Provider value={this.state.data}>
        <A onClick={this.changeData}></A>
        <B onClick={this.changeData}></B>
      </MyContext.Provider>
    );
  }
}
export default Index;

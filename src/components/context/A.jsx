import React from "react";
import { MyContext } from "./context";
class A extends React.Component {
  static contextType = MyContext;
  render() {
    const data = this.context;
    return (
      <div>
        <p>Comp A</p>
        <p></p>
        <button {...this.props}>change age</button>
        <p>
            {JSON.stringify(data)}
        </p>
      </div>
    );
  }
}

export default A;

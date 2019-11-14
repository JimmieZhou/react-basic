import React from "react";
import { MyContext } from "./context";
class B extends React.Component {
  static contextType = MyContext;
  render() {
    const data = this.context;
    
    console.log(data,this.props);
    return (
      <div>
        <p>Comp B</p>
        <p></p>
        <button {...this.props}>change age</button>
      </div>
    );
  }
}

export default B;

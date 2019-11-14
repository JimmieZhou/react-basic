import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isRun: true
    };
    // this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  //   handleBtnClick() {
  //     this.setState(state => ({
  //       isRun: !state.isRun
  //     }));
  //     if (this.state.isRun) {
  //       clearInterval(this.state.timmerId);
  //     } else {
  //       this.state.timmerId = setInterval(() => this.run(), 1000);
  //     }
  //   }

  // 等价于

  handleBtnClick = (e) => {
    this.setState(state => ({
      isRun: !state.isRun
    }));
    if (this.state.isRun) {
      clearInterval(this.state.timmerId);
    } else {
      this.state.timmerId = setInterval(() => this.run(), 1000);
    }
  };

  componentDidMount() {
    this.state.timmerId = setInterval(() => this.run(), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timmerId);
  }

  run() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <div>
          <button onClick={this.handleBtnClick}>
            {this.state.isRun ? "暂停" : "开始"}
          </button>
        </div>
      </div>
    );
  }
}
export default Clock;

import React from "react";

export default class Control extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickHandler = () => {
    if (this.props.paused) {
      this.props.start();
    } else {
      this.props.stop();
    }
  };

  render() {
    return (
      <button
        className={this.props.paused ? "paused" : ""}
        onClick={this.onClickHandler}
      >
        {this.props.paused ? "start" : "pause"}
      </button>
    );
  }
}

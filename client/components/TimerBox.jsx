import React from "react";
import Control from "./Control";
import { connect } from "react-redux";

const Reset = function(props) {
  return (
    <button onClick={props.onClickReset} className="reset">
      Reset
    </button>
  );
};

const Timer = function(props) {
  return <h1>{props.time}</h1>;
};

class TimerBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      paused: true,
      cost: 0,
      totalcost: 0
    };
    this.meetingDone = this.meetingDone.bind(this);
  }

  tick = () => {
    this.setState({
      timer: this.state.timer + 1,
      cost: (this.state.totalcost / 60 / 60) * this.state.timer
    });
  };

  startTimer = () => {
    this.interval = setInterval(this.tick, 1000);
    this.setState({ paused: false });

    let currentCost = this.props.state.map(user => {
      return user.user.hourly_wage;
    });

    this.setState({
      totalcost: currentCost.reduce(function(a, b) {
        return a + b;
      }, 0)
    });
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState({ paused: true });
  };

  reset = () => {
    this.setState({ timer: 0, paused: true });
    clearInterval(this.interval);
  };

  meetingDone() {
    this.stopTimer();
    this.props.save(this.state.cost, this.state.timer);
  }

  render() {
    return (
      <div>
        <p>Press start when everyone is ready to go</p>
        <Timer time={this.state.timer} />
        <Control
          paused={this.state.paused}
          start={this.startTimer}
          stop={this.stopTimer}
        />
        <Reset onClickReset={this.reset} />
        <p>Total cost of meeting: ${this.state.cost}</p>
        <button onClick={this.meetingDone}>Confirm end of meeting</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.addAttendee
  };
}

export default connect(
  mapStateToProps,
  null
)(TimerBox);

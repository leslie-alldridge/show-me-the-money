import React from "react";
import { connect } from "react-redux";
import UserList from "./UserList";
import AttendeesList from "./AttendeesList";
import Navbar from "./Navbar";
import TimerBox from "./TimerBox";
import { saveMeeting } from "../actions/meetings";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      costPerHour: 0,
      meetingName: "",
      attendees: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.test = this.test.bind(this);
    this.saveMeeting = this.saveMeeting.bind(this);
  }

  startTimer() {
    this.setState({
      timer: true
    });
  }

  test(a, b, c) {
    this.setState({
      costPerHour: a,
      meetingName: b,
      attendees: c
    });
  }

  saveMeeting(cost, seconds) {
    let time = Date.now();
    this.props.saveIt(
      this.state.meetingName,
      time,
      seconds,
      this.state.attendees,
      cost
    );
  }

  render() {
    return (
      <div>
        <div id="history_nav">
          <div id="Help_content" class="columns">
            <Navbar />
          </div>
        </div>
        <section id="hero_history" className="hero is-primary">
          <div id="hero_body" className="hero-body">
            <div className="container">
              <h1 className="title">Set up a meeting</h1>
              <h2 className="subtitle">See live meeting cost and duration</h2>
            </div>
          </div>
        </section>

        {!this.state.timer && (
          <div id="history_container" className="container">
            <div className="slide-fwd-center" id="h_left">
              <h1 id="title_history" className="subtitle">
                Meeting Members
              </h1>
              <UserList />
            </div>
            <div id="h_right">
              <AttendeesList test={this.test} startTimer={this.startTimer} />
            </div>
          </div>
        )}
        {this.state.timer && <TimerBox save={this.saveMeeting} />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveIt: (meetingname, time, seconds, attendees, cost) => {
      dispatch(saveMeeting(meetingname, time, seconds, attendees, cost));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout);

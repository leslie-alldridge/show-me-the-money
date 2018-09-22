import React from "react";
import { connect } from "react-redux";

import { saveMeeting } from "../actions/meetings";

class AttendeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingName: "Enter name here",
      savedName: "Default Name",
      meetingCost: [],
      attendees: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
    this.meetingStart = this.meetingStart.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      meetingName: ""
    });
  }

  handleChange(e) {
    this.setState({
      savedName: e.target.value,
      meetingName: e.target.value
    });
  }

  calculateCost(cost) {
    this.state.meetingCost += cost;
  }

  meetingStart() {
    this.props.startTimer();
    const cost = this.state.meetingCost.reduce(function(a, b) {
      return a + b;
    }, 0);
    const name = this.state.savedName;

    const attendees = this.props.displayAttendee.addAttendee.map(
      data => data.user
    );
    this.props.test(cost, name, attendees);
  }

  render() {
    {
      this.state.meetingCost = this.props.displayAttendee.addAttendee.map(
        meeting => Number(meeting.cost)
      );
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Meeting Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.meetingName}
            type="text"
          />
          <button type="submit">Save</button>
        </form>

        <h1 className="title">Meeting Attendees for {this.state.savedName}:</h1>
        {this.props.displayAttendee.addAttendee.map(data => {
          return (
            <p>
              {data.user.user_name} hourly rate: {data.user.hourly_wage}
            </p>
          );
        })}
        <p>
          Total Cost :
          {this.state.meetingCost.reduce(function(a, b) {
            return a + b;
          }, 0)}
        </p>
        <button onClick={this.meetingStart}>Start Meeting!</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayAttendee: state
  };
};

function mapDispatchToProps(dispatch) {
  return {
    saveMeeting: (cost, name, attendees) => {
      dispatch(saveMeeting(cost, name, attendees));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AttendeeList);

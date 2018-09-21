import React from "react";

import { connect } from "react-redux";

class AttendeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meetingName: "",
      savedName: "",
      meetingCost: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.calculateCost = this.calculateCost.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
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
    console.log(this.state.meetingCost);
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
              {/* {this.calculateCost(data.user.hourly_wage)} */}
            </p>
          );
        })}
        <p>
          Total Cost :
          {this.state.meetingCost.reduce(function(a, b) {
            return a + b;
          }, 0)}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayAttendee: state
  };
};

export default connect(mapStateToProps)(AttendeeList);

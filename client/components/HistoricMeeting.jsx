import React from "react";
import { connect } from "react-redux";
import { getMeeting } from "../actions/meetings";
import { Line } from "react-chartjs-2";

class HistoricMeeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Meeting Costs Over Time",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [12, 2, 1]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div id="historycontainer">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <p className="title">Meeting Details:</p>
            <p className="subtitle">
              <i className="fas fa-arrow-left" /> Select a meeting from the left
            </p>

            <div className="content" />
          </article>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMeeting: num => dispatch(getMeeting(num))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricMeeting);

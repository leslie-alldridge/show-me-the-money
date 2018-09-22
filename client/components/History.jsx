import React from "react";
import Navbar from "./Navbar";
import HistoricMeetings from "./HistoricMeetings";
import HistoricMeeting from "./HistoricMeeting";
import TheMeetingDetails from "./TheMeetingDetails";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

import { allMeetings, getMeeting } from "../actions/meetings";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewDetails: true,
      meetingID: "",
      showChart: false,
      data: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleChart = this.toggleChart.bind(this);
  }

  componentDidMount() {
    this.props.allMeetings();
  }

  componentWillMount() {}

  handleClick(e) {
    this.setState({
      meetingID: e.target.name
    });
    this.setState(prevState => ({
      viewDetails: !prevState.viewDetails
    }));
  }

  toggleChart() {
    let data = this.props.meetings.map(meeting => {
      return meeting.map(meet => {
        //console.log(meet);

        return meet.cost;
      });
    });
    //console.log(data);
    this.setState({
      data: [...data]
    });
    console.log(this.state);

    this.setState(prevState => ({
      showChart: !prevState.showChart
    }));
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
              <h1 className="title">History</h1>
              <h2 className="subtitle">See historical meetings and costs</h2>
            </div>
          </div>
        </section>

        <div id="history_container" className="container">
          <div class="slide-fwd-center" id="h_left">
            <h1 id="title_history" className="subtitle">
              Historical Meetings
            </h1>
            <HistoricMeetings handleClick={this.handleClick} />
          </div>
          <div id="h_right">
            {this.state.viewDetails && <HistoricMeeting />}
            {!this.state.viewDetails && (
              <TheMeetingDetails
                meetingid={this.state.meetingID}
                meeting={this.props.meetings}
              />
            )}
          </div>
        </div>
        <a onClick={this.toggleChart}>click me to see chart</a>
        {this.state.data.length >= 1 &&
          this.state.showChart && (
            <Sparklines data={this.state.data[0]}>
              <SparklinesLine color="blue" />
            </Sparklines>
          )}
        {console.log(this.state.data[0])}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  };
};

function mapDispatchToProps(dispatch) {
  return {
    allMeetings: num => {
      dispatch(allMeetings(num));
    },

    getMeeting: id => {
      dispatch(getMeeting(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);

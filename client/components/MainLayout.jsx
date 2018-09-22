import React from "react";
import { connect } from "react-redux";
import UserList from "./UserList";
import AttendeesList from "./AttendeesList";
import Navbar from "./Navbar";

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: false
    };
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    console.log("timer is going nuts");
    this.setState({
      timer: true
    });
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
              <AttendeesList startTimer={this.startTimer} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect()(MainLayout);

import React from "react";
import { connect } from "react-redux";
import UserList from "./UserList";
import AttendeesList from "./AttendeesList";
import Navbar from "./Navbar";

// Main Layout page

function MainLayout(props) {
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

      <div id="history_container" className="container">
        <div class="slide-fwd-center" id="h_left">
          <h1 id="title_history" className="subtitle">
            Meeting Members
          </h1>
          <UserList />
        </div>
        <div id="h_right">
          <AttendeesList />
        </div>
      </div>
    </div>
  );
}

export default connect()(MainLayout);

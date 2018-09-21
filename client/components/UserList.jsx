import User from "./User";

import React, { Component } from "react";
import { connect } from "react-redux";
import { addAttendee } from "../actions/addAttendee";
import { getAllUsers } from "../actions/usersAPI";

class UserList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    {
      console.log(this.props.state);
    }
    return (
      <div>
        <h1>List of Available Users</h1>

        {this.props.state.response.map(user => {
          return (
            <div>
              <User person={user} />
              <button
                onClick={() => this.props.addAttendee(user)}
                id=""
                className=""
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addAttendee: user => {
      dispatch(addAttendee(user));
    },
    getAllUsers: () => {
      dispatch(getAllUsers());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

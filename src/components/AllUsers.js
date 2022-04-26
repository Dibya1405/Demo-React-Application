import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AllUsers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <ul className="users">
          {this.props.users.map((user) => {
            return (
              <li className="list" key={user.id}>
                <img
                  className="listimg"
                  src={user.avatar_url}
                  alt={user.login}
                />
                <div className="listdiv">
                  <h4 className="listh4">{user.login}</h4>
                  <Link className="lista" to={user.html_url}>
                    <p className="listp">Profile</p>
                  </Link>
                </div>
                <div>
                  <Link className="lista" to={`/person?url=${user.url}`}>
                    <p className="listp">View</p>
                  </Link>
                  <p
                    className="listp"
                    style={{ color: "red" }}
                    onClick={() => this.props.actions.removeUser(user.id)}
                  >
                    Remove
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default AllUsers;

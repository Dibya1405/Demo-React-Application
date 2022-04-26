import React, { Component } from "react";
import img from "../assets/images/official_logo.jpg";
import moment from "moment";
import NavList from "./NavList";

export class Header extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
      // console.log(date);
    }, 1000);
  }
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  render() {
    return (
      <>
        <header className="head">
          <div className="logo">
            <img src={img} alt="Logo" />
            <h4 className="h4">
              Pirate<span style={{ color: "red" }}>ß</span>
            </h4>
          </div>
          <NavList />
          <div className="right" id="right">
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </div>
        </header>
      </>
    );
  }
}

export default Header;

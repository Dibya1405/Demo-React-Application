import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "../assets/css/consolidation.css";
import FavIcon from "../assets/images/fv.png";
import MyHeader from "../components/MyHeader";

export default class App extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log(state.time);
  //   console.log(new Date());
  //   if (state.time !== new Date())
  //     return {
  //       time: new Date(),
  //     };
  //   return null;
  // }

  render() {
    return (
      <>
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="This is a Demo React Application" />
          <link rel="icon" href={FavIcon} />
        </Helmet>
        <MyHeader />
        <section>{this.props.children}</section>
        <footer>
          <div className="center">
            &copy; Copyright || The rights are reserved by the site owner ||
            Pirate
            <span style={{ color: "red" }}>ß</span>.com
          </div>
        </footer>
      </>
    );
  }
}

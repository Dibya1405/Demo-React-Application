import React, { Component } from "react";
import img from "../assets/images/about.png";
import { motion } from "framer-motion";

export default class About extends Component {
  componentDidMount() {
    document.title = "About Page";
  }
  render() {
    return (
      <>
        <div className="container">
          <motion.div
            animate={{ x: [-500, 0] }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="imageContainer"
          >
            <img src={img} alt="Image" />
          </motion.div>
          <motion.div
            animate={{ x: [1000, 0] }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="noteContainer"
          >
            <ul>
              <li>
                <h2>What we are :</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsum perferendis sunt sapiente rerum pariatur ipsa. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aliquam magnam, omnis placeat architecto reiciendis?
                </p>
              </li>
              <li>
                <h2>What we provide :</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                  consequuntur error ullam deserunt autem eos corrupti
                  voluptatem, temporibus deleniti repudiandae. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Tenetur, veritatis.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  nostrum sint tenetur, molestiae fugiat cupiditate.
                </p>
              </li>
              <li>
                <h2>Our clients :</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, unde. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsa, consequatur!
                </p>
              </li>
            </ul>
          </motion.div>
        </div>
      </>
    );
  }
}

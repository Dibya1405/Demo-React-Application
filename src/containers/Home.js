import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import img from "../assets/images/home.png";
const Home = () => {
  useEffect(() => {
    document.title = "Home Page";
  });
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
          <h1>Hello Hackers</h1>
          <p>
            Welcome Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Modi odit temporibus facere distinctio consequatur quo mollitia
            optio, possimus sunt, ab perferendis saepe at, ipsum fuga culpa!
            Numquam, molestiae iusto voluptas nam facilis distinctio
            repudiandae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptatibus ad iusto iste recusandae dolor illum dicta saepe
            tenetur ipsam. Id recusandae illo ex quasi, delectus ea esse
            distinctio assumenda autem vero facilis debitis quam placeat eos ut
            officiis dolorem dolor obcaecati reprehenderit culpa enim, nostrum
            deleniti aliquid quibusdam! Sit neque itaque deleniti consequuntur,
            voluptas alias ipsum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laboriosam voluptas dignissimos aut quae
            similique, porro distinctio ut obcaecati alias! Qui!
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Home;

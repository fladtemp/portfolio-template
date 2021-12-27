import React from "react";
import logo from "../assets/hand.e48d41c1.png";
const MainSec = () => {
  return (
    <div>
      <section className="main-sec">
        <div>
          <h1>Im SomeOne</h1>
          <p>Web developer</p>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint
            molestiae laudantium deleniti eligendi? Mollitia deserunt
            necessitatibus aspernatur quaerat
          </h3>
          <button>
            <a href="#projects">Visit my work</a>
          </button>
        </div>
        <img src={logo} className="hande" alt="" />
      </section>
    </div>
  );
};

export default MainSec;

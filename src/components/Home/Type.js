import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Tech Enthusiast",
          "Lifelong Learner",
          "Open Source Contributor",
          "Web Developer"
        ],

         

        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;

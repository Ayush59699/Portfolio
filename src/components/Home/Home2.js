import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { SiLeetcode } from "react-icons/si";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I approach software engineering with the <b className="purple">discipline of the army</b> and the mindset of a <b className="purple">problem solver</b>.
              <br />
              <br />
              Consistency, structure, and execution define how I work. Just like in the military, I believe in showing up every day, refining my skills, and performing under pressure. Competitive programming on <b className="purple">Codeforces</b> has trained me to think critically, break down complex problems, and deliver efficient solutions within constraints.
              <br />
              <br />
              I don’t just write code — <i><b className="purple">I solve problems.</b></i>
              <br />
              <br />
              My experience in <b className="purple">Data Structures and Algorithms</b> allows me to approach challenges with clarity and precision, while my projects reflect my ability to build <b className="purple">scalable and practical systems</b>. From designing efficient algorithms to developing real-world applications, I focus on impact over noise.
              <br />
              <br />
              Discipline builds consistency. Problem-solving builds intelligence. <i><b className="purple">I build both.</b></i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ayush59699"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayush-singh-560a29284/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/Ayush_21f3001194/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />

                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

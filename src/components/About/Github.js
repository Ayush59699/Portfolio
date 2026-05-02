import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Competitive <strong className="purple">Programming</strong> Stats
        </h1>
        <Col md={6} style={{ paddingBottom: "20px", display: "flex", justifyContent: "center" }}>
          <img
            src="https://leetcard.jacoblin.cool/Ayush_21f3001194?theme=dark&font=Raleway&ext=activity"
            alt="LeetCode Stats"
            style={{ width: "100%", maxWidth: "450px" }}
          />
        </Col>
        <Col md={6} style={{ paddingBottom: "20px", display: "flex", justifyContent: "center" }}>
          <img
            src="https://codeforces-readme-stats.vercel.app/api/card?username=Ayush687141&theme=dark"
            alt="Codeforces Stats"
            style={{ width: "100%", maxWidth: "450px" }}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <GitHubCalendar
          username="Ayush59699"
          blockSize={15}
          blockMargin={5}
          color="#00ff41"
          fontSize={16}
        />
      </Row>
    </>
  );
} 

export default Github;

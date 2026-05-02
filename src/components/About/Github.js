import React from "react";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Codeforces</strong> Stats
      </h1>
      <img
        src="https://codeforces-readme-stats.vercel.app/api/card?username=Ayush687141&theme=dark"
        alt="Codeforces Stats"
        style={{ width: "100%", maxWidth: "500px", display: "block", margin: "0 auto" }}
      />
    </Row>
  );
} 

export default Github;

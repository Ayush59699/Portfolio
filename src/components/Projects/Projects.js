import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import leaf from "../../Assets/Projects/leaf.png";
//import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
//import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Music_App"
              description="Personal Music streaming platform to listen high quality music, create playlists, mark favourites, rate,etc. Build with Python, Flask, Sqlite3 and Bootstrap. Have features which allows User/Admins for dashboard controls and analytics on songs as well."
              ghLink="https://github.com/Ayush59699/Music_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="IESCP"
              description="A platform for Influencers and Sponsors to interact with each other and work together on projects, campaigns. Creating relationsips, building trust, helping deliver products and services. Influencer Engagement And Sponsorship Coordination Platform."
              ghLink="https://github.com/Ayush59699/Influencer-Engagement-and-Sponsorship-Coordination-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Flappy Bird"
              description="Flappy Bird is a simple, fun, and addictive game where the player controls a bird, attempting to fly between columns of green pipes without hitting them. This version of Flappy Bird is built using JavaScript, CSS, and HTML.Simple and intuitive controls, Game over screen, responsive design."
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

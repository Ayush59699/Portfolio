import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
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
              title="AI-Powered Duplicate File Detection System"
              description="Built a multi-modal deduplication engine for images, documents, audio, and video using CLIP embeddings, SBERT semantic search, and Chromaprint fingerprinting. Designed a layered pipeline reducing neural inference calls by ~70% via fast pre-filtering. Integrated FAISS ANN search enabling real-time similarity queries across 100k+ files in sub-linear time."
              ghLink="https://github.com/Ayush59699"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Payment Processing Microservice"
              description="Built an Idempotency Engine using Redis ensuring every payment request is processed exactly once; implemented Saga Pattern across Order, Payment, and Inventory services. Integrated Circuit Breaker for gateway downtime handling and Webhook Handler with retry logic. Maintained immutable Audit Logs per transaction state change."
              ghLink="https://github.com/Ayush59699/Distributed_Payment_Microservice"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="EV Demand Forecasting"
              description="Engineered a time-series data pipeline with data preprocessing and feature engineering on macroeconomic and EV pricing datasets; designed a hybrid CNN-LSTM-Attention model. Validated robustness via 10-fold cross-validation and hyperparameter optimization, improving prediction accuracy over baseline LSTM."
              ghLink="https://github.com/Ayush59699"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Local RAG QA System"
              description="Built an offline RAG pipeline using ChromaDB for low-latency semantic retrieval of domain documents. Implemented LangChain Multi-Query Retriever to improve context recall over standard similarity search."
              ghLink="https://github.com/Ayush59699"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

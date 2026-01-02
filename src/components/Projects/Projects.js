import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoushou from "../../Assets/Projects/shoushou.png";


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
              imgPath={shoushou}
              isBlog={false}
              title="Community Landing Page"
              description="A vibrant community landing page celebrating J‑Pop and Anikura culture — a space to connect, share, and enjoy music together.
"
              ghLink="https://github.com/akaharashin/shounenshoujo_new"
              demoLink="https://shounenshoujo.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

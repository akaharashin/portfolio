import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import shoushou from "../../Assets/Projects/shoushou.png";
import shoushou from "../../Assets/Projects/hrms.png";

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
              description="A vibrant community landing page celebrating J‑Pop and Anikura culture — a space to connect, share, and enjoy music together."
              ghLink="https://github.com/akaharashin/shounenshoujo_new"
              demoLink="https://shounenshoujo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrms}
              isBlog={false}
              title="HRMS - Human Resource Management System"
              description="A full-stack HR management system built with Laravel. Features include employee management, attendance tracking, leave requests with approval flow, payroll management with printable pay slips, and role-based access control for Admin, HR, and Employee roles."
              ghLink="https://github.com/akaharashin/HRMS"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
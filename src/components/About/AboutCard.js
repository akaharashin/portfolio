import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Muhamad Akbar</span>{" "}
            from <span className="purple">West Java, Indonesia</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Freelance Software Developer</span>
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Dancing 💃
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            - “Create with purpose, impact with passion!”
            {" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

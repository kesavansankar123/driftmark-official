import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "../components/Solutions.css";
import { useNavigate } from "react-router-dom";
import Enterpriseimg2 from "../assets/Enterpriseimg.jpg";
import Flutter from '../assets/Flutter.jpg';
import TechnologyFingertip from '../assets/TechnologyFingertip.jpg'
import Fullstack from '../assets/ReactImg.jpg'

const Enterprise = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };

  const fadeIn = {
    animation: "fadeIn 1s ease-in",
  };

  const zoomIn = {
    animation: "zoomIn 1s ease-in",
  };

  return (
    <>
      <Container className="py-4 mt-2">
        <Row className="my-4">
          <Col>
            <h1 className="display-4 fw-bold animate-slide-up">Commercial Solutions</h1>

            <p>
              At Driftmark Technology, we understand the complexities of
              enterprise environments and the need for scalable, secure, and
              efficient solutions. Our team of experts works closely with
              enterprises to design, develop, and implement customized solutions
              that drive business growth, improve operational efficiency, and
              enhance customer experiences. We leverage cutting-edge
              technologies, including cloud computing, artificial intelligence,
              and the Internet of Things (IoT), to create innovative solutions
              that address specific business challenges. By partnering with us,
              enterprises can tap into our expertise and gain a competitive edge
              in their respective markets.
            </p>
          </Col>
          </Row>
          <Row>
          <Col className="animate-zoom-in">
            <div className="text-center">
              <Image
                src={Enterpriseimg2}
                fluid
                rounded
                // className="image-responsive"
                // className="shadow"

                // style={{ width: "500px", height: "300px" }}
                style={{
                  width: "100%",
                  // maxWidth: "500px",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  ...zoomIn,
                  transition: "transform 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.01)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-5 shadow bg-light py-4 px-2">
        <Row>
          <Col>
            <div className="text-center ">
              <h3 className="my-3"> Digital Transformation</h3>
              <p>
                We help enterprises navigate the digital landscape by developing
                strategies, designing solutions, and implementing technologies
                that drive business innovation.
              </p>
            </div>
          </Col>
        </Row>
        <div
          className="text-center my-4 w-70 layout"
          style={{
            borderRadius: "10px",
            padding: "30px",
          }}
        >
          <h3 className="my-3">Aligning IT with Your Business Vision</h3>

          <p className="my-3">
            Let's collaborate to develop a strategic IT roadmap tailored to your
            organization's unique goals. Our technical experts will help you
            bridge the gap between IT and business objectives, ensuring your
            projects drive meaningful outcomes and propel your business forward.
          </p>
        </div>
      </Container>

      <Container className="py-4 my-4">
        <Row>
          <Col md={4}>
          <Image src={Flutter} fluid rounded className="my-3"
          style={{
            width: "100%",
            // maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            ...zoomIn,
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.01)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
            <h3 className="my-3">Flutter MobileApp Development</h3>
            <p>
              Flutter is an open-source mobile app development framework created
              by Google. It allows developers to build natively compiled
              applications for mobile, web, and desktop from a single codebase.
            </p>
          </Col>
          <Col md={4}>
          <Image src={Fullstack} fluid rounded className="my-3"
          style={{
            width: "100%",
            // maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(25, 22, 22, 0.33)",
            ...zoomIn,
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.01)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
            <h3 className="my-3">Technologies In Fingertip</h3>
            <p>
              {" "}
              Frontend frameworks like React, Angular, and Vue.js enable
              developers to build complex and scalable applications.
              Additionally, considerations such as responsive web design,
              accessibility, and performance optimization are essential to
              ensure a seamless user experience across various devices and
              browsers.{" "}
            </p>
          </Col>

          <Col nd={4}>
          <Image src={TechnologyFingertip} fluid rounded className="my-3"
          style={{
            width: "100%",
            // maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            ...zoomIn,
            transition: "transform 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.01)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
            <h3 className="my-3">Experts In FullStack Development</h3>
            <p>
              Designing and developing the user interface and user experience
              (UI/UX) using frontend technologies like HTML, CSS, and
              JavaScript, as well as building the server-side logic, database
              integration, and API connectivity using backend technologies like
              Node.js, Ruby on Rails, and Python.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Enterprise;

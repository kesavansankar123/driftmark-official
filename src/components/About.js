import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../components/Solutions.css";
// import Aboutimg from "../assets/Aboutimg.jpg";
import AboutSecond from '../assets/AboutSecond.jpg';
import "../components/Solutionspage.css";
// import SolutionsPage from "./SolutionsPage";
import Consulting from '../assets/Consulting.jpg'
import CustionSolution from '../assets/CustomSolution.jpg'
import Cyber from '../assets/Cyber.jpg'

const About = () => {
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
            <div>
              {/* <span style={{color:'skyblue'}}>OUR ADVANTAGE</span> */}
              <h1 className="animate-slide-up display-4 fw-bold">
                For Ambitious Business
              </h1>
              {/* Scalable Solutions  */}
              {/* <h3 className=""></h3> */}

              {/* <h3 className=" animate-slide-up" ></h3> */}
              <p>
                At Driftmark Technology, we understand that innovative
                businesses like yours can't afford to be held back by IT
                obstacles. That's why we're dedicated to providing top-notch
                software development services that drive growth and success. Our
                solutions provide data-driven insights to inform strategic
                business decisions, and lay the foundation for a future-proof
                technology infrastructure that drives sustained growth and
                success.
              </p>
            </div>
            </Col>
            </Row>
          <Row>
          <Col  className="animate-zoom-in">
            <div className="text-center">
              <Image
                src={AboutSecond}
                fluid
                rounded
                // className="image-responsive"
                // style={{width:'400px',height:'250px'}}
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
                className="shadow"
                // style={{ width: "500px", height: "300px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      {/* <SolutionsPage /> */}
      <Container className="my-4 py-4">
        <div
          className="text-center py-4 px-2 shadow"
          style={{
            backgroundColor: " rgb(246, 212, 140)",
            borderRadius: "10px",
          }}
        >
          <h3 className="my-3">About Our Expert Team</h3>
          <p>
            Whether you're looking to enhance your online presence, streamline
            operations, or develop a custom mobile app, we've got you covered.
            Our mission is to keep your business moving forward, no matter what
            IT challenges come your way. Partner with us to unlock scalable
            solutions that propel your business forward.
          </p>
        </div>
      </Container>
      <Container className="my-4 py-4">
        <Row >
          <Col md={4}>
          <Image src={Cyber} fluid rounded
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
            <h3 className="my-3">Cybersecurity</h3>
            <p>
              Our cybersecurity experts help enterprises protect their sensitive
              data, prevent cyber threats, and ensure compliance with regulatory
              requirements.
            </p>
          </Col>
          <Col md={4}>
          <Image src={Consulting} fluid rounded
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
            <h3 className="my-3">IT Consulting</h3>
            <p>
              We provide expert guidance and support to help enterprises make
              informed technology decisions, optimize their IT infrastructure,
              and ensure seamless integration with existing systems.
            </p>
          </Col>
          <Col md={4}>
          <Image src={CustionSolution} fluid rounded
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
            <h3 className="my-3">Custom Solutions</h3>
            <p>
              Our team develops tailored software solutions that meet the unique
              needs of enterprises, improving operational efficiency, reducing
              costs, and enhancing customer experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

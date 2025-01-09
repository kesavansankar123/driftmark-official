import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import "../components/Solutionspage.css";
import Carousel from "react-bootstrap/Carousel";
import courosalboy from "../assets/courosalboy.jpg";
import courosalsecurity from "../assets/courosalsecurity.jpg";
// import courosal from '../assets/courosal.jpg';
import coursalNew from "../assets/courosalNew.jpg";

const SolutionsPage = () => {
  return (
    <>
      <Container className="my-4 py-4 shadow bg-light">
        <div className="text-center my-3">
        <h3 className="fw-bold mt-3">
          Tailored Solutions to Meet Your
        </h3>
        <h3 className="fw-bold mb-3"> Unique Requirements</h3>
        </div>
        
        <p className="text-center my-4">
        Website design is the art and science of creating visually appealing, user-friendly, and functional websites. It involves balancing aesthetics with usability to ensure an optimal user experience. Key elements include layout, color schemes, typography, and responsive design to cater to various devices. Effective website design prioritizes intuitive navigation and accessibility, making it easy for users to find information or perform actions. Ultimately, a well-designed website not only attracts visitors but also keeps them engaged and builds trust.
        </p>

        <Row className="justify-content-center align-items-center my-4">
          <Col lg={10} className="my-4">
            <Carousel>
              <Carousel.Item>
                <Image
                  src={courosalboy}
                  fluid
                  style={{ filter: "brightness(50%)", objectFit: "cover" }}
                />
                <Carousel.Caption>
                  <h3 style={{ color: "white" }}>
                    Transform Your Online Presence
                     {/* with Custom Web Development
                    Solutions */}
                  </h3>
                  <p style={{ color: "white" }}>
                  Creating beautiful, intuitive, and responsive interfaces                                   </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                 <Image
                  src={coursalNew} 
                  fluid
                  style={{ filter: "brightness(50%)", objectFit: "cover" }}
                /> 
                <Carousel.Caption>
                   <h3 style={{ color: "white" }}>
                  Designs that captivate, experiences that engage.               </h3>
                  <p style={{ color: "white" }}>
                    Crafting websites that leave lasting impressions."                 </p>
                 </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item> 
                <Image
                  src={courosalsecurity}
                  fluid
                  style={{ filter: "brightness(50%)", objectFit: "cover" }}
                /> 
                <Carousel.Caption>
                 <h3 style={{ color: "white" }}>
                  24/7  Network Defense 
                  </h3>
                  <p style={{ color: "white" }}>
                   {/* Designed to safeguard your network from threats. */}
                     Our team of New England-based experts is always on standby,
                    just a phone call away, to provide prompt support and ensure
                    your business stays secure.
                  </p> 
                 </Carousel.Caption> 
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SolutionsPage;

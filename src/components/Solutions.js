import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import "../components/Solutions.css";
import SolutionsPage from "./SolutionsPage";
import { useNavigate } from "react-router-dom";
import Frontpage2 from "../assets/Frontpage2.jpg";
import HomeSecond from '../assets/HomeSecond.jpg'

const Solutions = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const zoomIn = {
    animation: "zoomIn 1s ease-in",
  };

  return (
    <>
      <Container className="text-center py-4 mt-4">
        {/* <h2 className="fw-bold display-4 my-2 animate-fade-in text-md-start" >
          Let Us Bring Your Product to Life
        </h2> */}
        <h1 className="fw-bold display-4  animate-fade-in text-md-start">
          Expert Software Development & Consulting Services
        </h1>

        <Row className="my-4 justify-content-center">
          <Col md={6} className="text-md-start text-center">
            {/* <h1 className=" animate-slide-up fw-bold d-none d-md-block">
              Expert Software Development & Consulting Services
            </h1> */}

            <h3 className="animate-slide-up d-none d-md-block">
              Let Us Bring Your Product to Life
            </h3>
            <p className="text-muted">
              To carry on the business of dealing and maintenance of computer
              hardware, computer systems and assemble data processors, program
              designs, and to buy, sell, or otherwise deal in such hardware and
              software packages. In today's digital landscape, accessibility is
              no longer an afterthought, but a crucial aspect of web
              development. We specialize in delivering solutions tailored to
              your needs. As developers, we must prioritize inclusive design
              principles to ensure our websites and applications are usable by
              everyone, regardless of abilities or disabilities. By embracing
              accessibility, we not only expand our audience reach but also
              contribute to a more equitable and user-friendly web ecosystem.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image
              src={Frontpage2} 
              // rounded
              // fluid
              className="shadow image-responsive"
              alt="Expert Services"
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                borderRadius: "10px",
                // boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                ...zoomIn,
                transition: "transform 0.2s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.02)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </Col>
        </Row>
      </Container>

      <SolutionsPage />

      <Container className="text-center my-4 py-4">
        <div className="animate-slide-up">
          <h3 className="fw-bold mt-3">We're Dedicated to Your</h3>
          <h3 className="fw-bold mb-3">Business Success</h3>
          <Button
            className="my-1 btn-lg custom-button"
            onClick={() => handleLinkClick("/contact")}
          >
            Contact Us Today
          </Button>
        </div>
      </Container>

      <Container className="my-4">
        <Row>
          <Col md={6} className=" animate-fade-in">
            <h3 className="fw-bold my-3">Transparent Fees for Total Clarity</h3>
            <p className="text-muted">
              When unexpected IT issues arise, the last thing you need is a
              surprise bill. That's why we offer a simple, all-inclusive monthly
              rate that covers all your IT needs. With our predictable pricing,
              you can budget with confidence and focus on what matters most.
            </p>
          </Col>
          <Col md={6} className=" animate-fade-in">
            <h3 className="fw-bold my-3">The Driftmark Difference</h3>
            <p className="text-muted">
              At Driftmark, expertise and experience come together to deliver
              unparalleled IT solutions. Our tailored services are backed by a
              team of dedicated experts who are always available to provide
              guidance and support.
            </p>
          </Col>
        </Row>
      </Container>
      <Container >
        <Row>
          <Col>
          <Image src={HomeSecond} rounded fluid className="bg-light shadow my-3" 
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
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="my-4  py-4  animate-slide-up">
          <Col md={6}>
            <h3 className="fw-bold my-3">Building Dynamic Web Applications</h3>
            <p className="text-muted">
              Create fast, scalable, and maintainable web applications with our
              expert web development solutions. Our team leverages the latest
              technologies to design and develop complex user interfaces,
              breaking them down into smaller, manageable components.
            </p>
            <Button
              className="my-2 btn-lg custom-button"
              onClick={() => handleLinkClick("/innovation")}
            >
              How It Works
            </Button>
          </Col>
          <Col md={6}>
            <h3 className="fw-bold my-3">Expert Support for Organizations</h3>
            <p className="text-muted">
              We amplify the capabilities of in-house IT teams at larger
              enterprises. Whether you need specialized expertise, additional
              resources, or strategic guidance, we're here to help you achieve
              your goals.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Solutions;

// import React from "react";
// import { Col, Container, Row, Image, Button } from "react-bootstrap";
// import "../components/Solutions.css";
// import SolutionsPage from "./SolutionsPage";
// import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";
// import Frontpage2 from "../assets/Frontpage2.jpg";

// const Solutions = () => {
//   const navigate = useNavigate();

//   const handleLinkClick = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
//   };
//   return (
//     <>
//       <Container>
//         <h1 className="fw-bold display-5 mt-3">
//           Let Us Bring Your Product to Life
//         </h1>
//         <Row className="my-4 ">
//           <Col md={6}>
//             <h2 className="mt-3">
//               Expert Software Development & Consulting Services
//             </h2>

//             <p className="mt-3">
//               To carry on the business of dealing and maintenance of computer
//               hardware, computer systems and assemble data processors, program
//               designs and to buy, sell or otherwise deal in such hardware and
//               software packages and all types of tabulating machine, accounting
//               machines, computerized telecommunication systems and network,
//               their components, spare parts, equipments and devices.
//             </p>
//           </Col>
//           <Col md={6}>
//             <Image
//               src={Frontpage2}
//               rounded
//               fluid
//               className="shadow"
//               style={{ width: "500px", height: "300px" }}
//             />
//           </Col>
//         </Row>
//       </Container>

//       {/* ///////////////////// */}
//       <SolutionsPage />
//       <Container className="text-center py-5">
//         <div>
//           <h1>We're Dedicated to Your</h1>
//           <h1>Business Success</h1>
//           <Button
//             className="mt-3 text-orange border-orange"
//             variant="outline"
//             onClick={() => handleLinkClick("/contact")}
//           >
//             Contact Us Today
//           </Button>
//         </div>
//       </Container>

//       <Container className="mt-3">
//         <Row>
//           <Col md={6}>
//             <h3 className="mb-3">Transparent Fees for Total Clarity</h3>
//             <p>
//               When unexpected IT issues arise, the last thing you need is a
//               surprise bill. That's why we offer a simple, all-inclusive monthly
//               rate that covers all your IT needs, regardless of the unexpected
//               twists and turns. With our predictable pricing, you can budget
//               with confidence and focus on what matters most - running your
//               business.
//             </p>
//           </Col>
//           <Col md={6}>
//             <h3 className="mb-3 ">The Driftmark Difference</h3>
//             <p>
//               At Driftmark, expertise and experience come together to deliver
//               unparalleled IT solutions. Our tailored services are backed by a
//               team of dedicated experts who are always available to provide
//               guidance and support. With Driftmark, you can trust that you're in
//               good hands.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//       <Container>
//         <Row className="layout my-4 py-3">
//           <Col md={6}>
//             <h3 className="my-2">
//               {" "}
//               Building Dynamic Web Applications with ReactJS
//             </h3>
//             <p>
//               ReactJS is a popular JavaScript library used for building reusable
//               UI components. It allows developers to create fast, scalable, and
//               maintainable web applications. With ReactJS, you can build complex
//               user interfaces by breaking them down into smaller, manageable
//               components.
//             </p>
//             <Button
//               className="mt-3 text-orange border-orange"
//               variant="outline"
//               onClick={() => handleLinkClick("/innovation")}
//               style={{ textDecoration: "none", color: "orange" }}
//             >
//               How It Works
//             </Button>
//           </Col>
//           <Col md={6}>
//             {/* className="layout p-4 m-3" */}
//             <h3 className="my-2 ">
//               Expert Support for Ambitious Organizations
//             </h3>
//             <p>
//               We amplify the capabilities of in-house IT teams at larger
//               enterprises. Whether you need specialized expertise, additional
//               resources, or strategic guidance, we're here to help you
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Solutions;

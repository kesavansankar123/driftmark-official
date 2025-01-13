// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import "../components/Footer.css";
// // import Logo from "../assets/Driftmarklogo.jpg";
// import { Image } from "react-bootstrap";
// import Footerlogo from "../assets/OfficialLogo2.jpeg";

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleLinkClick = (path) => {
//     navigate(path);
//     window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
//   };

//   return (
//     <>
//       <Container
//         fluid
//         className="shadow mt-2"
//         style={{
//           backgroundColor: "white",
//           background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 30%,rgb(198, 231, 239) 100%)'
//         }}
//       >
//         <Row style={{ backgroundColor: "skyblue" }}>
//           <Col>
//             <div className="text-center my-3 d-flex align-items-center justify-content-center">
//               <h1 style={{color:'white'}}>Let Us Bring Your Product to life!</h1>
//             </div>
//           </Col>
//         </Row>
        
//         <Row className="my-4 mx-2 d-flex justify-content-between">
//           <Col md={4} className="my-2">
//             <div className="d-flex flex-column">
//               <div className="my-2">
//                 <Image
//                   src={Footerlogo}
//                   style={{
//                     width: "35px",
//                     height: "27px",
//                   }}
//                   // className="me-2"
//                   alt="Driftmark Logo"
//                 />
//               </div>

//               <span className="text-light my-2">
//                 <i className="i bi bi-telephone "></i> +91 6381475573
//               </span>
//               <span className="text-light my-2">
//                 <i className="bi bi-clock "></i> Monday - Saturday
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/enterprise")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none" }}
//               >
//                 <i className="bi bi-globe"></i> www.driftmarktech.com
//               </span>
//               {/* <span
//                 onClick={() => handleLinkClick("/enterprise")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none" }}
//               >
//                 <i className="bi bi-globe"></i> www.driftmarktech.com
//               </span> */}
//               <span className="text-light">
//                 Email-
//                 <Link
//                   to="mailto:driftmarktechnology@gmail.com"
//                   className="my-2 text-light"
//                 >
//                   driftmarktechnology@gmail.com
//                 </Link>
//               </span>
//             </div>
//           </Col>
//           <Col md={1} className="my-2">
//             <div className="d-flex flex-column ">
//               <h4 className="my-2" style={{fontWeight:'bold',  
//                  }}>Services</h4>
//               <span
//                 onClick={() => handleLinkClick("/")}
//                 className="my-2 text-light "
//                 style={{ cursor: "pointer", textDecoration: "none",  }}
//               >
//                 Home
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/innovation")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none", }}
//               >
//                 Innovation
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/enterprise")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none" }}
//               >
//                 Enterprise
//               </span>
//             </div>
//           </Col>

//           <Col md={2} className="my-2">
//             <div className="d-flex flex-column">
//               <h4 className="my-2" style={{fontWeight:'bold',  
//                  }}>Resources</h4>
//               <span
//                 onClick={() => handleLinkClick("/services/blog")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none" }}
//               >
//                 Blog
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/contact")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none" }}
//               >
//                 Contact Us
//               </span>
//               <span
//                 onClick={() => handleLinkClick("/services/downloads")}
//                 className="my-2 text-light"
//                 style={{ cursor: "pointer", textDecoration: "none" }}
//               >
//                 Downloads
//               </span>
//             </div>
//           </Col>
//           <Col md={2} className="my-2 ">
//             <div className="d-flex flex-column">
//               <h4 className="my-2" style={{fontWeight:'bold',  
//                  }}>Follow Us</h4>
//               <div
//                 className="d-flex justify-content-between my-2"
//                 style={{ width: "150px" }}
//               >
//                 <Link
//                   to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in"
//                   target="_blank"
//                 >
//                   <i
//                     className="bi bi-linkedin"
//                     style={{
//                       background:
//                         "linear-gradient(45deg, #0077b5, #005983, #003f5e)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       fontSize: "18px",
//                     }}
//                   ></i>
//                 </Link>

//                 <Link
//                   to="https://www.instagram.com/driftmarktechnology/"
//                   target="_blank"
//                   className=""
//                 >
//                   <i
//                     className="bi bi-instagram"
//                     style={{
//                       background:
//                         "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       fontSize: "18px",
//                     }}
//                   ></i>
//                 </Link>

//                 <Link
//                   to="https://www.facebook.com/share/1ETaAQHKDg/"
//                   target="_blank"
//                 >
//                   <i
//                     className="bi bi-facebook"
//                     style={{
//                       background:
//                         "linear-gradient(45deg, #1877F2, #145DBE, #103E8C)",
//                       WebkitBackgroundClip: "text",
//                       WebkitTextFillColor: "transparent",
//                       fontSize: "18px",
//                     }}
//                   ></i>
//                 </Link>
//                 <Link
//                   to="https://x.com/i/flow/login?redirect_after_login=%2FDriftmarkTech"
//                   target="_blank"
//                 >
//                   <i
//                     className="bi bi-twitter"
//                     style={{ color: "#1DA1F2", fontSize: "18px" }}
//                   ></i>
//                 </Link>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row className="p-5 small">
//           <Col className="text-center">
//             <div>
//               <div className="d-flex justify-content-center">
//                 <span
//                   onClick={() => handleLinkClick("termsandconditions")}
//                   className="my-2 px-1 border-end border-primary text-light"
//                   // style={{ cursor: "pointer", textDecoration: "none" }}
//                 >
//                   Terms & Conditions
//                 </span>

//                 <span
//                   onClick={() => handleLinkClick("privacypolicy")}
//                   className="my-2 px-1 text-light"
//                   // style={{ cursor: "pointer", textDecoration: "none" }}
//                 >
//                   Privacy Policy
//                 </span>
//               </div>
//               ©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved
//             </div>
//           </Col>
//         </Row>
        
//       </Container>
//     </>
//   );
// };

// export default Footer;







import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../components/Footer.css";
import { Image } from "react-bootstrap";
import Footerlogo from "../assets/OfficialLogo2.jpeg";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Container
        fluid
        className="shadow mt-2"
        style={{
          backgroundColor: "white",
          background: "linear-gradient(to bottom, #ffffff 0%, rgb(198, 231, 239) 100%)",
        }}
      >
        <Row style={{ backgroundColor: "skyblue" }}>
          <Col>
            <div className="text-center my-3 d-flex align-items-center justify-content-center">
              <h1 style={{ color: "white" }}>Let Us Bring Your Product to life!</h1>
            </div>
          </Col>
        </Row>

        {/* Vertical Layout */}
        <Row className="my-4 d-flex flex-column align-items-center">
          <Col className="mb-4 text-center">
            <Image
              src={Footerlogo}
              style={{ width: "50px", height: "40px" }}
              alt="Driftmark Logo"
            />
            <div className="mt-3 text-light">
              <p>
                <i className="bi bi-telephone"></i> +91 6381475573
              </p>
              <p>
                <i className="bi bi-clock"></i> Monday - Saturday
              </p>
              <p
                onClick={() => handleLinkClick("/enterprise")}
                style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
              >
                <i className="bi bi-globe"></i> www.driftmarktech.com
              </p>
              <p>
                Email:{" "}
                <Link to="mailto:driftmarktechnology@gmail.com" className="text-light">
                  driftmarktechnology@gmail.com
                </Link>
              </p>
            </div>
          </Col>

          {/* Horizontal Services and Resources */}
          <Col className="mb-4 text-center">
            <Row className="d-flex justify-content-center">
              <Col md={3}>
                <h4 className="mb-3" style={{ fontWeight: "bold" }}>Services</h4>
                <p
                  onClick={() => handleLinkClick("/")}
                  style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                >
                  Home
                </p>
                <p
                  onClick={() => handleLinkClick("/innovation")}
                  style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                >
                  Innovation
                </p>
                <p
                  onClick={() => handleLinkClick("/enterprise")}
                  style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                >
                  Enterprise
                </p>
              </Col>

              <Col md={3}>
                <h4 className="mb-3" style={{ fontWeight: "bold" }}>Resources</h4>
                <p
                  onClick={() => handleLinkClick("/services/blog")}
                  style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                >
                  Blog
                </p>
                <p
                  onClick={() => handleLinkClick("/contact")}
                  style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                >
                  Contact Us
                </p>
                <p
                  onClick={() => handleLinkClick("/services/downloads")}
                  style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
                >
                  Downloads
                </p>
              </Col>
            </Row>
          </Col>

          <Col className="mb-4 text-center">
            <h4 className="mb-3" style={{ fontWeight: "bold" }}>Follow Us</h4>
            <div className="d-flex justify-content-center">
              <Link
                to="https://www.linkedin.com/company/driftmark-technology/?originalSubdomain=in"
                target="_blank"
              >
                <i className="bi bi-linkedin mx-2" style={{ fontSize: "20px", color: "#0077b5" }}></i>
              </Link>
              <Link
                to="https://www.instagram.com/driftmarktechnology/"
                target="_blank"
              >
                <i className="bi bi-instagram mx-2" style={{ fontSize: "20px", color: "#bc1888" }}></i>
              </Link>
              <Link
                to="https://www.facebook.com/share/1ETaAQHKDg/"
                target="_blank"
              >
                <i className="bi bi-facebook mx-2" style={{ fontSize: "20px", color: "#1877F2" }}></i>
              </Link>
              <Link
                to="https://x.com/i/flow/login?redirect_after_login=%2FDriftmarkTech"
                target="_blank"
              >
                <i className="bi bi-twitter mx-2" style={{ fontSize: "20px", color: "#1DA1F2" }}></i>
              </Link>
            </div>
          </Col>
        </Row>

        <Row className="p-5 small text-center">
          <Col>
            <p
              onClick={() => handleLinkClick("termsandconditions")}
              className="my-2 px-1"
              style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
            >
              Terms & Conditions
            </p>
            <p
              onClick={() => handleLinkClick("privacypolicy")}
              className="my-2 px-1"
              style={{ cursor: "pointer", textDecoration: "none", color: "black" }}
            > 
              Privacy Policy
            </p>
            <p>©2023 - 2024 Driftmark Technology Pvt. Ltd. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;

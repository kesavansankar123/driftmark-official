// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./RootRout/RootLayout";
import Solutions from "./components/Solutions";
import Innovation from "./components/Innovation";
import Enterprise from "./components/Enterprise";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import Blog from './components/Blog';
import Downloads from './components/Downloads';




const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Solutions />} />
        <Route path="innovation" element={<Innovation />} />
        <Route path="enterprise" element={<Enterprise />} />
        <Route path="About" element={<About />} />
        {/* <Route path="Services" element={<Services />} /> allready hide */}
        <Route path="/services" element={<Services />}>
          <Route path="blog" element={<Blog />} />
          <Route path="downloads" element={<Downloads />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="termsandconditions" element={<TermsAndConditions />}/>
        <Route path="privacypolicy" element={<PrivacyPolicy />}/>
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

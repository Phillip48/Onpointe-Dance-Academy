import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Needed for react router
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

// Importing components and pages needed in this file
import Nav from '../src/components/nav/index.js';
import Home from '../src/pages/HomePage';
import Contact from '../src/pages/ContactMe';
import RegisterPage from '../src/pages/Register';
import NewsletterPage from '../src/pages/NewsletterPage';
import NewsletterSuccess from "../src/pages/NewsletterSuccessPage";
import NewsletterFail from "../src/pages/NewsletterFailPage";
import Footer from '../src/components/footer/index';
import AboutUs from '../src/components/aboutUs/index';
import Classes from '../src/components/differentClasses/index';
import CompPerTeam from '../src/pages/CompPerformanceTeam';

function App() {
  return (
    <HashRouter>
      {/* The Navbar is added here to be added to every page that renders */}
      <Nav />

      <main>
        {/* Routing to render different pages when needed */}
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        <Routes>
          <Route
            path="/ContactMe"
            element={<Contact />}
          />
          <Route
            path="/AboutUs"
            element={<AboutUs />}
          />
          <Route
            path="/Classes"
            element={<Classes />}
          />
          <Route
            path="/Register"
            element={<RegisterPage />}
          />
          <Route
            path="/Competition&PerforamceTeam"
            element={<CompPerTeam />}
          />
          <Route
            path="/Newsletter"
            element={<NewsletterPage />}
          />
          <Route
            path="/Newslettersignupsuccess"
            element={<NewsletterSuccess />}
          />
          <Route
            path="/Newslettersignupfailed"
            element={<NewsletterFail />}
          />
        </Routes>
        {/* Renders the footer to the bottom of each page */}
        <Footer />
      </main>

    </HashRouter>
  );
}

export default App;


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
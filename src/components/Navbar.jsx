// import "./Navbar.css";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <Link to="/" className="nav-logo">
//             <i className="fa-solid fa-code" />
//             &nbsp;Web Developer
//           </Link>

//           <ul className="nav-menu">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/projects">
//                 Projects
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/services">
//                 Services
//               </Link>
//             </li>
//           </ul>
//           <Link className="nav-link-contact" to="/contact">
//             <button className="contact-btn">Contact Us</button>
//           </Link>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Logo */}

      {/* <div className="logo">My Logo</div> */}

      <Link to="/" className="logo">
        <i className="fa-solid fa-code" />
        &nbsp;Web Developer
      </Link>

      {/* Hamburger Menu */}
      <div className="hamburger-menu">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/* Navigation Items */}
      <div className={`nav-links ${isOpen ? "show" : "hide"}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/projects" onClick={() => setOpen(false)}>
          Projects
        </Link>
        <Link to="/services" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link  to="/contact" onClick={() => setOpen(false)}>
        <button className="contact-btn">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

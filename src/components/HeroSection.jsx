import { Link } from "react-router-dom";
import "./HeroSection.css";

function HeroSection() {
  return (
      <div className="hero-container">
        <span>
          <h1>Probini Designs </h1>
          <p>
            Welcome to Probini Designs, where creativity meets functionality.
            This portfolio showcases inovative and visually appealing web
            designs tailored to meet diverse needs. Explore my projects and see
            how I bring ideas to life with precision, creativity, and a
            user-first approach.
          </p>
          <div className="btns">
            <button className="projects-btn">Projects</button>
            <button className="services-btn">Services</button>
          </div>
        <div className="info-links">
          <div className="info-links-items">
            <h2> About Us</h2>
            <Link to="/">
              Careers <i className="fa-solid fa-arrow-up-right-from-square" />
            </Link>
            <Link to="/">
              Testimonials{" "}
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </Link>
            <Link to="/">
              Terms of Service{" "}
              <i className="fa-solid fa-arrow-up-right-from-square" />
            </Link>
          </div>
          <div className="info-links-text">
            <h2>Contact Us</h2>
            No. 1, ABC Avenue, Abuja. <br />
            web.developer@example.com. <br />
            +234 012 3456 789
          </div>
          <div className="info-links-items">
            <h2>Social Media</h2>
            <Link to="/">
              <i className="fa-brands fa-instagram" /> Instagram
            </Link>
            <Link to="/">
              <i className="fa-brands fa-facebook" /> Facebook
            </Link>
            <Link to="/">
              <i className="fa-brands fa-youtube" /> Youtube
            </Link>
            <Link to="/">
              <i className="fa-brands fa-twitter" /> Twitter
            </Link>
          </div>
        </div>
        </span>
      </div>
  );
}

export default HeroSection;

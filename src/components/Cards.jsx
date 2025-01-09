import "./Cards.css";
function Cards() {
  return (
    <div>
      {/* SKILLS SECTION */}
      <div className="skills-container">
        <div className="cards-icon-text">
          <i className="fa-solid fa-mobile-screen" />
          <h2>RESPONSIVE PROTOTYPE</h2>
        </div>
        <div className="cards-icon-text">
          <i className="fa-solid fa-globe" />
          <h2>HTML</h2>
        </div>
        <div className="cards-icon-text">
          <i className="fa-brands fa-css3" />
          <h2>CSS</h2>
        </div>
        <div className="cards-icon-text">
          <i className="fa-brands fa-js" />
          <h2>JAVASCRIPT</h2>
        </div>
        <div className="cards-icon-text">
          <i className="fa-brands fa-react" />
          <h2>SKILLS</h2>
        </div>
      </div>
      {/* SKILLS CARD SECTION */}
      <div className="cards-container">
        <div className="skill-card">
          <div className="card-image">
            <img src="/card-img-1.jpg" alt="HTML" />
          </div>
          <div className="card-content">
            <h3>HTML</h3>
            <p>
              Learn the basics of HTML to create the structure of web pages.
            </p>
            <div className="card-icons">
              <i className="fa-solid fa-code"></i>
              <i className="fa-solid fa-globe"></i>
              <i className="fa-solid fa-lightbulb"></i>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className="card-image">
            <img src="/card-img-2.jpeg" alt="CSS" />
          </div>
          <div className="card-content">
            <h3>CSS</h3>
            <p>Style your web pages beautifully with CSS techniques.</p>
            <div className="card-icons">
              <i className="fa-solid fa-palette"></i>
              <i className="fa-solid fa-brush"></i>
              <i className="fa-solid fa-ruler"></i>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className="card-image">
            <img src="/card-img-1.jpg" alt="HTML" />
          </div>
          <div className="card-content">
            <h3>JAVASCRIPT</h3>
            <p>
              Learn the basics of JAVASCRIPT to create the structure of web pages.
            </p>
            <div className="card-icons">
              <i className="fa-solid fa-code"></i>
              <i className="fa-solid fa-globe"></i>
              <i className="fa-solid fa-lightbulb"></i>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <div className="card-image">
            <img src="/card-img-2.jpeg" alt="CSS" />
          </div>
          <div className="card-content">
            <h3>REACT</h3>
            <p>Learn the basics of REACT to create the structure of web pages.</p>
            <div className="card-icons">
              <i className="fa-solid fa-palette"></i>
              <i className="fa-solid fa-brush"></i>
              <i className="fa-solid fa-ruler"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

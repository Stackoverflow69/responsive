"use client"
import React, { useState, useEffect } from "react";
import Navbar from "./Navabr/page";
import "./css/stylesheet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGooglePlusG } from '@fortawesome/free-solid-svg-icons';



function App() {

  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const [isDesignerVisible, setIsDesignerVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsDesignerVisible(prev => !prev);
    }, 2500); // Toggle every 2.5 seconds; adjust as needed

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="image-container">
          <div className="text-overlay">
            <h1>FICTION DEVELOPERS</h1>
            <div className="heading-container">
              <h2 className={isDesignerVisible ? 'visible' : ''}>DESIGNER</h2>
              <h3 className={!isDesignerVisible ? 'visible' : ''}>DEVELOPER</h3>
            </div>
            <p>Step into the world of Fiction Developers, where creativity meets technology in crafting <br />
              bespoke narratives, characters, and worlds. Here, we specialize in creating websites,<br />
              mobile apps, and software services that bring stories to life.</p>
            <button className="Button1">
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </div>

      <div className="Aboutus">
        <div className="subaboutus">
          <h4>ABOUT US</h4>
          <p2>
            At Fiction Developer, we're dedicated to crafting innovative digital <br />
            solutions that drive success. With expertise in mobile app <br />
            development, web design, and web 3.0 technologies, we create  <br />
            tailored solutions for each client. Our team of skilled professionals <br />
            collaborates closely to ensure we exceed expectations. We're <br />
            committed to excellence, integrity, and client satisfaction in every <br /> project we undertake.
          </p2>

          <p3>Whether you're a startup or an established enterprise, we're here <br />
            to help you thrive in the digital world. Let's work together to turn <br />
            your vision into reality. Elevate your digital presence with Fiction<br /> Developer."
          </p3></div>
        <div>
          <img className="imagebox2" src="/image6.png"></img>
        </div>
      </div>
      <div className="Latestwork">
        <div className="Headings">
          <h5>LATEST WORK</h5>
          <p4>
            Discover a collection of my latest projects showcasing innovative solutions and creative endeavors.
          </p4>
          <p4> From web applications to mobile apps, each project reflects meticulous attention to detail and a passion for excellence. </p4>
          <p4>Explore the intersection of technology and creativity, and witness the impact of my work firsthand.</p4>
        </div>
        <div className="container2">
          <div className="Row1">
            <div className="box2">
              <img src="/project1.png" alt="This is Hibeds photo"></img>
              <div className="content2">
                <h6>
                  HIBEDS
                </h6>
                <p6>
                  Redefining Global Stays
                </p6>
              </div>

            </div>

            <div className="box2">
              <img src="/project2.png" alt="This is Hibeds photo"></img>
              <div className="content2">
                <h6>
                  HSM
                </h6>
                <p6>
                  Houseton Street Monsters

                </p6>
              </div>

            </div>

            <div className="box2">
              <img src="/project3.png" alt="This is Hibeds photo"></img>
              <div className="content2">
                <h6>
                  SOUQPACK
                </h6>
                <p6>
                  Houseton Street Monsters

                </p6>
              </div>

            </div>
          </div>
          <div className="Row2">


            <div className="box2">
              <img src="/project4.png" alt="This is Hibeds photo"></img>
              <div className="content2">
                <h6>
                  HANDYHANDS
                </h6>
                <p6>
                  Service Provider App

                </p6>
              </div>

            </div>
            <div className="box2">
              <img src="/project5.png" alt="This is Hibeds photo"></img>
              <div className="content2">
                <h6>
                  UGEO
                </h6>
                <p6>
                  Discover Local Events

                </p6>
              </div>

            </div>
            <div className="box2">
              <img src="/project6.png" alt="This is Hibeds photo"></img>
              <div className="content2">
                <h6>
                  DOORFOOD
                </h6>
                <p6>
                  Food To Remove Your Appetite
                </p6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-features">
        <h10>Main Features
        </h10>
        <p9>
          Explore the core functionalities that set us apart, empowering<br />
          you to achieve more with simplicity and efficiency
        </p9>
        <div className="row3">
          <div className="parentdiv">
            <div className="image-div">
              <img className="imagecraft" src="crafted.png" alt="Icon 1"></img>
            </div>
            <div className="headings2">
              <h9>Crafted for Startups</h9>
              <p8>We provide uniquely tailored solutions that cater specifically to the needs of startups, ensuring rapid development and scalable  results.</p8>
            </div>
          </div>
          <div className="parentdiv">
            <div className="image-div">
              <img className="imagecraft" src="high quality.png" alt="Icon 2"></img>
            </div>
            <div className="headings2">
              <h8>High-quality Design</h8>
              <p8>Experience design at its best with our commitment to high-quality standards that meet your exact needs.</p8>
            </div>
          </div>
          <div className="parentdiv">
            <div className="image-div">
              <img className="imagecraft" src="high quality.png" alt="Icon 3"></img>
            </div>
            <div className="headings2">
              <h8>Next.js 14 (Latest)</h8>
              <p8>Leverage the latest advancements in Next.js 14 for cutting-edge applications that are both fast and reliable.</p8>
            </div>
          </div>
        </div>

        <div className="row4">
          <div className="parentdiv">
            <div className="image-div">
              <img className="imagecraft" src="nodejs.png" alt="Icon 4"></img>
            </div>
            <div className="headings2">
              <h8>Node.js</h8>
              <p8>We use Node.js to build scalable and efficient server-side applications that are both fast and reliable.</p8>
            </div>
          </div>
          <div className="parentdiv">
            <div className="image-div">
              <img className="imagecraft" src="custmizeable.png" alt="Icon 5"></img>
            </div>
            <div className="headings2">
              <h8>Fully Customizable</h8>
              <p8>Our solutions are fully customizable, allowing you to tailor them to your specific needs and requirements.</p8>
            </div>
          </div>
          <div className="parentdiv">
            <div className="image-div">
              <img className="imagecraft" src="opensource.png" alt="Icon 6"></img>
            </div>
            <div className="headings2">
              <h8>Free and Open-Source</h8>
              <p8>Our solutions are free and open-source, allowing you to use them without any restrictions or limitations.</p8>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <h11>
          SO WHAT DO YOU THINK?
        </h11>
        <p10>
          Get ready to be inspired, challenged, and amazed as we push the boundaries of what's possible.


        </p10>
        <button className="foterbutton">CONTACT WITH US </button>
      </div>
      <div className="icons">
  <FontAwesomeIcon icon="fa-brands fa-instagram" />
  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
  <FontAwesomeIcon icon="fa-brands fa-google-plus-g" />
</div>

    </div>
  );
}

export default App;

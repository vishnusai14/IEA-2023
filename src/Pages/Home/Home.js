import React from "react";
import About from "../../Components/About/About";
import Header from "../../Components/Header/Header";
import Labs from "../../Components/Labs/Lab";
import Intectho from "./asset/INTECHO__5_-removebg-preview.png";
import Event from "../../Components/Event/Event";
import Workshop from "../../Components/Workshop/Workshop";
import Teams from "../../Components/Teams/Teams";
import Kishore from "./asset/Kishore.jpg";
import Sanjay from "./asset/sanjay.jpg";
import Aarthi from "./asset/aarthi.jpeg";
import Arun from "./asset/arun.jpeg";
import Footer from "../../Components/Footer/Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid p-0 pb-5 mb-5">
          <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ minHeight: "300px" }}
              >
                <img
                  alt="BG-IMG"
                  className="position-relative w-100"
                  src="img/carousel-1.jpg"
                  style={{ minHeight: "300px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-flex align-items-center justify-content-center">
                  <div
                    className="p-5"
                    style={{ width: "100%", maxWidth: "900px" }}
                  >
                    {/* Insert Intecho Logo */}
                    <img className="intecho" src={Intectho} alt="Intecho" />
                    {/* <h5 className="text-white text-uppercase mb-md-3"> 
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white mb-md-4">
                      Best Education From Your Home
                    </h1>
                    <a
                      href="/"
                      className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                    >
                      Learn More */}
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        {/* Render this conditionaaly */}
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Department
              </h5>
              <h1>Explore Our Labs</h1>
            </div>
            <div className="row">
              <Labs />
              <Labs />
              <Labs />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <a
                href="/about"
                className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Our Events
              </h5>
              {/* Link To the Event Page  */}
              <p className="customP text-primary m-0">Know More</p>
            </div>
            <div className="row pb-3">
              <Event />
              <Event />
              <Event />
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5
                className="text-uppercase mb-3"
                style={{ letterSpacing: "5px", color: "#44425a !important" }}
              >
                Workshops
              </h5>
              <p className="customP text-primary m-0">Know More</p>
            </div>
            <div className="row">
              <Workshop />
              <Workshop />
              <Workshop />
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Teams
              </h5>
              <h1>Meet Our Teams</h1>
            </div>
            <div className="row">
              <Teams
                li="linkedin.com/in/kishore-kumar-997467218"
                img={Kishore}
                deg={"Chairman"}
                name="Kishore Kumar S"
              />
              <Teams
                li="linkedin.com/in/sanjay789"
                img={Sanjay}
                deg={"General Secretary"}
                name="Sanjay S"
              />
              <Teams
                li="linkedin.com/in/aarthi-meena-t-07215b204"
                img={Aarthi}
                deg={"Joint Treasurer"}
                name="Aarthi Meena T"
              />
              <Teams
                li="linkedin.com/in/arunagiri-theerthagiri-b45849218"
                img={Arun}
                deg={"Event Coordinator"}
                name="Arunagiri T"
              />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;

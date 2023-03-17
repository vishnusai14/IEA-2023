import React from "react";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Labs from "../../Components/Labs/Lab";
import Topbar from "../../Components/Topbar/Topbar";
class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Topbar page="About" />
        <About />
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Department Overview
              </h5>
              <p className="customP text-primary m-0">Our Labs</p>
            </div>
            <div className="row">
              <Labs />
              <Labs />
              <Labs />
            </div>
            <div className="row">
              <Labs />
              <Labs />
              <Labs />
            </div>
            <div className="row">
              <Labs />
              <Labs />
              <Labs />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutUs;

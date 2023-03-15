import React from "react";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Labs from "../../Components/Labs/Lab";
class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <div class="container-fluid py-5">
          <div class="container py-5">
            <div class="text-center mb-5">
              <h5
                class="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Department Overview
              </h5>
              <p class="customP text-primary m-0">Our Labs</p>
            </div>
            <div class="row">
              <Labs />
              <Labs />
              <Labs />
            </div>
            <div class="row">
              <Labs />
              <Labs />
              <Labs />
            </div>
            <div class="row">
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

import React from "react";
import Sponsor from "../../Components/Sponsor/Sponsor";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";
import Footer from "../../Components/Footer/Footer";

import Confetti from "react-confetti";
class Sponsors extends React.Component {
  render() {
    return (
      <>
        {/* <Confetti height={window.innerHeight} /> */}
        <Header />
        <Topbar page="Sponsors" />
        <div className="container-fluid py-5">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Sponsors
              </h5>
              <h1>Meet Our Sponsors</h1>
            </div>
            <div className="text-center mb-5">
              <h1>Title Sponsors</h1>
            </div>
            <div className="row just-center">
              <Sponsor />
              <Sponsor />
            </div>

            <div className="text-center mb-5">
              <h1>Associate Sponsors</h1>
            </div>
            <div className="row just-center">
              <Sponsor />
              <Sponsor />
            </div>

            <div className="text-center mb-5">
              <h1>Technical Sponsors</h1>
            </div>
            <div className="row just-center">
              <Sponsor />
              <Sponsor />
            </div>
          </div>
        </div>
        <Footer />s
      </>
    );
  }
}

export default Sponsors;

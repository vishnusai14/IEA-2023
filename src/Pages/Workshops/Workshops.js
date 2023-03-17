import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import WorkshopPage from "../../Components/WorkshopPage/WorkshopPage";
import Topbar from "../../Components/Topbar/Topbar";
class Workshops extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Topbar page="Workshops" />
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Workshops
              </h5>
              {/* <h1 style={{ color: "#ff6600" }}>Our Popular Workshops</h1> */}
            </div>
            <div className="row">
              <WorkshopPage />
              <WorkshopPage />
              <WorkshopPage />
              <WorkshopPage />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Workshops;

import React from "react";
import Event from "../../Components/Event/Event";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Topbar from "../../Components/Topbar/Topbar";
class Events extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Topbar page="Events" />
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                Events
              </h5>
              <h1>Our Popular Events</h1>
            </div>
            <div className="row">
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
              <Event eventPage={true} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Events;

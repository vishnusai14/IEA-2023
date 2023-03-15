import IntechoVideo from "./IntechoVideo.mp4";
const About = () => {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <video className="img-fluid rounded mb-4 mb-lg-0" controls>
              <source src={IntechoVideo} type="video/mp4" />
            </video>
            {/* <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="img/about.jpg"
              alt=""
            /> */}
          </div>
          <div className="col-lg-7">
            <div className="text-left mb-4">
              <h5
                className="text-primary text-uppercase mb-3"
                style={{ letterSpacing: "5px" }}
              >
                About Us
              </h5>
              <h1>Innovative Way To Learn</h1>
            </div>
            <p style={{ color: "white" }}>
              {/* Change This */}
              Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
              ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
              sadipscing et erat eirmod diam kasd labore clita est. Diam sanctus
              gubergren sit rebum clita amet, sea est sea vero sed et.
              Sadipscing labore tempor at sit dolor clita consetetur diam. Diam
              ut diam tempor no et, lorem dolore invidunt no nonumy stet ea
              labore, dolor justo et sit gubergren diam sed sed no ipsum. Sit
              tempor ut nonumy elitr dolores justo aliquyam ipsum stet
            </p>
            <a
              href="/about"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

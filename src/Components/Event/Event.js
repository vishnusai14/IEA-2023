const Event = (props) => {
  return props.eventPage ? (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="rounded overflow-hidden mb-2">
          <img className="img-fluid" src="img/course-1.jpg" alt="" />
          <div className="bg-secondary p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0">
                <i className="fa fa-dollar text-primary mr-2"></i>$99
              </small>
              <small style={{ cursor: "pointer" }} className="m-0">
                <i className="far fa-folder text-primary mr-2"></i>Details
              </small>
            </div>
            <a className="h5" href="">
              Event Name
            </a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0">
                  <i className="fa fa-phone text-primary mr-2"></i>Name{" "}
                  <small>(+91-9360118511)</small> <br />
                  <i className="fa fa-phone text-primary mr-2"></i>Name{" "}
                  <small>(+91-9360118511)</small> <br />
                  <i className="fa fa-phone text-primary mr-2"></i>Name{" "}
                  <small>(+91-9360118511)</small> <br />
                </h6>
                <h5
                  style={{
                    cursor: "pointer",
                  }}
                  className="m-auto"
                >
                  Apply Now
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="col-lg-4 mb-4">
        <div className="blog-item position-relative overflow-hidden rounded mb-2">
          {/* Change The Image */}
          <img className="img-fluid" src="img/blog-1.jpg" alt="" />
          {/* Change The Link */}
          <a className="blog-overlay text-decoration-none" href="/about">
            <h5 className="text-white mb-3">
              Lorem elitr magna stet eirmod labore amet labore clita at ut clita
            </h5>
            <p
              onClick={() => {
                window.location.pathname = "/about";
              }}
              className="text-primary m-0"
            >
              Know More
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Event;

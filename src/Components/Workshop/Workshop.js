const Workshop = () => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="rounded overflow-hidden mb-2">
        <img className="img-fluid" src="img/course-1.jpg" alt="" />
        <div className="bg-secondary p-4">
          <div className="d-flex justify-content-between mb-3">
            <small className="m-0">
              <i className="fa fa-users text-primary mr-2"></i>Vishnu Prasanna
            </small>
          </div>
          <a className="h5" href="">
            Web design & development courses for beginner
          </a>
          <div className="border-top mt-4 pt-4">
            <div className="d-flex justify-content-between">
              <h6
                onClick={() => {
                  window.location.pathname = "/workshops";
                }}
                className="cur-point m-0"
              >
                Know More
              </h6>
              <h5 className="m-0">$99</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;

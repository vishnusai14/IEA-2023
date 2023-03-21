const Labs = () => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="rounded overflow-hidden mb-2">
        <img className="img-fluid" src="img/course-1.jpg" alt="" />
        <div className="bg-secondary p-4">
          <div className="d-flex justify-content-between mb-3">
            <small className="m-0">
              <i className="fas fa-hubspot text-primary mr-2"></i>Lab Name
            </small>
            <small className="m-0">
              <i className="far fa-clock text-primary mr-2"></i>time of build
            </small>
          </div>
          <h5 className="h5">A small desciption about the lab</h5>
          <div className="border-top mt-4 pt-4">
            <div className="d-flex justify-content-between">
              <h6
                onClick={() => {
                  window.location.pathname = "/about";
                }}
                className="cur-point m-0"
              >
                Know More
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;

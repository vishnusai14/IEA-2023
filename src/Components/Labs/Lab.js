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
            <small class="m-0">
              <i class="far fa-clock text-primary mr-2"></i>time of build
            </small>
          </div>
          <a className="h5" href="">
            A small desciption about the lab
          </a>
          <div className="border-top mt-4 pt-4">
            <div className="d-flex justify-content-between">
              <h6 className="cur-point m-0">Know More</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;

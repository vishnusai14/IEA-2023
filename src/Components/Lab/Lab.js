const Lab = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="cat-item position-relative overflow-hidden rounded mb-2">
        {/* Change the img  */}
        <img className="img-fluid" src="img/cat-1.jpg" alt="" />
        {/* Change the Link  */}
        <a className="cat-overlay text-white text-decoration-none" href="/">
          <h4 className="text-white font-weight-medium">Web Design</h4>
          <span>100 Courses</span>
        </a>
      </div>
    </div>
  );
};

export default Lab;

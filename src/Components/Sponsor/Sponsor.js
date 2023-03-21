const Sponsor = () => {
  return (
    <div className="col-md-6 col-lg-3 text-center team mb-4">
      <div className="team-item rounded overflow-hidden mb-2">
        <div className="team-img position-relative">
          <img className="img-fluid" src="img/blog-1.jpg" alt="" />
          <div className="team-social">
            <a className="btn btn-outline-light btn-square mx-1" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-square mx-1" href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-square mx-1" href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="bg-secondary p-4">
          <h5>Sponsor Name</h5>
          <p className="m-0">Sponsor Details</p>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;

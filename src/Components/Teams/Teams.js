const Teams = (props) => {
  return (
    <div className="col-md-6 col-lg-3 text-center team mb-4">
      <div className="team-item rounded overflow-hidden mb-2">
        <div className="team-img position-relative">
          <img className="img-height-350 img-fluid" src={props.img} alt="" />
          <div className="team-social">
            <a className="btn btn-outline-light btn-square mx-1" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-square mx-1"
              href={props.li}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="bg-secondary p-4">
          <h5>{props.name}</h5>
          <p className="m-0">{props.deg}</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;

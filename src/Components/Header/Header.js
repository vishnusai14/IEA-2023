import logo from "./asset/logo.jpeg";
const Header = () => {
  return (
    <div style={{ backgroundColor: "#004d5b" }} className="container-fluid">
      <div className="row border-top px-xl-5">
        {/* Insert IEA Logo */}
        <div className="cus-nav">
          <div>
            <img className="logo" src={logo} alt="Logo" />
          </div>
          <nav className="navbar  navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            {/* Inser IEA Logo */}
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav py-0">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <a href="course.html" className="nav-item nav-link">
                  Events
                </a>
                <a href="teacher.html" className="nav-item nav-link">
                  Workshops
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

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
                <a
                  href="/"
                  className={
                    window.location.pathname === "/"
                      ? "select nav-item nav-link"
                      : "nav-item nav-link"
                  }
                >
                  Home
                </a>
                <a
                  href="/about"
                  className={
                    window.location.pathname === "/about"
                      ? "select nav-item nav-link"
                      : "nav-item nav-link"
                  }
                >
                  About
                </a>
                <a
                  href="/events"
                  className={
                    window.location.pathname === "/events"
                      ? "select nav-item nav-link"
                      : "nav-item nav-link"
                  }
                >
                  Events
                </a>
                <a
                  href="/workshops"
                  className={
                    window.location.pathname === "/workshops"
                      ? "select nav-item nav-link"
                      : "nav-item nav-link"
                  }
                >
                  Workshops
                </a>
                <a
                  href="/sponsors"
                  className={
                    window.location.pathname === "/sponsors"
                      ? "select nav-item nav-link"
                      : "nav-item nav-link"
                  }
                >
                  Sponsors
                </a>
                <a
                  href="/contact"
                  className={
                    window.location.pathname === "/contact"
                      ? "select nav-item nav-link"
                      : "nav-item nav-link"
                  }
                >
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

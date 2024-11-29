import { Link } from "react-router-dom";
import img from "../../constants/imagens";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/appointments">
          <img className="navbar-logo" src={img.logoWhite} alt="Logo da plataforma Agendei" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/appointments"}>Agendamentos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to={"/doctors"}>Médicos</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item me-auto">
              <div className="btn-group">
                <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Heber Stein Mazutti
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="#">Meu Perfil</Link></li>
                  <li><hr className="dropdown-dividor" /></li>
                  <li><Link className="dropdown-item" to="/">Desconectar</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
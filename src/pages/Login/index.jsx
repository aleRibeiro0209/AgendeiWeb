import "./login.css";
import img from "../../constants/imagens";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/appointments")
  }

  return (
    <div className="row">
      <div className="col-md-5 d-flex justify-content-center align-items-center text-center p-5 p-lg-0">
        <form className="form-signin">
          <img src={img.logoBlue} alt="Logo da plataforma Agendei" className="logo" />
          <h5 className="my-5">Gerencie seus agendamentos de forma descomplicada</h5>
          <h5 className="mb-4 text-secondary">Acesse sua conta</h5>

          <div className="mb-2">
            <input type="email" name="" id="" placeholder="E-mail" className="form-control"/>
          </div>
          <div className="mb-3">
            <input type="password" name="" id="" placeholder="Senha" className="form-control" />
          </div>
          <div className="mb-5">
            <button onClick={handleLogin} type="button" className="btn btn-primary w-100">Login</button>
          </div>

          <div>
            <span className="me-1">Não tenho um conta.</span>
            <Link to="/register">Criar agora!</Link>
          </div>
        </form>
      </div>
      <div className="col-md-7">
          <img src={img.fundo} alt="Imagem de um médico segurando um celular" className="background-login" />
      </div>
    </div>
  );
}

export default Login;
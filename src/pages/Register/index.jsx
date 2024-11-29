import "./register.css";
import img from "../../constants/imagens";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="row">
      <div className="col-md-5 d-flex justify-content-center align-items-center text-center p-5 p-lg-0">
        <form className="form-signin">
          <img src={img.logoBlue} alt="Logo da plataforma Agendei" className="logo" />
          <h5 className="my-5">Crie sua conta agora mesmo.</h5>
          <h5 className="mb-4 text-secondary">Preencha os campos abaixo</h5>

          <div className="mb-2">
            <input type="text" name="" id="" placeholder="Nome" className="form-control"/>
          </div>
          <div className="mb-2">
            <input type="email" name="" id="" placeholder="E-mail" className="form-control"/>
          </div>
          <div className="mb-2">
            <input type="password" name="" id="" placeholder="Senha" className="form-control" />
          </div>
          <div className="mb-3">
            <input type="password" name="" id="" placeholder="Confirme a Senha" className="form-control" />
          </div>
          <div className="mb-5">
            <button type="submit" className="btn btn-primary w-100">Criar minha conta</button>
          </div>

          <div>
            <span className="me-1">Já tenho um conta.</span>
            <Link to="/">Acessar agora!</Link>
          </div>
        </form>
      </div>
      <div className="col-md-7">
          <img src={img.fundo} alt="Imagem de um médico segurando um celular" className="background-login" />
      </div>
    </div>
  );
}

export default Register;
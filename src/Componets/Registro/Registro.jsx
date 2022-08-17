import React , { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";
import s from './Registro.module.css';
import logoLogin from '../../Img/logo-login.png';

function Registro() {

  const { signup } = useContext(Context);

  const [user, setUser] = useState({
    email: "",
    password: "",
  }); 

  const [error, setError] = useState("");
   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
        if(error.code === "auth/internal-error"){
            setError("Correo es invalido")
        }
        if(error.code === "auth/invalid-email"){
            setError("Correo es invalido")
        }
        if(error.code === "auth/missing-email"){
            setError("Datos faltantes")
        }
        if(error.code === "auth/weak-password"){
            setError("La contraseña debe tener al menos 6 caracteres")
        }
        if(error.code === "auth/email-already-in-use"){
            setError("El usuario ya es existente")
        }
        console.log(error.code)
        
    }
  };

  return (

    <div className={s.registro} >
      <div className={s.imgLogoLogin}>
          <img src={logoLogin} alt="logo"  />
        </div>
      <form onSubmit={handleSubmit}>
        <div className={s.email}>
          <label>Email</label>
          <input
            type="email"
            placeholder="email@hotmail.com"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>

        <div className={s.password}>
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="******"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <button className={s.btnRegistro}>Registrarse</button>
      </form>
      {error && <p>{error}</p>}
      <p className={s.login} >
        ¿Ya tienes una cuenta?
        <Link to="/Login">Login</Link>
      </p>
    </div>
  )
}

export default Registro
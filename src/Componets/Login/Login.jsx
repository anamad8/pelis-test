import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

function Login() {

    const { login } = useContext(Context);

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
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
        if(error.code === "auth/internal-error"){
            setError("Correo es invalido")
        }
        if(error.code === "auth/user-not-found"){
            setError("Este correo no esta rgistrado")
        }
        if(error.code === "auth/wrong-password"){
            setError("La contraseña es incorrecta")
        }
        console.log(error.code)
        // auth/internal-error auth/internal-error
    }
  };


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="email@hotmail.com"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
            </div>
        
            <div >
            <label>Contraseña</label>
            <input
                type="password"
                placeholder="******"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            </div>

            {error && <p>{error}</p>}

            <button>Login</button>
        </form>
        <p>
        ¿No tienes cuenta?
        <Link to="/Registro">Registrarse</Link>
      </p>
    </div>
  )
}

export default Login;
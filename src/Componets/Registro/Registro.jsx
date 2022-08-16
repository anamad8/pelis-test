import React , { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/Context";

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

    <div >
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

        <button>Registraese</button>
      </form>
      {error && <p>{error}</p>}
      <p>
        ¿Ya tienes una cuenta?
        <Link to="/Login">Login</Link>
      </p>
    </div>
  )
}

export default Registro
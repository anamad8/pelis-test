import React, {useContext}  from 'react';
import s from './Navbar.module.css';
import { Link } from "react-router-dom";
import imgLogo from '../../Img/Logo.png';
import { Context } from "../../Context/Context";
import imgExit from "../../Img/iconsExit.png";


function Navbar() {

  const { logout } = useContext(Context);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
     
};

  const { user } = useContext(Context);

  const usuario = user.email[0]

  // console.log(usuario)

  return (
    <div className={s.navbar}>
      <div className={s.imgLogo}>
        <Link to="/">
          <img src={imgLogo } alt="" />
        </Link>
          
      </div>
      <div className={s.enlaces}>
        <Link to="/Disney">Disney</Link>
        <Link to="/Pixar">Pixar</Link>
        <Link to="/Marvel">Marvel</Link>
        <Link to="/StarWars">Star wars</Link>
        <Link to="/NationalGeographicn">National geographic</Link>
      </div>
      <div className={s.user}>
        <p>{usuario}</p>
      </div>
      <div className={s.imgExit}>
        <button onClick={handleLogout}>
          <img src={imgExit} alt="" />
        </button>
        
      </div>
      
      
    </div>
  )
}

export default Navbar

import React , { useState, useContext, useEffect } from 'react';
import { Context } from "../../Context/Context";
import ContenrCategory from '../ContentCategory/ContenrCategory';
import Navbar from '../Navbar/Navbar';
import s from './Home.module.css'
import disney from '../../Img/disney.png'
import pixer from '../../Img/pixer.png'
import marvel from '../../Img/marvel.png'
import star from '../../Img/stawr.png'
import national from '../../Img/national.png'
import { Link } from 'react-router-dom';


function Home() {

const { loading } = useContext(Context);

const [ category, setCategory ] = useState([])

const [ peliculas, setPeliculas ] = useState([])


// si tarda la pagina en cerrar seción muestre "Cargando..."
if(loading) return <h1>Cargando...</h1>


// console.log(category)

return (
    <div>
        <Navbar />
        <div className={s.blanco}></div>

          <div className={s.btnCategori}>
            <Link to="/Disney">
              <img src={disney} alt=""  />
            </Link>
            <Link to="/Pixar">
              <img src={pixer} alt=""  />
            </Link>
            <Link to="/Marvel">
              <img src={marvel} alt=""  />
            </Link>
            <Link to="/StarWars">
              <img src={star} alt=""  />
            </Link>
            <Link to="/NationalGeographicn">
              <img src={national} alt=""  />
            </Link>
        </div>
        
        <div className={s.frase}>
          <h1>Tus historias favoritas, todas en un mismo lugar.</h1>
        </div>
        

    </div>
  )
}

export default Home;
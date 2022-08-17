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

import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../../Firebase/Firebase';


function Home() {

const { loading } = useContext(Context);

const [ category, setCategory ] = useState([])

const [ peliculas, setPeliculas ] = useState([])


// si tarda la pagina en cerrar seción muestre "Cargando..."
if(loading) return <h1>Cargando...</h1>

// Filtro por Categoria de peliculas
async function filterMovies (categoria) {
    const q = query(collection(db, "peliculas"), where("Categoria", "==", categoria));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        setCategory(doc.data());
    });

    // const querySnapshot = await getDocs(collection(db, categoria));
    // querySnapshot.forEach((doc) => {
    // // doc.data() is never undefined for query doc snapshots
    // setCategory(doc.data());
    // });
}

console.log(category)

return (
    <div>
        <Navbar />
        <div className={s.blanco}></div>

        <div className={s.btnCategori}>
          <button onClick={() => {filterMovies("Disney")}} >
              <img src={disney} alt=""  />
          </button>
          <button onClick={() => {filterMovies("Pixar")}} >
            <img src={pixer} alt=""  />
          </button>
          <button onClick={() => {filterMovies("Marvel")}} >
          <img src={marvel} alt=""  />
          </button>
          <button onClick={() => {filterMovies("Star wars")}} >
          <img src={star} alt=""  />
          </button>
          <button onClick={() => {filterMovies("National geographic")}} >
          <img src={national} alt=""  />
          </button>
        </div>
        
        <div className={s.frase}>
          <h1>Tus historias favoritas, todas en un mismo lugar.</h1>
        </div>
        

    </div>
  )
}

export default Home;
import React , { useState, useContext, useEffect } from 'react';
import { Context } from "../../Context/Context";
import ContenrCategory from '../ContentCategory/ContenrCategory';

import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../../Firebase/firebase';


function Home() {

const { logout, loading } = useContext(Context);

const [ category, setCategory ] = useState([])

const [ peliculas, setPeliculas ] = useState([])


// solicitar cerrer sesión
const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
     
  };

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
        <h1>Hola</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>

        <button onClick={() => {filterMovies("Marvel")}} >
            Marvel
        </button>
        <button onClick={() => {filterMovies("Disney")}} >
            Disney
        </button>

        { 
            category.length !== 0 ?  
                <>
                    <ContenrCategory
                        Nombre={category.Nombre}
                        
                    />
                </>
            :
            <p>Nada</p>
            // category.map(nombre=>{return <ContenrCategory nombre={nombre.nombre}/>})
          }
    </div>
  )
}

export default Home;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from './Card/Card';
import s from './Css/Marvel.module.css';
import marvel from '../../JSON/Marvel.json';

function Marvel() {
    
    console.log(marvel)

  return (
    <>
        <Navbar />
        
        <div className={s.alto}></div>

        <div className={s.card} >
            {
                marvel.map( info => {
                    return(
                        <Card 
                            url={info.url}
                            titulo={info.titulo}
                            año={info.año}
                            Director={info.Director}
                            Duracion={info.Duracion}
                            Reseña={info.Reseña}
                            video={info.video}
                        />
                    )
                })
            }
        </div>
       

        
    </>
  )
}

export default Marvel
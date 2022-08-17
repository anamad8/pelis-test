import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from './Card/Card';
import s from './Css/Marvel.module.css';
import National from '../../JSON/National.json';

function NationalGeographicn() {
  return (
    <div>
        <Navbar />
        <div className={s.alto}></div>

        <div className={s.card} >
            {
                National.map( info => {
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
      
    </div>
  )
}

export default NationalGeographicn;
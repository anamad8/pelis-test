import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from './Card/Card';
import s from './Css/Marvel.module.css';
import pixar from '../../JSON/Pixar.json';

function Pixar() {
  return (
    <div>
        <Navbar />
        <div className={s.alto}></div>

        <div className={s.card} >
            {
                pixar.map( info => {
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

export default Pixar
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Card from './Card/Card';
import s from './Css/Marvel.module.css';
import starWars from '../../JSON/StarWars.json';

function StarWars() {
  return (
    <div>
        <Navbar />
        <div className={s.alto}></div>

        <div className={s.card} >
            {
                starWars.map( info => {
                    return(
                        <Card 
                            url={info.url}
                            titulo={info.titulo}
                            año={info.año}
                            Director={info.Director}
                            Duracion={info.Duracion}
                            Reseña={info.Reseña}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default StarWars
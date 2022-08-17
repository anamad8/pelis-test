import React, { useState } from 'react';
import s  from '../Css/Card.module.css';
import Modal from '../Modal/Modal';

function Card({url,titulo,año,Director,Duracion,Reseña, video}) {

    const [estadoModal, setEstadoModal] = useState(false); 

    
    
    function detalle () {
        setEstadoModal(true);
    }
  return (
        <>
            <div className={s.card}>
                <button onClick={detalle}>
                    <img src={url} alt=""  />
                </button>
                
            </div>
            

            
            <Modal
                estadoModal={estadoModal}
                setEstadoModal={setEstadoModal}
                titulo={titulo}
                año={año}
                Director={Director}
                Duracion={Duracion}
                Reseña={Reseña}
                video={video}
                
            /> 
                 
            

        </>

    )
}

export default Card
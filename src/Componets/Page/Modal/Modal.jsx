import React from 'react';
import s from './Modal.module.css';
import { Link } from 'react-router-dom';

function Modal({ estadoModal, setEstadoModal,titulo,Director ,año,Duracion,Reseña }) {

  return (
    <>
      {estadoModal && (
        <div className={s.modal}>
          <div className={s.containerModal}>
            <button className={s.btnxmodal}
              onClick={() => {
                setEstadoModal(false);
              }}
            >
              X
            </button>
            <div className={s.titulo}>
                <h2>{titulo}</h2>
            </div>
            <div className={s.director}>
                <p><span>Director</span>:  {Director}</p>
            </div>
            <div className={s.año}>
                <p><span>Año</span>:  {año}</p>
            </div>
            <div className={s.duracion}>
                <p><span>Duracion</span>:  {Duracion}</p>
            </div>
            <div className={s.reseña}>
                <p className={s.reseñaP}>Reseña</p>
                <p>{Reseña}</p>
            </div>
            
            
            
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
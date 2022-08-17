import React from 'react'
import s from './VerVideo.module.css';


function VerVideo({ modal,video }) {

  return (
    <>
      {modal && (

        <a className={s.video} href={video}>{video}</a>

        )}
    </>
  )
}

export default VerVideo
import PropTypes from 'prop-types';

import React from "react"
import './Button.css'


// export const Button = () => ( 

//    <div className='btn'>

//       <button type='submit' className='acess'>
//          a &nbsp; Acessar
//       </button>&nbsp;&nbsp;

//       <span className='btn_'>
//          <button type='submit' className='change_password'>
//          b &nbsp; Alterar Senha
//       </button>&nbsp;&nbsp;
//       </span>
      
//       <button type='submit' className='remember_password'>
//          c &nbsp; Lembrar Senha
//       </button>
//    </div>
// )


export const Button = ({iconUrl, text}) => {

   return (
      <button className="btn">
         <img src={iconUrl} alt="text" /> <span>{text}</span>
      </button>
      
   )
}

Button.propTypes = {
   iconUrl: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired
}









import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header >
    <div >
                <nav >
                <Link to="/">Inicio  </Link>
                <Link to="/Fontes">  Fontes  </Link>
                <Link to="/propri"> Propriedades  </Link>    
                <Link to="/Back">   BackGround </Link>
                <Link to="/Anima">  animacao  </Link>    
                </nav>
    </div>

  </header>
  )
}

/* 
import React, { useState, useEffect } from 'react'
*/


export default Header

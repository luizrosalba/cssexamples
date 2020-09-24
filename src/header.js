import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Header = () => {
  return (
    <header >
                <div id="flex">
                <div><Link to="/">Inicio  </Link></div>
                <div><Link to="/Fontes">  Fontes  </Link> </div>
                <div><Link to="/propri"> Propriedades  </Link>    </div>
                <div><Link to="/Back">   BackGround </Link></div>
                <div><Link to="/Anima">  animacao  </Link>    </div>
                </div>
  </header>
  )
}

/* 
import React, { useState, useEffect } from 'react'
*/


export default Header

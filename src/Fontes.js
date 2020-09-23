import React from 'react';

import './App.css';
import './Fontes.css';

export default function Fontes() {
  const text = 'Tommy Vercetti \n Carl Johnson'
  return (
      
      <header className="fundo">
        
     
      <div>
          This is the <span>nicest</span> page I’ve made yet.
      </div>
      
      <p>{text}</p>
      
      <div>
      <p><em>-William  Shakespeare</em></p>
      </div>
      <div className="boldText">This is my web page.</div>

      <div id="myName"> Absolute Lengths</div>
      <div className="FonteSizecm">cm This is my web page.</div>
      <div className="FonteSizemm">mm This is my web page.</div>
      <div className="FonteSizein">in This is my web page.</div>
      <div className="FonteSizepx">px This is my web page.</div>
      <div className="FonteSizept">pt This is my web page.</div>
      <div className="FonteSizepc">pc This is my web page.</div>
      
      <div id="myName"> Relative Lengths</div>

      <div className="FonteSizeem">EM This is my web page.</div>
      <div className="FonteSizeex">Ex This is my web page.</div>
      <div className="FonteSizech">ch This is my web page.</div>
      <div className="FonteSizerem">rem This is my web page.</div>
      <div className="FonteSizevm">vw This is my web page.</div>
      <div className="FonteSizevh">vh This is my web page.</div>
      <div className="FonteSizevmin">vmin This is my web page.</div>
      <div className="FonteSizevmax">vmax This is my web page.</div>
      <div className="FonteSizepor">% This is my web page.</div>
      
      </header>
   
  );
}


/*

      
*/
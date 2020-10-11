import React from 'react';

import './App.css';
import './Anima.css';

export default function Anima() {
  
    return (
      
      <header className="fundo">
          

      <div className="animacao">align-content</div>

      <div className="animation-fill-mode">align-content</div>

      <h1>The @keyframes Rule</h1>

      <div className="aaa">conteudo</div>

      <p><strong>Note:</strong> The @keyframes rule is not supported in Internet Explorer 9 and earlier versions.</p>

            
      <h1>The transform Property</h1>

      <h2>transform: rotate(20deg):</h2>
      <div className="a">Hello World!</div>
      <br></br>

      <h2>transform: skewY(20deg):</h2>
      <div className="b">Hello World!</div>
      <br></br>

      <h2>transform: scaleY(1.5):</h2>
      <div className="c">Hello World!</div>

      <h1>The transform-origin Property</h1>

      <h1>The transform-style Property</h1>

<div id="div1v">
  <div id="div2v">HELLO
  <div id="div3v">YELLOW</div>
  </div>
</div>

<div id="div1a">
  <div id="div2a">HELLO</div>
</div>


<h1>The transition Property</h1>

<p>Hover over the div element below, to see the transition effect:</p>

<div className="avv" >dasdsa</div>

<p><b>Note:</b> This example does not work in Internet Explorer 9 and earlier versions.</p>

<h1>The unicode-bidi Property</h1>

<div>Some text. Default writing direction.</div>
<div className="e1x1">Some text. Right-to-left direction.</div>

<h1>The user-select Property</h1>

<div className="kkk">The text of this div element cannot be selected. If you double-click me, my text will not be highlighted.</div>

        
      </header>
   
  );
}


/*


/*
Play the animation two times:
animation-iteration-count: 2;

Specify a name for the @keyframes animation:
animation-name: mymove;

Pause an animation:
animation-play-state: paused;

Play an animation with the same speed from beginning to end:
animation-timing-function: linear;


backface-visibility
Hide and show the back face of two rotated <div> elements:
#div1 {
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

#div2 {
  -webkit-backface-visibility: visible; 
  backface-visibility: visible;
}



*/

 

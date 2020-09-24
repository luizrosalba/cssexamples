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
      
            
      <p className="a">This is a paragraph. The font size is set to 15 pixels, and the font family is Arial.</p>

      <p className="b">This is a paragraph. The font is set to italic and bold, with small-caps (all lowercase letters are converted to uppercase). The font size is set to 12 pixels, the line height is set to 30 pixels, and the font family is Georgia.</p>


      <h1>The @font-face Rule</h1>

      <div>With CSS, websites can finally use fonts other than the pre selected "web-safe" fonts.
      </div>

            
      <div className="ex1">This is some text 0123.</div>
      <div className="ex2">This is some text 0123.</div>
      <div className="ex3">This is some text 0123.</div>
      <div className="ex4">This is some text 0123.</div>

      <div className="ex5">By specifying the font-size-adjust property, the browser will adjust the font size to be the same regardless of the font family ("verdana" has the aspect value 0.58)</div>
      <div className="strech">he font-stretch property allows you to make text narrower (condensed) or wider (expanded).</div>
      

      <p className="normal">My name is Hege Refsnes.</p>
      <p className="small">My name is Hege Refsnes.</p>

      <p2 className="normal">My name is Hege Refsnes.</p2>
      <p2 className="small">My name is Hege Refsnes.</p2>
      <p2 className="allsmall">My name is Hege Refsnes.</p2>
      <p2 className="petite">My name is Hege Refsnes.</p2>
      <p2 className="allpetite">My name is Hege Refsnes.</p2>
      <p2 className="unicase">My name is Hege Refsnes.</p2>
      <p2 className="titling">My name is Hege Refsnes.</p2>

            
      <h1 style={{letterSpacing: "5px"}}>This is espacamento 5</h1>
      <h2 style={{letterSpacing: "2px"}}> This is espacamento2</h2>
      <h3 style={{letterSpacing: "1px"}}>This is espacamento 1</h3>
      


      <h1>The line-height Property</h1>

      <h2>line-height: normal (default):</h2>
      <div className="va">This is a paragraph with a standard line-height.<br></br>
      The standard line height in most browsers is about 110% to 120%.
      </div>

      <h2>line-height: 1.6 (recommended):</h2>
      <div className="vb">This is a paragraph with the recommended line-height.<br></br>
      The line height is here set to 1.6. This is a unitless value;<br></br>
      meaning that the line height will be relative to the font size.</div>

      <h2>line-height: 80%:</h2>
      <div className="vc">This is a paragraph with a smaller line-height.<br></br>
      The line height is here set to 80%.</div>

      <h2>line-height: 200%:</h2>
      <div className="vd">This is a paragraph with a bigger line-height.<br></br>
      The line height is here set to 200%.</div>

      
      <h1>The margin Property</h1>

      <p>A paragraph with no specified margins.</p>
      <p className="ex10">This paragraph has a margin of 35 
      pixels on all four sides.</p>
      <p>A paragraph with no specified margins.</p>


      <h1>The margin-top Property</h1>

      <p>A paragraph with no margins specified.</p>
      <p className="ex11">A paragraph with a 25 pixels top margin.</p>
      <p>A paragraph with no margins specified.</p>

      </header>
   
  );
}


/*
The font-kerning property controls the usage of the kerning information stored in a font.

Tip: Kerning defines how letters are spaced.

Note: For fonts that do not include kerning data, this property will have no visible effect.

mudando o marcador de lista 

<style>
list-style-position: inside;
list-style-image: url('sqpurple.gif');
list-style-position: outside;

ul.a {list-style-type: circle;}
ul.b {list-style-type: square;}
ol.c {list-style-type: upper-roman;}
ol.d {list-style-type: lower-alpha;}

ul  {
  list-style: square inside url("sqpurple.gif");
  
}
</style>
</head>
<body>

<h1>The list-style Property</h1>

<p>The list-style is a shorthand property for all the list properties.</p>

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Coca Cola</li>
</ul>




      
*/
import React from 'react';

import './Fontes.css';

export default function Fontes() {
  const text = 'Tommy Vercetti \n Carl Johnson'
  return (
      
      <header className="fundo">

      

      <details>
        <summary> Unidades </summary>
        
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
       
      </details>

        
      <details>
        <summary> Font Face </summary>
        
        <div>With CSS, websites can finally use fonts other than the pre selected "web-safe" fonts.
        </div>

              
        <div className="ex1">This is some text 0123.</div>
        <div className="ex2">This is some text 0123.</div>
        <div className="ex3">This is some text 0123.</div>
        <div className="ex4">This is some text 0123.</div>
        <div className="ex5">By specifying the font-size-adjust property, the browser will adjust the font size to be the same regardless of the font family ("verdana" has the aspect value 0.58)</div>
        <div className="strech">he font-stretch property allows you to make text narrower (condensed) or wider (expanded).</div>
        
      </details>

     

     
     
    
      
            
      <p className="a">This is a paragraph. The font size is set to 15 pixels, and the font family is Arial.</p>

      <p className="b">This is a paragraph. The font is set to italic and bold, with small-caps (all lowercase letters are converted to uppercase). The font size is set to 12 pixels, the line height is set to 30 pixels, and the font family is Georgia.</p>



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

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


      <h1>The text-align Property</h1>

      <div className="xxa">
      <h2>text-align: center:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
      </div>
      <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <div className="xxb">
      <h2>text-align: left:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
      </div>
      <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

      <div className="xxc">
      <h2>text-align: right:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
      </div>
      <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <div className="xxd">
      <h2>text-align: justify:</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
      </div>

      <div id="decoracao">This is heading 1</div>
      
      
      <h1>The text-indent Property</h1>

<h2>text-indent: 50px:</h2>
<div className="kka">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
</div>

<h2>text-indent: -2em:</h2>
<div className="kkb">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
</div>

<h2>text-indent: 30%:</h2>
<div className="kkc">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
</div>


<h1>The text-justify Property</h1>

<div id="allp"> In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</div>



<p><b>Tip:</b> Resize the browser window to see how the value "justify" works.</p>


<h1>The text-overflow Property</h1>

<p>The following two divs contains a text that will not fit in the box.</p>

<h2>text-overflow: clip (default):</h2>
<div className="ha">Hello world!</div>

<h2>text-overflow: ellipsis:</h2>
<div className="hb">Hello world!</div>

<h2>text-overflow: "----" (user defined string):</h2>
<div className="hc">Hello world!</div>

<p><strong>Note:</strong> The text-overflow: "<em>string</em>" only works in 
Firefox.</p>


<div id="sombra">The text-shadow Property</div>

<p><b>Note:</b> Internet Explorer 9 and earlier do not support the text-shadow property.</p>

<h1>The visibility Property</h1>

<h2 className="a">This heading is visible</h2>

<h2 className="b">This heading is hidden</h2>

<p>Notice that the hidden heading still takes up space on the page.</p>



<h1>Nao Funcionou The white-space Property</h1>

<h2>white-space: nowrap:</h2>
<p className="pppa">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
</p>

<h2>white-space: normal:</h2>
<p className="pppb">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
</p>

<h2>white-space: pre:</h2>
<p className="pppc">
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
This is some text. This is some text. This is some text.
</p>

<h1>The word-break Property</h1>

<h2>word-break: normal (default):</h2>
<p className="ttta">Thisissomeveryveryverylong word. Words will break according to usual rules.</p>

<h2>word-break: keep-all:</h2>
<p className="tttb">Thisissomeveryveryverylong word. This text will-break-at-hyphens.</p>

<h2>word-break: break-all:</h2>
<p className="tttc">Thisissomeveryveryverylong word. This text will break at any character.</p>




<h1>The word-spacing Property</h1>

<h2>word-spacing: normal:</h2>
<p className="oooa">This is some text. This is some text.</p>

<h2>word-spacing: 30px:</h2>
<p className="ooob">This is some text. This is some text.</p>

<h2>word-spacing: 1cm:</h2>
<p className="oooc">This is some text. This is some text.</p>


<h1>The writing-mode Property</h1>

<p className="test1">Some text with default writing-mode.</p>

<p>Some text with a span element with a <span className="test2">vertical-rl</span> writing-mode.</p>

<p className="test2">Some text with writing-mode: vertical-rl.</p>



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
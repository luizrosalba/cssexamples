import React from 'react';

import './App.css';
import './back.css';

export default function Back() {
  
    return (
      
      <header>
          <h1>The background-clip Property</h1>

          <p>The background-clip property defines how far the background should extend within an element.</p>

          <p>background-clip: border-box (this is default):</p>
          <div id="example1">
            <p>The background extends behind the border.</p>
          </div>

          <p>background-clip: padding-box:</p>
          <div id="example2">
            <p>The background extends to the inside edge of the border.</p>
          </div>

          <p>background-clip: content-box:</p>
          <div id="example3">
            <p>The background extends to the edge of the content box.</p>
          </div>



                  
        <h2>background-origin: padding-box (default):</h2>
        <div id="example1a">
          <h2>Hello World</h2>
          <p>The background image starts from the upper left corner of the padding edge.</p>
        </div>

        <h2>background-origin: border-box:</h2>
        <div id="example2a">
          <h2>Hello World</h2>
          <p>The background image starts from the upper left corner of the border.</p>
        </div>

        <h2>background-origin: content-box:</h2>
        <div id="example3a">
          <h2>Hello World</h2>
          <p>The background image starts from the upper left corner of the content.</p>
        </div>

        <h1>The @media Rule</h1>

<p>Resize the browser window. When the width of this 
  document is 600 pixels or less, the 
  background-color is "lightblue", otherwise 
  it is "yellow".</p>
       
  <h1>The min-height Property</h1>

<h2>min-height: none (default):</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit...</p>

<h2>min-height: 200px:</h2>
<p className="ex111">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit...</p>

<h1>The min-width Property</h1>

<h2>min-width: none (default):</h2>
<span>Lorem ipsum dolor sit amet...</span>

<h2>min-width: 500px:</h2>
<span className="ex1">Lorem ipsum dolor sit amet...</span>


<h2>The mix-blend-mode Property</h2>
<p>The mix-blend-mode property specifies how an element's content should blend with its background:</p>

<div className="container2">
  <img src={require('./Capturar.PNG')}  alt="Pineapple1" width="300" height="300" />
    
</div>


<h2>The object-fit Property</h2>

<h2>object-fit: cover:</h2>
<p>Cut off the sides of an image, preserving the aspect ratio, and also filling in the space:</p>
<img className="aaaaa" width="400" height="300" src={require('./Capturar.PNG') }  alt="Pineapple3"  />
  
<h2>Original image:</h2>
<img width="400" height="300" src={require('./Capturar.PNG') }  alt="Pineapple2"  />
 
<p>Note: The object-fit property is not supported in Internet Explorer/Edge 15 or earlier.</p>


<p><strong>Note:</strong> The mix-blend-mode property is not supported in Internet Explorer or Edge.</p>




<h2>The object-position Property</h2>


<p>Resize the image to fit its content box, and position the image 5px from the left and 10% from the top inside the content box:</p>

<img className="ba" width="400" height="300" src={require('./Capturar.PNG') }  alt="Pineapple3"  />
  
<h2>Original image:</h2>
<img width="400" height="300" src={require('./Capturar.PNG') }  alt="Pineapple2"  />
 
<p>Note: The object-position property is not supported in Internet Explorer/Edge 15 or earlier.</p>


<p><strong>Note:</strong> The mix-blend-mode property is not supported in Internet Explorer or Edge.</p>


<h1>The opacity Property</h1>

<p>The following div element's opacity is 0.5. Note that both the text and the background-color are affected by the opacity level:</p>

<div className="cc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit...</div>

<h1> Page break </h1>



     </header>
   
  );
}
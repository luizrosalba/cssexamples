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


     </header>
   
  );
}
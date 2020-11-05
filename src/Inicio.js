import React from 'react';
import './App.css';

export default function Inicio() {
 
  return (
    <header className="fundo">
      <span>
      Specificity Hierarchy
        Every selector has its place in the specificity hierarchy. There are four categories which define the specificity level of a selector:
        <br></br>
        Inline styles - An inline style is attached directly to the element to be styled. Example: 
        <br></br>
        IDs - An ID is a unique identifier for the page elements, such as #navbar.
        <br></br>
        Classes, attributes and pseudo-classes - This category includes .classes, [attributes] and pseudo-classes such as :hover, :focus etc.
        <br></br>
        Elements and pseudo-elements - This category includes element names and pseudo-elements, such as h1, div, :before and :after.
        <br></br>
        How to Calculate Specificity?
          Memorize how to calculate specificity!
          <br></br>
          Start at 0, add 1000 for style attribute, add 100 for each ID, add 10 for each attribute, class or pseudo-class, add 1 for each element name or pseudo-element.
          <br></br>
          Consider these three code fragments:
          <br></br>
          A: h1
          <br></br>
          B: #content h1
          <br></br>
          {/* C: <div id="content"><h1 style="color: #ffffff">Heading</h1></div> */}
          The specificity of A is 1 (one element)
          <br></br>
          The specificity of B is 101 (one ID reference and one element)
          <br></br>
          The specificity of C is 1000 (inline styling)
          <br></br>

          {/* Since 1 < 101 < 1000, the third rule (C) has a greater level of specificity, and therefore will be applied. */}
       </span>
      
   
    </header>
  );
}


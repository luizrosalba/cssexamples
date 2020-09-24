
import React from 'react';

import './App.css';
import './propri.css';

export default function propri() {
  
    return (
      
      <header className="fundo">
      
      <div id="myName">CSS Props </div>
      <div className="align-content">align-content</div>
      <div className="justify-content">justify-content</div>
      <div className="align-items">1 2 3 4      3    4 5</div>
      <div className="justify-content"> </div>
      
      <div id="main">
        <div >RED</div>
        <div >BLUE</div>  
        <div >Green div with more content.</div>
      </div>


          
    <div id="main2">
      <div>RED</div>
      <div  id="myBlueDiv">BLUE</div>  
      <div >Green div with more content2 .</div>
    </div>



      <>
      <h1>The display Property</h1>

      <h2>display: none:</h2>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <p class="ex1">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
      </div>

      <h2>display: inline:</h2>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <p class="ex2">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
      </div>

      <h2>display: block:</h2>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <p class="ex3">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
      </div>

      <h2>display: inline-block:</h2>
      <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. <p class="ex4">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
      </div>
      
      </>
    
            
        <p>No all property:</p>
        <div id="ex1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <p>all: inherit:</p>
        <div id="ex2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <p>all: initial:</p>
        <div id="ex3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <p>all: unset:</p>
        <div id="ex4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>

        <p><b>Note:</b> Internet Explorer and Edge do not support the all property.</p>

        <div id="redborder">A heading with a solid red border</div>

        <div id="bluebord">A heading with a solid blue border</div>

        <div id="dupla">A heading with a solid blue border</div>

        <div id="example1a">A heading with a solid red border</div>

        <div id="example2b">A heading with a solid blue border</div>
        <>
              <h2>border-spacing: 15px:</h2>
              <p>When using "border-collapse: separate", the border-spacing property can be used to set the space between the cells:</p>
              <table id="table1">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
                <tr>
                  <td>Peter</td>
                  <td>Griffin</td>
                </tr>
                <tr>
                  <td>Lois</td>
                  <td>Griffin</td>
                </tr>
              </table>

              <h2>border-spacing: 15px 50px:</h2>
              <p>Using two values (the first sets the horizontal spacing and the second sets the vertical spacing):</p>
              <table id="table2">
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                </tr>
                <tr>
                  <td>Peter</td>
                  <td>Griffin</td>
                </tr>
                <tr>
                  <td>Lois</td>
                  <td>Griffin</td>
                </tr>
              </table>
        </>

        
      <h1>The flex Property</h1>

      <div id="main">
        <div >RED</div>
        <div >BLUE</div>  
        <div >Green div with more content.</div>
      </div>
        
      <h1>The flex-basis Property</h1>

      <p>Set the initial length of the flex items to 50 pixels, 
        with an exception; set the initial length of the second
         flex item to 100 pixels:</p>
      <div id="main2">
        <div style={{backgroundColor:"coral"}}>50px</div>
        <div style={{backgroundColor:"lightblue"}}>100px</div>
        <div style={{backgroundColor:"khaki"}}>50px</div>
        <div style={{backgroundColor:"pink"}}>50px</div>
        <div style={{backgroundColor:"lightgrey"}}>50px</div>
      </div>


            
      <h1>The flex-direction Property</h1>

      <div id="main3">
         <div style={{backgroundColor:"coral"}}>A</div>
        <div style={{backgroundColor:"lightblue"}}>B</div>
        <div style={{backgroundColor:"khaki"}}>C</div>
        <div style={{backgroundColor:"pink"}}>D</div>
        <div style={{backgroundColor:"lightgrey"}}>E</div>
        <div style={{backgroundColor:"lightgreen"}}>F</div>

      </div>


      
      <h1>The flex-flow Property</h1>

      <div id="main4">
         <div style={{backgroundColor:"coral"}}>A</div>
        <div style={{backgroundColor:"lightblue"}}>B</div>
        <div style={{backgroundColor:"khaki"}}>C</div>
        <div style={{backgroundColor:"pink"}}>D</div>
        <div style={{backgroundColor:"lightgrey"}}>E</div>
        <div style={{backgroundColor:"lightgreen"}}>F</div>

      </div>

      <h1>The flex-grow Property</h1>
      <div id="main5">
         <div style={{backgroundColor:"coral"}}>A</div>
        <div style={{backgroundColor:"lightblue"}}>B</div>
        <div style={{backgroundColor:"khaki"}}>C</div>
        <div style={{backgroundColor:"pink"}}>D</div>
        <div style={{backgroundColor:"lightgrey"}}>E</div>
        <div style={{backgroundColor:"lightgreen"}}>F</div>

      </div>


      <h1>The flex-shrink Property</h1>
      The flex-shrink property specifies 
      how the item will shrink relative 
      to the rest of the flexible items 
      inside the same container.
      <div id="main6">
         <div style={{backgroundColor:"coral"}}>A</div>
        <div style={{backgroundColor:"lightblue"}}>B</div>
        <div style={{backgroundColor:"khaki"}}>C</div>
        <div style={{backgroundColor:"pink"}}>D</div>
        <div style={{backgroundColor:"lightgrey"}}>E</div>
        <div style={{backgroundColor:"lightgreen"}}>F</div>
      </div>

      <h1>The flex-wrap Property</h1>
      Make the flexible items wrap (ir para proxiam linha ) if necessary:
      <div id="main7">
         <div style={{backgroundColor:"coral"}}>A</div>
        <div style={{backgroundColor:"lightblue"}}>B</div>
        <div style={{backgroundColor:"khaki"}}>C</div>
        <div style={{backgroundColor:"pink"}}>D</div>
        <div style={{backgroundColor:"lightgrey"}}>E</div>
        <div style={{backgroundColor:"lightgreen"}}>F</div>
      </div>


          
    <p>In this example, the image will float to the right in the text, and the text in the paragraph will wrap around the image.</p>
    <div>
    {//</div><img src="pineapple.jpg" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
    }
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
    </div>

        
    <h1>The grid Property</h1>

    <p>The grid is a shorthand property for all grid container properties.</p>

    <p>This grid layout has three columns, and the first row is 150px high:</p>

    <div className="grid-container">
      <div className="item1">1</div>
      <div className="item2">2</div>
      <div className="item3">3</div>  
      <div className="item4">4</div>
      <div className="item5">5</div>
      <div className="item6">6</div>
    </div>
    
    
    <h1>The grid-area Property</h1>

    <p>You can use the <em>grid-area</em> property to specify where to place an item.</p>
    <p>The syntax is grid-row-start / grid-column-start / grid-row-end / grid-column-end.</p>
    <p>Item1 will start on row 2 and column 1, and span 2 rows and 3 columns:</p>

    <div className="grid-container2">
      <div className="item1k">1</div>
      <div className="item2">2</div>
      <div className="item3">3</div>  
      <div className="item4">4</div>
      <div className="item5">5</div>
      <div className="item6">6</div>
      <div className="item7">7</div>
    </div>

    
<h1>The grid-auto-columns Property</h1>
<p>Use the <em>grid-auto-columns</em> property to set a default size (width) for all columns.</p>
<p>Set the size to 50 pixels per column:</p>

  <div className="grid-container3">
  <div className="item1a">1</div>
  <div className="item2a">2</div>
  <div className="item3a">3</div>  
  <div className="item4a">4</div>
  <div className="item5a">5</div>
  <div className="item6a">6</div>
</div>

<p><strong>Note:</strong> The grid-template-columns property overrides this property.</p>




<h1>Nao deveria ficar assim ... The grid-auto-flow Property</h1>

<p>The <em>grid-auto-flow</em> property controls how auto-placed items are inserted in the grid.</p>
<p>This grid has three columns and two rows.</p>

<h2>grid-auto-flow: column</h2>
<p>Insert items column by column:</p>
<div className="grid-container" style={{gridAutoFlow:"column"}}>
  <div className="item1">1</div>
  <div className="item2">2</div>
  <div className="item3">3</div>
  <div className="item4">4</div>
</div>

<h2>grid-auto-flow: row</h2>
<p>Insert items row by row:</p>
<div class="grid-container" style={{gridAutoFlow:"row"}}>
  <div className="item1">1</div>
  <div className="item2">2</div>
  <div className="item3">3</div>
  <div className="item4">4</div>
</div>


<h1>The grid-auto-rows Property</h1>

<p>Use the <em>grid-auto-rows</em> property to set a default size (height) for all rows.</p>
<p>Set the size to 150 pixels per row:</p>

<div className="grid-containerc">
  <div className="item1c">1</div>
  <div className="item2c">2</div>
  <div className="item3c">3</div>  
  <div className="item4c">4</div>
  <div className="item5c">5</div>
  <div className="item6c">6</div>
</div>

<h1>The grid-column Property</h1>

<p>Use the <em>grid-column</em> property to specify on which column to place an item, and how many columns the item will span.</p>
<p>This property is a shorthand property for the grid-column-start and grid-column-end properties.</p>
<p>Item1 will start on column 1, and span 2 columns:</p>

<div class="grid-containere">
  <div class="item1f">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
</div>

    
<h1>The grid-column-end Property</h1>

<p>Use the <em>grid-column-end</em> property to specify on which column to stop displaying the item (or how many columns the item will span).</p>
<p>Item1 will span 3 columns:</p>

<div class="grid-containerg">
  <div class="item1a">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
</div>

<h1>The grid-gap Property</h1>

<p>Use the <em>grid-gap</em> property to specify the size of the gap between the rows, and between the columns.</p>
<p>This grid has a 50px gap between both the rows and the columns:</p>

<div class="grid-containerh">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>  
  <div class="item10">10</div>
  <div class="item11">11</div>
  <div class="item12">12</div>
</div>

<h1>The grid-row Property</h1>

<p>Use the <em>grid-row</em> property to specify on which row to place an item, and how many row the item will span.</p>
<p>This property is a shorthand property for the grid-row-start and grid-row-end properties.</p>
<p>Item1 will start on row 1, and span 2 rows:</p>

<div class="grid-containerr">
  <div class="item1r">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
</div>


<h1>The grid-row-start Property</h1>

<p>Use the <em>grid-row-start</em> property to specify on which row to start displaying the item.</p>
<p>Item1 will start on row 2:</p>

<div class="grid-containeratart">
  <div class="item1s">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
</div>


<h1>The grid-template Property</h1>

<p>The grid-template property can be used as a shorthand property for the <em>grid-template-rows</em> and the <em>grid-template-columns</em> properties.</p>
<p>This grid layout has three columns, and the first row is 150px high:</p>

<div class="grid-containerj">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
</div>


<h1>The grid-template-areas Property</h1>

<p>You can use the <em>grid-template-areas</em> property to set up a grid layout.</p>
<p>Item1, is called "myArea" and will take up the place of two columns (out of five):</p>

<div class="grid-containert">
  <div class="item1t">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
  <div class="item9">9</div>
</div>



<h1>The grid-template-columns Property</h1>

<p>Use the <em>grid-template-columns</em> property to define the number of columns in the grid layout.</p>
<p>This grid layout has four columns:</p>

<div class="grid-containerc">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>
</div>

<h1>The height Property</h1>

<h2>height: auto (default)</h2>
<div className="ca">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Etiam semper diam at erat 
pulvinar, at pulvinar felis blandit. Vestibulum volutpat 
tellus diam, consequat gravida libero rhoncus ut. Maecenas 
imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. 
Pellentesque interdum, nisl nec interdum maximus, augue diam 
porttitor lorem, et sollicitudin felis neque sit amet erat.</div>

<h2>height: 50px</h2>
<div className="cb">Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Etiam semper diam at erat 
pulvinar, at pulvinar felis blandit. Vestibulum volutpat 
tellus diam, consequat gravida libero rhoncus ut. Maecenas 
</div>


<h1>The hyphens Property</h1>

<h2>hyphens: none</h2>
<p>No hyphen; overflow if needed.</p>
<div className="da">A veryvery­very long word.</div>

<h2>hyphens: manual</h2>
<p>Hyphen only at &hyphen; or &shy; (if needed).</p>
<div className="db">A veryvery­very long word.</div>

<h2>hyphens: auto</h2>
<p>Hyphen where the algorithm is deciding (if needed).</p>
<div className="dc">A veryvery­very long word.</div>

<h1>The isolation Property</h1>

<div id="b" class="a">
  <div id="d">
  <div className="a c">div d: isolation: auto;</div>
  </div>
  <div id="e">
  <div className="a c">div e: isolation: isolate;</div>
  </div>
</div>




<h1>The justify-content Property</h1>

<p>The "justify-content: center;" aligns the flex items at the center of the container:</p>

<div id="mainaa">
  <div style={{backgroundColor:"coral"}}>1</div>
  <div style={{backgroundColor:"lightblue"}}>2</div>
  <div style={{backgroundColor:"pink"}}>3</div>
</div>

<p><b>Note:</b> Internet Explorer 10 and earlier versions do not support the justify-content property.</p>







<h1>The left Property</h1>

<div className="xa">This div element has position: relative;
  <div className="xb">This div element has position: absolute and left: auto.</div>
  <div className="xc">This div element has position: absolute and is placed 150 pixels to the right of the LEFT edge of the containing positioned element.</div>
</div>



<h1>The outline Property</h1>

<h2>A Heading with a 5 pixels green dotted outline</h2>

<div className="accc">A div element with a 2 pixels blue dashed outline. Also notice that the outline is outside of any border.</div>





<h1>The overflow Property</h1>

<p>The overflow property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.</p>

<h2>overflow: scroll:</h2>
<div class="exa1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

<h2>overflow: hidden:</h2>
<div class="exa2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

<h2>overflow: auto:</h2>
<div class="exa3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>

<h2>overflow: visible (default):</h2>
<div class="exa4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>





        </header>
          
          );
        }


/*

@import "navigation.css"; /* Using a string 

or

@import url("navigation.css"); /* Using a url 


Example
Change all images to black and white (100% gray):

img {
  filter: grayscale(100%);
}

border -left-right-color-image

#borderimg1 {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) round;
  border-image-slice: 10%;
}


h1 {
  border-bottom: 5px solid red;
}

h2 {
  border-bottom: 4px dotted blue;
}

div {
  border-bottom: double;
}
div {border-bottom-color: coral;}


      
*/




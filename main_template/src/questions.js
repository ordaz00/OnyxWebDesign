import * as React from 'react';
import SLideShow from './slideshow';


function Questions(props){
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
    return(
        <div id='questions'>
            <SLideShow 
              getWidth = {"500px"}
              getHeight = {"500px"}
              images = {colors}
              delay = {delay}
              updatePage = {props.updatePage}
            />
        </div>
    );
}

export default Questions;
import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import { useStyletron } from 'styletron-react';
import SlideShow from './slideshow';

function Home(props){

  function pageChange(){
    props.updatePage(2);
  }

  let [css] = useStyletron();
  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
  
  return(
    <div className='tabs' id='home'>
      <Card overrides={{Root:{style:{width:"500px", height: "500px", margin: "25px"}}}}>
        <StyledBody className={css({fontSize: "30px !important", marginTop: "100px"})}>
          Create Your Own 
        </StyledBody>
        <StyledBody className={css({fontSize: "30px !important", marginTop: "50px"})}>
          or 
        </StyledBody>
        <StyledBody className={css({fontSize: "30px !important", marginTop: "50px"})}>
          Choose From Our Templates
        </StyledBody>
        <StyledAction>
          <Button
            onClick={pageChange}
            kind={KIND.primary}
            size={SIZE.default}
            shape={SHAPE.default}
            overrides={{BaseButton:{style:{width: "100%"}}}}
            className={css({fontSize: "20px !important", marginTop: "50px"})}
          >
            Get Started
          </Button>
        </StyledAction>
      </Card>
      <SlideShow 
        getWidth = {"500px"}
        getHeight = {"500px"}
        images = {colors}
        delay = {delay}
        updatePage = {props.updatePage}
      />
    </div>
  );
}

export default Home;
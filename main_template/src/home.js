import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import { useStyletron } from 'styletron-react';

function Home(){
  let [css] = useStyletron();
    return(
        <div className='tabs' id='home'>
          <Card overrides={{Root:{style:{width:"475px", height: "475px", margin: "25px"}}}}>
            <StyledBody className={css({fontSize: "30px", marginTop: "100px"})}>
              Create Your Own 
            </StyledBody>
            <StyledBody className={css({fontSize: "30px", marginTop: "50px"})}>
              or 
            </StyledBody>
            <StyledBody className={css({fontSize: "30px", marginTop: "50px"})}>
              Choose From Our Templates
            </StyledBody>
            <StyledAction>
              <Button
                onClick={() => alert("click")}
                kind={KIND.primary}
                size={SIZE.default}
                shape={SHAPE.default}
                overrides={{BaseButton:{style:{width: "100%"}}}}
                className={css({fontSize: "20px", marginTop: "50px"})}
              >
                Get Started
              </Button>
            </StyledAction>
          </Card>
          <Card overrides={{Root:{style:{width:"475px", height: "475px", margin: "25px"}}}}>
            <StyledBody className={css({fontSize: "50px", marginTop: "100px"})}>
              Gallery of
            </StyledBody>
            <StyledBody className={css({fontSize: "50px", marginTop: "50px"})}>
              Templates
            </StyledBody>
            <StyledAction>
              <Button
                onClick={() => alert("click")}
                kind={KIND.primary}
                size={SIZE.default}
                shape={SHAPE.default}
                overrides={{BaseButton:{style:{width: "100%"}}}}
                className={css({fontSize: "20px", marginTop: "100px"})}
              >
                View Templates
              </Button>
            </StyledAction>
          </Card>
        </div>
    );
}

export default Home;
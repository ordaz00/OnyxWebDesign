import * as React from 'react';
import {Card, StyledBody} from 'baseui/card';

function Home(){
    return(
        <div className='tabs' id='home'>
          <Card overrides={{Root:{style:{width:"475px", height: "475px", margin: "25px"}}}}>
            <StyledBody>
                Create Your Own or Choose from Our Templates
            </StyledBody>
          </Card>
          <Card overrides={{Root:{style:{width:"475px", height: "475px", margin: "25px"}}}}>
            <StyledBody>
              Gallery of Templates
            </StyledBody>
          </Card>
        </div>
    );
}

export default Home;
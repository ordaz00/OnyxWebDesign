import * as React from 'react';
import {Card, StyledBody} from 'baseui/card';

function Home(){
    return(
        <div className='tabs' id='home'>
           <Card overrides={{Root: {style: {width: "700px"}}}}>
             <StyledBody>
                Home Filler For Now
             </StyledBody>
           </Card>
          <Card>
            <StyledBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi.
              Nulla ornare faucibus ex, non facilisis nisl. Proin ut
              dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl.
            </StyledBody>
          </Card>
        </div>
    );
}

export default Home;
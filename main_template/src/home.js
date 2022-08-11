import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';

function Home(){
    return(
        <div>
           <Card
           overrides={
            {Root:
                {Style:
                    {
                    width: "1000px",
                    height: "700px"}}}
           }
           >
             <StyledBody>
                Home Filler For Now
             </StyledBody>
             <StyledAction>
               <Button
                 overrides={{
                   BaseButton: { style: { width: "100%" } }
                 }}
               >
                 Button Label
               </Button>
             </StyledAction>
           </Card>
        </div>
    );
}

export default Home;
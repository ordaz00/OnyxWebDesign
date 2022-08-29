import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { useStyletron } from 'styletron-react';


function Questions(props){
  let [css] = useStyletron();

  function pageChange(){
    props.updatePage("fileUpload");
  }

  return(
    <div id='questions'>
     <Card
        title="Tell Us About Your Website Needs"
        className={css({width: "500px", height: "500px"})}
     >
       <StyledBody className={css({margin: "50px"})}>
         Proin ut dui sed metus pharetra hend rerit vel non mi.
         Nulla ornare faucibus ex, non facilisis nisl. Proin ut
         dui sed metus pharetra hend rerit vel non mi. Nulla
         ornare faucibus ex, non facilisis nisl.
       </StyledBody>
       <StyledAction>
         <Button
           overrides={{
             BaseButton: { style: { width: "100%" } }
           }}
           className={css({margin: "50px"})}
         >
           Button Label
         </Button>
       </StyledAction>
     </Card>
    </div>
  );
}

export default Questions;
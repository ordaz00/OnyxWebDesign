import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { useStyletron } from 'styletron-react';


function Questions(props){
  let [question, changeQuestion] = React.useState(0)
  let [css] = useStyletron();

  let questions = ["Hi", "Hello", "Wassup"]

  function pageChange(){
    props.updatePage("fileUpload");
  }

  function back(){
    if(question > 0){
      changeQuestion(question - 1);
    }
}

function next(){
  if(question < questions.length - 1){
    changeQuestion(question + 1);
  }
}

  return(
    <div id='questions'>
     <Card
        title="Tell Us About Your Website Needs"
        className={css({width: "500px", height: "500px"})}
     >
       <StyledBody className={css({margin: "50px"})}>
        {questions[question]}
       </StyledBody>
       <StyledAction>
       </StyledAction>
       <StyledAction className={css({position: "absolute", top: "135%", left: "555px"})}>
        <Button onClick={back} >
          Back
        </Button>
        <Button className={css({margin: "0px 100px 0px 100px"})}>
          Continue
        </Button>
         <Button onClick={next}>
          Next
         </Button>
       </StyledAction>
     </Card>
    </div>
  );
}

export default Questions;
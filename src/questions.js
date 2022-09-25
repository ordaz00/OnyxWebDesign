import * as React from 'react';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import { useStyletron } from 'styletron-react';
import {Textarea} from 'baseui/textarea';
import {SIZE} from 'baseui/input';


function Questions(props){
  let questions = ["What is Your Companies Name?", "What does your company do?", "What are some of the colors you would like used on your website?"]
  let answers = props.answers;

  let [question, changeQuestion] = React.useState(0);
  let [value, setValue] = React.useState((answers.length !== 0) ? answers[question]:"");
  let [css] = useStyletron();

  function pageChange(){
    answers[question] = value;
    props.updatePage("fileUpload");
  }

  function back(){
    if(question === 0){
      props.updatePage("templates");
    }else{
      changeQuestion(question - 1);
      answers[question] = value;
      setValue(answers[(question - 1)]);
    }
  }

  function next(){
    changeQuestion(question + 1);
    answers[question] = value;
    if((answers.length - 1) > question){
      setValue(answers[(question + 1)])
    }else{
      setValue("")
    }
  }

  if(question === (questions.length - 1)){
    return(
      <div id='questions'>
      <Card
          title="Tell Us About Your Website Needs"
          className={css({width: "500px", height: "500px"})}
      >
        <StyledBody className={css({height: "150px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"})}>
          {questions[question]}
        </StyledBody>
        <StyledAction>
        <Textarea
          value={value}
          onChange={e => setValue(e.target.value)}
          size={SIZE.large}
          placeholder="Enter Answer Here Please"
          clearable
        />
        </StyledAction>
        <StyledAction className={css({position: "relative", top: "75px"})}>
          <Button  onClick={back} className={css({margin: "0px 133px 0px 0px"})} >
            Back
          </Button>
          <Button disabled={value === ""} onClick={pageChange} className={css({margin: "0px 0px 0px 132px"})}>
            Continue
          </Button>
        </StyledAction>
      </Card>
      </div>
    );
    }else{
      return(
        <div id='questions'>
        <Card
            title="Tell Us About Your Website Needs"
            className={css({width: "500px", height: "500px"})}
        >
          <StyledBody className={css({height: "150px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"})}>
            {questions[question]}
          </StyledBody>
          <StyledAction>
          <Textarea
            value={value}
            onChange={e => setValue(e.target.value)}
            size={SIZE.large}
            placeholder="Enter Answer Here Please"
            clearable
          />
          </StyledAction>
          <StyledAction className={css({position: "relative", top: "75px"})}>
            <Button onClick={back} className={css({margin: "0px 148px 0px 0px"})}>
              Back
            </Button>
            <Button disabled={value === ""} onClick={next} className={css({margin: "0px 0px 0px 148px"})}>
              Next
            </Button>
          </StyledAction>
        </Card>
        </div>
      );
    }
}

export default Questions;
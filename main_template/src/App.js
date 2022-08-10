import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Title</p>
        </div>
      </header>
      <body>
        <Card overrides={{Root: {style: {width: '328px'}}}}>
          <StyledBody>
            I was built using Baseweb
          </StyledBody>
          <StyledAction>
            <Button
              onClick={() => alert("click")}
              kind={KIND.tertiary}
              size={SIZE.default}
              shape={SHAPE.default}
            >
              Hello
            </Button>
          </StyledAction>
        </Card>
      </body>
    </div>
  );
}

export default App;

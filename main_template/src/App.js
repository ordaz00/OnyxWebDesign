import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import {Tabs, Tab, ORIENTATION} from 'baseui/tabs';
import * as React from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Onyx Web Design</p>
        </div>
      </header>
     <Tabs
       onChange={({ activeKey }) => {
         setActiveKey(activeKey);
       }}
       activeKey={activeKey}
     >
       <Tab title="Tab Link 1">Content 1</Tab>
       <Tab title="Tab Link 2">Content 2</Tab>
       <Tab title="Tab Link 3">Content 3</Tab>
     </Tabs>
    </div>
  );
}

export default App;

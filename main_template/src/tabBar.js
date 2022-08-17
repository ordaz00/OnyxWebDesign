import * as React from 'react';
import {Tabs, Tab, FILL} from 'baseui/tabs-motion';
import Home from './home';
import Pricing from './pricing';
import Templates from './templates';
import Contact from './contact';
import About from './about';

function TabBar(){
    const [activeKey, setActiveKey] = React.useState("0");
    return(
        <div id="tabBar">
           <Tabs
             onChange={({ activeKey }) => {
               setActiveKey(activeKey);
             }}
             overrides={{Root:{style:{width: "1100px"}}}}
             activeKey={activeKey}
             fill={FILL.fixed}
           >
             <Tab title="Home">
              <Home></Home>
             </Tab>
             <Tab title="Pricing">
              <Pricing></Pricing>
             </Tab>
             <Tab title="Templates">
              <Templates></Templates>
             </Tab>
             <Tab title="Contact Us">
              <Contact></Contact>
             </Tab>
             <Tab title="About Us">
              <About></About>
             </Tab>
           </Tabs>
        </div>
    );
}

export default TabBar;
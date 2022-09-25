import * as React from 'react';
import {Tabs, Tab, FILL} from 'baseui/tabs-motion';
import Home from './home';
import Pricing from './pricing';
import Templates from './templates';
import Contact from './contact';
import About from './about';
import { useStyletron } from 'styletron-react';

function TabBar(props){
    const [activeKey, setActiveKey] = React.useState("0");
    let [css] = useStyletron();
    function switchTab(key){
      setActiveKey(key);
    }
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
             <Tab title="Home" className={css({fontSize: "20px !important"})}>
              <Home updatePage = {switchTab} />
             </Tab>
             <Tab title="Pricing" className={css({fontSize: "20px !important"})}>
              <Pricing />
             </Tab>
             <Tab title="Templates" className={css({fontSize: "20px !important"})}>
              <Templates
                updatePage = {props.updatePage}
              />
             </Tab>
             <Tab title="Contact Us" className={css({fontSize: "20px !important"})}>
              <Contact />
             </Tab>
             <Tab title="About Us" className={css({fontSize: "20px !important"})}>
              <About />
             </Tab>
           </Tabs>
        </div>
    );
}

export default TabBar;
import * as React from 'react';
import { useStyletron } from 'styletron-react';

function Header(props){
    let [css] = useStyletron();
    return(
        <header className="App-header">
            <div>
            <p onClick={() => props.updatePage("main")} className={css({cursor: "pointer"})}>Onyx Web Design</p>
            </div>
        </header>
    );
}

export default Header;
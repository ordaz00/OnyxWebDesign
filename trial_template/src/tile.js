import './App.css';
import {useState} from 'react';

function Tile(){
    const [visible,updateVisible] = useState(false);

    function showFun () {
        if(visible){
            updateVisible(false);
        }else{
            updateVisible(true);
        }
    }

    if(visible){
        return(
        <div id="Tile" onClick={showFun}>
        </div>
        );
    }else{
        return(
            <div>
                <p>Hi</p>
            </div>
        );
    }
}

export default Tile;
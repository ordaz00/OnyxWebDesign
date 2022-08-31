import * as React from 'react';
import {Block} from 'baseui/block';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import { useStyletron } from 'styletron-react';
import { ChevronLeft, ChevronRight } from 'baseui/icon';

function SlideShow(props){
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    let [css] = useStyletron();
    let slideShowWidth = props.getWidth;
    let slideShowHeight = props.getHeight;
    let colors = props.images;
    let delay = props.delay;

    function pageChange(){
        props.updatePage(2);
    }
    
    function updateButtonColor(ind){
        for(let i = 0; i < colors.length; i++){
            if(i === ind){
                let but = document.getElementById(colors[i] + i);
                but.style.background = "red";
            }else{
                let but = document.getElementById(colors[i] + i);
                but.style.background = "white";
            }
        }
    }

    function last(){
        if(index > 0){
            setIndex(index - 1);
            updateButtonColor(index -1);
        }else{
            setIndex(colors.length - 1);
            updateButtonColor(colors.length - 1);
        }
    }

    function next(){
        if(index < colors.length - 1){
            setIndex(index + 1);
            updateButtonColor(index + 1);
        }else{
            setIndex(0);
            updateButtonColor(0);
        }
    }

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }
      
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            next(),
        delay
        );
        return () => {
        resetTimeout();
        };

    }, [index]);

    return(
        <div id='slideShow'>
            <Block className={css({width: slideShowWidth, height: slideShowHeight, background: colors[index], margin: "25px", borderRadius: "12px"})}>
                <Button
                  onClick={last}
                  startEnhancer={() => <div><ChevronLeft size={48}/><ChevronLeft size={48}/></div>}
                  kind={KIND.tertiary}
                  size={SIZE.default}
                  shape={SHAPE.default}
                  className={css({cursor: "pointer", position: "relative", top: "40%", left: "-195px", padding: "0px", width: "108px", height: "48px", margin: "0px" })}
                />
                <div id='bottomSlideButtons'>
                    {colors.map((color, index) => (
                        <Button
                            onClick={() => {setIndex(index); updateButtonColor(index)}}
                            kind={KIND.primary}
                            size={SIZE.mini}
                            shape={SHAPE.pill}
                            key={index}
                            id={color + index}
                            className={((index === 0) ? css({background: "red"}):css({background: "white"}))}
                        >
                        </Button>
                    ))}
                </div>
                <Button
                  onClick={next}
                  endEnhancer={() => <div><ChevronRight size={48}/><ChevronRight size={48}/></div>}
                  kind={KIND.tertiary}
                  size={SIZE.default}
                  shape={SHAPE.default}
                  className={css({cursor: "pointer", position: "relative", top: "27.6%", right: "-249px", padding: "0px", width: "108px", height: "48px", margin: "0px" })}
                />
                <Button
                  onClick={pageChange}
                  kind={KIND.primary}
                  size={SIZE.default}
                  shape={SHAPE.default}
                  className={css({cursor: "pointer", position: "relative", top: "55%", right: "52px", padding: "0px", width: "108px", height: "48px", margin: "0px" })}
                >
                  Continue
                </Button>
            </Block>
        </div>
    );    
}

export default SlideShow;
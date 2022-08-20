import * as React from 'react';
// import {Block} from 'baseui/block';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import { useStyletron } from 'styletron-react';
import { ChevronLeft, ChevronRight } from 'baseui/icon';

// function SlideShow(props){
//     const [index, setIndex] = React.useState(0);
//     const timeoutRef = React.useRef(null);
//     let [css] = useStyletron();
//     let slideShowWidth = props.getWidth;
//     let slideShowHeight = props.getHeight;
//     let images = props.images;
//     let names = [];
//     images.forEach(element => {
//         names.push(element.name);
//     });
      
//     function resetTimeout() {
//         if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//         }
//     }
      
//     React.useEffect(() => {
//         resetTimeout();
//         timeoutRef.current = setTimeout(
//         () =>
//             setIndex((prevIndex) =>
//             prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//             ),
//         delay
//         );
//         return () => {
//         resetTimeout();
//         };
//     }, [index]);
      

//     console.log(names);

//     return(
//         <div id='slideShow'>
//             <Block className={css({width: slideShowWidth, height: slideShowHeight, background: "red"})}>
//                 <Button
//                   onClick={() => alert("click")}
//                   startEnhancer={() => <div><ChevronLeft size={36}/> <ChevronLeft size={36}/></div>}
//                   kind={KIND.tertiary}
//                   size={SIZE.default}
//                   shape={SHAPE.default}
//                   className={css({cursor: "pointer", position: "relative", top: "40%", left: "-125px"})}
//                 />

//                 {images.map(img => (
//                         <div id='bottomSlideButtons'>
//                             <Button
//                                 onClick={() => alert("click")}
//                                 kind={KIND.tertiary}
//                                 size={SIZE.mini}
//                                 shape={SHAPE.pill}
//                                 id={images.name}
//                             >
//                             </Button>
//                         </div>
//                     ))}

//                 <Button
//                   onClick={() => alert("click")}
//                   endEnhancer={() => <div><ChevronRight size={36}/> <ChevronRight size={36}/></div>}
//                   kind={KIND.tertiary}
//                   size={SIZE.default}
//                   shape={SHAPE.default}
//                   className={css({cursor: "pointer", position: "relative", top: "40%", right: "-125px"})}
//                 />
//             </Block>
//         </div>
//     );    
// }



function SlideShow() {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const delay = 2500;
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    let [css] = useStyletron();

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <Button
                  onClick={() => alert("click")}
                  startEnhancer={() => <div><ChevronLeft size={36}/> <ChevronLeft size={36}/></div>}
                  kind={KIND.primary}
                  size={SIZE.default}
                  shape={SHAPE.default}
                  className={css({background: "red", cursor: "pointer", position: "fixed", top: "40%", left: "0", zIndex: "10"})}
                />
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                <div
                    className="slide"
                    key={index}
                    style={{ backgroundColor }}
                ></div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                    setIndex(idx);
                    }}
                ></div>
                ))}
            </div>
        </div>
    );
}

export default SlideShow;
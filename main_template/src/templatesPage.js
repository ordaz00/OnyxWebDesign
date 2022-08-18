import * as React from 'react';
import {HeaderNavigation, ALIGN, StyledNavigationList, StyledNavigationItem} from 'baseui/header-navigation';
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import { useStyletron } from 'styletron-react';
import { ChevronLeft, ChevronRight } from 'baseui/icon';
import {Checkbox, STYLE_TYPE, LABEL_PLACEMENT} from 'baseui/checkbox';

function TemplatesPage(props){
    let [checked, setChecked] = React.useState(false);
    let [css] = useStyletron();
    return(
        <div className='tabs'>
            <HeaderNavigation className={css({width: "99.9%", borderStyle: "solid", borderWidth: "1px", borderBottomColor: "black", position: "sticky", top: "0"})}>
              <StyledNavigationList $align={ALIGN.left}>
                <StyledNavigationItem className={css({paddingLeft: "20px !important", paddingRight: "0px !important"})}>
                  <Button
                    onClick={() => alert("click")}
                    startEnhancer={() => <div><ChevronLeft size={36}/><ChevronLeft size={36}/><ChevronLeft size={36}/></div>}
                    kind={KIND.tertiary}
                    size={SIZE.mini}
                    shape={SHAPE.default}
                    className={css({pointerEvents: "none", fontSize: "28px"})}
                  >
                    Last
                  </Button>
                </StyledNavigationItem>
              </StyledNavigationList>
              <StyledNavigationList $align={ALIGN.center} className={css({paddingLeft: "0px !important", paddingRight: "0px !important"})}>
                <StyledNavigationItem>
                   <Checkbox
                    checked={checked}
                    checkmarkType={STYLE_TYPE.default}
                    onChange={e => setChecked(e.target.checked)}
                    labelPlacement={LABEL_PLACEMENT.right}
                   >
                     Choose Template
                   </Checkbox>
                </StyledNavigationItem>
              </StyledNavigationList>
              <StyledNavigationList $align={ALIGN.right}>
                <StyledNavigationItem className={css({paddingLeft: "0px !important", paddingRight: "20px !important"})}>
                <Button
                    onClick={() => alert("click")}
                    endEnhancer={() => <div><ChevronRight size={36}/><ChevronRight size={36}/><ChevronRight size={36}/></div>}
                    kind={KIND.tertiary}
                    size={SIZE.mini}
                    shape={SHAPE.default}
                    className={css({pointerEvents: "none", fontSize: "28px"})}
                  >
                    Next
                  </Button>
                </StyledNavigationItem>
              </StyledNavigationList>
            </HeaderNavigation>
        </div>
    )
}

export default TemplatesPage;
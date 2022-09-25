import * as React from 'react';
import {FileUploader} from 'baseui/file-uploader';
import { useStyletron } from 'styletron-react';

function FileUpload(props){
    let [css] = useStyletron();
    return(
        <div id='fileUpload'>
            <FileUploader
              accept="PDF"
              multiple
              errorMessage=""
              className={css({height: "500px"})}
            />
        </div>
    );
}

export default FileUpload;
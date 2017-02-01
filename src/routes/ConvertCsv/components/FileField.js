/**
 * Created by hzhou on 1/31/17.
 */
import React from 'react'
import Dropzone from 'react-dropzone'

export default class FileField extends React.Component {

    handleDropOrClick = (acceptedFiles, rejectedFiles, e) => {
        // let eventOrValue = e;
        // onBlur(eventOrValue); // update touched
        let { input: { onChange } } = this.props;
        onChange(acceptedFiles); // update value
    };


    render() {
        let { input }= this.props;
        let { accept } = this.props;
        let selectedFile = (input && input.value && input.value[0]) || null;
        let dropzoneProps = {
            accept,
            multiple: false,
            onDrop: this.handleDropOrClick,
        };
        return (
            <div>
                <input type='hidden' disabled {...input} />
                <Dropzone {...dropzoneProps}><div>Drop a CSV file here, or click to select files to upload.</div></Dropzone>
                <div className="pull-left"> File Name: {selectedFile ? selectedFile.name : null}</div>
            </div>
        );
    }
}
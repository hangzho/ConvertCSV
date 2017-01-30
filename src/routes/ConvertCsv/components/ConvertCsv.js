import React from 'react';
import CsvToSqlForm from './CsvToSqlForm'

export const ConvertCsv = (props) => (
    <div className="">
        <CsvToSqlForm></CsvToSqlForm>
        <div style={{marginTop : '1em'}} className="form-horizontal">
            <div className="form-group">
                <label htmlFor="sqlOutput" className="col-sm-2 control-label">SQL Output</label>
                <div className="col-sm-10">
                    <textarea value={props.sqlOutput} name="sqlOutput" id="sqlOutput" className="form-control" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
);

ConvertCsv.propTypes = {
    sqlOutput: React.PropTypes.string
};

export default ConvertCsv;

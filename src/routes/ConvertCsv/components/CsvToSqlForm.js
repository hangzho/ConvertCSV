/**
 * Created by hzhou on 1/29/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { csvToSqlInsert, CSV_TO_SQL_INSERT} from '../modules/convertCsv'

class CsvToSqlForm extends Component {
    static propTypes = {
        // csvToSqlInsert: React.PropTypes.string.isRequired
    };

    convertCsv(type, values) {
        switch (type) {
            case CSV_TO_SQL_INSERT:
                this.props.csvToSqlInsert(values.csvInput);
        }
    }

    render() {
        const { handleSubmit} = this.props;

        return (
            <div className="">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="csvInput" className="col-sm-2 control-label">CSV Input</label>
                        <div className="col-sm-10">
                            <Field name="csvInput" id="csvInput" className="form-control" rows="10" component="textarea" type="text"></Field>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success" onClick={handleSubmit(this.convertCsv.bind(this, CSV_TO_SQL_INSERT))}>Convert to SQL Insert</button>
            </div>
        )
    }
}

CsvToSqlForm = reduxForm({
    form: 'csvToSqlForm',
    destroyOnUnmount: false
})(CsvToSqlForm);

CsvToSqlForm = connect(null, { csvToSqlInsert })(CsvToSqlForm);

export default CsvToSqlForm;

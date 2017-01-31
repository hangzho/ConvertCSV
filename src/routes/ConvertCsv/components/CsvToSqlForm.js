/**
 * Created by hzhou on 1/29/17.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { CSV_TO_SQL_INSERT } from '../modules/convertCsv'

export class CsvToSqlForm extends Component {
    static propTypes = {
        csvToSqlInsert: React.PropTypes.func.isRequired
    };

    convertCsv(type, values) {
        switch (type) {
            case CSV_TO_SQL_INSERT:
                this.props.csvToSqlInsert(values);
        }
    }

    render() {
        const { handleSubmit} = this.props;

        return (
            <div className="">
                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="tableName" className="col-sm-2 control-label">Table Name</label>
                        <div className="col-sm-5">
                            <Field name="tableName" id="tableName" className="form-control" component="input" type="text"></Field>
                        </div>
                    </div>
                </div>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="csvInput" className="col-sm-2 control-label">CSV Input</label>
                        <div className="col-sm-10">
                            <Field name="csvInput" id="csvInput" className="form-control" rows="10" component="textarea" type="text"></Field>
                        </div>
                    </div>
                </div>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quote Table Names</label>
                        <div className="col-sm-10">
                            <label className="checkbox-inline pull-left"><Field name="quelOptions.autoQuoteTableNames" component="input" type="checkbox" value="true"></Field>Include </label>
                        </div>
                    </div>
                </div>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quote Field Name</label>
                        <div className="col-sm-10">
                            <label className="checkbox-inline pull-left"><Field name="quelOptions.autoQuoteFieldNames" component="input" type="checkbox" value="true"></Field>Enclose </label>
                        </div>
                    </div>
                </div>
                <div className="form-horizontal">
                    <div className="form-group">
                        <label className="col-sm-2 control-label">Quote Type</label>
                        <div className="col-sm-10">
                            <label className="radio-inline pull-left"><Field name="quelOptions.nameQuoteCharacter" component="input" type="radio" value="`"></Field>Backtick (`name`)</label>
                            <label className="radio-inline pull-left"><Field name="quelOptions.nameQuoteCharacter" component="input" type="radio" value="'"></Field>Single Quotes ('name')</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success" onClick={handleSubmit((values) => this.convertCsv(CSV_TO_SQL_INSERT, values))}>Convert to SQL Insert</button>
            </div>
        )
    }
}

CsvToSqlForm = reduxForm({
    form: 'csvToSqlForm',
    destroyOnUnmount: false
})(CsvToSqlForm);

export default CsvToSqlForm;

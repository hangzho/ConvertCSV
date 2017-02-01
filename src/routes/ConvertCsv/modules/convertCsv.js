import * as Papa from 'papaparse'
import squel from 'squel'

// ------------------------------------
// Constants
// ------------------------------------
export const CSV_TO_SQL_INSERT = 'CSV_TO_SQL_INSERT';
export const UPDATE_SQL_OUTPUT = 'UPDATE_SQL_OUTPUT';

// ------------------------------------
// Actions
// ------------------------------------

export function updateSqlOutput(sqlOutput) {
    return {
        type: UPDATE_SQL_OUTPUT,
        payload: sqlOutput
    }
}


/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const csvToSqlInsert = ({ csvInput = '', tableName = 'mytable', squelOptions }) => {
    return (dispatch) => {
        Papa.parse(csvInput, {
            complete: function ({ data }) {
                if (csvInput === '') {
                    return
                }
                let sqlOutputTemp = '';
                const headers = data[0];
                const length = headers.length;
                for (let i = 1; i < data.length; i++) {
                    let tempInsert = squel.insert({ ...squelOptions }).into(tableName);
                    for (let j = 0; j < length; j++) {
                        tempInsert.set(headers[j], data[i][j]);
                    }
                    sqlOutputTemp = sqlOutputTemp + tempInsert.toString() + ';\n';
                }
                dispatch(updateSqlOutput(sqlOutputTemp));
            }
        });
    }
};

export const fileOnLoad = (file, change) => {
    return (dispatch) => {
        var reader = new FileReader();
        reader.onload = function () {
            // Use the `change` method provided by Redux-Form to dispatch action instead of the dispatch() function.
            change('csvInput', reader.result);
        };
        reader.readAsText(file);
    }
};

export const actions = {
    csvToSqlInsert,
    updateSqlOutput,
    fileOnLoad
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [UPDATE_SQL_OUTPUT]: handleUpdateSqlOutput
};

function handleUpdateSqlOutput(state, action) {
    return {
        ...state,
        sqlOutput: action.payload
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    sqlOutput: ''
};
export default function csvReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}

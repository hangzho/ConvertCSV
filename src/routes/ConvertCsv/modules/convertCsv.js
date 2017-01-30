import { parse } from 'csv'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';
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

export const csvToSqlInsert = (csvInput) => {
    return (dispatch) => {
        parse(csvInput, function (err, output) {
            console.log('Output', output);
            let sqlOutputTemp = '';
            const headers = output[0].join(',');
            for (let i = 1; i < output.length; i++) {
                sqlOutputTemp += `INSERT INTO mytable(${headers}) VALUES (${output[i].join(',')});\n`
            }
            dispatch(updateSqlOutput(sqlOutputTemp));
            console.log(sqlOutputTemp);
        });
    }
};

export const actions = {
    csvToSqlInsert,
    updateSqlOutput
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
export default function csvReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];

    return handler ? handler(state, action) : state;
}

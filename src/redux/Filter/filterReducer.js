import { createReducer } from '@reduxjs/toolkit';
import actions from './filterAction';

const filterReducer = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

export default filterReducer;

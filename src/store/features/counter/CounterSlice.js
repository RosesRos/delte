import { createSlice } from '@reduxjs/toolkit';
import initialState from '../../initialState';
import { name } from './name';

export const CounterSlice = createSlice({
    name,
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
});

export const { increment, decrement } = CounterSlice.actions;
export const selectCount = (state) => state.COUNTER.value;

export default CounterSlice.reducer;
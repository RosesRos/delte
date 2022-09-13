import { combineReducers } from "redux";
import CounterSlice from "../features/counter/CounterSlice";

const reducers = combineReducers({
    COUNTER: CounterSlice,
});

export default reducers;
import {combineReducers} from "redux";
import toDoReducer from "./todos/reducer";

const rootReducers=combineReducers({
    todosFromRootReducer:toDoReducer
});
export default rootReducers;
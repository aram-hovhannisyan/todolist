import { combineReducers, createStore } from "redux";
import { toDoreducer } from "../Furniture/toDoSlice";

const Store = createStore(combineReducers({todo:toDoreducer}),
 {todo:{todo:[]}})
export default Store
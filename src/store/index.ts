import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducer as recommendReducer } from "../pages/Recommend/store";
import thunk from "redux-thunk";
import { RecommmendState } from "../pages/Recommend/store/reducer";

export interface StoreState {
  recommend: RecommmendState;
}

const reducers = combineReducers({
  recommend: recommendReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as recommendReducer } from "../pages/Recommend/store";
import thunk from "redux-thunk";
import { RecommmendState } from "../pages/Recommend/store/reducer";
import toastReducer, { ToastState } from "./reducer";
import { PlayerState } from "../components/Player/store/reducer";
import { reducer as playerReducer } from "../components/Player/store";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  recommend: RecommmendState;
  toast: ToastState;
  player: PlayerState;
}

const reducers = combineReducers({
  recommend: recommendReducer,
  toast: toastReducer,
  player: playerReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

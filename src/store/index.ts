import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { reducer as recommendReducer } from "../pages/Recommend/store";
import thunk from "redux-thunk";
import { RecommmendState } from "../pages/Recommend/store/reducer";
import toastReducer, { ToastState } from "./reducer";
import { PlayerState } from "../components/Player/store/reducer";
import { reducer as playerReducer } from "../components/Player/store";
import { SingersState } from "../pages/Singers/store/reducer";
import { reducer as singersReducer } from "../pages/Singers/store";
import { RankState } from "../pages/Rank/store/reducer";
import { reducer as rankReducer } from "../pages/Rank/store";
import { AlbumState } from "../pages/Album/store/reducer";
import { reducer as albumDetail } from "../pages/Album/store";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  recommend: RecommmendState;
  toast: ToastState;
  player: PlayerState;
  singers: SingersState;
  rank: RankState;
  album: AlbumState;
}

const reducers = combineReducers({
  recommend: recommendReducer,
  toast: toastReducer,
  player: playerReducer,
  singers: singersReducer,
  rank: rankReducer,
  album: albumDetail,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

import produce from "immer";
import { IAction, Singer } from "../../../typings";
import { SET_SINGER_DETAIL } from "./actionTypes";

export interface SingerState {
  singerDetail: Singer | null;
  loading: boolean;
}

export interface SingerAction extends IAction {
  payload: boolean | Singer;
}

const initState: SingerState = {
  singerDetail: null,
  loading: true,
};

export default produce((state: SingerState, action: SingerAction) => {
  switch (action.type) {
    case SET_SINGER_DETAIL:
      state.singerDetail = action.payload as Singer;
      state.loading = false;
      break;

    default:
      break;
  }
}, initState);

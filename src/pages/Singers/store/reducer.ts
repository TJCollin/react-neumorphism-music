import produce from "immer";
import { IAction, Singer } from "../../../typings";
import { SET_SINGER_LIST } from "./actionTypes";

export interface SingersState {
  singerList: Singer[];
}

export interface SingerAction extends IAction {
  payload: Singer[];
}

const initState: SingersState = {
  singerList: [],
};

export default produce((state: SingersState, action: SingerAction) => {
  switch (action.type) {
    case SET_SINGER_LIST:
      state.singerList = action.payload as Singer[];
      break;

    default:
      break;
  }
}, initState);

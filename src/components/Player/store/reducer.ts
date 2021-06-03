import produce from "immer";
import { IAction, Song } from "../../../typings";
import { SET_CURRENT_SONG } from "./actionTypes";

export interface PlayerState {
  currentSong: Song | null;
}

export interface PlayerAction extends IAction {
  payload: Song;
}

const initState: PlayerState = {
  currentSong: null,
};

export default produce((state: PlayerState, action: PlayerAction) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      state.currentSong = action.payload;
      break;
    default:
      break;
  }
}, initState);

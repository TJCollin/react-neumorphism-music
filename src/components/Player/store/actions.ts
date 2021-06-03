import { Song } from "../../../typings";
import { SET_CURRENT_SONG } from "./actionTypes";

export const changeCurrentSongAction = (payload: Song) => {
  return {
    type: SET_CURRENT_SONG,
    payload: payload,
  };
};

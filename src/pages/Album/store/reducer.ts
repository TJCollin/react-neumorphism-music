import produce from "immer";
import { AlbumDetailProps } from "../Detail";
import { SET_ALBUM_DETAIL } from "./actionTypes";

export interface AlbumState {
  albumDetail: AlbumDetailProps | null;
}

export interface AlbumAction {
  type: string;
  payload: AlbumDetailProps | null;
}

const initialState: AlbumState = {
  albumDetail: null,
};

export default produce((state: AlbumState, action: AlbumAction) => {
  switch (action.type) {
    case SET_ALBUM_DETAIL:
      state.albumDetail = action.payload;
      break;
    default:
      break;
  }
}, initialState);

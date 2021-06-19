import { Song } from "../../../typings";
import {
  DELETE_SONG,
  SET_CURRENT_INDEX,
  SET_CURRENT_SONG,
  SET_FULLSCREEN,
  SET_PLAY_STATUS,
  SET_SHOW_SONG_LIST,
  SET_SONG_LIST,
} from "./actionTypes";

export const changeCurrentSongAction = (payload: Song) => {
  return {
    type: SET_CURRENT_SONG,
    payload,
  };
};

export const changeCurrentIndexAction = (payload: number) => {
  return {
    type: SET_CURRENT_INDEX,
    payload,
  };
};

export const changeSongListAction = (payload: Song[]) => {
  return {
    type: SET_SONG_LIST,
    payload,
  };
};

export const changePlayStatusAction = (payload: boolean) => {
  return {
    type: SET_PLAY_STATUS,
    payload,
  };
};

export const changeShowSongListAction = (payload: boolean) => {
  return {
    type: SET_SHOW_SONG_LIST,
    payload,
  };
};

export const deleteSongAction = (payload: number) => {
  return {
    type: DELETE_SONG,
    payload,
  };
};
export const changeFullscreenAction = (payload: boolean) => {
  return {
    type: SET_FULLSCREEN,
    payload,
  };
};

import { stat } from "fs";
import produce from "immer";
import { IAction, Song } from "../../../typings";
import {
  DELETE_SONG,
  SET_CURRENT_INDEX,
  SET_CURRENT_SONG,
  SET_FULLSCREEN,
  SET_PLAY_STATUS,
  SET_SHOW_SONG_LIST,
  SET_SONG_LIST,
} from "./actionTypes";

export interface PlayerState {
  currentSong: Song | null;
  songList: Song[];
  currentIndex: number;
  playStatus: boolean;
  showSongList: boolean;
  fullScreen: boolean;
}

export interface PlayerAction extends IAction {
  payload: Song | Song[] | number | boolean;
}

const initState: PlayerState = {
  currentSong: null,
  songList: [],
  currentIndex: -1,
  playStatus: false,
  showSongList: false,
  fullScreen: false,
};

/**
 * 删除指定歌曲
 * @param state
 * @param index
 */
const deleteSongFromPlayList = (state: PlayerState, index: number): void => {
  const { songList, currentIndex } = state;

  songList.splice(index, 1);
  if (index <= currentIndex) {
    state.currentIndex = state.currentIndex === 0 ? 0 : state.currentIndex - 1;
  }
};

export default produce((state: PlayerState, action: PlayerAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_SONG:
      state.currentSong = payload as Song;
      break;
    case SET_CURRENT_INDEX:
      let idx = payload as number;
      if (idx < 0) {
        idx = state.songList.length - 1;
      } else if (idx >= state.songList.length) {
        idx = 0;
      }
      state.currentIndex = idx;
      state.playStatus = true;

      break;
    case SET_SONG_LIST:
      state.songList = payload as Song[];
      break;
    case SET_SHOW_SONG_LIST:
      state.showSongList = payload as boolean;
      break;
    case SET_PLAY_STATUS:
      state.playStatus = payload as boolean;
      break;
    case DELETE_SONG:
      deleteSongFromPlayList(state, action.payload as number);
      break;
    case SET_FULLSCREEN:
      state.fullScreen = payload as boolean;
      break;
    default:
      break;
  }
}, initState);

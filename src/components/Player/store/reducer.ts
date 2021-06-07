import { stat } from "fs";
import produce from "immer";
import { IAction, Song } from "../../../typings";
import {
  DELETE_SONG,
  SET_CURRENT_INDEX,
  SET_CURRENT_SONG,
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
}

export interface PlayerAction extends IAction {
  payload: Song | Song[] | number | boolean;
}

const initState: PlayerState = {
  currentSong: null,
  songList: [],
  currentIndex: -1,
  playStatus: true,
  showSongList: false,
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
    state.currentIndex = state.currentIndex === 0 ? 0 : state.currentIndex--;
  }
};

export default produce((state: PlayerState, action: PlayerAction) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_SONG:
      state.currentSong = payload as Song;
      break;
    case SET_CURRENT_INDEX:
      state.currentIndex = payload as number;
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
    default:
      break;
  }
}, initState);

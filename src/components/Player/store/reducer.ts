import produce from "immer";
import { IAction, Song } from "../../../typings";
import {
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
    default:
      break;
  }
}, initState);

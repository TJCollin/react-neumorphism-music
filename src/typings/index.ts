export interface IAction {
  type: string;
}

export interface Song {
  id: number;
  name: string;
  album: Album;
  singers: Singer[];
  dt: number;
}

export interface Album {
  id: number;
  name: string;
  picUrl: string;
}

export interface Singer {
  id: number;
  name: string;
  picUrl: string;
  hotSongs?: Song[];
}

export interface Recomm extends Album {
  playCount: number;
}

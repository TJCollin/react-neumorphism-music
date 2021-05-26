import { axiosGet } from "../axiosInstance";
import { GET_ALBUM_DETAIL_BY_ID } from "../url";

/**
 * 请求歌单详情
 */
const getAlbumDetailRequest = async (id: number) => {
  const { playlist }: any = await axiosGet(GET_ALBUM_DETAIL_BY_ID, { id });
  return {
    ...playlist,
    tracks: playlist.tracks.map((item: any) => {
      return {
        id: item.id,
        name: item.name,
        album: item.al,
        singers: item.ar,
        dt: item.dt,
      };
    }),
  };
};

export { getAlbumDetailRequest };

import { axiosGet } from "../axiosInstance";
import { GET_LYRIC } from "../url";

/**
 * 请求歌词数据
 * @param id
 */
const getLyricRequest = (id: number) => {
  return axiosGet(GET_LYRIC, { id });
};

export { getLyricRequest };

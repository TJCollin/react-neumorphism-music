import { axiosGet } from "../axiosInstance";
import { GET_RANK_LIST } from "../url";

/**
 * 请求所有榜单数据
 */
const getRankListRequest = () => {
  return axiosGet(GET_RANK_LIST);
};

export { getRankListRequest };

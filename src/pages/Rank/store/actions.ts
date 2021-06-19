import { Dispatch } from "redux";
import { getRankListRequest } from "../../../apis/requests/rank";
import { SET_RANK_DATA } from "./actionTypes";
import { RankItem, RankPayload } from "../typing";

export const changeRankDataAction = (payload: RankPayload) => {
  return {
    type: SET_RANK_DATA,
    payload,
  };
};

/**
 * 获取榜单数据
 */
export const getRankListAction = () => {
  return async (dispatch: Dispatch) => {
    const resp: any = await getRankListRequest();

    const list = resp.list,
      globalList = list.filter((item: RankItem) => !item.tracks?.length),
      officialList = list.filter((item: RankItem) => item.tracks?.length);

    dispatch(changeRankDataAction({ globalList, officialList }));
  };
};

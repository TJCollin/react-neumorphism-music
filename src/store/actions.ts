import { TOGGLE_TOAST } from "./actionTypes";

export const toggleToastAction = (
  show: boolean,
  payload: string = "暂未开发"
) => {
  return {
    type: TOGGLE_TOAST,
    payload: payload,
    show: show,
  };
};

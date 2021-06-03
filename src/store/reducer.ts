import { stat } from "fs";
import { produce } from "immer";
import { StoreState } from ".";
import { IAction } from "../typings";
import { TOGGLE_TOAST } from "./actionTypes";

export interface ToastAction extends IAction {
  show: boolean;
  payload?: "string";
}

export interface ToastState {
  showToast: boolean;
  toastText?: string;
}

const initialState: ToastState = {
  showToast: false,
  toastText: "",
};

export default produce((state: ToastState, action: ToastAction) => {
  switch (action.type) {
    case TOGGLE_TOAST:
      if (action.show) {
        state.showToast = true;
        state.toastText = action.payload as string;
      } else {
        state.showToast = false;
      }
      break;

    default:
      break;
  }
}, initialState);

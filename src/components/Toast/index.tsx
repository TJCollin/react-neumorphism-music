import React, { FC, memo, useCallback, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../store";
import { Alert } from "collin-ui";
import { toggleToastAction } from "../../store/actions";
const Toast: FC = () => {
  const { showToast, toastText = "" } = useSelector((state: StoreState) => ({
    showToast: state.toast.showToast,
    toastText: state.toast.toastText,
  }));
  const dispatch = useDispatch();
  const hideToast = useCallback(() => {
    dispatch(toggleToastAction(false));
  }, []);
  const timer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (showToast) {
      timer.current = setTimeout(() => {
        hideToast();
      }, 2000);
      return () => {
        clearTimeout(Number(timer.current));
        timer.current = null;
      };
    }
  }, [showToast, hideToast]);
  return (
    <CSSTransition timeout={200} unmountOnExit classNames="drop" in={showToast}>
      <Alert
        title={toastText}
        className={styles["toast"]}
        onClose={hideToast}
      ></Alert>
    </CSSTransition>
  );
};

export default memo(Toast);

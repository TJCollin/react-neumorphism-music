import BScroll, { BScrollInstance, Options } from "better-scroll";
import React, {
  FC,
  forwardRef,
  memo,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import styles from "./index.module.scss";

export interface Position {
  x: number;
  y: number;
}

export interface ScrollProps extends Options {
  ref?: any;
  direction?: "horizontal" | "vertical";
  click?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  bounceLeft?: boolean;
  bounceRight?: boolean;
  pullDownLoading?: boolean;
  pullUpLoading?: boolean;
  onScroll?: (pos: Position) => void;
  onPullDown?: () => void;
  onPullUp?: () => void;
  children?: ReactNode;
}

export interface ScrollInstance {
  refresh: () => void;
  getBScroll: () => BScrollInstance | undefined;
}

const Scroll: FC<ScrollProps> = forwardRef(
  (
    {
      direction = "vertical",
      click = true,
      children,
      bounceTop = true,
      bounceBottom = true,
      bounceLeft = true,
      bounceRight = true,
      pullDownLoading = false,
      pullUpLoading = false,
      onScroll,
      onPullDown = () => {},
      onPullUp = () => {},
      ...restProps
    },
    ref
  ) => {
    const [bScroll, setBScroll] = useState<BScrollInstance | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    /**
     * 初始化scroll
     */
    useEffect(() => {
      let scroll = new BScroll(scrollRef.current!, {
        click: click,
        probeType: 3,
        scrollX: direction === "horizontal",
        scrollY: direction === "vertical",
        tap: "tap",
        bounce: {
          top: bounceTop,
          bottom: bounceBottom,
          left: bounceLeft,
          right: bounceRight,
        },
        ...restProps,
      });

      setBScroll(scroll);
      return () => {
        setBScroll(null);
      };
    }, []);

    /**
     * 通过 ref 暴露组件方法
     */
    useImperativeHandle(ref, (): ScrollInstance => {
      return {
        refresh() {
          if (bScroll) {
            bScroll.refresh();
            bScroll.scrollTo(0, 0);
          }
        },
        getBScroll() {
          if (bScroll) {
            return bScroll;
          }
        },
      };
    });

    /**
     * 监听onScroll
     */
    useEffect(() => {
      if (onScroll && bScroll) {
        bScroll.on("scroll", onScroll);
        return () => {
          bScroll.off("scroll");
        };
      }
    }, [bScroll, onScroll]);

    /**
     * 刷新scroll
     */
    useEffect(() => {
      bScroll && bScroll.refresh();
    });
    return (
      <div className={styles["scroll-wrapper"]} ref={scrollRef}>
        {children}
      </div>
    );
  }
);

export default memo(Scroll);

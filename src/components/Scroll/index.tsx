import BScroll, { BScrollInstance } from "better-scroll";
import React, {
  FC,
  forwardRef,
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./index.module.scss";

export interface Position {
  x: number;
  y: number;
}

export interface ScrollProps {
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
      onScroll = () => {},
      onPullDown = () => {},
      onPullUp = () => {},
    },
    ref
  ) => {
    const [bScroll, setBScroll] = useState<BScrollInstance | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
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
      });

      setBScroll(scroll);
      return () => {
        setBScroll(null);
      };
    }, []);
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

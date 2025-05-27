import * as motion from "motion/react-client";
import { MotionProps } from "motion/react";

import { JSX, ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(...inputs));
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
} & MotionProps;

export default function Container({
  children,
  className,
  ...motionProps
}: ContainerProps): JSX.Element {
  return (
    <motion.section
      // className={cn("px-4 box-border max-w-[1440px] w-full mx-auto", className)}
      className={cn("px-4 lg:px-[90px] box-border w-full mx-auto", className)}
      {...motionProps}
    >
      {children}
    </motion.section>
  );
}

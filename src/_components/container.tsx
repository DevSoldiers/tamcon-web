import { JSX, ReactNode } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(...inputs));
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
}: ContainerProps): JSX.Element {
  return (
    <section
      className={cn("px-4 box-border max-w-[1440px] w-full mx-auto", className)}
    >
      {children}
    </section>
  );
}

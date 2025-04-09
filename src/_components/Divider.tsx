import clsx from "clsx";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: Array<string | false | null | undefined>) {
  return twMerge(clsx(...inputs));
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Divider({ children, className }: ContainerProps) {
  return (
    <section className={cn("grid md:grid-cols-2 items-center", className)}>
      {children}
    </section>
  );
}

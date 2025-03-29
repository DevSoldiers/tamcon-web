"use client";
import clsx from "clsx";

export default function Hamburger({
  onClick,
  className,
  open = false,
}: {
  onClick?: () => void;
  className?: string;
  open?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative w-8 h-8 flex items-center justify-center group",
        className
      )}
      aria-label="Menu"
    >
      {/* Top Bar */}
      <span
        className={clsx(
          "absolute w-6 h-0.5 bg-black transition-all duration-300 ease-in-out",
          open ? "rotate-45 top-4" : "top-1.5"
        )}
      ></span>

      {/* Upper-Mid Bar */}
      <span
        className={clsx(
          "absolute w-6 h-0.5 bg-black transition-all duration-300 ease-in-out",
          open ? "opacity-0" : "top-3"
        )}
      ></span>

      {/* Lower-Mid Bar */}
      <span
        className={clsx(
          "absolute w-6 h-0.5 bg-black transition-all duration-300 ease-in-out",
          open ? "opacity-0" : "top-4.5"
        )}
      ></span>

      {/* Bottom Bar */}
      <span
        className={clsx(
          "absolute w-6 h-0.5 bg-black transition-all duration-300 ease-in-out",
          open ? "-rotate-45 top-4" : "top-6"
        )}
      ></span>
    </button>
  );
}

import { clsx } from "clsx";

export default function Container({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section
      className={clsx("px-4 box-border max-w-[1312px] w-full bg-orange-200 mx-auto", className)}
    >
      {children}
    </section>
  );
}

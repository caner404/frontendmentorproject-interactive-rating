import { PropsWithChildren } from "react";

interface RatingCircleProps {
  className?: string;
}

export function RatingCircle(props: PropsWithChildren<RatingCircleProps>) {
  return (
    <div
      className={`${props.className} w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-blue flex justify-center items-center`}
    >
      {props.children}
    </div>
  );
}

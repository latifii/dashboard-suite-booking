import { useEffect, useRef } from "react";

type OutSideClickProps = () => void;

export function useOutsideClick(handler: OutSideClickProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(
    function () {
      function handleClick(e: MouseEvent | TouchEvent) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, true);
      document.addEventListener("touchend", handleClick, true);

      return () => {
        document.removeEventListener("click", handleClick, true);
        document.removeEventListener("touchend", handleClick, true);
      };
    },
    [ref, handler]
  );
  return ref;
}

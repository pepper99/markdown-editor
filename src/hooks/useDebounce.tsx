import { useEffect } from "react";

function useDebounce(onActivate: Function, dependency: any[], delay: number) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onActivate();
    }, delay);

    return () => clearTimeout(timer);
  }, [...(dependency || []), delay]);
}

export default useDebounce;

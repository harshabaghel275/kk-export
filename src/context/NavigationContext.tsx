// import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

// type NavigationContextType = {
//   currentPage: string;
//   navigate: (page: string) => void;
// };

// const NavigationContext = createContext<NavigationContextType>({
//   currentPage: 'home',
//   navigate: () => {},
// });

// export const useNavigation = () => useContext(NavigationContext);

// export function NavigationProvider({ children }: { children: ReactNode }) {
//   const [currentPage, setCurrentPage] = useState('home');

//   const navigate = useCallback((page: string) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   return (
//     <NavigationContext.Provider value={{ currentPage, navigate }}>
//       {children}
//     </NavigationContext.Provider>
//   );
// }



import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

type NavigationContextType = {
  currentPage: string;
  navigate: (page: string) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  currentPage: "home",
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState("home");

  // 🔹 On first load (refresh support)
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (path) {
      setCurrentPage(path);
    } else {
      window.history.replaceState({ page: "home" }, "", "/home");
    }
  }, []);

  // 🔹 Handle browser back/forward
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.page) {
        setCurrentPage(event.state.page);
      } else {
        const path = window.location.pathname.replace("/", "");
        setCurrentPage(path || "home");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = useCallback((page: string) => {
    if (page === currentPage) return;

    window.history.pushState({ page }, "", `/${page}`);
    setCurrentPage(page);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

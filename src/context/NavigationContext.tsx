import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type NavigationContextType = {
  currentPage: string;
  navigate: (page: string) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

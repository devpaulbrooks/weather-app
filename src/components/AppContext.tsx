
import  { createContext, useState, ReactNode, useContext } from 'react';

interface AppContextType {
  user: string;
  setUser: (user: string) => void;
}

const defaultContextValue: AppContextType = {
  user: '',
  setUser: () => {}
};

const AppContext = createContext<AppContextType>(defaultContextValue);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string>('');

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };

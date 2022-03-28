import {createContext, useContext} from 'react';

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppCtx = createContext<AppContextInterface | null>(null);

const sampleAppContext: AppContextInterface = {
  name: 'Using React Context in a Typescript App',
  author: 'thehappybug',
  url: 'http://www.example.com',
};

const AppProvider: React.FC = ({children}) => {
  return <AppCtx.Provider value={sampleAppContext}>{children}</AppCtx.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppCtx);
};

export default AppProvider;

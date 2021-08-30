// libraries
import { createContext, useReducer } from 'react';

// data
import { initialData } from '../data/initialData';
import { reducer } from '../reducers';


export const context = createContext({});


const InitialDataProvider = ({ children }) => {
   const [data, dispatch] = useReducer(reducer, initialData);
   return (
      <context.Provider value={{ data, dispatch }}>
         {children}
      </context.Provider>
   );
};

export default InitialDataProvider;
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const Hourlyforecastprovider = ({ children }) => {
  const [hourlydata, setHourlydata] = useState([
 
  ]);

  return (
    <DataContext.Provider value={{ hourlydata, setHourlydata }}>
      {children}
    </DataContext.Provider>
  );
};

export const useHourlydata = () => useContext(DataContext);
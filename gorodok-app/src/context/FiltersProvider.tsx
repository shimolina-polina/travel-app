import { DateRange } from "@mui/x-date-pickers-pro";
import { Dayjs } from "Dayjs";
import { createContext, useContext, useState } from "react";
import React from "react";
import { ICity } from "../interfaces/data/cities/ICity";

interface IFilters {
    dateRange: DateRange<Dayjs> | undefined;
    childrenCount: number;
    adultsCount: number;
    location: ICity | null;
}
  
interface IFiltersContextProps {
    filters: IFilters;
    setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

const FiltersContext = createContext<IFiltersContextProps | null>(null);
    
export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [filters, setFilters] = useState<IFilters>({ dateRange: undefined, childrenCount: 0, adultsCount: 1, location: null });

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
};
  
export const useFilters = () => {
    const context = useContext(FiltersContext);
    if (!context) {
      throw new Error('useFilters must be used within a FiltersProvider');
    }
    return context;
  };
  
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';
import { IFiltersSlice } from '../interfaces/store/filtersSlice/IFiltersSlice';
import { ICity } from '../interfaces/data/cities/ICity';

const initialState: IFiltersSlice = {
    dateRange: [dayjs().add(1, 'day').format('YYYY-MM-DD'), dayjs().add(2, 'day').format('YYYY-MM-DD')],
    childrenCount: 0,
    adultsCount: 1,
    location: null,
  };
  
  const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setDateRange: (state: IFiltersSlice, action: PayloadAction<[string, string]>) => {
        state.dateRange = action.payload;
      },
      setChildrenCount: (state: IFiltersSlice, action: PayloadAction<number>) => {
        state.childrenCount = action.payload;
      },
      setAdultsCount: (state: IFiltersSlice, action: PayloadAction<number>) => {
        state.adultsCount = action.payload;
      },
      setLocation: (state: IFiltersSlice, action: PayloadAction<ICity | null>) => {
        state.location = action.payload;
      },
      clearFilters: (state: IFiltersSlice) => {
        state.dateRange = [dayjs().add(1, 'day').format('YYYY-MM-DD'), dayjs().add(2, 'day').format('YYYY-MM-DD')];
        state.childrenCount = 0;
        state.adultsCount = 1;
        state.location = null;
      },
    },
  });
  
  export const {
    setDateRange,
    setChildrenCount,
    setAdultsCount,
    setLocation,
    clearFilters,
  } = filtersSlice.actions;
  
  export default filtersSlice.reducer;
  
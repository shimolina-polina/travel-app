import { LocalizationProvider } from "@mui/x-date-pickers"
import { DateRangePicker } from "@mui/x-date-pickers-pro"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDateRange } from "../../store/filtersSlice"
import { RootState } from "../../store/store"
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice"

const CustomDateRangePicker = () => {
    const dispatch = useDispatch();
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker 
                localeText={{ start: 'Заезд', end: 'Выезд' }} 
                value={filters.dateRange}
                onChange={(newValue) => dispatch(setDateRange(newValue))}
            />
        </LocalizationProvider>
    )
}

export default CustomDateRangePicker;
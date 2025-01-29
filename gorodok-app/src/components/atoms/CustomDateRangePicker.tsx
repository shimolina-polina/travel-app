import { LocalizationProvider, PickersShortcutsItem } from "@mui/x-date-pickers"
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setDateRange } from "../../store/filtersSlice"
import { RootState } from "../../store/store"
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice"
import dayjs, { Dayjs } from "dayjs"


const CustomDateRangePicker = () => {
    const dispatch = useDispatch();
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);
    const [value, setValue] = useState<DateRange<Dayjs>>([dayjs(filters.dateRange[0]), dayjs(filters.dateRange[1])]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker 
                localeText={{ start: 'Заезд', end: 'Выезд' }} 
                value={value}
                onChange={(newValue) => dispatch(setDateRange([newValue[0]? newValue[0].format('YYYY-MM-DD') : filters.dateRange[0], newValue[1]? newValue[1].format('YYYY-MM-DD') : filters.dateRange[1]]))}          
            />
        </LocalizationProvider>
    )
}

export default CustomDateRangePicker;


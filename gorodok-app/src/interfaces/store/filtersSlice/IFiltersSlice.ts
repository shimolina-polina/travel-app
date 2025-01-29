import { ICity } from "../../data/cities/ICity";
import { Dayjs } from 'dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';

export interface IFiltersSlice {
    dateRange: [string, string];
    childrenCount: number;
    adultsCount: number;
    location: ICity | null;
}

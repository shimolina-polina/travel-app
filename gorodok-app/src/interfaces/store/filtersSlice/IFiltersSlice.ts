import { ICity } from "../../data/cities/ICity";
import { Dayjs } from 'Dayjs';
import { DateRange } from '@mui/x-date-pickers-pro/models';

export interface IFiltersSlice {
    dateRange: DateRange<Dayjs> | undefined;
    childrenCount: number;
    adultsCount: number;
    location: ICity | null;
}

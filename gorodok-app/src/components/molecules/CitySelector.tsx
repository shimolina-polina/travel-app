import React, { FC } from "react"
import ComboBox from "../atoms/ComboBox"
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../store/filtersSlice";
import { RootState } from "../../store/store";
import { cities } from "../../data/cities";
import { IComboBoxOption } from "../../interfaces/atoms/ComboBox/IComboBoxOption";
import { ICity } from "../../interfaces/data/cities/ICity";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";

const CitySelector: FC<{width?: number | string}> = ({width}) => {
    const comboBoxOptions: IComboBoxOption[] = cities.map((city: ICity) => {
        return {id: city.id, title: city.name}
      })

    const dispatch = useDispatch();
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filters);

    const MoscowLocation: ICity | null = cities.find(city => city.id === 1) || null;
    
    const handleChangeValue = (newValue: IComboBoxOption | null) => {
        const selectedValue: ICity | null = newValue !== null? cities.find(obj => obj.id === newValue.id) || MoscowLocation : MoscowLocation;
        dispatch(setLocation(selectedValue))
    }

    return (
    <ComboBox
        value={comboBoxOptions.find(item => item.id === filters.location?.id)}
        label="Направление"
        options={comboBoxOptions}
        width={width}
        onChange={handleChangeValue}
    />
)
}

export default CitySelector
import React, { FC, useEffect } from "react"
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
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);
    
    const handleChangeValue = (newValue: IComboBoxOption | null) => {
        const selectedValue: ICity | null = cities.find(obj => obj.id === newValue?.id) || null;
        dispatch(setLocation(selectedValue))
    }

    useEffect(() => {
        console.log(filters)
    }, [])

    return (
    <ComboBox
        value={comboBoxOptions.find(item => item.id === filters.location?.id) || null}
        label="Направление"
        options={comboBoxOptions}
        width={width}
        onChange={handleChangeValue}
    />
)
}

export default CitySelector
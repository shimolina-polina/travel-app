import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { IFiltersSlice } from "../../interfaces/store/filtersSlice/IFiltersSlice";
import { RootState } from "../../store/store";

const SideBar = () => {
    const filters: IFiltersSlice = useSelector((state: RootState) => state.filtersReducer);

    return (
        <>
         <Typography>{filters.location?.name}</Typography>
        </>
    )
   
}

export default SideBar;
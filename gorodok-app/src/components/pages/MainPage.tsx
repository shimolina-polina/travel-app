import React from "react";
import { Blog, FiltersSelector, Offer } from "../organisms/organisms";
import { Box } from "@mui/material";
const MainPage = () => {

  return (
    <Box>
      <FiltersSelector/>
      <Blog/>
      <Offer/>
    </Box>
  );
};

export default MainPage;

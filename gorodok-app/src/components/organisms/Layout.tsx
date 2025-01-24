import { Box } from "@mui/material";
import { CustomAppBar, Footer } from "../molecules/molecules";
import React, { FC } from "react";
import { ILayoutProps } from "../../interfaces/organisms/Layout/ILayoutProps";

const Layout: FC<ILayoutProps> = ({ children }) => {

  return (
    <Box sx={{ display: "flex", justifyContent: 'center', flexDirection: "column", minHeight: "100vh", bgcolor: 'grey.100' }}>
      <CustomAppBar/>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Footer/>
    </Box>
  );
};

export default Layout;
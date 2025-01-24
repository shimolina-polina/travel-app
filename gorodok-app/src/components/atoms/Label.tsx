import { Typography } from "@mui/material"
import React, { FC } from "react"

interface ILabel {
    children: React.ReactNode
}

const Label: FC <ILabel> = ({children}) => {
    return (
        <Typography>
            {children}
        </Typography>
    )
}


export default Label
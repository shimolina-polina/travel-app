import { Star } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box } from '@mui/material';
import React, { FC } from 'react';


const Stars:FC<{count: number}> = ({count}) => {
    return (
        <>
            {Array.from({ length: count }, (_, index) => (
                <StarIcon key={index} htmlColor ="#374785"/>
            ))}
            {Array.from({ length: 5 - count }, (_, index) => (
                <StarBorderIcon key={index} htmlColor ="#374785"/>
            ))}
        </>
    )
}

export default Stars
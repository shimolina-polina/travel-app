import { Box } from "@mui/material";
import React from "react";

const SvgImage = () => {
    return (
    <Box sx={{ width: '100%', height: 'auto' }}>
        <svg viewBox="70 100 160 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="shapeClip">
                    <path d="M 90 100
                             L 220 100
                             Q 230 100 230 110
                             L 230 190
                             Q 230 200 220 200
                             L 150 200
                             Q 140 200 140 190
                             L 140 180
                             Q 140 170 130 170
                             L 80 170
                             Q 70 170 70 160
                             L 70 110
                             Q 70 100 80 100
                             Z
                             "
                            />
                    </clipPath>
            </defs>

            <image
                href={process.env.PUBLIC_URL + "/1738279556051.png"}
                x="70"
                y="90"
                width="160"
                height="120"
                clipPath="url(#shapeClip)"
            />
        </svg>
    </Box>
    )
}

export default SvgImage;
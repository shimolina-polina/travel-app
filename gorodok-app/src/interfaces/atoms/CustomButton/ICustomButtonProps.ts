import { ReactNode } from "react";

export interface ICustomButtonProps {
    children: ReactNode;
    sx?: Object
    width?: number | string
    height?: number | string
    color?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement>) => void;
  }
  
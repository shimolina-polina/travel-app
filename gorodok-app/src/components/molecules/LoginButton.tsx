import { TextField, Button, Link, Popover, Typography, Box } from "@mui/material";
import React, { useReducer, useState } from "react";
import { CustomButton } from "../atoms/atoms";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IUserData } from "../../interfaces/molecules/LoginButton/IUserData";
import { IUserDataAction, UserDataType } from "../../interfaces/molecules/LoginButton/IUserDataAction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setIsAuthenticated } from "../../store/authSlice";

const userDataReducer = (state: IUserData, action: IUserDataAction): IUserData => {
  switch (action.type) {
    case UserDataType.setLogin:
      return {...state, login: action.payload as string}
    case UserDataType.setPassword:
      return {...state, password: action.payload as string}
    default:
      return state
  }
}

const LoginButton = () => {

    const dispatch = useDispatch();

    const isAuthenticated: boolean = useSelector((state: RootState) => state.authReducer.isAuthenticated);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleClick = (event?: React.MouseEvent<HTMLElement>) => {
      if (event) {
        setAnchorEl(event.currentTarget);
      }
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const isLoginDialogOpen = Boolean(anchorEl);

    const [userData, setUserData] = useReducer(userDataReducer, {
        login: "",
        password: ""
      })

      
    const handleLogout = () => {
      dispatch(setIsAuthenticated(false))
    }
    
    
    const handleLogin = () => {
      dispatch(setIsAuthenticated(true))
      handleClose();
    };

    return (
        <Box>
        {!isAuthenticated? 
        <CustomButton 
          color="#374785" 
          startIcon={<AccountCircleIcon />} 
          endIcon={isLoginDialogOpen? <ArrowDropUpIcon /> : <ArrowDropDownIcon/>} 
          onClick={handleClick}
        >
            Войти
        </CustomButton>
        :
        <CustomButton 
          color="#374785" 
          onClick={handleLogout}
        >
            Выйти
        </CustomButton>
      }
      <Popover
  open={isLoginDialogOpen}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}
  slotProps={{
    paper: {
      sx: {
        width: '450px'
      },
    }
  }}
>
  <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Вход</Typography>
    <Typography>
      <b>Войти</b> или <Link href="/">Зарегистрироваться</Link>
    </Typography>
    <TextField
      autoFocus
      margin="none"
      id="login"
      label="Логин"
      type="text"
      fullWidth
      value={userData.login}
      onChange={(event) => dispatch({ type: UserDataType.setLogin, payload: event.target.value })}
    />

    <TextField
      margin="none"
      id="password"
      label="Пароль"
      type="password"
      fullWidth
      value={userData.password}
      onChange={(event) => dispatch({ type: UserDataType.setPassword, payload: event.target.value })}
    />

    <CustomButton
      onClick={handleLogin}
      fullWidth
      sx={{ height: 56, fontSize: '1rem', fontWeight: 'bold' }}
    >
      Войти
    </CustomButton>
  </Box>
</Popover>
      </Box>
    );
};

export default LoginButton
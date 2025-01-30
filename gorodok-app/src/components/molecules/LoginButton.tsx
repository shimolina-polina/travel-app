import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Link } from "@mui/material";
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

    const [userData, setUserData] = useReducer(userDataReducer, {
        login: "",
        password: ""
      })

    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState<boolean>(false);
      
    const handleLoginOpen = () => {
        setIsLoginDialogOpen(true);
    }

    const handleLogout = () => {
      dispatch(setIsAuthenticated(false))
    }
    
    const handleLoginClose = () => {
        setIsLoginDialogOpen(false);
    };
    
      const handleLogin = () => {
        dispatch(setIsAuthenticated(true))
        setIsLoginDialogOpen(false);
    };

    return (
        <>
        {!isAuthenticated? 
        <CustomButton 
          color="#374785" 
          startIcon={<AccountCircleIcon />} 
          endIcon={isLoginDialogOpen? <ArrowDropUpIcon /> : <ArrowDropDownIcon/>} 
          onClick={handleLoginOpen}
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
      <Dialog open={isLoginDialogOpen} onClose={handleLoginClose}>
          <DialogTitle>Вход</DialogTitle>
          <DialogContent>
              <DialogContentText>
                  <b>Войти</b> или <Link href="/">Зарегистрироваться</Link>
              </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  id="login"
                  label="Логин"
                  type="text"
                  fullWidth
                  value={userData.login}
                  onChange={(event) => dispatch({type: UserDataType.setLogin, payload: event.target.value})}
              />
              <TextField
                  margin="dense"
                  id="password"
                  label="Пароль"
                  type="password"
                  fullWidth
                  value={userData.password}
                  onChange={(event) => dispatch({type: UserDataType.setPassword, payload: event.target.value})}
              />
          </DialogContent>
          <DialogActions>
              <Button onClick={handleLogin}>Войти</Button>
          </DialogActions>
      </Dialog>
      </>
    );
};

export default LoginButton
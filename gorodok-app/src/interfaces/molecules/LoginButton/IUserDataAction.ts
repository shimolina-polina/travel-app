export enum UserDataType {
    setLogin = 'setLogin',
    setPassword = 'setPassword'
  }


export interface IUserDataAction {
    type: UserDataType
    payload?: number | string
  }

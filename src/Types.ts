import { ReactNode } from "react"

export type TTokenData = {
  exp: number
  [x: string]: any
}

export interface IAuthProvider {
  authConfig: TAuthConfig,
  children: ReactNode
}

export interface IAuthContext {
  token: string
  logOut: ()=>void,
  error: any
  tokenData?: TTokenData|null,
  idToken?: string,
}

export type TAuthConfig = {
  clientId:  string
  authorizationEndpoint:  string
  tokenEndpoint: string
  redirectUri:  string
  scope?:  string
  logoutEndpoint?:  string
  logoutRedirect?:  string
  preLogin?: Function
  postLogin?: Function
}

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    REFRESH_TOKEN,
  } from "./types";
  
  import AuthService from '../services/auth.services';
  
  export const register = (username, email, password) => (dispatch) => {
    return AuthService.register(username, email, password).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: {
            username: data.username,
            //password: data.password,
            authticationToken: data.authticationToken,
            refreshToken: data.refreshToken,
            expiresAt: data.expiresAt
          } },
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => async (dispatch) => {
    return AuthService.logout().then(
      () => {    
        dispatch({
          type: LOGOUT,
        });
      } 
    );
  };

  export const refreshToken = (refreshToken, username) => async (dispatch) => {
    return AuthService.refreshToken(refreshToken, username)
      .then(
        (data) => {
          dispatch({
            type: REFRESH_TOKEN,
            payload:{ user: data }
          })
        }
      )
  }

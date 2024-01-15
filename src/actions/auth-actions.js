import { authConstants } from './../constants/auth-constants';
import  LoginService  from './../services/auth-service'


export const authentication = (data) => async (dispatch) => {
    try {
      const res = await LoginService.userLogin(data);
  
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const updateUser = (data) =>  (dispatch) => {
    localStorage.setItem("user",JSON.stringify(data));
    dispatch({
          type: "USER_DATA_UPDATED",
          payload: data,
        });
    // try {
    //   //const res = await LoginService.userLogin(data);
  
    //   dispatch({
    //     type: authConstants.LOGIN_SUCCESS,
    //     payload: res.data,
    //   });
  
    //   return Promise.resolve(res.data);
    // } catch (err) {
    //   return Promise.reject(err);
    // }
  };
  
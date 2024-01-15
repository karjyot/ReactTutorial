import {
    authConstants
  } from "./../constants/auth-constants";
  

  let user = JSON.parse(localStorage.getItem('user'));
    const initialState = user ? { loggedIn: true, user } : {};
  function authReducer(loginData = initialState, action) {
  //  const { type, payload } = action;
  
    switch (action.type) {
      case authConstants.LOGIN_SUCCESS:
        return {
            loggingIn: true,
            user: action.user
          };
          case authConstants.UPDATE_USER:
            
            return {
                loggingIn: true,
                user: action.payload
              };
           console.log(action.userData)
            
  
    //   case RETRIEVE_TUTORIALS:
    //     return payload;
  
    //   case UPDATE_TUTORIAL:
    //     return tutorials.map((tutorial) => {
    //       if (tutorial.id === payload.id) {
    //         return {
    //           ...tutorial,
    //           ...payload,
    //         };
    //       } else {
    //         return tutorial;
    //       }
    //     });
  
    //   case DELETE_TUTORIAL:
    //     return tutorials.filter(({ id }) => id !== payload.id);
  
    //   case DELETE_ALL_TUTORIALS:
    //     return [];
  
      default:
        return loginData;
    }
  };
  
  export default authReducer;
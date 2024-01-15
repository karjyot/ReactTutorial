import {
    authConstants
  } from "./../constants/auth-constants";
  


  function userReducer(state = {}, action) {
  //  const { type, payload } = action;
  
    switch (action.type) {
        
        //   case authConstants.UPDATE_USER:
        //     console.log(action)
        //     return {
        //         loggingIn: true,
        //         users: action.userData
        //       };
          
  
      default:
        return state;
    }
  };
  
  export default userReducer;
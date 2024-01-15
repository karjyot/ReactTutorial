import axios from "axios";

 axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json"
  }
});

class LoginService {

    userLogin(data) {
    
        return axios.post("http://localhost:4000/auth",data);
      }

      getAccessToken(){
        const user = JSON.parse(localStorage.getItem("user"));
        return user?.token;
      }
      setAccessToken(token){
        localStorage.setItem("user", JSON.stringify(token));
      }


}
export default new LoginService();
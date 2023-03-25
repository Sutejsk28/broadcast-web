import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  async login(username, password) {
    return axios
      .post(API_URL + "login", { username, password })
      .then((response) => {
        if (response.data.authticationToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  async logout() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.authticationToken);
    localStorage.removeItem("user");
    return axios
        .post(API_URL + "logout", {
          refreshToken: user.refreshToken,
          username: user.username
        })
        .then( (response) => {
          console.log(response.data);
          return response.data
        } )
  }

  async register(username, email, password) {
    const res = await axios.post(API_URL + "signup", {
      name: username,
      email: email,
      password: password,
    });
    console.log(res.data);
    return res
  }

  async refreshToken(token, username) {
    const response = await axios.post(API_URL + "refresh/token" , {
      refreshToken: token,
      username: username
    })
    console.log(response.data);
    return response.data
  }

}

export default new AuthService();
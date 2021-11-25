import axios from "axios";
import authHeader from "../AuthenticationService/auth-header";
import  config from "../../config/config";

const API_URL_SERVICE = config.API_URL_BACKEND + "/api/user/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL_SERVICE + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL_SERVICE + 'user', { headers: authHeader() });
  }
}

export default new UserService();

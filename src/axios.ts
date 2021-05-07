import axios from "axios";

export let API = axios.create({
  baseURL: "https:/dreamsapi.herokuapp.com/"
})
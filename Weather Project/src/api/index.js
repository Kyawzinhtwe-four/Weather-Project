import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const appid = "15ced36b55cad17df1abfdc15081b2ac";

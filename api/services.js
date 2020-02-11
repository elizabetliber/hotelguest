import axios from "axios";
import { endpoint } from "./endpoint";

export const fetchServices = (params = {}) => {
  return axios({
    url: `${endpoint}/services`,
    headers: {
      "Content-type": "application/json"
    },
    params: {},
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data;
  });
};

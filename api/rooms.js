import axios from "axios";
import { endpoint } from "./endpoint";

export const fetchRooms = (params = {}) => {
  return axios({
    url: `${endpoint}/rooms`,
    headers: {
      "Content-type": "application/json"
    },
    params: {
      _sort: 'number:ASC',
      ...params
    },
    method: "GET",
    data: null
  }).then(({ data }) => {
    return data;
  });
};

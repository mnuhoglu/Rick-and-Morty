import axios from "axios";
import { API } from "../constants/config";

export const getLocations = async (page) => {
  try {
    const response = await axios.get(`${API}/location/?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

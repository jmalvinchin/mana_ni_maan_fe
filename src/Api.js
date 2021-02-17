import axios from "axios";

const BASE_URL = "http://localhost:3000"

export function listBakingSlots() {
  return axios.get(`${BASE_URL}/api/v1/baking_slots`);
};

export function listOrders() {
  return axios.get(`${BASE_URL}/api/v1/orders`);
};

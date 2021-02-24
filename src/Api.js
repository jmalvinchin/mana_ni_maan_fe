import axios from "axios"
import { getToken } from "./utils/Token"

const BASE_URL = "http://localhost:3000"
const API_URL = `${BASE_URL}/api/v1`
export const LIST_BAKING_SLOTS = `${BASE_URL}/api/v1/baking_slots`;
export const LIST_ORDERS = `${BASE_URL}/api/v1/orders`;
export const LOGIN = `${BASE_URL}/auth/sign_in`;

export const apiInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json", ...getToken() }
});

export function signin(email, password) {
  return axios.post(`${BASE_URL}/auth/sign_in`, { email: email, password: password })
}

export function listBakingSlots() {
  return apiInstance.get(`${API_URL}/baking_slots`)
}

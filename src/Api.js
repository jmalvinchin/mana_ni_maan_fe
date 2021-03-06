import axios from "axios"
import { getToken } from "./utils/Token"

const BASE_URL = "http://localhost:3000"
const API_URL = `${BASE_URL}/api/v1`

export const apiInstance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: { "Content-Type": "application/json", ...getToken() }
});

const headers = getToken()

export function signin(email, password) {
  return axios.post(`${BASE_URL}/auth/sign_in`, { email: email, password: password })
}

export function listBakingSlots() {
  return axios.get(`${API_URL}/baking_slots`, { headers: {...headers} })
}

export function listOrders() {
  return axios.get(`${API_URL}/orders`, { headers: {...headers} })
}

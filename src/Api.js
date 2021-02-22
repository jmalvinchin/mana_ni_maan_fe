import React from "react"
import axios from "axios";
import { useAuth } from "./AuthProvider"

function Api() {
  const BASE_URL = "http://localhost:3000"
  const auth = useAuth();
  const formattedHeaders = () => {
    return {
      "access-token": auth.headers.auth_token,
      "client": auth.headers.client,
      "uid": auth.headers.client,
      "expiry": auth.headers.expiry,
      "token-type": auth.headers.token_type
    }
  }

  function listBakingSlots() {
    debugger
    return axios.get(`${BASE_URL}/api/v1/baking_slots`, { headers:  { ...formattedHeaders } } );
  };

  function listOrders() {
    return axios.get(`${BASE_URL}/api/v1/orders`);
  };
};

export default Api;

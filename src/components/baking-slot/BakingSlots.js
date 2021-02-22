import React, { useState, useEffect, useContext } from "react";
import axios from "axios"
import Api from "../../Api"
import { useAuth } from "../../AuthProvider"

function BakingSlots() {
  const [slots, setSlots] = useState([])
  // const { headers } = useContext(AuthContext)
  const auth = useAuth();
  const formattedHeaders = {
    "access-token": auth.headers.access_token,
    "client": auth.headers.client,
    "uid": auth.headers.uid,
    "expiry": auth.headers.expiry,
    "token-type": auth.headers.token_type
  }

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/baking_slots", { headers: {...formattedHeaders} } )
      .then(res => {
        setSlots(res.data);
      })
  }, []);

  return (
    <div>
      <h1>Baking Slots!</h1>
      <ul>
        {
          slots.map((slot) => {
            return (
              <li key={slot.id}>{slot.slot}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default BakingSlots;

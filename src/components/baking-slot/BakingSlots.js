import React, { useState, useEffect } from "react";
import axios from "axios"
import { LIST_BAKING_SLOTS  } from "../../Api"
import { useAuth, requestHeaders } from "../../AuthProvider"
import Nav from "../common/Nav"

function BakingSlots() {
  const [slots, setSlots] = useState([])
  const headers = requestHeaders(useAuth().headers || {})

  useEffect(() => {
    axios.get(LIST_BAKING_SLOTS, { headers: {...headers} } )
      .then(res => {
        setSlots(res.data);
      })
  }, []);

  return (
    <div className="box-border grid grid-cols-3">
      <Nav />
      <div className="col-start-2 col-end-3">
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
    </div>
  );
}

export default BakingSlots;

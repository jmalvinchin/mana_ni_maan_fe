import React, { useState, useEffect } from "react";
import { listBakingSlots } from "../../Api"
import axios from "axios"

function BakingSlots() {
  const [slots, setSlots] = useState([])

  useEffect(() => {
    listBakingSlots()
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

import React, { Fragment, useState, useEffect } from "react";
import axios from "axios"
import { LIST_BAKING_SLOTS  } from "../../Api"
import { useAuth, requestHeaders } from "../../AuthProvider"
import { PageContainer } from "../app"

function BakingSlots() {
  const [slots, setSlots] = useState([])

  const headers = requestHeaders(useAuth().headers || {})

  // Might have optimization issues since headers is an object
  useEffect(() => {
    axios.get(LIST_BAKING_SLOTS, { headers: {...headers} } )
      .then(res => {
        setSlots(res.data);
      })
  }, [headers]);

  return (
    <PageContainer>
      <Fragment>
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
      </Fragment>
    </PageContainer>
  );
}

export default BakingSlots;

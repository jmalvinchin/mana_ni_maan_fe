import React, { Fragment, useState, useEffect, useMemo } from "react";
import axios from "axios"
import { LIST_BAKING_SLOTS  } from "../../Api"
import { useAuth, requestHeaders } from "../../AuthProvider"
import { PageContainer } from "../app"
import Table from "../common/Table"

function BakingSlots() {
  const [loading, setLoading] = useState(true)
  const [slots, setSlots] = useState([])

  const headers = requestHeaders(useAuth().headers || {})
  const columns = useMemo(() => [
    {
      Header: "Slot",
      accessor: "slot"
    },
    {
      Header: "Allocation",
      accessor: "slot_count",
      Cell: props => {
        return `${props.row.original.slot_count}/${props.row.original.max_slots}`
      }
    }
  ], [])

  // Might have optimization issues since headers is an object
  useEffect(() => {
    let mounted = true
    axios.get(LIST_BAKING_SLOTS, { headers: {...headers} } )
      .then(res => {
        if(mounted) {
          setSlots(res.data);
          setLoading(false);
        };
      })

    return () => ( mounted = false );
  }, [headers]);

  return (
    <PageContainer>
      <Fragment>
        {
          loading ? (
            <p>Loading..</p>
          ) : (
            <Table columns={columns} data={slots} />
          )
        }
      </Fragment>
    </PageContainer>
  );
}

export default BakingSlots;

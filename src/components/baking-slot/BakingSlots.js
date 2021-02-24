import React, { Fragment, useState, useEffect, useMemo } from "react";
import { PageContainer } from "../app"
import { listBakingSlots } from "../../Api"
import Table from "../common/Table"

function BakingSlots() {
  const [loading, setLoading] = useState(true)
  const [slots, setSlots] = useState([])

  // const headers = requestHeaders(useAuth().headers || {})
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
    // axios.get("http://localhost:3000/api/v1/baking_slots")
    listBakingSlots()
      .then(res => {
        if(mounted) {
          setSlots(res.data);
          setLoading(false);
        };
      })

    return () => ( mounted = false );
  }, []);

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

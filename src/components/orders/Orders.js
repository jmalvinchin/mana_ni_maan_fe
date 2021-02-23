import React, { Fragment, useState, useEffect, useMemo } from "react";
import axios from "axios"
import { useTable } from "react-table"

import { LIST_ORDERS  } from "../../Api"
import { useAuth, requestHeaders } from "../../AuthProvider"
import { PageContainer } from "../app"
import Table from "../common/Table"

function Orders() {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const headers = requestHeaders(useAuth().headers || {})

  // Might have optimization issues as header is an object
  useEffect(() => {
    axios.get(LIST_ORDERS, { headers: {...headers} } )
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
  }, [headers]);

  const columns = useMemo(() => [
    {
      Header: "Reference Code",
      accessor: "reference_code"
    },
    {
      Header: "Paid",
      accessor: "paid"
    },
    {
      Header: "Slot Count",
      accessor: "slot_count"
    }
  ], []);

  return (
    <PageContainer>
      <Fragment>
        <h1>Orders!</h1>
        {
          loading ? (
            <p>Loading..</p>
          ) : (
            <Table columns={columns} data={orders} />
          )
        }
      </Fragment>
    </PageContainer>
  );
};

export default Orders;

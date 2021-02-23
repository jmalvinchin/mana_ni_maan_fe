import React, { Fragment, useState, useEffect } from "react";
import axios from "axios"
import { LIST_ORDERS  } from "../../Api"
import { useAuth, requestHeaders } from "../../AuthProvider"
import { PageContainer } from "../app"

function Orders() {
  const [orders, setOrders] = useState([])
  const headers = requestHeaders(useAuth().headers || {})

  // Might have optimization issues as header is an object
  useEffect(() => {
    axios.get(LIST_ORDERS, { headers: {...headers} } )
      .then(res => {
        setOrders(res.data);
      })
  }, [headers]);

  return (
    <PageContainer>
      <Fragment>
        <h1>Orders!</h1>
        <table>
          <thead>
            <tr>
              <th>Reference Code</th>
              <th>Paid</th>
              <th>Slot Count</th>
            </tr>
          </thead>
          <tbody>
          {
            orders.map((order) => {
              return (
                <tr key={order.id}>
                  <td>{order.reference_code}</td>
                  <td>{order.paid}</td>
                  <td>{order.slot_count}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </Fragment>
    </PageContainer>
  );
};

export default Orders;

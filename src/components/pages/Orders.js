import React, { useState, useEffect, useContext } from "react";

import { FirebaseContext } from "../../firebase";
import { Order } from "../ui/Order";

export const Orders = () => {
  const { firebase } = useContext(FirebaseContext);

  // Orders
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = () => {
      firebase.db
        .collection("orders")
        .where("completed", "==", false)
        .onSnapshot(handleSnapshot);
    };
    getOrders();
  }, []);

  function handleSnapshot(snapshot) {
    const orders = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    setOrders(orders);
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Ordenes</h1>
      <div className="sm:flex sm:flex-wrap -mx-3">
        {orders.map((order) => (
        <Order key={orders.id} order={order} />
        ))}
      </div>
    </>
  );
};

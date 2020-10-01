import React from "react";

export const Order = ({ order }) => {
  return (
    <div className="sm:w-1/2 lg:1/3 px-2 mb-4">
      <div className="p-3 shadow-md bg-white">
        <h1 className="text-yellow-600 text-lg font-bold">{order.id}</h1>
        {order.order.map((meals) => (
          <p className="text-gray-600">{meals.quantity} {meals.name}</p>
          ))}
          <p className="text-gray-700 font-bold">Total a pagar: ${order.total}</p>

          {!order.deliveryTime && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Timpo de entrega
              </label>
              <input
                type="number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                min="1"
                max="30"
                placeholder="20"
              />
              <button
                type="button"
                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              >
                Definir tiempo
              </button>
            </div>
          )}
      </div>
    </div>
  );
};
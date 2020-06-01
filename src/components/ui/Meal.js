import React from 'react'

export const Meal = ({ meal: { name, image, existence, category, price, description } }) => {

  return (
    <article className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className="lg:flex">
          <div className="lg:w-5/12 xl:w-3/12">
            <img src={image} alt={name} />
          </div>
          <div className="lg:w-7/12 xl:w-9/12 pl-5">
            <h1 className="font-bold text-2xl text-yellow-600 mb-4">
              {name}
            </h1>
            <p className="text-gray-600 mb-4">Categoría: {''}
              <span className="text-gray-700 font-bold">{category.toUpperCase()}</span>
            </p>
            <p className="text-gray-600 mb-4">
              {description}
            </p>
            <p className="text-gray-600 mb-4">Precio: {''}
              <span className="text-gray-700 font-bold">$ {price}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

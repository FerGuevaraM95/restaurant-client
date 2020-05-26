import React from 'react';
import { useFormik } from 'formik';

export const NewMeal = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: '',
      description: ''
    },
    onSubmit: data => {
      console.log(data);
    }
  });

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Nuevo Platillo</h1>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
              <input 
                id="name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Nombre del Platillo"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Precio</label>
              <input
                id="price"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="numer"
                placeholder="$20"
                min="0"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Categoría</label>
              <select
                id="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
              >
                <option value="">-- Seleccione --</option>
                <option value="breakfast">Desayuno</option>
                <option value="lunch">Comida</option>
                <option value="dinner">Cena</option>
                <option value="drinks">Bebidas</option>
                <option value="desserts">Postres</option>
                <option value="salads">Ensaladas</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Imagen</label>
              <input
                id="image"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                value={formik.values.image}
                onChange={formik.handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Descripción</label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                placeholder="Descripción del Platillo"
                value={formik.values.description}
                onChange={formik.handleChange}

              ></textarea>
            </div>

            <input
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Agregar Platillo"
            />
          </form>
        </div>
      </div>
    </>
  );
}

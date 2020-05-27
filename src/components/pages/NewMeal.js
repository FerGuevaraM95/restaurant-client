import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FirebaseContext } from '../../firebase';

export const NewMeal = () => {

  // Context with Firebase operations
  const { firebase } = useContext(FirebaseContext);

  console.log(firebase);

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      category: '',
      image: '',
      description: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
                  .min(3, "El nombre del platillo debe tener al menos 3 caracteres")
                  .required("El nombre del platillo es obligatorio"),
      price: Yup.number()
                  .min(1, "Debes agregar un número")
                  .required("El precio es obligatorio"),          
      category: Yup.string()
                  .required("La categoría es obligatoria"),  
      description: Yup.string()
                  .min(10, "La descripción debe ser más larga")
                  .required("La descripción es obligatoria"),                        
    }),
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
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.name && formik.errors.name ? (
              <div className="mb-5 p-4 bg-red-100 border-l-4 border-red-500 text-red-700" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.name}</p>
              </div>
            ): null}

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
                onBlur={formik.handleBlur}
              />
            </div>

            {formik.touched.price && formik.errors.price ? (
              <div className="mb-5 p-4 bg-red-100 border-l-4 border-red-500 text-red-700" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.price}</p>
              </div>
            ): null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Categoría</label>
              <select
                id="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

            {formik.touched.category && formik.errors.category ? (
              <div className="mb-5 p-4 bg-red-100 border-l-4 border-red-500 text-red-700" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.category}</p>
              </div>
            ): null}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Imagen</label>
              <input
                id="image"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            {formik.touched.description && formik.errors.description ? (
              <div className="mb-5 p-4 bg-red-100 border-l-4 border-red-500 text-red-700" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.description}</p>
              </div>
            ): null}

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

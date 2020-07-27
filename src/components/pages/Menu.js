import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { FirebaseContext } from '../../firebase';

import { Meal } from '../ui/Meal';

export const Menu = () => {

  const [meals, setMeals] = useState([]);

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const getMeals = () => {
      firebase.db.collection('products').onSnapshot(handleSnapshot);

    };
    getMeals();
  }, []);

  // Snapshop for database in realtime
  function handleSnapshot(snapshop) {
    const meals = snapshop.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    setMeals(meals);
  };

  const renderMeals = (meals) => {
    return meals.map(meal => (
      <Meal
        key={meal.id}
        meal={meal}
      />
    ))
  }

  return (
    <>
      <h1 className="text-3xl font-light mb-4">Menú</h1>
      <Link to="/nuevo-platillo" className="mb-5 p-2 bg-blue-700 inline-block text-white font-bold uppercase">
        Agregar platillo
      </Link>

      <section>
        {renderMeals(meals)}
      </section>
    </>
  );
};

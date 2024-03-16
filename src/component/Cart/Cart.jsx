/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Preparing from "../Preparing/Preparing";
import { useState } from "react";

const Cart = ({cooks , setCooks }) => {
  const [preaparing, setPreparing] = useState([]);
  const handlePreaparing = ( prepare, recipe_id) =>{
    const newPreaparing = [...preaparing, prepare];
    setPreparing(newPreaparing);
    const preparingRecipe = cooks.filter(co=> co.recipe_id !== recipe_id);
    setCooks(preparingRecipe);
    
    
  }

  return (
    <div className="card bg-base-100 shadow-xl border flex items-center">
      <div>
        <h1 className="text-center text-2xl font-bold lexend-font mt-8   border-b-2 pb-2">
          Want to cook: <span>{cooks.length}</span>
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>

            {/* row 1 */}
            {cooks.map((cook, index) => (
              <tbody className="bg-gray-50">
                <tr>
                  <th>{index + 1}</th>
                  <td>{cook.recipe_name}</td>
                  <td>{cook.preparing_time}</td>
                  <td>{cook.calories}</td>
                  <td>
                    <button onClick={()=> handlePreaparing(cook, cook.recipe_id)} className="btn btn-success rounded-3xl">
                      Preparing
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div className="w-full">
      <Preparing preaparing={preaparing} handlePreaparing= {handlePreaparing}></Preparing>
        </div> 
    </div>
  );
};

export default Cart;

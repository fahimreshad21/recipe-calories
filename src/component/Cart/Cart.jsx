/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Preparing from "../Preparing/Preparing";
import { useState } from "react";
const Cart = ({ cooks, setCooks }) => {
  const [preparing, setPreparing] = useState([]);
  const handlePreparing = (prepare, recipe_id) => {
    const newPreparing = [...preparing, prepare];
    setPreparing(newPreparing);
    const preparingRecipe = cooks.filter((co) => co?.recipe_id !== recipe_id);
    setCooks(preparingRecipe);
  };
  return (
    <div className="card bg-base-100 shadow-xl border flex items-center">
      <div>
        <h1 className="text-center text-2xl font-bold lexend-font mt-8 border-b-2 pb-2">
          Want to cook: <span>{cooks?.length}</span>
        </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra text-[#282828B3] fira-font font-bold">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Names</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            {/* row */}
            {cooks.map((cook, index) => (
              <tbody className="bg-gray-50">
                <tr>
                  <th>{index + 1}</th>
                  <td>{cook?.recipe_name}</td>
                  <td>{cook?.preparing_time} minutes</td>
                  <td>{cook?.calories} calories</td>
                  <td>
                    <button
                      onClick={() => handlePreparing(cook, cook.recipe_id)}
                      className="btn btn-success rounded-3xl"
                    >
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
        <Preparing
          preparing={preparing}
          handlePreparing={handlePreparing}
        ></Preparing>
      </div>
    </div>
  );
};

export default Cart;

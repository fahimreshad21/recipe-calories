/* eslint-disable react/no-unescaped-entities */
import Card from "./Card/Card";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [cooks, setCooks] = useState([]);
  useEffect(() => {
    fetch("Recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleWantToCook = (recipe_id, recipe) => {
    const isExist = cooks.find((item) => item?.recipe_id === recipe_id);
    if (!isExist) {
      const newCook = [...cooks, recipe];
      setCooks(newCook);
      toast.success("Recipe added to cooking list!");
    } else {
      toast.warn("already exist");
    }
  };
  return (
    <div className="container mx-auto px-2">
      <div className="my-6 lg:my-12 text-center space-y-4">
        <h1 className="text-4xl lexend-font font-bold">Our Recipes</h1>
        <p className="font-extrabold fira-font text-[#150B2B99]">
          Our recipes are carefully created to ensure that they're not <br />
          only delicious but also practical and achievable. We understand that
          <br /> life can be busy, so we prioritize recipes that are both
          flavorful and time-efficient......
        </p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 grid md:grid-cols-2 gap-2 lg:gap-8 p-2 lg:p-0">
          {recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipe={recipe}
              handleWantToCook={handleWantToCook}
            ></Card>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-4 p-2 lg:p-0">
          <Cart cooks={cooks} setCooks={setCooks}></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Recipes;

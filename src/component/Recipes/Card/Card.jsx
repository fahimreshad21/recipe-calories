/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
const Card = ({ recipe, handleWantToCook }) => {
  const {
    recipe_id,
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl border">
        <figure className="p-2 lg:p-6 ">
          <img
            className="h-48 md:h-60 w-full object-cover rounded-xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body -mt-10">
          <h2 className="card-title lexend-font">{recipe_name}</h2>
          <p className="text-[#878787] fira-font">{short_description}</p>
          <hr />
          <h5 className="lexend-font text-xl font-medium">
            Ingredients: <span>{ingredients.length}</span>
          </h5>
          <div className="space-y-1 lg:space-y-2 fira-font h-full text-[#878787]">
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </div>
          <hr />
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5">
            <div className="flex items-center gap-2 text-[#282828CC] fira-font font-extrabold">
            <IoTimeOutline className="text-2xl lg:text-xl"/>
              <p>{preparing_time} mins</p>
            </div>
            <div className="flex items-center gap-2 text-[#282828CC] fira-font font-extrabold">
            <AiOutlineFire className="text-2xl lg:text-xl"/>
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions flex justify-center lg:justify-start mt-2">
            <button
              onClick={() => handleWantToCook(recipe_id, recipe)}
              className="btn bg-[#0BE58A] lexend-font text-lg rounded-3xl font-extrabold"
            >
              Wants to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

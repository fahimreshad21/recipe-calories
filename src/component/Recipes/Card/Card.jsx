/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
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
        <figure className="p-6 ">
          <img
            className="h-60 w-full object-cover rounded-xl"
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body -mt-10">
          <h2 className="card-title lexend-font">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr />
          <h5 className="lexend-font text-xl">
            Ingredients: <span>{ingredients.length}</span>
          </h5>
          <div className="space-y-2 fira-font h-full">
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </div>
          <hr />
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <img src="/src/assets/time.svg" alt="" />
              <p>{preparing_time} min</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/src/assets/Vector.svg" alt="" />
              <p>{calories} calories</p>
            </div>
          </div>
          <div className="card-actions mt-4">
            <button
              onClick={() => handleWantToCook(recipe_id, recipe)}
              className="btn btn-error lexend-font rounded-3xl"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

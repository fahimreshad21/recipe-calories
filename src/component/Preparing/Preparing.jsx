/* eslint-disable react/prop-types */
const Preparing = ({ preparing }) => {
  return (
    <div>
      <div>
        <h1 className="text-center text-2xl font-bold lexend-font mt-8 border-b-2 pb-2">
          {" "}
          Currently Cooking: <span>{preparing.length}</span>
        </h1>
      </div>
      <div className="text-[#282828B3] fira-font font-bold">
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
            {preparing.map((prepare, index) => (
              <tbody key={index} className="bg-gray-50">
                <tr>
                  <th>{index + 1}</th>
                  <td>{prepare.recipe_name}</td>
                  <td>{prepare.preparing_time} minutes</td>
                  <td>{prepare.calories} calories</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div className="flex justify-end gap-4 px-4 fira-font text-[#282828CC] font-bold mt-5 mb-10">
        <div>
          <h5>Total Time = </h5>
          <h6>{preparing.reduce((p, c) => p + c.preparing_time, 0)} minutes</h6>
        </div>
        <div>
          <h5>Total Calories = </h5>
          <h6>{preparing.reduce((p, c) => p + c.calories, 0)} calories</h6>
        </div>
      </div>
    </div>
  );
};

export default Preparing;

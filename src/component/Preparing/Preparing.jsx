/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const Preparing = ({preparing}) => {
    return (
        <div>
        <div>
        <h1 className="text-center text-2xl font-bold lexend-font mt-8 border-b-2 pb-2"> Currently Cooking: <span>{preparing.length}</span></h1>
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
            {preparing.map((prepare) => (
              <tbody className="bg-gray-50">
                <tr>
                  <th>1</th>
                  <td>{prepare.recipe_name}</td>
                  <td>{prepare.preparing_time}</td>
                  <td>{prepare.calories}</td>
                </tr>
              </tbody>
            ))}
        </table>
        </div>
       </div>
      </div>
    );
};

export default Preparing;
/* eslint-disable react/jsx-no-undef */
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import Recipes from "./component/Recipes/Recipes";
function App() {
  return (
    <div className="p-2">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
    </div>
  );
}

export default App;

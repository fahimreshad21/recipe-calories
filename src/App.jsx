/* eslint-disable react/jsx-no-undef */
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import Recipes from "./component/Recipes/Recipes";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Recipes></Recipes>
      <Footer></Footer>
    </div>
  );
}

export default App;

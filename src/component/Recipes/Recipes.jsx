import Card from "./Card/Card";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=> {
        fetch('/public/Recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    const handleWantToCook = recipe =>{
        console.log(recipe)
    }
    return (
        <div className="container mx-auto">
            <div className='my-12 text-center space-y-4'>
            <h1 className="text-4xl lexend-font font-bold">Our Recipes</h1>
            <p className="font-medium fira-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum blanditiis magnam <br /> temporibus aspernatur placeat debitis.</p>
            </div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 grid grid-cols-2 gap-8">
                {
                    recipes.map(recipe => <Card key={recipe.id} recipe= {recipe} handleWantToCook= {handleWantToCook}></Card>)
                }
                </div>
                <div className="col-span-4">
                <Cart handleWantToCook= {handleWantToCook}></Cart>
                </div>
            </div>
        </div>
        
    );
};

export default Recipes;
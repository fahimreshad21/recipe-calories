const Navbar = () => {
    return (
        <div className="flex items-center justify-between my-12 container mx-auto">       
            <h2 className="text-black text-3xl font-bold lexend-font">Recipe Calories</h2>
            <div className="space-x-8 text-[#150B2BB3] font-semibold fira-font">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex items-center gap-3 justify-center">
            <input className="bg-gray-200 rounded-3xl pl-6 py-2 font-medium" type="text" name="" id="" placeholder="Search" />
                <button className="p-1 bg-green-600 rounded-full"><img src="/src/assets/button.svg" alt="" /></button>
            </div>

        </div>
    );
};

export default Navbar;
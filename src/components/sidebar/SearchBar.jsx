import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Find a buddy"
            className="p-2 w-full bg-transparent border-b border-b-transparent focus:border-b-white text-white outline-none "
          />
        </form>
      </div>
      <div className=" flex items-center cursor-pointer p-2 gap-3 text-white hover:bg-purple-950">
        <img
          src="https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className=" w-12 h-12 rounded-full object-cover"
        />
        <div>
          <span>Jack More</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            placeholder="Find a buddy"
            className="p-2 w-full bg-transparent focus:border-b text-white outline-none"
          />
        </form>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/17977042/pexels-photo-17977042/free-photo-of-smiling-woman-in-purple-dress-on-vacation.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div>
          <span>Jack More</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

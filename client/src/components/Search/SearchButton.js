



import React from "react";

const SearchButton = ({onClick}) => {

    return (
        <div className="flex items-center justify-center">
            <button 
                className="w-64 bg-zinc-100 py-3 pl-2 font-semibold rounded-[10px]" 
                onClick={onClick}
            >               
                Search
            </button>
        </div>
        
    );
};

export default SearchButton;

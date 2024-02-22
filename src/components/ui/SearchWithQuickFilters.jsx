"use client";
import React, { useState } from 'react';
const SearchWithQuickFilters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const filters = ['Explore', 'UI/UX', 'Logo Design', 'Design Systems', 'MySQL', 'Urgent', 'Medical', 'Typography', 'Mobile Design', 'Web Design', 'React.js'];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        // Implement your search logic here
    };

    const selectFilter = (filter) => {
        console.log('Filter selected:', filter);
        // You can adjust the search term or directly apply the filter here
    };

    return (
        <div className="space-y-4 w-[1000px]">
            <div className="flex flex-wrap gap-2 mt-[180px] justify-center ">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => selectFilter(filter)}
                        className="border-2 bg-error-white border-error-black rounded-[40px] m-1 px-6 py-2 hover:bg-error-darkBlue hover:text-error-white"
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSearch} className="flex justify-center">
              <div className="relative w-full max-w-xl">
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  placeholder="Search"
                  className="w-full h-[60px] px-4 py-2 border border-error-darkBlue rounded-[40px] pl-[48px] pr-[48px]"
                />
                <button 
                  type="submit" 
                  className="absolute inset-y-[10px] right-[20px] bg-error-100 rounded-[40px] w-[40px] h-[40px] flex items-center justify-center"
                >
                  <img src= "images/search-icon.png" alt="Search" style={{ width: '20px', height: '20px'}} />
                </button>
              </div>
            </form>
        </div>
    );
};

export default SearchWithQuickFilters;

"use client";
import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase'; // Make sure this path is correct
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const SearchWithQuickFilters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState([]); // State to hold user-specific filters

    useEffect(() => {
        // Listen for changes to the auth state (i.e., user login/logout)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, fetch their skills
                fetchUserSkills(user.uid);
            } else {
                // User is signed out, clear filters
                setFilters([]);
            }
        });

        return () => unsubscribe(); // Cleanup subscription
    }, []);

    const fetchUserSkills = async (userId) => {
        try {
            const userDocRef = doc(db, "users", userId); // Adjust "users" to your users collection name
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
                const userData = userDoc.data();
                // Assuming the user's skills are stored in a field named "skills"
                // and it's an array of strings
                if (userData.skills && userData.skills.length > 0) {
                    setFilters(userData.skills);
                } else {
                    console.log("No skills found for user.");
                    setFilters([]); // Clear filters if none found
                }
            } else {
                console.log("No such user document!");
            }
        } catch (error) {
            console.error("Error fetching user skills:", error);
        }
    };

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
        <div className="space-y-5 w-[50%]">
            {/* <div className="flex flex-wrap gap-2 mt-[60px] justify-center ">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => selectFilter(filter)}
                        className="border-2 dark:bg-error-black bg-error-white dark:border-error-white border-error-black rounded-[40px] m-1 px-6 py-2 hover:bg-error-darkBlue hover:text-error-white dark:hover:bg-error-darkPink"
                    >
                        {filter}
                    </button>
                ))}
            </div> */}
            <form onSubmit={handleSearch} className="flex justify-center">
              <div className="relative w-full max-w-xl">
                <input 
                  type="text" 
                  value={searchTerm} 
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  placeholder="Search"
                  className="w-full h-[60px] px-4 py-2 border dark:border-error-white dark:bg-error-black border-error-darkBlue rounded-[40px] pl-[48px] pr-[48px]"
                />
                <button 
                  type="submit" 
                  className="absolute inset-y-[10px] right-[20px] dark:bg-error-darkPink bg-error-100 rounded-[40px] w-[40px] h-[40px] flex items-center justify-center"
                >
                  <img src= "images/search-icon.png" alt="Search" style={{ width: '20px', height: '20px'}} />
                </button>
              </div>
            </form>
        </div>
    );
};

export default SearchWithQuickFilters;

"use client";
import React from "react";

const SearchBar = () => {
  return (
    <form className="relative w-full">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full rounded-lg border 
          border-gray-300 bg-gray-50
          p-4 pl-10 text-sm text-gray-900 focus:border-violet-500 focus:ring-0 focus:ring-violet-500 focus:ring-offset-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-violet-500 dark:focus:ring-violet-500"
        placeholder="Search Mockups, Logos..."
        required
      />
      <button
        type="submit"
        className="absolute right-2.5 bottom-2.5 rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-800 focus:outline-none focus:ring-4 focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

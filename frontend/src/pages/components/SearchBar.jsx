import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex items-center justify-between w-80 px-3 py-2 ring-1 ring-gray-100 rounded-md shadow-sm bg-white">
            {/* Left Section: Search Icon + Input */}
            <div className="flex items-center space-x-2 flex-1">
                {/* <Search size={16} className="text-gray-400" /> */}
                <img src="./src/images/button_icons/search.png" alt="" className='w-4 h-4' />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent text-sm text-gray-600 placeholder-gray-400 focus:outline-none"
                />
            </div>

            {/* Right Section: Shortcut */}
            <div className="flex items-center space-x-1 text-xs text-gray-400">
                <span className="font-mono">⌘</span>
                <span>K</span>
            </div>
        </div>
    )
}

export default SearchBar
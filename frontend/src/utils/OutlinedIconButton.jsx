import React from 'react'
import { NavLink } from 'react-router-dom'

const OutlinedIconButton = ({ Path, IconSource }) => {
    return (
        <>
            <NavLink to={Path}>
                <button className="flex items-center justify-center rounded-md px-2 py-2 shadow ring-1 ring-gray-400 cursor-pointer">
                    <img
                        src={`/images/button_icons/${IconSource}`}
                        alt=""
                        className="h-4 w-4"
                    />
                </button>
            </NavLink >
        </>
    )
}

export default OutlinedIconButton
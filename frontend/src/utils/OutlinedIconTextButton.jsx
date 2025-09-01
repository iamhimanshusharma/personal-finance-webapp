import React from 'react'
import { NavLink } from 'react-router-dom'

const OutlinedIconTextButton = ({ Path, IconSource, ButtonText, ClassName, OnClickHandler }) => {
    return (
        <>

            <NavLink to={Path}>
                <button onClick={OnClickHandler} className={`${ClassName} flex items-center rounded-md px-3 py-2 shadow text-xs font-bold ring-1 ring-gray-400 cursor-pointer`}>
                    <img
                        src={`./src/images/button_icons/${IconSource}`}
                        alt=""
                        className="h-4 w-4 mr-2"
                    />
                    {ButtonText}
                </button>
            </NavLink >



        </>
    )
}

export default OutlinedIconTextButton
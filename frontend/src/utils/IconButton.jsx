import React from 'react'
import { NavLink } from 'react-router-dom'

const IconButton = ({ Path, IconSource }) => {
    return (
        <>
            <NavLink to={Path}>
                <button className="cursor-pointer"><img className="w-6 h-6" src={`/images/button_icons/${IconSource}`} alt="" /></button>
            </NavLink >

        </>
    )
}

export default IconButton
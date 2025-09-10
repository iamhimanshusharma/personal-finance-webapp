import React from 'react'
import IconTextButton from './utils/IconTextButton'
import OutlinedIconTextButton from './utils/OutlinedIconTextButton'
import { NavLink } from 'react-router-dom'

const HomeHeader = ({ children }) => {
    return (
        <>
            <div className='flex items-center justify-between p-3 shadow'>
                <NavLink to="/">
                    <div className='flex items-center'>
                        <img className="w-10 h-10" src="/images/button_icons/user.png" alt="" />
                        <p className='mx-3 text-xl font-bold'>Demo</p>
                    </div>
                </NavLink>
                <div className='flex items-center space-x-2'>
                    {children ? children : <OutlinedIconTextButton Path={"/signin"} IconSource={"start.png"} ButtonText={"Get Started"} />}
                </div>
            </div>
        </>
    )
}

export default HomeHeader
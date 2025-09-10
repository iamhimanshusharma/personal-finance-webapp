import React, { useState } from 'react'
import IconTextButton from '../utils/IconTextButton';
import OutlinedIconTextButton from '../utils/OutlinedIconTextButton';
import { useContext } from 'react';
import { SideBarContext } from '../contexts/SideBarContext';
import axios from 'axios';
import { USER_URI } from '../constants';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

    const [userProfileOption, setUserProfileOption] = useState(false);
    const { currUserData } = useContext(SideBarContext);
    const navigate = useNavigate();

    async function logoutHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.get(`${USER_URI}/logout`, {
                headers: {
                    "Content-Type": "application/json"
                }, withCredentials: true
            });
            if (response) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button onClick={() => setUserProfileOption(!userProfileOption)} className="cursor-pointer relative flex items-center justify-center rounded-md shadow ring-1 ring-gray-400">
                <img
                    src={`/images/button_icons/user.png`}
                    alt=""
                    className="h-8 w-8"
                />
            </button>

            {userProfileOption ? (<div className='bg-white absolute top-15 shadow-lg right-1 transition duration-1000 z-50 ring-1 ring-gray-300 rounded-md'>
                <p className='text-sm font-bold mx-4 mt-4 mb-3'>{currUserData.fullname}</p>
                <IconTextButton Path={"/profile"} IconSource={"user.png"} FilledIconSource={"user.png"} ButtonText={"Profile"} />
                <IconTextButton Path={"/"} IconSource={"home.png"} FilledIconSource={"home_filled.png"} ButtonText={"Dashboard"} />
                <IconTextButton OnClickHandler={logoutHandler} Path={"/logout"} IconSource={"user.png"} ButtonText={"Logout"} />
            </div>) : null}
        </>
    )
}

export default UserProfile
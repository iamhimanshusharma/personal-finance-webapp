import React, { useContext, useEffect } from 'react'
import HomeHeader from '../HomeHeader'
import OutlinedIconTextButton from '../utils/OutlinedIconTextButton'
import OutlinedTextInput from '../utils/OutlinedTextInput'
import { useState } from 'react'
import axios from "axios"
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie";
import { SideBarContext } from '../contexts/SideBarContext.js'
import { USER_URI } from '../constants.js';

const SignIn = () => {

    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        password: ""
    });

    const { sideBarShow, setSideBarShow, currUserData, setCurrUserData } = useContext(SideBarContext)
    const navigate = useNavigate();

    useEffect(() => {
        const userCookie = Cookies.get("token");

        if (userCookie) {
            navigate("/");
        }
    });


    function handleChange(e) {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setCurrUserData({ ...currUserData, [e.target.name]: e.target.value })
    }

    async function signinHandler(e) {
        e.preventDefault();
        try {
            const response = axios.post(`${USER_URI}/signin`, userData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            })
                .then(function (response) {
                    navigate("/")
                })
                .catch(function (error) {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <HomeHeader>
                <OutlinedIconTextButton Path={"/login"} IconSource={"auth.png"} ButtonText={"Login"} />
            </HomeHeader>

            <Toaster />

            <div className='flex items-center justify-center p-10'>
                <div className='max-w-sm shadow rounded-md px-3 py-4'>
                    <p className='text-xl font-bold text-center pb-5'>Sign In</p>
                    <div>
                        <OutlinedTextInput Title={"Full Name"} Placeholder={"Full Name"} Name={"fullname"} Value={userData.fullname} OnChange={handleChange} />
                    </div>
                    <div>
                        <OutlinedTextInput Title={"Email"} Placeholder={"Email"} Name={"email"} Value={userData.email} OnChange={handleChange} />
                    </div>
                    <div>
                        <OutlinedTextInput Title={"Password"} Placeholder={"Password"} Name={"password"} Value={userData.password} OnChange={handleChange} />
                    </div>
                    <div className='flex my-2 items-center justify-center'>
                        <OutlinedIconTextButton IconSource={"auth.png"} ButtonText={"Sign In"} OnClickHandler={signinHandler} ClassName={"px-18 bg-gray-100 hover:bg-gray-200"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn
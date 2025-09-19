import React, { useContext, useEffect, useState } from 'react'
import HomeHeader from '../HomeHeader'
import OutlinedIconTextButton from '../utils/OutlinedIconTextButton'
import OutlinedTextInput from '../utils/OutlinedTextInput'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { USER_URI } from '../constants.js'
import Cookies from "js-cookie"
import { UserContext } from '../contexts/UserContext.js'

const Login = () => {

    const [userLoginData, setUserLoginData] = useState({
        email: "",
        password: ""
    })
    const { sideBarShow, setSideBarShow, currUserData, setCurrUserData, login } = useContext(UserContext)
    const navigate = useNavigate();

    useEffect(() => {
        const userCookie = Cookies.get("token");

        if (userCookie) {
            login();
        }
    }, []);

    function handleChangeLogin(e) {
        setUserLoginData({ ...userLoginData, [e.target.name]: e.target.value });
    }

    async function loginHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${USER_URI}/login`, userLoginData, {
                headers: {
                    "Content-Type": "application/json"
                }, withCredentials: true
            });
            if (response) {
                setCurrUserData({ ...currUserData, fullname: response.data.user.fullname, email: response.data.user.email })
                login()
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <HomeHeader>
                <OutlinedIconTextButton Path={"/signin"} IconSource={"auth.png"} ButtonText={"Sign In"} />
            </HomeHeader>

            <div className='flex items-center justify-center p-10'>
                <div className='max-w-sm shadow rounded-md px-3 py-4'>
                    <p className='text-xl font-bold text-center pb-5'>Login</p>
                    <div>
                        <OutlinedTextInput Title={"Username or Email"} Placeholder={"Username or Email"} Name={"email"} Value={userLoginData.email} OnChange={handleChangeLogin} />
                    </div>
                    <div>
                        <OutlinedTextInput Title={"Password"} Placeholder={"Password"} Name={"password"} Value={userLoginData.password} OnChange={handleChangeLogin} />
                    </div>
                    <div className='flex my-2 items-center justify-center'>
                        <OutlinedIconTextButton IconSource={"auth.png"} ButtonText={"Login"} OnClickHandler={loginHandler} ClassName={"px-19 bg-gray-100 hover:bg-gray-200"} />
                    </div>
                </div>
            </div >

        </>
    )
}

export default Login
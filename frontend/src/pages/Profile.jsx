import React, { useContext } from 'react'
import ContentsHeader from '../contents/ContentsHeader'
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
    const { currUserData } = useContext(UserContext);
    console.log(currUserData);
    return (
        <>
            <ContentsHeader Title={"Profile"} />
            <div className='shadow rounded-md p-4'>
                <div className='flex justify-center'>
                    <div>
                        <img className="h-50 w-50 ring-1 rounded-full" src="/images/other_images/panda.jpg" alt="" />
                    </div>
                    <div>
                        <p className='text-3xl font-bold m-4'>{currUserData.fullname}</p>
                        <p className='text-xl font-bold my-2 mx-4'>{currUserData.email}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Profile
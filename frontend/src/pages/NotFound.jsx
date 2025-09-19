import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {



    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-black">
            <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
            <p className="mt-6 text-lg text-gray-400">
                Oops! The page you are looking for doesn’t exist.
            </p>

            <div className="mt-8">
                <Link
                    to="/"
                    className="relative inline-block text-sm font-medium group focus:outline-none focus:ring"
                >

                    <span className="relative block px-8 py-3 border border-current rounded-md hover:bg-gray-100">
                        Go Back Home
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
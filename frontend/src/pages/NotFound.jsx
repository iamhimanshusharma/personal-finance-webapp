import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
            <div className="bg-blue-600 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <p className="mt-6 text-lg text-gray-400">
                Oops! The page you are looking for doesn’t exist.
            </p>

            <div className="mt-8">
                <Link
                    to="/"
                    className="relative inline-block text-sm font-medium text-blue-600 group focus:outline-none focus:ring"
                >
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>

                    <span className="relative block px-8 py-3 bg-gray-900 border border-current">
                        Go Back Home
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
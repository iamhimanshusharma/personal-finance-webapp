import React from 'react'
import HomeHeader from '../HomeHeader'

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
            {/* Sticky Navbar */}
            <div className="sticky top-0 z-50 shadow">
                <HomeHeader />
            </div>

            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 py-5 max-w-7xl mx-auto">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Take Control of Your <span className="text-blue-600">Finances</span>
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Track expenses, manage budgets, and plan your future—all in one place.
                    </p>
                    <div className="space-x-4">
                        <button className="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                            Get Started
                        </button>
                        <button className="px-6 py-3 text-lg font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
                        alt="Finance Illustration"
                        className="w-80 md:w-96 drop-shadow-lg"
                    />
                </div>
            </section>

            {/* Features */}
            <section id="features" className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-8 text-center">
                    <h3 className="text-3xl font-bold mb-12">Why Choose FinTrack?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png" alt="Budgeting" className="w-16 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold">Smart Budgeting</h4>
                            <p className="text-gray-600 mt-2">Plan and track your expenses effortlessly with smart insights.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135706.png" alt="Reports" className="w-16 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold">Detailed Reports</h4>
                            <p className="text-gray-600 mt-2">Understand where your money goes with easy-to-read charts.</p>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="Goals" className="w-16 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold">Goal Tracking</h4>
                            <p className="text-gray-600 mt-2">Set savings goals and watch your progress grow over time.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="bg-gray-900 text-gray-300 py-8">
                <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2025 FinTrack. All rights reserved.</p>
                    <div className="space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                        <a href="#" className="hover:text-white">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home

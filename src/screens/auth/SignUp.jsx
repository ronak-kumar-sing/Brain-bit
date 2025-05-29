import React from 'react'

function Signup() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-transparent pointer-events-none">
        <div className="bg-gray-900/10 backdrop-blur-md p-8 rounded-lg shadow-2xl w-1/3 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pointer-events-auto text-white placeholder-gray-400"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pointer-events-auto text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pointer-events-auto text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pointer-events-auto text-white placeholder-gray-400"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-1/4 bg-zinc-600 text-white py-2 rounded hover:bg-zinc-700 transition duration-200 pointer-events-auto cursor-pointer"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-300">
                If you have an account?{' '}
                <a
                  href="/login" // Changed from /signup to /login for logical flow
                  className="text-blue-400 hover:text-blue-300 underline pointer-events-auto"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup

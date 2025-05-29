import React from 'react'

function Login() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-transparent pointer-events-none">
        <div className="bg-gray-900/10 backdrop-blur-md p-8 rounded-lg shadow-2xl w-96 border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-200 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pointer-events-auto text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-200 mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pointer-events-auto text-white placeholder-gray-400"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 pointer-events-auto"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <p className="text-gray-300">
                Don't have an account?{' '}
                <a
                  href="/signup"
                  className="text-blue-400 hover:text-blue-300 underline pointer-events-auto"
                >
                  Sign up here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
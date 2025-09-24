"use client"

import { useState } from "react"

export default function AuthPage(){
    const [isSignUp, setSignUp] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-red-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-md w-full space-y-8 p-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">SinghMatch</h1>
                    <p className="text-gray-600 dark:text-gray-400"> {isSignUp ? "Create an account" : "Sign in to your account"}</p>
                </div>
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email:</label>
                    <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"></input>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password:</label>
                    <input id="password" type="password" required value={password} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your password" className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:text-white"></input>
                </div>
                {error && (
                    <div className="text-red-600 dark:text-red-400 text-sm">
                        {error}
                    </div>
                )}
                <button type="submit" disabled={loading}className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50">
                    {loading? "Loading..." : isSignUp? "Sign Up" : "Sign In"}
                </button>
            </form>
            <div className="text-center">
                <button className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 text-sm" onClick={() => setSignUp(!isSignUp)}>
                    {isSignUp? "Already have an account? Sign in" : "Don't have an account? Sign up!"}
                </button>
            </div>
            </div>
        </div>
    )
}
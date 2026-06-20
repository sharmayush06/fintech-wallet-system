import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            if (!email || !password) {
                setError('Please fill in all fields')
                return
            }
            setTimeout(() => {
                navigate('/dashboard')
            }, 500)
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-sky-50 to-slate-50 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Logo Section */}
                <div className="flex flex-col items-center mb-8">
                    <div className="p-3 rounded-lg bg-linear-to-br from-sky-400 to-sky-600 shadow-lg mb-4 w-12 h-12 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">💳</span>
                    </div>
                    <h1 className="text-3xl font-bold text-sky-600">SwiftPay</h1>
                    <p className="text-slate-600 text-sm mt-1">Fast & Secure Payments</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-slate-100">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h2>
                    <p className="text-slate-600 text-sm mb-6">Sign in to your account to continue</p>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-600 text-sm font-medium">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full px-4 py-2.5 pr-12 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password Link */}
                        <div className="flex justify-end">
                            <NavLink
                                to="#"
                                className="text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors"
                            >
                                Forgot password?
                            </NavLink>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-linear-to-r from-sky-500 to-sky-600 text-white font-semibold py-2.5 rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="flex-1 h-px bg-slate-200"></div>
                        <span className="text-xs text-slate-500">New to SwiftPay?</span>
                        <div className="flex-1 h-px bg-slate-200"></div>
                    </div>

                    {/* Register Link */}
                    <NavLink
                        to="/register"
                        className="block w-full border border-sky-300 text-sky-600 font-semibold py-2.5 rounded-lg hover:bg-sky-50 transition-all text-center"
                    >
                        Create Account
                    </NavLink>
                </div>

                {/* Footer */}
                <p className="text-center text-slate-600 text-xs mt-6">
                    By signing in, you agree to our{' '}
                    <NavLink to="#" className="text-sky-600 hover:text-sky-700 font-medium">
                        Terms of Service
                    </NavLink>
                    {' '}and{' '}
                    <NavLink to="#" className="text-sky-600 hover:text-sky-700 font-medium">
                        Privacy Policy
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Login

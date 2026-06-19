import React from 'react'
import {NavLink} from 'react-router-dom'
import { Banknote } from 'lucide-react'

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo with Icon */}
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-linear-to-br from-sky-400 to-sky-600 rounded-lg shadow-md">
                            <Banknote className="w-12 h-6 text-white" strokeWidth={2} />
                        </div>
                            {/* Logo */}
                        <NavLink 
                            to='/' 
                            className="font-bold text-xl text-sky-600 hover:text-sky-700 transition-colors"
                        >
                            SwiftPay
                        </NavLink>
                        <div>

                        </div>
                    </div>
                    {/* Left Section - Logo and Navigation */}
                    <div className="flex items-center gap-8">
                        

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-1">
                            <NavLink 
                                to='/' 
                                className={({ isActive }) => 
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive 
                                            ? 'text-sky-600 bg-sky-50' 
                                            : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to='/about' 
                                className={({ isActive }) => 
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive 
                                            ? 'text-sky-600 bg-sky-50' 
                                            : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                            <NavLink 
                                to='/features' 
                                className={({ isActive }) => 
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive 
                                            ? 'text-sky-600 bg-sky-50' 
                                            : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                                    }`
                                }
                            >
                                Features
                            </NavLink>
                            <NavLink 
                                to='/how-it-works' 
                                className={({ isActive }) => 
                                    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        isActive 
                                            ? 'text-sky-600 bg-sky-50' 
                                            : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                                    }`
                                }
                            >
                                How it works
                            </NavLink>
                        </div>
                    </div>

                    {/* Right Section - Auth Links */}
                    <div className="flex items-center gap-4">
                        <NavLink 
                            to='/login' 
                            className={({ isActive }) => 
                                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive 
                                        ? 'text-sky-600 bg-sky-50' 
                                        : 'text-slate-600 hover:text-sky-600 hover:bg-sky-50'
                                }`
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink 
                            to='/register' 
                            className={({ isActive }) => 
                                `px-4 py-2 rounded-md text-sm font-semibold transition-colors text-white bg-sky-600 hover:bg-sky-700`
                            }
                        >
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

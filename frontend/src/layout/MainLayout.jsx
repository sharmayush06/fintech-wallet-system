import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'

function MainLayout() {
    const [user] = useState("user")
    const [sidebarOpen, setSidebarOpen] = useState(true)
    
    return (
        <div>
            {user !== "user" ? (
                <>
                    <Navbar />
                    <Outlet />
                </>
            ) : (
                <div className="flex">
                    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <main className={`w-full transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} min-h-screen`}>
                        <Outlet />
                    </main>
                </div>
            )}
        </div>
    )
}

export default MainLayout

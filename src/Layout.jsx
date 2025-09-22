import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Layout() {
    return (
        
        <main className="flex flex-col w-full overflow-x-hidden">
            <Navbar />
            <div className="w-full flex">
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}
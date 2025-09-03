import React from 'react'
import Navbar from '../components/MainLayoutComponents/Navbar'
import Footer from '../components/MainLayoutComponents/Footer'
import { Outlet } from "react-router-dom";

const LandingPageLayout = ({ children }) => {
    return (
        <>
            <div className="landing-layout">
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default LandingPageLayout
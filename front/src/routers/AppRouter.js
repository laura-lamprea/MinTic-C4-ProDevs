import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../Components/login/LoginPage';
import ContentRoutes from './ContentRoutes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/*" element={<ContentRoutes />} />
                <Route path="/logout" component={LoginPage} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
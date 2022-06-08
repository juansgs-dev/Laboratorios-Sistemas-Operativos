import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Home } from '../components/Home'
import { Footer } from '../components/Footer';
import { Laboratorios } from '../components/Laboratorios';
import { Interrupcion } from '../components/Interrupcion';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Laboratorios" element={<Laboratorios />} />
                <Route path="/Interrupcion" element={<Interrupcion />} />
                <Route path="*" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
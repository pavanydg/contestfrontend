import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

function App() {
    return (
        <div className="min-h-screen bg-black text-white">
            <NavBar />
            <Hero />
            <Features />

        </div>
    );
}

export default App;
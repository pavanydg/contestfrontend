import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export const NavBar = () => {
    return <nav className="top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">CodeTracker</Link>
            <div className="flex items-center gap-8">
                <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
                <Link href="/contests" className="hover:text-yellow-400 transition-colors">Contests</Link>
                <Link href="/bookmarks" className="hover:text-yellow-400 transition-colors">BookMarks</Link>
                <ModeToggle/>
            </div>
        </div>
    </nav>
};

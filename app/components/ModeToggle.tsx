"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const ModeToggle = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Wait until mounted to render the component
    if (!mounted) {
        return null;
    }

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <div>
            <Button
                className="cursor-pointer"
                variant="outline"
                size="icon"
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            >
                {currentTheme === "light" ? (
                    <Sun className="h-5 w-5 text-black" />
                ) : (
                    <Moon className="h-5 w-5 text-white" />
                )}
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
};
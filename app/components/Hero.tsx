import { StarsBackground } from "@/components/ui/stars-background";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Hero = () => {
    return <div className="relative flex items-center justify-center overflow-hidden h-[90vh]">
        <StarsBackground/>
        <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
        </div>

        <div className="relative text-center px-4 max-w-4xl mx-auto space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm text-yellow-400 text-md font-medium mb-4">
                <div className="flex items-center">
                    <Dot className="size-8"/>
                    Your Competitive Programming Hub
                </div>
            </div>

            <h1 className="text-7xl font-bold mb-6">
                Track Your Next
                <span className="block text-yellow-400 mt-2">Coding Challenge</span>
            </h1>

            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
                Never miss a competition with our comprehensive contest aggregator.
                Track and participate in coding contests from LeetCode, CodeChef, and CodeForces.
            </p>

            <div className="flex items-center justify-center gap-4 pt-8">
                <Link
                    href="/contests"
                    className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition-colors flex gap-3"
                >
                    View Contests
                    <ArrowRight/>
                </Link>
            </div>
        </div>
    </div>

};

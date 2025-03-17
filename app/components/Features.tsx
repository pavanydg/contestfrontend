import React from "react";
import { Code2, Trophy, Users } from 'lucide-react';

export const Features = () => {
    return (
        <div className="py-32 px-8" id="features">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="flex flex-col border-1 rounded-2xl border-yellow-400 p-6">
                        <div className="mb-6 w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                            <Code2 className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Multiple Platforms</h3>
                        <p className="text-gray-400">
                            Access contests from LeetCode, CodeChef, and CodeForces all in one place.
                        </p>
                    </div>

                    <div className="flex flex-col border-1 rounded-2xl border-yellow-400 p-6">
                        <div className="mb-6 w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
                        <p className="text-gray-400">
                            Keep track of upcoming and past contests to improve your skills.
                        </p>
                    </div>

                    <div className="flex flex-col border-1 rounded-2xl border-yellow-400 p-6">
                        <div className="mb-6 w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center">
                            <Users className="w-6 h-6 text-yellow-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Community</h3>
                        <p className="text-gray-400">
                            Join a community of competitive programmers and grow together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

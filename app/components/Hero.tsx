"use client"
import { StarsBackground } from "@/components/ui/stars-background";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <div className="relative flex items-center justify-center overflow-hidden h-[90vh]">
            <StarsBackground className="" />
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <motion.div
                className="relative text-center px-4 max-w-4xl mx-auto space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Badge */}
                <motion.div
                    className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm text-yellow-400 text-md font-medium mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center">
                        <Dot className="size-8" />
                        Your Competitive Programming Hub
                    </div>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-7xl font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Track Your Next
                    <span className="block text-blue-400 mt-2 dark:text-yellow-400">
                        Coding Challenge
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Never miss a competition with our comprehensive contest aggregator.
                    Track and participate in coding contests from LeetCode, CodeChef, and CodeForces.
                </motion.p>

                {/* Button */}
                <motion.div
                    className="flex items-center justify-center gap-4 pt-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <Link
                        href="/contests"
                        className="px-8 py-3 bg-blue-400 dark:bg-yellow-400 text-black rounded-full font-semibold hover:bg-blue-300 dark:hover:bg-yellow-300 transition-colors flex gap-3"
                    >
                        View Contests
                        <ArrowRight />
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
};

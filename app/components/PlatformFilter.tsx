import React from "react";

type PlatformFilterProps = {
    selectedPlatform: string;
    onPlatformChange: (platform: string) => void;
};

const platforms = ["All Contests", "Leetcode", "CodeChef", "Codeforces"];

const PlatformFilter: React.FC<PlatformFilterProps> = ({ selectedPlatform, onPlatformChange }) => {
    return (
        <div className="flex gap-2 my-4">
            {platforms.map((platform) => (
                <button
                    key={platform}
                    onClick={() => onPlatformChange(platform)}
                    className={`px-4 py-2 rounded-lg border ${
                        selectedPlatform === platform ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                    }`}
                >
                    {platform}
                </button>
            ))}
        </div>
    );
};

export default PlatformFilter;

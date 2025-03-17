// import { Clock } from "lucide-react";
import React from "react";
import { formatDateRange, getDuration, getTimeUntilStart } from "../utils/dateFormatter";
import Link from "next/link";

// {Platform, startTime, Title, duration, link}


export type Contest = {
    id: string;
    name: string;
    type: string;
    platform: string;
    url: string;
    startTime: string;
    endTime: string;
    status: string;
    solutionLink: null;
}

export type ContestCardProps = {
    contest: Contest
}

const ContestCard = ({ contest }: ContestCardProps) => {
    return (
        <div className="p-5 w-[400px] h-[250px] border border-yellow-300 rounded-lg flex flex-col justify-around">
            <div>
                <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-md font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        {contest.platform}
                    </span>
                    <span className="text-md font-semibold text-blue-600 dark:text-blue-400">{getTimeUntilStart(contest.startTime)}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{contest.name}</h3>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-md mb-4">

                    <span>{formatDateRange(contest.startTime, contest.endTime)}</span>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-md mb-4">

                    <span>Duration: {getDuration(contest.startTime, contest.endTime)}</span>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {contest.type}
                    </span>
                </div>
                <Link href={contest.url} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none">
                    
                    Contest Link
                </Link>
            </div>

        </div>
    );
};

export default ContestCard;

import { formatDateRange, getDuration, getTimeUntilStart } from "../utils/dateFormatter";
import Link from "next/link";
import { ExternalLink, Youtube } from "lucide-react";
import BookmarkButton from "./BookMarkButton";
import { cn } from "@/lib/utils";
import { contestStatus, platformStyles } from "../utils/styles";

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
        <div className="p-5 w-[450px] min-h-[260px] border border-gray-700 rounded-lg flex flex-col justify-around">
            <div>
                <div className="flex justify-between mb-4 items-center">
                    <div className="flex gap-2">
                        <span className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-md text-md font-medium",
                            platformStyles[contest.platform]
                        )}>
                            {contest.platform}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {contest.type}
                        </span>
                        <span className={cn(
                            "inline-flex items-center px-2.5 py-0.5 rounded-md text-md font-medium",
                            contestStatus[contest.status]
                        )}>
                            {contest.status}
                        </span>
                    </div>
                    <span className="text-md font-semibold text-blue-600 dark:text-blue-400">{getTimeUntilStart(contest.startTime, contest.endTime)}</span>
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
                <div className="flex justify-center">
                    <div className="flex gap-2">
                        <Link href={contest.url} target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none cursor-pointer flex gap-1.5 items-center border p-1 border-blue-400 rounded-lg">
                            <ExternalLink size={20} />
                            Contest Link
                        </Link>
                        {!contest.solutionLink ? (
                            <div className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none cursor-pointer flex gap-1.5 items-center border p-1 border-blue-400 rounded-lg">
                                <Youtube size={20} />
                                Coming soon...
                            </div>
                        ) : <Link href={contest.solutionLink} target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none cursor-pointer flex gap-1.5 items-center border p-1 border-blue-400 rounded-lg">
                            <Youtube size={20} />
                            Video Solution
                        </Link>}
                    </div>
                </div>
                    <BookmarkButton contest={contest} />
            </div>

        </div>
    );
};

export default ContestCard;

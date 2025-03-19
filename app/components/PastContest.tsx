import React from "react";
import { Contest } from "./ContestCard";
import { getDate, getDuration } from "../utils/dateFormatter";
import Link from "next/link";
import { ExternalLink, Youtube } from "lucide-react";
import BookmarkButton from "./BookMarkButton";

const PastContest = ({ contests }: { contests: Contest[] }) => {
    return (
        <div className="container mx-auto px-4">

            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg dark:ring-white dark:ring-opacity-10 mb-12">
                <div className="overflow-x-auto" id="el-hmjp5fmt">
                    <table className="min-w-full divide-y divide-gray-300 dark:divide-neutral-700">
                        <thead className="bg-gray-50 dark:bg-neutral-800">
                            <tr id="el-p8wolmue">
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-md font-semibold text-gray-900 dark:text-white md:pl-6">Contest Name</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" >Platform</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" >Date</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" >Duration</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" >Type</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" ></th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" ></th>
                                <th scope="col" className="px-3 py-3.5 text-left text-md font-semibold text-gray-900 dark:text-white" ></th>
                            </tr>
                        </thead>

                        {contests.map((contest) => (
                            <tbody key={contest.id} className="divide-y divide-gray-200 dark:divide-neutral-700 bg-white dark:bg-neutral-900">
                                <tr>
                                    <td className="whitespace-wrap py-4 pl-4 pr-3 text-md font-medium text-gray-900 dark:text-white md:pl-6">{contest.name}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-md">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                            {contest.platform}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500 dark:text-gray-400">{getDate(contest.startTime)}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-md text-gray-500 dark:text-gray-400">{getDuration(contest.startTime, contest.endTime)}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-md">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                            {contest.type}
                                        </span>
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium md:pr-6">

                                        <Link href={contest.url} target="_blank" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"><ExternalLink className="size-5" />Contest Link</Link>
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-md font-medium md:pr-6">

                                        {!contest.solutionLink ? (
                                            <div className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none cursor-pointer flex gap-1.5 items-center border p-1 border-blue-400 rounded-lg max-w-40">
                                                <Youtube size={20} />
                                                Coming soon...
                                            </div>
                                        ) : <Link href={contest.solutionLink} target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus:outline-none cursor-pointer flex gap-1.5 items-center border p-1 border-blue-400 rounded-lg max-w-40">
                                            <Youtube size={20} />
                                            Video Solution
                                        </Link>}
                                    </td>
                                    <td className="pr-2">
                                        <BookmarkButton contest={contest}/>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
};

export default PastContest;

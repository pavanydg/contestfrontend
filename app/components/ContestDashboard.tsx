"use client";
import dynamic from "next/dynamic";
const ContestCard = dynamic(() => import("./ContestCard"), { ssr: false });
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Contest } from "./ContestCard";
import PlatformFilter from "./PlatformFilter";
import PastContest from "./PastContest";
import { Spinner } from "@/components/spinner";
import { ChevronDown, LayoutGrid, TableProperties } from "lucide-react";
import { motion } from "framer-motion";


const ContestDashboard = () => {
    const loadRef = useRef<HTMLDivElement | null>(null);
    const [contests, setContests] = useState<{ upcoming: Contest[], past: Contest[] }>({
        upcoming: [],
        past: []
    });
    const [loading, setLoading] = useState(true);
    const [selectedPlatform, setSelectedPlatform] = useState<string[]>(["All Contests"]);
    const [selectedPlatformPast, setSelectedPlatformPast] = useState<string[]>(["All Contests"]);
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const [viewMode, setViewMode] = useState("card");
    const limit = 10;

    useEffect(() => {
        const fetchContests = async () => {
            try {
                setLoading(true); 

                const upcomingContestsResponse = await axios.get(`http://localhost:3001/api/contests/filter?status=upcoming`);
                const upcomingContests = upcomingContestsResponse.data.data;

                const pastContestsResponse = await axios.get(`http://localhost:3001/api/contest/filter?status=past&limit=10&offset=0`);
                const pastContests = pastContestsResponse.data.data;

                setContests({
                    upcoming: upcomingContests,
                    past: pastContests
                });

            } catch (error) {
                console.error("Error fetching contests: ", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchContests();
    }, []);

    const handlePlatformChange = (platform: string) => {
        setSelectedPlatform((prev) => {
            if (platform === "All Contests") {
                return ["All Contests"]; 
            }
            const updatedSelection = prev.includes(platform)
                ? prev.filter(p => p !== platform)
                : [...prev.filter(p => p !== "All Contests"), platform]; 
    
            return updatedSelection.length === 0 ? ["All Contests"] : updatedSelection;
        });
    };

    const handlePlatformChangePast = (platform: string) => {
        setSelectedPlatformPast((prev) => {
            if (platform === "All Contests") {
                return ["All Contests"]; 
            }
            const updatedSelection = prev.includes(platform)
                ? prev.filter(p => p !== platform)
                : [...prev.filter(p => p !== "All Contests"), platform];
    
            return updatedSelection.length === 0 ? ["All Contests"] : updatedSelection;
        });
    };

    const fContests = selectedPlatform.includes("All Contests")
        ? contests.upcoming
        : contests.upcoming.filter((contest) => selectedPlatform.includes(contest.platform))

    const pastContests = selectedPlatformPast.includes("All Contests")
        ? contests.past
        : contests.past.filter((contest) => selectedPlatformPast.includes(contest.platform))

    const loadMorePastContests = async () => {
        if (!hasMore) return;
        setLoadingMore(true);
        try {
            console.log(limit, offset)
            const pastRes = await axios.get(`http://localhost:3001/api/contest/filter?status=past&limit=${limit}&offset=${offset}`);

            setContests(prev => ({
                ...prev,
                past: [...prev.past, ...pastRes.data.data]
            }));
            setHasMore(pastRes.data.hasMore);
            setOffset(offset + limit);

            setTimeout(() => {
                loadRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            }, 100)

        } catch (error) {
            console.error("Error loading more past contests: ", error);
        }
        setLoadingMore(false);
    };


    if (loading) {
        return (
            <div className="h-svh flex justify-center items-center">
                <Spinner size={"icon"} />
            </div>
        )
    }
    return (
        <div className="font-sans">
            <div className="flex flex-col items-center">
                <div className="text-4xl py-2 font-bold">Upcoming Coding Contests</div>

                <PlatformFilter
                    selectedPlatform={selectedPlatform}
                    onPlatformChange={handlePlatformChange}
                />
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {fContests.map((contest) => {
                        return (
                            <div key={contest.id}>
                                <ContestCard contest={contest} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-4xl py-2 font-bold mt-5">Past Coding Contests</h2>
                <div className="flex gap-64">
                    <PlatformFilter
                        selectedPlatform={selectedPlatformPast}
                        onPlatformChange={handlePlatformChangePast}
                    />
                    <div className="flex gap-2 my-4">
                        <button className={`p-2 border rounded-lg ${viewMode === "card" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`} onClick={() => setViewMode("card")}>
                            <LayoutGrid />
                        </button>
                        <button className={`p-2 border rounded-lg ${viewMode === "table" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`} onClick={() => setViewMode("table")}>
                            <TableProperties />
                        </button>
                    </div>
                </div>
                {viewMode === "table" ? (
                    <PastContest contests={pastContests} />
                ) : (
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {pastContests.map((contest) => {
                            return (
                                <div key={contest.id}>
                                    <ContestCard contest={contest} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <div ref={loadRef} className="flex justify-center my-6">
                {hasMore && (
                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer" onClick={loadMorePastContests} disabled={loadingMore}>
                            {loadingMore ? "Loading..." : "Load More"}
                        </button>
                        {!loadingMore && (
                            <motion.div
                            animate={{
                                y: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1, 
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ChevronDown />
                        </motion.div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContestDashboard;

"use client";
import dynamic from "next/dynamic";
const ContestCard = dynamic(() => import("./ContestCard"), { ssr: false });
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Contest } from "./ContestCard";
import PlatformFilter from "./PlatformFilter";
import PastContest from "./PastContest";
// import ContestCard from "./ContestCard";

const ContestDashboard = () => {
    const loadRef = useRef<HTMLDivElement | null>(null);
    const [contests, setContests] = useState<{ upcoming: Contest[], past: Contest[] }>({
        upcoming: [],
        past: []
    });
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [selectedPlatform, setSelectedPlatform] = useState<string>("All Contests");
    const [selectedPlatformPast, setSelectedPlatformPast] = useState<string>("All Contests");
    const [loadingMore, setLoadingMore] = useState(false);
    const [offset, setOffset] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const limit = 10;

    useEffect(() => {
        const fetchContests = async () => {
            try {
                setLoading(true); // Start loading

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
                setLoading(false); // Stop loading
            }
        };

        fetchContests();
    }, []);

    const handlePlatformChange = (platform: string) => {
        setSelectedPlatform(platform);
    };

    const handlePlatformChangePast = (platform: string) => {
        setSelectedPlatformPast(platform);
    };

    const fContests = selectedPlatform === "All Contests"
        ? contests.upcoming
        : contests.upcoming.filter((contest) => selectedPlatform.includes(contest.platform))

    const pastContests = selectedPlatformPast === "All Contests"
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
                loadRef.current?.scrollIntoView({behavior:"smooth", block: "start"})
            },100)

        } catch (error) {
            console.error("Error loading more past contests: ", error);
        }
        setLoadingMore(false);
    };


    if (loading) {
        return <div>Loading...</div>; // Show loading message or spinner
    }
    return (
        <div className="">
            <div className="flex flex-col items-center">
                <div className="text-4xl py-2 font-bold">Upcoming Coding Contests</div>

                <PlatformFilter
                    selectedPlatform={selectedPlatform}
                    onPlatformChange={handlePlatformChange}
                />
                <div className="grid grid-cols-3 gap-3">
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
                <h2 className="text-4xl py-2 font-bold">Past Coding Contests</h2>
                <PlatformFilter
                    selectedPlatform={selectedPlatformPast}
                    onPlatformChange={handlePlatformChangePast}
                />
                <PastContest
                    contests={pastContests}
                />
            </div>
            <div ref={loadRef} className="flex justify-center mb-6">
                {hasMore && (
                    <button className="border" onClick={loadMorePastContests} disabled={loadingMore}>
                        {loadingMore ? "Loading..." : "Load More"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ContestDashboard;

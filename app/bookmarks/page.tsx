"use client"
import React, { useEffect, useState } from "react";
import PlatformFilter from "../components/PlatformFilter";
import ContestCard, { Contest } from "../components/ContestCard";
import { NavBar } from "../components/NavBar";
import { LayoutGrid, TableProperties } from "lucide-react";
import PastContest from "../components/PastContest";

const BookMarks = () => {
    const [bookmarkedContests, setBookmarkedContests] = useState<Contest[]>([]);

    const [selectedPlatform, setSelectedPlatform] = useState<string[]>(["All Contests"]);
    const [viewMode, setViewMode] = useState("card");

    useEffect(() => {
        const loadBookmarkedContests = () => {
            const storedBookmarks = localStorage.getItem('bookmarkedContests');
            if (storedBookmarks) {
                setBookmarkedContests(JSON.parse(storedBookmarks));
            }
        };
        loadBookmarkedContests();

        const handleStorageChange = () => {
            loadBookmarkedContests();
        };

        window.addEventListener('storage', handleStorageChange);

        window.addEventListener('bookmarkUpdated', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('bookmarkUpdated', handleStorageChange);
        };
    }, []);


    const handlePlatformChange = (platform: string) => {
        setSelectedPlatform((prev) => {
            if (platform === "All Contests") {
                return ["All Contests"]; // Reset to show all contests
            }
            const updatedSelection = prev.includes(platform)
                ? prev.filter(p => p !== platform) // Remove if already selected
                : [...prev.filter(p => p !== "All Contests"), platform]; // Add new platform, remove "All Contests"
    
            return updatedSelection.length === 0 ? ["All Contests"] : updatedSelection;
        });
    };
    const allcontests = selectedPlatform.includes("All Contests")
        ? bookmarkedContests
        : bookmarkedContests.filter((contest) => selectedPlatform.includes(contest.platform))

    if (bookmarkedContests.length == 0) {
        return <div className="font-sans">
            <NavBar />
            <div className="flex flex-col items-center text-4xl py-2 font-bold mt-5">
                No Bookmarks available...
            </div>
        </div>
    }

    return <div className="font-sans mb-10">
        <NavBar />
        <div className="flex flex-col items-center">
            <h2 className="text-4xl py-2 font-bold mt-5">Your Bookmarks</h2>
            <div className="flex gap-64">
                <PlatformFilter
                    selectedPlatform={selectedPlatform}
                    onPlatformChange={handlePlatformChange}
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
                <PastContest contests={allcontests} />
            ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                    {bookmarkedContests.map((contest) => {
                        return (
                            <div key={contest.id}>
                                <ContestCard contest={contest} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    </div>;
};

export default BookMarks;

import React, { useEffect, useState } from "react";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { Contest } from "./ContestCard";
import { toast } from "sonner";

interface BookmarkButtonProps {
  contest: Contest;
  className?: string;
}

const BookmarkButton = ({ contest, className = "" }: BookmarkButtonProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Check if contest is bookmarked on component mount
  useEffect(() => {
    const bookmarkedContests = JSON.parse(localStorage.getItem('bookmarkedContests') || '[]');
    setIsBookmarked(bookmarkedContests.some((c: Contest) => c.id === contest.id));
  }, [contest.id]);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Get current bookmarks from localStorage
    const bookmarkedContests = JSON.parse(localStorage.getItem('bookmarkedContests') || '[]');
    
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarkedContests.filter((c: Contest) => c.id !== contest.id);
      localStorage.setItem('bookmarkedContests', JSON.stringify(updatedBookmarks));
      toast("Bookmark removed")
    } else {
      // Add to bookmarks
      bookmarkedContests.push(contest);
      localStorage.setItem('bookmarkedContests', JSON.stringify(bookmarkedContests));
      toast("Bookmark added")
    }
    
    setIsBookmarked(!isBookmarked);
    
    window.dispatchEvent(new Event('bookmarkUpdated'));
  };

  return (
    <button 
      onClick={toggleBookmark}
      className={`p-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 ${className}`}
      aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
    >
      {isBookmarked ? <BookmarkCheck size={24} /> : <Bookmark size={24} />}
    </button>
  );
};

export default BookmarkButton;
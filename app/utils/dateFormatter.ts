export const formatDateRange = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const timeFormatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const formattedDate = dateFormatter.format(startDate);
    const startTime = timeFormatter.format(startDate);
    const endTime = timeFormatter.format(endDate);

    return `${formattedDate} • ${startTime} - ${endTime}`;
};

export const getDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    const durationMinutes = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60));
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
};

export const getTimeUntilStart = (start: string) => {
    const startDate = new Date(start);
    const now = new Date();

    const diffMinutes = Math.floor((startDate.getTime() - now.getTime()) / (1000 * 60));
    if (diffMinutes < 0) return "Started"; // If contest already started

    const days = Math.floor(diffMinutes / (60 * 24));
    const hours = Math.floor((diffMinutes % (60 * 24)) / 60);
    const minutes = diffMinutes % 60;

    return days > 0
        ? `Starts in ${days}d ${hours}h`
        : hours > 0
        ? `Starts in ${hours}h ${minutes}m`
        : `Starts in ${minutes}m`;
};

export const getDate = (start: string) => {
    const startDate = new Date(start);

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
    
    const formattedDate = dateFormatter.format(startDate);

    return `${formattedDate}`;
}

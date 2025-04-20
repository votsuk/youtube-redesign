export function timeElapsed(dateString: string) {
    const inputDate = new Date(dateString)
    const currentDate = new Date();

    const diffInMilliseconds = currentDate.getTime() - inputDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInDays < 30) {
      const weeks = Math.floor(diffInDays / 7);
      return weeks > 0 ? `${weeks} week${weeks > 1 ? "s" : ""} ago` : `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    }

    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`;
    }

    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`;
}

export function formatViews(views: number) {
    if (views < 1000) {
        return `${views} views`;
    }

    if (views < 100000) {
        const roundedToHundreds = Math.round(views / 100) / 10; // Round to nearest 100 and divide by 10 for 1 decimal place
        return `${roundedToHundreds}k views`;
    }

    if (views < 1000000) {
        const roundedToThousands = Math.round(views / 1000); // Round to nearest 1000
        return `${roundedToThousands}k views`;
    }

    const roundedToHundredThousands = Math.round(views / 100000) / 10; // Round to nearest 100,000 and divide by 10 for 1 decimal place
    return `${roundedToHundredThousands}M views`;
};

export function formatVideoDuration(seconds: number) {
    const hours = Math.floor(seconds / 3600); // Calculate the number of hours
    const minutes = Math.floor((seconds % 3600) / 60); // Calculate the remaining minutes
    const remainingSeconds = seconds % 60; // Calculate the remaining seconds

    if (hours > 0) {
        // If the duration is over an hour, include hours in the format
        return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;
    }

    // If the duration is less than an hour, return minutes:seconds
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

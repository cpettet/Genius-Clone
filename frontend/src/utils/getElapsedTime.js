export default function getElapsedTime(first, second = new Date()) {
  // time difference in ms
  const elapsedTime = second - first;

  // convert to seconds
  const seconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);
  if (years >= 1) return `${years} ${years > 1 ? "years" : "year"} ago`;
  if (months >= 1) return `${months} ${months > 1 ? "months" : "month"} ago`;
  if (weeks >= 1) return `${weeks} ${weeks > 1 ? "weeks" : "week"} ago`;
  if (days >= 1) return `${days} ${days > 1 ? "days" : "day"} ago`;
  if (hours >= 1) return `${hours} ${hours > 1 ? "hours" : "hour"} ago`;
  if (minutes >= 1)
    return `${minutes} ${minutes > 1 ? "minutes" : "minute"} ago`;
  if (seconds >= 1)
    return `${seconds} ${seconds > 1 ? "seconds" : "second"} ago`;
}

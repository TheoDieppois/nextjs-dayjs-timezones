import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function formatDuration(start: string, end: string) {
  const durationInMinutes = dayjs(end).diff(dayjs(start), "minute");
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;
  return `${hours}h ${minutes}m`;
}

export function calculateTotalDuration(
  segments: { departureTime: string; arrivalTime: string }[]
) {
  return formatDuration(
    segments[0].departureTime,
    segments[segments.length - 1].arrivalTime
  );
}

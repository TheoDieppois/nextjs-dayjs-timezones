import dayjs from "dayjs";

type FlightTimeProps = {
  datetime: string;
  timezone: string;
};

export function FlightTime({ datetime, timezone }: FlightTimeProps) {
  return (
    <div>
      <p className="text-base font-medium text-gray-900">
        {dayjs(datetime).tz(timezone).format("MMM D, YYYY")}
      </p>
      <p className="text-sm text-gray-600">
        {dayjs(datetime).tz(timezone).format("HH:mm")} ({timezone})
      </p>
    </div>
  );
}

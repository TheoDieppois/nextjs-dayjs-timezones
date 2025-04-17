import type { FlightSegment as FlightSegmentType } from "@/types/flight";
import { FlightTime } from "./FlightTime";
import { formatDuration } from "@/utils/time";

type Props = {
  segment: FlightSegmentType;
  showLayover?: boolean;
  previousArrival?: string;
};

export function FlightSegment({
  segment,
  showLayover,
  previousArrival,
}: Props) {
  return (
    <div className="border-t pt-4 first:border-t-0 first:pt-0">
      {showLayover && previousArrival && (
        <p className="text-sm font-medium text-orange-600 mb-2">
          Layover: {formatDuration(previousArrival, segment.departureTime)}
        </p>
      )}
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="text-sm font-medium text-gray-500">Departure</p>
          <div className="space-y-1">
            <p className="text-base font-medium text-gray-900">
              {segment.from.city} - {segment.from.airport}
            </p>
            <FlightTime
              datetime={segment.departureTime}
              timezone={segment.from.timezone}
            />
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">Arrival</p>
          <div className="space-y-1">
            <p className="text-base font-medium text-gray-900">
              {segment.to.city} - {segment.to.airport}
            </p>
            <FlightTime
              datetime={segment.arrivalTime}
              timezone={segment.to.timezone}
            />
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-blue-600 mt-2">
        Flight duration:{" "}
        {formatDuration(segment.departureTime, segment.arrivalTime)}
      </p>
    </div>
  );
}

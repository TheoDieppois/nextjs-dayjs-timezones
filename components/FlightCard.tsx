import type { Flight } from "@/types/flight";
import { FlightSegment } from "@/components/FlightSegment";
import { calculateTotalDuration } from "@/utils/time";

type FlightCardProps = {
  flight: Flight;
};

export function FlightCard({ flight }: FlightCardProps) {
  const firstSegment = flight.segments[0];
  const lastSegment = flight.segments[flight.segments.length - 1];
  const hasStops = flight.segments.length > 1;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="space-y-4 w-full">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {firstSegment.from.city} ({firstSegment.from.code}) →{" "}
              {lastSegment.to.city} ({lastSegment.to.code})
            </h2>
            <p className="text-sm text-gray-500">
              {hasStops
                ? `${flight.segments.length - 1} stopover${
                    flight.segments.length - 1 > 1 ? "s" : ""
                  }`
                : "Direct flight"}
            </p>
            <p className="text-sm font-medium text-blue-600 mt-1">
              Total duration: {calculateTotalDuration(flight.segments)}
            </p>
          </div>

          {flight.segments.map((segment, index) => (
            <FlightSegment
              key={index}
              segment={segment}
              showLayover={index > 0}
              previousArrival={
                index > 0 ? flight.segments[index - 1].arrivalTime : undefined
              }
            />
          ))}
        </div>

        <div className="text-sm font-medium px-3 py-1 bg-blue-50 text-blue-700 rounded-full shrink-0">
          {flight.id}
        </div>
      </div>
    </div>
  );
}

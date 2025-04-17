"use client";

import { FlightCard } from "@/components/FlightCard";
import { useFlights } from "@/hooks/useFlights";

type FlightListProps = {
  searchTerm: string;
};

export default function FlightList({ searchTerm }: FlightListProps) {
  const { data: flights, isPending, error } = useFlights(searchTerm);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-gray-500">Loading flights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-red-500">Error loading flights</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid gap-6">
        {flights?.map((flight) => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
        {flights?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No flights found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

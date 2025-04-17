import { useQuery } from "@tanstack/react-query";
import type { Flight } from "@/types/flight";

async function fetchFlights(searchTerm: string = ""): Promise<Flight[]> {
  const response = await fetch("/flights.json");
  const data = await response.json();

  if (!searchTerm) return data.flights;

  const searchTermLower = searchTerm.toLowerCase();
  return data.flights.filter((flight: Flight) =>
    flight.segments.some(
      (segment) =>
        segment.from.city.toLowerCase().includes(searchTermLower) ||
        segment.from.code.toLowerCase().includes(searchTermLower) ||
        segment.to.city.toLowerCase().includes(searchTermLower) ||
        segment.to.code.toLowerCase().includes(searchTermLower)
    )
  );
}

export function useFlights(searchTerm: string) {
  return useQuery({
    queryKey: ["flights", searchTerm],
    queryFn: () => fetchFlights(searchTerm),
  });
}

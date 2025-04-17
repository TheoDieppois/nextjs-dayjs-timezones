export type Airport = {
  city: string;
  airport: string;
  code: string;
  timezone: string;
};

export type FlightSegment = {
  from: Airport;
  to: Airport;
  departureTime: string; // UTC
  arrivalTime: string; // UTC;
};

export type Flight = {
  id: string;
  segments: FlightSegment[];
};

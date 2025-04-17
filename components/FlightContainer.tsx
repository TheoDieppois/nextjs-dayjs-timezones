"use client";

import { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { Navbar } from "./Navbar";
import FlightList from "./FlightList";

export function FlightContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  return (
    <>
      <Navbar onSearch={setSearchTerm} />
      <FlightList searchTerm={debouncedSearchTerm} />
    </>
  );
}

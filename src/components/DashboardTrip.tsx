import { useState, useEffect } from "react";
import TripForm, { type Trip } from "@/components/TripForm"
import TripTable from "./TripTable";

export default function DashboardTrips() {
  const [trips, setTrips] = useState<Trip[]>([]);

  // Persist in localStorage
  useEffect(() => {
    const stored = localStorage.getItem("trips");
    if (stored) setTrips(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const addTrip = (trip: Trip) => {
    setTrips((prev) => [...prev, trip]);
  };

  return (
    <div>
      <TripForm addTrip={addTrip} />
      <TripTable trips={trips} />
    </div>
  );
}

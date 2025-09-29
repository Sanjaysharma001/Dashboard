import { useState } from "react";

export interface Trip {
  tripNumber: string;
  origin: { lat: number; lng: number; startTime: string };
  destination: { lat: number; lng: number; endTime: string };
  mode: string;
  distance: number;
  purpose: string;
  companions: number;
  frequency: number;
  cost: number;
}

interface Props {
  addTrip: (trip: Trip) => void;
}

export default function TripForm({ addTrip }: Props) {
  const [trip, setTrip] = useState<Trip>({
    tripNumber: "",
    origin: { lat: 0, lng: 0, startTime: "" },
    destination: { lat: 0, lng: 0, endTime: "" },
    mode: "",
    distance: 0,
    purpose: "",
    companions: 0,
    frequency: 1,
    cost: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTrip((prev) => ({
      ...prev,
      [name]: name === "distance" || name === "companions" || name === "frequency" || name === "cost" ? Number(value) : value,
    }));
  };

  const handleOriginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrip((prev) => ({
      ...prev,
      origin: { ...prev.origin, [name]: name === "lat" || name === "lng" ? Number(value) : value },
    }));
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrip((prev) => ({
      ...prev,
      destination: { ...prev.destination, [name]: name === "lat" || name === "lng" ? Number(value) : value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTrip(trip);
    setTrip({
      tripNumber: "",
      origin: { lat: 0, lng: 0, startTime: "" },
      destination: { lat: 0, lng: 0, endTime: "" },
      mode: "",
      distance: 0,
      purpose: "",
      companions: 0,
      frequency: 1,
      cost: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-2xl shadow space-y-2">
      <h2 className="font-semibold text-lg">Add Trip</h2>
      <input name="tripNumber" value={trip.tripNumber} onChange={handleChange} placeholder="Trip Number" className="input" />
      <div className="flex gap-2">
        <input name="lat" type="number" value={trip.origin.lat} onChange={handleOriginChange} placeholder="Origin Lat" className="input" />
        <input name="lng" type="number" value={trip.origin.lng} onChange={handleOriginChange} placeholder="Origin Lng" className="input" />
        <input name="startTime" type="datetime-local" value={trip.origin.startTime} onChange={handleOriginChange} className="input" />
      </div>
      <div className="flex gap-2">
        <input name="lat" type="number" value={trip.destination.lat} onChange={handleDestinationChange} placeholder="Dest Lat" className="input" />
        <input name="lng" type="number" value={trip.destination.lng} onChange={handleDestinationChange} placeholder="Dest Lng" className="input" />
        <input name="endTime" type="datetime-local" value={trip.destination.endTime} onChange={handleDestinationChange} className="input" />
      </div>
      <input name="mode" value={trip.mode} onChange={handleChange} placeholder="Mode of Travel" className="input" />
      <input name="distance" type="number" value={trip.distance} onChange={handleChange} placeholder="Distance (km)" className="input" />
      <input name="purpose" value={trip.purpose} onChange={handleChange} placeholder="Purpose" className="input" />
      <input name="companions" type="number" value={trip.companions} onChange={handleChange} placeholder="Companions" className="input" />
      <input name="frequency" type="number" value={trip.frequency} onChange={handleChange} placeholder="Frequency" className="input" />
      <input name="cost" type="number" value={trip.cost} onChange={handleChange} placeholder="Cost" className="input" />
      <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded">Add Trip</button>
    </form>
  );
}

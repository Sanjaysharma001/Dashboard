import type { Trip } from "@/components/TripForm";

interface Props {
  trips: Trip[];
}

export default function TripTable({ trips }: Props) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-white rounded-2xl shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Trip #</th>
            <th className="p-2">Origin (lat,lng)</th>
            <th className="p-2">Start</th>
            <th className="p-2">Destination (lat,lng)</th>
            <th className="p-2">End</th>
            <th className="p-2">Mode</th>
            <th className="p-2">Distance</th>
            <th className="p-2">Purpose</th>
            <th className="p-2">Companions</th>
            <th className="p-2">Frequency</th>
            <th className="p-2">Cost</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <tr key={trip.tripNumber} className="border-t">
              <td className="p-2">{trip.tripNumber}</td>
              <td className="p-2">{trip.origin.lat},{trip.origin.lng}</td>
              <td className="p-2">{trip.origin.startTime}</td>
              <td className="p-2">{trip.destination.lat},{trip.destination.lng}</td>
              <td className="p-2">{trip.destination.endTime}</td>
              <td className="p-2">{trip.mode}</td>
              <td className="p-2">{trip.distance} km</td>
              <td className="p-2">{trip.purpose}</td>
              <td className="p-2">{trip.companions}</td>
              <td className="p-2">{trip.frequency}</td>
              <td className="p-2">{trip.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

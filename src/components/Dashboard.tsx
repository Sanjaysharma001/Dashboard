import StatsCard from "./StatsCard";
import TravelModeChart from "./TravelModeChart";
import PurposeOfTravelChart from "@/components/PurposeOfTravelChart"
import TripCompletionChart from "@/components/TripCompletionChart"
import ConsentChart from "./ConsentChart";
import { Button } from "@/components/ui/button";



interface Props {
  setSidebarOpen: (v: boolean) => void;
}

export default function Dashboard({ setSidebarOpen }: Props) {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-sky-800">
          National Transportation Planning and Research Centre
        </h1>
        <Button onClick={() => setSidebarOpen(true)}>Menu</Button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        <StatsCard title="Total Trips Captured" value="12,450" />
        <StatsCard title="Total Distance Travelled" value="125,680 km" />
        <StatsCard title="Total CO₂ Impact" value="4,380 kg" />
        <StatsCard title="Average Trip Duration" value="25 min" />
        <StatsCard title="Average Group Size" value="1.4" />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <TravelModeChart />
        <PurposeOfTravelChart />
      </div>

      {/* Second Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <TripCompletionChart />
        <ConsentChart />
      </div>

      {/* Export Buttons */}
      <div className="flex gap-4 mt-6">
        <Button>CSV</Button>
        <Button>Excel</Button>
        <Button variant="outline">JSON</Button>
      </div>
    </div>
  );
}

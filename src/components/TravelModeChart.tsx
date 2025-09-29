import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Walk", value: 15 },
  { name: "Bus", value: 20 },
  { name: "Train", value: 25 },
  { name: "Car", value: 20 },
  { name: "Metro", value: 10 },
  { name: "Auto", value: 10 },
];

const COLORS = ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function TravelModeChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Travel Mode Share</h2>
      <PieChart width={300} height={220}>
        <Pie data={data} dataKey="value" outerRadius={80} label>
          {data.map((_, idx) => (
            <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
}

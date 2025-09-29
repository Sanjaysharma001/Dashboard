import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
  { name: "Work", value: 50 },
  { name: "Education", value: 30 },
  { name: "Tourism", value: 20 },
];

const COLORS = ["#3b82f6", "#06b6d4", "#10b981"];

export default function PurposeOfTravelChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Purpose of Travel</h2>
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

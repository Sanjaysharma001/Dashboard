import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Work", Completed: 8000, "AI-detected": 2000 },
  { name: "Tourism", Completed: 6000, "AI-detected": 1500 },
  { name: "Leisure", Completed: 3000, "AI-detected": 1000 },
];

export default function TripCompletionChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Trip Completion & Accuracy</h2>
      <BarChart width={300} height={220} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Completed" fill="#3b82f6" />
        <Bar dataKey="AI-detected" fill="#06b6d4" />
      </BarChart>
    </div>
  );
}

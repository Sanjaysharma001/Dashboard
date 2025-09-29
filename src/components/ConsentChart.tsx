import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  { name: "Opted In", value: 60 },
  { name: "Opted Out", value: 20 },
];

export default function ConsentChart() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="font-semibold mb-2">User Privacy & Consent</h2>
      <BarChart width={300} height={220} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#3b82f6" />
      </BarChart>
    </div>
  );
}

import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

/* Travel Mode Chart */
export function TravelModeChart() {
  const data = [
    { name: "Walk", value: 15 },
    { name: "Bus", value: 20 },
    { name: "Train", value: 25 },
    { name: "Car", value: 20 },
    { name: "Metro", value: 10 },
    { name: "Auto", value: 10 },
  ];
  const COLORS = ["#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

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

/* Purpose of Travel Chart */
export function PurposeOfTravelChart() {
  const data = [
    { name: "Work", value: 50 },
    { name: "Education", value: 30 },
    { name: "Tourism", value: 20 },
  ];
  const COLORS = ["#3b82f6", "#06b6d4", "#10b981"];

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

/* Trip Completion & Accuracy Chart */
export function TripCompletionChart() {
  const data = [
    { name: "Work", Completed: 8000, "AI-detected": 2000 },
    { name: "Tourism", Completed: 6000, "AI-detected": 1500 },
    { name: "Leisure", Completed: 3000, "AI-detected": 1000 },
  ];

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="font-semibold mb-2">Trip Completion & Accuracy</h2>
      <BarChart width={300} height={220} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="Completed" fill="#3b82f6" />
        <Bar dataKey="AI-detected" fill="#06b6d4" />
      </BarChart>
    </div>
  );
}

/* User Privacy & Consent Chart */
export function ConsentChart() {
  const data = [
    { name: "Opted In", value: 60 },
    { name: "Opted Out", value: 20 },
  ];

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <h2 className="font-semibold mb-2">User Privacy & Consent</h2>
      <BarChart width={300} height={220} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#3b82f6" />
      </BarChart>
    </div>
  );
}

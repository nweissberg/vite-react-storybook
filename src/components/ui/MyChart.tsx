// src/components/MyChart.tsx
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, Legend } from "recharts";
import { chartData } from "../../data/chartData";

export function MyChart() {
  return (
    <div className="chart-container">
      <BarChart
        width={600}
        height={300}
        data={chartData}
        className="bg-transparent"
      >
        <CartesianGrid strokeDasharray="3 3" className="stroke-gray-600" />
        <XAxis dataKey="month" />
        <Tooltip />
        <Legend />
        <Bar dataKey="desktop" fill="var(--chart-1)" radius={4} />
        <Bar dataKey="mobile" fill="var(--chart-2)" radius={4} />
      </BarChart>
    </div>
  );
}

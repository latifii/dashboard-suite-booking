import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Heading from "../../components/ui/Heading";
import { useTheme } from "../../context/ThemeContext";
import { Booking } from "../../types/booking.interface";

type Stay = {
  numNights: number;
};

type BookingStat = Booking & {
  guests: {
    fullName: string;
  };
};

type DurationChartProps = {
  confirmedStays: BookingStat[];
};

const startDataLight = [
  { duration: "1 شب", value: 0, color: "#ef4444" },
  { duration: "2 شب", value: 0, color: "#f97316" },
  { duration: "3 شب", value: 0, color: "#eab308" },
  { duration: "4-5 شب", value: 0, color: "#84cc16" },
  { duration: "6-7 شب", value: 0, color: "#22c55e" },
  { duration: "8-14 شب", value: 0, color: "#14b8a6" },
  { duration: "15-21 شب", value: 0, color: "#3b82f6" },
  { duration: "21+ شب", value: 0, color: "#a855f7" },
];

const startDataDark = [
  { duration: "1 شب", value: 0, color: "#b91c1c" },
  { duration: "2 شب", value: 0, color: "#c2410c" },
  { duration: "3 شب", value: 0, color: "#a16207" },
  { duration: "4-5 شب", value: 0, color: "#4d7c0f" },
  { duration: "6-7 شب", value: 0, color: "#15803d" },
  { duration: "8-14 شب", value: 0, color: "#0f766e" },
  { duration: "15-21 شب", value: 0, color: "#1d4ed8" },
  { duration: "21+ شب", value: 0, color: "#7e22ce" },
];

function prepareData(startData: typeof startDataLight, stays: Stay[]) {
  const incArrayValue = (arr: typeof startDataLight, field: string) =>
    arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj,
    );

  const data = stays
    .reduce((arr, cur) => {
      const num = cur.numNights;
      if (num === 1) return incArrayValue(arr, "1 شب");
      if (num === 2) return incArrayValue(arr, "2 شب");
      if (num === 3) return incArrayValue(arr, "3 شب");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 شب");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 شب");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 شب");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 شب");
      if (num >= 21) return incArrayValue(arr, "21+ شب");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
}

const DurationChart: React.FC<DurationChartProps> = ({ confirmedStays }) => {
  const { theme } = useTheme();
  const startData = theme ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedStays);

  return (
    <div className="col-span-2 rounded-lg border bg-white p-6 dark:bg-base-100">
      <Heading as="h2">خلاصه مدت اقامت </Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                fill={entry.color}
                stroke={entry.color}
                key={entry.duration}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            widths="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DurationChart;

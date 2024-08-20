import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import Heading from "../../components/ui/Heading";
import { useTheme } from "../../context/ThemeContext";
import { Booking } from "../../types/booking.interface";

type SalesChartProps = {
  bookings: Pick<Booking, "created_at" | "extrasPrice" | "totalPrice">[];
  numDays: number;
};

const SalesChart: React.FC<SalesChartProps> = ({ bookings, numDays }) => {
  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => ({
    label: format(date, "MMM dd"),
    totalSales: bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.totalPrice, 0),
    extrasSales: bookings
      .filter((booking) => isSameDay(date, new Date(booking.created_at)))
      .reduce((acc, cur) => acc + cur.extrasPrice, 0),
  }));

  const { theme } = useTheme();
  const colors = theme
    ? {
        text: "#FFFFFF",
        background: "#1F2937",
        totalSales: { stroke: "#3B82F6", fill: "#3B82F6" },
        extrasSales: { stroke: "#FBBF24", fill: "#FBBF24" },
      }
    : {
        text: "#000000",
        background: "#FFFFFF",
        totalSales: { stroke: "#2563EB", fill: "#60A5FA" },
        extrasSales: { stroke: "#D97706", fill: "#FBBF24" },
      };

  return (
    <div className="col-span-full rounded-lg border bg-white p-5 shadow dark:bg-base-100">
      <Heading as="h2">
        فروش از تاریخ {format(allDates.at(0)!, "MMM dd yyyy")} &mdash;
        {format(allDates.at(-1)!, "MMM dd yyyy")}
      </Heading>

      <ResponsiveContainer height={300} width="100%">
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid
            strokeDasharray="4 4"
            className="stroke-base-content"
          />
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="فروش کل"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="فروش اضافه"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;

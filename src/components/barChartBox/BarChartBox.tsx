import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartBox">
      <h1>{props.title}</h1>
      <div className="chart"></div>
      <ResponsiveContainer width="99%" height={150}>
        <BarChart data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#1b263b", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;

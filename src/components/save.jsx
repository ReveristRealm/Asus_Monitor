import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

<Gauge
  width={100}
  height={100}
  value={86}
  startAngle={-110}
  endAngle={110}
  sx={{
    [`& .${gaugeClasses.valueText}`]: {
      fontSize: 41,
      transform: "translate(0px, -7px)",
    },
  }}
  text={({ value, valueMax }) => `${value} / ${valueMax}`}
/>;

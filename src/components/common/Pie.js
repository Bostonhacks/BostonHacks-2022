/**
 * Copied from https://dev.to/jackherizsmith/making-a-progress-circle-in-react-3o65
 */

const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
  };
  
  const Circle = ({ colour: color, percentage }) => {
    const r = 35;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
    return (
      <circle
        r={r}
        cx={100}
        cy={100}
        fill="transparent"
        stroke={strokePct !== circ ? color : ""} // remove colour as 0% sets full circumference
        strokeWidth={"1rem"}
        strokeDasharray={circ}
        strokeDashoffset={percentage ? strokePct : 0}
      ></circle>
    );
  };
  
  const Text = ({ percentage }) => {
    return (
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        color="white"
        fontSize={".9em"}
      >
        {percentage.toFixed(0)}%
      </text>
    );
  };
  
  const Pie = ({ percentage, colour }) => {
    const pct = cleanPercentage(100-percentage);
    return (
      <svg width={100} height={100}>
        <g transform={`rotate(-90 ${"50 100"})`}>
          <Circle colour="lightblue" />
          <Circle colour={colour} percentage={pct} />
        </g>
        <Text percentage={pct} />
      </svg>
    );
  };

  export default Pie;
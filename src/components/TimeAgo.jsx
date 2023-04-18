import { parseISO, formatDistanceToNow } from "date-fns";
import React, { useEffect, useState } from "react";

const TimeAgo = ({ time }) => {
  const [waktu, setWaktu] = useState("");
  useEffect(() => {
    if (time) {
      const date = parseISO(time);
      const timePeriod = formatDistanceToNow(date);
      setWaktu(`${timePeriod} Ago`);
    }
  }, []);
  return (
    <div title={time} className="text-slate-700">
      &nbsp; <i>{waktu}</i>
    </div>
  );
};

export default TimeAgo;

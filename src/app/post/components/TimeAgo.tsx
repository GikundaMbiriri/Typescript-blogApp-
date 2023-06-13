import { parseISO, formatDistanceToNow } from "date-fns";

interface timestampType {
  timeStamp: string;
}
function TimeAgo({ timeStamp }: timestampType) {
  let timeAgo = "";
  if (timeStamp) {
    const date = parseISO(timeStamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <div>
      <span title={timeStamp}>
        &nbsp; <i>{timeAgo}</i>
      </span>
    </div>
  );
}

export default TimeAgo;

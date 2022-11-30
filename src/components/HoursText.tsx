import * as React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
const HoursText = ({ document }: any) => {
  const { hours, timezone, type } = document;

  const getStatus = (currentDay: any, currentTime: any, hours: any) => {
    if (hours[currentDay.toLowerCase()].isClosed)
      return {
        status: "Closed perm",
        text: `Closed`,
      };
    const startTime =
      (hours[currentDay.toLowerCase()].openIntervals[0].start.split(":")[0] ===
      "00"
        ? 24
        : hours[currentDay.toLowerCase()].openIntervals[0].start.split(
            ":"
          )[0]) *
        60 +
      hours[currentDay.toLowerCase()].openIntervals[0].start.split(":")[1];
    const endTime =
      (hours[currentDay.toLowerCase()].openIntervals[0].end.split(":")[0] ===
      "00"
        ? 24
        : hours[currentDay.toLowerCase()].openIntervals[0].end.split(":")[0]) *
        60 +
      hours[currentDay.toLowerCase()].openIntervals[0].end.split(":")[1];
    const currently =
      currentTime.split(":")[0] * 60 + currentTime.split(":")[1];
    if (
      hours[currentDay.toLowerCase()].openIntervals[0].start == "00:00" &&
      hours[currentDay.toLowerCase()].openIntervals[0].end == "23:59"
    )
      return { status: "Open", text: "Open 24 Hours" };
    else if (startTime < currently < endTime)
      return {
        status: "Open Now",
        text: `Closes at ${closeOrOpenTime(
          hours[currentDay.toLowerCase()].openIntervals[0].end
        )}`,
      };
    else
      return {
        status: "Closed",
        text: `Opens ${getTomorrow} at ${closeOrOpenTime(
          hours[currentDay.toLowerCase()].openIntervals[0].start
        )}`,
      };
  };
  const getTomorrow = () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleString("en-us", { weekday: "long" });
  };
  const closeOrOpenTime = (inpTime: any) => {
    let newTime = inpTime;
    if (inpTime.split(":")[0] === "00")
      newTime = `${newTime.split(":")[0].replace(/(.*)/, "24")}:${
        newTime.split(":")[1]
      }`;

    newTime =
      newTime.split(":")[0] >= 12 && newTime.split(":")[0] <= 23
        ? `${newTime.split(":")[0] - 12}:${newTime.split(":")[1]} PM`
        : `${newTime.split(":")[0] - 12}:${newTime.split(":")[1]} AM`;

    return newTime;
  };

  const getDayName = (hours: any, timezone: any) => {
    const currentDay = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      timeZone: timezone,
    });
    const currentTime = timeNow();
    return getStatus(currentDay, currentTime, hours);
  };
  const timeNow = () => {
    const d = new Date(),
      h = (d.getHours() < 10 ? "0" : "") + d.getHours(),
      m = (d.getMinutes() < 10 ? "0" : "") + d.getMinutes();
    return h + ":" + m;
  };
  const res = getDayName(hours, timezone);
  return (
    <>
      {type ? (
        <div className="hero mt-2 w-full italic">
          <div className="hero-row flex gap-2">
            <div
              className={
                res.status.includes("Open")
                  ? "Hero-hoursToday storeOpen flex gap-1 items-center w-max "
                  : " Hero-hoursToday storeClosed flex gap-1 items-center w-max "
              }
            >
              <p className="">
                {res.status.toLowerCase() === "open now"
                  ? "Open Now - "
                  : res.status.toLowerCase() === "closed"
                  ? "Closed  - "
                  : res.status.toLowerCase() === "closed perm"
                  ? "Closed"
                  : ""}
              </p>

              {res.status !== "Closed perm" && res.text}
            </div>
          </div>
        </div>
      ) : (
        <div className="hero mt-4 w-full">
          <div className="hero-row flex text-2xl text-gray-600 gap-2">
            <div>
              <AiOutlineClockCircle />
            </div>
            <div
              className={
                res.status.includes("Open")
                  ? "Hero-hoursToday storeOpen flex gap-1 items-center w-max "
                  : " Hero-hoursToday storeClosed flex gap-1 items-center w-max "
              }
            >
              <p className="">
                {res.status.toLowerCase() === "open now"
                  ? "Open Now - "
                  : res.status.toLowerCase() === "closed"
                  ? "Closed  - "
                  : res.status.toLowerCase() === "closed perm"
                  ? "Closed"
                  : ""}
              </p>

              {res.status !== "Closed perm" && res.text}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HoursText;

import FullCalendar from "@fullcalendar/react";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentTimezone from "moment-timezone";
import arLocale from "@fullcalendar/core/locales/ar";
import { ContDiv } from "../StyledComponent";
import CosTitle from "../CosTitle";

const Calendar = () => {
  momentTimezone.tz.setDefault("Asia/Gaza");
  return (
    <ContDiv>
      <CosTitle title="التقويم" />
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        locale={arLocale}
        selectable
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "",
        }}
        eventContent={() => {
          <p>10,000 ر.س</p>;
        }}
        select={(selectInfo) => {
          console.log(selectInfo.start.toISOString());
        }}
        dayHeaderContent={(dayHeader) => {
          return (
            <div className="fc-day-header">
              <span className="fc-day-header-title" style={{ color: "#335C87" }}>
                {dayHeader.text}
              </span>
            </div>
          );
        }}
        dayCellContent={(dayInfo) => {
          return (
            <div style={{ color: "#707070", width: "50", height: "50px" }}>
              <p style={{ color: "#333333" }}>{dayInfo.dayNumberText}</p>
              <p style={{ color: "#707070" }}>Rs 10,000</p>
            </div>
          );
        }}
        height={480}
      />
    </ContDiv>
  );
};
export default Calendar;

import FullCalendar from "@fullcalendar/react";
import React, { useContext, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentTimezone from "moment-timezone";
import arLocale from "@fullcalendar/core/locales/ar";
import { ContDiv } from "../StyledComponent";
import CosTitle from "../CosTitle";
import { Col, Row } from "antd";
import NextBtn from "../StepsContent/Operation/NextBtn";
import { currentItems } from "../../Context/Current";
import { Items } from "../../Context/itemsContext";

const Calendar = () => {
  const { current, setStep, setPercent } = useContext(currentItems);
  const { setItems } = useContext(Items);
  const [date, setDate] = useState("");
  momentTimezone.tz.setDefault("Asia/Gaza");
  return (
    <ContDiv>
      <CosTitle title="التقويم" />
      <Row>
        <Col span={24}>
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
              setDate(selectInfo.start.toISOString().split("T", 1)[0]);
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
          <NextBtn
            cb={() => {
              setStep(3);
              setPercent(60);
              setItems((prev) => {
                prev[current - 2].info.Date = date;
                return prev;
              });
            }}
          />
        </Col>
      </Row>
    </ContDiv>
  );
};
export default Calendar;

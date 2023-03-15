import { Button, message } from "antd";
import React from "react";

const StepsButtons = ({current, setCurrent , steps}) => {
 console.log(current)
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return <div>
    {current < steps.length - 1 && (
      <Button type="primary" style={{
        backgroundColor:"#D84E67"
      }} onClick={() => next()}>
        التالي
      </Button>
    )}
    {current === steps.length - 1 && (
      <Button
        type="primary"
        onClick={() => message.success("Processing complete!")}
      >
        Done
      </Button>
    )}
    {current > 0 && (
      <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
        Previous
      </Button>
    )}
  </div>;
};

export default StepsButtons;

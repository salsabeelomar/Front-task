import { Button, message } from "antd";
import React from "react";

const StepsButtons = ({current, setCurrent , steps}) => {

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  <div>
    {current < steps.length - 1 && (
      <Button type="primary" onClick={() => next()}>
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

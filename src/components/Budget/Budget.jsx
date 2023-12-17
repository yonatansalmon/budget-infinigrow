import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import BudgetAccordion from "../BudgetAccordion/BudgetAccordion";
import { useBudget } from "../../context/BudgetProvider";
const Budget = () => {
  const [activeKey, setActiveKey] = useState(null);
  const { channels } = useBudget();

  const toggleAccordion = (channelId) => {
    setActiveKey(channelId);
  };

  return (
    <div>
      {channels.map((channel) => (
        <BudgetAccordion key={channel.id} channel={channel} activeKey={activeKey} toggleAccordion={toggleAccordion} />
      ))}
    </div>
  );
};

export default Budget;

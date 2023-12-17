import Accordion from "react-bootstrap/Accordion";
import "./BudgetAccordion.css";
import BudgetImage from "../../icons/ReviewsIcon.svg";
import BudgetOptions from "../BudgetOptions/BudgetOptions";
import BudgetData from "../BudgetData/BudgetData";
import HeaderDropdown from "../HeaderDropdown/HeaderDropdown";
import { useBudget } from "../../context/BudgetProvider";
import { useState } from "react";

const BudgetAccordion = ({ channel, activeKey, toggleAccordion }) => {
  const { handleEnableEditing, handleChangeChannelName } = useBudget();
  const [isEditChannelName, setIsEditChannelName] = useState(false);
  const [channelName, setChannelName] = useState(channel.name);

  const handleToggle = (e) => {
    e.stopPropagation();
    const channelId = activeKey === channel.id ? null : channel.id;
    toggleAccordion(channelId);
    handleEnableEditing(channelId);
    if (channel.name !== channelName) {
      handleChangeChannelName(channel.id, channelName);
    }
    setIsEditChannelName(false);
  };

  return (
    <Accordion activeKey={activeKey === channel.id ? "0" : null}>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={handleToggle} id="AccordionButton">
          <img src={BudgetImage} alt="Budget" className="BudgetImage" />
          {isEditChannelName ? <input type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} onClick={(e) => e.stopPropagation()} /> : <span>{channel.name}</span>}
          <HeaderDropdown channel={channel} setIsEditChannelName={setIsEditChannelName} />
        </Accordion.Header>
        <Accordion.Body>
          <BudgetOptions channel={channel} />
          <BudgetData budgetBreakdown={channel.budgetBreakdown} channel={channel} />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default BudgetAccordion;

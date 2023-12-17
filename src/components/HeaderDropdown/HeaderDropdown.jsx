import React, { useState } from "react";
import Vector from "../../icons/Vector.svg";
import "./HeaderDropdown.css";
import { useBudget } from "../../context/BudgetProvider";

const HeaderDropdown = ({ channel, setIsEditChannelName }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { handleEnableEditing, handleRemoveChannel } = useBudget();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const onEditChannel = () => {
    setIsVisible(false);
    setIsEditChannelName(true);
  };

  const onRemoveChannel = () => {
    setIsVisible(false);
    handleRemoveChannel(channel.id);
  };

  return (
    <div id="DropdownMenuContainer" onClick={toggleDropdown}>
      <img src={Vector} id="VectorIcon" />
      {isVisible && (
        <div id="DropdownMenu">
          <div className="DropdownItem" onClick={onEditChannel}>
            Edit
          </div>
          <div className="DropdownItem" onClick={onRemoveChannel}>
            Remove
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;

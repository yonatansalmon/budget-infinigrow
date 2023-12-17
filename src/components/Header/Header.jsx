import React from "react";
import "./Header.css";
import { useBudget } from "../../context/BudgetProvider";

const Header = () => {
  const { handleAddChannel } = useBudget();

  return (
    <div className="HeaderContainer">
      <div className="TextContainer">
        <h4 id="MainTitle">Build your budget plan</h4>
        <h6 id="SubTitle">Setup channels</h6>
        <p id="HeaderText"> Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights</p>
      </div>
      <div className="BtnContainer">
        <button id="AddChannelBtn" onClick={handleAddChannel}>
          + Add Channel
        </button>
      </div>
    </div>
  );
};

export default Header;

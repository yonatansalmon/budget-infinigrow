import { useState } from "react";
import "./BudgetData.css";
import BudgetItem from "../BudgetItem/BudgetItem";

const BudgetData = ({ budgetBreakdown, channel }) => {
  return (
    <div id="BudgetDataContainer">
      <h5 id="BreakdownTitle">Budget Breakdown</h5>
      <p id="BreakdownText">By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.</p>

      <div id="BudgetItemsContainer">
        {budgetBreakdown.map((budget) => (
          <BudgetItem budget={budget} channel={channel} />
        ))}
      </div>
    </div>
  );
};

export default BudgetData;

import React, { useState, useEffect } from "react";
import "./BudgetItem.css";
import { useBudget } from "../../context/BudgetProvider";

const BudgetItem = ({ budget, channel }) => {
  const [budgetAmount, setBudgetAmount] = useState(budget.amount);
  const { isEqualBreakdown, handleBudgetItemChange } = useBudget();

  useEffect(() => {
    setBudgetAmount(budget.amount);
  }, [budget.amount]);

  const onAmountChange = (e) => {
    const newAmount = e.target.value;
    setBudgetAmount(newAmount);
    handleBudgetItemChange(channel.id, budget.label, newAmount);
  };

  return (
    <div id="ItemContainer">
      <p>{budget.label}</p>
      <div id="BudgetInputContainer">
        <input value={budgetAmount} onChange={onAmountChange} disabled={isEqualBreakdown ? true : false} className="ItemInput" size="9" />
      </div>
    </div>
  );
};

export default BudgetItem;

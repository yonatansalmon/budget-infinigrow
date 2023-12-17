import React, { useState, useEffect } from 'react';
import './BudgetItem.css';
import { useBudget } from '../../context/BudgetProvider';
import { getNumericValue } from '../../helpers';

const BudgetItem = ({ budget, channel }) => {
  const [budgetAmount, setBudgetAmount] = useState(budget.amount);
  const { isEqualBreakdown, handleBudgetItemChange } = useBudget();

  useEffect(() => {
    setBudgetAmount(budget.amount);
  }, [budget.amount]);

  const onAmountChange = (e) => {
    const numericInputValue = getNumericValue(e.target.value);
    setBudgetAmount(numericInputValue);
    handleBudgetItemChange(channel.id, budget.label, numericInputValue);
  };

  return (
    <div id='ItemContainer'>
      <p>{budget.label}</p>
      <div id='BudgetInputContainer'>
        <input
          value={budgetAmount ? Number(budgetAmount).toLocaleString() : budgetAmount}
          onChange={onAmountChange}
          disabled={isEqualBreakdown ? true : false}
          className={isEqualBreakdown ? 'ItemInput' : 'ItemInput Manual'}
          size='9'
        />
      </div>
    </div>
  );
};

export default BudgetItem;

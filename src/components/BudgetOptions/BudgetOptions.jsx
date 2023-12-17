import React from 'react';
import './BudgetOptions.css';
import { renderSelectOptions, getNumericValue } from '../../helpers';
import { useBudget } from '../../context/BudgetProvider';

const BudgetOptions = ({ channel }) => {
  const { handleBudgetFrequency, handleBaselineChange, setIsEqualBreakdown, setChannels, channels, isEditChannelId, isEqualBreakdown } = useBudget();

  const onBaseLineChange = (e) => {
    const numericInputValue = getNumericValue(e.target.value);
    const valueToStore = e.target.value ? Number(numericInputValue) : '';

    handleBaselineChange(valueToStore, channel.id);
  };

  const onAllocationChange = (allocationType) => {
    setIsEqualBreakdown(allocationType === 'equal');
    const updatedChannel = { ...channel, allocation: allocationType };
    setChannels(channels.map((c) => (c.id === channel.id ? updatedChannel : c)));
    allocationType === 'equal' && handleBudgetFrequency(channel.frequency, channel.id, channel.baseline);
  };

  return (
    <div id='BudgetOptionsContainer'>
      <div id='FrequencyContainer'>
        <p className='InputLabel'>Budget Frequency &#9432;</p>
        <select
          id='FrequencySelect'
          value={channel.frequency}
          onChange={(e) => handleBudgetFrequency(e.target.value, channel.id, channel.baseline)}
          disabled={isEditChannelId !== channel.id}
        >
          {renderSelectOptions(channel.frequency)}
        </select>
      </div>
      <div id='BaselineContainer'>
        <p className='InputLabel'>Baseline [Annual] Budget &#9432;</p>
        <input
          type='text'
          className={isEqualBreakdown  ? 'BaselineInput': 'BaselineInput Manual'}
          value={channel.baseline ? Number(channel.baseline).toLocaleString() : ''}
          onChange={onBaseLineChange}
          disabled={isEditChannelId !== channel.id}
        />
      </div>
      <div id='AllocationContainer'>
        <p className='InputLabel'>Budget Allocation &#9432;</p>
        <div className='TabsContainer' disabled={isEditChannelId !== channel.id}>
          <div
            id='equal'
            onClick={() => onAllocationChange('equal')}
            className={channel.allocation === 'equal' ? 'AllocationTabs Selected' : 'AllocationTabs'}
          >
            Equal
          </div>
          <div
            id='manual'
            onClick={() => onAllocationChange('manual')}
            className={channel.allocation === 'manual' ? 'AllocationTabs Selected' : 'AllocationTabs'}
          >
            Manual
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOptions;

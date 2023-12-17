import React, { createContext, useState, useContext } from "react";
import { nanoid } from "nanoid";
import { months, quarters, days } from "../helpers";

const BudgetContext = createContext();
const useBudget = () => useContext(BudgetContext);

const BudgetProvider = ({ children }) => {
  const [isEqualBreakdown, setIsEqualBreakdown] = useState(true);
  const [isEditChannelId, setIsEditChannelId] = useState(null);
  const [channels, setChannels] = useState([{ name: "New Channel", baseline: "0", frequency: "annually", allocation: "equal", budgetBreakdown: months.map((label) => ({ label, amount: 0 })), id: 1 }]);

  const handleAddChannel = () => {
    const defaultChannel = {
      name: "New Channel",
      baseline: 0,
      frequency: "annually",
      allocation: "equal",
      budgetBreakdown: months.map((label) => ({ label, amount: 0 })),
      id: nanoid(),
    };

    setChannels([defaultChannel, ...channels]);
  };

  const handleRemoveChannel = (channelId) => {
    const newChannelList = channels.filter((channel) => channel.id !== channelId);
    setChannels(newChannelList);
  };

  const handleEnableEditing = (channelId) => {
    setIsEditChannelId(channelId);
  };

  const handleBudgetFrequency = (frequency, id, newBaseLine = null) => {
    const updatedChannels = channels.map((channel) => {
      const budgedBaseline = newBaseLine ? newBaseLine : channel.baseline;
      if (newBaseLine === "") {
        return { ...channel, baseline: newBaseLine };
      }
      if (channel.id === id) {
        let newBreakdown;
        switch (frequency) {
          case "monthly":
            newBreakdown = days.map((_, i) => ({ label: `Day ${i + 1}`, amount: Math.round(budgedBaseline / 30) }));
            break;
          case "quarterly":
            newBreakdown = quarters.map((label) => ({ label, amount: Math.round(budgedBaseline / 4) }));
            break;
          case "annually":
            newBreakdown = months.map((label) => ({ label, amount: Math.round(budgedBaseline / 12) }));
            break;
          default:
            newBreakdown = months.map((label) => ({ label, amount: Math.round(budgedBaseline / 12) }));
            break;
        }
        return { ...channel, allocation: "equal", frequency, budgetBreakdown: newBreakdown, baseline: budgedBaseline };
      } else {
        return channel;
      }
    });
    setChannels(updatedChannels);
  };

  const handleBaselineChange = (newBaseline, channelId) => {
    const channelToUpdate = channels.find((channel) => channel.id === channelId);
    if (channelToUpdate && channelToUpdate.allocation === "equal") {
      handleBudgetFrequency(channelToUpdate.frequency, channelId, newBaseline);
    } else {
      const updatedChannels = channels.map((channel) => (channel.id === channelId ? { ...channel, baseline: newBaseline } : channel));
      setChannels(updatedChannels);
    }
  };

  const handleManualBreakdown = (channelId, itemLabel, newAmount) => {
    const updatedChannels = channels.map((channel) => {
      if (channel.id === channelId) {
        const newBudgetBreakdown = channel.budgetBreakdown.map((item) => {
          if (item.label === itemLabel) {
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        const newBaseline = newBudgetBreakdown.reduce((acc, item) => acc + parseFloat(item.amount), 0);
        return { ...channel, budgetBreakdown: newBudgetBreakdown, baseline: newBaseline };
      } else {
        return channel;
      }
    });

    setChannels(updatedChannels);
  };

  const handleChangeChannelName = (channelId, newChannelName) => {
    const updatedChannels = channels.map((channel) => {
      if (channel.id === channelId) {
        return { ...channel, name: newChannelName };
      } else {
        return channel;
      }
    });

    setChannels(updatedChannels);
  };

  return (
    <BudgetContext.Provider value={{ channels, setChannels, handleBudgetFrequency, handleBaselineChange, isEqualBreakdown, setIsEqualBreakdown, handleManualBreakdown, handleAddChannel, handleRemoveChannel, handleEnableEditing, isEditChannelId, handleChangeChannelName }}>
      {children}
    </BudgetContext.Provider>
  );
};

export { useBudget };
export default BudgetProvider;

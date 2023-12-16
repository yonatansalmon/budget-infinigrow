import { useState } from "react";
import "./ChannelItem.css";
import EditIcon from "../../icons/EditIcon.svg";
import CancelIcon from "../../icons/CancelIcon.svg";
import SaveIcon from "../../icons/SaveIcon.svg";
import { months } from "../../helpers";
import { useBudget } from "../../context/BudgetProvider";

const ChannelItem = ({ item, channel }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [itemValue, setItemValue] = useState(item.amount);
  const {handleBudgetItemChange} = useBudget()

  const onAmountChange = (e) => {
    setIsEdit(false)
    handleBudgetItemChange(channel.id, item.label, itemValue);
  };
  return (
    <>
      <td className="align-middle text-center">
        {isEdit ? (
          <div className="Item">
            <input className="SingleAmount" value={itemValue} onChange={(e) =>  setItemValue(e.target.value)}  />
            <img src={CancelIcon} className="CancelIcon" alt="CancelIcon" onClick={() => setIsEdit(false)} />
            <img src={SaveIcon} className="SaveIcon" alt="SaveIcon" onClick={onAmountChange} />
          </div>
        ) : (
          <p className="ChannelItem">
            ${itemValue} <img src={EditIcon} className="EditIcon" alt="EditIcon" onClick={() => setIsEdit(true)} />
          </p>
        )}
      </td>
    </>
  );
};

export default ChannelItem;

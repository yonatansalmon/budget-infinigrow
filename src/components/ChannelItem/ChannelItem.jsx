import { useState } from 'react';
import './ChannelItem.css';
import EditIcon from '../../icons/EditIcon.svg';
import CancelIcon from '../../icons/CancelIcon.svg';
import SaveIcon from '../../icons/SaveIcon.svg';
import { getNumericValue } from '../../helpers';
import { useBudget } from '../../context/BudgetProvider';

const ChannelItem = ({ item, channel }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [itemValue, setItemValue] = useState(item.amount);
  const { handleBudgetItemChange } = useBudget();

  const onInputChange = (e) => {
    const numericValue = getNumericValue(e.target.value)
    setItemValue(numericValue);
  };

  const onAmountChange = (e) => {
    setIsEdit(false);
    handleBudgetItemChange(channel.id, item.label, itemValue);
  };

  return (
    <>
      <td className='align-middle text-center'>
        {isEdit ? (
          <div className='Item'>
            <input className='SingleAmount' value={itemValue ? Number(itemValue).toLocaleString() : ''} onChange={onInputChange}  />
            <img src={CancelIcon} className='CancelIcon' alt='CancelIcon' onClick={() => setIsEdit(false)} />
            <img src={SaveIcon} className='SaveIcon' alt='SaveIcon' onClick={onAmountChange} />
          </div>
        ) : (
          <p className='ChannelItem'>
            ${itemValue ? Number(itemValue).toLocaleString() : ''}{' '}
            <img src={EditIcon} className='EditIcon' alt='EditIcon' onClick={() => setIsEdit(true)} />
          </p>
        )}
      </td>
    </>
  );
};

export default ChannelItem;

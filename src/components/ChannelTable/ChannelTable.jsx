import React, { useState } from "react";
import "./ChannelTable.css";
import Table from "react-bootstrap/Table";
import { useBudget } from "../../context/BudgetProvider";
import { months } from "../../helpers";
import BudgetImage from "../../icons/ReviewsIcon.svg";
import ChannelItem from "../ChannelItem/ChannelItem";

const ChannelTable = () => {
  const { channels } = useBudget();

  return (
    <Table responsive>
      <thead>
        <tr>
          <th id="ChannelHeader">CHANNEL</th>
          {months.map((month) => (
            <th>{month}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {channels.map((channel) => (
          <tr>
            <td id="ChannelTitle">
              <img src={BudgetImage} alt="Budget" id="ChannelIcon" />
              {channel.name}
            </td>
            {channel.budgetBreakdown.map((item, i) => (
              <ChannelItem item={item} channel={channel} />
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ChannelTable;

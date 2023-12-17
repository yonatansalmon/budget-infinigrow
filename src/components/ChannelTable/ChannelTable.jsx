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
        {channels.map((channel) => {
          const monthlyBudget = channel.baseline / 12;
          return (
            <tr key={channel.id}>
              <td id="ChannelTitle">
                <img src={BudgetImage} alt="Budget" id="ChannelIcon" />
                {channel.name}
              </td>
              {months.map((month) => (
                <ChannelItem item={{ label: month, amount: monthlyBudget }} channel={channel} />
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ChannelTable;

import "./Tabs.css";
import { TAB1, TAB2 } from "../../helpers";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div id="TabsContainer">
        <p className={activeTab === TAB1 ? "Active Tab" : "Tab"} onClick={() => setActiveTab("tab1")}>
          Tab 1
        </p>
        <p className={activeTab === TAB2 ? "Active Tab" : "Tab"} onClick={() => setActiveTab("tab2")}>
          Tab 2
        </p>
      </div>
    </div>
  );
};

export default Tabs;

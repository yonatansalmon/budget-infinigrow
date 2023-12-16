import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Budget from "./components/Budget/Budget";
import BudgetProvider from "./context/BudgetProvider";
import ChannelTable from "./components/ChannelTable/ChannelTable";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="App">
      <BudgetProvider>
        <Header  />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "tab1" ? <Budget /> : <ChannelTable />}
      </BudgetProvider>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./Tabs.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div>
      <div id="TabsContainer">
        <p className={activeTab === "tab1" ? "Active Tab" : "Tab"} onClick={() => setActiveTab("tab1")}>
          Tab 1
        </p>
        <p className={activeTab === "tab2" ? "Active Tab" : "Tab"} onClick={() => setActiveTab("tab2")}>
          Tab 2
        </p>
      </div>
    </div>
  );
};

export default Tabs;

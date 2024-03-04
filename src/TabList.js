// TabList.js
import React, { useState } from 'react';
import Tab from './Tab';
import './TabList.css';

const TabList = () => {
  const [tabs, setTabs] = useState([]);

  const addTab = () => {
    setTabs([...tabs, {}]);
  };

  const closeTab = (index) => {
    setTabs(tabs.filter((tab, i) => i !== index));
  };

  const switchTab = (index) => {
    // Implement tab switching functionality here
  };

  return (
    <div className="tab-list">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <Tab key={index} index={index} closeTab={closeTab} switchTab={switchTab} />
        ))}
        <button className="add-tab-btn" onClick={addTab}>+</button>
      </div>
    </div>
  );
};

export default TabList;

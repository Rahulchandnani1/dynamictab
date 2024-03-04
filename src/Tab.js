// Tab.js
import React from 'react';


const Tab = ({ index, closeTab, switchTab }) => {
  return (
    <div className="tab">
      <span className="tab-title" onClick={() => switchTab(index)}>Tab {index + 1}</span>
      <button className="close-tab-btn" onClick={() => closeTab(index)}>x</button>
    </div>
  );
};

export default Tab;

import React from 'react';

const TabPanel = ({ url }) => {
  return (
    <div className="tab-panel">
      <iframe src={url} title="Tab Content" />
    </div>
  );
};

export default TabPanel;

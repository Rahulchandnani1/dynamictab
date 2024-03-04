import React, { useState } from 'react';
import './App.css'; // Assuming you have a separate CSS file for styles

const Tab = ({ url, onUpdateUrl, active }) => {
  const [inputUrl, setInputUrl] = useState(url);

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onUpdateUrl(inputUrl);
    }
  };

  return (
    <div className="tab-content" style={{ display: active ? 'block' : 'none' }}>
      <input 
        type="text" 
        value={inputUrl} 
        onChange={handleChange} 
        onKeyPress={handleKeyPress} 
      />
      <button className="go-button" onClick={() => onUpdateUrl(inputUrl)}>Go</button>
      <iframe src={url} title="Tab Content" />
    </div>
  );
};

const TabBar = ({ tabs, activeTab, onChangeTab, onUpdateTabUrl }) => {
  return (
    <div className="tab-bar">
      <div className='tabd'>
      {tabs.map((tab, index) => (
        <button 
          key={index} 
          className={`tab-button ${activeTab === index ? 'active' : ''}`} 
          onClick={() => onChangeTab(index)}
        >
          Tab {index + 1}
        </button>
      ))}
      </div>
      <div className="tab-content-container">
        {tabs.map((tab, index) => (
          <Tab 
            key={index}
            url={tab.url} 
            onUpdateUrl={(newUrl) => onUpdateTabUrl(index, newUrl)} 
            active={index === activeTab}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [tabs, setTabs] = useState([{ url: 'https://www.example.com' }]);
  const [activeTab, setActiveTab] = useState(0);

  const addTab = () => {
    setTabs([...tabs, { url: '' }]);
  };

  const changeTab = (index) => {
    setActiveTab(index);
  };

  const updateTabUrl = (index, newUrl) => {
    const newTabs = [...tabs];
    newTabs[index].url = newUrl;
    setTabs(newTabs);
  };

  return (
    <div>
      <button className="add-tab-button" onClick={addTab}>+</button>
      <TabBar 
        tabs={tabs} 
        activeTab={activeTab} 
        onChangeTab={changeTab} 
        onUpdateTabUrl={updateTabUrl} 
      />
      <p>By Rahul Chandnani</p>
    </div>
  );
};

export default App;

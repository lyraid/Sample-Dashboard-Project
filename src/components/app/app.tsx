import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from 'components/routes';
import 'assets/css/common.css';
import 'antd/dist/antd.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
};

export default App;

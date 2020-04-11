import React from 'react';
import './App.css';
import RoleListContainer from "./components/roles/RoleListContainer";
import RoleContainer from "./components/role/RoleContainer";

function App() {
  return (
    <div className="App">
      <RoleListContainer />
      <RoleContainer />
    </div>
  );
}

export default App;

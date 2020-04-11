import React from 'react';
import './App.css';
import RoleListContainer from "./components/roles/RoleListContainer";
import RoleContainer from "./components/role/RoleContainer";

function App() {

    const [id, setId] = React.useState("");
    const handleIdChange = React.useCallback(newId => {
        setId(newId);
    }, []);

    return (
        <div className="App">
            <RoleListContainer handleIdChange={handleIdChange}/>
            <RoleContainer id={id}/>
        </div>
    );
}

export default App;

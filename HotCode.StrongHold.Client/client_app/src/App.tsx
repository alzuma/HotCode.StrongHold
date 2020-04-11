import React from 'react';
import RoleListContainer from "./components/roles/RoleListContainer";
import RoleContainer from "./components/role/RoleContainer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";
import {createBrowserHistory} from "history"

function App() {

    const [id, setId] = React.useState("");
    const handleIdChange = React.useCallback(newId => {
        setId(newId);
    }, []);

    const history = createBrowserHistory();
    
    return (
        <div className="App">
            <Router history={history}>
                <Switch>
                    <Route exact path="/">
                        <RoleListContainer handleIdChange={handleIdChange}/>
                    </Route>
                    <Route path="/:id" children={<RoleContainer />} />
                </Switch>
            </Router >
        </div>
    );
}

export default App;

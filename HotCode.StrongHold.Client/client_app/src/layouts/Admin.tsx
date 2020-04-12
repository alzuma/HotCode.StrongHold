import "./styles.scss"
import * as React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/sidebar/Sidebar";

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/admin" to="/admin/dashboard"/>
    </Switch>
);

function Admin() {

    return (
        <>
            <Sidebar routes={routes}/>
            <div className="content">{switchRoutes}</div>
        </>
    )
}

export default Admin;
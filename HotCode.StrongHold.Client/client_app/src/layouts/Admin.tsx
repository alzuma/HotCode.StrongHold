import * as React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import routes from "../routes";
import Sidebar from "../components/sidebar/Sidebar";

import styles from "./adminStyle";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

const useStyles = makeStyles(styles);

function Admin() {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Sidebar routes={routes}/>
            <div className={classes.mainPanel}>
                <div className={classes.content}>
                    <div className={classes.container}>{switchRoutes}</div>
                </div>
            </div>
        </div>
    )
}

export default Admin;
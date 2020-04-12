import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {StrongHoldRoutes} from "../../routes";
import {NavLink} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';

import styles from "./sidebarStyle";


import backgroundImage from "../../assests/img/sidebar-2.jpg";

interface Props {
    routes: StrongHoldRoutes
}

const useStyles = makeStyles(styles);

const Sidebar: React.FC<Props> = ({routes}) => {
    const classes = useStyles();

    const links = (
        <List className={classes.list}>
            {routes.map((route, index, array) => {
                return (
                    <NavLink
                        to={route.layout + route.path}
                        activeClassName="active"
                        key={index}
                        className={classes.item}
                    >
                        <ListItem button className={classes.itemLink + " " + classes.blue}>
                            <route.icon className={classes.itemIcon}/>
                            <ListItemText
                                className={classes.itemText}
                                primary={route.name}>
                            </ListItemText>
                        </ListItem>
                    </NavLink>
                )
            })}
        </List>
    );

    return (
        <>
            <Drawer variant="permanent" open>
                <div className={classes.sidebarWrapper}>{links}</div>
                <div className={classes.background} style={{backgroundImage: "url(" + backgroundImage + ")"}}/>
            </Drawer>
        </>
    )
};

export default Sidebar;
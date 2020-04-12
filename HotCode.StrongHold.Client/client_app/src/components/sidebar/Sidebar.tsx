import * as React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import { StrongHoldRoutes } from '../../routes';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import backgroundImage from '../../assests/img/sidebar-2.jpg';
import styles from './sidebarStyle';
import classNames from 'classnames';

interface Props {
    routes: StrongHoldRoutes;
}

const useStyles = makeStyles(styles);

const Sidebar: React.FC<Props> = ({ routes }) => {
    const activeRoute = (routeName: string) => {
        return window.location.href.indexOf(routeName) > -1;
    };

    const classes = useStyles();
    let listItemClasses;

    const links = (
        <List className={classes.list}>
            {routes.map((route, index, array) => {
                listItemClasses = classNames({
                    [' ' + classes.blue]: activeRoute(
                        route.layout + route.path
                    ),
                });

                return (
                    <NavLink
                        to={route.layout + route.path}
                        activeClassName="active"
                        key={index}
                        className={classes.item}
                    >
                        <ListItem
                            button
                            className={classes.itemLink + listItemClasses}
                        >
                            <route.icon className={classes.itemIcon} />
                            <ListItemText
                                className={classes.itemText}
                                primary={route.name}
                                disableTypography={true}
                            />
                        </ListItem>
                    </NavLink>
                );
            })}
        </List>
    );

    return (
        <>
            <Drawer variant="permanent" open>
                <div className={classes.sidebarWrapper}>{links}</div>
                <div
                    className={classes.background}
                    style={{ backgroundImage: 'url(' + backgroundImage + ')' }}
                />
            </Drawer>
        </>
    );
};

export default Sidebar;

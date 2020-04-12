import "./styles.scss"
import * as React from 'react';
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {StrongHoldRoutes} from "../../routes";
import {NavLink} from "react-router-dom";

interface Props {
    routes: StrongHoldRoutes
}

const Sidebar: React.FC<Props> = ({routes}) => {
    
    const links = (
        <List>
            {routes.map((route, index, array) => {
                return (
                    <NavLink
                        to={route.layout + route.path}
                        activeClassName="active"
                        key={index}
                    >
                        <ListItem button>
                            <route.icon/>
                            <ListItemText
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
            <Drawer className="drawer" variant="permanent" open>
                <div>{links}</div>
            </Drawer>
        </>
    )
};

export default Sidebar;
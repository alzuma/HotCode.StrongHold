import * as React from 'react';
import { StrongHoldRoutes } from '../../routes';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './navigationBarStyle';
import Button from '@material-ui/core/Button';
import NavigationTools from './NavigationTools';

interface Props {
    routes: StrongHoldRoutes;
}

const useStyles = makeStyles(styles);

const NavigationBar: React.FC<Props> = ({ routes }) => {
    const classes = useStyles();

    const makeBrand = () => {
        let name;
        routes.map((route) => {
            if (
                window.location.href.indexOf(route.layout + route.path) !== -1
            ) {
                name = route.name;
            }
            return null;
        });
        return name;
    };

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <div className={classes.flex}>
                    <Button href="#" className={classes.title}>
                        {makeBrand()}
                    </Button>
                </div>
                <NavigationTools />
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;

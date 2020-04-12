import * as React from 'react';
import styles from './navigationToolsStyle';
import { makeStyles } from '@material-ui/core/styles';
import CustomInput from '../custom-input/CustomInput';
import { Dashboard, Search } from '@material-ui/icons';
import RegularButton from '../custom-buttons/RegularButton';

const useStyles = makeStyles(styles);

const NavigationTools: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.searchWrapper}>
                <CustomInput
                    formControlProps={{
                        className: classes.margin + ' ' + classes.search,
                    }}
                    inputProps={{
                        placeholder: 'Search',
                        inputProps: {
                            'aria-label': 'Search',
                        },
                    }}
                />
                <RegularButton color="white" aria-label="edit" justIcon round>
                    <Search />
                </RegularButton>
            </div>
            <RegularButton
                color="transparent"
                aria-label="Dashboard"
                className={classes.buttonLink}
            >
                <Dashboard />
            </RegularButton>
        </div>
    );
};

export default NavigationTools;

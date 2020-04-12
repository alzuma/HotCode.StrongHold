import * as React from 'react';
import styles from './regularButtonStyles';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles(styles);

interface Props {
    color?: string;
    round?: any;
    children?: any;
    disabled?: any;
    simple?: any;
    size?: string;
    block?: any;
    link?: any;
    justIcon?: any;
    className?: any;
    muiClasses?: any;
    onClick?: any;
}

const RegularButton: React.FC<Props> = (props) => {
    const classes = useStyles();

    let {
        color,
        round,
        children,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        muiClasses,
        ...rest
    } = props;

    function getMapValue(obj: any, key: any) {
        if (obj.hasOwnProperty(key)) return obj[key];
    }

    const btnClasses = classNames({
        [classes.button]: true,
        [getMapValue(classes, size)]: size,
        [getMapValue(classes, color)]: color,
        [classes.round]: round,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className,
    });
    return (
        <Button {...rest} classes={muiClasses} className={btnClasses}>
            {children}
        </Button>
    );
};

export default RegularButton;

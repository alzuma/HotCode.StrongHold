import * as React from 'react';

import styles from './customInputStyle';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { Check, Clear } from '@material-ui/icons';

const useStyles = makeStyles(styles);

interface Props {
    labelText?: string;
    labelProps?: any;
    id?: string;
    inputProps?: any;
    formControlProps?: any;
    error?: boolean;
    success?: boolean;
}

const CustomInput: React.FC<Props> = (props) => {
    const classes = useStyles();

    const {
        formControlProps,
        labelText,
        id,
        labelProps,
        inputProps,
        error,
        success,
    } = props;

    const labelClasses = classNames({
        [' ' + classes.labelRootError]: error,
        [' ' + classes.labelRootSuccess]: success && !error,
    });
    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
    });
    const marginTop = classNames({
        [classes.marginTop]: labelText === undefined,
    });

    return (
        <FormControl
            {...formControlProps}
            className={formControlProps.className + ' ' + classes.formControl}
        >
            {labelText !== undefined ? (
                <InputLabel
                    className={classes.labelRoot + labelClasses}
                    htmlFor={id}
                    {...labelProps}
                >
                    {labelText}
                </InputLabel>
            ) : null}
            <Input
                classes={{
                    root: marginTop,
                    disabled: classes.disabled,
                    underline: underlineClasses,
                }}
                id={id}
                {...inputProps}
            />
            {error ? (
                <Clear
                    className={classes.feedback + ' ' + classes.labelRootError}
                />
            ) : success ? (
                <Check
                    className={
                        classes.feedback + ' ' + classes.labelRootSuccess
                    }
                />
            ) : null}
        </FormControl>
    );
};

export default CustomInput;

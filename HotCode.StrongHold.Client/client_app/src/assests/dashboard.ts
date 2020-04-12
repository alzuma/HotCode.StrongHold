export const whiteColor = '#FFF';
export const blackColor = '#000';

export const drawerWidth = 260;

export const primaryColor = ['#9c27b0', '#ab47bc', '#8e24aa', '#af2cc5'];
export const warningColor = ['#ff9800', '#ffa726', '#fb8c00', '#ffa21a'];
export const dangerColor = ['#f44336', '#ef5350', '#e53935', '#f55a4e'];
export const successColor = ['#4caf50', '#66bb6a', '#43a047', '#5cb860'];
export const infoColor = ['#00acc1', '#26c6da', '#00acc1', '#00d3ee'];
export const roseColor = ['#e91e63', '#ec407a', '#d81b60', '#eb3573'];
export const grayColor = [
    '#999',
    '#777',
    '#3C4858',
    '#AAAAAA',
    '#D2D2D2',
    '#DDD',
    '#b4b4b4',
    '#555555',
    '#333',
    '#a9afbb',
    '#eee',
    '#e7e7e7',
];

export const transition = {
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

export const container = {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
};

export const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 300,
    lineHeight: '1.5em',
};

export const hexToRgb = (input: any) => {
    input = input + '';
    input = input.replace('#', '');
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error('input is not a valid hex color.');
    }
    if (input.length === 3) {
        let first = input[0];
        let second = input[1];
        let last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
        parseInt(first, 16) +
        ', ' +
        parseInt(second, 16) +
        ', ' +
        parseInt(last, 16)
    );
};

export const defaultBoxShadow = {
    border: '0',
    borderRadius: '3px',
    boxShadow:
        '0 10px 20px -12px rgba(' +
        hexToRgb(blackColor) +
        ', 0.42), 0 3px 20px 0px rgba(' +
        hexToRgb(blackColor) +
        ', 0.12), 0 8px 10px -5px rgba(' +
        hexToRgb(blackColor) +
        ', 0.2)',
    padding: '10px 0',
    transition: 'all 150ms ease 0s',
};

export const primaryBoxShadow = {
    boxShadow:
        '0 4px 20px 0 rgba(' +
        hexToRgb(blackColor) +
        ',.14), 0 7px 10px -5px rgba(' +
        hexToRgb(primaryColor[0]) +
        ',.4)',
};

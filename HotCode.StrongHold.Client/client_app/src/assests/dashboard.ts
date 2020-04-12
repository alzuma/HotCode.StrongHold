export const whiteColor = "#FFF";
export const blackColor = "#000";

export const drawerWidth = 260;

export const infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];

export const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

export const container = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto"
};

export const defaultFont = {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    fontWeight: 300,
    lineHeight: "1.5em"
};

export const hexToRgb = (input:any) => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error("input is not a valid hex color.");
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
        ", " +
        parseInt(second, 16) +
        ", " +
        parseInt(last, 16)
    );
};

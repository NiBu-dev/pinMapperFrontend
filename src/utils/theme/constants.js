export const constantsDark = {
    themeCode: "0",
    primary_color: "#66fcf1",
    primary_color_rgb: "102, 252, 241",

    secondary_color: "#ff2768",
    supporting_blue: "#238587",
    cool_blue: "#00A1EC",
    cool_blue_rgb: "0, 161, 236",
    
    primary_gray: "#C5C6C7",
    background: "#2b2b2b",
    supporting_gray: "#303030",
    theme_support_background: "#383838",
    text_color: "#C5C6C7",
    text_color_rgb: "197, 198, 199",
    text_color_invert: "#d3d3d3",
    shadaow: "#6f6f6fa8",
    dim_text: "#888",
    text_color_over_primary: "#0B0C10",

    navigation_background: "rgba(255, 255, 255, 0.08);",
    header_background: "#303030",
    side_bar_background: "#676767",

    footer: "#303030",

    elevation_minus_01: "background: rgba(37, 37, 37, 1)",
    elevation_rgb: "255, 255, 255",
    elevation_01: " background: rgba(255, 255, 255, 0.05);",
    elevation_02: " background: rgba(255, 255, 255, 0.07);",
    elevation_03: " background: rgba(255, 255, 255, 0.08);",
    elevation_04: " background: rgba(255, 255, 255, 0.09);",
    elevation_06: " background: rgba(255, 255, 255, 0.11);",
    elevation_08: " background: rgba(255, 255, 255, 0.12);",
    elevation_12: " background: rgba(255, 255, 255, 0.14);",
    elevation_16: " background: rgba(255, 255, 255, 0.15);",
    elevation_24: " background: rgba(255, 255, 255, 0.16);",

    border_color_gray: "border-color:rgba(255, 255, 255, 0.09)",
    border_color_primary: "border-color: rgba(72, 157, 151, 0.30);",
    border_color_secondary: "border-color: rgba(245, 39, 103, 0.3);",
    box_shadow: "0 5px 20px 0 rgba(255, 255, 255, 0.15)",
    border(width) {
        return "border: " + width + " solid rgba(255, 255, 255, 0.09);";
    },
    borderTop(width) {
        return (
            "border-top: " + width + " solid rgba(255, 255, 255, 0.09);"
        );
    },
    borderBottom(width) {
        return (
            "border-bottom: " +
            width +
            " solid rgba(255, 255, 255, 0.09)"
        );
    },
    borderLeft(width) {
        return (
            "border-left: " +
            width +
            " solid rgba(255, 255, 255, 0.09);"
        );
    },
    borderRight(width) {
        return (
            "border-right: " +
            width +
            " solid rgba(255, 255, 255, 0.09);"
        );
    }
};

export default constantsDark;

import customThemeVars from "./custom-theme-vars.";
import { commonVars } from "./_common.";

const derived = {
  common: {
    ...commonVars,

    baseColor: "#fff",

    // primary color
    primaryColor: "#0052D9",
    primaryColorHover: "#266FE8",
    primaryColorPressed: "#0034B5",
    primarySuppl: "#266FE8",

    // info color
    infoColor: "#909399",
    infoColorHover: "#a6a9ad",
    infoColorPressed: "#82848a",
    infoSuppl: "#a6a9ad",

    // success color
    successColor: "#67c23a",
    successColorHover: "#85ce61",
    successColorPressed: "#5daf34",
    successSuppl: "#85ce61",

    // warning color
    warningColor: "#e6a23c",
    warningColorHover: "#ebb563",
    warningColorPressed: "#cf9236",
    warningSuppl: "#ebb563",

    // error color
    errorColor: "#f56c6c",
    errorColorHover: "#f78989",
    errorColorPressed: "#dd6161",
    errorSuppl: "#f78989",

    // text color
    textColorBase: "#000",
    textColor1: "rgb(31, 34, 37)",
    textColor2: "rgb(51, 54, 57)",
    textColor3: "rgb(118, 124, 130)",

    textColorDisabled: "rgba(194, 194, 194, 1)",
    placeholderColor: "rgba(194, 194, 194, 1)",
    placeholderColorDisabled: "rgba(209, 209, 209, 1)",

    iconColor: "rgba(194, 194, 194, 1)",
    iconColorHover: "rgba(146, 146, 146, 1)",
    iconColorPressed: "rgba(175, 175, 175, 1)",
    iconColorDisabled: "rgba(209, 209, 209, 1)",

    opacity1: "0.82",
    opacity2: "0.72",
    opacity3: "0.38",
    opacity4: "0.24",
    opacity5: "0.18",

    dividerColor: "rgb(239, 239, 245)",
    borderColor: "rgb(224, 224, 230)",

    // close
    closeIconColor: "rgba(102, 102, 102, 1)",
    closeIconColorHover: "rgba(102, 102, 102, 1)",
    closeIconColorPressed: "rgba(102, 102, 102, 1)",
    closeColorHover: "rgba(0, 0, 0, .09)",
    closeColorPressed: "rgba(0, 0, 0, .13)",

    // clear
    clearColor: "rgba(194, 194, 194, 1)",
    clearColorHover: "rgba(146, 146, 146, 1)",
    clearColorPressed: "rgba(175, 175, 175, 1)",

    // scrollbar
    scrollbarColor: "rgba(0, 0, 0, 0.25)",
    scrollbarColorHover: "rgba(0, 0, 0, 0.4)",
    scrollbarWidth: "8px",
    scrollbarHeight: "8px",
    scrollbarBorderRadius: "8px",

    progressRailColor: "rgba(235, 235, 235, 1)",
    railColor: "rgb(219, 219, 223)",

    popoverColor: "#fff",
    tableColor: "#fff",
    cardColor: "#fff",
    modalColor: "#fff",
    bodyColor: "#fff",
    tagColor: "#eee",
    avatarColor: "rgba(204, 204, 204, 1)",
    invertedColor: "rgb(0, 20, 40)",

    inputColor: "rgba(255, 255, 255, 1)",
    codeColor: "rgb(244, 244, 248)",
    tabColor: "rgb(247, 247, 250)",
    actionColor: "rgb(250, 250, 252)",
    tableHeaderColor: "rgb(250, 250, 252)",

    hoverColor: "rgb(243, 243, 245)",
    // use color with alpha since it can be nested with header filter & sorter effect
    tableColorHover: "rgba(0, 0, 100, 0.03)",
    tableColorStriped: "rgba(0, 0, 100, 0.02)",
    pressedColor: "rgb(237, 237, 239)",

    opacityDisabled: "0.5",
    inputColorDisabled: "rgb(250, 250, 252)",

    // secondary button color
    // can also be used in tertiary button & quaternary button
    buttonColor2: "rgba(46, 51, 56, .05)",
    buttonColor2Hover: "rgba(46, 51, 56, .09)",
    buttonColor2Pressed: "rgba(46, 51, 56, .13)"
  },
  Alert: { borderRadius: customThemeVars.borderRadiusLarge },
  Badge: { borderRadius: customThemeVars.borderRadiusLarge },
  Calendar: { borderRadius: customThemeVars.borderRadiusLarge },
  Card: { borderRadius: customThemeVars.borderRadiusLarge },
  Cascader: { menuBorderRadius: customThemeVars.borderRadiusLarge },
  ColorPicker: { borderRadius: customThemeVars.borderRadiusLarge },
  DataTable: { borderRadius: customThemeVars.borderRadiusLarge },
  DatePicker: {
    panelBorderRadius: customThemeVars.borderRadiusLarge,
    itemBorderRadius: customThemeVars.borderRadiusMiddle
  },
  Descriptions: { borderRadius: customThemeVars.borderRadiusLarge },
  Dialog: { contentMargin: "16px 0", borderRadius: customThemeVars.borderRadiusLarge },
  Drawer: { bodyPadding: "10px", footerPadding: "10px" },
  Dropdown: { borderRadius: customThemeVars.borderRadiusLarge },
  List: { borderRadius: customThemeVars.borderRadiusLarge },
  Menu: { borderRadius: customThemeVars.borderRadiusLarge },
  Notification: { borderRadius: customThemeVars.borderRadiusLarge },
  Popover: { nodeBorderRadius: commonVars.borderRadius },
  Table: { borderRadius: customThemeVars.borderRadiusLarge },
  Tabs: { tabBorderRadius: commonVars.borderRadius },
  TimePicker: { borderRadius: customThemeVars.borderRadiusLarge, itemBorderRadius: customThemeVars.borderRadiusMiddle },
  Tooltip: { nodeBorderRadius: commonVars.borderRadius },
  Transfer: { borderRadius: customThemeVars.borderRadiusLarge },
  Tree: { nodeBorderRadius: commonVars.borderRadius },
  Upload: { borderRadius: customThemeVars.borderRadiusLarge }
};

export default derived;

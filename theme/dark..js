import customThemeVars from "./custom-theme-vars.";
import { commonVars } from "./_common.";

const derived = {
  common: {
    ...commonVars,

    baseColor: "#000",

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
    textColorBase: "#fff",
    textColor1: "rgba(255, 255, 255, 0.9)",
    textColor2: "rgba(255, 255, 255, 0.82)",
    textColor3: "rgba(255, 255, 255, 0.52)",

    textColorDisabled: "rgba(255, 255, 255, 0.38)",
    placeholderColor: "rgba(255, 255, 255, 0.38)",
    placeholderColorDisabled: "rgba(255, 255, 255, 0.28)",

    iconColor: "rgba(255, 255, 255, 0.38)",
    iconColorHover: "rgba(255, 255, 255, 0.475)",
    iconColorPressed: "rgba(255, 255, 255, 0.3)",
    iconColorDisabled: "rgba(255, 255, 255, 0.28)",

    opacity1: "0.9",
    opacity2: "0.82",
    opacity3: "0.52",
    opacity4: "0.38",
    opacity5: "0.28",

    dividerColor: "rgba(255, 255, 255, 0.09)",
    borderColor: "rgba(255, 255, 255, 0.24)",

    // close
    closeIconColor: "rgba(255, 255, 255, 0.52)",
    closeIconColorHover: "rgba(255, 255, 255, 0.52)",
    closeIconColorPressed: "rgba(255, 255, 255, 0.52)",
    closeColorHover: "rgba(255, 255, 255, .12)",
    closeColorPressed: "rgba(255, 255, 255, .08)",

    // clear
    clearColor: "rgba(255, 255, 255, 0.38)",
    clearColorHover: "rgba(255, 255, 255, 0.48)",
    clearColorPressed: "rgba(255, 255, 255, 0.3)",

    // scrollbar
    scrollbarColor: "rgba(255, 255, 255, 0.2)",
    scrollbarColorHover: "rgba(255, 255, 255, 0.3)",
    scrollbarWidth: "5px",
    scrollbarHeight: "5px",
    scrollbarBorderRadius: "5px",

    progressRailColor: "rgba(255, 255, 255, 0.12)",
    railColor: "rgba(255, 255, 255, 0.2)",

    popoverColor: "rgb(72, 72, 78)",
    tableColor: "rgb(24, 24, 28)",
    cardColor: "rgb(24, 24, 28)",
    modalColor: "rgb(40, 44, 50)",
    bodyColor: "rgb(16, 16, 20)",
    tagColor: "rgba(51, 51, 51, 1)",
    avatarColor: "rgba(255, 255, 255, 0.18)",
    invertedColor: "#000",

    inputColor: "rgba(255, 255, 255, 0.1)",
    codeColor: "rgba(255, 255, 255, 0.12)",
    tabColor: "rgba(255, 255, 255, 0.04)",
    actionColor: "rgba(255, 255, 255, 0.06)",
    tableHeaderColor: "rgba(255, 255, 255, 0.06)",

    hoverColor: "rgba(255, 255, 255, 0.09)",
    // use color with alpha since it can be nested with header filter & sorter effect
    tableColorHover: "rgba(255, 255, 255, 0.06)",
    tableColorStriped: "rgba(255, 255, 255, 0.5)",
    pressedColor: "rgba(255, 255, 255, 0.5)",

    opacityDisabled: "0.38",
    inputColorDisabled: "rgba(255, 255, 255, 0.06)",

    // secondary button color
    // can also be used in tertiary button & quaternary button
    buttonColor2: "rgba(255, 255, 255, .08)",
    buttonColor2Hover: "rgba(255, 255, 255, .12)",
    buttonColor2Pressed: "rgba(255, 255, 255, .08)"
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

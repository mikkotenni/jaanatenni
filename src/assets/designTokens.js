/**
 * Colors
 * @type {Object}
 * @property {string} color1 - Very dark grayish blue
 * @property {string} color2 - Light grayish orange
 * @property {string} color3 - Grayish blue
 * @property {string} color4 - Light grayish orange
 * @property {string} color5 - Light grayish cyan
 * @property {string} fontColor - Font color
 * @property {string} backgroundColor - Background color
 * @property {string} tagColor - Tag color
 * @example
 * import { colors } from './src/assets/colors';
 */
export const colors = {
  color1: "#475e67", // Very dark grayish blue
  color3: "#a4b4be", // Grayish blue
  color4: "#dcc8bc", // Light grayish orange
  color2: "#eae1d0", // Light grayish orange
  color5: "#e0edee", // Light grayish cyan
  fontColor: "#2b2b2b",
  backgroundColor: "#fffdf9",
  tagColor: "#ffaf38",
};

/**
 * Breakpoints for responsive design. Extra small devices (mobile phones) are
 * up to 575px, small devices (small tablets and large phones) are up to 767px,
 * medium devices (tablets) are up to 991px, large devices (small laptops,
 * desktops) are up to 1199px, and extra large devices (large laptops, desktops)
 * are 1200px and above.
 * @type {Object}
 * @property {string} sm - Small devices
 * @property {string} md - Medium devices
 * @property {string} lg - Large devices
 * @property {string} xl - Extra large devices
 */
export const breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

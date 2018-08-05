/**
 * minContentSize - The minimum size the Content and Terminal component Panes can be.
 */
const minContentSize = 24;

/**
 * minContentValue (export) - A function that returns the minContentSize.
 *
 * @return {Function}
 */
export const minContentValue = () => minContentSize;

/**
 * splitValue (export) - A function that returns 50% to split the Content and Terminal Panes evenly.
 *
 * @return {Function}
 */
export const splitValue = () => '50%';

/**
 * minContentValue (export) - A function that returns the maximum size the content can be
 * based on the maxContentSize passed in as a param (via <App>).
 *
 * @return {Function}
 */
export const maxContentValue = (maxContentSize) => maxContentSize - minContentSize;

/**
* maximizeTerminal - A function that returns { terminalSize: minContentValue }.
*
* @return {Function}
*/
const maximizeTerminal = () => ({ terminalSize: minContentValue });

/**
* split - A function that returns { terminalSize: splitValue }.
*
* @return {Function}
*/
const split = () => ({ terminalSize: splitValue });

/**
 * minimizeTerminal - A function that returns { terminalSize: maxContentValue }.
 *
 * @return {Function}
 */
const minimizeTerminal = () => ({ terminalSize: maxContentValue });

/**
 * resizeCommands (export) - Returns resize Terminal commands that can be used to
 * update the Terminal/Content Pane sizes.
 *
 * @return {Object}
 */
export const resizeCommands = {
  maximize: maximizeTerminal,
  max: maximizeTerminal,

  minimize: minimizeTerminal,
  min: minimizeTerminal,

  split,
};

/**
 * resizeHelp - The help message for the resize commands.
 *
 * @return {String}
 */
export const resizeHelp = `max     Maximizes the terminal pane.
        Usage:  max
                maximize

min     Minimizes the terminal pane.
        Usage:  min
                minimize
                
split   Splits the terminal and content panes.
        Usage:  split`;
